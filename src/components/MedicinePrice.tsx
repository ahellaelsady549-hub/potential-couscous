import { ExternalLink, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const MedicinePrice = ({
  searchTerm,
  price,
  packageDescription,
  sourceType,
  verifiedAt,
  sourceUrl,
}: {
  searchTerm?: string;
  price?: string;
  packageDescription?: string;
  sourceType?: 'official' | 'retail';
  verifiedAt?: string;
  sourceUrl?: string;
}) => {
  const { L } = useLanguage();

  if (!price || !packageDescription || !sourceType || !verifiedAt || !sourceUrl) {
    return (
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground">
          {L('السعر يتغير حسب التركيز وحجم العبوة والصيدلية', 'Price varies by strength, package size, and pharmacy')}
        </p>
        {searchTerm && (
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(`${searchTerm} سعر مصر صيدلية`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
          >
            <Search className="h-3 w-3" aria-hidden />
            {L('تحقق من سعر السوق المصري', 'Check the Egyptian market price')}
          </a>
        )}
      </div>
    );
  }

  return (
    <p className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
      <span>
        {sourceType === 'official'
          ? L(`السعر الرسمي لعبوة ${packageDescription}: ${price} جنيه (تحقق ${verifiedAt})`, `Official price for ${packageDescription}: EGP ${price} (verified ${verifiedAt})`)
          : L(`سعر السوق لعبوة ${packageDescription}: ${price} جنيه (تحقق ${verifiedAt})`, `Market price for ${packageDescription}: EGP ${price} (verified ${verifiedAt})`)}
      </span>
      <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
        <ExternalLink className="inline h-3 w-3" aria-hidden />
        <span className="sr-only">{L('مصدر السعر', 'Price source')}</span>
      </a>
    </p>
  );
};

export const MedicineUseNotice = () => {
  const { L } = useLanguage();

  return (
    <p className="text-xs text-muted-foreground">
      {L(
        'لا تبدأ دواءً أو تغيّر جرعته دون مراجعة الطبيب أو الصيدلي والنشرة المعتمدة.',
        'Do not start a medicine or change its dose without consulting a clinician or pharmacist and the approved leaflet.',
      )}
    </p>
  );
};
