import { Heart, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const TikTokIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16.5 3.5a5.5 5.5 0 0 1 0 11h2.5a5.5 5.5 0 0 1 0 11H16.5a5.5 5.5 0 0 1 0-11H19a5.5 5.5 0 0 1 0-11H16.5z" />
    <path d="M12 3.5v17" />
    <path d="M16.5 3.5h-4.5" />
  </svg>
);

export const Footer = () => {
  const { L } = useLanguage();
  const sections = [
    { to: '/#emergency', label: L('أرقام الطوارئ', 'Emergency numbers') },
    { to: '/#first-aid', label: L('الإسعافات الأولية', 'First aid') },
    { to: '/#treatments', label: L('العلاجات', 'Treatments') },
    { to: '/#mental-health', label: L('الصحة النفسية', 'Mental health') },
  ];
  const services = [
    { to: '/personal-diagnosis', label: L('شخصني', 'Check my symptoms') },
    { to: '/find-doctor', label: L('ابحث عن طبيب', 'Find a doctor') },
    { to: '/ask-me', label: L('اسألني', 'Ask me') },
    { to: '/articles', label: L('المقالات الصحية', 'Health articles') },
    { to: '/about', label: L('من نحن', 'About us') },
  ];

  return (
    <footer id="site-footer" className="bg-gradient-medical text-white">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid gap-8 border-b border-white/15 pb-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                <Heart className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold">
                {L('إسعفني', 'Es3efny')}
              </h3>
            </div>
            <p className="max-w-xs text-sm leading-7 text-white/80">
              {L('رفيقك الصحي لحياة أفضل — مساعدة طبية موثوقة في متناول يدك.', 'Your health companion for a better life — trusted medical help at your fingertips.')}
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-bold text-white">
              {L('أقسام الموقع', 'Explore')}
            </h4>
            <ul className="space-y-2.5">
              {sections.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-bold text-white">
              {L('خدماتنا', 'Services')}
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-bold text-white">
              {L('تواصل معنا', 'Contact us')}
            </h4>
            <div className="flex flex-col items-start gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61595491273159"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
                <span>{L('صفحتنا على فيسبوك', 'Our Facebook page')}</span>
              </a>
              <a
                href="https://www.instagram.com/es3efney/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                <span>{L('صفحتنا على إنستجرام', 'Our Instagram page')}</span>
              </a>
              <a
                href="https://www.tiktok.com/@es3efney"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <TikTokIcon />
                <span>{L('صفحتنا على تيك توك', 'Our TikTok page')}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <p className="text-center text-xs text-white/65">
            © 2026 {L('جميع الحقوق محفوظة', 'All Rights Reserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};
