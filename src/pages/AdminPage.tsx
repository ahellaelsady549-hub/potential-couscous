import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, Check, X, FileText } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

type Doc = { id: string; full_name: string | null; email: string | null; specialty: string; bio: string | null; cv_url: string | null; verification_status: string | null; is_verified: boolean | null; created_at: string };

const AdminPage = () => {
  const { user, loading } = useAuth();
  const { L } = useLanguage();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [docs, setDocs] = useState<Doc[]>([]);

  const load = async () => {
    const { data } = await supabase.rpc('get_pending_doctors');
    setDocs((data ?? []) as Doc[]);
  };

  useEffect(() => {
    if (!user) return;
    supabase.rpc('has_role', { _user_id: user.id, _role: 'admin' }).then(({ data }) => {
      setIsAdmin(Boolean(data));
      if (data) load();
    });
  }, [user]);

  const openCv = async (cv: string) => {
    if (cv.startsWith('storage:')) {
      const { data } = await supabase.storage.from('doctor-cvs').createSignedUrl(cv.slice(8), 600);
      if (data) window.open(data.signedUrl, '_blank');
    } else window.open(cv, '_blank');
  };

  const decide = async (id: string, approve: boolean) => {
    const { error } = await supabase.from('doctors').update({ is_verified: approve, verification_status: approve ? 'approved' : 'rejected' }).eq('id', id);
    if (error) return toast.error(L('تعذّر الحفظ', 'Could not save'));
    toast.success(approve ? L('تمت الموافقة', 'Approved') : L('تم الرفض', 'Rejected'));
    load();
  };

  if (loading) return null;
  if (!user) return <Navigate to="/auth" replace />;
  if (isAdmin === false) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24 max-w-4xl space-y-4">
        <h1 className="text-2xl font-bold">{L('لوحة الأدمن — طلبات الأطباء', 'Admin — doctor requests')}</h1>
        {isAdmin === null ? <Loader2 className="h-6 w-6 animate-spin mx-auto" /> : docs.length === 0 ? (
          <p className="text-muted-foreground">{L('لا توجد طلبات', 'No requests')}</p>
        ) : docs.map((d) => (
          <Card key={d.id}>
            <CardHeader className="pb-2">
              <CardTitle className="flex flex-wrap items-center gap-2 text-lg">
                {d.full_name || d.email}
                <Badge variant={d.is_verified ? 'default' : d.verification_status === 'rejected' ? 'destructive' : 'secondary'}>
                  {d.is_verified ? L('موافق عليه', 'Approved') : d.verification_status === 'rejected' ? L('مرفوض', 'Rejected') : L('قيد المراجعة', 'Pending')}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p><b>{L('التخصص', 'Specialty')}:</b> {d.specialty}</p>
              {d.bio && <p className="text-muted-foreground">{d.bio}</p>}
              <div className="flex flex-wrap gap-2">
                {d.cv_url && <Button size="lg" variant="outline" onClick={() => openCv(d.cv_url!)}><FileText className="h-4 w-4 me-1" />{L('عرض السيرة الذاتية', 'View CV')}</Button>}
                <Button size="lg" onClick={() => decide(d.id, true)}><Check className="h-4 w-4 me-1" />{L('موافقة', 'Approve')}</Button>
                <Button size="lg" variant="destructive" onClick={() => decide(d.id, false)}><X className="h-4 w-4 me-1" />{L('رفض', 'Reject')}</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
};

export default AdminPage;
