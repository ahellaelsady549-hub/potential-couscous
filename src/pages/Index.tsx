
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ServiceShortcuts } from '@/components/ServiceShortcuts';

import { EmergencyNumbers } from '@/components/EmergencyNumbers';
import { FirstAid } from '@/components/FirstAid';
import { Treatments } from '@/components/Treatments';
import { MentalHealth } from '@/components/MentalHealth';
import { DailyTip } from '@/components/DailyTip';
import { DietPlan } from '@/components/DietPlan';
import { PersonalityTest } from '@/components/PersonalityTest';
import { LocationSearch } from '@/components/LocationSearch';
import { Physiotherapy } from '@/components/Physiotherapy';
import { SiteGuideBot } from '@/components/SiteGuideBot';
import { Footer } from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Index = () => {
  const { user } = useAuth();
  const location = useLocation();
  const root = useRef<HTMLDivElement>(null);
  useScrollReveal(root, Boolean(user));

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const timer = setTimeout(() => {
      const target = document.getElementById(id);
      if (!target) return;
      target.setAttribute('data-scroll-reveal', 'visible');
      target.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start',
      });
    }, 80);
    return () => clearTimeout(timer);
  }, [location.hash, location.key, user]);

  return (
    <div ref={root} className="home-content min-h-screen bg-background">
      <Header />
      <Hero />
      <ServiceShortcuts />
      <EmergencyNumbers />
      <FirstAid />
      <Treatments />
      <MentalHealth />
      <DailyTip />
      {user && <DietPlan />}
      {user && <PersonalityTest />}
      <Physiotherapy />
      <LocationSearch />
      <SiteGuideBot />
      <Footer />
    </div>
  );
};

export default Index;
