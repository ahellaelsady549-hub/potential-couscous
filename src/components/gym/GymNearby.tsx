import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dumbbell, MapPin, Search } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

const quickSearches = [
  { ar: 'أقرب صالة رياضية (جيم)', en: 'Nearest gym', query: 'gym near me' },
  { ar: 'جيم للسيدات', en: 'Ladies gym', query: 'ladies gym near me' },
  { ar: 'جيم 24 ساعة', en: '24-hour gym', query: '24 hour gym near me' },
  { ar: 'مركز كروس فيت', en: 'CrossFit box', query: 'crossfit box near me' },
  { ar: 'حمام سباحة', en: 'Swimming pool', query: 'swimming pool near me' },
  { ar: 'ملاعب رياضية', en: 'Sports club', query: 'sports club near me' },
];

export const GymNearby = () => {
  const { L } = useLanguage();
  const [city, setCity] = useState('');

  const openMapsSearch = (query: string) => {
    toast.info(L('جاري تحديد موقعك...', 'Detecting your location...'));
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
        toast.error(L('تعذر تحديد موقعك، سيتم البحث بدون الموقع الحالي', 'Could not detect your location; searching without it'));
        open();
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 },
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Dumbbell className="h-5 w-5 text-primary" />
            {L('البحث عن أقرب صالة رياضية', 'Find the nearest gym')}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {L(
              'اسمح بالوصول لموقعك ليتم البحث عن أقرب جيم حولك على خرائط جوجل، أو اكتب اسم المدينة أو الحي للبحث فيه.',
              'Allow location access to find the closest gyms around you on Google Maps, or type a city or district to search there.',
            )}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button size="lg" className="h-14 w-full gap-2 bg-gradient-medical text-base font-bold shadow-lg active:scale-[0.98]" onClick={() => openMapsSearch('gym near me')}>
            <MapPin className="h-5 w-5" />
            {L('ابحث عن أقرب جيم من موقعي', 'Find gyms near my location')}
          </Button>

          <div className="flex gap-2">
            <Input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder={L('مثال: أسوان، مدينة نصر، الإسكندرية', 'e.g. Aswan, Nasr City, Alexandria')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && city.trim()) openMapsSearch(`gym ${city.trim()}`);
              }}
            />
            <Button
              variant="outline"
              className="h-11 shrink-0 gap-2"
              onClick={() => (city.trim() ? openMapsSearch(`gym ${city.trim()}`) : toast.error(L('اكتب اسم المدينة أو الحي', 'Type a city or district')))}
            >
              <Search className="h-4 w-4" />
              {L('بحث', 'Search')}
            </Button>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {quickSearches.map((q) => (
              <Button
                key={q.query}
                variant="secondary"
                className="h-12 justify-start gap-2 text-sm"
                onClick={() => openMapsSearch(city.trim() ? `${q.query.replace(' near me', '')} ${city.trim()}` : q.query)}
              >
                <MapPin className="h-4 w-4 text-primary" />
                {L(q.ar, q.en)}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{L('نصائح قبل اختيار الجيم', 'Tips before choosing a gym')}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
            <li>{L('اسأل عن وجود مدرب معتمد ومتابعة للأداء والإصابات.', 'Ask whether a certified coach follows up on performance and injuries.')}</li>
            <li>{L('تأكد من نظافة الأجهزة والتهوية ووجود صيانة دورية.', 'Check equipment hygiene, ventilation and regular maintenance.')}</li>
            <li>{L('اختر جيم قريب من البيت أو العمل لتلتزم بالمواعيد.', 'Pick a gym close to home or work so you stay consistent.')}</li>
            <li>{L('راجع المواعيد المزدحمة وتوفر أجهزة الكارديو والأوزان الحرة.', 'Check peak hours and the availability of cardio machines and free weights.')}</li>
            <li>{L('لو عندك مشكلة في المفاصل أو الظهر، استشر أخصائي علاج طبيعي قبل البدء.', 'If you have joint or back issues, consult a physiotherapist before starting.')}</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
