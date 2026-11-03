import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, CheckCircle, Clock, FileText, Loader2, Upload } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { medicalSpecialties } from '@/data/specialties';
import { supabase } from '@/integrations/supabase/client';

interface DoctorApplicationData {
  id: string;
  specialty: string;
  bio: string | null;
  cv_url: string | null;
  is_verified: boolean | null;
  verification_status: string | null;
}

const DoctorApplication = () => {
  const { user, loading } = useAuth();
  const { L } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [application, setApplication] = useState<DoctorApplicationData | null>(null);
  const [specialty, setSpecialty] = useState('');
  const [bio, setBio] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate('/auth');
  }, [loading, user, navigate]);

  useEffect(() => {
    if (!user) return;

    const fetchApplication = async () => {
      const { data, error } = await supabase
        .from('doctors')
        .select('id, specialty, bio, cv_url, is_verified, verification_status')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) {
        console.error('Error loading doctor application:', error);
        toast({
          title: L('تعذر تحميل الطلب', 'Could not load application'),
          description: error.message,
          variant: 'destructive',
        });
      } else if (data) {
        setApplication(data);
        setSpecialty(data.specialty);
        setBio(data.bio || '');
      }
      setIsLoading(false);
    };

    void fetchApplication();
  }, [user, toast, L]);

  const submitApplication = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!user || application?.is_verified) return;

    if (!specialty || (!cvFile && !application?.cv_url)) {
      toast({
        title: L('بيانات ناقصة', 'Missing information'),
        description: L('اختر التخصص وارفع السيرة الذاتية بصيغة PDF', 'Choose a specialty and upload your CV as a PDF'),
        variant: 'destructive',
      });
      return;
    }

    if (cvFile && (
      !cvFile.name.toLowerCase().endsWith('.pdf')
      || (cvFile.type !== '' && cvFile.type !== 'application/pdf')
      || cvFile.size > 10 * 1024 * 1024
    )) {
      toast({
        title: L('ملف غير صالح', 'Invalid file'),
        description: L('ارفع ملف PDF لا يتجاوز حجمه 10 ميجابايت', 'Upload a PDF file no larger than 10 MB'),
        variant: 'destructive',
      });
      return;
    }

    setIsSaving(true);
    let uploadedPath: string | null = null;

    try {
      if (cvFile) {
        uploadedPath = `${user.id}/${crypto.randomUUID()}.pdf`;
        const { error: uploadError } = await supabase.storage
          .from('doctor-cvs')
          .upload(uploadedPath, cvFile, { contentType: 'application/pdf', upsert: false });
        if (uploadError) throw uploadError;
      }

      const { data, error } = await supabase
        .from('doctors')
        .upsert({
          user_id: user.id,
          specialty,
          bio: bio.trim() || null,
          cv_url: uploadedPath || application?.cv_url || null,
          is_verified: false,
          verification_status: 'pending',
        }, { onConflict: 'user_id' })
        .select('id, specialty, bio, cv_url, is_verified, verification_status')
        .single();

      if (error) throw error;

      setApplication(data);
      setCvFile(null);
      toast({
        title: L('تم إرسال الطلب', 'Application submitted'),
        description: L('أُرسلت سيرتك الذاتية للإدارة للمراجعة.', 'Your CV has been sent to the administrators for review.'),
      });
    } catch (error) {
      if (uploadedPath) {
        const { error: cleanupError } = await supabase.storage.from('doctor-cvs').remove([uploadedPath]);
        if (cleanupError) console.error('Could not clean up an unlinked CV:', cleanupError);
      }
      console.error('Error submitting doctor application:', error);
      toast({
        title: L('تعذر إرسال الطلب', 'Could not submit application'),
        description: error instanceof Error ? error.message : L('حدث خطأ أثناء حفظ الطلب', 'An error occurred while saving the application'),
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const status = application?.is_verified
    ? 'approved'
    : application?.verification_status || 'not_submitted';

  if (loading || isLoading) {
    return <div className="flex min-h-screen items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }
  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-3xl px-4 py-10">
        <Card>
          <CardHeader>
            <CardTitle>{L('طلب انضمام الأطباء', 'Doctor application')}</CardTitle>
            <CardDescription>
              {L('ارفع سيرتك الذاتية ليتمكن فريق الإدارة من مراجعتها. لن يظهر ملفك في البحث قبل الموافقة.', 'Upload your CV for administrator review. Your profile will not appear in doctor search before approval.')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-3 rounded-lg border p-4" role="status">
              {status === 'approved' ? <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" /> :
                status === 'pending' ? <Clock className="mt-0.5 h-5 w-5 text-amber-600" /> :
                  status === 'rejected' ? <AlertCircle className="mt-0.5 h-5 w-5 text-destructive" /> :
                    <FileText className="mt-0.5 h-5 w-5 text-primary" />}
              <div>
                <p className="font-medium">
                  {status === 'approved' ? L('تمت الموافقة على طلبك', 'Your application is approved') :
                    status === 'pending' ? L('طلبك قيد المراجعة', 'Your application is under review') :
                      status === 'rejected' ? L('لم تتم الموافقة على الطلب بعد؛ يمكنك تحديث السيرة وإعادة الإرسال.', 'The application was not approved; update your CV and resubmit.') :
                        L('لم ترسل طلبك بعد', 'Your application has not been submitted')}
                </p>
                {application?.cv_url && (
                  <p className="mt-1 text-sm text-muted-foreground">{L('تم حفظ ملف السيرة الذاتية بشكل خاص.', 'Your CV is stored privately.')}</p>
                )}
              </div>
            </div>

            {!application?.is_verified && (
              <form className="space-y-5" onSubmit={submitApplication}>
                <div className="space-y-2">
                  <Label>{L('التخصص الطبي', 'Medical specialty')}</Label>
                  <Select value={specialty} onValueChange={setSpecialty}>
                    <SelectTrigger><SelectValue placeholder={L('اختر التخصص', 'Choose a specialty')} /></SelectTrigger>
                    <SelectContent>
                      {medicalSpecialties.map((item) => (
                        <SelectItem key={item.value} value={item.value}>{item.labelAr}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor-bio">{L('نبذة مهنية', 'Professional bio')}</Label>
                  <Textarea id="doctor-bio" value={bio} onChange={(event) => setBio(event.target.value)} maxLength={1000} rows={4} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor-cv">{L('السيرة الذاتية (PDF، حتى 10 ميجابايت)', 'CV (PDF, up to 10 MB)')}</Label>
                  <Input
                    id="doctor-cv"
                    type="file"
                    accept="application/pdf,.pdf"
                    onChange={(event) => setCvFile(event.target.files?.[0] || null)}
                    required={!application?.cv_url}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSaving}>
                  {isSaving ? <Loader2 className="ms-2 h-4 w-4 animate-spin" /> : <Upload className="ms-2 h-4 w-4" />}
                  {status === 'rejected' ? L('إعادة إرسال الطلب', 'Resubmit application') : L('إرسال للمراجعة', 'Submit for review')}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorApplication;
