import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import { availableSlots, SLOT_MINUTES, type AvailabilityRow, type BookingRow } from '@/lib/sessions';
import { CalendarClock } from 'lucide-react';

interface Props { doctorId: string; userId: string; canBook: boolean; onBooked: () => void }

export function BookingPanel({ doctorId, userId, canBook, onBooked }: Props) {
  const { L } = useLanguage();
  const [availability, setAvailability] = useState<AvailabilityRow[]>([]);
  const [bookings, setBookings] = useState<BookingRow[]>([]);
  const [dayOffset, setDayOffset] = useState(0);
  const [busy, setBusy] = useState(false);

  const load = async () => {
    const [{ data: a }, { data: b }] = await Promise.all([
      supabase.from('doctor_availability').select('weekday,start_time,end_time').eq('doctor_id', doctorId),
      supabase.rpc('get_doctor_busy_slots', { _doctor_id: doctorId }),
    ]);
    setAvailability(a || []);
    setBookings((b as BookingRow[]) || []);
  };
  useEffect(() => { load(); }, [doctorId]);

  const days = useMemo(() => Array.from({ length: 7 }, (_, i) => { const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() + i); return d; }), []);
  const slots = availableSlots(days[dayOffset], availability, bookings);

  const book = async (s: Date) => {
    setBusy(true);
    const { error } = await supabase.from('doctor_bookings').insert({
      doctor_id: doctorId, user_id: userId, starts_at: s.toISOString(), ends_at: new Date(s.getTime() + SLOT_MINUTES * 60000).toISOString(),
    });
    setBusy(false);
    if (error) { toast.error(error.message); load(); return; }
    toast.success(L('تم حجز الجلسة', 'Session booked'));
    onBooked(); load();
  };

  return (
    <Card className="p-4 space-y-3">
      <div className="flex items-center gap-2 font-semibold"><CalendarClock className="h-5 w-5 text-primary" />{L('المحادثة مقفولة — احجز جلسة', 'Chat is closed — book a session')}</div>
      <p className="text-sm text-muted-foreground">{L('المحادثة بتفتح من بداية الجلسة لحد ساعة بعد نهايتها.', 'Chat opens at session start and closes one hour after it ends.')}</p>
      {!canBook ? null : availability.length === 0 ? (
        <p className="text-sm">{L('الطبيب لم يحدد ساعات عمل بعد.', 'The doctor has not set working hours yet.')}</p>
      ) : (
        <>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {days.map((d, i) => (
              <Button key={i} size="sm" variant={i === dayOffset ? 'default' : 'outline'} onClick={() => setDayOffset(i)} className="shrink-0">
                {d.toLocaleDateString('ar-EG', { weekday: 'short', day: 'numeric' })}
              </Button>
            ))}
          </div>
          {slots.length === 0 ? <p className="text-sm text-muted-foreground">{L('لا توجد مواعيد متاحة في هذا اليوم', 'No free slots this day')}</p> : (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {slots.map((s) => (
                <Button key={s.toISOString()} variant="outline" disabled={busy} onClick={() => book(s)} className="h-11">
                  {s.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}
                </Button>
              ))}
            </div>
          )}
        </>
      )}
    </Card>
  );
}
