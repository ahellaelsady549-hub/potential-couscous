import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Stethoscope, Plus, Trash2, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { physicalDiseases } from '@/data/physicalDiseases';
import { mentalDiseases } from '@/data/mentalDiseases';
import { useLanguage } from '@/contexts/LanguageContext';

interface Disease {
  id: string;
  name: string;
  type: string;
  notes: string | null;
  diagnosed_at: string | null;
}

export const MyDiseases = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const { L } = useLanguage();
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [newDisease, setNewDisease] = useState({
    name: '',
    type: 'physical' as 'physical' | 'mental',
    notes: '',
    diagnosed_at: ''
  });

  // Fetch diseases from database
  useEffect(() => {
    if (user) {
      fetchDiseases();
    }
  }, [user]);

  const fetchDiseases = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('user_diseases')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: L('خطأ', 'Error'),
        description: L('حدث خطأ أثناء تحميل الأمراض', 'An error occurred while loading diseases'),
        variant: 'destructive'
      });
    } else {
      setDiseases(data || []);
    }
    setIsLoading(false);
  };

  const addDisease = async () => {
    if (!user) return;
    
    if (!newDisease.name.trim()) {
      toast({
        title: L('خطأ', 'Error'),
        description: L('يرجى إدخال اسم المرض', 'Please enter the disease name'),
        variant: "destructive",
      });
      return;
    }

    const { data, error } = await supabase
      .from('user_diseases')
      .insert({
        user_id: user.id,
        name: newDisease.name,
        type: newDisease.type,
        notes: newDisease.notes || null,
        diagnosed_at: newDisease.diagnosed_at || null
      })
      .select()
      .single();

    if (error) {
      toast({
        title: L('خطأ', 'Error'),
        description: L('حدث خطأ أثناء إضافة المرض', 'An error occurred while adding the disease'),
        variant: 'destructive'
      });
    } else {
      setDiseases([data, ...diseases]);
      setNewDisease({ name: '', type: 'physical', notes: '', diagnosed_at: '' });
      setIsDialogOpen(false);
      toast({
        title: L("تمت الإضافة ✓", "Added ✓"),
        description: L(`تم إضافة ${data.name} إلى قائمة أمراضك`, `${data.name} was added to your disease list`),
      });
    }
  };

  const removeDisease = async (id: string) => {
    const disease = diseases.find(d => d.id === id);
    
    const { error } = await supabase
      .from('user_diseases')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: L('خطأ', 'Error'),
        description: L('حدث خطأ أثناء حذف المرض', 'An error occurred while deleting the disease'),
        variant: 'destructive'
      });
    } else {
      setDiseases(diseases.filter(d => d.id !== id));
      toast({
        title: L("تم الحذف", "Deleted"),
        description: L(`تم إزالة ${disease?.name} من القائمة`, `${disease?.name} was removed from the list`),
      });
    }
  };

  // Get all diseases for autocomplete suggestions
  const allDiseases = [
    ...physicalDiseases.map(d => ({ name: d.nameAr, type: 'physical' as const })),
    ...mentalDiseases.map(d => ({ name: d.nameAr, type: 'mental' as const }))
  ];

  const handleDiseaseSelect = (name: string) => {
    const found = allDiseases.find(d => d.name === name);
    if (found) {
      setNewDisease({ ...newDisease, name, type: found.type });
    }
  };

  if (isLoading) {
    return (
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse text-primary">{L('جاري التحميل...', 'Loading...')}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="my-diseases" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Stethoscope className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{L('أمراضي', 'My Diseases')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {L('سجل أمراضك وتابع حالتك الصحية', 'Track your diseases and monitor your health condition')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Add Disease Button */}
          <div className="flex justify-center mb-8">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2 bg-gradient-to-r from-primary to-accent">
                  <Plus className="h-5 w-5" />
                  {L('إضافة مرض جديد', 'Add New Disease')}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-right">{L('إضافة مرض جديد', 'Add New Disease')}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>{L('اسم المرض *', 'Disease Name *')}</Label>
                    <Input
                      value={newDisease.name}
                      onChange={(e) => setNewDisease({ ...newDisease, name: e.target.value })}
                      placeholder={L('مثال: السكري', 'Example: Diabetes')}
                      list="diseases-list"
                    />
                    <datalist id="diseases-list">
                      {allDiseases.map((d, i) => (
                        <option key={i} value={d.name} />
                      ))}
                    </datalist>
                  </div>
                  <div className="space-y-2">
                    <Label>{L('نوع المرض', 'Disease Type')}</Label>
                    <Select 
                      value={newDisease.type} 
                      onValueChange={(v: 'physical' | 'mental') => setNewDisease({ ...newDisease, type: v })}
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
                  <div className="space-y-2">
                    <Label>{L('تاريخ التشخيص', 'Diagnosis Date')}</Label>
                    <Input
                      type="date"
                      value={newDisease.diagnosed_at}
                      onChange={(e) => setNewDisease({ ...newDisease, diagnosed_at: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>{L('ملاحظات', 'Notes')}</Label>
                    <Textarea
                      value={newDisease.notes}
                      onChange={(e) => setNewDisease({ ...newDisease, notes: e.target.value })}
                      placeholder={L('أي ملاحظات إضافية...', 'Any additional notes...')}
                      rows={3}
                    />
                  </div>
                  <Button onClick={addDisease} className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    {L('إضافة المرض', 'Add Disease')}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Diseases List */}
          {diseases.length === 0 ? (
            <Card className="p-8 text-center">
              <Stethoscope className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">{L('لا توجد أمراض مسجلة', 'No diseases recorded')}</p>
              <p className="text-sm text-muted-foreground mt-2">{L('اضغط على "إضافة مرض جديد" لتسجيل حالتك الصحية', 'Click "Add New Disease" to record your health condition')}</p>
            </Card>
          ) : (
            <div className="grid gap-4">
              {diseases.map(disease => (
                <Card key={disease.id} className="p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                      disease.type === 'mental' ? 'bg-purple-100 dark:bg-purple-900/30' : 'bg-primary/10'
                    }`}>
                      <Stethoscope className={`h-6 w-6 ${
                        disease.type === 'mental' ? 'text-purple-600 dark:text-purple-400' : 'text-primary'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg truncate">{disease.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {disease.type === 'physical' ? L('مرض جسدي', 'Physical disease') : L('مرض نفسي', 'Mental disease')}
                      </p>
                      {disease.diagnosed_at && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                          <Calendar className="h-3 w-3" />
                          <span>{L('تم التشخيص', 'Diagnosed')}: {new Date(disease.diagnosed_at).toLocaleDateString('ar-EG')}</span>
                        </div>
                      )}
                      {disease.notes && (
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{disease.notes}</p>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeDisease(disease.id)}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
