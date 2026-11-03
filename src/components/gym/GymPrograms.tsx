import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Dumbbell, CheckCircle2, Loader2, Save } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { gymPrograms, getProgram } from '@/data/gymPrograms';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

const todayISO = () => new Date().toISOString().slice(0, 10);

export const GymPrograms = () => {
  const { user } = useAuth();
  const { L, language } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);
  const [activeDay, setActiveDay] = useState<string | null>(null);
  const [done, setDone] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  type Entry = { weight: string; reps: string; sets: string };
  const [entries, setEntries] = useState<Record<string, Entry>>({});
  const [last, setLast] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    const load = async () => {
      const [{ data: prog }, { data: logs }, { data: hist }] = await Promise.all([
        supabase.from('gym_user_program').select('program_key').eq('user_id', user.id).maybeSingle(),
        supabase.from('gym_workout_logs').select('day_key, exercise_name, completed, weight_kg, reps, sets').eq('user_id', user.id).eq('log_date', todayISO()),
        supabase.from('gym_workout_logs').select('exercise_name, weight_kg, log_date').eq('user_id', user.id).lt('log_date', todayISO()).not('weight_kg', 'is', null).order('log_date', { ascending: true }),
      ]);
      if (prog?.program_key) {
        setSelected(prog.program_key);
        setActiveDay(getProgram(prog.program_key)?.days[0]?.key ?? null);
      }
      setDone(new Set((logs ?? []).filter((l) => l.completed).map((l) => `${l.day_key}|${l.exercise_name}`)));
      const e: Record<string, Entry> = {};
      (logs ?? []).forEach((l) => { e[`${l.day_key}|${l.exercise_name}`] = { weight: l.weight_kg?.toString() ?? '', reps: l.reps?.toString() ?? '', sets: l.sets?.toString() ?? '' }; });
      setEntries(e);
      const lw: Record<string, number> = {};
      (hist ?? []).forEach((h) => { lw[h.exercise_name] = Number(h.weight_kg); });
      setLast(lw);
      setLoading(false);
    };
    load();
  }, [user]);

  const chooseProgram = async (key: string) => {
    if (!user) return;
    setSelected(key);
    setActiveDay(getProgram(key)?.days[0]?.key ?? null);
    const { error } = await supabase
      .from('gym_user_program')
      .upsert({ user_id: user.id, program_key: key }, { onConflict: 'user_id' });
    if (error) toast.error(L('تعذّر حفظ النظام','Could not save the program'));
    else toast.success(L('تم اختيار النظام','Program selected'));
  };

  const toggleExercise = async (dayKey: string, exercise: string, checked: boolean) => {
    if (!user || !selected) return;
    const id = `${dayKey}|${exercise}`;
    const next = new Set(done);
    checked ? next.add(id) : next.delete(id);
    setDone(next);
    if (checked) {
      const { error } = await supabase.from('gym_workout_logs').upsert({
        user_id: user.id, program_key: selected, day_key: dayKey,
        exercise_name: exercise, log_date: todayISO(), completed: true,
      }, { onConflict: 'user_id,log_date,day_key,exercise_name' });
      if (error) toast.error(L('تعذّر حفظ التمرين','Could not save the exercise'));
    } else {
      await supabase.from('gym_workout_logs').delete()
        .eq('user_id', user.id).eq('log_date', todayISO())
        .eq('day_key', dayKey).eq('exercise_name', exercise);
    }
  };

  const saveEntry = async (dayKey: string, exercise: string) => {
    if (!user || !selected) return;
    const id = `${dayKey}|${exercise}`;
    const en = entries[id] ?? { weight: '', reps: '', sets: '' };
    const w = parseFloat(en.weight);
    if (!(w > 0) || w > 1000) { toast.error(L('اكتب وزن صحيح بالكيلو','Enter a valid weight in kg')); return; }
    const reps = parseInt(en.reps) || null; const sets = parseInt(en.sets) || null;
    const { error } = await supabase.from('gym_workout_logs').upsert({
      user_id: user.id, program_key: selected, day_key: dayKey, exercise_name: exercise,
      log_date: todayISO(), completed: true, weight_kg: w, reps, sets,
    }, { onConflict: 'user_id,log_date,day_key,exercise_name' });
    if (error) { toast.error(L('تعذّر حفظ الوزن','Could not save the weight')); return; }
    setDone(new Set(done).add(id));
    const prev = last[exercise];
    if (prev !== undefined && w > prev) toast.success(L(`تطور! +${w - prev} كجم عن آخر مرة`, `Progress! +${w - prev} kg since last time`));
    else toast.success(L('تم حفظ الوزن','Weight saved'));
  };

  const setField = (id: string, k: keyof Entry, v: string) =>
    setEntries((p) => ({ ...p, [id]: { ...(p[id] ?? { weight: '', reps: '', sets: '' }), [k]: v } }));

  const program = selected ? getProgram(selected) : null;
  const day = program?.days.find((d) => d.key === activeDay) ?? program?.days[0];

  if (loading) {
    return <div className="flex justify-center py-10"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {gymPrograms.map((p) => (
          <Card
            key={p.key}
            className={`cursor-pointer transition-all hover:shadow-lg ${selected === p.key ? 'border-primary ring-2 ring-primary/30' : ''}`}
            onClick={() => chooseProgram(p.key)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-start justify-between gap-2">
                <span>{language === 'en' ? p.nameEn : p.name}</span>
                {selected === p.key && <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{language === 'en' ? p.levelEn : p.level}</Badge>
                <Badge variant="outline">{language === 'en' ? p.daysPerWeekEn : p.daysPerWeek}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{language === 'en' ? p.bestForEn : p.bestFor}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {program && day && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Dumbbell className="h-5 w-5 text-primary" />
              {L('جدول','Plan')} {language === 'en' ? program.nameEn : program.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {program.days.map((d) => (
                <Button
                  key={d.key}
                  size="sm"
                  variant={d.key === day.key ? 'default' : 'outline'}
                  onClick={() => setActiveDay(d.key)}
                >
                  {language === 'en' ? d.nameEn : d.name}
                </Button>
              ))}
            </div>

            <div className="rounded-lg border border-border p-4 space-y-3">
              <div>
                <h3 className="font-semibold">{language === 'en' ? day.nameEn : day.name}</h3>
                <p className="text-sm text-muted-foreground">{L('العضلات','Muscles')}: {language === 'en' ? day.musclesEn : day.muscles}</p>
              </div>
              <div className="space-y-2">
                {day.exercises.map((ex, idx) => {
                  const id = `${day.key}|${ex}`;
                  const checked = done.has(id);
                  const label = language === 'en' ? (day.exercisesEn[idx] ?? ex) : ex;
                  const en = entries[id] ?? { weight: '', reps: '', sets: '' };
                  return (
                    <div key={ex} className="rounded-md bg-muted/40 px-3 py-2 space-y-2">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <Checkbox checked={checked} onCheckedChange={(v) => toggleExercise(day.key, ex, Boolean(v))} />
                        <span className={`text-sm flex-1 ${checked ? 'line-through text-muted-foreground' : ''}`}>{label}</span>
                        {last[ex] !== undefined && <Badge variant="outline" className="text-xs">{L('آخر مرة','Last')}: {last[ex]} kg</Badge>}
                      </label>
                      <div className="flex flex-wrap items-center gap-2">
                        <Input type="number" inputMode="decimal" min={0} placeholder={L('الوزن كجم','Weight kg')} value={en.weight} onChange={(e) => setField(id, 'weight', e.target.value)} className="h-9 w-28" />
                        <Input type="number" inputMode="numeric" min={0} placeholder={L('عدّات','Reps')} value={en.reps} onChange={(e) => setField(id, 'reps', e.target.value)} className="h-9 w-24" />
                        <Input type="number" inputMode="numeric" min={0} placeholder={L('مجموعات','Sets')} value={en.sets} onChange={(e) => setField(id, 'sets', e.target.value)} className="h-9 w-28" />
                        <Button size="sm" onClick={() => saveEntry(day.key, ex)}><Save className="h-4 w-4 me-1" />{L('حفظ','Save')}</Button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-muted-foreground">
                {L('يتم حفظ تشيك تمارين اليوم تلقائياً','Today\u2019s checked exercises are saved automatically')} ({todayISO()}).
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
