import { Heart, Facebook, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { L } = useLanguage();

  return (
    <footer id="site-footer" className="bg-gradient-medical text-white">
      <div className="container mx-auto px-4 py-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold tracking-tight">
                {L('إسعفني', 'Es3efny')}
              </h3>
            </div>
            <p className="text-white/85 text-xs leading-relaxed max-w-xs">
              {L('رفيقك الصحي لحياة أفضل — مساعدة طبية موثوقة في متناول يدك.', 'Your health companion for a better life — trusted medical help at your fingertips.')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-white">
              <Facebook className="h-4 w-4 opacity-80" />
              {L('تواصل معنا', 'Contact Us')}
            </h4>
            <a
              href="https://www.facebook.com/profile.php?id=61595491273159"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm text-white/85 transition-colors hover:text-white"
            >
              <Facebook className="h-4 w-4 opacity-80" />
              <span>{L('صفحتنا على فيسبوك', 'Our Facebook page')}</span>
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-white">
              <Smartphone className="h-4 w-4 opacity-80" />
              {L('تحميل التطبيق', 'Download the App')}
            </h4>
            <a
              href="/_es3efney_20322449.apk"
              download="_es3efney_20322449.apk"
              className="inline-flex items-center gap-2.5 rounded-lg bg-white/15 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white hover:bg-white/25 transition-all hover:scale-[1.03] active:scale-95"
            >
              <Smartphone className="h-4 w-4" />
              <span>{L('تحميل لأندرويد', 'Download for Android')}</span>
            </a>
          </div>
        </div>

        <div className="mt-7 pt-4 border-t border-white/15">
          <p className="text-center text-white/75 text-xs tracking-wide">
            © 2026 {L('جميع الحقوق محفوظة', 'All Rights Reserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};
