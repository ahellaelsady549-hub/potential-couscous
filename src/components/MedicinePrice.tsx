import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const MedicinePrice = ({
  price,
  verifiedAt,
  sourceUrl,
}: {
  price?: string;
  verifiedAt?: string;
  sourceUrl?: string;
}) => {
  const { L } = useLanguage();

  if (!price || !verifiedAt || !sourceUrl) {
    return (
      <p className="text-xs text-muted-foreground">
        {L('السعر الرسمي غير متحقق منه حاليًا', 'Official price not currently verified')}
      </p>
    );
  }

  return (
    <p className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
      <span>{L(`السعر الرسمي: ${price} جنيه (تحقق ${verifiedAt})`, `Official price: EGP ${price} (verified ${verifiedAt})`)}</span>
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
