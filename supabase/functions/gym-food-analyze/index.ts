import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10; // requests per hour for diet plans
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(userId: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(userId);
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(userId, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }
  
  if (userLimit.count >= RATE_LIMIT) {
    return false;
  }
  
  userLimit.count++;
  return true;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify authentication
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'غير مصرح. يرجى تسجيل الدخول.' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } }
    });

    // Verify JWT and get user
    const token = authHeader.replace('Bearer ', '');
    const { data: claimsData, error: claimsError } = await supabase.auth.getUser(token);
    
    if (claimsError || !claimsData?.user) {
      return new Response(JSON.stringify({ error: 'جلسة غير صالحة. يرجى إعادة تسجيل الدخول.' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const userId = claimsData.user.id;

    // Check rate limit
    if (!checkRateLimit(userId)) {
      return new Response(JSON.stringify({ error: 'تم تجاوز الحد المسموح. يمكنك إنشاء 10 أنظمة غذائية في الساعة.' }), {
        status: 429,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const body = await req.json();
    const height = Number(body.height), weight = Number(body.weight), age = Number(body.age);
    const gender = body.gender === 'female' ? 'female' : 'male';
    const activityLevel = String(body.activityLevel ?? 'moderate').slice(0, 40);
    if (!(height > 80 && height < 260 && weight > 20 && weight < 400 && age > 5 && age < 120)) {
      return new Response(JSON.stringify({ error: 'بيانات الطول/الوزن/العمر غير صحيحة' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    const clean = (v: unknown, n = 300) => String(v ?? '').replace(/[`$<>]/g, '').slice(0, n).trim();
    const requestedGoal = ['lose', 'maintain', 'gain', 'muscle'].includes(body.goal) ? body.goal : null;
    const dietType = clean(body.dietType, 40) || 'regular';
    const mealsPerDay = Math.min(6, Math.max(2, Number(body.mealsPerDay) || 3));
    const budget = clean(body.budget, 20) || 'medium';
    const conditions = clean(body.conditions);
    const allergies = clean(body.allergies);
    const dislikes = clean(body.dislikes);
    const lang = body.lang === 'en' ? 'en' : 'ar';

    // Latest mental-health test result for this user (RLS scoped)
    const { data: mh } = await supabase.from('user_personality_results')
      .select('level, score, category_scores, created_at')
      .eq('user_id', userId).order('created_at', { ascending: false }).limit(1).maybeSingle();
    let mentalContext = 'لا يوجد اختبار صحة نفسية محفوظ.';
    if (mh) {
      const cats = Object.entries((mh.category_scores ?? {}) as Record<string, number>)
        .filter(([, v]) => Number(v) >= 2).map(([k, v]) => `${k}=${Number(v).toFixed(1)}/4`).join('، ');
      mentalContext = `آخر نتيجة: ${mh.level} (${mh.score}%). مؤشرات مرتفعة: ${cats || 'لا شيء'}.`;
    }
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const bmi = weight / Math.pow(height / 100, 2);
    const bodyType = bmi < 18.5 ? 'underweight' : bmi < 25 ? 'normal' : 'overweight';
    const goal = requestedGoal ?? (bodyType === 'underweight' ? 'gain' : bodyType === 'overweight' ? 'lose' : 'maintain');

    // Mifflin-St Jeor BMR + activity → TDEE
    const bmr = 10 * weight + 6.25 * height - 5 * age + (gender === 'male' ? 5 : -161);
    const actMap: Record<string, number> = { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, very_active: 1.9, veryActive: 1.9 };
    const tdee = bmr * (actMap[activityLevel] ?? 1.55);
    const adj = goal === 'lose' ? -500 : goal === 'gain' ? 400 : goal === 'muscle' ? 250 : 0;
    const targetCalories = Math.round(Math.max(gender === 'male' ? 1500 : 1200, tdee + adj));
    const proteinPerKg = goal === 'muscle' ? 2 : goal === 'lose' ? 1.8 : 1.4;

    const idealWeight = gender === 'male'
      ? 50 + 2.3 * ((height / 2.54) - 60)
      : 45.5 + 2.3 * ((height / 2.54) - 60);
    const weeklyChange = goal === 'lose' ? -0.5 : goal === 'gain' ? 0.4 : goal === 'muscle' ? 0.25 : 0;
    const predictedWeightAfterMonth = weight + weeklyChange * 4;
    const goalLabel: Record<string, string> = { lose: 'خسارة دهون', maintain: 'ثبات الوزن', gain: 'زيادة وزن', muscle: 'بناء عضل' };
    const goalDescription = `هدفك: ${goalLabel[goal]} — ${targetCalories} سعرة يومياً`;

    const systemPrompt = `أنت أخصائي تغذية علاجية. صمّم خطة شخصية فعلية — ممنوع الخطة العامة.
اكتب كل النصوص بلغة: ${lang === 'en' ? 'English' : 'العربية (مصري مفهوم)'}.

## قيود إلزامية:
- السعرات المستهدفة بالضبط تقريباً: ${targetCalories} (±5%). البروتين ≈ ${Math.round(proteinPerKg * weight)} جم.
- عدد الوجبات في اليوم: ${mealsPerDay}. وزّع الأكل على هذا العدد بالظبط (استخدم breakfast/lunch/dinner، والباقي في snacks).
- نمط الأكل: ${dietType}. الميزانية: ${budget} — استخدم أكلات متاحة في مصر بأسعار مناسبة للميزانية.
- حساسية (ممنوع نهائياً أي مكون منها أو مشتقاته): ${allergies || 'لا يوجد'}.
- أكلات لا يحبها (لا تستخدمها): ${dislikes || 'لا يوجد'}.
- حالات صحية (عدّل الخطة لها، مثلاً سكر: كارب منخفض المؤشر الجلايسيمي، ضغط: صوديوم قليل): ${conditions || 'لا يوجد'}.
- الصحة النفسية: ${mentalContext}
  اربطها بالتغذية: مثلاً اكتئاب/قلق → أوميجا 3، مغنيسيوم، ثبات سكر الدم، تقليل الكافيين؛ أرق → عشاء خفيف بدري وبدون كافيين بعد العصر؛ مؤشرات اضطراب أكل → لا تقييد قاسي ولا عدّ مهووس، وانصح بمتابعة مختص. اذكر هذا الربط في tips.
- كل عنصر في items يكون: "الطعام (الكمية بالجرام أو الوحدة) - السعرات".

أعد JSON فقط:
{
  "dailyCalories": ${targetCalories},
  "bmi": ${bmi.toFixed(1)},
  "bmiCategory": "${bmi < 18.5 ? 'نحيف' : bmi < 25 ? 'طبيعي' : bmi < 30 ? 'وزن زائد' : 'سمنة'}",
  "bodyType": "${bodyType}",
  "goalDescription": "${goalDescription}",
  "weightPrediction": {
    "currentWeight": ${weight},
    "targetWeight": ${Math.round(idealWeight)},
    "predictedWeightAfterMonth": ${predictedWeightAfterMonth.toFixed(1)},
    "weeklyChange": ${weeklyChange}
  },
  "macros": { "protein": number, "carbs": number, "fats": number, "fiber": number },
  "waterIntake": "X لتر",
  "breakfast": { "title": "...", "items": ["..."], "calories": number },
  "lunch": { "title": "...", "items": ["..."], "calories": number },
  "dinner": { "title": "...", "items": ["..."], "calories": number },
  "snacks": { "title": "...", "items": ["..."], "calories": number },
  "tips": ["..."],
  "avoid": ["..."]
}`;

    const userPrompt = `الطول ${height} سم، الوزن ${weight} كجم، العمر ${age}، الجنس ${gender === 'male' ? 'ذكر' : 'أنثى'}، النشاط ${activityLevel}، BMR ${Math.round(bmr)}، TDEE ${Math.round(tdee)}، الهدف ${goalLabel[goal]}. أعد JSON فقط.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-5.6-sol",
        reasoning_effort: "none",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "تم تجاوز الحد المسموح. يرجى المحاولة لاحقاً." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "يرجى إضافة رصيد للمتابعة." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "حدث خطأ في الاتصال" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "";
    
    console.log("AI diet plan generated for user:", userId);

    let dietPlan;
    try {
      const jsonMatch = aiResponse.match(/```json\s*([\s\S]*?)\s*```/) || aiResponse.match(/\{[\s\S]*\}/);
      const jsonStr = jsonMatch ? (jsonMatch[1] || jsonMatch[0]) : aiResponse;
      dietPlan = JSON.parse(jsonStr);
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      return new Response(JSON.stringify({ error: "خطأ في معالجة النظام الغذائي" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ dietPlan }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in ai-diet-plan function:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "خطأ غير معروف" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
