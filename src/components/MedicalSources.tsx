import { BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type Source = { ar: string; en: string; url: string };

export const MEDICAL_SOURCES: Record<'mental' | 'physio', { reviewed: string; items: Source[] }> = {
  mental: {
    reviewed: '2026-10-16',
    items: [
      { ar: 'منظمة الصحة العالمية – الاضطرابات النفسية', en: 'WHO – Mental disorders', url: 'https://www.who.int/news-room/fact-sheets/detail/mental-disorders' },
      { ar: 'المعهد الوطني للصحة النفسية (NIMH) – موضوعات الصحة النفسية', en: 'NIMH – Mental health topics', url: 'https://www.nimh.nih.gov/health/topics' },
      { ar: 'هيئة الخدمات الصحية البريطانية (NHS) – الصحة النفسية', en: 'NHS – Mental health conditions', url: 'https://www.nhs.uk/mental-health/conditions/' },
      { ar: 'الجمعية الأمريكية للطب النفسي – ما هو المرض النفسي', en: 'American Psychiatric Association – What is mental illness', url: 'https://www.psychiatry.org/patients-families/what-is-mental-illness' },
    ],
  },
  physio: {
    reviewed: '2026-10-16',
    items: [
      { ar: 'منظمة الصحة العالمية – الحالات العضلية الهيكلية', en: 'WHO – Musculoskeletal health', url: 'https://www.who.int/news-room/fact-sheets/detail/musculoskeletal-conditions' },
      { ar: 'NHS – العلاج الطبيعي', en: 'NHS – Physiotherapy', url: 'https://www.nhs.uk/tests-and-treatments/physiotherapy/' },
      { ar: 'NHS – آلام أسفل الظهر', en: 'NHS – Back pain', url: 'https://www.nhs.uk/conditions/back-pain/' },
      { ar: 'الجمعية البريطانية لأخصائيي العلاج الطبيعي (CSP)', en: 'Chartered Society of Physiotherapy', url: 'https://www.csp.org.uk/conditions' },
    ],
  },
};

export const MedicalSources = ({ topic }: { topic: 'mental' | 'physio' }) => {
  const { L, language } = useLanguage();
  const data = MEDICAL_SOURCES[topic];
  const date = new Date(data.reviewed).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <aside className="mt-6 rounded-xl border bg-card p-4 text-sm">
      <h3 className="mb-1 flex items-center gap-2 font-semibold text-base">
        <BookOpen className="h-4 w-4 text-primary" aria-hidden />
        {L('المصادر الموثوقة', 'Trusted sources')}
      </h3>
      <p className="mb-3 text-xs text-muted-foreground">{L(`آخر مراجعة للمحتوى: ${date}`, `Content last reviewed: ${date}`)}</p>
      <ul className="space-y-2">
        {data.items.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:underline">
              <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {L(s.ar, s.en)}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
