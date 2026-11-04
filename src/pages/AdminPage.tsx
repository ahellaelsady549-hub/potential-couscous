import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, Check, X, FileText, Link as LinkIcon } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

type Doc = {
  id: string; full_name: string | null; email: string | null; specialty: string; bio: string | null;
  cv_url: string | null; portfolio_url: string | null; verification_status: string | null; is_verified: boolean | null;
  ai_cv_review: string | null; rejection_reason: string | null; reviewed_at: string | null; created_at: string;
};

const AdminPage = () => {
  const { user, loading } = useAuth();
  const { L } = useLanguage();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [docs, setDocs] = useState<Doc[]>([]);
  const [reasons, setReasons] = useState<Record<string, string>>({});

  const load = async () => {
    const { data } = await supabase.rpc('get_doctor_requests');
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
    const reason = (reasons[id] ?? '').trim();
    if (!approve && reason.length < 5) return toast.error(L('اكتب سبب الرفض', 'Write the rejection reason'));
    const { error } = await supabase.from('doctors').update({
      is_verified: approve,
      verification_status: approve ? 'approved' : 'rejected',
      rejection_reason: approve ? null : reason,
      reviewed_at: new Date().toISOString(),
    }).eq('id', id);
    if (error) return toast.error(L('تعذّر الحفظ', 'Could not save'));
    toast.success(approve ? L('تمت الموافقة', 'Approved') : L('تم الرفض', 'Rejected'));
    load();
  };

  if (loading) return null;
  if (!user) return <Navigate to="/auth" replace />;
  if (isAdmin === false) return <Navigate to="/" replace />;

  const pending = docs.filter((d) => !d.is_verified && d.verification_status !== 'rejected');
  const answered = docs.filter((d) => d.is_verified || d.verification_status === 'rejected');

  const renderCard = (d: Doc, actions: boolean) => (
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
        {d.email && <p><b>{L('البريد', 'Email')}:</b> {d.email}</p>}
        {d.bio && <p className="text-muted-foreground">{d.bio}</p>}
        <div className="rounded-md bg-muted p-3">
          <b>{L('تقرير الفحص المبدئي', 'Preliminary review report')}:</b>
          <p className="mt-1 whitespace-pre-wrap text-muted-foreground">{d.ai_cv_review || L('لا يوجد تقرير', 'No report')}</p>
        </div>
        {d.rejection_reason && <p className="text-destructive"><b>{L('سبب الرفض', 'Rejection reason')}:</b> {d.rejection_reason}</p>}
        {d.reviewed_at && <p className="text-muted-foreground">{L('تاريخ الرد', 'Reviewed')}: {new Date(d.reviewed_at).toLocaleString()}</p>}
        <div className="flex flex-wrap gap-2">
          {d.cv_url && <Button size="lg" variant="outline" onClick={() => openCv(d.cv_url!)}><FileText className="h-4 w-4 me-1" />{L('عرض السيرة الذاتية', 'View CV')}</Button>}
          {d.portfolio_url && <Button size="lg" variant="outline" onClick={() => window.open(d.portfolio_url!, '_blank')}><LinkIcon className="h-4 w-4 me-1" />{L('الرابط الإضافي', 'Extra link')}</Button>}
        </div>
        {actions && (
          <>
            <Textarea placeholder={L('سبب الرفض / ملاحظات', 'Rejection reason / notes')} value={reasons[d.id] ?? ''} onChange={(e) => setReasons({ ...reasons, [d.id]: e.target.value })} rows={2} />
            <div className="flex flex-wrap gap-2">
              <Button size="lg" onClick={() => decide(d.id, true)}><Check className="h-4 w-4 me-1" />{L('موافقة', 'Approve')}</Button>
              <Button size="lg" variant="destructive" onClick={() => decide(d.id, false)}><X className="h-4 w-4 me-1" />{L('رفض', 'Reject')}</Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24 max-w-4xl space-y-4">
        <h1 className="text-2xl font-bold">{L('لوحة الأدمن', 'Admin panel')}</h1>
        {isAdmin === null ? <Loader2 className="h-6 w-6 animate-spin mx-auto" /> : (
          <Tabs defaultValue="new">
            <TabsList className="grid w-full grid-cols-2 h-12">
              <TabsTrigger value="new">{L('طلبات جديدة', 'New requests')} ({pending.length})</TabsTrigger>
              <TabsTrigger value="done">{L('تم الرد عليها', 'Answered')} ({answered.length})</TabsTrigger>
            </TabsList>
            <TabsContent value="new" className="space-y-4">
              {pending.length === 0 ? <p className="text-muted-foreground">{L('لا توجد طلبات', 'No requests')}</p> : pending.map((d) => renderCard(d, true))}
            </TabsContent>
            <TabsContent value="done" className="space-y-4">
              {answered.length === 0 ? <p className="text-muted-foreground">{L('لا توجد طلبات', 'No requests')}</p> : answered.map((d) => renderCard(d, false))}
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  );
};

export default AdminPage;
