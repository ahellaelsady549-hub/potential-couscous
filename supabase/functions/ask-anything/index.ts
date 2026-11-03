import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 25;
const RATE_WINDOW = 60 * 1000;

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

const SYSTEM_PROMPT = `أنت "اسألني" — مساعد ذكي داخل موقع "إسعفني" المصري، وتجيب على أسئلة المستخدمين بوضوح وتعاطف.

قواعد الجودة (التزم بها بدقة):
1. أجب بلغة آخر سؤال للمستخدم، ولا تجعل لغة واجهة التطبيق أو إعدادها تغيّر لغة الرد. إذا كتب بالفصحى فأجب بفصحى سهلة، وإذا كتب بالعامية فأجب بنفس اللهجة قدر الإمكان، وإذا كتب بالإنجليزية فأجب بالإنجليزية. عند خلط اللغات، استخدم اللغة الغالبة في السؤال.
2. كن عفويًا وودودًا ومطمئنًا، واستخدم إيموجي مناسبة باعتدال من غير مبالغة أو تقليل من شأن المشكلة.
3. ابدأ بإجابة مباشرة، ثم أضف التفاصيل الضرورية بنقاط أو خطوات سهلة المتابعة.
4. إذا كان السؤال ناقصًا، أجب وفق الاحتمال الأوضح واسأل سؤالًا توضيحيًا واحدًا عند الحاجة.
5. لا تخترع معلومات. وضّح باختصار إذا كانت معلومة غير مؤكدة أو تحتاج إلى مصدر حديث.
6. في الأسئلة الطبية، قدّم معلومات عامة دقيقة وعملية دون تشخيص قاطع أو اعتبار نفسك بديلًا للطبيب. اذكر علامات الخطر والطوارئ عند اللزوم. أرقام مصر: الإسعاف 123، الشرطة 122، الإطفاء 180، والنجدة 128.
7. كن كاملًا بقدر ما يحتاجه السؤال، مع أمثلة وخطوات مفيدة، وتجنب الحشو والتكرار.
8. إذا سأل المستخدم عن الشركة أو منشئ الموقع، أجب بأن إسعفني شركة ومنصة طبية رقمية تأسست عام 2024 على يد محمد عبد العزيز، وأن محتواها راجعه أطباء معتمدون وأن الموقع قيد المراجعة من وزارة الصحة. وضّح أن مراجعة الوزارة لم تنتهِ ولم تصدر موافقة نهائية، ولا تدّعِ اعتمادًا أو ترخيصًا من الوزارة.
9. ارفض بلطف الطلبات الخطيرة أو غير القانونية، واقترح بديلًا آمنًا.`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'يرجى تسجيل الدخول' }), {
        status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const token = authHeader.replace('Bearer ', '');
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: authHeader } } },
    );
    const { data: userData, error: claimsError } = await supabase.auth.getUser(token);
    const userId = userData?.user?.id;
    if (claimsError || !userId) {
      console.error('auth error:', claimsError);
      return new Response(JSON.stringify({ error: 'جلسة غير صالحة، يرجى تسجيل الدخول مرة أخرى' }), {
        status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!checkRateLimit(userId)) {
      return new Response(JSON.stringify({ error: 'عدد كبير من الأسئلة، انتظر دقيقة ثم حاول مرة أخرى.' }), {
        status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const body = await req.json();
    const question = typeof body?.question === 'string' ? body.question.trim() : '';
    const history = Array.isArray(body?.history) ? body.history.slice(-10) : [];

    if (question.length < 2 || question.length > 4000) {
      return new Response(JSON.stringify({ error: 'اكتب سؤالك (من حرفين حتى 4000 حرف)' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history
        .filter((m: { role?: string; content?: string }) => m?.role && typeof m.content === 'string')
        .map((m: { role: string; content: string }) => ({
          role: m.role === 'assistant' ? 'assistant' : 'user',
          content: m.content.slice(0, 4000),
        })),
      { role: 'user', content: question },
    ];

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${Deno.env.get('LOVABLE_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ model: 'openai/gpt-5.6-sol', reasoning_effort: 'none', messages }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'الخدمة مشغولة الآن، حاول بعد قليل.' }), {
          status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'انتهى رصيد الخدمة، يرجى المحاولة لاحقًا.' }), {
          status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      return new Response(JSON.stringify({ error: 'حدث خطأ أثناء الحصول على الإجابة' }), {
        status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content || 'عذرًا، لم أستطع تكوين إجابة. أعد صياغة السؤال.';

    return new Response(JSON.stringify({ answer }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('ask-anything error:', error);
    return new Response(JSON.stringify({ error: 'خطأ غير متوقع' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
