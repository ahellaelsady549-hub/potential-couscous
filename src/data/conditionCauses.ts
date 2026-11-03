export type ConditionCauses = { causesAr: string[]; causesEn: string[] };

const personalityFactors = {
  causesAr: [
    'لا يُعرف سبب واحد محدد؛ يُعتقد أن الاستعداد الوراثي والسمات المزاجية وعوامل النمو والبيئة قد تتفاعل.',
    'قد ترتبط بعض الخبرات المبكرة أو الضغوط بعوامل الخطر، لكنها لا تثبت سببًا مباشرًا لدى شخص بعينه.',
  ],
  causesEn: [
    'There is no single established cause; inherited vulnerability, temperament, development, and environmental factors may interact.',
    'Some early experiences or stressors may be associated risk factors, but do not establish a direct cause for an individual.',
  ],
};

const eatingDisorderFactors = {
  causesAr: [
    'لا يوجد سبب واحد معروف؛ تتفاعل عوامل بيولوجية ونفسية واجتماعية، وقد يزيد التاريخ العائلي أو بعض الضغوط من القابلية.',
    'قد تسهم ضغوط صورة الجسد أو الحمية والتجارب الشخصية في الخطر، لكنها لا تفسر الحالة وحدها.',
  ],
  causesEn: [
    'There is no single known cause; biological, psychological, and social factors interact, and family history or stress may increase vulnerability.',
    'Body-image pressures, dieting, and personal experiences may contribute to risk but do not explain the condition on their own.',
  ],
};

export const conditionCauses: Record<string, ConditionCauses> = {
  physical_extra_retinal_detachment: {
    causesAr: [
      'قد يحدث بسبب تمزق أو ثقب في الشبكية يسمح بتجمع السائل خلفها وانفصالها.',
      'تشمل عوامل الخطر قصر النظر الشديد، إصابة العين، جراحة سابقة للعين، أو انفصال الشبكية في عين أخرى.',
    ],
    causesEn: [
      'A retinal tear or hole can allow fluid to collect behind the retina and separate it.',
      'Risk factors include severe myopia, eye injury, previous eye surgery, or retinal detachment in the other eye.',
    ],
  },
  physical_extra_sickle_cell_disease: {
    causesAr: [
      'مرض وراثي ينتج عن تغيرات في جين الهيموغلوبين، ويُصاب به الطفل عند وراثة نسخة متغيرة من كل والد.',
      'لا ينتقل المرض بالمخالطة؛ وقد يكون الوالدان حاملين للصفة دون ظهور المرض عليهما.',
    ],
    causesEn: [
      'An inherited condition caused by changes in the hemoglobin gene; a child develops it after inheriting an altered copy from each parent.',
      'It is not contagious; parents may carry the trait without having the disease.',
    ],
  },
  physical_extra_stroke: {
    causesAr: [
      'قد تنتج السكتة عن انسداد وعاء دموي في الدماغ أو عن نزف من وعاء دموي، ويحدد الفحص نوعها.',
      'تشمل عوامل الخطر ارتفاع ضغط الدم والسكري والتدخين وبعض اضطرابات القلب.',
    ],
    causesEn: [
      'A stroke may result from a blocked brain vessel or bleeding from a vessel; medical assessment determines the type.',
      'Risk factors include high blood pressure, diabetes, smoking, and some heart conditions.',
    ],
  },
  physical_extra_deep_vein_thrombosis: {
    causesAr: [
      'تتكون جلطة في وريد عميق عندما يتباطأ تدفق الدم أو يتغير تخثره أو يتأذى جدار الوعاء.',
      'قد تزيد قلة الحركة لفترة طويلة أو الجراحة أو السرطان أو الحمل وبعض الأدوية من الخطر.',
    ],
    causesEn: [
      'A clot forms in a deep vein when blood flow slows, clotting changes, or the vessel wall is injured.',
      'Prolonged immobility, surgery, cancer, pregnancy, and some medicines may increase risk.',
    ],
  },
  physical_extra_hemophilia: {
    causesAr: [
      'غالبًا اضطراب وراثي ناتج عن تغير جيني يقلل أحد عوامل تخثر الدم.',
      'قد تظهر حالات مكتسبة نادرة عندما يصنع الجهاز المناعي أجسامًا مضادة لعوامل التخثر.',
    ],
    causesEn: [
      'It is usually an inherited condition caused by a gene change that reduces a blood-clotting factor.',
      'Rare acquired cases occur when the immune system makes antibodies against clotting factors.',
    ],
  },
  physical_extra_chickenpox: {
    causesAr: [
      'يسببه فيروس الحماق النطاقي.',
      'ينتقل بسهولة عبر الهواء أو ملامسة سائل بثور المصاب، خصوصًا لمن لم يسبق تطعيمه أو إصابته.',
    ],
    causesEn: [
      'It is caused by the varicella-zoster virus.',
      'It spreads readily through the air or contact with blister fluid, especially among people without prior vaccination or infection.',
    ],
  },
  physical_extra_cystic_fibrosis: {
    causesAr: [
      'مرض وراثي متنحٍ ناتج عن تغيرات في جين CFTR؛ يلزم عادةً وراثة نسخة متغيرة من كل والد.',
      'لا ينتقل المرض بالمخالطة، وحمل نسخة واحدة لا يعني عادةً الإصابة بالمرض.',
    ],
    causesEn: [
      'An inherited recessive condition caused by changes in the CFTR gene; a person usually inherits an altered copy from each parent.',
      'It is not contagious, and carrying one altered copy usually does not cause the disease.',
    ],
  },
  mental_extra_seasonal_affective_disorder: {
    causesAr: [
      'تغيرات الضوء الموسمية قد تؤثر في الساعة البيولوجية ومستويات الميلاتونين والسيروتونين.',
      'التاريخ الشخصي أو العائلي للاكتئاب قد يزيد القابلية، ولا يوجد عامل واحد يفسر كل الحالات.',
    ],
    causesEn: [
      'Seasonal changes in daylight may affect the body clock and melatonin and serotonin activity.',
      'A personal or family history of depression may increase vulnerability; no single factor explains every case.',
    ],
  },
  mental_extra_autism_spectrum_disorder: {
    causesAr: [
      'لا يوجد سبب واحد معروف؛ تشير الأدلة إلى تفاعل عوامل وراثية ونمائية وبيولوجية متعددة.',
      'قد تزيد بعض عوامل ما قبل الولادة أو حولها من الاحتمال، ولا تعني وجود سبب مؤكد لدى طفل بعينه.',
    ],
    causesEn: [
      'There is no single known cause; evidence points to interacting genetic, developmental, and biological factors.',
      'Some prenatal or perinatal factors may alter likelihood but do not establish a definite cause for an individual child.',
    ],
  },
  mental_extra_borderline_personality_disorder: {
    causesAr: [
      'السبب الدقيق غير معروف؛ قد تتفاعل القابلية الوراثية والاختلافات في تنظيم المشاعر وعوامل البيئة.',
      'قد ترتبط بعض الخبرات الصادمة أو غير المستقرة بزيادة الخطر، لكنها لا تسبب الاضطراب حتمًا.',
    ],
    causesEn: [
      'The exact cause is unknown; inherited vulnerability, differences in emotion regulation, and environmental factors may interact.',
      'Traumatic or unstable experiences may be associated with increased risk but do not inevitably cause the disorder.',
    ],
  },
  mental_extra_paranoid_personality_disorder: personalityFactors,
  mental_extra_schizoid_personality_disorder: personalityFactors,
  mental_extra_schizotypal_personality_disorder: {
    causesAr: [
      'السبب غير محسوم؛ قد تسهم عوامل وراثية ونمائية وبيئية متداخلة.',
      'وجود تاريخ عائلي لاضطرابات ذهانية قد يرتبط بزيادة القابلية، لكنه لا يحدد مصير الفرد.',
    ],
    causesEn: [
      'The cause is not established; interacting genetic, developmental, and environmental factors may contribute.',
      'A family history of psychotic disorders may be associated with greater vulnerability but does not determine an individual outcome.',
    ],
  },
  mental_extra_antisocial_personality_disorder: personalityFactors,
  mental_extra_histrionic_personality_disorder: personalityFactors,
  mental_extra_narcissistic_personality_disorder: personalityFactors,
  mental_extra_avoidant_personality_disorder: personalityFactors,
  mental_extra_dependent_personality_disorder: personalityFactors,
  mental_extra_obsessive_compulsive_personality_disorder: personalityFactors,
  mental_extra_anorexia_nervosa: eatingDisorderFactors,
  mental_extra_bulimia_nervosa: eatingDisorderFactors,
  mental_extra_binge_eating_disorder: eatingDisorderFactors,
  mental_extra_agoraphobia: {
    causesAr: [
      'لا يوجد سبب واحد معروف؛ قد تتفاعل القابلية الوراثية والمزاجية مع ضغوط الحياة أو الخبرات المخيفة.',
      'قد يرتبط اضطراب الهلع أو تاريخ نوبات الهلع بزيادة احتمال رهاب الخلاء لدى بعض الأشخاص.',
    ],
    causesEn: [
      'There is no single known cause; inherited vulnerability and temperament may interact with life stress or frightening experiences.',
      'Panic disorder or a history of panic attacks may increase the likelihood of agoraphobia in some people.',
    ],
  },
  mental_extra_specific_phobia: {
    causesAr: [
      'قد ترتبط بتجربة مخيفة أو تعلم الخوف بالملاحظة، مع اختلاف العوامل بين الأشخاص.',
      'قد تزيد القابلية العائلية أو المزاجية من احتمال ظهورها، ولا يوجد سبب واحد ينطبق على الجميع.',
    ],
    causesEn: [
      'It may be associated with a frightening experience or learned fear by observation; contributing factors vary.',
      'Family or temperamental vulnerability may increase likelihood; there is no single cause for everyone.',
    ],
  },
  mental_extra_cyclothymic_disorder: {
    causesAr: [
      'السبب الدقيق غير معروف؛ قد تسهم عوامل وراثية وبيولوجية وبيئية متداخلة.',
      'قد يرتبط وجود اضطرابات مزاجية في العائلة بزيادة القابلية، من دون أن يكون ذلك حتميًا.',
    ],
    causesEn: [
      'The exact cause is unknown; genetic, biological, and environmental factors may interact.',
      'A family history of mood disorders may increase vulnerability, but does not make the condition inevitable.',
    ],
  },
  mental_extra_disruptive_mood_dysregulation_disorder: {
    causesAr: [
      'لا يوجد سبب واحد مؤكد؛ قد ترتبط الحالة بتفاعل عوامل نمائية ومزاجية ووراثية وبيئية.',
      'قد تتداخل الضغوط أو صعوبات تنظيم الانفعال مع عوامل أخرى، ولا تكفي وحدها لتأكيد السبب.',
    ],
    causesEn: [
      'There is no confirmed single cause; developmental, temperamental, genetic, and environmental factors may interact.',
      'Stress or difficulty regulating emotions may interact with other factors and cannot alone establish a cause.',
    ],
  },
  mental_extra_schizoaffective_disorder: {
    causesAr: [
      'السبب غير معروف بدقة؛ قد تسهم عوامل وراثية واختلافات في الدماغ وضغوط بيئية.',
      'قد يرتبط التاريخ العائلي للفصام أو اضطرابات المزاج بزيادة القابلية دون أن يكون سببًا وحيدًا.',
    ],
    causesEn: [
      'The exact cause is unknown; genetic factors, brain differences, and environmental stress may contribute.',
      'A family history of schizophrenia or mood disorders may increase vulnerability but is not a sole cause.',
    ],
  },
  mental_extra_substance_induced_psychotic_disorder: {
    causesAr: [
      'تبدأ الأعراض بسبب تأثير مادة نفسية التأثير أو دواء معيّن أو الانسحاب منه، بحسب الحالة.',
      'قد تؤثر نوع المادة والكمية ومدة الاستخدام والاستعداد الفردي في احتمال ظهور الأعراض.',
    ],
    causesEn: [
      'Symptoms arise from the effects of a psychoactive substance, a medication, or withdrawal, depending on the case.',
      'The substance, amount, duration of use, and individual vulnerability may affect the likelihood of symptoms.',
    ],
  },
};
