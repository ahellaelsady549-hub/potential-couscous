import { Link } from 'react-router-dom';
import { Stethoscope, MessageCircle, UserRound, Dumbbell } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const ServiceShortcuts = () => {
  const { L } = useLanguage();
  const items = [
    { to: '/personal-diagnosis', icon: UserRound, t: L('شخصني', 'Assess me'), d: L('قيّم أعراضك واعرف خطوتك الجاية', 'Check symptoms and next steps') },
    { to: '/ask-me', icon: MessageCircle, t: L('اسألني', 'Ask me'), d: L('اسأل أي سؤال واحفظ محادثاتك', 'Ask anything, keep your chats') },
    { to: '/find-doctor', icon: Stethoscope, t: L('ابحث عن طبيب', 'Find a doctor'), d: L('أطباء موثّقين واستشارة خاصة', 'Verified doctors, private chat') },
    { to: '/gym', icon: Dumbbell, t: L('الجيم', 'Gym'), d: L('برامج تمارين وتغذية', 'Workout and nutrition plans') },
  ];
  return (
    <section id="services" aria-label={L('الخدمات', 'Services')} className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {items.map(({ to, icon: Icon, t, d }) => (
          <Link key={to} to={to} className="service-shortcut motion-surface flex flex-col gap-2 rounded-xl border border-border bg-card p-4 text-card-foreground hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
            <Icon className="h-6 w-6 text-primary" aria-hidden />
            <span className="font-bold">{t}</span>
            <span className="text-xs text-muted-foreground">{d}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};
