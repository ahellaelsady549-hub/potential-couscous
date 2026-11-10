import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Dumbbell, CheckCircle2, Loader2, Save, Plus, Trash2, Pencil } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import type { Json } from '@/integrations/supabase/types';
import { gymPrograms, getProgram, type GymDay, type GymProgram } from '@/data/gymPrograms';
import { gymMuscleGroups } from '@/data/gymExerciseCatalog';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

const todayISO = () => new Date().toISOString().slice(0, 10);
const CUSTOM_PROGRAM_KEY = 'custom';

const createDay = (index: number): GymDay => {
  const name = `Day ${index + 1}`;
  const nameAr = `اليوم ${index + 1}`;
  return {
    key: `custom_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    name: nameAr,
    nameEn: name,
    muscles: '',
    musclesEn: '',
    muscleGroupIds: [],
    exercises: [],
    exercisesEn: [],
  };
};

const parseCustomProgram = (value: unknown): GymProgram | null => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const record = value as Record<string, unknown>;
  if (record.key !== CUSTOM_PROGRAM_KEY || typeof record.name !== 'string' || typeof record.nameEn !== 'string') return null;
  if (!Array.isArray(record.days)) return null;

  const days: GymDay[] = [];
  for (const valueDay of record.days) {
    if (!valueDay || typeof valueDay !== 'object' || Array.isArray(valueDay)) return null;
    const day = valueDay as Record<string, unknown>;
    if (
      typeof day.key !== 'string' ||
      typeof day.name !== 'string' ||
      typeof day.nameEn !== 'string' ||
      typeof day.muscles !== 'string' ||
      typeof day.musclesEn !== 'string' ||
      (day.muscleGroupIds !== undefined &&
        (!Array.isArray(day.muscleGroupIds) || !day.muscleGroupIds.every((id) => typeof id === 'string'))) ||
      !Array.isArray(day.exercises) ||
      !Array.isArray(day.exercisesEn) ||
      !day.exercises.every((exercise) => typeof exercise === 'string') ||
      !day.exercisesEn.every((exercise) => typeof exercise === 'string')
    ) return null;

    days.push({
      key: day.key,
      name: day.name,
      nameEn: day.nameEn,
      muscles: day.muscles,
      musclesEn: day.musclesEn,
      muscleGroupIds: Array.isArray(day.muscleGroupIds)
        ? day.muscleGroupIds.filter((id): id is string => typeof id === 'string')
        : [],
      exercises: day.exercises,
      exercisesEn: day.exercisesEn,
    });
  }

  return {
    key: CUSTOM_PROGRAM_KEY,
    name: record.name,
    nameEn: record.nameEn,
    level: typeof record.level === 'string' ? record.level : 'مخصص',
    levelEn: typeof record.levelEn === 'string' ? record.levelEn : 'Custom',
    daysPerWeek: typeof record.daysPerWeek === 'string' ? record.daysPerWeek : `${days.length} أيام`,
    daysPerWeekEn: typeof record.daysPerWeekEn === 'string' ? record.daysPerWeekEn : `${days.length} days`,
    bestFor: typeof record.bestFor === 'string' ? record.bestFor : '',
    bestForEn: typeof record.bestForEn === 'string' ? record.bestForEn : '',
    days,
  };
};

const serializeCustomProgram = (program: GymProgram): Json => ({
  key: program.key,
  name: program.name,
  nameEn: program.nameEn,
  level: program.level,
  levelEn: program.levelEn,
  daysPerWeek: program.daysPerWeek,
  daysPerWeekEn: program.daysPerWeekEn,
  bestFor: program.bestFor,
  bestForEn: program.bestForEn,
  days: program.days.map((day) => ({
    key: day.key,
    name: day.name,
    nameEn: day.nameEn,
    muscles: day.muscles,
    musclesEn: day.musclesEn,
    muscleGroupIds: day.muscleGroupIds ?? [],
    exercises: day.exercises,
    exercisesEn: day.exercisesEn,
  })),
});

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
  const [customProgram, setCustomProgram] = useState<GymProgram | null>(null);
  const [customDialogOpen, setCustomDialogOpen] = useState(false);
  const [savingCustomProgram, setSavingCustomProgram] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customDays, setCustomDays] = useState<GymDay[]>([]);
  const [exerciseDrafts, setExerciseDrafts] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    const load = async () => {
      const [{ data: prog, error: programError }, { data: custom, error: customError }, { data: logs, error: logsError }, { data: hist, error: historyError }] = await Promise.all([
        supabase.from('gym_user_program').select('program_key').eq('user_id', user.id).maybeSingle(),
        supabase.from('gym_user_custom_programs').select('plan').eq('user_id', user.id).maybeSingle(),
        supabase.from('gym_workout_logs').select('day_key, exercise_name, completed, weight_kg, reps, sets').eq('user_id', user.id).eq('log_date', todayISO()),
        supabase.from('gym_workout_logs').select('exercise_name, weight_kg, log_date').eq('user_id', user.id).lt('log_date', todayISO()).not('weight_kg', 'is', null).order('log_date', { ascending: true }),
      ]);
      const fetchError = programError || customError || logsError || historyError;
      if (fetchError) toast.error(L('تعذّر تحميل جدول التمارين أو السجلات','Could not load your workout plan or logs'));
      const savedCustomPlan = custom ? parseCustomProgram(custom.plan) : null;
      if (savedCustomPlan) {
        setCustomProgram(savedCustomPlan);
      }
      if (prog?.program_key) {
        setSelected(prog.program_key);
        const selectedProgram = prog.program_key === CUSTOM_PROGRAM_KEY
          ? savedCustomPlan
          : getProgram(prog.program_key);
        setActiveDay(selectedProgram?.days[0]?.key ?? null);
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
  }, [user, L]);

  const chooseProgram = async (key: string) => {
    if (!user) return;
    const { error } = await supabase
      .from('gym_user_program')
      .upsert({ user_id: user.id, program_key: key }, { onConflict: 'user_id' });
    if (error) toast.error(L('تعذّر حفظ النظام','Could not save the program'));
    else {
      setSelected(key);
      const selectedProgram = key === CUSTOM_PROGRAM_KEY ? customProgram : getProgram(key);
      setActiveDay(selectedProgram?.days[0]?.key ?? null);
      toast.success(L('تم اختيار النظام','Program selected'));
    }
  };

  const openCustomEditor = () => {
    setCustomName(customProgram?.name ?? '');
    setCustomDays(customProgram?.days ?? []);
    setExerciseDrafts({});
    setCustomDialogOpen(true);
  };

  const saveCustomProgram = async () => {
    if (!user) {
      toast.error(L('سجّل الدخول أولاً لحفظ جدولك','Sign in before saving your plan'));
      return;
    }
    const name = customName.trim();
    if (!name) {
      toast.error(L('اكتب اسمًا للجدول أولاً','Enter a name for your plan'));
      return;
    }
    if (customDays.length === 0) {
      toast.error(L('أضف يوم تمرين واحدًا على الأقل','Add at least one workout day'));
      return;
    }
    if (customDays.some((day) => !day.name.trim() || day.exercises.length === 0)) {
      toast.error(L('تأكد من كتابة اسم لكل يوم واختيار تمرين واحد على الأقل لكل يوم','Name each day and choose at least one exercise for every day'));
      return;
    }

    setSavingCustomProgram(true);
    const plan: GymProgram = {
      key: CUSTOM_PROGRAM_KEY,
      name,
      nameEn: name,
      level: L('مخصص','Custom'),
      levelEn: 'Custom',
      daysPerWeek: L(`${customDays.length} أيام`, `${customDays.length} days`),
      daysPerWeekEn: `${customDays.length} days`,
      bestFor: L('جدول تمارين مخصص لك','A workout plan customized for you'),
      bestForEn: 'A workout plan customized for you',
      days: customDays,
    };

    const { error: savePlanError } = await supabase
      .from('gym_user_custom_programs')
      .upsert({ user_id: user.id, plan: serializeCustomProgram(plan) }, { onConflict: 'user_id' });
    if (savePlanError) {
      console.error('Unable to save the custom workout plan:', savePlanError);
      const migrationMissing = savePlanError.code === '42P01' || savePlanError.code === 'PGRST205';
      toast.error(migrationMissing
        ? L(
          'جدول حفظ البرامج المخصصة غير موجود في قاعدة البيانات. طبّق ترحيل Supabase 20261109040000_gym_custom_programs.sql ثم أعد المحاولة.',
          'The custom workout table is missing from the database. Apply Supabase migration 20261109040000_gym_custom_programs.sql, then try again.'
        )
        : L(`تعذّر حفظ الجدول: ${savePlanError.message}`, `Could not save the plan: ${savePlanError.message}`));
      setSavingCustomProgram(false);
      return;
    }
    setCustomProgram(plan);

    const { error: selectPlanError } = await supabase
      .from('gym_user_program')
      .upsert({ user_id: user.id, program_key: CUSTOM_PROGRAM_KEY }, { onConflict: 'user_id' });
    if (selectPlanError) {
      console.error('Custom workout plan saved, but activation failed:', selectPlanError);
      toast.error(L(
        `تم حفظ الجدول لكن تعذّر تفعيله: ${selectPlanError.message}`,
        `The plan was saved, but could not be activated: ${selectPlanError.message}`
      ));
      setSavingCustomProgram(false);
      return;
    }

    setSelected(CUSTOM_PROGRAM_KEY);
    setActiveDay(plan.days[0]?.key ?? null);
    setCustomDialogOpen(false);
    setSavingCustomProgram(false);
    toast.success(L('تم حفظ جدولك المخصص','Your custom plan was saved'));
  };

  const addCustomExercise = (dayKey: string) => {
    const exercise = (exerciseDrafts[dayKey] ?? '').trim();
    if (!exercise) return;
    setCustomDays((days) => days.map((day) => day.key === dayKey
      ? { ...day, exercises: [...day.exercises, exercise], exercisesEn: [...day.exercisesEn, exercise] }
      : day));
    setExerciseDrafts((drafts) => ({ ...drafts, [dayKey]: '' }));
  };

  const toggleMuscleGroup = (dayKey: string, groupId: string, checked: boolean) => {
    const selectedGroupIds = customDays.find((day) => day.key === dayKey)?.muscleGroupIds ?? [];
    const nextGroupIds = checked
      ? [...selectedGroupIds, groupId]
      : selectedGroupIds.filter((id) => id !== groupId);
    const nextGroups = gymMuscleGroups.filter((group) => nextGroupIds.includes(group.id));
    const nextName = nextGroups.map((group) => group.nameAr).join(' + ');
    const nextNameEn = nextGroups.map((group) => group.nameEn).join(' + ');

    setCustomDays((days) => days.map((day) => {
      if (day.key !== dayKey) return day;
      const filteredExercises = day.exercises
        .map((exercise, index) => ({ exercise, exerciseEn: day.exercisesEn[index] ?? exercise }))
        .filter(({ exercise, exerciseEn }) => {
          const catalogMatches = gymMuscleGroups
            .flatMap((group) => group.exercises.map((option) => ({ ...option, groupId: group.id })))
            .filter((option) => option.nameAr === exercise || option.nameEn === exerciseEn);
          return catalogMatches.length === 0 || catalogMatches.some((option) => nextGroupIds.includes(option.groupId));
        });

      return {
        ...day,
        muscleGroupIds: nextGroupIds,
        muscles: nextName || '',
        musclesEn: nextNameEn || '',
        name: nextName ? `يوم ${nextName}` : day.name,
        nameEn: nextNameEn ? `${nextNameEn} Day` : day.nameEn,
        exercises: filteredExercises.map(({ exercise }) => exercise),
        exercisesEn: filteredExercises.map(({ exerciseEn }) => exerciseEn),
      };
    }));
  };

  const toggleCatalogExercise = (dayKey: string, exercise: { nameAr: string; nameEn: string }, checked: boolean) => {
    setCustomDays((days) => days.map((day) => {
      if (day.key !== dayKey) return day;
      const existingIndex = day.exercises.indexOf(exercise.nameAr);
      if (checked && existingIndex === -1) {
        return {
          ...day,
          exercises: [...day.exercises, exercise.nameAr],
          exercisesEn: [...day.exercisesEn, exercise.nameEn],
        };
      }
      if (!checked && existingIndex !== -1) {
        return {
          ...day,
          exercises: day.exercises.filter((_, index) => index !== existingIndex),
          exercisesEn: day.exercisesEn.filter((_, index) => index !== existingIndex),
        };
      }
      return day;
    }));
  };

  const toggleExercise = async (dayKey: string, exercise: string, checked: boolean) => {
    if (!user || !selected) return;
    const id = `${dayKey}|${exercise}`;
    const next = new Set(done);
    if (checked) next.add(id);
    else next.delete(id);
    setDone(next);
    if (checked) {
      const { error } = await supabase.from('gym_workout_logs').upsert({
        user_id: user.id, program_key: selected, day_key: dayKey,
        exercise_name: exercise, log_date: todayISO(), completed: true,
      }, { onConflict: 'user_id,log_date,day_key,exercise_name' });
      if (error) {
        setDone(done);
        toast.error(L('تعذّر حفظ التمرين','Could not save the exercise'));
      }
    } else {
      const { error } = await supabase.from('gym_workout_logs').delete()
        .eq('user_id', user.id).eq('log_date', todayISO())
        .eq('day_key', dayKey).eq('exercise_name', exercise);
      if (error) {
        setDone(done);
        toast.error(L('تعذّر تحديث حالة التمرين','Could not update the exercise status'));
      }
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

  const program = selected === CUSTOM_PROGRAM_KEY ? customProgram : selected ? getProgram(selected) : null;
  const day = program?.days.find((d) => d.key === activeDay) ?? program?.days[0];

  if (loading) {
    return <div className="flex justify-center py-10"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold">{L('اختر أو خصّص جدولك','Choose or customize your plan')}</h2>
          <p className="text-sm text-muted-foreground">{L('احفظ أيام التمرين والتمارين التي تناسبك، ثم سجّل الأوزان والتكرارات لكل تمرين.','Save your preferred training days and exercises, then record weights and reps for each exercise.')}</p>
        </div>
        <Dialog open={customDialogOpen} onOpenChange={setCustomDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" onClick={openCustomEditor}>
              <Pencil className="me-2 h-4 w-4" />
              {customProgram ? L('تعديل جدولي','Edit my plan') : L('إنشاء جدول مخصص','Create custom plan')}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>{L('تخصيص جدول التمارين','Customize workout plan')}</DialogTitle>
            </DialogHeader>
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="custom-plan-name">{L('اسم الجدول','Plan name')}</Label>
                <Input
                  id="custom-plan-name"
                  value={customName}
                  onChange={(event) => setCustomName(event.target.value)}
                  placeholder={L('مثال: جدولي الأسبوعي','e.g. My weekly plan')}
                  maxLength={60}
                />
              </div>
              {customDays.map((customDay, dayIndex) => (
                <Card key={customDay.key}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                    <CardTitle className="text-base">{L('اليوم','Day')} {dayIndex + 1}</CardTitle>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label={L('حذف اليوم','Remove day')}
                      onClick={() => setCustomDays((days) => days.filter((day) => day.key !== customDay.key))}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <Label>{L('اختيار العضلات لليوم (يمكن دمج أكثر من عضلة)','Choose muscle groups for this day (you can combine groups)')}</Label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {gymMuscleGroups.map((group) => {
                          const checked = customDay.muscleGroupIds?.includes(group.id) ?? false;
                          return (
                            <label key={group.id} className="flex cursor-pointer items-center gap-2 rounded-md border p-2 text-sm">
                              <Checkbox
                                checked={checked}
                                onCheckedChange={(value) => toggleMuscleGroup(customDay.key, group.id, Boolean(value))}
                              />
                              <span>{L(group.nameAr, group.nameEn)}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>{L('اسم اليوم','Day name')}</Label>
                      <Input
                        value={language === 'en' ? customDay.nameEn : customDay.name}
                        onChange={(event) => {
                          const name = event.target.value;
                          setCustomDays((days) => days.map((day) => day.key === customDay.key
                            ? { ...day, name, nameEn: name }
                            : day));
                        }}
                        placeholder={L('مثال: صدر وترايسبس','e.g. Chest and triceps')}
                        maxLength={60}
                      />
                    </div>
                    {(customDay.muscleGroupIds?.length ?? 0) > 0 && (
                      <div className="space-y-3">
                        <Label>{L('اختر التمارين المناسبة','Choose exercises')}</Label>
                        {gymMuscleGroups
                          .filter((group) => customDay.muscleGroupIds?.includes(group.id))
                          .map((group) => (
                            <div key={group.id} className="space-y-2 rounded-md bg-muted/30 p-3">
                              <p className="text-sm font-medium">{L(group.nameAr, group.nameEn)}</p>
                              <div className="grid gap-2 sm:grid-cols-2">
                                {group.exercises.map((exercise) => (
                                  <label key={exercise.nameEn} className="flex cursor-pointer items-start gap-2 text-sm">
                                    <Checkbox
                                      checked={customDay.exercises.includes(exercise.nameAr)}
                                      onCheckedChange={(value) => toggleCatalogExercise(customDay.key, exercise, Boolean(value))}
                                    />
                                    <span>{L(exercise.nameAr, exercise.nameEn)}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label>{L('التمارين','Exercises')}</Label>
                      {customDay.exercises.map((exercise, exerciseIndex) => (
                        <div key={`${customDay.key}-${exerciseIndex}`} className="flex items-center gap-2">
                          <span className="flex-1 rounded-md bg-muted/50 px-3 py-2 text-sm">{language === 'en' ? customDay.exercisesEn[exerciseIndex] ?? exercise : exercise}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            aria-label={L('حذف التمرين','Remove exercise')}
                            onClick={() => setCustomDays((days) => days.map((day) => {
                              if (day.key !== customDay.key) return day;
                              return {
                                ...day,
                                exercises: day.exercises.filter((_, index) => index !== exerciseIndex),
                                exercisesEn: day.exercisesEn.filter((_, index) => index !== exerciseIndex),
                              };
                            }))}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      ))}
                      <div className="flex gap-2">
                        <Input
                          value={exerciseDrafts[customDay.key] ?? ''}
                          onChange={(event) => setExerciseDrafts((drafts) => ({ ...drafts, [customDay.key]: event.target.value }))}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                              event.preventDefault();
                              addCustomExercise(customDay.key);
                            }
                          }}
                          placeholder={L('اكتب اسم تمرين','Enter an exercise name')}
                          maxLength={80}
                        />
                        <Button type="button" variant="secondary" onClick={() => addCustomExercise(customDay.key)}>
                          <Plus className="me-1 h-4 w-4" />
                          {L('إضافة','Add')}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <div className="flex flex-wrap gap-2">
                <Button type="button" variant="outline" onClick={() => setCustomDays((days) => [...days, createDay(days.length)])}>
                  <Plus className="me-2 h-4 w-4" />
                  {L('إضافة يوم تمرين','Add workout day')}
                </Button>
                <Button type="button" className="ms-auto" onClick={saveCustomProgram} disabled={savingCustomProgram}>
                  {savingCustomProgram
                    ? <Loader2 className="me-2 h-4 w-4 animate-spin" />
                    : <Save className="me-2 h-4 w-4" />}
                  {L('حفظ وتفعيل الجدول','Save and activate plan')}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {customProgram && (
          <Card className={`border-primary/40 ${selected === CUSTOM_PROGRAM_KEY ? 'ring-2 ring-primary/30' : ''}`}>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between gap-2 text-base">
                <span>{language === 'en' ? customProgram.nameEn : customProgram.name}</span>
                {selected === CUSTOM_PROGRAM_KEY && <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{L('مخصص','Custom')}</Badge>
                <Badge variant="outline">{customProgram.days.length} {L('أيام','days')}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{L('جدولك المحفوظ بأيامك وتمارينك وأوزانك.','Your saved plan with your own days, exercises, and weight logs.')}</p>
              <Button className="w-full" variant={selected === CUSTOM_PROGRAM_KEY ? 'default' : 'outline'} onClick={() => chooseProgram(CUSTOM_PROGRAM_KEY)}>
                {L('استخدام هذا الجدول','Use this plan')}
              </Button>
            </CardContent>
          </Card>
        )}
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
