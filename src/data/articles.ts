export interface Article {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: string;
  readMinutes: number;
  updated: string;
  sections: { heading: string; body: string[] }[];
  faq: { q: string; a: string }[];
}

export interface LocalizedArticle extends Article {}

export const articles: Article[] = [
  {
    slug: 'first-aid-basics',
    title: 'الإسعافات الأولية: الخطوات الصحيحة قبل وصول الإسعاف',
    description:
      'دليل عملي للإسعافات الأولية في مصر: الحروق، الجروح، الإغماء، الاختناق، والكسور، مع أرقام الطوارئ والخطوات الآمنة قبل وصول الإسعاف 123.',
    keywords: ['الإسعافات الأولية', 'إسعاف مصر 123', 'حروق', 'اختناق', 'إنعاش قلبي رئوي', 'جروح'],
    category: 'إسعافات أولية',
    readMinutes: 7,
    updated: '2026-08-02',
    sections: [
      {
        heading: 'قبل أي شيء: أمّن المكان واتصل بالإسعاف',
        body: [
          'أول خطوة في أي حالة طارئة هي التأكد من أن المكان آمن لك وللمصاب، ثم الاتصال بالإسعاف على 123 (الشرطة 122، الإطفاء 180).',
          'أخبر عامل الاستقبال بالعنوان بدقة، عدد المصابين، وحالة الوعي والتنفس. لا تُغلق الخط قبل أن يُطلب منك ذلك.',
        ],
      },
      {
        heading: 'فقدان الوعي والتنفس',
        body: [
          'نادِ على المصاب وربّت على كتفه. إذا لم يستجب ولا يتنفس طبيعياً، ابدأ ضغطات الصدر في منتصف الصدر بمعدل ثابت وسريع وعمق كافٍ حتى وصول الإسعاف.',
          'إذا كان يتنفس ولكنه فاقد للوعي، ضعه على جانبه (وضع الإفاقة) مع إبقاء مجرى الهواء مفتوحاً ومتابعة تنفسه.',
        ],
      },
      {
        heading: 'الحروق',
        body: [
          'برّد الحرق بماء جارٍ فاتر لمدة 10–20 دقيقة. لا تستخدم الثلج ولا معجون الأسنان ولا الزيوت.',
          'غطِّ الحرق بشاش نظيف غير لاصق، ولا تفقأ الفقاعات. الحروق الواسعة أو حروق الوجه واليدين والأعضاء الحساسة تستدعي مستشفى فوراً.',
        ],
      },
      {
        heading: 'الجروح والنزيف',
        body: [
          'اضغط على الجرح بشاش نظيف ضغطاً مباشراً ومستمراً وارفع الطرف المصاب إن أمكن.',
          'لا تُزل الأجسام الغائرة في الجرح، وثبّتها كما هي حتى وصول الإسعاف.',
        ],
      },
      {
        heading: 'الاختناق بجسم غريب',
        body: [
          'إذا كان الشخص يستطيع الكحّ، شجّعه على الكحّ. إذا لم يستطع التنفس أو الكلام، طبّق خمس ضربات بين الكتفين ثم ضغطات بطنية بالتبادل.',
          'مع الأطفال أقل من سنة، تُستخدم ضربات الظهر وضغطات الصدر وليس الضغطات البطنية.',
        ],
      },
    ],
    faq: [
      { q: 'ما رقم الإسعاف في مصر؟', a: 'رقم الإسعاف 123، الشرطة 122، والإطفاء 180.' },
      { q: 'هل أعطي المصاب فاقد الوعي ماء؟', a: 'لا. إعطاء السوائل لفاقد الوعي قد يسبب دخولها للرئة.' },
    ],
  },
  {
    slug: 'protein-guide',
    title: 'دليل البروتين: كم تحتاج يومياً وأفضل المصادر المتوفرة في مصر',
    description:
      'كم جرام بروتين تحتاج يومياً حسب وزنك ونشاطك، وأفضل مصادر البروتين المتوفرة والاقتصادية في مصر، وكيف توزّعه على وجبات اليوم.',
    keywords: ['البروتين', 'مصادر بروتين', 'تغذية رياضية', 'كمال أجسام', 'بروتين للعضلات', 'دايت'],
    category: 'تغذية',
    readMinutes: 6,
    updated: '2026-08-02',
    sections: [
      {
        heading: 'ما هو البروتين ولماذا يهم؟',
        body: [
          'البروتين هو المادة الأساسية لبناء وإصلاح العضلات، وهو أيضاً العنصر الأكثر إشباعاً بين العناصر الغذائية، مما يجعله محورياً في أي نظام لخسارة الدهون أو بناء العضل.',
        ],
      },
      {
        heading: 'الاحتياج اليومي',
        body: [
          'المدى الشائع في المراجع الرياضية هو 1.6–2.2 جرام لكل كيلوجرام من وزن الجسم لمن يتدرب بالأثقال، والأقل من ذلك لمن لا يتدرب.',
          'اضبط رقمك الشخصي من صفحة أهدافي الغذائية، وسيتم بناء اقتراحات الوجبات وتحليلها على أساس الرقم الذي أدخلته أنت.',
        ],
      },
      {
        heading: 'أفضل المصادر المتوفرة في مصر',
        body: [
          'صدور الفراخ، البيض، التونة، السمك البلطي، اللبن الرايب والزبادي، الجبن القريش، اللحمة الحمراء قليلة الدهن.',
          'مصادر نباتية: العدس، الفول، الحمص، الفاصوليا، والطحينة (مع مراعاة سعراتها العالية).',
        ],
      },
      {
        heading: 'كيف توزّعه على اليوم؟',
        body: [
          'توزيع البروتين على 3–4 وجبات يساعد على الالتزام والشبع، مع وجبة تحتوي بروتين بعد التمرين.',
        ],
      },
    ],
    faq: [
      { q: 'هل الجبن القريش مصدر بروتين جيد؟', a: 'نعم، وهو من أرخص مصادر البروتين عالية الجودة المتوفرة في مصر.' },
      { q: 'هل أحتاج مكملات البروتين؟', a: 'المكملات وسيلة راحة فقط؛ يمكن الوصول للهدف بالطعام العادي.' },
    ],
  },
  {
    slug: 'gym-programs-comparison',
    title: 'مقارنة جداول التمارين: فُل بودي وأبر لوَر وبوش بول ليج وأرنولد سبليت وPHUL وPHAT',
    description:
      'مقارنة عملية بين أشهر أنظمة التدريب لاختيار الأنسب لعدد أيامك ومستواك: فُل بودي، أبر/لوَر، برو سبليت، بوش بول ليج، أرنولد سبليت، PHUL، PHAT.',
    keywords: ['جدول تمارين', 'بوش بول ليج', 'أرنولد سبليت', 'PHUL', 'PHAT', 'فل بودي', 'أبر لوَر', 'برو سبليت'],
    category: 'تدريب',
    readMinutes: 8,
    updated: '2026-08-02',
    sections: [
      {
        heading: 'ابدأ من عدد أيامك المتاحة',
        body: [
          'ثلاثة أيام: فُل بودي هو الأنسب لأنه يوزّع كل عضلة ثلاث مرات أسبوعياً.',
          'أربعة أيام: أبر/لوَر أو PHUL يوفّران توازناً ممتازاً بين القوة والتضخيم.',
          'خمسة إلى ستة أيام: بوش بول ليج، أرنولد سبليت، أو PHAT لمن لديه خبرة وقدرة على الاستشفاء.',
        ],
      },
      {
        heading: 'القوة أم التضخيم؟',
        body: [
          'أنظمة PHUL وPHAT تدمج أيام قوة بتكرارات منخفضة وأيام تضخيم بتكرارات أعلى، وهي مناسبة لمن يريد الاثنين معاً.',
          'برو سبليت يمنح حجم عمل عالياً للعضلة الواحدة في اليوم، لكنه يقلل تكرار تدريب العضلة أسبوعياً.',
        ],
      },
      {
        heading: 'التقدّم التدريجي هو المفتاح',
        body: [
          'أي نظام يفشل بدون تقدّم تدريجي: زيادة الوزن أو التكرارات تدريجياً. سجّل وزنك وتكراراتك لكل تمرين في صفحة الجيم لتظهر لك اقتراحات التقدّم بناءً على أرقامك المسجّلة فعلياً.',
        ],
      },
    ],
    faq: [
      { q: 'ما أفضل نظام للمبتدئ؟', a: 'فُل بودي ثلاث مرات أسبوعياً لأنه يسمح بتكرار الحركات وتعلم الأداء الصحيح.' },
      { q: 'هل أستطيع تغيير النظام؟', a: 'نعم، ويمكنك اختيار نظام جديد في أي وقت من صفحة الجيم والتغذية.' },
    ],
  },
  {
    slug: 'calories-and-weight-loss',
    title: 'السعرات الحرارية وخسارة الوزن: كيف تحسب احتياجك وتتابعه',
    description:
      'اشرح لك ببساطة معنى السعرات وعجز السعرات، وكيف تحسب احتياجك اليومي، وكيف تتابع وجباتك وسعراتها وبروتينها ومستوى خطورتها على الدايت.',
    keywords: ['السعرات الحرارية', 'عجز السعرات', 'خسارة الوزن', 'حساب السعرات', 'مؤشر كتلة الجسم', 'BMR'],
    category: 'تغذية',
    readMinutes: 6,
    updated: '2026-08-02',
    sections: [
      {
        heading: 'الأساس: ميزان الطاقة',
        body: [
          'خسارة الوزن تحدث عندما يكون ما تستهلكه من طعام أقل من ما يحرقه جسمك على مدى أسابيع، والعكس لزيادة الوزن.',
        ],
      },
      {
        heading: 'كيف تحسب احتياجك؟',
        body: [
          'يُحسب معدل الأيض الأساسي من الوزن والطول والعمر والجنس، ثم يُضرب في معامل النشاط للحصول على إجمالي الحرق اليومي.',
          'صفحة النظام الغذائي في الموقع تحسب هذه الأرقام من بياناتك التي تدخلها وتحفظها لك، ثم تستخدمها صفحة أهدافي الغذائية.',
        ],
      },
      {
        heading: 'المتابعة اليومية',
        body: [
          'سجّل وجباتك في قسم الأكل بصفحة الجيم لتظهر لك السعرات والبروتين والكارب والدهون ومستوى خطورة الوجبة على أهدافك، ويمكنك تصدير السجل كـ PDF أو CSV.',
        ],
      },
    ],
    faq: [
      { q: 'هل يجب أن أزن كل طعامي؟', a: 'الوزن الدقيق مفيد في البداية لتعلم الأحجام، ثم يمكن الاعتماد على التقدير مع مراجعة النتائج.' },
      { q: 'كم كيلو أخسر في الأسبوع؟', a: 'المعدل المستدام عادة نصف كيلو إلى كيلو أسبوعياً حسب وزن البداية والالتزام.' },
    ],
  },
  {
    slug: 'mental-health-when-to-seek-help',
    title: 'الصحة النفسية: علامات تستوجب طلب مساعدة متخصصة',
    description:
      'متى تكون الأعراض النفسية أكثر من ضغط عادي؟ علامات القلق والاكتئاب واضطرابات النوم التي تستوجب زيارة مختص، وأماكن الدعم في مصر.',
    keywords: ['الصحة النفسية', 'الاكتئاب', 'القلق', 'اضطراب النوم', 'طبيب نفسي', 'دعم نفسي'],
    category: 'صحة نفسية',
    readMinutes: 5,
    updated: '2026-08-02',
    sections: [
      {
        heading: 'الفرق بين الضغط العادي والاضطراب',
        body: [
          'الحزن أو القلق مشاعر طبيعية مؤقتة. تصبح مشكلة تستوجب التقييم عندما تستمر لأسابيع وتؤثر على النوم والعمل والعلاقات.',
        ],
      },
      {
        heading: 'علامات تستوجب زيارة مختص',
        body: [
          'فقدان الاهتمام بكل الأنشطة، اضطراب نوم أو شهية مستمر، نوبات هلع متكررة، أو أفكار إيذاء الذات.',
          'وجود أفكار لإيذاء النفس يستوجب طلب المساعدة فوراً والاتصال بالإسعاف 123 أو التوجه لأقرب مستشفى.',
        ],
      },
      {
        heading: 'أين تجد الدعم؟',
        body: [
          'استخدم قسم أقرب المرافق الصحية للوصول لأقرب مركز أو مستشفى، وقسم ابحث عن طبيب للتواصل مع مختص.',
        ],
      },
    ],
    faq: [
      { q: 'هل الاختبارات على الموقع تشخيص؟', a: 'لا. أدوات الموقع للتوعية والفرز المبدئي ولا تُغني عن تقييم مختص.' },
      { q: 'هل العلاج النفسي دائماً بأدوية؟', a: 'لا، كثير من الحالات تُدار بالعلاج النفسي وتعديل نمط الحياة حسب تقييم المختص.' },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

const englishArticles: Record<string, Omit<Article, 'slug' | 'readMinutes' | 'updated'>> = {
  'first-aid-basics': {
    title: 'First Aid: The Right Steps Before the Ambulance Arrives',
    description: 'A practical first-aid guide for Egypt covering burns, wounds, fainting, choking and fractures, with emergency numbers and safe steps before ambulance 123 arrives.',
    keywords: ['first aid', 'Egypt ambulance 123', 'burns', 'choking', 'CPR', 'wounds'], category: 'First Aid',
    sections: [
      { heading: 'First: secure the scene and call an ambulance', body: ['Make sure the scene is safe for you and the injured person, then call ambulance 123 (police 122, fire 180).', 'Give the operator the exact address, number of casualties, and their breathing and consciousness status. Do not hang up until instructed.'] },
      { heading: 'Unconsciousness and breathing', body: ['Call to the person and tap their shoulder. If they do not respond or breathe normally, begin firm, rapid chest compressions in the center of the chest until help arrives.', 'If they are breathing but unconscious, place them on their side in the recovery position, keep the airway open and monitor breathing.'] },
      { heading: 'Burns', body: ['Cool the burn under cool running water for 10–20 minutes. Do not use ice, toothpaste or oils.', 'Cover it with clean non-stick gauze and do not burst blisters. Large burns, or burns to the face, hands or sensitive areas, need immediate hospital care.'] },
      { heading: 'Wounds and bleeding', body: ['Apply steady direct pressure with clean gauze and raise the injured limb if possible.', 'Do not remove embedded objects; stabilize them in place until help arrives.'] },
      { heading: 'Choking on a foreign object', body: ['If the person can cough, encourage them. If they cannot breathe or speak, alternate five back blows with abdominal thrusts.', 'For infants under one year, use back blows and chest thrusts, not abdominal thrusts.'] },
    ],
    faq: [{ q: 'What is the ambulance number in Egypt?', a: 'Ambulance is 123, police is 122, and fire is 180.' }, { q: 'Should I give water to an unconscious person?', a: 'No. Fluids can enter the lungs and cause serious harm.' }],
  },
  'protein-guide': {
    title: 'Protein Guide: Daily Needs and the Best Sources in Egypt',
    description: 'Learn how many grams of protein you need based on your weight and activity, affordable sources in Egypt, and how to spread them across your day.',
    keywords: ['protein', 'protein sources', 'sports nutrition', 'bodybuilding', 'muscle building', 'diet'], category: 'Nutrition',
    sections: [
      { heading: 'What is protein and why does it matter?', body: ['Protein builds and repairs muscle. It is also the most filling macronutrient, making it central to fat-loss and muscle-building plans.'] },
      { heading: 'Daily requirements', body: ['A common evidence-based range for resistance trainees is 1.6–2.2 grams per kilogram of body weight, with lower needs for inactive people.', 'Set your personal target on the Nutrition Goals page so meal suggestions and analyses use your chosen amount.'] },
      { heading: 'Good sources available in Egypt', body: ['Chicken breast, eggs, tuna, tilapia, laban rayeb, yogurt, cottage cheese and lean red meat.', 'Plant sources include lentils, fava beans, chickpeas, beans and tahini, while accounting for its higher calories.'] },
      { heading: 'How should you spread it through the day?', body: ['Spreading protein across 3–4 meals supports fullness and consistency, including a protein-rich meal after training.'] },
    ],
    faq: [{ q: 'Is cottage cheese a good protein source?', a: 'Yes. It is one of the most affordable, high-quality protein sources available in Egypt.' }, { q: 'Do I need protein supplements?', a: 'Supplements are only a convenience; you can reach your target with regular food.' }],
  },
  'gym-programs-comparison': {
    title: 'Workout Split Comparison: Full Body, Upper/Lower, PPL, Arnold, PHUL and PHAT',
    description: 'A practical comparison of popular training systems to match your available days and experience level.',
    keywords: ['workout plan', 'push pull legs', 'Arnold split', 'PHUL', 'PHAT', 'full body', 'upper lower', 'bro split'], category: 'Training',
    sections: [
      { heading: 'Start with your available training days', body: ['Three days: Full Body works best because each muscle is trained three times per week.', 'Four days: Upper/Lower or PHUL offer an excellent balance between strength and hypertrophy.', 'Five or six days: PPL, Arnold Split or PHAT suit experienced trainees with strong recovery.'] },
      { heading: 'Strength or hypertrophy?', body: ['PHUL and PHAT combine low-repetition strength days with higher-repetition hypertrophy days, making them suitable for both goals.', 'Bro Split provides high volume for one muscle group per day but lowers weekly training frequency.'] },
      { heading: 'Progressive overload is the key', body: ['Any plan fails without gradual progress in weight or repetitions. Log your performance on the Gym page to receive suggestions based on your actual records.'] },
    ],
    faq: [{ q: 'What is the best plan for a beginner?', a: 'Full Body three times a week supports frequent practice and proper technique.' }, { q: 'Can I change my program?', a: 'Yes. You can select a new program at any time from the Gym & Nutrition page.' }],
  },
  'calories-and-weight-loss': {
    title: 'Calories and Weight Loss: Calculate and Track Your Needs',
    description: 'A simple explanation of calories, calorie deficits, daily needs, and tracking meals, protein and diet risk.',
    keywords: ['calories', 'calorie deficit', 'weight loss', 'calorie tracking', 'BMI', 'BMR'], category: 'Nutrition',
    sections: [
      { heading: 'The foundation: energy balance', body: ['Weight loss occurs when food energy intake stays below the energy your body uses over several weeks; the reverse supports weight gain.'] },
      { heading: 'How do you calculate your needs?', body: ['Basal metabolic rate uses weight, height, age and sex, then an activity factor estimates total daily expenditure.', 'The Diet Plan page calculates these values from your details and connects them with your Nutrition Goals.'] },
      { heading: 'Daily tracking', body: ['Log meals in the Gym food section to review calories, protein, carbohydrates, fat and diet risk, then export your history as PDF or CSV.'] },
    ],
    faq: [{ q: 'Do I need to weigh all my food?', a: 'Accurate weighing helps you learn portions at first; later, estimates can work when checked against results.' }, { q: 'How much weight should I lose each week?', a: 'A sustainable pace is commonly 0.5–1 kilogram weekly, depending on starting weight and consistency.' }],
  },
  'mental-health-when-to-seek-help': {
    title: 'Mental Health: Signs That You Should Seek Professional Help',
    description: 'Learn when symptoms are more than everyday stress, warning signs involving anxiety, depression and sleep, and where to find support in Egypt.',
    keywords: ['mental health', 'depression', 'anxiety', 'sleep disorder', 'psychiatrist', 'mental health support'], category: 'Mental Health',
    sections: [
      { heading: 'Everyday stress versus a disorder', body: ['Sadness and anxiety can be temporary, normal emotions. Assessment is important when they last for weeks and affect sleep, work or relationships.'] },
      { heading: 'Signs that need professional support', body: ['Loss of interest in all activities, persistent sleep or appetite changes, repeated panic attacks, or thoughts of self-harm.', 'Thoughts of self-harm require immediate help: call ambulance 123 or go to the nearest hospital.'] },
      { heading: 'Where can you find support?', body: ['Use Nearby Facilities to locate the closest center or hospital, and Find a Doctor to contact a specialist.'] },
    ],
    faq: [{ q: 'Are the site tests a diagnosis?', a: 'No. They support awareness and initial screening but do not replace professional assessment.' }, { q: 'Does mental health treatment always require medication?', a: 'No. Many conditions are managed through therapy and lifestyle changes according to a professional assessment.' }],
  },
};

export const localizeArticle = (article: Article, language: 'ar' | 'en'): Article => {
  if (language === 'ar') return article;
  const english = englishArticles[article.slug];
  return english ? { ...article, ...english } : article;
};
