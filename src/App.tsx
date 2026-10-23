import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { initializePushNotifications, requestWebNotificationPermission } from "@/services/pushNotifications";
import Index from "./pages/Index";
const About = lazy(() => import("./pages/About"));
const Auth = lazy(() => import("./pages/Auth"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const FindDoctor = lazy(() => import("./pages/FindDoctor"));
const Chat = lazy(() => import("./pages/Chat"));
const DietPlanPage = lazy(() => import("./pages/DietPlanPage"));
const PersonalityTestPage = lazy(() => import("./pages/PersonalityTestPage"));
const PersonalDiagnosis = lazy(() => import("./pages/PersonalDiagnosis"));
const DiagnosisResults = lazy(() => import("./pages/DiagnosisResults"));
const Install = lazy(() => import("./pages/Install"));
const Community = lazy(() => import("./pages/Community"));
const Gym = lazy(() => import("./pages/Gym"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const SettingsPage = lazy(() => import("./pages/Settings"));
const NutritionGoals = lazy(() => import("./pages/NutritionGoals"));
const Articles = lazy(() => import("./pages/Articles"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"));
import { BackToTop } from '@/components/BackToTop';
import { SiteGuideBot } from '@/components/SiteGuideBot';
import { TermsGate } from "@/components/TermsGate";
const NotFound = lazy(() => import("./pages/NotFound"));
const AskMePage = lazy(() => import("./pages/AskMePage"));

const queryClient = new QueryClient();

// Initialize push notifications
const initNotifications = async () => {
  await initializePushNotifications();
  await requestWebNotificationPermission();
};

initNotifications();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="route-enter">
      <Suspense fallback={<div className="flex min-h-screen items-center justify-center" role="status"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" /></div>}>
      <Routes location={location}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/diet-plan" element={<DietPlanPage />} />
        <Route path="/personality-test" element={<PersonalityTestPage />} />
        <Route path="/personal-diagnosis" element={<PersonalDiagnosis />} />
        <Route path="/personal-diagnosis/results" element={<DiagnosisResults />} />
        <Route path="/ask-me" element={<AskMePage />} />
        <Route path="/install" element={<Install />} />
        <Route path="/community" element={<Community />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/profile/:userId" element={<UserProfile />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/nutrition-goals" element={<NutritionGoals />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <TermsGate />
              <AnimatedRoutes />
              <BackToTop />
              <SiteGuideBot />
            </TooltipProvider>
          </AuthProvider>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
