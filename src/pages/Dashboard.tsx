import { useState, useEffect, useRef } from 'react';
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
  Link as LinkIcon
} from 'lucide-react';
import { treatments } from '@/data/treatments';
import { useLanguage } from '@/contexts/LanguageContext';
import { WorkoutProgress } from '@/components/gym/WorkoutProgress';
 
import { DoctorSchedule } from '@/components/chat/DoctorSchedule';

import { playMedicationReminderSound } from '@/services/pushNotifications';

const DEFAULT_DOSE_TIMES = ['08:00', '14:00', '20:00', '22:00'];

const normalizeDoseTime = (time: string): string | null => {
  const match = time.match(/^([01]\d|2[0-3]):[0-5]\d(?::[0-5]\d)?$/);
  return match ? time.slice(0, 5) : null;
};

const getMedicationTimes = (time: string): string[] => {
  try {
    const parsed: unknown = JSON.parse(time);
    if (Array.isArray(parsed)) {
      const times = parsed
        .filter((value): value is string => typeof value === 'string')
        .map(normalizeDoseTime)
        .filter((value): value is string => value !== null);
      if (times.length > 0) return times;
    }
  } catch {
    // Older medication records contain a single plain time.
  }

  const legacyTime = normalizeDoseTime(time);
  return legacyTime ? [legacyTime] : [];
};

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
  goal: string;
  bmi: number;
  calories: number;
  created_at: string;
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

  const [myDoctorId, setMyDoctorId] = useState<string | null>(null);
  useEffect(() => {
    if (!user) return;
    supabase.from('doctors').select('id').eq('user_id', user.id).eq('is_verified', true).maybeSingle()
      .then(({ data }) => setMyDoctorId(data?.id ?? null));
  }, [user]);
  const [medications, setMedications] = useState<Medication[]>([]);
  const [dietPlans, setDietPlans] = useState<DietPlan[]>([]);
  const [personalityResults, setPersonalityResults] = useState<PersonalityResult[]>([]);
  const [userDiseases, setUserDiseases] = useState<UserDisease[]>([]);
  const [isAddingMed, setIsAddingMed] = useState(false);
  const [isAddingDisease, setIsAddingDisease] = useState(false);
  const [newDisease, setNewDisease] = useState({ name: '', type: 'physical' as 'physical' | 'mental' });
  const notifiedDoseKeys = useRef(new Set<string>());
  const [userProfile, setUserProfile] = useState<{ full_name: string | null; avatar_url: string | null } | null>(null);
  const [newMed, setNewMed] = useState({
    name: '',
    dosage: '',
    frequency: '1',
    times: ['08:00'],
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

  useEffect(() => {
    const checkMedicationReminders = () => {
      const now = new Date();
      const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      const currentDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

      medications.forEach((medication) => {
        if (!medication.reminder_enabled) return;

        getMedicationTimes(medication.time).forEach((time) => {
          if (time !== currentTime) return;
          const reminderKey = `${currentDate}:${medication.id}:${time}`;
          if (notifiedDoseKeys.current.has(reminderKey)) return;
          notifiedDoseKeys.current.add(reminderKey);

          const title = L('تذكير بموعد الدواء 💊', 'Medication reminder 💊');
          const body = L(
            `حان موعد تناول ${medication.name} - ${medication.dosage}`,
            `It's time to take ${medication.name} - ${medication.dosage}`
          );

          if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
            new Notification(title, {
              body,
              icon: '/favicon.ico',
              tag: `medication-${medication.id}-${time}`,
            });
          }

          void playMedicationReminderSound().catch((error: unknown) => {
            console.error('Unable to play the medication reminder sound:', error);
          });
          toast({ title, description: body });
        });
      });
    };

    checkMedicationReminders();
    const interval = window.setInterval(checkMedicationReminders, 15000);
    return () => window.clearInterval(interval);
  }, [medications, L, toast]);

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
  };

  const handleAddMedication = async () => {
    if (!user) return;
    if (!newMed.name.trim()) {
      toast({
        title: L('خطأ', 'Error'),
        description: L('يرجى إدخال اسم الدواء', 'Please enter a medication name'),
        variant: 'destructive',
      });
      return;
    }

    // Check if medication exists in treatments database
    const foundTreatment = treatments.find(t => 
      t.nameAr.includes(newMed.name) ||
      t.nameEn.toLowerCase().includes(newMed.name.toLowerCase()) ||
      newMed.name.toLowerCase().includes(t.nameEn.toLowerCase())
    );

    const dosage = foundTreatment?.dosageAr || newMed.dosage;
    const frequency = foundTreatment ? '3' : newMed.frequency;
    const doseCount = Number(frequency);
    const times = Array.from({ length: doseCount }, (_, index) =>
      newMed.times[index] || DEFAULT_DOSE_TIMES[index] || '08:00'
    );
    if (times.some((time) => !normalizeDoseTime(time))) {
      toast({
        title: L('خطأ', 'Error'),
        description: L('يرجى تحديد موعد لكل جرعة', 'Please set a time for every dose'),
        variant: 'destructive',
      });
      return;
    }

    const { data, error } = await supabase
      .from('user_medications')
      .insert({
        user_id: user.id,
        name: newMed.name.trim(),
        dosage: dosage,
        frequency: frequency,
        time: JSON.stringify(times),
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
      setNewMed({ name: '', dosage: '', frequency: '1', times: ['08:00'], disease_id: '' });
      setIsAddingMed(false);
      toast({
        title: L('تمت الإضافة', 'Added'),
        description: foundTreatment 
          ? L(`تم إضافة ${newMed.name} مع الجرعة الموصى بها تلقائياً`, `${newMed.name} was added with the recommended dosage automatically`)
          : L('تم إضافة الدواء بنجاح', 'Medication added successfully')
      });
    }
  };

  const handleAddDisease = async () => {
    if (!user || !newDisease.name.trim()) {
      toast({
        title: L('خطأ', 'Error'),
        description: L('يرجى إدخال اسم المرض', 'Please enter a disease name'),
        variant: 'destructive',
      });
      return;
    }

    const { data, error } = await supabase
      .from('user_diseases')
      .insert({
        user_id: user.id,
        name: newDisease.name.trim(),
        type: newDisease.type,
      })
      .select()
      .single();

    if (error) {
      toast({
        title: L('خطأ', 'Error'),
        description: L('حدث خطأ أثناء إضافة المرض', 'An error occurred while adding the disease'),
        variant: 'destructive',
      });
      return;
    }

    setUserDiseases((currentDiseases) => [data, ...currentDiseases]);
    setNewDisease({ name: '', type: 'physical' });
    setIsAddingDisease(false);
    toast({
      title: L('تمت الإضافة ✓', 'Added ✓'),
      description: L(`تم إضافة ${data.name} إلى قائمة أمراضك`, `${data.name} was added to your disease list`),
    });
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

        {myDoctorId && <div className="mb-6"><DoctorSchedule doctorId={myDoctorId} /></div>}

        {/* Tabs */}
        <Tabs defaultValue="medications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 h-auto">
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
            <TabsTrigger value="gym" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              {L('الجيم', 'Gym')}
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
                        <Select
                          value={newMed.frequency}
                          onValueChange={(frequency) => {
                            const count = Number(frequency);
                            setNewMed({
                              ...newMed,
                              frequency,
                              times: Array.from(
                                { length: count },
                                (_, index) => newMed.times[index] || DEFAULT_DOSE_TIMES[index] || '08:00'
                              ),
                            });
                          }}
                        >
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
                      {newMed.times.map((time, index) => (
                        <div key={index}>
                          <Label>
                            {L(`موعد الجرعة ${index + 1}`, `Dose ${index + 1} time`)}
                          </Label>
                          <Input
                            type="time"
                            value={time}
                            onChange={(event) => {
                              const times = [...newMed.times];
                              times[index] = event.target.value;
                              setNewMed({ ...newMed, times });
                            }}
                          />
                        </div>
                      ))}
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
                              {med.dosage} - {L(`${med.frequency} مرات يومياً`, `${med.frequency} times/day`)} - {getMedicationTimes(med.time).join('، ')}
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
              <CardHeader className="flex flex-row items-center justify-between gap-4">
                <div>
                  <CardTitle>{L('أمراضي', 'My Diseases')}</CardTitle>
                  <CardDescription>{L('سجل الحالات المرضية الخاصة بك', 'Record of your medical conditions')}</CardDescription>
                </div>
                <Dialog open={isAddingDisease} onOpenChange={setIsAddingDisease}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-medical">
                      <Plus className="w-4 h-4 ml-2" />
                      {L('إضافة مرض', 'Add Disease')}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{L('إضافة مرض جديد', 'Add New Disease')}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label>{L('اسم المرض', 'Disease name')}</Label>
                        <Input
                          value={newDisease.name}
                          onChange={(event) => setNewDisease({ ...newDisease, name: event.target.value })}
                          placeholder={L('اكتب اسم المرض', 'Enter a disease name')}
                        />
                      </div>
                      <div>
                        <Label>{L('نوع المرض', 'Disease type')}</Label>
                        <Select
                          value={newDisease.type}
                          onValueChange={(type: 'physical' | 'mental') => setNewDisease({ ...newDisease, type })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="physical">{L('جسدي', 'Physical')}</SelectItem>
                            <SelectItem value="mental">{L('نفسي', 'Mental')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button onClick={handleAddDisease} className="w-full bg-gradient-medical">
                        {L('حفظ المرض', 'Save Disease')}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                {userDiseases.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Stethoscope className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>{L('لا توجد أمراض مسجلة', 'No diseases recorded')}</p>
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

          <TabsContent value="gym">
            <WorkoutProgress />
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
