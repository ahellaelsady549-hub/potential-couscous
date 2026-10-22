import { MedicalSources } from '@/components/MedicalSources';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Activity, MapPin, Search } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

type Lfn = (ar: string, en: string) => string;

const openMapsSearch = (query: string, L: Lfn) => {
  toast.info(L('جاري تحديد موقعك...', 'Locating you...'));
  const open = (coords?: { lat: number; lng: number }) => {
    const url = coords
      ? `https://www.google.com/maps/search/${encodeURIComponent(query)}/@${coords.lat},${coords.lng},14z`
      : `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (!('geolocation' in navigator)) {
    open();
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      open({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      toast.success(L('تم فتح الخريطة', 'Map opened'));
    },
    () => {
      toast.error(L('تعذر تحديد موقعك، سيتم البحث بدون الموقع الحالي', 'Could not get your location; searching without it'));
      open();
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 },
  );
};

const facilities = [
  { label: 'أقرب مركز علاج طبيعي', labelEn: 'Nearest physiotherapy center', query: 'physiotherapy center near me' },
  { label: 'أخصائي علاج طبيعي', labelEn: 'Physiotherapist', query: 'physiotherapist near me' },
  { label: 'مركز تأهيل إصابات الملاعب', labelEn: 'Sports injury rehab center', query: 'sports injury rehabilitation center near me' },
  { label: 'علاج طبيعي للأطفال', labelEn: 'Pediatric physiotherapy', query: 'pediatric physiotherapy near me' },
  { label: 'علاج طبيعي منزلي', labelEn: 'Home physiotherapy', query: 'home physiotherapy service near me' },
  { label: 'عيادات عظام', labelEn: 'Orthopedic clinics', query: 'orthopedic clinic near me' },
];

const conditions = [
  {
    id: 'back', titleEn: 'Lower back pain & herniated disc', bodyEn: 'Relative rest (avoid long bed rest), core and abdominal strengthening, correct sitting posture, warm compresses, and avoid lifting with a bent back. Physiotherapy includes stretching, strengthening, manual and electrical therapy.',
    title: 'آلام أسفل الظهر والانزلاق الغضروفي',
    body: 'الراحة النسبية (لا راحة تامة طويلة)، تمارين تقوية عضلات الجذع والبطن، تصحيح الجلوس، كمادات دافئة، وتجنب رفع الأوزان بظهر منحني. العلاج الطبيعي يشمل تمارين الإطالة والتقوية والعلاج اليدوي والكهربائي.',
  },
  {
    id: 'neck', titleEn: 'Neck pain & poor posture', bodyEn: 'Set your screen at eye level, take a break every 30 minutes, do neck and shoulder stretches, and use a pillow of suitable height. Physiotherapy sessions relieve muscle spasm and improve range of motion.',
    title: 'آلام الرقبة والوضعية الخاطئة',
    body: 'اضبط ارتفاع الشاشة على مستوى العين، خذ راحة كل 30 دقيقة، تمارين إطالة الرقبة والكتف، ووسادة بارتفاع مناسب. جلسات العلاج الطبيعي تخفف التشنج العضلي وتحسن مدى الحركة.',
  },
  {
    id: 'knee', titleEn: 'ACL and meniscus injuries', bodyEn: 'Initial protocol: rest, ice, compression and elevation. Then gradual rehab of the quadriceps and hamstrings and balance training before returning to sport, under specialist supervision.',
    title: 'إصابات الرباط الصليبي والغضروف الهلالي',
    body: 'بروتوكول أولي: راحة، ثلج، ضغط، ورفع الساق. بعد ذلك تأهيل تدريجي لعضلات الفخذ الأمامية والخلفية وتحسين التوازن قبل العودة للرياضة، تحت إشراف أخصائي.',
  },
  {
    id: 'shoulder', titleEn: 'Shoulder tendinitis & frozen shoulder', bodyEn: 'Daily range-of-motion exercises (wall climb, pendulum), avoid painful overhead movements, plus ultrasound therapy and manual therapy.',
    title: 'التهاب أوتار الكتف والكتف المتجمد',
    body: 'تمارين مدى الحركة اليومية (تسلق الحائط، تمرين البندول)، تجنب الحركات فوق الرأس المؤلمة، مع علاج طبيعي بالموجات فوق الصوتية والعلاج اليدوي.',
  },
  {
    id: 'stroke', titleEn: 'Rehabilitation after stroke', bodyEn: 'Rehab starts early: balance and walking exercises, fine motor hand training, and speech therapy when needed. Daily consistency is the most important factor for improvement.',
    title: 'التأهيل بعد الجلطة الدماغية',
    body: 'يبدأ التأهيل مبكرًا: تمارين توازن ومشي، تدريب اليد على المهارات الدقيقة، وعلاج تخاطب عند الحاجة. الاستمرارية اليومية هي أهم عامل للتحسن.',
  },
  {
    id: 'post-op', titleEn: 'Rehab after surgery & fractures', bodyEn: 'Start by moving nearby joints to prevent stiffness, then gradual strengthening with light weights, progressing weight-bearing as instructed by the surgeon.',
    title: 'التأهيل بعد الجراحات والكسور',
    body: 'يبدأ بتحريك المفاصل المجاورة ومنع التيبس، ثم تقوية تدريجية بأوزان خفيفة، مع تدرج في تحميل الوزن حسب تعليمات الطبيب الجراح.',
  },
];

export const Physiotherapy = () => {
  const [city, setCity] = useState('');
  const { L } = useLanguage();

  return (
    <section id="physiotherapy" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Activity className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">{L('العلاج الطبيعي والتأهيل', 'Physiotherapy & Rehabilitation')}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {L('إرشادات عملية لأشهر حالات العلاج الطبيعي، مع البحث عن أقرب مركز أو أخصائي علاج طبيعي حولك.', 'Practical guidance for common physiotherapy conditions, plus a search for the nearest center or physiotherapist.')}
          </p>
        </div>

        <Card className="mx-auto mb-10 max-w-3xl shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <MapPin className="h-5 w-5 text-primary" />
              {L('البحث عن أقرب مرافق علاج طبيعي', 'Find nearby physiotherapy facilities')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              className="w-full gap-2 bg-gradient-medical"
              onClick={() => openMapsSearch('physiotherapy center near me', L)}
            >
              <MapPin className="h-4 w-4" />
              {L('ابحث من موقعي الحالي', 'Search from my location')}
            </Button>

            <div className="flex gap-2">
              <Input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder={L('مثال: أسوان، الجيزة، طنطا', 'e.g. Aswan, Giza, Tanta')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && city.trim()) openMapsSearch(`physiotherapy center ${city.trim()}`, L);
                }}
              />
              <Button
                variant="outline"
                className="gap-2"
                onClick={() =>
                  city.trim()
                    ? openMapsSearch(`physiotherapy center ${city.trim()}`, L)
                    : toast.error(L('اكتب اسم المدينة أو الحي', 'Enter a city or district'))
                }
              >
                <Search className="h-4 w-4" />
                {L('بحث', 'Search')}
              </Button>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {facilities.map((f) => (
                <Button
                  key={f.query}
                  variant="secondary"
                  className="justify-start gap-2"
                  onClick={() =>
                    openMapsSearch(city.trim() ? `${f.query.replace(' near me', '')} ${city.trim()}` : f.query, L)
                  }
                >
                  <MapPin className="h-4 w-4 text-primary" />
                  {L(f.label, f.labelEn)}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mx-auto max-w-3xl">
          <h3 className="mb-4 text-xl font-semibold">{L('أشهر الحالات وخطة التأهيل', 'Common conditions & rehab plan')}</h3>
          <Accordion type="single" collapsible className="space-y-3">
            {conditions.map((c) => (
              <AccordionItem key={c.id} value={c.id} className="rounded-lg border bg-background px-6 shadow-sm">
                <AccordionTrigger className="py-4 text-start hover:no-underline">
                  <span className="font-semibold">{L(c.title, c.titleEn)}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">{L(c.body, c.bodyEn)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-4 text-xs text-muted-foreground">
            {L('هذه إرشادات عامة ولا تُغني عن تقييم أخصائي علاج طبيعي أو طبيب عظام لحالتك.', 'This is general guidance and does not replace an assessment by a physiotherapist or orthopedic doctor.')}
          </p>
          <MedicalSources topic="physio" />
        </div>
      </div>
    </section>
  );
};
