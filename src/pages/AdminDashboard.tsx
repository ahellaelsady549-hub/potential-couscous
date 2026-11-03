import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ExternalLink, Loader2, LogOut, X } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { medicalSpecialties } from '@/data/specialties';
import { supabase } from '@/integrations/supabase/client';

interface DoctorApplication {
  id: string;
  user_id: string;
  specialty: string;
  bio: string | null;
  cv_url: string;
  created_at: string;
  cvSignedUrl: string;
  full_name: string | null;
  avatar_url: string | null;
}

const AdminDashboard = () => {
  const { user, loading, signOut } = useAuth();
  const { L } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCheckingRole, setIsCheckingRole] = useState(true);
  const [applications, setApplications] = useState<DoctorApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const loadApplications = useCallback(async () => {
    if (!user || !isAdmin) return;
    setIsLoading(true);
    try {
      const { data: doctors, error: doctorsError } = await supabase
        .from('doctors')
        .select('id, user_id, specialty, bio, cv_url, created_at')
        .eq('verification_status', 'pending')
        .not('cv_url', 'is', null)
        .order('created_at', { ascending: true });
      if (doctorsError) throw doctorsError;

      const userIds = (doctors || []).map((doctor) => doctor.user_id);
      const { data: profiles, error: profilesError } = userIds.length
        ? await supabase.from('profiles').select('user_id, full_name, avatar_url').in('user_id', userIds)
        : { data: [], error: null };
      if (profilesError) throw profilesError;

      const profileByUserId = new Map((profiles || []).map((profile) => [profile.user_id, profile]));
      const applicationsWithLinks = await Promise.all((doctors || []).map(async (doctor) => {
        const { data, error } = await supabase.storage
          .from('doctor-cvs')
          .createSignedUrl(doctor.cv_url!, 10 * 60);
        if (error) throw error;
        const profile = profileByUserId.get(doctor.user_id);
        return {
          ...doctor,
          cv_url: doctor.cv_url!,
          cvSignedUrl: data.signedUrl,
          full_name: profile?.full_name || null,
          avatar_url: profile?.avatar_url || null,
        };
      }));

      setApplications(applicationsWithLinks);
    } catch (error) {
      console.error('Error loading doctor applications:', error);
      toast({
        title: L('تعذر تحميل طلبات الأطباء', 'Could not load doctor applications'),
        description: error instanceof Error ? error.message : L('حدث خطأ أثناء تحميل الطلبات', 'An error occurred while loading applications'),
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }, [user, isAdmin, toast, L]);

  useEffect(() => {
    if (!loading && !user) navigate('/auth');
  }, [loading, user, navigate]);

  useEffect(() => {
    if (loading || !user) return;
    let active = true;

    const checkRole = async () => {
      const { data, error } = await supabase.rpc('has_role', {
        _user_id: user.id,
        _role: 'admin',
      });
      if (!active) return;
      if (error) {
        console.error('Error checking administrator role:', error);
        toast({
          title: L('تعذر التحقق من الصلاحيات', 'Could not verify access'),
          description: error.message,
          variant: 'destructive',
        });
        navigate('/dashboard');
      } else if (!data) {
        toast({
          title: L('غير مصرح', 'Access denied'),
          description: L('هذه الصفحة مخصصة للإدارة فقط', 'This page is for administrators only'),
          variant: 'destructive',
        });
        navigate('/dashboard');
      } else {
        setIsAdmin(true);
      }
      setIsCheckingRole(false);
    };

    void checkRole();
    return () => { active = false; };
  }, [loading, user, navigate, toast, L]);

  useEffect(() => {
    if (isAdmin) void loadApplications();
  }, [isAdmin, loadApplications]);

  const decideApplication = async (application: DoctorApplication, approved: boolean) => {
    setUpdatingId(application.id);
    const status = approved ? 'approved' : 'rejected';
    const { error } = await supabase
      .from('doctors')
      .update({ is_verified: approved, verification_status: status })
      .eq('id', application.id)
      .eq('verification_status', 'pending');

    if (error) {
      console.error('Error updating doctor application:', error);
      toast({
        title: L('تعذر تحديث الطلب', 'Could not update application'),
        description: error.message,
        variant: 'destructive',
      });
      setUpdatingId(null);
      return;
    }

    setApplications((current) => current.filter((item) => item.id !== application.id));
    toast({
      title: approved ? L('تمت الموافقة', 'Application approved') : L('تم رفض الطلب', 'Application rejected'),
      description: approved
        ? L('سيظهر الطبيب الآن في صفحة البحث عن طبيب.', 'The doctor will now appear in doctor search.')
        : L('تم تحديث حالة طلب الطبيب.', 'The application status has been updated.'),
    });
    setUpdatingId(null);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading || isCheckingRole || isLoading) {
    return <div className="flex min-h-screen items-center justify-center" role="status"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }
  if (!user || !isAdmin) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-5xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{L('لوحة الإدارة', 'Admin dashboard')}</h1>
            <p className="mt-1 text-muted-foreground">{L('مراجعة طلبات الأطباء قبل نشر ملفاتهم.', 'Review doctor applications before publishing their profiles.')}</p>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="me-2 h-4 w-4" />{L('تسجيل الخروج', 'Sign out')}
          </Button>
        </div>

        {applications.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              {L('لا توجد طلبات مكتملة بانتظار المراجعة.', 'There are no complete applications waiting for review.')}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {applications.map((application) => {
              const specialty = medicalSpecialties.find((item) => item.value === application.specialty);
              return (
                <Card key={application.id}>
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={application.avatar_url || ''} />
                          <AvatarFallback>{application.full_name?.charAt(0) || L('ط', 'D')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle>{application.full_name || L('طبيب متقدم', 'Doctor applicant')}</CardTitle>
                          <CardDescription>{specialty?.labelAr || application.specialty}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary">{L('بانتظار الموافقة', 'Pending review')}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {application.bio && <p className="whitespace-pre-line text-sm text-muted-foreground">{application.bio}</p>}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-4">
                      <a
                        href={application.cvSignedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary underline"
                      >
                        <ExternalLink className="h-4 w-4" />{L('عرض السيرة الذاتية (رابط مؤقت)', 'View CV (temporary link)')}
                      </a>
                      <div className="flex gap-2">
                        <Button variant="destructive" disabled={updatingId === application.id} onClick={() => void decideApplication(application, false)}>
                          {updatingId === application.id ? <Loader2 className="me-2 h-4 w-4 animate-spin" /> : <X className="me-2 h-4 w-4" />}
                          {L('رفض', 'Reject')}
                        </Button>
                        <Button disabled={updatingId === application.id} onClick={() => void decideApplication(application, true)}>
                          {updatingId === application.id ? <Loader2 className="me-2 h-4 w-4 animate-spin" /> : <Check className="me-2 h-4 w-4" />}
                          {L('موافقة', 'Approve')}
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {L('تاريخ التقديم: ', 'Submitted: ')}{new Date(application.created_at).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
