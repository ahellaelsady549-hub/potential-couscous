import { Link, useLocation } from 'react-router-dom';
import { Home, Dumbbell, MessageCircle, Stethoscope, User, LogIn } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
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
  const { t, L } = useLanguage();
  const { user } = useAuth();
  const location = useLocation();
  const visibleTabs = user
    ? tabs
    : [
        tabs[0],
        tabs[1],
        { to: '/auth', labelKey: 'nav.login', icon: LogIn },
      ];

  return (
    <nav
      aria-label={L('التنقل الرئيسي', 'Main navigation')}
      className="fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <ul className="grid" style={{ gridTemplateColumns: `repeat(${visibleTabs.length}, minmax(0, 1fr))` }}>
        {visibleTabs.map((tab) => {
          const active = location.pathname === tab.to || (tab.to === '/auth' && location.pathname === '/auth');
          return (
            <li key={tab.to}>
              <Link
                to={tab.to}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'flex min-h-16 flex-col items-center justify-center gap-1 px-1 py-2 text-[10px] font-medium transition-colors hover:bg-muted/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-primary active:scale-95',
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
                <span className="truncate max-w-full">{t(tab.labelKey)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
