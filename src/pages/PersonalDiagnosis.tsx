import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Loader2, Stethoscope, Brain, Activity, AlertTriangle, ArrowLeft, ImagePlus, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { isAssessment } from '../../supabase/functions/ai-diagnosis/assessment';

const PersonalDiagnosis = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, loading: authLoading } = useAuth();
  const { L, language } = useLanguage();
  const [symptoms, setSymptoms] = useState('');
  const [symptomType, setSymptomType] = useState<'physical' | 'mental' | 'both'>('both');
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState('');
  const fileRef = React.useRef<HTMLInputElement>(null);

  /** Accepts images up to 100MB and downscales them locally before sending. */
  const handleImage = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({ title: L('خطأ','Error'), description: L('يرجى اختيار صورة صالحة','Please choose a valid image'), variant: 'destructive' });
      return;
    }
    if (file.size > 100 * 1024 * 1024) {
      toast({ title: L('خطأ','Error'), description: L('حجم الصورة يجب أن يكون أقل من 100 ميجابايت','Image must be smaller than 100 MB'), variant: 'destructive' });
      return;
    }
    try {
      const bitmap = await createImageBitmap(file);
      const scale = Math.min(1, 1280 / Math.max(bitmap.width, bitmap.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(bitmap.width * scale);
      canvas.height = Math.round(bitmap.height * scale);
      const context = canvas.getContext('2d');
      if (!context) { bitmap.close(); throw new Error('Canvas unavailable'); }
      context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      bitmap.close();
      setImage(canvas.toDataURL('image/jpeg', 0.8));
      setImageName(file.name);
    } catch {
      toast({ title: L('خطأ','Error'), description: L('تعذّر قراءة الصورة','Could not read the image'), variant: 'destructive' });
    }
  };

  useEffect(() => {
    if (!authLoading && !user) {
      toast({
        title: L("تسجيل الدخول مطلوب","Sign in required"),
        description: L("يرجى تسجيل الدخول للوصول إلى صفحة التشخيص الشخصي","Please sign in to use the personal assessment page"),
        variant: "destructive",
      });
      navigate('/auth');
    }
  }, [user, authLoading, navigate, toast]);

  const handleDiagnosis = async () => {
    if (!symptoms.trim() || symptoms.trim().length < 10) {
      toast({
        title: L("خطأ","Error"),
        description: L("يرجى وصف أعراضك بالتفصيل (10 أحرف على الأقل)","Describe your symptoms in detail (at least 10 characters)"),
        variant: "destructive",
      });
      return;
    }

    if (symptoms.length > 2000) {
      toast({
        title: L("خطأ","Error"),
        description: L("وصف الأعراض طويل جداً (الحد الأقصى 2000 حرف)","Symptom description is too long (2000 characters max)"),
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session?.access_token) {
        toast({
          title: L("خطأ","Error"),
          description: L("يرجى تسجيل الدخول مرة أخرى","Please sign in again"),
          variant: "destructive",
        });
        navigate('/auth');
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-diagnosis`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ symptoms: symptoms.trim(), symptomType, image, lang: language }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          toast({
            title: L("تم تجاوز الحد المسموح","Rate limit reached"),
            description: data.error || L("يرجى المحاولة لاحقاً","Please try again later"),
            variant: "destructive",
          });
        } else if (response.status === 402) {
          toast({
            title: L("خطأ في الخدمة","Service error"),
            description: L("يرجى المحاولة لاحقاً","Please try again later"),
            variant: "destructive",
          });
        } else {
          throw new Error(data.error || L('حدث خطأ أثناء التشخيص','Something went wrong during the assessment'));
        }
        return;
      }

      if (!isAssessment(data.assessment)) {
        throw new Error('تعذّر عرض تقييم منظم. يرجى المحاولة لاحقاً.');
      }
      navigate('/personal-diagnosis/results', { state: { assessment: data.assessment } });
    } catch (error) {
      console.error('Diagnosis error:', error);
      toast({
        title: L("خطأ","Error"),
        description: error instanceof Error ? error.message : L("حدث خطأ غير متوقع","Unexpected error"),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          {L('العودة للرئيسية','Back to home')}
        </Button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Stethoscope className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">شخصني</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {L('صف أعراضك بالتفصيل وسنحللها ونقدم تقييماً أولياً مع التوصيات المناسبة','Describe your symptoms in detail to get a preliminary assessment with suitable recommendations')}
          </p>
        </div>

        <Card className="mb-6 border-2">
          <CardHeader className="bg-amber-50 dark:bg-amber-950/20 border-b">
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
              <AlertTriangle className="h-5 w-5" />
              <CardTitle className="text-lg">{L('تنبيه مهم','Important notice')}</CardTitle>
            </div>
            <CardDescription className="text-amber-600 dark:text-amber-300">
              {L('هذا تقييم أولي ولا يغني عن زيارة الطبيب المتخصص. في حالات الطوارئ اتصل بالإسعاف: 123','This is a preliminary assessment and does not replace a specialist visit. In emergencies call the ambulance: 123')}
            </CardDescription>
            <p className="text-sm text-muted-foreground">
              {L(
                'لا تكتب اسمك أو رقم هاتفك أو عنوانك أو أي بيانات تعريفية. الوصف والصورة الاختيارية يُرسلان إلى خدمة التحليل لإعداد التقييم.',
                'Do not include your name, phone number, address, or other identifying details. Your description and optional image are sent to the assessment service.',
              )}
            </p>
            <Button asChild variant="destructive" size="sm" className="w-fit">
              <a href="tel:123">{L('اتصل بالإسعاف 123', 'Call ambulance 123')}</a>
            </Button>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              {L('وصف الأعراض','Symptom description')}
            </CardTitle>
            <CardDescription>
              {L('اختر نوع الأعراض ثم صفها بالتفصيل','Pick the symptom type, then describe it in detail')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label className="text-base font-medium">{L('نوع الأعراض','Symptom type')}</Label>
              <RadioGroup
                value={symptomType}
                onValueChange={(value) => setSymptomType(value as typeof symptomType)}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="physical" id="physical" />
                  <Label htmlFor="physical" className="flex items-center gap-2 cursor-pointer">
                    <Activity className="h-4 w-4 text-green-600" />
                    {L('أعراض جسدية','Physical symptoms')}
                  </Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="mental" id="mental" />
                  <Label htmlFor="mental" className="flex items-center gap-2 cursor-pointer">
                    <Brain className="h-4 w-4 text-purple-600" />
                    {L('أعراض نفسية','Mental symptoms')}
                  </Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="both" id="both" />
                  <Label htmlFor="both" className="flex items-center gap-2 cursor-pointer">
                    <Stethoscope className="h-4 w-4 text-primary" />
                    {L('كلاهما','Both')}
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label htmlFor="symptoms" className="text-base font-medium">
                {L('صف أعراضك بالتفصيل','Describe your symptoms in detail')}
              </Label>
              <Textarea
                id="symptoms"
                placeholder={L('مثال: أشعر بصداع شديد في الجانب الأيمن من الرأس منذ 3 أيام، مع غثيان وحساسية للضوء...','e.g. I have had a severe headache on the right side of my head for 3 days, with nausea and light sensitivity...')}
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="min-h-[150px] text-base"
                maxLength={2000}
              />
              <div className="text-sm text-muted-foreground text-left">
                {symptoms.length}/2000 {L('حرف','characters')}
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-base font-medium">{L('صورة للحالة (اختياري — حتى 100 ميجابايت)','Photo of the condition (optional — up to 100 MB)')}</Label>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImage(f); e.target.value = ''; }}
              />
              <Button variant="outline" className="h-12 w-full gap-2" onClick={() => fileRef.current?.click()}>
                <ImagePlus className="h-5 w-5" />
                {image ? L('تغيير الصورة','Change image') : L('إرفاق صورة','Attach image')}
              </Button>
              {image && (
                <div className="relative w-fit">
                  <img src={image} alt={imageName || L('الصورة المرفقة','Attached image')} className="max-h-48 rounded-lg border border-border" />
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute -top-2 -end-2 h-7 w-7 rounded-full"
                    onClick={() => { setImage(null); setImageName(''); }}
                    aria-label={L('حذف الصورة','Remove image')}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            <Button
              onClick={handleDiagnosis}
              disabled={isLoading || symptoms.trim().length < 10}
              className="w-full h-12 text-lg gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  {L('جاري التحليل...','Analyzing...')}
                </>
              ) : (
                <>
                  <Stethoscope className="h-5 w-5" />
                  {L('تحليل الأعراض','Analyze symptoms')}
                </>
              )}
            </Button>
          </CardContent>
        </Card>

      </main>

      <Footer />
    </div>
  );
};

export default PersonalDiagnosis;
