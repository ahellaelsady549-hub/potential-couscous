import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { Header as SiteHeader } from '@/components/Header';
import NotificationSettings from '@/components/NotificationSettings';
import { 
  Pill, 
  Utensils, 
  Brain, 
  LogOut, 
  Plus, 
  Trash2, 
  Bell, 
  BellOff,
  Home,
  Heart,
  Activity,
  Stethoscope,
  Calendar,
  Link as LinkIcon,
  Scale,
  TrendingDown,
  TrendingUp
} from 'lucide-react';
import { treatments } from '@/data/treatments';
import { useLanguage } from '@/contexts/LanguageContext';
import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { Json } from '@/integrations/supabase/types';

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  time: string;
  reminder_enabled: boolean;
}

interface DietPlan {
  id: string;
  weight: number;
  height: number;
  age: number;
  gender: string;
  bmi: number;
  calories: number;
  created_at: string;
  goal: string;
  diet_plan: Json | null;
}

interface WeightLog {
  id: string;
  weight_kg: number;
  measured_on: string;
}

interface PersonalityResult {
  id: string;
  score: number;
  level: string;
  ai_analysis: string;
  created_at: string;
}

interface UserDisease {
  id: string;
  name: string;
  type: string;
  notes: string | null;
  diagnosed_at: string | null;
  created_at: string;
}

const Dashboard = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { L } = useLanguage();

  const [medications, setMedications] = useState<Medication[]>([]);
  const [dietPlans, setDietPlans] = useState<DietPlan[]>([]);
  const [personalityResults, setPersonalityResults] = useState<PersonalityResult[]>([]);
  const [userDiseases, setUserDiseases] = useState<UserDisease[]>([]);
  const [weightLogs, setWeightLogs] = useState<WeightLog[]>([]);
  const [weightInput, setWeightInput] = useState('');
  const [weightDate, setWeightDate] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  });
  const [isSavingWeight, setIsSavingWeight] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [doctorApplication, setDoctorApplication] = useState<{ is_verified: boolean | null; verification_status: string | null; cv_url: string | null } | null>(null);
  const [isAddingMed, setIsAddingMed] = useState(false);
  const [userProfile, setUserProfile] = useState<{ full_name: string | null; avatar_url: string | null } | null>(null);
  const [newMed, setNewMed] = useState({
    name: '',
    dosage: '',
    frequency: '1',
    time: '08:00',
    disease_id: ''
  });

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    if (!user) return;

    // Fetch profile
    const { data: profileData } = await supabase
      .from('profiles')
      .select('full_name, avatar_url')
      .eq('user_id', user.id)
      .maybeSingle();
    
    if (profileData) setUserProfile(profileData);

    // Fetch medications
    const { data: medsData } = await supabase
      .from('user_medications')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    
    if (medsData) setMedications(medsData);

    // Fetch diet plans
    const { data: dietData } = await supabase
      .from('user_diet_plans')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    
    if (dietData) setDietPlans(dietData);

    // Fetch personality results
    const { data: personalityData } = await supabase
      .from('user_personality_results')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    
    if (personalityData) setPersonalityResults(personalityData);

    // Fetch user diseases
    const { data: diseasesData } = await supabase
      .from('user_diseases')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    
    if (diseasesData) setUserDiseases(diseasesData);

    const { data: weightsData, error: weightsError } = await supabase
      .from('user_weight_logs')
      .select('id, weight_kg, measured_on')
      .eq('user_id', user.id)
      .order('measured_on', { ascending: false })
      .limit(90);

    if (weightsError) {
      console.error('Error fetching weight history:', weightsError);
      toast({
        title: L('تعذر تحميل سجل الوزن', 'Could not load weight history'),
        description: weightsError.message,
        variant: 'destructive'
      });
    } else {
      setWeightLogs((weightsData || []).reverse());
    }

    const { data: roleData, error: roleError } = await supabase.rpc('has_role', {
      _user_id: user.id,
      _role: 'admin'
    });
    if (roleError) {
      console.error('Error checking admin role:', roleError);
    } else {
      setIsAdmin(roleData);
    }

    const { data: doctorData, error: doctorError } = await supabase
      .from('doctors')
      .select('is_verified, verification_status, cv_url')
      .eq('user_id', user.id)
      .maybeSingle();
    if (doctorError) {
      console.error('Error fetching doctor application status:', doctorError);
    } else {
      setDoctorApplication(doctorData);
    }
  };

  const saveWeightLog = async (event: React.FormEvent) => {
    event.preventDefault();
    const weight = Number(weightInput);
    if (!user || !Number.isFinite(weight) || weight <= 20 || weight >= 400 || !weightDate) {
      toast({
        title: L('بيانات غير صالحة', 'Invalid information'),
        description: L('أدخل وزنًا بين 20 و400 كجم واختر تاريخ القياس.', 'Enter a weight between 20 and 400 kg and choose a measurement date.'),
        variant: 'destructive'
      });
      return;
    }

    setIsSavingWeight(true);
    const { data, error } = await supabase
      .from('user_weight_logs')
      .upsert(
        { user_id: user.id, weight_kg: weight, measured_on: weightDate },
        { onConflict: 'user_id,measured_on' }
      )
      .select('id, weight_kg, measured_on')
      .single();

    if (error) {
      console.error('Error saving weight measurement:', error);
      toast({
        title: L('تعذر حفظ القياس', 'Could not save measurement'),
        description: error.message,
        variant: 'destructive'
      });
    } else {
      setWeightLogs((current) => [...current.filter((entry) => entry.measured_on !== data.measured_on), data]
        .sort((a, b) => a.measured_on.localeCompare(b.measured_on))
        .slice(-90));
      setWeightInput('');
      toast({
        title: L('تم حفظ الوزن', 'Weight saved'),
        description: L('تم تحديث مؤشر تطور الوزن.', 'Your weight progress has been updated.')
      });
    }
    setIsSavingWeight(false);
  };

  const latestWeight = weightLogs[weightLogs.length - 1]?.weight_kg || dietPlans[0]?.weight || null;
  const initialWeight = weightLogs[0]?.weight_kg;
  const weightProgressPercent = initialWeight && latestWeight
    ? ((latestWeight - initialWeight) / initialWeight) * 100
    : null;
  const latestPlanData = dietPlans[0]?.diet_plan;
  const weeklyPlanChange = latestPlanData && typeof latestPlanData === 'object' && !Array.isArray(latestPlanData)
    && latestPlanData.weightPrediction && typeof latestPlanData.weightPrediction === 'object' && !Array.isArray(latestPlanData.weightPrediction)
    && typeof latestPlanData.weightPrediction.weeklyChange === 'number'
    ? latestPlanData.weightPrediction.weeklyChange
    : null;
  const isWeightLossGoal = dietPlans[0]?.goal === 'lose';
  const isMinorWeightLossPlan = isWeightLossGoal && (dietPlans[0]?.age ?? 0) < 18;
  const weeklyChangeRange = isWeightLossGoal && !isMinorWeightLossPlan
    ? [-0.9, -0.45]
    : !isMinorWeightLossPlan && weeklyPlanChange !== null
      ? [weeklyPlanChange, weeklyPlanChange]
      : null;
  const weeklyPercentageRange = latestWeight && weeklyChangeRange
    ? weeklyChangeRange.map((change) => (change / latestWeight) * 100)
    : null;

  const handleAddMedication = async () => {
    if (!user || !newMed.name) return;

    // Check if medication exists in treatments database
    const foundTreatment = treatments.find(t => 
      t.nameAr.includes(newMed.name) ||
      t.nameEn.toLowerCase().includes(newMed.name.toLowerCase()) ||
      newMed.name.toLowerCase().includes(t.nameEn.toLowerCase())
    );

    const dosage = foundTreatment?.dosageAr || newMed.dosage;
    const frequency = foundTreatment ? '3' : newMed.frequency;

    const { data, error } = await supabase
      .from('user_medications')
      .insert({
        user_id: user.id,
        name: newMed.name,
        dosage: dosage,
        frequency: frequency,
        time: newMed.time,
        reminder_enabled: true
      })
      .select()
      .single();

    if (error) {
      toast({
        title: L('خطأ', 'Error'),
        description: L('حدث خطأ أثناء إضافة الدواء', 'An error occurred while adding the medication'),
        variant: 'destructive'
      });
    } else {
      setMedications([data, ...medications]);
      setNewMed({ name: '', dosage: '', frequency: '1', time: '08:00', disease_id: '' });
      setIsAddingMed(false);
      toast({
        title: L('تمت الإضافة', 'Added'),
        description: foundTreatment 
          ? L(`تم إضافة ${newMed.name} مع الجرعة الموصى بها تلقائياً`, `${newMed.name} was added with the recommended dosage automatically`)
          : L('تم إضافة الدواء بنجاح', 'Medication added successfully')
      });
    }
  };

  const handleDeleteMedication = async (id: string) => {
    const { error } = await supabase
      .from('user_medications')
      .delete()
      .eq('id', id);

    if (!error) {
      setMedications(medications.filter(m => m.id !== id));
      toast({
        title: L('تم الحذف', 'Deleted'),
        description: L('تم حذف الدواء بنجاح', 'Medication deleted successfully')
      });
    }
  };

  const toggleReminder = async (id: string, currentState: boolean) => {
    const { error } = await supabase
      .from('user_medications')
      .update({ reminder_enabled: !currentState })
      .eq('id', id);

    if (!error) {
      setMedications(medications.map(m => 
        m.id === id ? { ...m, reminder_enabled: !currentState } : m
      ));
    }
  };

  const handleDeleteDietPlan = async (id: string) => {
    const { error } = await supabase
      .from('user_diet_plans')
      .delete()
      .eq('id', id);

    if (!error) {
      setDietPlans(dietPlans.filter(p => p.id !== id));
      toast({
        title: L('تم الحذف', 'Deleted'),
        description: L('تم حذف الخطة الغذائية بنجاح', 'Diet plan deleted successfully')
      });
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-primary">{L('جاري التحميل...', 'Loading...')}</div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <SiteHeader />

      {/* Page bar */}
      <header className="w-full border-b border-border bg-background/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-primary" />
            <h1 className="text-xl font-bold bg-gradient-medical bg-clip-text text-transparent">
              {L('لوحة التحكم', 'Dashboard')}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
              <Home className="w-4 h-4 ml-2" />
              {L('الرئيسية', 'Home')}
            </Button>
            {isAdmin && (
              <Button variant="outline" size="sm" onClick={() => navigate('/admin')}>
                {L('لوحة الإدارة', 'Admin')}
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={handleSignOut} className="text-destructive hover:text-destructive hover:bg-destructive/10">
              <LogOut className="w-4 h-4 ml-2" />
              {L('خروج', 'Sign out')}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Card */}
        <Card className="mb-8 bg-gradient-medical text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <ProfileAvatar 
                avatarUrl={userProfile?.avatar_url || null}
                fullName={userProfile?.full_name || null}
                size="lg"
                editable
                onAvatarChange={(url) => setUserProfile(prev => prev ? { ...prev, avatar_url: url } : null)}
              />
              <div>
                <CardTitle className="text-2xl">{L(`مرحباً ${userProfile?.full_name || 'بك'}!`, `Welcome ${userProfile?.full_name || ''}!`)}</CardTitle>
                <CardDescription className="text-white/80">
                  {user.email}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">{medications.length}</div>
                <div className="text-sm text-white/80">{L('أدوية', 'Medications')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{userDiseases.length}</div>
                <div className="text-sm text-white/80">{L('أمراض', 'Diseases')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{dietPlans.length}</div>
                <div className="text-sm text-white/80">{L('خطط غذائية', 'Diet Plans')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{personalityResults.length}</div>
                <div className="text-sm text-white/80">{L('اختبارات', 'Tests')}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {doctorApplication && !doctorApplication.is_verified && (
          <Card className="mb-8 border-primary/30">
            <CardContent className="flex flex-wrap items-center justify-between gap-4 py-5">
              <div>
                <p className="font-semibold">{L('طلب انضمام الأطباء', 'Doctor application')}</p>
                <p className="text-sm text-muted-foreground">
                  {doctorApplication.verification_status === 'pending' && doctorApplication.cv_url
                    ? L('طلبك قيد المراجعة من الإدارة.', 'Your application is being reviewed.')
                    : L('أكمل الطلب برفع السيرة الذاتية بصيغة PDF.', 'Complete your application by uploading a PDF CV.')}
                </p>
              </div>
              <Button variant="outline" onClick={() => navigate('/doctor-application')}>
                {L('إدارة الطلب', 'Manage application')}
              </Button>
            </CardContent>
          </Card>
        )}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              {L('تطور الوزن والتوقع الأسبوعي', 'Weight progress & weekly forecast')}
            </CardTitle>
            <CardDescription>
              {L('سجّل قياساتك الفعلية لمتابعة التغيّر بمرور الوقت.', 'Log actual measurements to track changes over time.')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={saveWeightLog} className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <div className="space-y-2">
                <Label htmlFor="weight-log">{L('الوزن (كجم)', 'Weight (kg)')}</Label>
                <Input
                  id="weight-log"
                  type="number"
                  min="20"
                  max="399.9"
                  step="0.1"
                  value={weightInput}
                  onChange={(event) => setWeightInput(event.target.value)}
                  placeholder={L('مثال: 72.5', 'e.g. 72.5')}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight-date">{L('تاريخ القياس', 'Measurement date')}</Label>
                <Input id="weight-date" type="date" value={weightDate} onChange={(event) => setWeightDate(event.target.value)} required />
              </div>
              <Button type="submit" className="self-end" disabled={isSavingWeight}>
                {isSavingWeight ? L('جاري الحفظ...', 'Saving...') : L('حفظ القياس', 'Save measurement')}
              </Button>
            </form>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <p className="text-sm text-muted-foreground">{L('آخر وزن مسجل', 'Latest weight')}</p>
                <p className="mt-1 text-2xl font-bold">{latestWeight ? `${latestWeight} ${L('كجم', 'kg')}` : '—'}</p>
              </div>
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <p className="text-sm text-muted-foreground">{L('التغير منذ أول قياس', 'Change since first log')}</p>
                {weightLogs.length > 1 && weightProgressPercent !== null ? (
                  <p className={`mt-1 flex items-center justify-center gap-1 text-2xl font-bold ${weightProgressPercent < 0 ? 'text-green-600' : weightProgressPercent > 0 ? 'text-amber-600' : ''}`}>
                    {weightProgressPercent < 0 ? <TrendingDown className="h-5 w-5" /> : <TrendingUp className="h-5 w-5" />}
                    {weightProgressPercent > 0 ? '+' : ''}{weightProgressPercent.toFixed(1)}%
                  </p>
                ) : (
                  <p className="mt-1 text-sm text-muted-foreground">{L('سجّل قياسين على الأقل', 'Log at least two measurements')}</p>
                )}
              </div>
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <p className="text-sm text-muted-foreground">{L('التوقع خلال 7 أيام', 'Expected over 7 days')}</p>
                {weeklyChangeRange && weeklyPercentageRange ? (
                  <p className="mt-1 text-lg font-bold">
                    {isWeightLossGoal
                      ? L(
                        `انخفاض 0.45–0.9 كجم (${Math.abs(weeklyPercentageRange[1]).toFixed(2)}–${Math.abs(weeklyPercentageRange[0]).toFixed(2)}%)`,
                        `−0.45 to −0.9 kg (${Math.abs(weeklyPercentageRange[1]).toFixed(2)}–${Math.abs(weeklyPercentageRange[0]).toFixed(2)}%)`
                      )
                      : `${weeklyPlanChange! > 0 ? '+' : ''}${weeklyPlanChange!.toFixed(2)} ${L('كجم', 'kg')} (${weeklyPercentageRange[0] > 0 ? '+' : ''}${weeklyPercentageRange[0].toFixed(2)}%)`}
                  </p>
                ) : (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {isMinorWeightLossPlan
                      ? L('لمن هم دون 18 سنة: التوقع يحتاج متابعة طبيب أطفال أو أخصائي تغذية.', 'For users under 18, forecasts require guidance from a pediatrician or dietitian.')
                      : L('أنشئ خطة غذائية لعرض التوقع', 'Create a diet plan to see a forecast')}
                  </p>
                )}
              </div>
            </div>

            {weightLogs.length > 0 ? (
              <div className="h-64 w-full" aria-label={L('رسم بياني لتطور الوزن', 'Weight progress chart')}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weightLogs} margin={{ top: 8, right: 12, left: 0, bottom: 4 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="measured_on"
                      tickFormatter={(value: string) => new Date(`${value}T00:00:00`).toLocaleDateString()}
                    />
                    <YAxis domain={['dataMin - 1', 'dataMax + 1']} width={48} />
                    <Tooltip
                      labelFormatter={(value) => new Date(`${value}T00:00:00`).toLocaleDateString()}
                      formatter={(value: number) => [`${value} ${L('كجم', 'kg')}`, L('الوزن', 'Weight')]}
                    />
                    <Line type="monotone" dataKey="weight_kg" name={L('الوزن', 'Weight')} stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="rounded-lg border border-dashed py-8 text-center text-sm text-muted-foreground">
                {L('أضف أول قياس لبدء متابعة تطور وزنك هنا.', 'Add your first measurement to start tracking your progress here.')}
              </div>
            )}

            <p className="text-xs text-muted-foreground">
              {isWeightLossGoal && !isMinorWeightLossPlan
                ? L('نطاق فقدان الوزن تدريجيًا 0.45–0.9 كجم أسبوعيًا وفق إرشادات CDC؛ النسبة محسوبة من آخر وزن مسجل والتوقع ليس ضمانًا طبيًا.', 'The gradual 0.45–0.9 kg/week weight-loss range follows CDC guidance; percentages use your latest weight, and forecasts are not medical guarantees.')
                : L('التوقع مأخوذ من خطتك الغذائية الأخيرة ويُعرض كتقدير لا كضمان. الوزن يتذبذب طبيعيًا؛ استشر مختصًا عند وجود حالة صحية.', 'The estimate comes from your latest diet plan and is not a guarantee. Weight naturally fluctuates; consult a clinician if you have a medical condition.')}
              {' '}
              {!isMinorWeightLossPlan && (
                <a href="https://www.cdc.gov/healthy-weight-growth/losing-weight/index.html" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  {L('مصدر CDC', 'CDC source')}
                </a>
              )}
            </p>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="medications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="medications" className="flex items-center gap-2">
              <Pill className="w-4 h-4" />
              {L('أدويتي', 'My Medications')}
            </TabsTrigger>
            <TabsTrigger value="diseases" className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              {L('أمراضي', 'My Diseases')}
            </TabsTrigger>
            <TabsTrigger value="diet" className="flex items-center gap-2">
              <Utensils className="w-4 h-4" />
              {L('الغذائي', 'Diet')}
            </TabsTrigger>
            <TabsTrigger value="mental" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              {L('النفسية', 'Mental Health')}
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              {L('الإشعارات', 'Notifications')}
            </TabsTrigger>
          </TabsList>

          {/* Medications Tab */}
          <TabsContent value="medications">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>{L('أدويتي', 'My Medications')}</CardTitle>
                  <CardDescription>{L('إدارة الأدوية والتذكيرات', 'Manage medications and reminders')}</CardDescription>
                </div>
                <Dialog open={isAddingMed} onOpenChange={setIsAddingMed}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-medical">
                      <Plus className="w-4 h-4 ml-2" />
                      {L('إضافة دواء', 'Add Medication')}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{L('إضافة دواء جديد', 'Add New Medication')}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label>{L('اسم الدواء', 'Medication Name')}</Label>
                        <Input
                          value={newMed.name}
                          onChange={(e) => setNewMed({ ...newMed, name: e.target.value })}
                          placeholder={L('مثال: باراسيتامول', 'e.g. Paracetamol')}
                        />
                      </div>
                      <div>
                        <Label>{L('الجرعة', 'Dosage')}</Label>
                        <Input
                          value={newMed.dosage}
                          onChange={(e) => setNewMed({ ...newMed, dosage: e.target.value })}
                          placeholder={L('مثال: 500mg', 'e.g. 500mg')}
                        />
                      </div>
                      <div>
                        <Label>{L('عدد المرات يومياً', 'Times per day')}</Label>
                        <Select value={newMed.frequency} onValueChange={(v) => setNewMed({ ...newMed, frequency: v })}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">{L('مرة واحدة', 'Once')}</SelectItem>
                            <SelectItem value="2">{L('مرتين', 'Twice')}</SelectItem>
                            <SelectItem value="3">{L('3 مرات', '3 times')}</SelectItem>
                            <SelectItem value="4">{L('4 مرات', '4 times')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>{L('وقت الجرعة الأولى', 'First dose time')}</Label>
                        <Input
                          type="time"
                          value={newMed.time}
                          onChange={(e) => setNewMed({ ...newMed, time: e.target.value })}
                        />
                      </div>
                      <Button onClick={handleAddMedication} className="w-full bg-gradient-medical">
                        {L('إضافة', 'Add')}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                {medications.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Pill className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>{L('لا توجد أدوية مضافة', 'No medications added')}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {medications.map((med) => (
                      <div key={med.id} className="flex items-center justify-between p-4 border rounded-lg bg-card">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Pill className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{med.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {med.dosage} - {L(`${med.frequency} مرات يومياً`, `${med.frequency} times/day`)} - {med.time}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleReminder(med.id, med.reminder_enabled)}
                          >
                            {med.reminder_enabled ? (
                              <Bell className="w-4 h-4 text-primary" />
                            ) : (
                              <BellOff className="w-4 h-4 text-muted-foreground" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteMedication(med.id)}
                          >
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Diseases Tab */}
          <TabsContent value="diseases">
            <Card>
              <CardHeader>
                <CardTitle>{L('أمراضي', 'My Diseases')}</CardTitle>
                <CardDescription>{L('سجل الحالات المرضية الخاصة بك', 'Record of your medical conditions')}</CardDescription>
              </CardHeader>
              <CardContent>
                {userDiseases.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Stethoscope className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>{L('لا توجد أمراض مسجلة', 'No diseases recorded')}</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => navigate('/#my-diseases')}
                    >
                      {L('إضافة مرض', 'Add Disease')}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {userDiseases.map((disease) => (
                      <div key={disease.id} className="p-4 border rounded-lg bg-card">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              disease.type === 'mental' ? 'bg-purple-100 dark:bg-purple-900/30' : 'bg-primary/10'
                            }`}>
                              <Stethoscope className={`w-5 h-5 ${
                                disease.type === 'mental' ? 'text-purple-600 dark:text-purple-400' : 'text-primary'
                              }`} />
                            </div>
                            <div>
                              <h4 className="font-semibold">{disease.name}</h4>
                              <Badge variant="outline" className="text-xs">
                                {disease.type === 'physical' ? L('جسدي', 'Physical') : L('نفسي', 'Mental')}
                              </Badge>
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {new Date(disease.created_at).toLocaleDateString('ar-EG')}
                          </span>
                        </div>
                        {disease.diagnosed_at && (
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{L('تم التشخيص', 'Diagnosed')}: {new Date(disease.diagnosed_at).toLocaleDateString('ar-EG')}</span>
                          </div>
                        )}
                        {disease.notes && (
                          <p className="text-sm text-muted-foreground mt-2">{disease.notes}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Diet Tab */}
          <TabsContent value="diet">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>{L('سجل النظام الغذائي', 'Diet Log')}</CardTitle>
                  <CardDescription>{L('تاريخ خططك الغذائية', 'History of your diet plans')}</CardDescription>
                </div>
                <Button 
                  className="bg-gradient-medical"
                  onClick={() => navigate('/diet-plan')}
                >
                  <Plus className="w-4 h-4 ml-2" />
                  {L('إنشاء خطة جديدة', 'Create New Plan')}
                </Button>
              </CardHeader>
              <CardContent>
                {dietPlans.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Utensils className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>{L('لا توجد خطط غذائية', 'No diet plans')}</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="p-3 text-right">{L('التاريخ', 'Date')}</th>
                          <th className="p-3 text-right">{L('الهدف', 'Goal')}</th>
                          <th className="p-3 text-right">{L('الوزن', 'Weight')}</th>
                          <th className="p-3 text-right">{L('الطول', 'Height')}</th>
                          <th className="p-3 text-right">BMI</th>
                          <th className="p-3 text-right">{L('السعرات', 'Calories')}</th>
                          <th className="p-3 text-right">{L('إجراء', 'Action')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dietPlans.map((plan) => (
                          <tr key={plan.id} className="border-b hover:bg-muted/30">
                            <td className="p-3 text-sm">
                              {new Date(plan.created_at).toLocaleDateString('ar-EG')}
                            </td>
                            <td className="p-3">
                              <Badge variant="outline">
                                {plan.goal === 'gain' ? L('زيادة الوزن', 'Gain weight') : plan.goal === 'lose' ? L('إنقاص الوزن', 'Lose weight') : L('الحفاظ', 'Maintain')}
                              </Badge>
                            </td>
                            <td className="p-3 text-sm">{plan.weight} {L('كجم', 'kg')}</td>
                            <td className="p-3 text-sm">{plan.height} {L('سم', 'cm')}</td>
                            <td className="p-3 text-sm">{plan.bmi?.toFixed(1)}</td>
                            <td className="p-3 text-sm">{plan.calories} {L('سعرة', 'kcal')}</td>
                            <td className="p-3">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDeleteDietPlan(plan.id)}
                              >
                                <Trash2 className="w-4 h-4 text-destructive" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mental Health Tab */}
          <TabsContent value="mental">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>{L('سجل الحالة النفسية', 'Mental Health Log')}</CardTitle>
                  <CardDescription>{L('نتائج اختبارات الشخصية', 'Personality test results')}</CardDescription>
                </div>
                <Button 
                  className="bg-gradient-medical"
                  onClick={() => navigate('/personality-test')}
                >
                  <Plus className="w-4 h-4 ml-2" />
                  {L('اختبار جديد', 'New Test')}
                </Button>
              </CardHeader>
              <CardContent>
                {personalityResults.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>{L('لا توجد اختبارات', 'No tests taken')}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {personalityResults.map((result) => (
                      <div key={result.id} className="p-4 border rounded-lg bg-card">
                        <div className="flex items-center justify-between mb-2">
                          <Badge 
                            className={
                              result.level === 'سليم' ? 'bg-green-500' :
                              result.level === 'قلق خفيف' ? 'bg-yellow-500' :
                              result.level === 'يحتاج متابعة' ? 'bg-orange-500' : 'bg-red-500'
                            }
                          >
                            {result.level}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {new Date(result.created_at).toLocaleDateString('ar-EG')}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Activity className="w-4 h-4 text-primary" />
                          <span>{L('النتيجة', 'Score')}: {result.score}%</span>
                        </div>
                        {result.ai_analysis && (
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {result.ai_analysis}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <NotificationSettings />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
