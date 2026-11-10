import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import {
  playAppointmentReminderSound,
  playMedicationReminderSound,
  playUpcomingAppointmentReminderSound,
  showReminderNotification,
} from '@/services/pushNotifications';

const MEDICATION_GRACE_PERIOD_MS = 60 * 1000;
const APPOINTMENT_GRACE_PERIOD_MS = 2 * 60 * 1000;
const POLL_INTERVAL_MS = 30 * 1000;

const getMedicationTimes = (value: string): string[] => {
  try {
    const parsed: unknown = JSON.parse(value);
    if (Array.isArray(parsed)) {
      return parsed.filter((time): time is string =>
        typeof time === 'string' && /^([01]\d|2[0-3]):[0-5]\d$/.test(time)
      );
    }
  } catch {
    // Older medication records contain one plain time.
  }
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(value) ? [value] : [];
};

const getNotificationPreferences = () => {
  const saved = localStorage.getItem('notification_preferences');
  if (!saved) return { medicationReminders: true, appointmentReminders: true };
  try {
    const value: unknown = JSON.parse(saved);
    if (typeof value !== 'object' || value === null) {
      return { medicationReminders: true, appointmentReminders: true };
    }
    const preferences = value as Record<string, unknown>;
    return {
      medicationReminders: preferences.medicationReminders !== false,
      appointmentReminders: preferences.appointmentReminders !== false,
    };
  } catch (error) {
    console.error('Unable to read notification preferences:', error);
    return { medicationReminders: true, appointmentReminders: true };
  }
};

const claimReminder = (key: string) => {
  const storageKey = `reminder_sent:${key}`;
  if (localStorage.getItem(storageKey)) return false;
  localStorage.setItem(storageKey, String(Date.now()));
  return true;
};

export const ReminderScheduler = () => {
  const { user } = useAuth();
  const { L } = useLanguage();

  useEffect(() => {
    if (!user || typeof window === 'undefined') return;
    let active = true;
    let checking = false;

    const checkReminders = async () => {
      if (checking) return;
      checking = true;
      try {
        const now = new Date();
        const preferences = getNotificationPreferences();
        const [{ data: medications, error: medicationError }, { data: appointments, error: appointmentError }] = await Promise.all([
          supabase.from('user_medications')
            .select('id,name,dosage,time')
            .eq('user_id', user.id)
            .eq('reminder_enabled', true),
          supabase.from('doctor_bookings')
            .select('id,starts_at')
            .eq('user_id', user.id)
            .eq('status', 'confirmed')
            .gte('starts_at', new Date(now.getTime() - APPOINTMENT_GRACE_PERIOD_MS).toISOString())
            .lte('starts_at', new Date(now.getTime() + 61 * 60 * 1000).toISOString()),
        ]);
        if (medicationError) throw medicationError;
        if (appointmentError) throw appointmentError;
        if (!active) return;

        if (preferences.medicationReminders) {
          for (const medication of medications ?? []) {
            for (const time of getMedicationTimes(medication.time)) {
              const [hours, minutes] = time.split(':').map(Number);
              const scheduledAt = new Date(now);
              scheduledAt.setHours(hours, minutes, 0, 0);
              const lateBy = now.getTime() - scheduledAt.getTime();
              if (lateBy < 0 || lateBy >= MEDICATION_GRACE_PERIOD_MS) continue;

              const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
              const reminderKey = `medication:${user.id}:${medication.id}:${date}:${time}`;
              if (!claimReminder(reminderKey)) continue;
              const title = L('تذكير بموعد الدواء 💊', 'Medication reminder 💊');
              const body = L(
                `حان موعد تناول ${medication.name} - ${medication.dosage}`,
                `It's time to take ${medication.name} - ${medication.dosage}`
              );
              await showReminderNotification(title, body, reminderKey);
              void playMedicationReminderSound().catch((error: unknown) => {
                console.error('Unable to play the medication reminder sound:', error);
              });
            }
          }
        }

        if (preferences.appointmentReminders) {
          for (const appointment of appointments ?? []) {
            const startsAt = new Date(appointment.starts_at);
            const reminderStages = [
              { offset: 60 * 60 * 1000, label: '1h', sound: playUpcomingAppointmentReminderSound },
              { offset: 30 * 60 * 1000, label: '30m', sound: playUpcomingAppointmentReminderSound },
              { offset: 0, label: 'now', sound: playAppointmentReminderSound },
            ];
            for (const stage of reminderStages) {
              const dueAt = new Date(startsAt.getTime() - stage.offset);
              const elapsed = now.getTime() - dueAt.getTime();
              if (elapsed < 0 || elapsed >= APPOINTMENT_GRACE_PERIOD_MS) continue;

              const reminderKey = `appointment:${user.id}:${appointment.id}:${stage.label}`;
              if (!claimReminder(reminderKey)) continue;
              const title = stage.label === 'now'
                ? L('حان موعد جلستك الطبية', 'Your medical appointment is now')
                : L('تذكير بموعد الطبيب', 'Doctor appointment reminder');
              const body = stage.label === 'now'
                ? L('موعد جلستك الطبية الآن.', 'Your medical appointment is starting now.')
                : L(`موعد الطبيب بعد ${stage.label === '1h' ? 'ساعة' : 'نصف ساعة'}.`, `Your doctor appointment is in ${stage.label === '1h' ? 'one hour' : '30 minutes'}.`);
              await showReminderNotification(title, body, reminderKey);
              void stage.sound().catch((error: unknown) => {
                console.error('Unable to play the appointment reminder sound:', error);
              });
            }
          }
        }
      } catch (error) {
        console.error('Unable to check medication and appointment reminders:', error);
      } finally {
        checking = false;
      }
    };

    void checkReminders();
    const intervalId = window.setInterval(() => void checkReminders(), POLL_INTERVAL_MS);
    return () => {
      active = false;
      window.clearInterval(intervalId);
    };
  }, [user, L]);

  return null;
};
