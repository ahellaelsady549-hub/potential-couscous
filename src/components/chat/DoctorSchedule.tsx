import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import { Trash2 } from 'lucide-react';

const DAYS_AR = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
const DAYS_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface Row { id: string; weekday: number; start_time: string; end_time: string }
interface Booking { id: string; starts_at: string; ends_at: string; status: string; user_id: string }

export function DoctorSchedule({ doctorId }: { doctorId: string }) {
  const { L } = useLanguage();
  const [rows, setRows] = useState<Row[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [weekday, setWeekday] = useState(0);
  const [start, setStart] = useState('09:00');
  const [end, setEnd] = useState('17:00');

  const load = async () => {
    const [{ data }, { data: b }] = await Promise.all([
      supabase.from('doctor_availability').select('id,weekday,start_time,end_time').eq('doctor_id', doctorId).order('weekday'),
      supabase.from('doctor_bookings').select('id,starts_at,ends_at,status,user_id').eq('doctor_id', doctorId).eq('status', 'confirmed').gte('ends_at', new Date().toISOString()).order('starts_at'),
    ]);
    setRows(data || []); setBookings(b || []);
  };
  useEffect(() => { load(); }, [doctorId]);

  const add = async () => {
    if (end <= start) { toast.error(L('وقت النهاية لازم يكون بعد البداية', 'End must be after start')); return; }
    const { error } = await supabase.from('doctor_availability').insert({ doctor_id: doctorId, weekday, start_time: start, end_time: end });
    if (error) toast.error(error.message); else load();
  };
  const remove = async (id: string) => { await supabase.from('doctor_availability').delete().eq('id', id); load(); };
  const cancel = async (id: string) => { await supabase.from('doctor_bookings').update({ status: 'cancelled' }).eq('id', id); load(); };

  return (
    <Card>
      <CardHeader><CardTitle>{L('ساعات العمل والجلسات', 'Working hours & sessions')}</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
          <select className="h-11 rounded-md border border-input bg-background px-3" value={weekday} onChange={(e) => setWeekday(Number(e.target.value))}>
            {DAYS_AR.map((d, i) => <option key={i} value={i}>{L(d, DAYS_EN[i])}</option>)}
          </select>
          <Input type="time" value={start} onChange={(e) => setStart(e.target.value)} className="h-11" />
          <Input type="time" value={end} onChange={(e) => setEnd(e.target.value)} className="h-11" />
          <Button onClick={add} className="h-11">{L('إضافة', 'Add')}</Button>
        </div>
        {rows.length === 0 ? <p className="text-sm text-muted-foreground">{L('لم تحدد ساعات عمل — المرضى لن يستطيعوا الحجز.', 'No hours set — patients cannot book.')}</p> : rows.map((r) => (
          <div key={r.id} className="flex items-center justify-between rounded-md border p-2 text-sm">
            <span>{L(DAYS_AR[r.weekday], DAYS_EN[r.weekday])}: {r.start_time.slice(0, 5)} – {r.end_time.slice(0, 5)}</span>
            <Button size="icon" variant="ghost" onClick={() => remove(r.id)} aria-label={L('حذف', 'Delete')}><Trash2 className="h-4 w-4" /></Button>
          </div>
        ))}
        <h3 className="font-semibold pt-2">{L('الجلسات القادمة', 'Upcoming sessions')}</h3>
        {bookings.length === 0 ? <p className="text-sm text-muted-foreground">{L('لا توجد جلسات', 'No sessions')}</p> : bookings.map((b) => (
          <div key={b.id} className="flex items-center justify-between rounded-md border p-2 text-sm">
            <span>{new Date(b.starts_at).toLocaleString('ar-EG', { weekday: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
            <Button size="sm" variant="outline" onClick={() => cancel(b.id)}>{L('إلغاء', 'Cancel')}</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
