import { Navigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AskMe } from '@/components/AskMe';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

const AskMePage = () => {
  const { user, loading } = useAuth();
  const { L } = useLanguage();

  if (loading) return (
    <div className="flex min-h-screen items-center justify-center bg-background" role="status" aria-label={L('جاري التحميل', 'Loading')}>
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
  if (!user) return <Navigate to="/auth" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-4xl px-4 py-6 sm:py-10">
        <AskMe standalone />
      </main>
      <Footer />
    </div>
  );
};

export default AskMePage;