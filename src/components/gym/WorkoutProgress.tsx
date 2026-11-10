import { useEffect, useMemo, useState } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, TrendingUp } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

type Log = { exercise_name: string; log_date: string; weight_kg: number | null; reps: number | null; sets: number | null };
type ChartPoint = { date: string; actualWeight: number | null; expectedWeight: number | null };

const toDateKey = (date: string) => date.slice(0, 10);
const toUtcDay = (date: string) => Date.parse(`${date}T00:00:00Z`);
const addDays = (date: string, days: number) => {
  const next = new Date(toUtcDay(date));
  next.setUTCDate(next.getUTCDate() + days);
  return next.toISOString().slice(0, 10);
};

const getWeightScale = (values: number[]) => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const rawStep = (max - min) / 5 || Math.max(max * 0.1, 1);
  const magnitude = 10 ** Math.floor(Math.log10(rawStep));
  const normalizedStep = rawStep / magnitude;
  const step = (normalizedStep <= 1 ? 1 : normalizedStep <= 2 ? 2 : normalizedStep <= 5 ? 5 : 10) * magnitude;
  let lower = Math.floor(min / step) * step;
  let upper = Math.ceil(max / step) * step;
  if (lower === upper) {
    lower = Math.max(0, lower - step);
    upper += step;
  }
  const maxDigits = step < 1 ? Math.min(2, Math.ceil(-Math.log10(step))) : 0;
  const ticks = Array.from(
    { length: Math.round((upper - lower) / step) + 1 },
    (_, index) => Number((lower + index * step).toFixed(maxDigits + 2)),
  );

  return { domain: [lower, upper] as [number, number], ticks, maxDigits };
};

export const WorkoutProgress = () => {
  const { user } = useAuth();
  const { L, language } = useLanguage();
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

  const exercises = useMemo(() => Array.from(new Set(logs.map((log) => log.exercise_name))), [logs]);

  const series = useMemo(() => {
    const byDate = new Map<string, number>();
    logs.filter((log) => log.exercise_name === exercise).forEach((log) => {
      const date = toDateKey(log.log_date);
      byDate.set(date, Math.max(byDate.get(date) ?? 0, Number(log.weight_kg)));
    });
    return Array.from(byDate, ([date, weight]) => ({ date, weight })).sort((a, b) => a.date.localeCompare(b.date));
  }, [logs, exercise]);

  const latest = series[series.length - 1]?.weight ?? 0;
  const prev = series[series.length - 2]?.weight;
  const first = series[0]?.weight ?? 0;
  const best = series.reduce((max, point) => Math.max(max, point.weight), 0);
  const diff = prev !== undefined ? latest - prev : 0;
  const totalPct = first ? Math.round(((latest - first) / first) * 100) : 0;

  const projection = useMemo(() => {
    if (series.length < 2) return null;

    const recent = series.slice(-6);
    const origin = toUtcDay(recent[0].date);
    const points = recent.map((point) => ({
      day: (toUtcDay(point.date) - origin) / 86400000,
      weight: point.weight,
    }));
    const meanDay = points.reduce((sum, point) => sum + point.day, 0) / points.length;
    const meanWeight = points.reduce((sum, point) => sum + point.weight, 0) / points.length;
    const denominator = points.reduce((sum, point) => sum + (point.day - meanDay) ** 2, 0);
    if (denominator === 0) return null;

    const slopePerDay = points.reduce(
      (sum, point) => sum + (point.day - meanDay) * (point.weight - meanWeight),
      0,
    ) / denominator;

    return [7, 14, 21, 28].map((days) => ({
      date: addDays(series[series.length - 1].date, days),
      weight: Math.max(0, Math.round((latest + slopePerDay * days) * 10) / 10),
    }));
  }, [series, latest]);

  const chartData = useMemo<ChartPoint[]>(() => {
    const actualPoints = series.map((point) => ({
      date: point.date,
      actualWeight: point.weight,
      expectedWeight: null,
    }));
    if (!projection?.length || actualPoints.length === 0) return actualPoints;

    actualPoints[actualPoints.length - 1].expectedWeight = latest;
    return [
      ...actualPoints,
      ...projection.map((point) => ({
        date: point.date,
        actualWeight: null,
        expectedWeight: point.weight,
      })),
    ];
  }, [series, projection, latest]);

  const weightScale = useMemo(() => getWeightScale(
    chartData.flatMap((point) => [point.actualWeight, point.expectedWeight])
      .filter((value): value is number => value !== null),
  ), [chartData]);

  const previousTrend = diff > 0 ? 'up' : diff < 0 ? 'down' : 'flat';
  const totalTrend = totalPct > 0 ? 'up' : totalPct < 0 ? 'down' : 'flat';

  const formatDate = (date: string) => new Intl.DateTimeFormat(
    language === 'ar' ? 'ar-EG' : 'en',
    { month: 'short', day: 'numeric' },
  ).format(new Date(`${date}T00:00:00`));

  if (loading) return <div className="flex justify-center py-10"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><TrendingUp className="h-5 w-5 text-primary" />{L('تطور الأوزان', 'Weight progress')}</CardTitle>
        <CardDescription>{L('قارن أوزانك الفعلية مع تقدير الاتجاه خلال الأسابيع الأربعة القادمة', 'Compare your recorded weights with a four-week trend estimate')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {exercises.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">{L('لا توجد أوزان مسجلة بعد', 'No weights logged yet')}</p>
        ) : (
          <>
            <Select value={exercise} onValueChange={setExercise}>
              <SelectTrigger className="w-full sm:w-72"><SelectValue /></SelectTrigger>
              <SelectContent>{exercises.map((name) => <SelectItem key={name} value={name}>{name}</SelectItem>)}</SelectContent>
            </Select>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <Stat label={L('آخر وزن فعلي', 'Latest actual')} value={`${latest} kg`} trend="up" points={series.map((point) => point.weight)} />
              <Stat label={L('أفضل وزن مسجل', 'Best recorded')} value={`${best} kg`} trend="up" points={series.map((point) => point.weight)} />
              <Stat label={L('مقارنة بالمرة السابقة', 'vs last session')} value={`${diff > 0 ? '+' : ''}${diff} kg`}
                trend={previousTrend} points={series.slice(-6).map((point) => point.weight)} />
              <Stat label={L('التغير الكلي', 'Total change')} value={`${totalPct > 0 ? '+' : ''}${totalPct}%`}
                trend={totalTrend} points={series.map((point) => point.weight)} />
            </div>
            <div className="h-72 w-full" dir="ltr">
              <ResponsiveContainer>
                <LineChart data={chartData} margin={{ top: 12, right: 12, bottom: 4, left: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={formatDate}
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    minTickGap={24}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    unit=" kg"
                    width={58}
                    domain={weightScale.domain}
                    ticks={weightScale.ticks}
                    tickFormatter={(value: number) => value.toFixed(weightScale.maxDigits)}
                    allowDecimals
                  />
                  <Tooltip
                    labelFormatter={(label) => formatDate(String(label))}
                    formatter={(value: number | string, name: string) => [
                      `${Number(value).toFixed(1)} kg`,
                      name === 'actualWeight' ? L('الوزن الفعلي', 'Actual weight') : L('التقدير', 'Estimate'),
                    ]}
                    contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                  />
                  <Legend
                    formatter={(value) => value === 'actualWeight' ? L('الوزن الفعلي', 'Actual weight') : L('التقدير', 'Estimate')}
                  />
                  <Line
                    type="monotone"
                    dataKey="actualWeight"
                    name="actualWeight"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    connectNulls
                  />
                  <Line
                    type="monotone"
                    dataKey="expectedWeight"
                    name="expectedWeight"
                    stroke="hsl(var(--destructive))"
                    strokeWidth={2}
                    strokeDasharray="6 4"
                    dot={{ r: 3 }}
                    connectNulls
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            {projection ? (
              <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm">
                <div className="font-bold">
                  {L('التقدير بعد 4 أسابيع', 'Four-week estimate')}: {projection[projection.length - 1].weight} kg
                </div>
                <div className="text-xs text-muted-foreground">
                  {L('تقدير اتجاه حسابي مبني على آخر 6 تسجيلات، وليس هدفًا أو ضمانًا للنتيجة.', 'A trend estimate based on your last 6 logs, not a goal or a guaranteed result.')}
                </div>
              </div>
            ) : (
              <p className="text-center text-sm text-muted-foreground">
                {L('سجّل أوزانًا في يومين مختلفين لعرض التقدير المتوقع.', 'Log weights on two different days to see the trend estimate.')}
              </p>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

const Stat = ({
  label,
  value,
  trend,
  points,
}: {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'flat';
  points: number[];
}) => {
  const trendColor = trend === 'up'
    ? 'text-emerald-600 dark:text-emerald-400'
    : trend === 'down'
      ? 'text-destructive'
      : 'text-muted-foreground';
  const sparkline = points.slice(-8).map((point, index, visiblePoints) => {
    const x = visiblePoints.length === 1 ? 50 : (index / (visiblePoints.length - 1)) * 100;
    const y = 24 - ((point - Math.min(...visiblePoints)) / (Math.max(...visiblePoints) - Math.min(...visiblePoints) || 1)) * 20;
    return `${x},${y}`;
  }).join(' ');
  const lastPointX = points.length === 1 ? 50 : 100;
  const visiblePoints = points.slice(-8);
  const visibleRange = Math.max(...visiblePoints) - Math.min(...visiblePoints) || 1;
  const lastPointY = 24 - ((visiblePoints[visiblePoints.length - 1] - Math.min(...visiblePoints)) / visibleRange) * 20;

  return (
  <div className="rounded-lg border bg-muted/30 p-3">
    <div className="text-xs text-muted-foreground">{label}</div>
    <div className={`mt-1 flex items-center justify-center gap-1 font-bold ${trendColor}`}>
      <StockArrow trend={trend} />
      {value}
    </div>
    <svg viewBox="0 0 100 28" className={`mt-2 h-7 w-full ${trendColor}`} role="img" aria-label={label}>
      <polyline points={sparkline} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={lastPointX} cy={lastPointY} r="2.5" fill="currentColor" />
    </svg>
  </div>
  );
};

const StockArrow = ({ trend }: { trend: 'up' | 'down' | 'flat' }) => {
  const path = trend === 'up'
    ? 'M3 19 9 13l4 3L21 6m-6 0h6v6'
    : trend === 'down'
      ? 'M3 5l6 6 4-3 8 10m-6 0h6v-6'
      : 'M3 12h15m-4-4 4 4-4 4';

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
};
