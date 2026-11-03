import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export type MedicalSourceReference = { nameAr: string; nameEn: string; url: string };

export const MedicalSourceLinks = ({ sources }: { sources?: MedicalSourceReference[] }) => {
  const { L } = useLanguage();
  if (!sources?.length) return null;

  return (
    <div className="border-t border-border pt-3 text-xs">
      <p className="mb-1 font-medium">{L('مصادر موثوقة:', 'Trusted sources:')}</p>
      <ul className="space-y-1">
        {sources.map((source, index) => (
          <li key={`${source.url}-${index}`}>
            <a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
              <ExternalLink className="h-3 w-3 shrink-0" aria-hidden />
              {L(source.nameAr, source.nameEn)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
