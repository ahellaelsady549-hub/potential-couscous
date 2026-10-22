import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Pill, Plus, Trash2, Bell, Clock, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  time: string;
  reminder: boolean;
  addedAt: number;
}

const STORAGE_KEY = 'es3efny_medications';

export const MyMedications = () => {
  const { toast } = useToast();
  const { L } = useLanguage();
  const frequencyOptions = [
    { value: 'once', label: L('مرة واحدة يومياً', 'Once a day') },
    { value: 'twice', label: L('مرتين يومياً', 'Twice a day') },
    { value: 'three', label: L('3 مرات يومياً', '3 times a day') },
    { value: 'four', label: L('4 مرات يومياً', '4 times a day') },
    { value: 'weekly', label: L('مرة أسبوعياً', 'Once a week') },
    { value: 'asneeded', label: L('عند الحاجة', 'As needed') },
  ];
  const [medications, setMedications] = useState<Medication[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newMed, setNewMed] = useState({
    name: '',
    dosage: '',
    frequency: 'once',
    time: '08:00',
    reminder: true
  });

  // Load medications from cookies/localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setMedications(JSON.parse(saved));
      } catch {
        setMedications([]);
      }
    }
  }, []);

  // Save medications to cookies/localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(medications));
    // Also save to cookie for persistence
    document.cookie = `${STORAGE_KEY}=${encodeURIComponent(JSON.stringify(medications))}; max-age=31536000; path=/`;
  }, [medications]);

  // Check for reminders
  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
      
      medications.forEach(med => {
        if (med.reminder && med.time === currentTime) {
          // Show notification
          if ('Notification' in window && Notification.permission === 'granted') {
            new Notification(L('تذكير بالدواء 💊', 'Medication reminder 💊'), {
              body: L(`حان موعد تناول ${med.name} - ${med.dosage}`, `It's time to take ${med.name} - ${med.dosage}`),
              icon: '/favicon.ico'
            });
          }
          
          toast({
            title: L("تذكير بالدواء 💊", "Medication reminder 💊"),
            description: L(`حان موعد تناول ${med.name} - ${med.dosage}`, `It's time to take ${med.name} - ${med.dosage}`),
          });
        }
      });
    };

    const interval = setInterval(checkReminders, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [medications, toast]);

  // Request notification permission
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  const addMedication = () => {
    if (!newMed.name.trim()) {
      toast({
        title: L("خطأ", "Error"),
        description: L("يرجى إدخال اسم الدواء", "Please enter the medication name"),
        variant: "destructive",
      });
      return;
    }

    const medication: Medication = {
      id: Date.now().toString(),
      ...newMed,
      addedAt: Date.now()
    };

    setMedications(prev => [...prev, medication]);
    setNewMed({ name: '', dosage: '', frequency: 'once', time: '08:00', reminder: true });
    setIsDialogOpen(false);

    toast({
      title: L("تمت الإضافة ✓", "Added ✓"),
      description: L(`تم إضافة ${medication.name} إلى قائمة أدويتك`, `${medication.name} was added to your medication list`),
    });
  };

  const removeMedication = (id: string) => {
    const med = medications.find(m => m.id === id);
    setMedications(prev => prev.filter(m => m.id !== id));
    
    toast({
      title: L("تم الحذف", "Deleted"),
      description: L(`تم إزالة ${med?.name} من القائمة`, `${med?.name} was removed from the list`),
    });
  };

  const toggleReminder = (id: string) => {
    setMedications(prev => prev.map(med => {
      if (med.id === id) {
        const updated = { ...med, reminder: !med.reminder };
        toast({
          title: updated.reminder ? L("التذكير مُفعَّل 🔔", "Reminder enabled 🔔") : L("التذكير مُعطَّل 🔕", "Reminder disabled 🔕"),
          description: `${med.name}`,
        });
        return updated;
      }
      return med;
    }));
  };

  const getFrequencyLabel = (value: string) => {
    return frequencyOptions.find(f => f.value === value)?.label || value;
  };

  return (
    <section id="my-medications" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Pill className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{L('أدويتي', 'My Medications')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {L('أضف أدويتك وسنذكرك بمواعيدها', 'Add your medications and we will remind you of their times')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Add Medication Button */}
          <div className="flex justify-center mb-8">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2 bg-gradient-to-r from-primary to-accent">
                  <Plus className="h-5 w-5" />
                  {L('إضافة دواء جديد', 'Add New Medication')}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-right">{L('إضافة دواء جديد', 'Add New Medication')}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>{L('اسم الدواء *', 'Medication Name *')}</Label>
                    <Input
                      value={newMed.name}
                      onChange={(e) => setNewMed({ ...newMed, name: e.target.value })}
                      placeholder={L('مثال: بنادول', 'Example: Panadol')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>{L('الجرعة', 'Dosage')}</Label>
                    <Input
                      value={newMed.dosage}
                      onChange={(e) => setNewMed({ ...newMed, dosage: e.target.value })}
                      placeholder={L('مثال: قرص واحد', 'Example: One tablet')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>{L('عدد المرات', 'Frequency')}</Label>
                    <Select value={newMed.frequency} onValueChange={(v) => setNewMed({ ...newMed, frequency: v })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {frequencyOptions.map(opt => (
                          <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>{L('وقت التذكير', 'Reminder Time')}</Label>
                    <Input
                      type="time"
                      value={newMed.time}
                      onChange={(e) => setNewMed({ ...newMed, time: e.target.value })}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="reminder"
                      checked={newMed.reminder}
                      onChange={(e) => setNewMed({ ...newMed, reminder: e.target.checked })}
                      className="rounded"
                    />
                    <Label htmlFor="reminder" className="cursor-pointer">{L('تفعيل التذكير', 'Enable Reminder')}</Label>
                  </div>
                  <Button onClick={addMedication} className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    {L('إضافة الدواء', 'Add Medication')}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Medications List */}
          {medications.length === 0 ? (
            <Card className="p-8 text-center">
              <Pill className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">{L('لا توجد أدوية مضافة', 'No medications added')}</p>
              <p className="text-sm text-muted-foreground mt-2">{L('اضغط على "إضافة دواء جديد" لإضافة أدويتك', 'Click "Add New Medication" to add your medications')}</p>
            </Card>
          ) : (
            <div className="grid gap-4">
              {medications.map(med => (
                <Card key={med.id} className="p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Pill className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg truncate">{med.name}</h3>
                      <p className="text-sm text-muted-foreground">{med.dosage || L('بدون جرعة محددة', 'No specific dosage')}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {med.time}
                        </span>
                        <span>{getFrequencyLabel(med.frequency)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleReminder(med.id)}
                      className={med.reminder ? 'text-primary' : 'text-muted-foreground'}
                    >
                      <Bell className={`h-5 w-5 ${med.reminder ? 'fill-current' : ''}`} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeMedication(med.id)}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {medications.length > 0 && (
            <p className="text-center text-xs text-muted-foreground mt-6">
              {L('💾 يتم حفظ أدويتك تلقائياً على هذا الجهاز', '💾 Your medications are automatically saved on this device')}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
