import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { banExpiry, BAN_DURATIONS } from '@/lib/sessions';

interface Ban { id: string; target_user_id: string | null; conversation_id: string | null; reason: string | null; expires_at: string | null }
interface U { user_id: string; email: string | null; full_name: string | null }

export function ChatBansAdmin() {
  const { L } = useLanguage();
  const { user } = useAuth();
  const [users, setUsers] = useState<U[]>([]);
  const [bans, setBans] = useState<Ban[]>([]);
  const [email, setEmail] = useState('');
  const [conv, setConv] = useState('');
  const [reason, setReason] = useState('');
  const [dur, setDur] = useState<keyof typeof BAN_DURATIONS>('month');

  const load = async () => {
    const [{ data: u }, { data: b }] = await Promise.all([
      supabase.rpc('get_registered_users'),
      supabase.from('chat_bans').select('id,target_user_id,conversation_id,reason,expires_at').order('created_at', { ascending: false }),
    ]);
    setUsers((u as U[]) || []); setBans(b || []);
  };
  useEffect(() => { load(); }, []);

  const add = async () => {
    const target = email.trim() ? users.find((x) => x.email?.toLowerCase() === email.trim().toLowerCase()) : null;
    if (email.trim() && !target) { toast.error(L('الإيميل غير مسجل', 'Email not found')); return; }
    if (!target && !conv.trim()) { toast.error(L('اكتب إيميل أو رقم محادثة', 'Enter an email or conversation id')); return; }
    const { error } = await supabase.from('chat_bans').insert({
      target_user_id: target?.user_id ?? null, conversation_id: conv.trim() || null, reason: reason || null,
      expires_at: banExpiry(dur), created_by: user!.id,
    });
    if (error) toast.error(error.message); else { toast.success(L('تم الحظر', 'Banned')); setEmail(''); setConv(''); setReason(''); load(); }
  };
  const lift = async (id: string) => { await supabase.from('chat_bans').delete().eq('id', id); load(); };
  const label = (b: Ban) => b.target_user_id ? (users.find((u) => u.user_id === b.target_user_id)?.email ?? b.target_user_id) : `${L('محادثة', 'Chat')} ${b.conversation_id?.slice(0, 8)}`;

  return (
    <div className="space-y-4">
      <Card><CardContent className="pt-6 space-y-2">
        <Input placeholder={L('إيميل الطبيب أو المستخدم', 'Doctor or user email')} value={email} onChange={(e) => setEmail(e.target.value)} className="h-11" />
        <Input placeholder={L('أو رقم المحادثة (اختياري)', 'Or conversation id (optional)')} value={conv} onChange={(e) => setConv(e.target.value)} className="h-11" />
        <Input placeholder={L('السبب', 'Reason')} value={reason} onChange={(e) => setReason(e.target.value)} className="h-11" />
        <div className="grid grid-cols-3 gap-2">
          {(['month', 'year', 'forever'] as const).map((k) => (
            <Button key={k} variant={dur === k ? 'default' : 'outline'} onClick={() => setDur(k)} className="h-11">
              {k === 'month' ? L('شهر', 'Month') : k === 'year' ? L('سنة', 'Year') : L('نهائي', 'Forever')}
            </Button>
          ))}
        </div>
        <Button variant="destructive" onClick={add} className="w-full h-11">{L('حظر', 'Ban')}</Button>
      </CardContent></Card>
      {bans.map((b) => (
        <div key={b.id} className="flex items-center justify-between rounded-md border p-3 text-sm gap-2">
          <div><div className="font-medium">{label(b)}</div><div className="text-muted-foreground">{b.reason} · {b.expires_at ? new Date(b.expires_at).toLocaleDateString('ar-EG') : L('نهائي', 'Forever')}</div></div>
          <Button size="sm" variant="outline" onClick={() => lift(b.id)}>{L('رفع الحظر', 'Lift')}</Button>
        </div>
      ))}
    </div>
  );
}
