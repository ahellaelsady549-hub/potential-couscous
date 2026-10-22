import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DietPlan } from '@/components/DietPlan';

const DietPlanPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <DietPlan />
      </main>
      <Footer />
    </div>
  );
};

export default DietPlanPage;
