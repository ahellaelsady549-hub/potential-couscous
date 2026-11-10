import { PushNotifications } from '@capacitor/push-notifications';
import { Capacitor } from '@capacitor/core';
import { supabase } from '@/integrations/supabase/client';

export const initializePushNotifications = async () => {
  if (!Capacitor.isNativePlatform()) {
    console.log('Push notifications are only available on native platforms');
    return null;
  }

  try {
    // Request permission
    const permStatus = await PushNotifications.requestPermissions();
    
    if (permStatus.receive === 'granted') {
      // Register for push notifications
      await PushNotifications.register();
      
      // Listen for push token
      PushNotifications.addListener('registration', (token) => {
        console.log('Push registration success, token: ' + token.value);
        // Store token for later use (e.g., send to server)
        localStorage.setItem('push_token', token.value);
      });
      
      // Listen for registration errors
      PushNotifications.addListener('registrationError', (error) => {
        console.error('Error on registration: ' + JSON.stringify(error));
      });
      
      // Listen for push notifications received
      PushNotifications.addListener('pushNotificationReceived', (notification) => {
        console.log('Push notification received: ' + JSON.stringify(notification));
        // Handle notification display
        showLocalNotification(notification.title || '', notification.body || '');
      });
      
      // Listen for action performed on push notification
      PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
        console.log('Push notification action performed: ' + JSON.stringify(notification));
        // Handle notification tap - navigate to relevant page
        handleNotificationAction(notification.notification.data);
      });
      
      return true;
    } else {
      console.log('Push notification permission denied');
      return false;
    }
  } catch (error) {
    console.error('Error initializing push notifications:', error);
    return false;
  }
};

const handleNotificationAction = (value: unknown) => {
  if (!value || typeof value !== 'object') return;
  const data = value as Record<string, unknown>;
  // Handle different notification types
  if (data?.type === 'medication_reminder') {
    window.location.href = '/dashboard?tab=medications';
  } else if (data.type === 'new_message' && typeof data.conversationId === 'string') {
    window.location.href = `/chat/${data.conversationId}`;
  } else if (data?.type === 'doctor_verified') {
    window.location.href = '/dashboard';
  }
};

export const getPushToken = (): string | null => {
  return localStorage.getItem('push_token');
};

export const removePushNotificationListeners = async () => {
  if (Capacitor.isNativePlatform()) {
    await PushNotifications.removeAllListeners();
  }
};

// Schedule a local notification (useful for medication reminders)
export const scheduleMedicationReminder = async (
  medicationName: string,
  time: string,
  id: number
) => {
  if (!Capacitor.isNativePlatform()) {
    // For web, use the Notification API with setTimeout
    const [hours, minutes] = time.split(':').map(Number);
    const now = new Date();
    const reminderTime = new Date();
    reminderTime.setHours(hours, minutes, 0, 0);
    
    if (reminderTime <= now) {
      reminderTime.setDate(reminderTime.getDate() + 1);
    }
    
    const delay = reminderTime.getTime() - now.getTime();
    
    setTimeout(() => {
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('تذكير بالدواء 💊', {
          body: `حان موعد تناول ${medicationName}`,
          icon: '/favicon.ico',
          tag: `medication-${id}`
        });
      }
    }, delay);
    
    return;
  }
  
  // For native, we would use local notifications
  // This requires @capacitor/local-notifications package
  console.log(`Scheduled reminder for ${medicationName} at ${time}`);
};

export const requestWebNotificationPermission = async (): Promise<boolean> => {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications');
    return false;
  }
  
  if (Notification.permission === 'granted') {
    return true;
  }
  
  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  return false;
};

const vapidPublicKey = import.meta.env.VITE_WEB_PUSH_PUBLIC_KEY;

const decodeVapidKey = (key: string): Uint8Array => {
  const padding = '='.repeat((4 - key.length % 4) % 4);
  const base64 = (key + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = window.atob(base64);
  return Uint8Array.from(raw, (character) => character.charCodeAt(0));
};

export const registerWebPushSubscription = async (
  userId: string,
  preferences: { medicationReminders: boolean; appointmentReminders: boolean },
): Promise<void> => {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    throw new Error('هذا المتصفح لا يدعم إشعارات الخلفية.');
  }
  if (!vapidPublicKey) {
    throw new Error('إشعارات الخلفية غير مهيأة: أضف VITE_WEB_PUSH_PUBLIC_KEY إلى إعدادات الموقع.');
  }
  if (!(await requestWebNotificationPermission())) {
    throw new Error('لم يتم السماح بإشعارات المتصفح.');
  }

  const registration = await navigator.serviceWorker.register('/sw.js');
  const existingSubscription = await registration.pushManager.getSubscription();
  const subscription = existingSubscription ?? await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: decodeVapidKey(vapidPublicKey),
  });
  const payload = subscription.toJSON();
  if (!payload.endpoint || !payload.keys?.p256dh || !payload.keys.auth) {
    throw new Error('تعذر إنشاء اشتراك إشعارات صالح لهذا المتصفح.');
  }

  const { error } = await supabase.from('web_push_subscriptions').upsert({
    user_id: userId,
    endpoint: payload.endpoint,
    subscription: payload,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
    medication_reminders: preferences.medicationReminders,
    appointment_reminders: preferences.appointmentReminders,
  }, { onConflict: 'endpoint' });
  if (error) throw error;
};

export const updateWebPushPreferences = async (
  preferences: { medicationReminders: boolean; appointmentReminders: boolean },
): Promise<void> => {
  if (!('serviceWorker' in navigator)) return;
  const registration = await navigator.serviceWorker.getRegistration('/');
  const subscription = await registration?.pushManager.getSubscription();
  const endpoint = subscription?.endpoint;
  if (!endpoint) return;

  const { error } = await supabase.from('web_push_subscriptions').update({
    medication_reminders: preferences.medicationReminders,
    appointment_reminders: preferences.appointmentReminders,
  }).eq('endpoint', endpoint);
  if (error) throw error;
};

let medicationReminderAudio: HTMLAudioElement | null = null;
let upcomingAppointmentAudio: HTMLAudioElement | null = null;

export const playMedicationReminderSound = async (): Promise<void> => {
  if (!medicationReminderAudio) {
    medicationReminderAudio = new Audio(new URL('../components/medical_pager.mp3', import.meta.url).href);
    medicationReminderAudio.preload = 'auto';
    medicationReminderAudio.volume = 0.8;
  }

  medicationReminderAudio.currentTime = 0;
  await medicationReminderAudio.play();
};

export const playAppointmentReminderSound = playMedicationReminderSound;

export const playUpcomingAppointmentReminderSound = async (): Promise<void> => {
  if (!upcomingAppointmentAudio) {
    upcomingAppointmentAudio = new Audio('/freesound_community-shaking-pill-bottle-94736.mp3');
    upcomingAppointmentAudio.preload = 'auto';
    upcomingAppointmentAudio.volume = 0.8;
  }

  upcomingAppointmentAudio.currentTime = 0;
  await upcomingAppointmentAudio.play();
};

export const showReminderNotification = async (title: string, body: string, tag: string) => {
  if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return;

  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.getRegistration('/');
    if (registration) {
      await registration.showNotification(title, {
        body,
        icon: '/favicon.ico',
        tag,
        data: { url: window.location.origin },
      });
      return;
    }
  }

  new Notification(title, { body, icon: '/favicon.ico', tag });
};
