import { useEffect, useRef } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { AlertTriangle, ArrowRight, ClipboardList, CalendarClock, Phone, Stethoscope } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { isAssessment } from '../../supabase/functions/ai-diagnosis/assessment';

export default function DiagnosisResults() {
  const { user, loading } = useAuth();
  const location = useLocation();
  const heading = useRef<HTMLHeadingElement>(null);
  const assessment: unknown = location.state?.assessment;
  useEffect(() => { heading.current?.focus(); window.scrollTo(0, 0); }, [loading]);
  if (loading) return <div className="min-h-screen flex items-center justify-center" role="status">جاري التحميل…</div>;
  if (!user) return <Navigate to="/auth" replace />;
  if (!isAssessment(assessment)) return <Navigate to="/personal-diagnosis" replace />;
  const urgent = assessment.urgency === 'emergency';

  return <div className="min-h-screen bg-background" dir="rtl">
    <Header />
    <main className="container mx-auto max-w-3xl px-4 py-8 space-y-8">
      <Button asChild variant="ghost"><Link to="/personal-diagnosis"><ArrowRight className="h-4 w-4 me-2" />العودة إلى شخصني</Link></Button>
      <header className="space-y-3">
        <p className="text-primary font-medium">شخصني</p>
        <h1 ref={heading} tabIndex={-1} className="text-3xl font-bold outline-none">نتيجة التقييم المبدئي</h1>
        <p className="text-muted-foreground leading-7">هذا تقييم مبدئي وليس تشخيصاً مؤكداً، ولا يغني عن فحص الطبيب.</p>
        <p className="leading-7 text-foreground">{assessment.summary}</p>
      </header>
      <section aria-labelledby="danger-title" className="border-s-4 border-destructive bg-destructive/10 p-5 space-y-4">
        <h2 id="danger-title" className="flex items-center gap-2 text-xl font-bold"><AlertTriangle className="h-5 w-5 text-destructive shrink-0" />علامات الخطر</h2>
        {urgent && <p role="alert" className="font-bold">الأعراض المذكورة قد تستدعي الطوارئ الآن. لا تنتظر موعداً أو تقييماً آخر.</p>}
        <ul className="list-disc ps-5 space-y-2 leading-7">{assessment.dangerSigns.map((item, i) => <li key={i}>{item}</li>)}</ul>
        <Button asChild variant="destructive"><a href="tel:123"><Phone className="h-4 w-4 me-2" />الإسعاف 123</a></Button>
      </section>
      <section aria-labelledby="next-title" className="space-y-4">
        <h2 id="next-title" className="flex items-center gap-2 text-xl font-bold"><ClipboardList className="h-5 w-5 text-primary shrink-0" />الخطوة التالية</h2>
        <ol className="list-decimal ps-6 space-y-3 leading-7">{assessment.nextSteps.map((item, i) => <li key={i}>{item}</li>)}</ol>
      </section>
      <section aria-labelledby="doctor-title" className="border-t pt-6 space-y-4">
        <h2 id="doctor-title" className="flex items-center gap-2 text-xl font-bold"><CalendarClock className="h-5 w-5 text-primary shrink-0" />متى تزور الطبيب؟</h2>
        <p className="font-semibold">{assessment.doctorVisit.timing}</p>
        <p className="leading-7">{assessment.doctorVisit.reason}</p>
        <h3 className="font-semibold">ما تخبر به الطبيب</h3>
        <ul className="list-disc ps-5 space-y-2 leading-7">{assessment.doctorVisit.preparation.map((item, i) => <li key={i}>{item}</li>)}</ul>
        {!urgent && <Button asChild><Link to="/find-doctor"><Stethoscope className="h-4 w-4 me-2" />ابحث عن طبيب</Link></Button>}
      </section>
      <p className="border-t pt-5 text-sm text-muted-foreground leading-7">{assessment.limitations}</p>
      <Button asChild variant="outline"><Link to="/personal-diagnosis">تقييم جديد</Link></Button>
    </main>
    <Footer />
  </div>;
}