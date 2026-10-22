import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PersonalityTest } from '@/components/PersonalityTest';

const PersonalityTestPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <PersonalityTest />
      </main>
      <Footer />
    </div>
  );
};

export default PersonalityTestPage;
