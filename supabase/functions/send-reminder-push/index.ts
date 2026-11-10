import { serve } from 'https://deno.land/std@0.190.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import webpush from 'npm:web-push@3.6.7';

type WebPushSubscription = {
  endpoint: string;
  keys: { p256dh: string; auth: string };
};

type ReminderSubscription = {
  id: string;
  user_id: string;
  subscription: WebPushSubscription;
  timezone: string;
  medication_reminders: boolean;
  appointment_reminders: boolean;
};

const jsonResponse = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const localDateAndTime = (date: Date, timeZone: string) => {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return {
    date: `${values.year}-${values.month}-${values.day}`,
    time: `${values.hour}:${values.minute}`,
  };
};

serve(async (request) => {
  if (request.method !== 'POST') return jsonResponse({ error: 'Method not allowed' }, 405);

  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  const authorization = request.headers.get('Authorization');
  if (!serviceRoleKey || authorization !== `Bearer ${serviceRoleKey}`) {
    return jsonResponse({ error: 'Unauthorized' }, 401);
  }

  const vapidPublicKey = Deno.env.get('VAPID_PUBLIC_KEY');
  const vapidPrivateKey = Deno.env.get('VAPID_PRIVATE_KEY');
  const vapidSubject = Deno.env.get('VAPID_SUBJECT');
  if (!vapidPublicKey || !vapidPrivateKey || !vapidSubject) {
    console.error('Web Push VAPID secrets are not configured.');
    return jsonResponse({ error: 'Web Push is not configured' }, 500);
  }

  webpush.setVapidDetails(vapidSubject, vapidPublicKey, vapidPrivateKey);
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    serviceRoleKey,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
  const now = new Date();
  const [{ data: subscriptions, error: subscriptionsError }, { data: medications, error: medicationsError }, { data: appointments, error: appointmentsError }] = await Promise.all([
    supabase.from('web_push_subscriptions')
      .select('id,user_id,subscription,timezone,medication_reminders,appointment_reminders'),
    supabase.from('user_medications')
      .select('id,user_id,name,dosage,time')
      .eq('reminder_enabled', true),
    supabase.from('doctor_bookings')
      .select('id,user_id,starts_at')
      .eq('status', 'confirmed')
      .gte('starts_at', new Date(now.getTime() - 2 * 60 * 1000).toISOString())
      .lte('starts_at', new Date(now.getTime() + 61 * 60 * 1000).toISOString()),
  ]);
  const queryError = subscriptionsError || medicationsError || appointmentsError;
  if (queryError) {
    console.error('Could not load reminder data for Web Push:', queryError);
    return jsonResponse({ error: 'Could not load reminder data' }, 500);
  }

  let sent = 0;
  let failed = 0;
  for (const subscription of (subscriptions ?? []) as ReminderSubscription[]) {
    const pending: { key: string; title: string; body: string }[] = [];

    if (subscription.medication_reminders) {
      const { date, time } = localDateAndTime(now, subscription.timezone || 'UTC');
      for (const medication of (medications ?? []).filter((item) => item.user_id === subscription.user_id)) {
        let times: unknown = medication.time;
        try {
          times = JSON.parse(medication.time);
        } catch {
          // Legacy medication rows store one plain time string.
        }
        const doseTimes = Array.isArray(times) ? times : [times];
        if (!doseTimes.includes(time)) continue;
        pending.push({
          key: `medication:${subscription.user_id}:${medication.id}:${date}:${time}`,
          title: 'تذكير بموعد الدواء 💊',
          body: `حان موعد تناول ${medication.name} - ${medication.dosage}`,
        });
      }
    }

    if (subscription.appointment_reminders) {
      for (const appointment of (appointments ?? []).filter((item) => item.user_id === subscription.user_id)) {
        const startsAt = new Date(appointment.starts_at);
        for (const stage of [
          { offset: 60 * 60 * 1000, key: '1h', body: 'موعد الطبيب بعد ساعة.' },
          { offset: 30 * 60 * 1000, key: '30m', body: 'موعد الطبيب بعد نصف ساعة.' },
          { offset: 0, key: 'now', body: 'حان موعد جلستك الطبية الآن.' },
        ]) {
          const dueAt = startsAt.getTime() - stage.offset;
          if (now.getTime() < dueAt || now.getTime() - dueAt >= 2 * 60 * 1000) continue;
          pending.push({
            key: `appointment:${subscription.user_id}:${appointment.id}:${stage.key}`,
            title: stage.key === 'now' ? 'حان موعد جلستك الطبية' : 'تذكير بموعد الطبيب',
            body: stage.body,
          });
        }
      }
    }

    for (const reminder of pending) {
      const { error: claimError } = await supabase.from('web_push_reminder_deliveries')
        .insert({ subscription_id: subscription.id, reminder_key: reminder.key });
      if (claimError?.code === '23505') continue;
      if (claimError) {
        console.error('Could not claim reminder delivery:', claimError);
        failed += 1;
        continue;
      }

      try {
        await webpush.sendNotification(subscription.subscription, JSON.stringify({
          title: reminder.title,
          body: reminder.body,
          tag: reminder.key,
          url: '/',
        }));
        sent += 1;
      } catch (error) {
        console.error('Could not send Web Push reminder:', error);
        failed += 1;
        const { error: releaseError } = await supabase.from('web_push_reminder_deliveries')
          .delete()
          .eq('subscription_id', subscription.id)
          .eq('reminder_key', reminder.key);
        if (releaseError) console.error('Could not release failed reminder delivery:', releaseError);
        const statusCode = (error as { statusCode?: number }).statusCode;
        if (statusCode === 404 || statusCode === 410) {
          const { error: subscriptionError } = await supabase.from('web_push_subscriptions')
            .delete()
            .eq('id', subscription.id);
          if (subscriptionError) console.error('Could not remove expired Web Push subscription:', subscriptionError);
        }
      }
    }
  }

  return jsonResponse({ sent, failed });
});
