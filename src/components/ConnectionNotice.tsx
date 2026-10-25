import { useEffect, useState } from 'react';
import { WifiOff } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const ConnectionNotice = () => {
  const { L } = useLanguage();
  const [isOnline, setIsOnline] = useState(() => typeof navigator === 'undefined' || navigator.onLine);

  useEffect(() => {
    const updateConnection = () => setIsOnline(typeof navigator === 'undefined' || navigator.onLine);
    window.addEventListener('online', updateConnection);
    window.addEventListener('offline', updateConnection);
    return () => {
      window.removeEventListener('online', updateConnection);
      window.removeEventListener('offline', updateConnection);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div role="status" aria-live="polite" className="border-b border-amber-500/30 bg-amber-50 px-4 py-3 text-center text-sm text-amber-950 dark:bg-amber-950/30 dark:text-amber-100">
      <WifiOff className="me-2 inline-block h-4 w-4 align-[-2px]" aria-hidden />
      {L(
        'أنت غير متصل بالإنترنت. المحتوى الظاهر بالفعل قد يظل متاحاً، لكن التقييم والمحادثات والخرائط تحتاج اتصالاً. للطوارئ اتصل بـ 123.',
        'You are offline. Content already on screen may remain available, but assessments, chats, and maps need a connection. For emergencies, call 123.',
      )}
    </div>
  );
};
