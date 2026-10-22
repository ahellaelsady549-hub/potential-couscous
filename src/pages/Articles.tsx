import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Newspaper, Clock } from 'lucide-react';
import { articles, localizeArticle } from '@/data/articles';
import { useLanguage } from '@/contexts/LanguageContext';

const TITLE = 'مقالات صحية موثوقة | إسعافات أولية وتغذية وتدريب - إسعفني';
const DESCRIPTION =
  'مقالات صحية مبسطة: الإسعافات الأولية، حساب السعرات والبروتين، مقارنة جداول التمارين، والصحة النفسية — بمحتوى عملي مناسب لمصر.';
const TITLE_EN = 'Trusted Health Articles | First Aid, Nutrition and Training - Es3efny';
const DESCRIPTION_EN = 'Clear health articles covering first aid, calories, protein, workout plans and mental health, with practical guidance for Egypt.';

const setMeta = (selector: string, attr: string, value: string, create: () => HTMLMetaElement | HTMLLinkElement) => {
  let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (!el) { el = create(); document.head.appendChild(el); }
  el.setAttribute(attr, value);
};

const Articles = () => {
  const { t, dir, L, language } = useLanguage();
  const pageTitle = L(TITLE, TITLE_EN);
  const pageDescription = L(DESCRIPTION, DESCRIPTION_EN);
  const localizedArticles = articles.map((article) => localizeArticle(article, language));

  useEffect(() => {
    document.title = pageTitle;
    setMeta('meta[name="description"]', 'content', pageDescription, () => {
      const m = document.createElement('meta'); m.setAttribute('name', 'description'); return m;
    });
    setMeta('link[rel="canonical"]', 'href', '/articles', () => {
      const l = document.createElement('link'); l.setAttribute('rel', 'canonical'); return l;
    });

    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.id = 'articles-ldjson';
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: pageTitle,
      itemListElement: localizedArticles.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://es3efny-health-helper.lovable.app/articles/${a.slug}`,
        name: a.title,
      })),
    });
    document.head.appendChild(ld);
    return () => { document.getElementById('articles-ldjson')?.remove(); };
  }, [language, pageDescription, pageTitle]);

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Header />
      <main className="container mx-auto px-4 py-8 animate-in fade-in duration-500">
        <nav aria-label="breadcrumb" className="mb-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">{t('nav.home')}</Link>
          <span className="mx-2">/</span>
          <span>{t('articles.title')}</span>
        </nav>

        <header className="mb-6">
          <h1 className="flex items-center gap-2 text-3xl font-bold bg-gradient-medical bg-clip-text text-transparent">
            <Newspaper className="h-7 w-7 text-primary" />
            {t('articles.title')}
          </h1>
          <p className="mt-2 max-w-3xl text-muted-foreground">{pageDescription}</p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {localizedArticles.map((a, index) => (
            <Link key={a.slug} to={`/articles/${a.slug}`} className="group motion-card" style={{ animationDelay: `${Math.min(index * 70, 350)}ms` }}>
              <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base leading-snug group-hover:text-primary">{a.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="line-clamp-3 text-sm text-muted-foreground">{a.description}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{a.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {L(`${a.readMinutes} دقائق`, `${a.readMinutes} min read`)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
