import { toast } from 'sonner';

export const announceAiResponse = (response: string) => {
  const plainText = response.replace(/[*_`#]/g, '').replace(/\s+/g, ' ').trim();
  const summary = plainText.length > 220 ? `${plainText.slice(0, 217)}...` : plainText;
  const isArabic = /[\u0600-\u06FF]/.test(summary);

  toast.success(isArabic ? 'وصلك رد جديد من إسعفني' : 'You have a new reply from Es3efny', { description: summary });

  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(isArabic ? 'رد جديد من إسعفني' : 'New reply from Es3efny', {
      body: isArabic ? 'افتح الموقع لعرض الرد.' : 'Open the site to view the reply.',
    });
  }

  const notificationTone = new Audio('/universfield-new-notification-09-352705.mp3');
  notificationTone.volume = 0.5;
  void notificationTone.play().catch((error: unknown) => {
    console.warn('Could not play the AI response notification tone:', error);
  });
};
