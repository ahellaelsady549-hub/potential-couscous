import { MedicalSourceLinks } from '@/components/MedicalSourceLinks';
import type { MedicalSourceReference } from '@/components/MedicalSourceLinks';
import { useLanguage } from '@/contexts/LanguageContext';

export const ConditionCauses = ({
  causesAr,
  causesEn,
  sources,
}: {
  causesAr?: string[];
  causesEn?: string[];
  sources?: MedicalSourceReference[];
}) => {
  const { L, language } = useLanguage();
  const causes = language === 'ar' ? causesAr : causesEn;
  if (!causes?.length) return null;

  return (
    <section className="mt-4 border-t border-border pt-4">
      <h4 className="mb-2 text-sm font-medium">
        {L('الأسباب وعوامل الخطر المرتبطة:', 'Causes and associated risk factors:')}
      </h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {causes.map((cause, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>{cause}</span>
          </li>
        ))}
      </ul>
      <MedicalSourceLinks sources={sources} />
    </section>
  );
};
