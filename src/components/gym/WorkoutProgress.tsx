import { useEffect, useMemo, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

type Log = { exercise_name: string; log_date: string; weight_kg: number | null; reps: number | null; sets: number | null };

export const WorkoutProgress = () => {
  const { user } = useAuth();
  const { L } = useLanguage();
  const [logs, setLogs] = useState<Log[]>([]);
  const [loading, setLoading] = useState(true);
  const [exercise, setExercise] = useState<string>('');

  useEffect(() => {
    if (!user) return;
    supabase.from('gym_workout_logs')
      .select('exercise_name, log_date, weight_kg, reps, sets')
      .eq('user_id', user.id).not('weight_kg', 'is', null)
      .order('log_date', { ascending: true })
      .then(({ data }) => {
        const rows = (data ?? []) as Log[];
        setLogs(rows);
        if (rows.length) setExercise(rows[rows.length - 1].exercise_name);
        setLoading(false);
      });
  }, [user]);

  const exercises = useMemo(() => Array.from(new Set(logs.map((l) => l.exercise_name))), [logs]);

  const series = useMemo(() => {
    const byDate = new Map<string, number>();
    logs.filter((l) => l.exercise_name === exercise).forEach((l) => {
      byDate.set(l.log_date, Math.max(byDate.get(l.log_date) ?? 0, Number(l.weight_kg)));
    });
    return Array.from(byDate, ([date, weight]) => ({ date: date.slice(5), weight }));
  }, [logs, exercise]);

  const latest = series[series.length - 1]?.weight ?? 0;
  const prev = series[series.length - 2]?.weight;
  const first = series[0]?.weight ?? 0;
  const best = series.reduce((m, p) => Math.max(m, p.weight), 0);
  const diff = prev !== undefined ? latest - prev : 0;
  const totalPct = first ? Math.round(((latest - first) / first) * 100) : 0;
  // Expected next week: observed weekly rate, clamped to the typical safe progressive-overload range (1–5%/week).
  const rows = logs.filter((l) => l.exercise_name === exercise);
  const days = rows.length > 1 ? (new Date(rows[rows.length - 1].log_date).getTime() - new Date(rows[0].log_date).getTime()) / 86400000 : 0;
  const observedWeekly = first && days >= 7 ? ((latest - first) / first) / (days / 7) : 0.025;
  const weeklyRate = Math.min(0.05, Math.max(0.01, observedWeekly));
  const expected = Math.round(latest * (1 + weeklyRate) * 2) / 2;

  if (loading) return <div className="flex justify-center py-10"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><TrendingUp className="h-5 w-5 text-primary" />{L('تطور الأوزان', 'Weight progress')}</CardTitle>
        <CardDescription>{L('سجّل أوزانك من صفحة الجيم وتابع تطورك هنا', 'Log your weights on the gym page and track progress here')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {exercises.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">{L('لا توجد أوزان مسجلة بعد', 'No weights logged yet')}</p>
        ) : (
          <>
            <Select value={exercise} onValueChange={setExercise}>
              <SelectTrigger className="w-full sm:w-72"><SelectValue /></SelectTrigger>
              <SelectContent>{exercises.map((e) => <SelectItem key={e} value={e}>{e}</SelectItem>)}</SelectContent>
            </Select>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <Stat label={L('آخر وزن', 'Latest')} value={`${latest} kg`} />
              <Stat label={L('أفضل وزن', 'Best')} value={`${best} kg`} />
              <Stat label={L('مقارنة بالمرة السابقة', 'vs last time')} value={`${diff > 0 ? '+' : ''}${diff} kg`}
                icon={diff > 0 ? <TrendingUp className="h-4 w-4 text-primary" /> : diff < 0 ? <TrendingDown className="h-4 w-4 text-destructive" /> : <Minus className="h-4 w-4" />} />
              <Stat label={L('التطور الكلي', 'Total change')} value={`${totalPct > 0 ? '+' : ''}${totalPct}%`} />
            </div>
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-3 text-sm">
              <div className="font-bold">{L('المتوقع خلال أسبوع', 'Expected in one week')}: {expected} kg (+{(weeklyRate * 100).toFixed(1)}%)</div>
              <div className="text-xs text-muted-foreground">{L('محسوب من معدل تطورك الفعلي، في حدود الزيادة الآمنة المعتادة 1–5% أسبوعيًا.', 'Based on your actual rate, kept within the usual safe 1–5% weekly increase.')}</div>
            </div>
            <div className="h-64 w-full" dir="ltr">
              <ResponsiveContainer>
                <LineChart data={series}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} unit="kg" />
                  <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }} />
                  <Line type="monotone" dataKey="weight" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

const Stat = ({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) => (
  <div className="rounded-lg bg-muted/50 p-3">
    <div className="text-xs text-muted-foreground">{label}</div>
    <div className="font-bold flex items-center justify-center gap-1">{icon}{value}</div>
  </div>
);
