import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { L } = useLanguage();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 400);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={L('الرجوع لأعلى الصفحة', 'Back to top')}
      className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-4 z-50 h-12 w-12 rounded-full shadow-lg md:bottom-6"
      size="icon"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};
