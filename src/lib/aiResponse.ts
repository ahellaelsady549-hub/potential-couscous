import { toast } from 'sonner';

export const announceAiResponse = (response: string) => {
  const plainText = response.replace(/[*_`#]/g, '').replace(/\s+/g, ' ').trim();
  const summary = plainText.length > 220 ? `${plainText.slice(0, 217)}...` : plainText;

  toast.success('وصلك رد جديد من إسعفني', { description: summary });

  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('رد جديد من إسعفني', { body: summary });
  }

  if ('speechSynthesis' in window && summary) {
    const utterance = new SpeechSynthesisUtterance(summary);
    utterance.lang = /[\u0600-\u06FF]/.test(summary) ? 'ar' : 'en';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }
};
