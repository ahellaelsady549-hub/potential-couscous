import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Utensils, Camera, Sparkles, Loader2, Trash2, ImagePlus, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface Analysis {
  name: string;
  ingredients?: string;
  quantityGrams?: number;
  calories?: number;
  protein?: number;
  carbs?: number;
  fats?: number;
  riskLevel?: string;
  riskReason?: string;
  notes?: string;
}

const riskColor = (level?: string) =>
  level === 'عالي' ? 'destructive' : level === 'متوسط' ? 'secondary' : 'default';

export const GymFood = () => {
  const { user } = useAuth();
  const { L } = useLanguage();
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [quantity, setQuantity] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Analysis | null>(null);
  const [logs, setLogs] = useState<any[]>([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [asking, setAsking] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const loadLogs = async () => {
    if (!user) return;
    const { data } = await supabase
      .from('gym_food_logs').select('*')
      .eq('user_id', user.id).order('created_at', { ascending: false }).limit(10);
    setLogs(data ?? []);
  };

  useEffect(() => { loadLogs(); }, [user]);

  const saveAnalysis = async (a: Analysis, source: string) => {
    if (!user) return;
    await supabase.from('gym_food_logs').insert({
      user_id: user.id,
      name: a.name || 'وجبة',
      ingredients: a.ingredients ?? null,
      quantity_grams: a.quantityGrams ?? null,
      calories: a.calories ?? null,
      protein: a.protein ?? null,
      carbs: a.carbs ?? null,
      fats: a.fats ?? null,
      risk_level: a.riskLevel ?? null,
      risk_reason: a.riskReason ?? null,
      source,
      ai_notes: a.notes ?? null,
    });
    loadLogs();
  };

  const analyze = async (payload: Record<string, unknown>, source: string) => {
    setLoading(true);
    setResult(null);
    try {
      const { data, error } = await supabase.functions.invoke('gym-food-analyze', { body: payload });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setResult(data.analysis);
      await saveAnalysis(data.analysis, source);
      toast.success(L('تم تحليل الوجبة وحفظها','Meal analyzed and saved'));
    } catch (e: any) {
      toast.error(e?.message || L('تعذّر تحليل الوجبة','Could not analyze the meal'));
    } finally {
      setLoading(false);
    }
  };

  const [preview, setPreview] = useState<string | null>(null);
  const cameraRef = useRef<HTMLInputElement>(null);

  // Downscale to keep uploads fast and under limits
  const handleImage = async (file: File) => {
    if (!file.type.startsWith('image/')) { toast.error(L('اختار صورة','Choose an image')); return; }
    if (file.size > 25 * 1024 * 1024) { toast.error(L('حجم الصورة كبير (الحد 25 ميجا)','Image too large (25 MB limit)')); return; }
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const max = 1280;
      const s = Math.min(1, max / Math.max(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
      c.getContext('2d')?.drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      setPreview(c.toDataURL('image/jpeg', 0.85));
    };
    img.onerror = () => { URL.revokeObjectURL(url); toast.error(L('تعذّر قراءة الصورة','Could not read image')); };
    img.src = url;
  };

  const analyzePhoto = () => {
    if (!preview) return;
    analyze({ mode: 'image', imageBase64: preview, note: name, ingredients, quantityGrams: quantity }, 'image');
  };

  const ask = async () => {
    setAsking(true);
    setAnswer('');
    try {
      const { data, error } = await supabase.functions.invoke('gym-food-analyze', {
        body: { mode: 'suggest', question },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setAnswer(data.answer);
    } catch (e: any) {
      toast.error(e?.message || L('تعذّر الحصول على اقتراحات','Could not get suggestions'));
    } finally {
      setAsking(false);
    }
  };

  const removeLog = async (id: string) => {
    await supabase.from('gym_food_logs').delete().eq('id', id);
    loadLogs();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Utensils className="h-5 w-5 text-primary" />
            {L('تحليل الأكل (سعرات / بروتين / دهون / خطورة على الدايت)','Food analysis (calories / protein / fats / diet risk)')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input placeholder={L('اسم الوجبة (مثال: فرخة مشوية بالأرز)','Meal name (e.g. grilled chicken with rice)')} value={name} onChange={(e) => setName(e.target.value)} />
          <Textarea
            placeholder={L('المكونات والكميات (مثال: 200 جرام صدور فراخ، 150 جرام أرز، معلقة زيت)','Ingredients and amounts (e.g. 200 g chicken breast, 150 g rice, 1 tbsp oil)')}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={3}
          />
          <Input type="number" placeholder={L('الكمية الإجمالية بالجرام (اختياري)','Total weight in grams (optional)')} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Button size="lg" className="h-14 text-base"
              onClick={() => analyze({ mode: 'text', name, ingredients, quantityGrams: quantity }, 'manual')}
              disabled={loading || (!name && !ingredients)}
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin ms-2" /> : <Sparkles className="h-5 w-5 ms-2" />}
              {L('حلّل من الكتابة','Analyze from text')}
            </Button>
            <Button size="lg" variant="outline" className="h-14 text-base" onClick={() => cameraRef.current?.click()} disabled={loading}>
              <Camera className="h-5 w-5 ms-2" />
              {L('التقط صورة','Take a photo')}
            </Button>
            <Button size="lg" variant="outline" className="h-14 text-base" onClick={() => fileRef.current?.click()} disabled={loading}>
              <ImagePlus className="h-5 w-5 ms-2" />
              {L('ارفع صورة','Upload a photo')}
            </Button>
            <input ref={cameraRef} type="file" accept="image/*" capture="environment" className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImage(f); e.target.value = ''; }} />
            <input ref={fileRef} type="file" accept="image/*" className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImage(f); e.target.value = ''; }} />
          </div>

          {preview && (
            <div className="rounded-xl border border-border p-3 space-y-3">
              <img src={preview} alt={L('صورة الوجبة','Meal photo')} className="w-full max-h-72 object-contain rounded-lg" />
              <p className="text-sm text-muted-foreground">
                {L('للدقة: اكتب فوق محتويات الوجبة وكمياتها (مثلاً 200 جم فراخ، 150 جم أرز، معلقة زيت) قبل التحليل.','For accuracy: write the meal contents and amounts above before analyzing.')}
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Button size="lg" className="h-14 text-base" onClick={analyzePhoto} disabled={loading}>
                  {loading ? <Loader2 className="h-5 w-5 animate-spin ms-2" /> : <Sparkles className="h-5 w-5 ms-2" />}
                  {L('حلّل الصورة','Analyze photo')}
                </Button>
                <Button size="lg" variant="ghost" className="h-14 text-base" onClick={() => setPreview(null)} disabled={loading}>
                  <X className="h-5 w-5 ms-2" />{L('إلغاء','Cancel')}
                </Button>
              </div>
            </div>
          )}

          {result && (
            <div className="rounded-lg border border-border p-4 space-y-2">
              <h3 className="font-semibold">{result.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div className="rounded-md bg-muted/50 p-2">{L('السعرات','Calories')}: <b>{result.calories}</b></div>
                <div className="rounded-md bg-muted/50 p-2">{L('بروتين','Protein')}: <b>{result.protein} {L('جم','g')}</b></div>
                <div className="rounded-md bg-muted/50 p-2">{L('كارب','Carbs')}: <b>{result.carbs} {L('جم','g')}</b></div>
                <div className="rounded-md bg-muted/50 p-2">{L('دهون','Fats')}: <b>{result.fats} {L('جم','g')}</b></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">{L('مستوى الخطورة على الدايت','Diet risk level')}:</span>
                <Badge variant={riskColor(result.riskLevel) as any}>{result.riskLevel}</Badge>
              </div>
              {result.riskReason && <p className="text-sm text-muted-foreground">{result.riskReason}</p>}
              {result.notes && <p className="text-sm">{result.notes}</p>}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Sparkles className="h-5 w-5 text-primary" />
            {L('اقترح وجبات بأعلى بروتين','Suggest highest-protein meals')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Textarea
            rows={2}
            placeholder={L('مثال: عندي فراخ وبيض وزبادي — إيه أعلى وجبات بروتين أقدر أعملها؟','e.g. I have chicken, eggs and yogurt — what are the highest-protein meals I can make?')}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Button onClick={ask} disabled={asking}>
            {asking ? <Loader2 className="h-4 w-4 animate-spin ms-2" /> : <Sparkles className="h-4 w-4 ms-2" />}
            {L('اقترح وجبات','Suggest meals')}
          </Button>
          {answer && <div className="rounded-lg border border-border p-4 text-sm whitespace-pre-wrap">{answer}</div>}
        </CardContent>
      </Card>

      {logs.length > 0 && (
        <Card>
          <CardHeader><CardTitle className="text-lg">{L('سجل وجباتي','My meal log')}</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {logs.map((l) => (
              <div key={l.id} className="flex items-center justify-between gap-2 rounded-md bg-muted/40 px-3 py-2 text-sm">
                <div>
                  <b>{l.name}</b>
                  <span className="text-muted-foreground"> — {l.calories ?? '?'} {L('سعرة','kcal')} / {l.protein ?? '?'} {L('جم بروتين','g protein')}</span>
                  {l.risk_level && <Badge className="ms-2" variant={riskColor(l.risk_level) as any}>{l.risk_level}</Badge>}
                </div>
                <Button size="icon" variant="ghost" onClick={() => removeLog(l.id)} aria-label={L('حذف','Delete')}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
