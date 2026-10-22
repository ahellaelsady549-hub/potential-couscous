import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell, Utensils, Video, LogIn, ExternalLink, MapPin } from 'lucide-react';
import { GymPrograms } from '@/components/gym/GymPrograms';
import { GymFood } from '@/components/gym/GymFood';
import { GymVideo } from '@/components/gym/GymVideo';
import { GymNearby } from '@/components/gym/GymNearby';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

const TITLE = 'الجيم والتغذية | جداول تمارين وتحليل الأكل بالذكاء الاصطناعي - إسعفني';
const DESCRIPTION =
  'جداول تمارين جاهزة (فُل بودي، أبر لوَر، برو سبليت، بوش بول ليج، أرنولد سبليت، PHUL، PHAT) مع تشيك تمارين اليوم، تحليل سعرات وبروتين ودهون الأكل من الصورة، واقتراح وجبات عالية البروتين وتحليل فيديو التمرين.';
const KEYWORDS =
  'جدول تمارين, ارنولد سبليت, بوش بول ليج, PHUL, PHAT, فل بودي, برو سبليت, حساب السعرات, تحليل الأكل بالصورة, بروتين, كمال أجسام, تحليل فيديو التمرين, دايت, تغذية رياضية';

const TITLE_EN = 'Gym & Nutrition | Workout plans and AI food analysis - Es3efny';
const DESCRIPTION_EN =
  'Ready-made workout splits (Full Body, Upper/Lower, Bro Split, Push Pull Legs, Arnold Split, PHUL, PHAT) with daily exercise check-off, calorie/protein/fat analysis from a food photo, high-protein meal ideas and workout form review.';

const setMeta = (selector: string, attr: string, value: string, create: () => HTMLMetaElement | HTMLLinkElement) => {
  let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (!el) { el = create(); document.head.appendChild(el); }
  el.setAttribute(attr, value);
};

const externalResources = [
  { labelAr: 'منظمة الصحة العالمية — النشاط البدني', labelEn: 'World Health Organization — Physical Activity', url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity' },
  { labelAr: 'قاعدة بيانات الأغذية USDA FoodData Central', labelEn: 'USDA FoodData Central', url: 'https://fdc.nal.usda.gov/' },
  { labelAr: 'الكلية الأمريكية للطب الرياضي (ACSM)', labelEn: 'American College of Sports Medicine (ACSM)', url: 'https://www.acsm.org/' },
  { labelAr: 'ExRx — مكتبة التمارين', labelEn: 'ExRx — Exercise Library', url: 'https://exrx.net/Lists/Directory' },
];

const GymPage = () => {
  const { user } = useAuth();
  const { L, language } = useLanguage();

  const title = L(TITLE, TITLE_EN);
  const description = L(DESCRIPTION, DESCRIPTION_EN);

  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', 'content', description, () => {
      const m = document.createElement('meta'); m.setAttribute('name', 'description'); return m;
    });
    setMeta('meta[name="keywords"]', 'content', KEYWORDS, () => {
      const m = document.createElement('meta'); m.setAttribute('name', 'keywords'); return m;
    });
    setMeta('meta[property="og:title"]', 'content', title, () => {
      const m = document.createElement('meta'); m.setAttribute('property', 'og:title'); return m;
    });
    setMeta('meta[property="og:description"]', 'content', description, () => {
      const m = document.createElement('meta'); m.setAttribute('property', 'og:description'); return m;
    });
    setMeta('link[rel="canonical"]', 'href', '/gym', () => {
      const l = document.createElement('link'); l.setAttribute('rel', 'canonical'); return l;
    });

    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.id = 'gym-ldjson';
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description: description,
      inLanguage: language,
      keywords: KEYWORDS,
    });
    document.head.appendChild(ld);
    return () => { document.getElementById('gym-ldjson')?.remove(); };
  }, [title, description, language]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 route-content">
        <nav aria-label={L('مسار التنقل','Breadcrumb')} className="mb-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">{L('الرئيسية','Home')}</Link>
          <span className="mx-2">/</span>
          <span>{L('الجيم والتغذية','Gym & Nutrition')}</span>
        </nav>

        <header className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-medical bg-clip-text text-transparent">
            {L('الجيم والتغذية','Gym & Nutrition')}
          </h1>
          <p className="mt-2 text-muted-foreground max-w-3xl">{description}</p>
        </header>

        {!user ? (
          <Card>
            <CardContent className="py-10 text-center space-y-4">
              <Dumbbell className="mx-auto h-10 w-10 text-primary" />
              <p>{L('سجّل الدخول للوصول لجداول التمارين وتحليل الأكل وتحليل فيديو التمرين.','Sign in to access workout plans, food analysis and workout form review.')}</p>
              <Button asChild>
                <Link to="/auth"><LogIn className="h-4 w-4 ms-2" />{L('تسجيل الدخول','Sign in')}</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="programs" className="w-full">
            <TabsList className="grid h-auto w-full grid-cols-2 gap-2 p-2 sm:grid-cols-4">
              <TabsTrigger value="programs" className="h-auto flex-col gap-1 py-3 text-sm font-semibold data-[state=active]:shadow-md sm:flex-row sm:py-2"><Dumbbell className="h-5 w-5" />{L('التمارين','Workouts')}</TabsTrigger>
              <TabsTrigger value="food" className="h-auto flex-col gap-1 py-3 text-sm font-semibold data-[state=active]:shadow-md sm:flex-row sm:py-2"><Utensils className="h-5 w-5" />{L('الأكل','Food')}</TabsTrigger>
              <TabsTrigger value="video" className="h-auto flex-col gap-1 py-3 text-sm font-semibold data-[state=active]:shadow-md sm:flex-row sm:py-2"><Video className="h-5 w-5" />{L('تحليل الفيديو','Video review')}</TabsTrigger>
              <TabsTrigger value="nearby" className="h-auto flex-col gap-1 py-3 text-sm font-semibold data-[state=active]:shadow-md sm:flex-row sm:py-2"><MapPin className="h-5 w-5" />{L('أقرب جيم','Nearby gyms')}</TabsTrigger>
            </TabsList>
            <TabsContent value="programs" className="mt-6"><GymPrograms /></TabsContent>
            <TabsContent value="food" className="mt-6"><GymFood /></TabsContent>
            <TabsContent value="video" className="mt-6"><GymVideo /></TabsContent>
            <TabsContent value="nearby" className="mt-6"><GymNearby /></TabsContent>
          </Tabs>
        )}

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-3">{L('مصادر ومراجع خارجية موثوقة','Trusted external resources')}</h2>
          <ul className="grid gap-2 md:grid-cols-2">
            {externalResources.map((r) => (
              <li key={r.url}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer external"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  {L(r.labelAr, r.labelEn)}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GymPage;
