import { Link, useLocation } from 'react-router-dom';
import { Home, Dumbbell, MessageCircle, Stethoscope, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const tabs = [
  { to: '/', labelKey: 'nav.home', icon: Home },
  { to: '/gym', labelKey: 'nav.gym', icon: Dumbbell },
  { to: '/personal-diagnosis', labelKey: 'nav.diagnose', icon: Stethoscope },
  { to: '/community', labelKey: 'nav.community', icon: MessageCircle },
  { to: '/dashboard', labelKey: 'nav.dashboard', icon: User },
];

/** App-like bottom tab bar (mobile only). */
export const BottomNav = () => {
  const { t } = useLanguage();
  const location = useLocation();

  return (
    <nav
      aria-label={t('nav.menu')}
      className="fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <ul className="grid grid-cols-5">
        {tabs.map((tab) => {
          const active = location.pathname === tab.to;
          return (
            <li key={tab.to}>
              <Link
                to={tab.to}
                className={cn(
                  'flex flex-col items-center gap-1 py-2 text-[10px] font-medium transition-colors active:scale-95',
                  active ? 'text-primary' : 'text-muted-foreground',
                )}
              >
                <span
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-full transition-colors',
                    active && 'bg-primary/10',
                  )}
                >
                  <tab.icon className="h-5 w-5" />
                </span>
                <span className="truncate max-w-[64px]">{t(tab.labelKey)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
