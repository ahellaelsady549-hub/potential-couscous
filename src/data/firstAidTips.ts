export interface FirstAidTip {
  id: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  stepsEn: string[];
  stepsAr: string[];
  category?: string;
  videoUrl?: string;
  sources?: Array<{ nameAr: string; nameEn: string; url: string }>;
}

export const firstAidTips: FirstAidTip[] = [
  {
    id: 1,
    titleEn: "CPR (Cardiopulmonary Resuscitation)",
    titleAr: "الإنعاش القلبي الرئوي",
    descriptionEn: "Life-saving technique for cardiac arrest victims",
    descriptionAr: "تقنية منقذة للحياة لضحايا السكتة القلبية",
    stepsEn: [
      "Call emergency services (123) immediately",
      "Place person on firm surface, check breathing",
      "Position hands on center of chest",
      "Push hard and fast at 100-120 compressions/minute",
      "Continue until help arrives"
    ],
    stepsAr: [
      "اتصل بالإسعاف (123) فوراً",
      "ضع الشخص على سطح صلب وتحقق من التنفس",
      "ضع يديك على منتصف الصدر",
      "اضغط بقوة وسرعة 100-120 ضغطة/دقيقة",
      "استمر حتى وصول المساعدة"
    ],
    videoUrl: "https://www.youtube.com/watch?v=cosVBV96E2g"
  },
  {
    id: 2,
    titleEn: "Choking Emergency",
    titleAr: "الاختناق",
    descriptionEn: "Heimlich maneuver for airway obstruction",
    descriptionAr: "مناورة هيمليك لانسداد مجرى الهواء",
    stepsEn: [
      "Stand behind the person",
      "Make a fist above navel, below ribcage",
      "Grasp fist with other hand",
      "Give quick upward thrusts",
      "Repeat until object is expelled"
    ],
    stepsAr: [
      "قف خلف الشخص",
      "اصنع قبضة فوق السرة تحت القفص الصدري",
      "امسك القبضة باليد الأخرى",
      "قم بدفعات سريعة للأعلى",
      "كرر حتى خروج الجسم الغريب"
    ],
    videoUrl: "https://www.youtube.com/watch?v=7CgtIgSyAiU"
  },
  {
    id: 3,
    titleEn: "Severe Bleeding Control",
    titleAr: "السيطرة على النزيف الشديد",
    descriptionEn: "Stop life-threatening bleeding",
    descriptionAr: "إيقاف النزيف المهدد للحياة",
    stepsEn: [
      "Apply direct pressure with clean cloth",
      "Maintain pressure for 10-15 minutes",
      "Add more cloth if blood soaks through",
      "Elevate injured area above heart if possible",
      "Call emergency services if bleeding doesn't stop"
    ],
    stepsAr: [
      "اضغط مباشرة بقماش نظيف",
      "حافظ على الضغط لمدة 10-15 دقيقة",
      "أضف قماش آخر إذا تشرب الدم",
      "ارفع المنطقة المصابة فوق القلب إن أمكن",
      "اتصل بالإسعاف إذا لم يتوقف النزيف"
    ],
    videoUrl: "https://www.youtube.com/watch?v=NxO5LvgqZe0"
  },
  {
    id: 4,
    titleEn: "Burns Treatment",
    titleAr: "علاج الحروق",
    descriptionEn: "First aid for thermal burns",
    descriptionAr: "الإسعافات الأولية للحروق الحرارية",
    stepsEn: [
      "Remove from heat source immediately",
      "Cool burn with running water for 10-20 minutes",
      "Remove jewelry/tight items before swelling",
      "Cover with sterile, non-stick dressing",
      "Seek medical help for serious burns"
    ],
    stepsAr: [
      "أبعد عن مصدر الحرارة فوراً",
      "برّد الحرق بالماء الجاري لمدة 10-20 دقيقة",
      "أزل المجوهرات والأشياء الضيقة قبل التورم",
      "غطِّ بضمادة معقمة غير لاصقة",
      "اطلب المساعدة الطبية للحروق الخطيرة"
    ],
    videoUrl: "https://www.youtube.com/watch?v=EaJmzB8YgS0"
  },
  {
    id: 5,
    titleEn: "Fracture Management",
    titleAr: "التعامل مع الكسور",
    descriptionEn: "Immobilize suspected bone fractures",
    descriptionAr: "تثبيت الكسور المشتبه بها",
    stepsEn: [
      "Don't move injured area",
      "Apply ice pack to reduce swelling",
      "Immobilize with splint if trained",
      "Support injured limb",
      "Get immediate medical attention"
    ],
    stepsAr: [
      "لا تحرك المنطقة المصابة",
      "ضع كمادة ثلج لتقليل التورم",
      "ثبّت بجبيرة إذا كنت مدرباً",
      "ادعم الطرف المصاب",
      "احصل على عناية طبية فورية"
    ],
    videoUrl: "https://www.youtube.com/watch?v=2v8vlXgGXwE"
  },
  {
    id: 6,
    titleEn: "Shock Management",
    titleAr: "التعامل مع الصدمة",
    descriptionEn: "Recognize and treat medical shock",
    descriptionAr: "التعرف على الصدمة الطبية وعلاجها",
    stepsEn: [
      "Lay person down, elevate legs",
      "Keep warm with blanket",
      "Don't give food or water",
      "Monitor breathing and pulse",
      "Call emergency services immediately"
    ],
    stepsAr: [
      "أضجع الشخص وارفع ساقيه",
      "حافظ على الدفء ببطانية",
      "لا تعطِ طعاماً أو ماءً",
      "راقب التنفس والنبض",
      "اتصل بالإسعاف فوراً"
    ],
    videoUrl: "https://www.youtube.com/watch?v=DXoSxpbXCJw"
  },
  {
    id: 7,
    titleEn: "Stroke Recognition (FAST)",
    titleAr: "التعرف على السكتة الدماغية",
    descriptionEn: "Quick stroke assessment",
    descriptionAr: "التقييم السريع للسكتة الدماغية",
    stepsEn: [
      "Face: Ask to smile, check for drooping",
      "Arms: Raise both arms, watch for drift",
      "Speech: Check for slurred speech",
      "Time: Call 123 immediately if any signs",
      "Note time symptoms started"
    ],
    stepsAr: [
      "الوجه: اطلب الابتسام، تحقق من الترهل",
      "الذراعان: ارفع كلا الذراعين، راقب الانجراف",
      "الكلام: تحقق من تداخل الكلام",
      "الوقت: اتصل بـ 123 فوراً عند أي علامة",
      "سجل وقت بدء الأعراض"
    ],
    videoUrl: "https://www.youtube.com/watch?v=mkpS4wbKFXw"
  },
  {
    id: 8,
    titleEn: "Seizure Response",
    titleAr: "التعامل مع النوبات",
    descriptionEn: "Protect person during seizure",
    descriptionAr: "حماية الشخص أثناء النوبة",
    stepsEn: [
      "Clear area of hard/sharp objects",
      "Cushion head with soft material",
      "Time the seizure",
      "Don't restrain or put anything in mouth",
      "Turn on side after seizure ends"
    ],
    stepsAr: [
      "أزل الأشياء الصلبة والحادة من المنطقة",
      "ضع وسادة تحت الرأس",
      "احسب مدة النوبة",
      "لا تمسك الشخص أو تضع شيئاً في فمه",
      "اقلب الشخص على جانبه بعد انتهاء النوبة"
    ],
    videoUrl: "https://www.youtube.com/watch?v=Ovsw7tdneqE"
  },
  {
    id: 9,
    titleEn: "Nosebleed Control",
    titleAr: "إيقاف نزيف الأنف",
    descriptionEn: "Stop nasal bleeding safely",
    descriptionAr: "إيقاف نزيف الأنف بأمان",
    stepsEn: [
      "Sit upright, lean slightly forward",
      "Pinch soft part of nose for 10 minutes",
      "Breathe through mouth",
      "Apply cold compress to bridge of nose",
      "Seek help if bleeding continues over 20 minutes"
    ],
    stepsAr: [
      "اجلس منتصباً ومِل قليلاً للأمام",
      "اضغط على الجزء اللين من الأنف لمدة 10 دقائق",
      "تنفس من الفم",
      "ضع كمادة باردة على جسر الأنف",
      "اطلب المساعدة إذا استمر النزيف أكثر من 20 دقيقة"
    ],
    videoUrl: "https://www.youtube.com/watch?v=xEwQjOeXszM"
  },
  {
    id: 10,
    titleEn: "Eye Injury Care",
    titleAr: "العناية بإصابات العين",
    descriptionEn: "Protect injured eyes",
    descriptionAr: "حماية العيون المصابة",
    stepsEn: [
      "Don't rub or touch the eye",
      "Flush with clean water for chemicals",
      "Cover both eyes with clean cloth",
      "Don't remove embedded objects",
      "Get immediate medical attention"
    ],
    stepsAr: [
      "لا تفرك أو تلمس العين",
      "اغسل بالماء النظيف للمواد الكيميائية",
      "غطِّ كلتا العينين بقماش نظيف",
      "لا تزل الأجسام الغريبة العالقة",
      "احصل على عناية طبية فورية"
    ],
    videoUrl: "https://www.youtube.com/watch?v=PvLsRCzog5A"
  },
  {
    id: 11,
    titleEn: "Diabetic Emergency",
    titleAr: "طوارئ السكري",
    descriptionEn: "Low blood sugar response",
    descriptionAr: "التعامل مع انخفاض السكر",
    stepsEn: [
      "Give conscious person sugar/juice",
      "15 grams fast-acting carbohydrates",
      "Recheck blood sugar in 15 minutes",
      "Call 123 if unconscious",
      "Don't give insulin during low sugar"
    ],
    stepsAr: [
      "أعطِ الشخص الواعي سكراً أو عصيراً",
      "15 جرام كربوهيدرات سريعة المفعول",
      "أعد فحص السكر بعد 15 دقيقة",
      "اتصل بـ 123 إذا كان فاقداً للوعي",
      "لا تعطِ الإنسولين عند انخفاض السكر"
    ],
    videoUrl: "https://www.youtube.com/watch?v=nZQ-Bm3wiRQ"
  },
  {
    id: 12,
    titleEn: "Heat Stroke",
    titleAr: "ضربة الشمس",
    descriptionEn: "Cool overheated body rapidly",
    descriptionAr: "تبريد الجسم المحموم بسرعة",
    stepsEn: [
      "Move to cool, shaded area",
      "Remove excess clothing",
      "Cool with water/ice packs",
      "Fan to increase cooling",
      "Call 123 if symptoms worsen"
    ],
    stepsAr: [
      "انقل إلى منطقة باردة ومظللة",
      "أزل الملابس الزائدة",
      "برّد بالماء وكمادات الثلج",
      "استخدم مروحة لزيادة التبريد",
      "اتصل بـ 123 إذا ساءت الأعراض"
    ],
    videoUrl: "https://www.youtube.com/watch?v=AzBTTaRM1H0"
  },
  {
    id: 13,
    titleEn: "Hypothermia Treatment",
    titleAr: "علاج انخفاض حرارة الجسم",
    descriptionEn: "Warm cold body gradually",
    descriptionAr: "تدفئة الجسم البارد تدريجياً",
    stepsEn: [
      "Move to warm location",
      "Remove wet clothing",
      "Wrap in warm blankets",
      "Give warm non-alcoholic drinks",
      "Seek medical help immediately"
    ],
    stepsAr: [
      "انقل إلى مكان دافئ",
      "أزل الملابس المبللة",
      "غطِّ ببطانيات دافئة",
      "أعطِ مشروبات دافئة غير كحولية",
      "اطلب المساعدة الطبية فوراً"
    ],
    videoUrl: "https://www.youtube.com/watch?v=OOCFqnoLhLw"
  },
  {
    id: 14,
    titleEn: "Allergic Reaction",
    titleAr: "رد الفعل التحسسي",
    descriptionEn: "Respond to severe allergies",
    descriptionAr: "الاستجابة للحساسية الشديدة",
    stepsEn: [
      "Use epinephrine auto-injector if available",
      "Call emergency services immediately",
      "Help person lie down",
      "Monitor breathing carefully",
      "Be prepared to perform CPR"
    ],
    stepsAr: [
      "استخدم حقنة الإبينفرين الذاتية إن توفرت",
      "اتصل بالإسعاف فوراً",
      "ساعد الشخص على الاستلقاء",
      "راقب التنفس بعناية",
      "كن مستعداً لإجراء الإنعاش القلبي"
    ],
    videoUrl: "https://www.youtube.com/watch?v=C6IfNPDf7x0"
  },
  {
    id: 15,
    titleEn: "Poisoning Emergency",
    titleAr: "طوارئ التسمم",
    descriptionEn: "First response to poisoning",
    descriptionAr: "الاستجابة الأولى للتسمم",
    stepsEn: [
      "Call poison control immediately",
      "Don't induce vomiting unless instructed",
      "Keep poison container for reference",
      "Monitor breathing and consciousness",
      "Follow poison control instructions exactly"
    ],
    stepsAr: [
      "اتصل بمركز السموم فوراً",
      "لا تحث على التقيؤ إلا بتعليمات",
      "احتفظ بعبوة السم للمرجعية",
      "راقب التنفس والوعي",
      "اتبع تعليمات مركز السموم تماماً"
    ],
    videoUrl: "https://www.youtube.com/watch?v=B9NXZF8vnMQ"
  },
  {
    id: 16,
    titleEn: "Sprain/Strain Care (RICE)",
    titleAr: "علاج الالتواء والشد",
    descriptionEn: "Reduce swelling and pain",
    descriptionAr: "تقليل التورم والألم",
    stepsEn: [
      "Rest: Avoid using injured area",
      "Ice: Apply for 20 minutes every 2 hours",
      "Compression: Wrap with elastic bandage",
      "Elevation: Raise above heart level",
      "Seek medical care if severe"
    ],
    stepsAr: [
      "راحة: تجنب استخدام المنطقة المصابة",
      "ثلج: ضع لمدة 20 دقيقة كل ساعتين",
      "ضغط: لف بضمادة مرنة",
      "رفع: ارفع فوق مستوى القلب",
      "اطلب الرعاية الطبية إذا كان شديداً"
    ],
    videoUrl: "https://www.youtube.com/watch?v=kP8Xhne8X1c"
  },
  {
    id: 17,
    titleEn: "Asthma Attack",
    titleAr: "نوبة الربو",
    descriptionEn: "Help during breathing difficulty",
    descriptionAr: "المساعدة أثناء صعوبة التنفس",
    stepsEn: [
      "Help use rescue inhaler",
      "Sit upright, loosen tight clothing",
      "Stay calm, breathe slowly",
      "Call 123 if no improvement in 5-10 minutes",
      "Don't leave person alone"
    ],
    stepsAr: [
      "ساعد في استخدام البخاخ",
      "اجلس منتصباً، فك الملابس الضيقة",
      "ابقَ هادئاً، تنفس ببطء",
      "اتصل بـ 123 إذا لم يتحسن في 5-10 دقائق",
      "لا تترك الشخص وحده"
    ],
    videoUrl: "https://www.youtube.com/watch?v=1LuAo-7V9Qw"
  },
  {
    id: 18,
    titleEn: "Head Injury Care",
    titleAr: "العناية بإصابات الرأس",
    descriptionEn: "Monitor head trauma carefully",
    descriptionAr: "مراقبة صدمات الرأس بعناية",
    stepsEn: [
      "Apply ice to reduce swelling",
      "Keep person still and calm",
      "Watch for confusion, vomiting, drowsiness",
      "Don't give medication without doctor approval",
      "Call 123 for severe symptoms"
    ],
    stepsAr: [
      "ضع ثلجاً لتقليل التورم",
      "أبقِ الشخص ساكناً وهادئاً",
      "راقب الارتباك والقيء والنعاس",
      "لا تعطِ دواء دون موافقة طبيب",
      "اتصل بـ 123 للأعراض الشديدة"
    ],
    videoUrl: "https://www.youtube.com/watch?v=eT1W10bPRPw"
  },
  {
    id: 19,
    titleEn: "Insect Sting/Bite",
    titleAr: "لدغة ولسعة الحشرات",
    descriptionEn: "Treat insect reactions",
    descriptionAr: "علاج ردود فعل الحشرات",
    stepsEn: [
      "Remove stinger by scraping (don't pinch)",
      "Wash with soap and water",
      "Apply cold compress",
      "Take antihistamine if needed",
      "Watch for allergic reaction signs"
    ],
    stepsAr: [
      "أزل الإبرة بالكشط (لا تضغط)",
      "اغسل بالصابون والماء",
      "ضع كمادة باردة",
      "تناول مضاد هيستامين إذا لزم",
      "راقب علامات رد الفعل التحسسي"
    ],
    videoUrl: "https://www.youtube.com/watch?v=5Z7bv0b6Qrg"
  },
  {
    id: 20,
    titleEn: "Dehydration Prevention",
    titleAr: "الوقاية من الجفاف",
    descriptionEn: "Recognize and treat dehydration",
    descriptionAr: "التعرف على الجفاف وعلاجه",
    stepsEn: [
      "Drink water regularly, especially in heat",
      "Watch for dry mouth, dark urine, dizziness",
      "Sip electrolyte drinks for severe cases",
      "Rest in cool place",
      "Seek medical help if symptoms persist"
    ],
    stepsAr: [
      "اشرب الماء بانتظام، خاصة في الحر",
      "راقب جفاف الفم والبول الداكن والدوار",
      "ارتشف مشروبات الإلكتروليت للحالات الشديدة",
      "استرح في مكان بارد",
      "اطلب المساعدة الطبية إذا استمرت الأعراض"
    ],
    videoUrl: "https://www.youtube.com/watch?v=9iMGFqMmUFs"
  },
  {
    id: 21,
    titleEn: "Electric Shock",
    titleAr: "الصعقة الكهربائية",
    descriptionEn: "Respond to electrical injuries safely",
    descriptionAr: "الاستجابة لإصابات الكهرباء بأمان",
    stepsEn: [
      "Don't touch person if still in contact with electricity",
      "Turn off power source if possible",
      "Call emergency services (123)",
      "Check breathing and pulse",
      "Perform CPR if needed"
    ],
    stepsAr: [
      "لا تلمس الشخص إذا كان لا يزال متصلاً بالكهرباء",
      "أطفئ مصدر الطاقة إن أمكن",
      "اتصل بالإسعاف (123)",
      "تحقق من التنفس والنبض",
      "أجرِ الإنعاش القلبي إذا لزم"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=Eo3hzRIQCPI"
  },
  {
    id: 22,
    titleEn: "Drowning Rescue",
    titleAr: "إنقاذ الغرق",
    descriptionEn: "Help drowning victim safely",
    descriptionAr: "مساعدة ضحية الغرق بأمان",
    stepsEn: [
      "Call for help immediately",
      "Throw flotation device if available",
      "Pull victim to safety",
      "Check breathing and start CPR if needed",
      "Keep warm and monitor until help arrives"
    ],
    stepsAr: [
      "اطلب المساعدة فوراً",
      "ارمِ جهاز طفو إن توفر",
      "اسحب الضحية للأمان",
      "تحقق من التنفس وابدأ الإنعاش إذا لزم",
      "حافظ على الدفء وراقب حتى وصول المساعدة"
    ],
    category: "breathing",
    videoUrl: "https://www.youtube.com/watch?v=T8xsrkHwqvc"
  },
  {
    id: 23,
    titleEn: "Fainting",
    titleAr: "الإغماء",
    descriptionEn: "Help someone who fainted",
    descriptionAr: "مساعدة شخص أغمي عليه",
    stepsEn: [
      "Catch person if possible to prevent fall",
      "Lay person flat on back",
      "Elevate legs above heart level",
      "Loosen tight clothing",
      "Check breathing and call 123 if unconscious over 1 minute"
    ],
    stepsAr: [
      "أمسك الشخص إن أمكن لمنع السقوط",
      "أضجع الشخص على ظهره",
      "ارفع الساقين فوق مستوى القلب",
      "فك الملابس الضيقة",
      "تحقق من التنفس واتصل بـ 123 إذا استمر فقدان الوعي أكثر من دقيقة"
    ],
    category: "general",
    videoUrl: "https://www.youtube.com/watch?v=2k9v7TY_bMk"
  },
  {
    id: 24,
    titleEn: "Chemical Burns",
    titleAr: "الحروق الكيميائية",
    descriptionEn: "Treat chemical skin exposure",
    descriptionAr: "علاج تعرض الجلد للمواد الكيميائية",
    stepsEn: [
      "Remove contaminated clothing",
      "Flush with large amounts of water for 20+ minutes",
      "Don't neutralize chemical with other chemicals",
      "Cover with sterile dressing",
      "Seek immediate medical attention"
    ],
    stepsAr: [
      "أزل الملابس الملوثة",
      "اغسل بكميات كبيرة من الماء لمدة 20+ دقيقة",
      "لا تحيّد المادة الكيميائية بمواد أخرى",
      "غطِّ بضمادة معقمة",
      "اطلب العناية الطبية فوراً"
    ],
    category: "burns",
    videoUrl: "https://www.youtube.com/watch?v=n5R1e9r6X3c"
  },
  {
    id: 25,
    titleEn: "Tooth Knocked Out",
    titleAr: "سقوط السن",
    descriptionEn: "Save and preserve knocked out tooth",
    descriptionAr: "حفظ السن المخلوع",
    stepsEn: [
      "Handle tooth by crown only, not root",
      "Rinse gently with milk or water",
      "Try to reinsert in socket if possible",
      "If not possible, store in milk",
      "See dentist within 30 minutes"
    ],
    stepsAr: [
      "أمسك السن من التاج فقط وليس الجذر",
      "اشطفه برفق بالحليب أو الماء",
      "حاول إعادته للتجويف إن أمكن",
      "إذا لم يمكن، احفظه في الحليب",
      "راجع طبيب الأسنان خلال 30 دقيقة"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=vFZ5AUqVHzk"
  },
  {
    id: 26,
    titleEn: "Panic Attack",
    titleAr: "نوبة الهلع",
    descriptionEn: "Help during panic attack",
    descriptionAr: "المساعدة أثناء نوبة الهلع",
    stepsEn: [
      "Stay calm and speak reassuringly",
      "Guide slow, deep breathing",
      "Move to quiet, safe space",
      "Ask what helps them",
      "Stay with person until attack passes"
    ],
    stepsAr: [
      "ابقَ هادئاً وتحدث بطريقة مطمئنة",
      "أرشد للتنفس البطيء والعميق",
      "انتقل لمكان هادئ وآمن",
      "اسأل ما الذي يساعدهم",
      "ابقَ مع الشخص حتى تمر النوبة"
    ],
    category: "general",
    videoUrl: "https://www.youtube.com/watch?v=tybOi4hjZFQ"
  },
  {
    id: 27,
    titleEn: "Broken Tooth",
    titleAr: "كسر السن",
    descriptionEn: "Care for broken or chipped tooth",
    descriptionAr: "العناية بالسن المكسور",
    stepsEn: [
      "Rinse mouth with warm water",
      "Apply cold compress to reduce swelling",
      "Save any tooth fragments",
      "Cover sharp edges with dental wax if available",
      "See dentist as soon as possible"
    ],
    stepsAr: [
      "اشطف الفم بماء دافئ",
      "ضع كمادة باردة لتقليل التورم",
      "احفظ أي شظايا من السن",
      "غطِّ الحواف الحادة بالشمع السني إن توفر",
      "راجع طبيب الأسنان في أقرب وقت"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=T5yDfMZS_wk"
  },
  {
    id: 28,
    titleEn: "Animal Bite",
    titleAr: "عضة حيوان",
    descriptionEn: "Treat animal bites properly",
    descriptionAr: "علاج عضات الحيوانات بشكل صحيح",
    stepsEn: [
      "Wash wound with soap and water for 5 minutes",
      "Apply pressure to stop bleeding",
      "Apply antibiotic cream",
      "Cover with sterile bandage",
      "Seek medical attention for tetanus and rabies evaluation"
    ],
    stepsAr: [
      "اغسل الجرح بالصابون والماء لمدة 5 دقائق",
      "اضغط لإيقاف النزيف",
      "ضع كريم مضاد حيوي",
      "غطِّ بضمادة معقمة",
      "اطلب العناية الطبية لتقييم الكزاز وداء الكلب"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=8TlqjLw_m0w"
  },
  {
    id: 29,
    titleEn: "Foreign Object in Nose",
    titleAr: "جسم غريب في الأنف",
    descriptionEn: "Remove object from nose safely",
    descriptionAr: "إزالة الجسم الغريب من الأنف بأمان",
    stepsEn: [
      "Keep calm and don't panic",
      "Try gentle nose blowing while closing other nostril",
      "Don't push object deeper",
      "Don't use tweezers or other tools",
      "See doctor if object won't come out"
    ],
    stepsAr: [
      "ابقَ هادئاً ولا تفزع",
      "حاول النفخ برفق مع إغلاق الفتحة الأخرى",
      "لا تدفع الجسم للداخل",
      "لا تستخدم ملاقط أو أدوات أخرى",
      "راجع الطبيب إذا لم يخرج الجسم"
    ],
    category: "general",
    videoUrl: "https://www.youtube.com/watch?v=6W_lUcXS3Zw"
  },
  {
    id: 30,
    titleEn: "Back Injury",
    titleAr: "إصابة الظهر",
    descriptionEn: "Care for suspected back or spine injury",
    descriptionAr: "العناية بإصابة الظهر أو العمود الفقري المشتبه بها",
    stepsEn: [
      "Don't move the person",
      "Call emergency services (123)",
      "Keep person still and calm",
      "Support head and neck in current position",
      "Wait for professional medical help"
    ],
    stepsAr: [
      "لا تحرك الشخص",
      "اتصل بالإسعاف (123)",
      "أبقِ الشخص ساكناً وهادئاً",
      "ادعم الرأس والرقبة في الوضع الحالي",
      "انتظر المساعدة الطبية المتخصصة"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=rLoWMU4GxnY"
  },
  {
    id: 31,
    titleEn: "Sunburn Treatment",
    titleAr: "علاج حروق الشمس",
    descriptionEn: "Soothe and treat sunburn",
    descriptionAr: "تهدئة وعلاج حروق الشمس",
    stepsEn: [
      "Get out of the sun immediately",
      "Apply cool water or cool compresses",
      "Apply aloe vera or moisturizer",
      "Drink plenty of water",
      "Take pain reliever if needed"
    ],
    stepsAr: [
      "ابتعد عن الشمس فوراً",
      "ضع ماء بارد أو كمادات باردة",
      "ضع الصبار أو مرطب",
      "اشرب الكثير من الماء",
      "تناول مسكن ألم إذا لزم"
    ],
    category: "burns",
    videoUrl: "https://www.youtube.com/watch?v=tpBjtIBFq9o"
  },
  {
    id: 32,
    titleEn: "Muscle Cramp",
    titleAr: "تشنج العضلات",
    descriptionEn: "Relieve painful muscle cramps",
    descriptionAr: "تخفيف تشنجات العضلات المؤلمة",
    stepsEn: [
      "Gently stretch the cramped muscle",
      "Massage the area",
      "Apply heat to tense muscles",
      "Apply ice for tender muscles",
      "Drink water or electrolyte beverages"
    ],
    stepsAr: [
      "مدد العضلة المتشنجة برفق",
      "دلّك المنطقة",
      "ضع حرارة للعضلات المتوترة",
      "ضع ثلج للعضلات الحساسة",
      "اشرب ماء أو مشروبات إلكتروليت"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=P_jIXU4Kp0Q"
  },
  {
    id: 33,
    titleEn: "Foreign Object in Eye",
    titleAr: "جسم غريب في العين",
    descriptionEn: "Remove small objects from eye",
    descriptionAr: "إزالة الأجسام الصغيرة من العين",
    stepsEn: [
      "Don't rub the eye",
      "Let tears flow naturally",
      "Try to flush with clean water",
      "Pull upper lid over lower lid",
      "Seek medical help if object remains"
    ],
    stepsAr: [
      "لا تفرك العين",
      "دع الدموع تتدفق طبيعياً",
      "حاول الغسل بماء نظيف",
      "اسحب الجفن العلوي فوق السفلي",
      "اطلب المساعدة الطبية إذا بقي الجسم"
    ],
    category: "general",
    videoUrl: "https://www.youtube.com/watch?v=xWWOhZ8nMGQ"
  },
  {
    id: 34,
    titleEn: "Hyperventilation",
    titleAr: "فرط التنفس",
    descriptionEn: "Help with rapid breathing",
    descriptionAr: "المساعدة في التنفس السريع",
    stepsEn: [
      "Stay calm and reassuring",
      "Encourage slow breathing",
      "Breathe through pursed lips",
      "Cup hands over mouth and nose",
      "Focus on exhaling slowly"
    ],
    stepsAr: [
      "ابقَ هادئاً ومطمئناً",
      "شجع التنفس البطيء",
      "تنفس من خلال الشفاه المضمومة",
      "ضع اليدين على الفم والأنف",
      "ركز على الزفير البطيء"
    ],
    category: "breathing",
    videoUrl: "https://www.youtube.com/watch?v=0qXcU2n4lBQ"
  },
  {
    id: 35,
    titleEn: "Heart Attack Warning",
    titleAr: "تحذير النوبة القلبية",
    descriptionEn: "Recognize and respond to heart attack",
    descriptionAr: "التعرف على النوبة القلبية والاستجابة لها",
    stepsEn: [
      "Call 123 immediately",
      "Chew aspirin if not allergic",
      "Loosen tight clothing",
      "Help person sit or lie down",
      "Be prepared for CPR"
    ],
    stepsAr: [
      "اتصل بـ 123 فوراً",
      "امضغ أسبرين إذا لم يكن هناك حساسية",
      "فك الملابس الضيقة",
      "ساعد الشخص على الجلوس أو الاستلقاء",
      "كن مستعداً للإنعاش القلبي"
    ],
    category: "cardiac",
    videoUrl: "https://www.youtube.com/watch?v=gDwt7dD3awc"
  },
  {
    id: 36,
    titleEn: "Chest Pain Response",
    titleAr: "التعامل مع ألم الصدر",
    descriptionEn: "Respond to chest pain emergencies",
    descriptionAr: "الاستجابة لحالات ألم الصدر الطارئة",
    stepsEn: [
      "Call 123 immediately",
      "Help person sit in comfortable position",
      "Loosen tight clothing",
      "Give aspirin if not allergic",
      "Monitor breathing and be ready for CPR"
    ],
    stepsAr: [
      "اتصل بـ 123 فوراً",
      "ساعد الشخص على الجلوس بوضع مريح",
      "فك الملابس الضيقة",
      "أعطِ أسبرين إذا لم يكن هناك حساسية",
      "راقب التنفس وكن مستعداً للإنعاش"
    ],
    category: "cardiac",
    videoUrl: "https://www.youtube.com/watch?v=n4F1AZ8bV2s"
  },
  {
    id: 37,
    titleEn: "Foreign Object in Ear",
    titleAr: "جسم غريب في الأذن",
    descriptionEn: "Remove foreign objects from ear safely",
    descriptionAr: "إزالة الأجسام الغريبة من الأذن بأمان",
    stepsEn: [
      "Do not insert anything into ear",
      "Tilt head to affected side",
      "Gently pull earlobe",
      "For insects, use flashlight to lure out",
      "Seek medical help if object remains"
    ],
    stepsAr: [
      "لا تدخل أي شيء في الأذن",
      "أمِل الرأس للجانب المصاب",
      "اسحب شحمة الأذن برفق",
      "للحشرات، استخدم ضوء لجذبها",
      "اطلب المساعدة الطبية إذا بقي الجسم"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=2Wv_Sx9Xh0Q"
  },
  {
    id: 38,
    titleEn: "Abdominal Pain Emergency",
    titleAr: "طوارئ ألم البطن",
    descriptionEn: "Respond to severe abdominal pain",
    descriptionAr: "الاستجابة لألم البطن الشديد",
    stepsEn: [
      "Help person lie in comfortable position",
      "Do not give food or water",
      "Apply warm compress if not appendicitis",
      "Note location and type of pain",
      "Call 123 if pain is severe"
    ],
    stepsAr: [
      "ساعد الشخص على الاستلقاء بوضع مريح",
      "لا تعطِ طعاماً أو ماءً",
      "ضع كمادة دافئة إذا لم تكن الزائدة",
      "لاحظ موقع ونوع الألم",
      "اتصل بـ 123 إذا كان الألم شديداً"
    ],
    category: "medical",
    videoUrl: "https://www.youtube.com/watch?v=W_pDz_2k7pA"
  },
  {
    id: 39,
    titleEn: "Frostbite Treatment",
    titleAr: "علاج عضة الصقيع",
    descriptionEn: "Treat cold-related tissue damage",
    descriptionAr: "علاج تلف الأنسجة الناتج عن البرد",
    stepsEn: [
      "Move to warm area",
      "Remove wet clothing",
      "Warm affected area in warm water 37-39°C",
      "Do not rub or massage",
      "Seek medical attention"
    ],
    stepsAr: [
      "انتقل إلى منطقة دافئة",
      "أزل الملابس المبللة",
      "دفئ المنطقة في ماء دافئ 37-39 درجة",
      "لا تفرك أو تدلك",
      "اطلب الرعاية الطبية"
    ],
    category: "environmental",
    videoUrl: "https://www.youtube.com/watch?v=Kc5h0S4nNlw"
  },
  {
    id: 40,
    titleEn: "Snake Bite Response",
    titleAr: "التعامل مع لدغة الثعبان",
    descriptionEn: "First aid for snake bites",
    descriptionAr: "الإسعافات الأولية للدغات الثعابين",
    stepsEn: [
      "Move away from snake",
      "Keep victim calm and still",
      "Immobilize bitten limb",
      "Remove jewelry before swelling",
      "Call 123 immediately"
    ],
    stepsAr: [
      "ابتعد عن الثعبان",
      "أبقِ الضحية هادئاً وساكناً",
      "ثبت الطرف الملدوغ",
      "أزل المجوهرات قبل التورم",
      "اتصل بـ 123 فوراً"
    ],
    category: "bites",
    videoUrl: "https://www.youtube.com/watch?v=T1vpJbB7Rpo"
  },
  {
    id: 41,
    titleEn: "Dog Bite Treatment",
    titleAr: "علاج عضة الكلب",
    descriptionEn: "First aid for dog bites",
    descriptionAr: "الإسعافات الأولية لعضات الكلاب",
    stepsEn: [
      "Clean wound with soap and water",
      "Apply pressure to stop bleeding",
      "Apply antibiotic ointment",
      "Cover with sterile bandage",
      "Seek medical care for rabies evaluation"
    ],
    stepsAr: [
      "نظف الجرح بالصابون والماء",
      "اضغط لإيقاف النزيف",
      "ضع مرهم مضاد حيوي",
      "غطِّ بضمادة معقمة",
      "اطلب رعاية طبية لتقييم داء الكلب"
    ],
    category: "bites",
    videoUrl: "https://www.youtube.com/watch?v=K2oG8U6qp3M"
  },
  {
    id: 42,
    titleEn: "Jellyfish Sting",
    titleAr: "لسعة قنديل البحر",
    descriptionEn: "Treat jellyfish stings",
    descriptionAr: "علاج لسعات قناديل البحر",
    stepsEn: [
      "Rinse with seawater, not fresh water",
      "Remove tentacles with tweezers",
      "Apply vinegar for 30 seconds",
      "Immerse in hot water 40-45°C",
      "Seek medical help for severe reactions"
    ],
    stepsAr: [
      "اشطف بماء البحر لا الماء العذب",
      "أزل المجسات بملقط",
      "ضع الخل لمدة 30 ثانية",
      "اغمر في ماء ساخن 40-45 درجة",
      "اطلب المساعدة الطبية للتفاعلات الشديدة"
    ],
    category: "bites",
    videoUrl: "https://www.youtube.com/watch?v=4TnJN7cZLR8"
  },
  {
    id: 43,
    titleEn: "Scorpion Sting",
    titleAr: "لدغة العقرب",
    descriptionEn: "First aid for scorpion stings",
    descriptionAr: "الإسعافات الأولية للدغات العقارب",
    stepsEn: [
      "Wash area with soap and water",
      "Apply cold compress for 10 minutes",
      "Keep affected limb below heart level",
      "Take pain reliever if needed",
      "Seek immediate medical attention"
    ],
    stepsAr: [
      "اغسل المنطقة بالصابون والماء",
      "ضع كمادة باردة لمدة 10 دقائق",
      "أبقِ الطرف المصاب أسفل مستوى القلب",
      "تناول مسكن ألم إذا لزم",
      "اطلب العناية الطبية فوراً"
    ],
    category: "bites",
    videoUrl: "https://www.youtube.com/watch?v=7QkKH1dpX-k"
  },
  {
    id: 44,
    titleEn: "Splinter Removal",
    titleAr: "إزالة الشظية",
    descriptionEn: "Safely remove splinters from skin",
    descriptionAr: "إزالة الشظايا من الجلد بأمان",
    stepsEn: [
      "Clean area with soap and water",
      "Sterilize tweezers with alcohol",
      "Grip splinter close to skin",
      "Pull out in same direction it entered",
      "Apply antibiotic cream and bandage"
    ],
    stepsAr: [
      "نظف المنطقة بالصابون والماء",
      "عقّم الملقط بالكحول",
      "أمسك الشظية قريباً من الجلد",
      "اسحب في نفس اتجاه الدخول",
      "ضع كريم مضاد حيوي وضمادة"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=Ly-6FfjN46U"
  },
  {
    id: 45,
    titleEn: "Finger Dislocation",
    titleAr: "خلع الإصبع",
    descriptionEn: "Care for dislocated finger",
    descriptionAr: "العناية بالإصبع المخلوع",
    stepsEn: [
      "Do not try to pop it back",
      "Apply ice to reduce swelling",
      "Splint the finger in current position",
      "Elevate the hand",
      "Seek medical attention immediately"
    ],
    stepsAr: [
      "لا تحاول إعادته لمكانه",
      "ضع ثلجاً لتقليل التورم",
      "ثبت الإصبع في وضعه الحالي",
      "ارفع اليد",
      "اطلب العناية الطبية فوراً"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=pZtf6r9g0Dk"
  },
  {
    id: 46,
    titleEn: "Nausea and Vomiting",
    titleAr: "الغثيان والقيء",
    descriptionEn: "Manage nausea and vomiting",
    descriptionAr: "التعامل مع الغثيان والقيء",
    stepsEn: [
      "Sit upright or lie on side",
      "Sip clear fluids slowly",
      "Avoid solid foods initially",
      "Use anti-nausea medications if available",
      "Seek help if vomiting blood or lasting 24+ hours"
    ],
    stepsAr: [
      "اجلس منتصباً أو استلقِ على الجانب",
      "ارتشف السوائل الصافية ببطء",
      "تجنب الأطعمة الصلبة في البداية",
      "استخدم أدوية مضادة للغثيان إن توفرت",
      "اطلب المساعدة إذا كان هناك دم أو استمر أكثر من 24 ساعة"
    ],
    category: "medical",
    videoUrl: "https://www.youtube.com/watch?v=FqvP8cMTYFo"
  },
  {
    id: 47,
    titleEn: "Diarrhea Management",
    titleAr: "التعامل مع الإسهال",
    descriptionEn: "Treat acute diarrhea",
    descriptionAr: "علاج الإسهال الحاد",
    stepsEn: [
      "Stay hydrated with clear fluids",
      "Use oral rehydration solution",
      "Avoid dairy and fatty foods",
      "Eat bland foods when hungry",
      "Seek help if bloody or lasting 48+ hours"
    ],
    stepsAr: [
      "حافظ على الترطيب بالسوائل الصافية",
      "استخدم محلول الإماهة الفموي",
      "تجنب منتجات الألبان والأطعمة الدهنية",
      "تناول أطعمة خفيفة عند الجوع",
      "اطلب المساعدة إذا كان دموياً أو استمر أكثر من 48 ساعة"
    ],
    category: "medical",
    videoUrl: "https://www.youtube.com/watch?v=tDVMt3rDp5k"
  },
  {
    id: 48,
    titleEn: "High Fever Management",
    titleAr: "التعامل مع الحمى الشديدة",
    descriptionEn: "Reduce high body temperature",
    descriptionAr: "خفض درجة حرارة الجسم المرتفعة",
    stepsEn: [
      "Remove excess clothing",
      "Apply cool damp cloths",
      "Give fever-reducing medication",
      "Encourage fluid intake",
      "Seek help if fever exceeds 39.4°C"
    ],
    stepsAr: [
      "أزل الملابس الزائدة",
      "ضع قماشاً بارداً ورطباً",
      "أعطِ دواء خافض للحرارة",
      "شجع شرب السوائل",
      "اطلب المساعدة إذا تجاوزت الحرارة 39.4 درجة"
    ],
    category: "medical",
    videoUrl: "https://www.youtube.com/watch?v=0Wp5tTvJ1Zs"
  },
  {
    id: 49,
    titleEn: "Severe Headache",
    titleAr: "الصداع الشديد",
    descriptionEn: "Manage severe headache",
    descriptionAr: "التعامل مع الصداع الشديد",
    stepsEn: [
      "Rest in dark, quiet room",
      "Apply cold compress to forehead",
      "Take pain medication as directed",
      "Stay hydrated",
      "Seek help if sudden severe onset or with other symptoms"
    ],
    stepsAr: [
      "استرح في غرفة مظلمة وهادئة",
      "ضع كمادة باردة على الجبهة",
      "تناول مسكن الألم حسب التوجيهات",
      "حافظ على الترطيب",
      "اطلب المساعدة إذا كان مفاجئاً شديداً أو مع أعراض أخرى"
    ],
    category: "medical",
    videoUrl: "https://www.youtube.com/watch?v=qQzL7H9VyHQ"
  },
  {
    id: 50,
    titleEn: "Croup in Children",
    titleAr: "الخانوق عند الأطفال",
    descriptionEn: "Help child with croup cough",
    descriptionAr: "مساعدة الطفل المصاب بسعال الخانوق",
    stepsEn: [
      "Keep child calm",
      "Take to bathroom with hot shower steam",
      "Or take outside to cool night air",
      "Offer warm fluids",
      "Seek help if breathing becomes difficult"
    ],
    stepsAr: [
      "أبقِ الطفل هادئاً",
      "خذه للحمام مع بخار الماء الساخن",
      "أو خذه للخارج للهواء البارد",
      "قدم سوائل دافئة",
      "اطلب المساعدة إذا أصبح التنفس صعباً"
    ],
    category: "breathing",
    videoUrl: "https://www.youtube.com/watch?v=S_fhH1jlF-A"
  },
  {
    id: 51,
    titleEn: "Bee Sting",
    titleAr: "لسعة النحلة",
    descriptionEn: "Treat bee stings properly",
    descriptionAr: "علاج لسعات النحل بشكل صحيح",
    stepsEn: [
      "Scrape out stinger with flat edge",
      "Wash with soap and water",
      "Apply ice for 10 minutes",
      "Take antihistamine for swelling",
      "Watch for allergic reactions"
    ],
    stepsAr: [
      "اكشط الإبرة بحافة مسطحة",
      "اغسل بالصابون والماء",
      "ضع ثلجاً لمدة 10 دقائق",
      "تناول مضاد هيستامين للتورم",
      "راقب ردود الفعل التحسسية"
    ],
    category: "bites",
    videoUrl: "https://www.youtube.com/watch?v=h3eFQMVFt4I"
  },
  {
    id: 52,
    titleEn: "Tick Removal",
    titleAr: "إزالة القراد",
    descriptionEn: "Safely remove ticks from skin",
    descriptionAr: "إزالة القراد من الجلد بأمان",
    stepsEn: [
      "Use fine-tipped tweezers",
      "Grasp tick close to skin surface",
      "Pull upward with steady pressure",
      "Clean area with alcohol",
      "Save tick for identification if possible"
    ],
    stepsAr: [
      "استخدم ملقط دقيق الطرف",
      "أمسك القراد قريباً من سطح الجلد",
      "اسحب للأعلى بضغط ثابت",
      "نظف المنطقة بالكحول",
      "احفظ القراد للتعرف عليه إن أمكن"
    ],
    category: "bites",
    videoUrl: "https://www.youtube.com/watch?v=SMz1LY8zy-0"
  },
  {
    id: 53,
    titleEn: "Minor Cut Care",
    titleAr: "العناية بالجروح الصغيرة",
    descriptionEn: "Clean and dress minor cuts",
    descriptionAr: "تنظيف وتضميد الجروح الصغيرة",
    stepsEn: [
      "Wash hands before treating",
      "Clean wound with water",
      "Apply antibiotic ointment",
      "Cover with sterile bandage",
      "Change bandage daily or when wet"
    ],
    stepsAr: [
      "اغسل يديك قبل العلاج",
      "نظف الجرح بالماء",
      "ضع مرهم مضاد حيوي",
      "غطِّ بضمادة معقمة",
      "غيّر الضمادة يومياً أو عند البلل"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=P_jIXU4Kp0Q"
  },
  {
    id: 54,
    titleEn: "Blister Care",
    titleAr: "العناية بالبثور",
    descriptionEn: "Treat blisters properly",
    descriptionAr: "علاج البثور بشكل صحيح",
    stepsEn: [
      "Don't pop the blister",
      "Cover with bandage",
      "If it pops, clean area gently",
      "Apply antibiotic ointment",
      "Keep covered until healed"
    ],
    stepsAr: [
      "لا تفقع البثرة",
      "غطِّ بضمادة",
      "إذا انفقعت، نظف المنطقة برفق",
      "ضع مرهم مضاد حيوي",
      "أبقِ مغطاة حتى الشفاء"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=ZPF7tD2yQ_4"
  },
  {
    id: 55,
    titleEn: "Ingrown Toenail",
    titleAr: "ظفر الرجل الناشب",
    descriptionEn: "Care for ingrown toenail",
    descriptionAr: "العناية بالظفر الناشب",
    stepsEn: [
      "Soak foot in warm water",
      "Place cotton under nail edge",
      "Apply antibiotic ointment",
      "Wear comfortable shoes",
      "See doctor if infected"
    ],
    stepsAr: [
      "انقع القدم في ماء دافئ",
      "ضع قطناً تحت حافة الظفر",
      "ضع مرهم مضاد حيوي",
      "ارتدِ حذاءً مريحاً",
      "راجع الطبيب إذا كان ملتهباً"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=q6oLlNfRntc"
  },
  {
    id: 56,
    titleEn: "Bloody Nose from Injury",
    titleAr: "نزيف الأنف من إصابة",
    descriptionEn: "Handle traumatic nosebleed",
    descriptionAr: "التعامل مع نزيف الأنف الناتج عن إصابة",
    stepsEn: [
      "Sit upright and lean forward",
      "Pinch nose for 15 minutes",
      "Apply ice to bridge of nose",
      "Check for broken nose signs",
      "Seek help if bleeding won't stop"
    ],
    stepsAr: [
      "اجلس منتصباً ومِل للأمام",
      "اضغط على الأنف لمدة 15 دقيقة",
      "ضع ثلجاً على جسر الأنف",
      "تحقق من علامات كسر الأنف",
      "اطلب المساعدة إذا لم يتوقف النزيف"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=J8eNcYTSh1c"
  },
  {
    id: 57,
    titleEn: "Knocked Wind Out",
    titleAr: "انقطاع النفس من ضربة",
    descriptionEn: "Help when wind knocked out",
    descriptionAr: "المساعدة عند انقطاع النفس من ضربة",
    stepsEn: [
      "Stay calm and reassure person",
      "Have them sit upright",
      "Loosen any tight clothing",
      "Encourage slow deep breaths",
      "Breathing usually returns in 1-2 minutes"
    ],
    stepsAr: [
      "ابقَ هادئاً وطمئن الشخص",
      "اجعله يجلس منتصباً",
      "فك أي ملابس ضيقة",
      "شجع التنفس البطيء العميق",
      "التنفس يعود عادة في 1-2 دقيقة"
    ],
    category: "breathing",
    videoUrl: "https://www.youtube.com/watch?v=dHeHlXN9zco"
  },
  {
    id: 58,
    titleEn: "Dislocated Shoulder",
    titleAr: "خلع الكتف",
    descriptionEn: "Care for dislocated shoulder",
    descriptionAr: "العناية بالكتف المخلوع",
    stepsEn: [
      "Do not try to move shoulder back",
      "Immobilize arm against body",
      "Apply ice to reduce swelling",
      "Take pain medication",
      "Get immediate medical help"
    ],
    stepsAr: [
      "لا تحاول إعادة الكتف لمكانه",
      "ثبت الذراع على الجسم",
      "ضع ثلجاً لتقليل التورم",
      "تناول مسكن ألم",
      "احصل على مساعدة طبية فورية"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=d_gP9AyxRvI"
  },
  {
    id: 59,
    titleEn: "Whiplash",
    titleAr: "إصابة الرقبة السوطية",
    descriptionEn: "Care for neck whiplash injury",
    descriptionAr: "العناية بإصابة الرقبة السوطية",
    stepsEn: [
      "Apply ice for first 24 hours",
      "Then apply heat",
      "Take pain medication as needed",
      "Rest but avoid bed rest",
      "Seek medical evaluation"
    ],
    stepsAr: [
      "ضع ثلجاً أول 24 ساعة",
      "ثم ضع حرارة",
      "تناول مسكن ألم حسب الحاجة",
      "استرح ولكن تجنب الراحة في السرير",
      "اطلب تقييماً طبياً"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=K0O_cT8xYx8"
  },
  {
    id: 60,
    titleEn: "Spinal Injury Suspicion",
    titleAr: "الاشتباه بإصابة العمود الفقري",
    descriptionEn: "Handle suspected spinal injury",
    descriptionAr: "التعامل مع إصابة العمود الفقري المشتبه بها",
    stepsEn: [
      "Do not move the person",
      "Call 123 immediately",
      "Stabilize head and neck",
      "Keep person calm",
      "Monitor breathing until help arrives"
    ],
    stepsAr: [
      "لا تحرك الشخص",
      "اتصل بـ 123 فوراً",
      "ثبت الرأس والرقبة",
      "أبقِ الشخص هادئاً",
      "راقب التنفس حتى وصول المساعدة"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=7TFjE6U_Vrw"
  },
  {
    id: 61,
    titleEn: "Carbon Monoxide Poisoning",
    titleAr: "التسمم بأول أكسيد الكربون",
    descriptionEn: "Respond to CO poisoning",
    descriptionAr: "الاستجابة للتسمم بأول أكسيد الكربون",
    stepsEn: [
      "Get everyone out of the area immediately",
      "Move to fresh air",
      "Call 123",
      "Do not re-enter building",
      "Seek medical attention"
    ],
    stepsAr: [
      "أخرج الجميع من المنطقة فوراً",
      "انتقل للهواء النقي",
      "اتصل بـ 123",
      "لا تدخل المبنى مجدداً",
      "اطلب العناية الطبية"
    ],
    category: "poisoning",
    videoUrl: "https://www.youtube.com/watch?v=Fg_cwg-sVro"
  },
  {
    id: 62,
    titleEn: "Food Poisoning",
    titleAr: "التسمم الغذائي",
    descriptionEn: "Manage food poisoning symptoms",
    descriptionAr: "التعامل مع أعراض التسمم الغذائي",
    stepsEn: [
      "Stay hydrated with clear fluids",
      "Rest and avoid solid food initially",
      "Gradually introduce bland foods",
      "Avoid dairy and caffeine",
      "Seek help if symptoms are severe"
    ],
    stepsAr: [
      "حافظ على الترطيب بالسوائل الصافية",
      "استرح وتجنب الأطعمة الصلبة في البداية",
      "أدخل الأطعمة الخفيفة تدريجياً",
      "تجنب منتجات الألبان والكافيين",
      "اطلب المساعدة إذا كانت الأعراض شديدة"
    ],
    category: "poisoning",
    videoUrl: "https://www.youtube.com/watch?v=C_TnQ0SAEQU"
  },
  {
    id: 63,
    titleEn: "Alcohol Poisoning",
    titleAr: "التسمم الكحولي",
    descriptionEn: "Respond to alcohol overdose",
    descriptionAr: "الاستجابة للجرعة الزائدة من الكحول",
    stepsEn: [
      "Call 123 immediately",
      "Keep person awake and sitting up",
      "Give water if conscious",
      "Keep warm",
      "If vomiting, turn on side to prevent choking"
    ],
    stepsAr: [
      "اتصل بـ 123 فوراً",
      "أبقِ الشخص مستيقظاً وجالساً",
      "أعطِ ماء إذا كان واعياً",
      "حافظ على الدفء",
      "إذا تقيأ، اقلبه على جانبه لمنع الاختناق"
    ],
    category: "poisoning",
    videoUrl: "https://www.youtube.com/watch?v=2Z4m4lnjxkY"
  },
  {
    id: 64,
    titleEn: "Drug Overdose",
    titleAr: "الجرعة الزائدة من الأدوية",
    descriptionEn: "Respond to drug overdose",
    descriptionAr: "الاستجابة للجرعة الزائدة",
    stepsEn: [
      "Call 123 immediately",
      "Check breathing and pulse",
      "Perform CPR if needed",
      "Keep person on their side",
      "Don't leave them alone"
    ],
    stepsAr: [
      "اتصل بـ 123 فوراً",
      "تحقق من التنفس والنبض",
      "أجرِ الإنعاش القلبي إذا لزم",
      "أبقِ الشخص على جانبه",
      "لا تتركه وحده"
    ],
    category: "poisoning",
    videoUrl: "https://www.youtube.com/watch?v=HBzAQD4WnlI"
  },
  {
    id: 65,
    titleEn: "Smoke Inhalation",
    titleAr: "استنشاق الدخان",
    descriptionEn: "Help with smoke inhalation",
    descriptionAr: "المساعدة في حالة استنشاق الدخان",
    stepsEn: [
      "Get to fresh air immediately",
      "Call 123",
      "Loosen tight clothing",
      "Monitor breathing",
      "Perform CPR if needed"
    ],
    stepsAr: [
      "انتقل للهواء النقي فوراً",
      "اتصل بـ 123",
      "فك الملابس الضيقة",
      "راقب التنفس",
      "أجرِ الإنعاش القلبي إذا لزم"
    ],
    category: "breathing",
    videoUrl: "https://www.youtube.com/watch?v=kWz7wLpXDjs"
  },
  {
    id: 66,
    titleEn: "Asphyxiation",
    titleAr: "الاختناق",
    descriptionEn: "Respond to suffocation emergency",
    descriptionAr: "الاستجابة لحالة الاختناق الطارئة",
    stepsEn: [
      "Remove cause of suffocation",
      "Call 123",
      "Check for breathing",
      "Perform CPR if needed",
      "Keep airway clear"
    ],
    stepsAr: [
      "أزل سبب الاختناق",
      "اتصل بـ 123",
      "تحقق من التنفس",
      "أجرِ الإنعاش القلبي إذا لزم",
      "أبقِ مجرى الهواء واضحاً"
    ],
    category: "breathing",
    videoUrl: "https://www.youtube.com/watch?v=R7gTqL5fR6o"
  },
  {
    id: 67,
    titleEn: "Hiccups Persistent",
    titleAr: "الحازوقة المستمرة",
    descriptionEn: "Stop persistent hiccups",
    descriptionAr: "إيقاف الحازوقة المستمرة",
    stepsEn: [
      "Hold breath for 20 seconds",
      "Drink cold water slowly",
      "Breathe into paper bag briefly",
      "Try swallowing sugar",
      "See doctor if lasting over 48 hours"
    ],
    stepsAr: [
      "احبس نفسك لمدة 20 ثانية",
      "اشرب ماء بارد ببطء",
      "تنفس في كيس ورقي لفترة قصيرة",
      "حاول ابتلاع السكر",
      "راجع الطبيب إذا استمرت أكثر من 48 ساعة"
    ],
    category: "general",
    videoUrl: "https://www.youtube.com/watch?v=5O5QXp3oVmQ"
  },
  {
    id: 68,
    titleEn: "Black Eye",
    titleAr: "العين السوداء (كدمة العين)",
    descriptionEn: "Treat black eye injury",
    descriptionAr: "علاج كدمة العين",
    stepsEn: [
      "Apply ice for 15-20 minutes",
      "Avoid pressing on the eye",
      "Keep head elevated",
      "Take pain medication if needed",
      "See doctor if vision problems occur"
    ],
    stepsAr: [
      "ضع ثلجاً لمدة 15-20 دقيقة",
      "تجنب الضغط على العين",
      "أبقِ الرأس مرتفعاً",
      "تناول مسكن ألم إذا لزم",
      "راجع الطبيب إذا حدثت مشاكل في الرؤية"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=J_CwTxSw0Lw"
  },
  {
    id: 69,
    titleEn: "Concussion",
    titleAr: "الارتجاج",
    descriptionEn: "Recognize and respond to concussion",
    descriptionAr: "التعرف على الارتجاج والاستجابة له",
    stepsEn: [
      "Watch for confusion or disorientation",
      "Check for unequal pupils",
      "Monitor for vomiting or headache",
      "Rest and avoid screens",
      "Seek medical evaluation"
    ],
    stepsAr: [
      "راقب الارتباك أو فقدان الاتجاه",
      "تحقق من تفاوت حجم البؤبؤين",
      "راقب القيء أو الصداع",
      "استرح وتجنب الشاشات",
      "اطلب تقييماً طبياً"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=vdVfvV2bKYQ"
  },
  {
    id: 70,
    titleEn: "Rib Fracture",
    titleAr: "كسر الضلع",
    descriptionEn: "Care for suspected rib fracture",
    descriptionAr: "العناية بكسر الضلع المشتبه به",
    stepsEn: [
      "Apply ice to reduce swelling",
      "Take pain medication as needed",
      "Take shallow breaths if painful",
      "Avoid wrapping chest tightly",
      "Seek medical attention"
    ],
    stepsAr: [
      "ضع ثلجاً لتقليل التورم",
      "تناول مسكن ألم حسب الحاجة",
      "خذ أنفاساً ضحلة إذا كان مؤلماً",
      "تجنب لف الصدر بإحكام",
      "اطلب العناية الطبية"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=qKJv4S5peNc"
  },
  {
    id: 71,
    titleEn: "Finger Caught in Door",
    titleAr: "انحشار الإصبع في الباب",
    descriptionEn: "Treat finger caught in door",
    descriptionAr: "علاج الإصبع المنحشر في الباب",
    stepsEn: [
      "Apply ice immediately",
      "Elevate the hand",
      "Check for deformity or inability to move",
      "Take pain medication",
      "See doctor if bruising under nail or fracture suspected"
    ],
    stepsAr: [
      "ضع ثلجاً فوراً",
      "ارفع اليد",
      "تحقق من التشوه أو عدم القدرة على الحركة",
      "تناول مسكن ألم",
      "راجع الطبيب إذا كان هناك كدمة تحت الظفر أو اشتباه بكسر"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=A_tAOiTGvwo"
  },
  {
    id: 72,
    titleEn: "Bruise Care",
    titleAr: "العناية بالكدمات",
    descriptionEn: "Treat bruises properly",
    descriptionAr: "علاج الكدمات بشكل صحيح",
    stepsEn: [
      "Apply ice for 20 minutes",
      "Elevate injured area",
      "After 48 hours, apply heat",
      "Take pain medication if needed",
      "See doctor if bruise grows or is very painful"
    ],
    stepsAr: [
      "ضع ثلجاً لمدة 20 دقيقة",
      "ارفع المنطقة المصابة",
      "بعد 48 ساعة، ضع حرارة",
      "تناول مسكن ألم إذا لزم",
      "راجع الطبيب إذا كبرت الكدمة أو كانت مؤلمة جداً"
    ],
    category: "injuries",
    videoUrl: "https://www.youtube.com/watch?v=wKl_N8dMzLI"
  },
  {
    id: 73,
    titleEn: "Swallowed Object",
    titleAr: "ابتلاع جسم غريب",
    descriptionEn: "Handle swallowed foreign object",
    descriptionAr: "التعامل مع ابتلاع جسم غريب",
    stepsEn: [
      "If breathing normally, stay calm",
      "Small smooth objects usually pass",
      "Don't induce vomiting",
      "Monitor for pain or difficulty swallowing",
      "Seek help for sharp objects or batteries"
    ],
    stepsAr: [
      "إذا كان التنفس طبيعياً، ابقَ هادئاً",
      "الأجسام الصغيرة الناعمة تمر عادة",
      "لا تحث على التقيؤ",
      "راقب الألم أو صعوبة البلع",
      "اطلب المساعدة للأجسام الحادة أو البطاريات"
    ],
    category: "general",
    videoUrl: "https://www.youtube.com/watch?v=V7uMy1kFfKk"
  },
  {
    id: 74,
    titleEn: "Nosebleed from High Altitude",
    titleAr: "نزيف الأنف من الارتفاع",
    descriptionEn: "Handle altitude-related nosebleed",
    descriptionAr: "التعامل مع نزيف الأنف الناتج عن الارتفاع",
    stepsEn: [
      "Sit upright and lean forward",
      "Pinch nose for 10-15 minutes",
      "Apply saline spray",
      "Use humidifier if available",
      "Descend if bleeding continues"
    ],
    stepsAr: [
      "اجلس منتصباً ومِل للأمام",
      "اضغط على الأنف لمدة 10-15 دقيقة",
      "استخدم رذاذ ملحي",
      "استخدم جهاز ترطيب إن توفر",
      "انزل للأسفل إذا استمر النزيف"
    ],
    category: "environmental",
    videoUrl: "https://www.youtube.com/watch?v=xEwQjOeXszM"
  },
  {
    id: 75,
    titleEn: "Motion Sickness",
    titleAr: "دوار الحركة",
    descriptionEn: "Manage motion sickness",
    descriptionAr: "التعامل مع دوار الحركة",
    stepsEn: [
      "Look at stable horizon",
      "Get fresh air if possible",
      "Avoid reading or screens",
      "Try ginger or peppermint",
      "Take motion sickness medication before travel"
    ],
    stepsAr: [
      "انظر للأفق الثابت",
      "احصل على هواء نقي إن أمكن",
      "تجنب القراءة أو الشاشات",
      "جرب الزنجبيل أو النعناع",
      "تناول دواء دوار الحركة قبل السفر"
    ],
    category: "general",
    videoUrl: "https://www.youtube.com/watch?v=GVT7bF5pTig"
    },
    {
      id: 76,
      titleEn: "Angina Episode",
      titleAr: "نوبة الذبحة الصدرية",
      descriptionEn: "Support someone with known angina and recognize when symptoms may signal a heart attack.",
      descriptionAr: "ساعد شخصاً مصاباً بذبحة صدرية معروفة وتعرّف على العلامات التي قد تشير إلى نوبة قلبية.",
      stepsEn: [
        "Stop activity and help the person rest in a comfortable position.",
        "Help them use their own prescribed angina medicine as directed.",
        "Call emergency services if this is a first episode, symptoms are severe, or they do not improve as expected.",
        "Stay with them and monitor their breathing and responsiveness."
      ],
      stepsAr: [
        "أوقف النشاط وساعد الشخص على الراحة في وضع مريح.",
        "ساعده على استخدام دواء الذبحة الموصوف له وفق التعليمات.",
        "اتصل بالطوارئ إذا كانت هذه أول نوبة، أو كانت الأعراض شديدة، أو لم تتحسن كما هو متوقع.",
        "ابقَ معه وراقب تنفسه واستجابته."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/angina/" }]
    },
    {
      id: 77,
      titleEn: "Hay Fever Symptoms",
      titleAr: "أعراض حمى القش",
      descriptionEn: "Ease mild seasonal allergy symptoms and recognize signs of a severe reaction.",
      descriptionAr: "خفف أعراض الحساسية الموسمية البسيطة وتعرّف على علامات التفاعل الشديد.",
      stepsEn: [
        "Help the person move away from pollen or other suspected triggers.",
        "Encourage them to follow their own allergy-care plan.",
        "Seek urgent help for breathing difficulty, swelling of the tongue or throat, or collapse.",
        "Call emergency services if severe symptoms develop."
      ],
      stepsAr: [
        "ساعد الشخص على الابتعاد عن حبوب اللقاح أو المحفزات المشتبه بها.",
        "شجعه على اتباع خطة العناية بالحساسية الخاصة به.",
        "اطلب المساعدة العاجلة عند صعوبة التنفس أو تورم اللسان أو الحلق أو الانهيار.",
        "اتصل بالطوارئ إذا ظهرت أعراض شديدة."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/hay-fever/" }]
    },
    {
      id: 78,
      titleEn: "Earache",
      titleAr: "ألم الأذن",
      descriptionEn: "Provide comfort for ear pain and seek medical care for concerning symptoms.",
      descriptionAr: "خفف ألم الأذن واطلب الرعاية الطبية عند وجود أعراض مقلقة.",
      stepsEn: [
        "Help the person rest and avoid putting anything into the ear.",
        "Do not try to remove an object or drain fluid from the ear.",
        "Arrange medical advice if pain is severe, persistent, or accompanied by fever or discharge.",
        "Seek urgent help for sudden hearing loss, serious injury, or a very unwell child."
      ],
      stepsAr: [
        "ساعد الشخص على الراحة وتجنب إدخال أي شيء في الأذن.",
        "لا تحاول إخراج جسم أو تصريف سائل من الأذن.",
        "اطلب المشورة الطبية إذا كان الألم شديداً أو مستمراً أو مصحوباً بحمى أو إفرازات.",
        "اطلب مساعدة عاجلة عند فقدان السمع المفاجئ أو الإصابة الخطيرة أو مرض الطفل الشديد."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/earache/" }]
    },
    {
      id: 79,
      titleEn: "Conjunctivitis",
      titleAr: "التهاب الملتحمة",
      descriptionEn: "Reduce irritation and limit the spread of a suspected eye infection.",
      descriptionAr: "خفف تهيّج العين وقلل انتشار عدوى العين المشتبه بها.",
      stepsEn: [
        "Encourage handwashing and avoid rubbing the affected eye.",
        "Gently clean discharge with clean water and a fresh pad for each wipe.",
        "Do not share towels, eye makeup, or contact lenses.",
        "Seek medical advice for eye pain, light sensitivity, vision changes, or worsening symptoms."
      ],
      stepsAr: [
        "شجع على غسل اليدين وتجنب فرك العين المصابة.",
        "نظف الإفرازات بلطف بماء نظيف وقطعة جديدة لكل مسحة.",
        "لا تشارك المناشف أو مستحضرات العين أو العدسات اللاصقة.",
        "اطلب المشورة الطبية عند ألم العين أو الحساسية للضوء أو تغير الرؤية أو تفاقم الأعراض."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/conjunctivitis/" }]
    },
    {
      id: 80,
      titleEn: "Heat Exhaustion",
      titleAr: "الإجهاد الحراري",
      descriptionEn: "Cool and monitor someone showing signs of heat exhaustion.",
      descriptionAr: "برّد الشخص وراقبه عند ظهور علامات الإجهاد الحراري.",
      stepsEn: [
        "Move them to a cool, shaded place and loosen unnecessary clothing.",
        "Help them cool with cool water, a fan, or damp cloths.",
        "If fully alert and able to swallow, offer frequent small sips of water.",
        "Call emergency services if they worsen, become confused, or do not improve promptly."
      ],
      stepsAr: [
        "انقل الشخص إلى مكان بارد ومظلل وأرخِ الملابس غير الضرورية.",
        "ساعده على التبريد بالماء البارد أو مروحة أو أقمشة مبللة.",
        "إذا كان واعياً تماماً ويستطيع البلع، قدم له رشفات صغيرة متكررة من الماء.",
        "اتصل بالطوارئ إذا ساءت حالته أو ارتبك أو لم يتحسن سريعاً."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/heat-exhaustion/" }]
    },
    {
      id: 81,
      titleEn: "Heat Rash",
      titleAr: "الطفح الحراري",
      descriptionEn: "Relieve mild heat rash and watch for signs of heat illness.",
      descriptionAr: "خفف الطفح الحراري البسيط وانتبه إلى علامات المرض المرتبط بالحرارة.",
      stepsEn: [
        "Move to a cooler place and keep the affected skin cool and dry.",
        "Wear loose clothing and avoid scratching the rash.",
        "Seek medical advice if the rash is severe, infected-looking, or does not settle.",
        "Get urgent help for confusion, fainting, or other signs of serious heat illness."
      ],
      stepsAr: [
        "انتقل إلى مكان أبرد وحافظ على برودة الجلد المصاب وجفافه.",
        "ارتدِ ملابس فضفاضة وتجنب حك الطفح.",
        "اطلب المشورة الطبية إذا كان الطفح شديداً أو بدا ملتهباً أو لم يهدأ.",
        "اطلب المساعدة العاجلة عند الارتباك أو الإغماء أو ظهور علامات مرض حراري خطير."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/heat-rash/" }]
    },
    {
      id: 82,
      titleEn: "Suspected Meningitis",
      titleAr: "الاشتباه بالتهاب السحايا",
      descriptionEn: "Recognize a potentially serious illness and get urgent medical help.",
      descriptionAr: "تعرّف على مرض قد يكون خطيراً واطلب المساعدة الطبية العاجلة.",
      stepsEn: [
        "Call emergency services or seek urgent medical assessment; do not wait for a rash.",
        "Stay with the person and note changes in their alertness, breathing, or symptoms.",
        "Keep them comfortable and do not give food or drink if they are drowsy or struggling to swallow.",
        "Tell responders when symptoms began and what changes you observed."
      ],
      stepsAr: [
        "اتصل بالطوارئ أو اطلب تقييماً طبياً عاجلاً؛ لا تنتظر ظهور طفح.",
        "ابقَ مع الشخص وسجل أي تغير في وعيه أو تنفسه أو أعراضه.",
        "حافظ على راحته ولا تقدم طعاماً أو شراباً إذا كان ناعساً أو يجد صعوبة في البلع.",
        "أخبر المسعفين بوقت بدء الأعراض والتغيرات التي لاحظتها."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/meningitis/" }]
    },
    {
      id: 83,
      titleEn: "Suspected Sepsis",
      titleAr: "الاشتباه بالإنتان",
      descriptionEn: "Treat suspected sepsis as an emergency and arrange immediate assessment.",
      descriptionAr: "تعامل مع الاشتباه بالإنتان كحالة طارئة واطلب تقييماً فورياً.",
      stepsEn: [
        "Call emergency services for a person who is rapidly worsening or seriously unwell.",
        "Stay with them and monitor breathing and responsiveness.",
        "Keep them comfortable and warm; do not give food or drink if they are drowsy.",
        "Tell responders about the symptoms and any recent infection or injury."
      ],
      stepsAr: [
        "اتصل بالطوارئ إذا كانت حالة الشخص تتدهور بسرعة أو كان مريضاً بشدة.",
        "ابقَ معه وراقب التنفس والاستجابة.",
        "حافظ على راحته ودفئه؛ ولا تقدم طعاماً أو شراباً إذا كان ناعساً.",
        "أخبر المسعفين بالأعراض وأي عدوى أو إصابة حديثة."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/sepsis/" }]
    },
    {
      id: 84,
      titleEn: "Using an Automated External Defibrillator",
      titleAr: "استخدام جهاز مزيل الرجفان الخارجي الآلي",
      descriptionEn: "Use an AED alongside emergency services and CPR when someone is unresponsive and not breathing normally.",
      descriptionAr: "استخدم جهاز مزيل الرجفان مع خدمات الطوارئ والإنعاش إذا كان الشخص غير مستجيب ولا يتنفس طبيعياً.",
      stepsEn: [
        "Call emergency services, start CPR if appropriate, and ask someone to bring an AED.",
        "Switch on the AED and follow its spoken and visual prompts.",
        "Attach the pads to the bare, dry chest as shown on the pads.",
        "Make sure nobody touches the person during analysis or a shock; resume CPR when instructed."
      ],
      stepsAr: [
        "اتصل بالطوارئ وابدأ الإنعاش إذا لزم، واطلب من شخص إحضار جهاز مزيل الرجفان.",
        "شغّل الجهاز واتبع تعليماته الصوتية والمرئية.",
        "ثبت اللصقات على الصدر العاري والجاف وفق الرسم عليها.",
        "تأكد من عدم لمس أحد للشخص أثناء التحليل أو الصدمة؛ واستأنف الإنعاش عند طلب الجهاز."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/how-to-use-a-defibrillator/" }]
    },
    {
      id: 85,
      titleEn: "Initial Primary Survey",
      titleAr: "الفحص الأولي للمصاب",
      descriptionEn: "Quickly identify immediate danger and life-threatening problems before other care.",
      descriptionAr: "حدد الخطر المباشر والمشكلات المهددة للحياة بسرعة قبل تقديم الرعاية الأخرى.",
      stepsEn: [
        "Check that the scene is safe before approaching.",
        "Check whether the person responds and call emergency services for an unresponsive casualty.",
        "Look for normal breathing and life-threatening bleeding; follow dispatcher instructions.",
        "Continue to monitor the person and provide only care you are trained to give."
      ],
      stepsAr: [
        "تحقق من سلامة المكان قبل الاقتراب.",
        "تحقق مما إذا كان الشخص يستجيب واتصل بالطوارئ إذا كان فاقداً للاستجابة.",
        "تحقق من التنفس الطبيعي والنزيف المهدد للحياة واتبع تعليمات موظف الطوارئ.",
        "واصل مراقبة الشخص ولا تقدم إلا الرعاية التي تدربت عليها."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/primary-survey/" }]
    },
    {
      id: 86,
      titleEn: "Secondary Survey After Immediate Danger",
      titleAr: "الفحص الثانوي بعد تأمين الحالة العاجلة",
      descriptionEn: "Check for other injuries only after immediate life threats have been addressed.",
      descriptionAr: "تحقق من الإصابات الأخرى بعد التعامل مع الأخطار المباشرة على الحياة.",
      stepsEn: [
        "Do not delay emergency help or care for a life-threatening problem.",
        "Ask what happened and where they feel pain, if they can respond.",
        "Look carefully for visible injuries without moving painful or injured areas.",
        "Keep checking their condition and report any change to responders."
      ],
      stepsAr: [
        "لا تؤخر طلب المساعدة أو رعاية مشكلة مهددة للحياة.",
        "اسأل عما حدث وأين يشعر بالألم إذا كان يستطيع الإجابة.",
        "ابحث بهدوء عن إصابات ظاهرة دون تحريك المناطق المؤلمة أو المصابة.",
        "واصل متابعة حالته وأبلغ المسعفين بأي تغير."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/secondary-survey/" }]
    },
    {
      id: 87,
      titleEn: "Recovery Position for an Unresponsive Breathing Person",
      titleAr: "وضعية الإفاقة لشخص فاقد للاستجابة ويتنفس",
      descriptionEn: "Help keep an unresponsive person who is breathing normally safe while awaiting help.",
      descriptionAr: "ساعد على إبقاء الشخص فاقد الاستجابة الذي يتنفس طبيعياً آمناً أثناء انتظار المساعدة.",
      stepsEn: [
        "Call emergency services and check that breathing is normal.",
        "If there is no suspected spinal injury, place them on their side in a stable position.",
        "Keep the airway clear and stay with them.",
        "Recheck breathing frequently; if it becomes abnormal, follow emergency dispatcher instructions."
      ],
      stepsAr: [
        "اتصل بالطوارئ وتأكد من أن التنفس طبيعي.",
        "إذا لم يُشتبه بإصابة في العمود الفقري، ضع الشخص على جانبه في وضع ثابت.",
        "حافظ على مجرى التنفس مفتوحاً وابقَ معه.",
        "أعد فحص التنفس بانتظام؛ وإذا أصبح غير طبيعي فاتبع تعليمات موظف الطوارئ."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/recovery-position/" }]
    },
    {
      id: 88,
      titleEn: "Road Traffic Collision Scene",
      titleAr: "التعامل مع موقع حادث مروري",
      descriptionEn: "Protect yourself and others while arranging help at a road collision.",
      descriptionAr: "احمِ نفسك والآخرين واطلب المساعدة عند وقوع حادث مروري.",
      stepsEn: [
        "Do not enter traffic, fire, fuel, or other hazards; call emergency services.",
        "Warn approaching traffic only if it is safe to do so.",
        "Do not move casualties unless there is immediate danger.",
        "Reassure casualties, control serious bleeding if safe, and follow dispatcher instructions."
      ],
      stepsAr: [
        "لا تدخل بين حركة المرور أو قرب النار أو الوقود أو الأخطار الأخرى؛ واتصل بالطوارئ.",
        "حذر حركة المرور القادمة فقط إذا كان ذلك آمناً.",
        "لا تحرك المصابين إلا إذا كان هناك خطر مباشر.",
        "طمئن المصابين وأوقف النزيف الشديد إن كان ذلك آمناً واتبع تعليمات الطوارئ."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/traffic-collision/" }]
    },
    {
      id: 89,
      titleEn: "Suspected Drink Spiking",
      titleAr: "الاشتباه بوضع مادة في الشراب",
      descriptionEn: "Keep the person safe and seek urgent help if they may have been drugged.",
      descriptionAr: "حافظ على سلامة الشخص واطلب المساعدة العاجلة إذا اشتُبه بتخديره.",
      stepsEn: [
        "Move to a safe place with a trusted person and do not leave them alone.",
        "Call emergency services if they are very drowsy, confused, vomiting, or having trouble breathing.",
        "Do not give them more alcohol, food, or medication, and do not induce vomiting.",
        "Keep the drink or container if safe and report what happened to responders."
      ],
      stepsAr: [
        "انتقل به إلى مكان آمن مع شخص موثوق ولا تتركه وحده.",
        "اتصل بالطوارئ إذا كان شديد النعاس أو مرتبكاً أو يتقيأ أو يجد صعوبة في التنفس.",
        "لا تقدم له مزيداً من الكحول أو الطعام أو الدواء ولا تحثه على التقيؤ.",
        "احتفظ بالشراب أو العبوة إن كان ذلك آمناً وأخبر المسعفين بما حدث."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/drink-spiking/" }]
    },
    {
      id: 90,
      titleEn: "Supporting an Injured Arm with a Sling",
      titleAr: "دعم الذراع المصابة بحمالة",
      descriptionEn: "Support an injured arm comfortably while arranging appropriate assessment.",
      descriptionAr: "ادعم الذراع المصابة براحة أثناء ترتيب التقييم الطبي المناسب.",
      stepsEn: [
        "Support the arm in the position found; do not straighten or force it.",
        "Use a sling only if it does not increase pain and you can apply it safely.",
        "Check that the hand remains warm and normally colored.",
        "Seek urgent medical care for deformity, severe pain, numbness, or an open wound."
      ],
      stepsAr: [
        "ادعم الذراع في وضعها الحالي ولا تحاول فردها أو إجبارها على الحركة.",
        "استخدم الحمالة فقط إذا لم تزد الألم واستطعت وضعها بأمان.",
        "تحقق من بقاء اليد دافئة وباللون المعتاد.",
        "اطلب رعاية طبية عاجلة عند وجود تشوه أو ألم شديد أو خدر أو جرح مفتوح."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/arm-sling/" }]
    },
    {
      id: 91,
      titleEn: "Elevation Sling",
      titleAr: "حمالة رفع الذراع",
      descriptionEn: "Support a suitable arm injury in an elevated position without forcing movement.",
      descriptionAr: "ادعم إصابة مناسبة في الذراع بوضع مرتفع دون إجبارها على الحركة.",
      stepsEn: [
        "Use this support only when it is comfortable and does not worsen the injury.",
        "Keep the injured hand supported above elbow level if tolerated.",
        "Do not use a sling to straighten a deformity or delay emergency care.",
        "Seek urgent assessment for severe pain, numbness, or poor circulation."
      ],
      stepsAr: [
        "استخدم هذا الدعم فقط إذا كان مريحاً ولا يزيد الإصابة سوءاً.",
        "اسند اليد المصابة فوق مستوى المرفق إذا كان ذلك محتملاً.",
        "لا تستخدم الحمالة لفرد تشوه أو لتأخير الرعاية الطارئة.",
        "اطلب تقييماً عاجلاً عند الألم الشديد أو الخدر أو ضعف الدورة الدموية."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/elevation-sling/" }]
    },
    {
      id: 92,
      titleEn: "Hand Bandage",
      titleAr: "تضميد اليد",
      descriptionEn: "Cover a hand wound with a clean dressing while avoiding overly tight wrapping.",
      descriptionAr: "غطِّ جرح اليد بضماد نظيف مع تجنب لفه بإحكام مفرط.",
      stepsEn: [
        "Wash your hands and use a clean dressing if available.",
        "Cover the wound and secure the dressing gently.",
        "Keep fingertips visible and check warmth, color, and sensation.",
        "Loosen the bandage if fingers become numb, cold, blue, or more painful; seek care for serious wounds."
      ],
      stepsAr: [
        "اغسل يديك واستخدم ضماداً نظيفاً إن توفر.",
        "غطِّ الجرح وثبت الضماد برفق.",
        "اترك أطراف الأصابع ظاهرة وتحقق من دفئها ولونها والإحساس بها.",
        "أرخِ الضماد إذا خَدِرت الأصابع أو بردت أو ازرقت أو زاد ألمها؛ واطلب الرعاية للجروح الخطيرة."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/hand-bandage/" }]
    },
    {
      id: 93,
      titleEn: "Elbow or Knee Bandage",
      titleAr: "تضميد المرفق أو الركبة",
      descriptionEn: "Secure a dressing over an elbow or knee without restricting circulation.",
      descriptionAr: "ثبّت ضماداً على المرفق أو الركبة دون إعاقة الدورة الدموية.",
      stepsEn: [
        "Cover any wound with a clean dressing before applying a bandage.",
        "Wrap comfortably without pulling tightly across the joint.",
        "Check the area beyond the bandage for normal warmth, color, and feeling.",
        "Seek medical care for severe pain, deformity, or difficulty moving the joint."
      ],
      stepsAr: [
        "غطِّ أي جرح بضماد نظيف قبل وضع الرباط.",
        "لفه براحة دون شده بقوة عبر المفصل.",
        "تحقق من الدفء واللون والإحساس الطبيعي في المنطقة بعد الرباط.",
        "اطلب الرعاية الطبية عند الألم الشديد أو التشوه أو صعوبة تحريك المفصل."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/elbow-and-knee-bandage/" }]
    },
    {
      id: 94,
      titleEn: "Applying a Wound Dressing",
      titleAr: "وضع ضماد على الجرح",
      descriptionEn: "Cover a wound with a clean dressing and monitor for bleeding.",
      descriptionAr: "غطِّ الجرح بضماد نظيف وراقب النزيف.",
      stepsEn: [
        "Wash your hands and use gloves if available.",
        "If bleeding, apply firm direct pressure with a clean dressing.",
        "Once controlled, cover the wound with a sterile or clean dressing and secure it gently.",
        "Get urgent help for uncontrolled bleeding, a deep wound, or an embedded object."
      ],
      stepsAr: [
        "اغسل يديك واستخدم قفازات إن توفرت.",
        "إذا كان هناك نزيف، اضغط بقوة مباشرة بضماد نظيف.",
        "بعد السيطرة عليه، غطِّ الجرح بضماد معقم أو نظيف وثبته برفق.",
        "اطلب مساعدة عاجلة للنزيف غير المسيطر عليه أو الجرح العميق أو الجسم المغروس."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/wound-dressing/" }]
    },
    {
      id: 95,
      titleEn: "Cold Compress for a Minor Injury",
      titleAr: "كمادة باردة لإصابة بسيطة",
      descriptionEn: "Use a wrapped cold compress briefly to ease discomfort and swelling.",
      descriptionAr: "استخدم كمادة باردة ملفوفة لفترة قصيرة لتخفيف الانزعاج والتورم.",
      stepsEn: [
        "Wrap a cold pack in cloth; never place ice directly on skin.",
        "Apply gently for short periods and remove it if the skin becomes painful or numb.",
        "Do not apply cold to skin with reduced sensation or poor circulation.",
        "Seek assessment if pain or swelling is severe or the injury may be serious."
      ],
      stepsAr: [
        "لف الكمادة الباردة بقطعة قماش ولا تضع الثلج مباشرة على الجلد.",
        "ضعها برفق لفترات قصيرة وأزلها إذا أصبح الجلد مؤلماً أو مخدراً.",
        "لا تضع البرودة على جلد ضعيف الإحساس أو ضعيف الدورة الدموية.",
        "اطلب تقييماً إذا كان الألم أو التورم شديداً أو يُحتمل أن تكون الإصابة خطيرة."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/cold-compress/" }]
    },
    {
      id: 96,
      titleEn: "Choking in a Baby",
      titleAr: "اختناق الرضيع",
      descriptionEn: "Respond to a baby with a severe airway blockage using age-appropriate first aid.",
      descriptionAr: "استجب لاختناق رضيع بانسداد شديد في مجرى الهواء بإسعافات مناسبة لعمره.",
      stepsEn: [
        "Call emergency services if the baby cannot breathe, cry, or cough effectively.",
        "Use infant choking first aid only as trained; do not use abdominal thrusts on a baby.",
        "Do not put fingers into the mouth unless an object is clearly visible and easy to remove.",
        "If the baby becomes unresponsive, place them safely and follow emergency CPR instructions."
      ],
      stepsAr: [
        "اتصل بالطوارئ إذا لم يستطع الرضيع التنفس أو البكاء أو السعال بفعالية.",
        "استخدم إسعافات اختناق الرضع فقط إذا كنت مدرباً؛ ولا تستخدم ضغطات البطن للرضيع.",
        "لا تدخل أصابعك في الفم إلا إذا كان الجسم ظاهراً بوضوح ويسهل إخراجه.",
        "إذا فقد الرضيع الاستجابة، ضعه بأمان واتبع تعليمات الإنعاش الطارئ."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/baby-choking/" }]
    },
    {
      id: 97,
      titleEn: "Choking in a Child",
      titleAr: "اختناق الطفل",
      descriptionEn: "Recognize severe choking in a child and get emergency help promptly.",
      descriptionAr: "تعرّف على الاختناق الشديد لدى الطفل واطلب المساعدة الطارئة سريعاً.",
      stepsEn: [
        "Call emergency services if the child cannot speak, breathe, or cough effectively.",
        "Encourage an effective cough; use child choking first aid only if trained.",
        "Do not blindly sweep inside the child's mouth.",
        "If the child becomes unresponsive, follow emergency dispatcher instructions and start CPR if trained."
      ],
      stepsAr: [
        "اتصل بالطوارئ إذا لم يستطع الطفل الكلام أو التنفس أو السعال بفعالية.",
        "شجع السعال الفعال؛ واستخدم إسعافات اختناق الأطفال فقط إذا كنت مدرباً.",
        "لا تمرر أصابعك عشوائياً داخل فم الطفل.",
        "إذا فقد الطفل الاستجابة، اتبع تعليمات موظف الطوارئ وابدأ الإنعاش إذا كنت مدرباً."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/child-choking/" }]
    },
    {
      id: 98,
      titleEn: "CPR for a Baby",
      titleAr: "الإنعاش القلبي الرئوي للرضيع",
      descriptionEn: "Get emergency help and provide infant CPR if a baby is unresponsive and not breathing normally.",
      descriptionAr: "اطلب المساعدة الطارئة وقدم إنعاش الرضع إذا كان الرضيع غير مستجيب ولا يتنفس طبيعياً.",
      stepsEn: [
        "Call emergency services or ask someone nearby to call and bring an AED.",
        "If the baby is unresponsive and not breathing normally, begin CPR if trained.",
        "Follow the emergency operator's instructions and use an AED as soon as available.",
        "Continue until the baby shows signs of life or trained help takes over."
      ],
      stepsAr: [
        "اتصل بالطوارئ أو اطلب من شخص قريب الاتصال وإحضار جهاز مزيل الرجفان.",
        "إذا كان الرضيع غير مستجيب ولا يتنفس طبيعياً، ابدأ الإنعاش إذا كنت مدرباً.",
        "اتبع تعليمات موظف الطوارئ واستخدم جهاز مزيل الرجفان فور توفره.",
        "استمر حتى تظهر علامات الحياة أو تتولى المساعدة المدربة الأمر."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/baby-cpr/" }]
    },
    {
      id: 99,
      titleEn: "CPR for a Child",
      titleAr: "الإنعاش القلبي الرئوي للطفل",
      descriptionEn: "Get emergency help and provide child CPR if a child is unresponsive and not breathing normally.",
      descriptionAr: "اطلب المساعدة الطارئة وقدم إنعاش الأطفال إذا كان الطفل غير مستجيب ولا يتنفس طبيعياً.",
      stepsEn: [
        "Call emergency services or ask someone nearby to call and bring an AED.",
        "If the child is unresponsive and not breathing normally, begin CPR if trained.",
        "Follow the emergency operator's instructions and use an AED as soon as available.",
        "Continue until the child shows signs of life or trained help takes over."
      ],
      stepsAr: [
        "اتصل بالطوارئ أو اطلب من شخص قريب الاتصال وإحضار جهاز مزيل الرجفان.",
        "إذا كان الطفل غير مستجيب ولا يتنفس طبيعياً، ابدأ الإنعاش إذا كنت مدرباً.",
        "اتبع تعليمات موظف الطوارئ واستخدم جهاز مزيل الرجفان فور توفره.",
        "استمر حتى تظهر علامات الحياة أو تتولى المساعدة المدربة الأمر."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/child-cpr/" }]
    },
    {
      id: 100,
      titleEn: "Primary Survey for a Baby",
      titleAr: "الفحص الأولي للرضيع",
      descriptionEn: "Check a baby for immediate danger and urgent breathing problems while seeking help.",
      descriptionAr: "تحقق من وجود خطر مباشر أو مشكلة تنفس عاجلة لدى الرضيع أثناء طلب المساعدة.",
      stepsEn: [
        "Make sure the surroundings are safe before approaching.",
        "Check gently for a response and call emergency services if the baby is unresponsive.",
        "Look for normal breathing; report any abnormal breathing immediately.",
        "Keep the baby warm and monitor continuously while awaiting help."
      ],
      stepsAr: [
        "تأكد من سلامة المكان قبل الاقتراب.",
        "تحقق برفق من استجابة الرضيع واتصل بالطوارئ إذا لم يستجب.",
        "تحقق من التنفس الطبيعي وأبلغ فوراً عن أي تنفس غير طبيعي.",
        "حافظ على دفء الرضيع وراقبه باستمرار أثناء انتظار المساعدة."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/baby-primary-survey/" }]
    },
    {
      id: 101,
      titleEn: "Recovery Position for a Child",
      titleAr: "وضعية الإفاقة للطفل",
      descriptionEn: "Position an unresponsive child who is breathing normally while monitoring them.",
      descriptionAr: "ضع الطفل فاقد الاستجابة الذي يتنفس طبيعياً في وضعية مناسبة مع مراقبته.",
      stepsEn: [
        "Call emergency services and confirm the child is breathing normally.",
        "If there is no suspected spinal injury, place the child on their side in a stable position.",
        "Stay with them, keep the airway clear, and monitor breathing.",
        "If breathing becomes abnormal, follow emergency dispatcher instructions."
      ],
      stepsAr: [
        "اتصل بالطوارئ وتأكد من أن الطفل يتنفس طبيعياً.",
        "إذا لم يُشتبه بإصابة في العمود الفقري، ضع الطفل على جانبه في وضع ثابت.",
        "ابقَ معه وحافظ على مجرى التنفس مفتوحاً وراقب التنفس.",
        "إذا أصبح التنفس غير طبيعي، فاتبع تعليمات موظف الطوارئ."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/child-recovery-position/" }]
    },
    {
      id: 102,
      titleEn: "Recovery Position for a Baby",
      titleAr: "وضعية الإفاقة للرضيع",
      descriptionEn: "Keep an unresponsive, normally breathing baby positioned safely while help is coming.",
      descriptionAr: "حافظ على وضع آمن لرضيع فاقد الاستجابة ويتنفس طبيعياً أثناء وصول المساعدة.",
      stepsEn: [
        "Call emergency services and check that the baby is breathing normally.",
        "Follow the age-appropriate recovery-position guidance if there is no suspected spinal injury.",
        "Stay with the baby and keep checking breathing and responsiveness.",
        "If breathing becomes abnormal, follow emergency dispatcher instructions immediately."
      ],
      stepsAr: [
        "اتصل بالطوارئ وتأكد من أن الرضيع يتنفس طبيعياً.",
        "اتبع إرشادات وضعية الإفاقة المناسبة لعمره إذا لم يُشتبه بإصابة في العمود الفقري.",
        "ابقَ مع الرضيع وواصل فحص التنفس والاستجابة.",
        "إذا أصبح التنفس غير طبيعي، فاتبع تعليمات موظف الطوارئ فوراً."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/baby-recovery-position/" }]
    },
    {
      id: 103,
      titleEn: "Febrile Seizure in a Child",
      titleAr: "التشنج الحراري لدى الطفل",
      descriptionEn: "Protect a child during a fever-related seizure and seek medical assessment.",
      descriptionAr: "احمِ الطفل أثناء التشنج المرتبط بالحمى واطلب تقييماً طبياً.",
      stepsEn: [
        "Protect the child from nearby hazards and cushion their head if possible.",
        "Do not restrain them or put anything in their mouth.",
        "When the seizure stops, check breathing and call emergency services if it is prolonged, a first seizure, or they do not recover.",
        "Stay with the child and arrange medical assessment after the episode."
      ],
      stepsAr: [
        "أبعد الأخطار القريبة عن الطفل وضع شيئاً ليناً تحت رأسه إن أمكن.",
        "لا تقيد حركته ولا تضع شيئاً في فمه.",
        "بعد توقف التشنج، تحقق من التنفس واتصل بالطوارئ إذا طال التشنج أو كانت أول نوبة أو لم يتعافَ.",
        "ابقَ مع الطفل ورتب تقييماً طبياً بعد النوبة."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/febrile-seizure/" }]
    },
    {
      id: 104,
      titleEn: "Amputation Injury",
      titleAr: "إصابة البتر",
      descriptionEn: "Treat an amputation as a major emergency and control bleeding while help is coming.",
      descriptionAr: "تعامل مع البتر كحالة طارئة خطيرة وسيطر على النزيف أثناء وصول المساعدة.",
      stepsEn: [
        "Call emergency services immediately.",
        "Apply firm direct pressure around the wound with a clean dressing; do not delay help.",
        "Keep the person lying down, warm, and reassured; monitor breathing and responsiveness.",
        "Do not attempt to reattach the amputated part; follow emergency responders' instructions."
      ],
      stepsAr: [
        "اتصل بالطوارئ فوراً.",
        "اضغط بقوة مباشرة حول الجرح بضماد نظيف ولا تؤخر طلب المساعدة.",
        "أبقِ الشخص مستلقياً ودافئاً وطمئنه، وراقب التنفس والاستجابة.",
        "لا تحاول إعادة الجزء المبتور واتبع تعليمات المسعفين."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/severe-bleeding/" }]
    },
    {
      id: 105,
      titleEn: "Object Embedded in a Wound",
      titleAr: "جسم مغروس في الجرح",
      descriptionEn: "Avoid worsening an injury when an object is embedded in the body.",
      descriptionAr: "تجنب تفاقم الإصابة عند انغراس جسم في الجسم.",
      stepsEn: [
        "Do not remove or press directly on the embedded object.",
        "Apply pressure around the object to control bleeding, if safe.",
        "Call emergency services for a deep wound, heavy bleeding, or an object in the eye, neck, chest, or abdomen.",
        "Keep the person still and monitor them until help arrives."
      ],
      stepsAr: [
        "لا تزل الجسم المغروس ولا تضغط عليه مباشرة.",
        "اضغط حول الجسم للسيطرة على النزيف إذا كان ذلك آمناً.",
        "اتصل بالطوارئ للجرح العميق أو النزيف الغزير أو الجسم المغروس في العين أو الرقبة أو الصدر أو البطن.",
        "أبقِ الشخص ساكناً وراقبه حتى وصول المساعدة."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/severe-bleeding/" }]
    },
    {
      id: 106,
      titleEn: "Puncture Wound",
      titleAr: "جرح وخزي",
      descriptionEn: "Clean and cover a minor puncture and get medical advice for deeper wounds.",
      descriptionAr: "نظف الجرح الوخزي البسيط وغطه واطلب المشورة للجروح الأعمق.",
      stepsEn: [
        "Wash your hands and rinse a small superficial wound with clean running water.",
        "Do not probe the wound or remove an object that is embedded.",
        "Cover it with a clean dressing and seek medical advice for a deep, dirty, or painful puncture.",
        "Get urgent help for heavy bleeding, numbness, or a wound to the chest, abdomen, eye, or joint."
      ],
      stepsAr: [
        "اغسل يديك واشطف الجرح السطحي الصغير بماء جارٍ نظيف.",
        "لا تستكشف الجرح ولا تزل جسماً مغروساً.",
        "غطه بضماد نظيف واطلب المشورة الطبية للجرح العميق أو المتسخ أو المؤلم.",
        "اطلب مساعدة عاجلة عند النزيف الغزير أو الخدر أو إصابة الصدر أو البطن أو العين أو المفصل."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/cuts-and-grazes/" }]
    },
    {
      id: 107,
      titleEn: "Chemical Splash in the Eye",
      titleAr: "تناثر مادة كيميائية في العين",
      descriptionEn: "Rinse an eye exposed to a chemical immediately and arrange urgent medical assessment.",
      descriptionAr: "اشطف العين التي تعرضت لمادة كيميائية فوراً ورتب تقييماً طبياً عاجلاً.",
      stepsEn: [
        "Begin rinsing immediately with plenty of clean, cool running water.",
        "Hold the eyelids open gently and let water flow away from the unaffected eye.",
        "Continue rinsing while help is arranged; remove contact lenses if easy to do.",
        "Seek urgent medical advice and take the product container or label if safe."
      ],
      stepsAr: [
        "ابدأ الشطف فوراً بكمية كبيرة من ماء جارٍ نظيف وبارد.",
        "افتح الجفنين برفق ودع الماء يتجه بعيداً عن العين السليمة.",
        "واصل الشطف أثناء ترتيب المساعدة، وأزل العدسات اللاصقة إذا كان ذلك سهلاً.",
        "اطلب المشورة الطبية العاجلة وخذ عبوة المادة أو ملصقها إذا كان ذلك آمناً."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/eye-injury/" }]
    },
    {
      id: 108,
      titleEn: "Toothache",
      titleAr: "ألم الأسنان",
      descriptionEn: "Ease toothache temporarily and arrange dental care rather than attempting treatment at home.",
      descriptionAr: "خفف ألم الأسنان مؤقتاً ورتب رعاية أسنان بدلاً من محاولة علاجه في المنزل.",
      stepsEn: [
        "Rinse the mouth gently with warm water and keep the area clean.",
        "Avoid very hot, cold, or sweet foods if they worsen the pain.",
        "Do not place aspirin or other substances directly on the tooth or gum.",
        "Arrange dental care; seek urgent help for facial swelling, fever, or trouble swallowing or breathing."
      ],
      stepsAr: [
        "اشطف الفم برفق بماء دافئ وحافظ على نظافة المنطقة.",
        "تجنب الأطعمة شديدة السخونة أو البرودة أو الحلاوة إذا زادت الألم.",
        "لا تضع الأسبرين أو أي مادة أخرى مباشرة على السن أو اللثة.",
        "رتب رعاية لدى طبيب الأسنان؛ واطلب مساعدة عاجلة عند تورم الوجه أو الحمى أو صعوبة البلع أو التنفس."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/symptoms/toothache/" }]
    },
    {
      id: 109,
      titleEn: "Dental Abscess",
      titleAr: "خراج الأسنان",
      descriptionEn: "Recognize a dental abscess as a problem needing urgent dental treatment.",
      descriptionAr: "تعرّف على خراج الأسنان بوصفه مشكلة تحتاج إلى علاج عاجل لدى طبيب الأسنان.",
      stepsEn: [
        "Arrange urgent dental care; an abscess needs professional treatment.",
        "Do not try to burst, drain, or squeeze the swelling.",
        "Keep the mouth clean and follow only advice from a dental professional.",
        "Call emergency services for difficulty breathing or swallowing, or rapidly spreading swelling."
      ],
      stepsAr: [
        "رتب رعاية عاجلة لدى طبيب الأسنان؛ فالخراج يحتاج إلى علاج متخصص.",
        "لا تحاول فتح التورم أو تصريفه أو عصره.",
        "حافظ على نظافة الفم واتبع نصائح مختص الأسنان فقط.",
        "اتصل بالطوارئ عند صعوبة التنفس أو البلع أو انتشار التورم بسرعة."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/dental-abscess/" }]
    },
    {
      id: 110,
      titleEn: "Heat Cramps",
      titleAr: "التقلصات الحرارية",
      descriptionEn: "Stop exertion and cool someone experiencing muscle cramps in hot conditions.",
      descriptionAr: "أوقف المجهود وبرّد الشخص الذي يعاني من تقلصات عضلية في الجو الحار.",
      stepsEn: [
        "Stop physical activity and move to a cool, shaded place.",
        "Rest and gently cool the person; do not force stretching of a painful muscle.",
        "If fully alert and able to swallow, offer small sips of water.",
        "Seek urgent help if symptoms worsen, persist, or occur with confusion or collapse."
      ],
      stepsAr: [
        "أوقف النشاط البدني وانتقل إلى مكان بارد ومظلل.",
        "أرح الشخص وبرّده بلطف ولا تجبر العضلة المؤلمة على التمدد.",
        "إذا كان واعياً تماماً ويستطيع البلع، قدم رشفات صغيرة من الماء.",
        "اطلب مساعدة عاجلة إذا ساءت الأعراض أو استمرت أو صاحَبها ارتباك أو انهيار."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/heat-exhaustion/" }]
    },
    {
      id: 111,
      titleEn: "Nettle Sting",
      titleAr: "لسعة نبات القراص",
      descriptionEn: "Relieve a mild skin reaction after contact with stinging nettles.",
      descriptionAr: "خفف تهيج الجلد البسيط بعد ملامسة نبات القراص اللاسع.",
      stepsEn: [
        "Move away from the plant and avoid rubbing the affected skin.",
        "Rinse the area gently with cool water.",
        "Do not scratch; seek advice if irritation is severe or persistent.",
        "Call emergency services for breathing difficulty or swelling of the face or throat."
      ],
      stepsAr: [
        "ابتعد عن النبات وتجنب فرك الجلد المصاب.",
        "اشطف المنطقة برفق بماء بارد.",
        "لا تحك الجلد؛ واطلب المشورة إذا كان التهيج شديداً أو مستمراً.",
        "اتصل بالطوارئ عند صعوبة التنفس أو تورم الوجه أو الحلق."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/nettle-sting/" }]
    },
    {
      id: 112,
      titleEn: "Medication in Hot Weather",
      titleAr: "الأدوية في الطقس الحار",
      descriptionEn: "Reduce heat-related risks for someone taking prescribed medicines without changing their treatment.",
      descriptionAr: "قلل مخاطر الحرارة لدى من يتناول أدوية موصوفة دون تغيير علاجه.",
      stepsEn: [
        "Help the person stay cool and drink fluids as advised for their health condition.",
        "Keep medicines stored according to their label and away from excessive heat.",
        "Do not stop, change, or double a prescribed medicine without professional advice.",
        "Seek medical help if the person becomes unwell in the heat."
      ],
      stepsAr: [
        "ساعد الشخص على البقاء بارداً وشرب السوائل وفق ما يناسب حالته الصحية.",
        "احفظ الأدوية وفق ملصقها وبعيداً عن الحرارة الشديدة.",
        "لا توقف الدواء الموصوف أو تغيره أو تضاعف جرعته دون مشورة مختص.",
        "اطلب المساعدة الطبية إذا مرض الشخص بسبب الحرارة."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/medication-in-hot-weather/" }]
    },
    {
      id: 113,
      titleEn: "First-Aid Scene Safety",
      titleAr: "سلامة موقع الإسعاف الأولي",
      descriptionEn: "Check for hazards and protect yourself before approaching an injured person.",
      descriptionAr: "تحقق من الأخطار واحمِ نفسك قبل الاقتراب من المصاب.",
      stepsEn: [
        "Pause and look for traffic, fire, electricity, chemicals, or other hazards.",
        "Do not enter an unsafe area; call emergency services and describe the danger.",
        "Use gloves or a barrier if available and avoid contact with body fluids.",
        "Approach only when it is safe and provide care within your training."
      ],
      stepsAr: [
        "توقف وابحث عن حركة المرور أو النار أو الكهرباء أو المواد الكيميائية أو الأخطار الأخرى.",
        "لا تدخل منطقة غير آمنة؛ اتصل بالطوارئ واشرح الخطر.",
        "استخدم قفازات أو حاجزاً إن توفر وتجنب ملامسة سوائل الجسم.",
        "اقترب فقط عندما يصبح المكان آمناً وقدم الرعاية ضمن حدود تدريبك."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/emergency-situations/" }]
    },
    {
      id: 114,
      titleEn: "Consent Before First Aid",
      titleAr: "الموافقة قبل الإسعاف الأولي",
      descriptionEn: "Respect a person's choice and explain what you plan to do before helping.",
      descriptionAr: "احترم اختيار الشخص واشرح ما تنوي فعله قبل تقديم المساعدة.",
      stepsEn: [
        "Introduce yourself, explain what you have noticed, and ask permission to help.",
        "Listen to the person's concerns and respect a capable person's decision to refuse.",
        "For a child, involve a parent or responsible adult when possible while not delaying urgent help.",
        "If someone is unresponsive and in immediate danger, call emergency services and follow their guidance."
      ],
      stepsAr: [
        "عرّف بنفسك واشرح ما لاحظته واطلب الإذن للمساعدة.",
        "استمع إلى مخاوف الشخص واحترم رفض الشخص القادر على اتخاذ القرار.",
        "أشرك ولي أمر الطفل أو الشخص المسؤول متى أمكن دون تأخير المساعدة العاجلة.",
        "إذا كان الشخص فاقداً للاستجابة وفي خطر مباشر، فاتصل بالطوارئ واتبع إرشاداتهم."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/duties-and-responsibilities-of-first-aiders/" }]
    },
    {
      id: 115,
      titleEn: "Maintaining Patient Dignity",
      titleAr: "الحفاظ على كرامة المصاب",
      descriptionEn: "Provide first aid respectfully while protecting privacy and comfort.",
      descriptionAr: "قدم الإسعاف باحترام مع حماية الخصوصية والراحة.",
      stepsEn: [
        "Introduce yourself and explain each action before doing it.",
        "Cover the person where possible and expose only the area needing care.",
        "Speak calmly, listen, and involve them in decisions when they can respond.",
        "Share personal details only with responders or professionals who need them."
      ],
      stepsAr: [
        "عرّف بنفسك واشرح كل خطوة قبل تنفيذها.",
        "غطِّ الشخص قدر الإمكان ولا تكشف إلا المنطقة التي تحتاج إلى رعاية.",
        "تحدث بهدوء واستمع إليه وأشركه في القرارات إذا كان قادراً على الاستجابة.",
        "لا تشارك المعلومات الشخصية إلا مع المسعفين أو المختصين الذين يحتاجون إليها."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/patient-dignity/" }]
    },
    {
      id: 116,
      titleEn: "First-Aider Responsibilities",
      titleAr: "مسؤوليات المسعف الأولي",
      descriptionEn: "Provide safe, respectful first aid within your training and call for professional help when needed.",
      descriptionAr: "قدم إسعافاً أولياً آمناً ومحترماً ضمن تدريبك واطلب المساعدة المهنية عند الحاجة.",
      stepsEn: [
        "Check for danger and protect yourself, the casualty, and bystanders.",
        "Ask permission where possible and explain what you are doing.",
        "Call emergency services when the situation is serious or beyond your training.",
        "Stay with the casualty, monitor their condition, and give responders a clear handover."
      ],
      stepsAr: [
        "تحقق من الأخطار واحمِ نفسك والمصاب والموجودين.",
        "اطلب الإذن متى أمكن واشرح ما تفعله.",
        "اتصل بالطوارئ عندما تكون الحالة خطيرة أو تتجاوز تدريبك.",
        "ابقَ مع المصاب وراقب حالته وقدّم للمسعفين معلومات واضحة."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/duties-and-responsibilities-of-first-aiders/" }]
    },
    {
      id: 117,
      titleEn: "Chilblains",
      titleAr: "لسعات البرد",
      descriptionEn: "Protect cold-irritated skin and warm it gradually.",
      descriptionAr: "احمِ الجلد المتهيج من البرد ودفئه تدريجياً.",
      stepsEn: [
        "Move to a warm place and let the skin warm gradually.",
        "Keep the area dry and avoid rubbing, scratching, or applying direct heat.",
        "Protect any blisters and seek medical advice if skin breaks or symptoms worsen.",
        "Get urgent help for numb, hard, or discolored skin suggesting a more serious cold injury."
      ],
      stepsAr: [
        "انتقل إلى مكان دافئ ودع الجلد يدفأ تدريجياً.",
        "حافظ على جفاف المنطقة وتجنب فركها أو حكها أو تعريضها لحرارة مباشرة.",
        "احمِ أي بثور واطلب المشورة الطبية إذا تشقق الجلد أو ساءت الأعراض.",
        "اطلب مساعدة عاجلة عند خدر الجلد أو تصلبه أو تغير لونه بما قد يشير إلى إصابة برد أشد."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/chilblains/" }]
    },
    {
      id: 118,
      titleEn: "Human Bite",
      titleAr: "عضة بشرية",
      descriptionEn: "Clean a human bite and seek medical advice because broken skin can become infected.",
      descriptionAr: "نظف العضة البشرية واطلب المشورة الطبية لأن الجلد المتضرر قد يُصاب بالعدوى.",
      stepsEn: [
        "If the bite has broken the skin, wash it thoroughly with soap and running water.",
        "Control bleeding with gentle direct pressure and cover with a clean dressing.",
        "Seek prompt medical advice for any broken-skin bite, especially on the hand, face, or over a joint.",
        "Get urgent help for a deep wound, uncontrolled bleeding, or signs of serious infection."
      ],
      stepsAr: [
        "إذا اخترقت العضة الجلد، اغسله جيداً بالماء الجاري والصابون.",
        "سيطر على النزيف بضغط مباشر لطيف وغطِّ الجرح بضماد نظيف.",
        "اطلب المشورة الطبية سريعاً لأي عضة كسرت الجلد، خصوصاً في اليد أو الوجه أو فوق مفصل.",
        "اطلب مساعدة عاجلة للجرح العميق أو النزيف غير المسيطر عليه أو علامات العدوى الخطيرة."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/human-and-animal-bites/" }]
    },
    {
      id: 119,
      titleEn: "Broken Nose",
      titleAr: "كسر الأنف",
      descriptionEn: "Manage a suspected broken nose safely and recognize when urgent care is needed.",
      descriptionAr: "تعامل بأمان مع الاشتباه بكسر الأنف وتعرّف على الحالات التي تتطلب رعاية عاجلة.",
      stepsEn: [
        "Sit upright, lean forward, and breathe through the mouth if there is bleeding.",
        "Apply a wrapped cold pack gently to reduce discomfort; do not try to straighten the nose.",
        "Seek medical advice for suspected fracture, persistent bleeding, or difficulty breathing through the nose.",
        "Call emergency services for severe head injury, clear fluid from the nose, or uncontrolled bleeding."
      ],
      stepsAr: [
        "اجلس منتصباً ومِل إلى الأمام وتنفس من الفم إذا كان هناك نزيف.",
        "ضع كمادة باردة ملفوفة برفق لتخفيف الانزعاج ولا تحاول تقويم الأنف.",
        "اطلب المشورة الطبية عند الاشتباه بكسر أو استمرار النزيف أو صعوبة التنفس عبر الأنف.",
        "اتصل بالطوارئ عند إصابة خطيرة بالرأس أو خروج سائل صافٍ من الأنف أو نزيف لا يمكن السيطرة عليه."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/broken-nose/" }]
    },
    {
      id: 120,
      titleEn: "Jaw Injury",
      titleAr: "إصابة الفك",
      descriptionEn: "Support a suspected jaw injury and arrange urgent assessment without trying to realign it.",
      descriptionAr: "ادعم إصابة الفك المشتبه بها ورتب تقييماً عاجلاً دون محاولة إعادته إلى موضعه.",
      stepsEn: [
        "Call emergency services if breathing or swallowing is affected or there is severe bleeding.",
        "Keep the person still and support the jaw gently in the position found.",
        "Do not try to realign the jaw or give food or drink if swallowing is difficult.",
        "Arrange urgent medical assessment for suspected fracture or dislocation."
      ],
      stepsAr: [
        "اتصل بالطوارئ إذا تأثر التنفس أو البلع أو كان النزيف شديداً.",
        "أبقِ الشخص ساكناً وادعم الفك برفق في وضعه الحالي.",
        "لا تحاول إعادة الفك إلى موضعه ولا تقدم طعاماً أو شراباً عند صعوبة البلع.",
        "رتب تقييماً طبياً عاجلاً عند الاشتباه بكسر أو خلع."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/fractures-and-broken-bones/" }]
    },
    {
      id: 121,
      titleEn: "Anaphylaxis Emergency Response",
      titleAr: "التعامل مع الحساسية المفرطة",
      descriptionEn: "Act immediately for a suspected life-threatening allergic reaction.",
      descriptionAr: "تحرك فوراً عند الاشتباه في تفاعل تحسسي مهدد للحياة.",
      stepsEn: [
        "Call emergency services (123 in Egypt) and say anaphylaxis is suspected.",
        "Help the person use their prescribed adrenaline auto-injector according to its instructions.",
        "Have them lie down; if breathing is difficult, let them sit up slowly. In pregnancy, place them on their left side.",
        "Stay with them, monitor breathing, and do not let them stand or walk."
      ],
      stepsAr: [
        "اتصل بالإسعاف (123 في مصر) واذكر الاشتباه في حساسية مفرطة.",
        "ساعد المصاب على استخدام حاقن الأدرينالين الموصوف له وفق تعليماته.",
        "ساعده على الاستلقاء؛ وإذا صعب التنفس فليجلس ببطء. وفي الحمل يوضع على جانبه الأيسر.",
        "ابقَ معه وراقب تنفسه ولا تسمح له بالوقوف أو المشي."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/anaphylaxis/" }]
    },
    {
      id: 122,
      titleEn: "Second Adrenaline Auto-Injector",
      titleAr: "استخدام حاقن أدرينالين ثانٍ",
      descriptionEn: "Know what to do if anaphylaxis symptoms continue after the first prescribed injector.",
      descriptionAr: "تعرف على التصرف إذا استمرت أعراض الحساسية المفرطة بعد الحاقن الموصوف الأول.",
      stepsEn: [
        "Call emergency services immediately if they have not already been called.",
        "If symptoms have not improved after 5 minutes and a second prescribed injector is available, help use it as instructed.",
        "Keep the person lying down; if breathing is difficult, allow them to sit up slowly.",
        "Continue monitoring breathing and follow the emergency operator's instructions."
      ],
      stepsAr: [
        "اتصل بالإسعاف فوراً إذا لم يسبق الاتصال به.",
        "إذا لم تتحسن الأعراض بعد 5 دقائق وتوفر حاقن موصوف ثانٍ، ساعد المصاب على استخدامه وفق التعليمات.",
        "أبقِ المصاب مستلقياً؛ وإذا صعب التنفس فاسمح له بالجلوس ببطء.",
        "واصل مراقبة التنفس واتبع تعليمات موظف الطوارئ."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/anaphylaxis/" }]
    },
    {
      id: 123,
      titleEn: "Severe Asthma Attack",
      titleAr: "نوبة ربو شديدة",
      descriptionEn: "Support someone having a severe asthma attack while arranging urgent help.",
      descriptionAr: "ساند المصاب بنوبة ربو شديدة مع طلب المساعدة العاجلة.",
      stepsEn: [
        "Help the person sit upright and try to keep them calm.",
        "Help them use their own reliever inhaler and follow their written asthma action plan.",
        "Call emergency services if symptoms are severe, worsening, or not improving with the reliever.",
        "Stay with them and monitor their breathing until help arrives."
      ],
      stepsAr: [
        "ساعد المصاب على الجلوس منتصباً وحاول تهدئته.",
        "ساعده على استخدام بخاخه الإسعافي الخاص واتبع خطة الربو المكتوبة لديه.",
        "اتصل بالإسعاف إذا كانت الأعراض شديدة أو تتفاقم أو لا تتحسن بالبخاخ الإسعافي.",
        "ابقَ معه وراقب تنفسه حتى وصول المساعدة."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/asthma/" }]
    },
    {
      id: 124,
      titleEn: "Asthma Attack in a Child",
      titleAr: "نوبة ربو لدى طفل",
      descriptionEn: "Use the child's own asthma plan and seek urgent help for a severe or persistent attack.",
      descriptionAr: "اتبع خطة الربو الخاصة بالطفل واطلب المساعدة العاجلة عند شدة النوبة أو استمرارها.",
      stepsEn: [
        "Sit the child upright and reassure them; do not make them lie flat.",
        "Help them use their prescribed reliever inhaler and spacer according to their action plan.",
        "Call emergency services if the child is struggling to breathe, becoming exhausted, or not improving.",
        "Stay with the child and keep using the action plan while waiting for help."
      ],
      stepsAr: [
        "أجلس الطفل منتصباً وطمئنه ولا تجعله يستلقي بشكل مسطح.",
        "ساعده على استخدام البخاخ الإسعافي الموصوف والحجرة الهوائية وفق خطته.",
        "اتصل بالإسعاف إذا كان الطفل يجد صعوبة في التنفس أو بدأ ينهك أو لم يتحسن.",
        "ابقَ معه واتبع خطة العمل أثناء انتظار المساعدة."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/asthma/" }]
    },
    {
      id: 125,
      titleEn: "Low Blood Sugar in a Conscious Person",
      titleAr: "انخفاض السكر لدى شخص واعٍ",
      descriptionEn: "Help a conscious person with suspected hypoglycaemia who can swallow safely.",
      descriptionAr: "ساعد شخصاً واعياً يُشتبه بانخفاض السكر لديه ويمكنه البلع بأمان.",
      stepsEn: [
        "If available, check the person's glucose and follow their diabetes plan.",
        "If they are alert and able to swallow, give a fast-acting sugary drink or glucose product they normally use.",
        "Recheck after about 10 to 15 minutes; repeat the person's hypo plan if still low.",
        "Once improved, encourage a longer-acting snack or meal if appropriate and stay nearby."
      ],
      stepsAr: [
        "تحقق من مستوى السكر إن أمكن واتبع خطة السكري الخاصة بالمصاب.",
        "إذا كان واعياً وقادراً على البلع، قدم له مشروباً سكرياً سريعاً أو منتج جلوكوز يستخدمه عادةً.",
        "أعد الفحص بعد نحو 10 إلى 15 دقيقة واتبع خطة انخفاض السكر مجدداً إذا ظل منخفضاً.",
        "بعد التحسن، شجعه على تناول وجبة أو وجبة خفيفة أطول مفعولاً إذا كان ذلك مناسباً وابقَ بجواره."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/" }]
    },
    {
      id: 126,
      titleEn: "Severe Low Blood Sugar with Unconsciousness",
      titleAr: "انخفاض شديد للسكر مع فقدان الوعي",
      descriptionEn: "Protect an unconscious person with suspected severe hypoglycaemia from choking.",
      descriptionAr: "احمِ فاقد الوعي المشتبه بانخفاض السكر الشديد لديه من الاختناق.",
      stepsEn: [
        "Call emergency services (123 in Egypt).",
        "Do not give food, drink, or glucose by mouth.",
        "If they are breathing normally, place them in the recovery position and keep checking their breathing.",
        "Use prescribed glucagon only if it is available and the helper knows how to use it."
      ],
      stepsAr: [
        "اتصل بالإسعاف (123 في مصر).",
        "لا تعطِ طعاماً أو شراباً أو جلوكوزاً عن طريق الفم.",
        "إذا كان يتنفس طبيعياً، ضعه في وضع الإفاقة وواصل مراقبة تنفسه.",
        "لا تستخدم الجلوكاجون الموصوف إلا إذا كان متاحاً وكان المسعف يعرف طريقة استعماله."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/" }]
    },
    {
      id: 127,
      titleEn: "Low Blood Sugar with a Seizure",
      titleAr: "تشنج مع انخفاض السكر",
      descriptionEn: "Respond safely if a person with diabetes has a seizure and may have low blood sugar.",
      descriptionAr: "تصرف بأمان إذا أصيب مريض السكري بتشنج مع احتمال انخفاض السكر.",
      stepsEn: [
        "Call emergency services, especially if this is a first seizure, lasts 5 minutes, or breathing is affected.",
        "Protect the person from nearby hazards and cushion their head; do not restrain them or put anything in their mouth.",
        "Do not give food, drink, or glucose while they are seizing or not fully alert.",
        "When the seizure stops, check breathing, place them on their side if breathing normally, and follow their emergency diabetes plan."
      ],
      stepsAr: [
        "اتصل بالإسعاف، خصوصاً إذا كان هذا أول تشنج أو استمر 5 دقائق أو تأثر التنفس.",
        "أبعد الأخطار القريبة وضع شيئاً ليناً تحت الرأس؛ لا تثبت المصاب ولا تضع شيئاً في فمه.",
        "لا تعطِ طعاماً أو شراباً أو جلوكوزاً أثناء التشنج أو قبل استعادة الوعي الكامل.",
        "بعد توقف التشنج، تحقق من التنفس وضعه على جانبه إذا كان يتنفس طبيعياً واتبع خطة طوارئ السكري."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/" }]
    },
    {
      id: 128,
      titleEn: "Suspected Diabetic Ketoacidosis",
      titleAr: "الاشتباه بالحماض الكيتوني السكري",
      descriptionEn: "Recognize possible diabetic ketoacidosis and arrange urgent medical assessment.",
      descriptionAr: "تعرف على احتمال الحماض الكيتوني السكري ورتب تقييماً طبياً عاجلاً.",
      stepsEn: [
        "Look for vomiting, abdominal pain, unusual deep breathing, fruity-smelling breath, marked thirst, or confusion in someone with diabetes.",
        "Call emergency services or arrange immediate emergency-department care if ketoacidosis is suspected.",
        "If the person has a diabetes sick-day plan and is fully alert, help them follow it while urgent help is arranged.",
        "Do not delay care or guess an insulin dose; take their medicines and glucose or ketone readings to clinicians if available."
      ],
      stepsAr: [
        "انتبه للقيء أو ألم البطن أو التنفس العميق غير المعتاد أو رائحة النفس الشبيهة بالفواكه أو العطش الشديد أو الارتباك لدى مريض السكري.",
        "اتصل بالإسعاف أو توجه فوراً إلى الطوارئ عند الاشتباه بالحماض الكيتوني.",
        "إذا كانت لدى المصاب خطة لأيام المرض وكان واعياً تماماً، ساعده على اتباعها أثناء ترتيب المساعدة العاجلة.",
        "لا تؤخر الرعاية ولا تخمن جرعة إنسولين؛ اصطحب الأدوية وقراءات السكر أو الكيتونات إن توفرت."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/diabetic-ketoacidosis/" }]
    },
    {
      id: 129,
      titleEn: "Possible Ketoacidosis in a Child",
      titleAr: "احتمال الحماض الكيتوني لدى طفل",
      descriptionEn: "Treat possible diabetic ketoacidosis in a child as an emergency.",
      descriptionAr: "تعامل مع احتمال الحماض الكيتوني السكري لدى الطفل كحالة طارئة.",
      stepsEn: [
        "Seek emergency care for a child with diabetes who is vomiting, very thirsty, unusually sleepy, confused, or breathing deeply.",
        "Call emergency services if the child is drowsy, worsening, or difficult to wake.",
        "Do not force food or drink if the child is drowsy or vomiting repeatedly.",
        "Bring the child's diabetes medicines and recent glucose or ketone readings if available."
      ],
      stepsAr: [
        "اطلب رعاية طارئة لطفل مصاب بالسكري يعاني القيء أو العطش الشديد أو النعاس غير المعتاد أو الارتباك أو التنفس العميق.",
        "اتصل بالإسعاف إذا كان الطفل ناعساً أو تتدهور حالته أو يصعب إيقاظه.",
        "لا تجبر الطفل على الطعام أو الشراب إذا كان ناعساً أو يتقيأ باستمرار.",
        "أحضر أدوية السكري والقراءات الحديثة للسكر أو الكيتونات إن توفرت."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/diabetic-ketoacidosis/" }]
    },
    {
      id: 130,
      titleEn: "Carbon Monoxide Exposure: Evacuate Safely",
      titleAr: "التعرض لأول أكسيد الكربون: الإخلاء بأمان",
      descriptionEn: "Leave a suspected carbon monoxide area without putting yourself at risk.",
      descriptionAr: "غادر مكان الاشتباه بأول أكسيد الكربون دون تعريض نفسك للخطر.",
      stepsEn: [
        "Get everyone outside into fresh air immediately if it is safe to do so.",
        "Do not re-enter the building or use a suspected appliance until authorities say it is safe.",
        "Call emergency services for severe symptoms or any collapse; seek prompt medical advice for suspected exposure.",
        "Warn others to stay away and tell responders where the suspected source is."
      ],
      stepsAr: [
        "أخرج الجميع فوراً إلى الهواء الطلق إذا أمكن ذلك بأمان.",
        "لا تعد إلى المبنى ولا تستخدم الجهاز المشتبه به حتى تؤكد الجهات المختصة سلامة المكان.",
        "اتصل بالإسعاف عند الأعراض الشديدة أو الإغماء واطلب المشورة الطبية سريعاً عند الاشتباه بالتعرض.",
        "حذر الآخرين من الاقتراب وأخبر فرق الاستجابة بمكان المصدر المحتمل."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/carbon-monoxide-poisoning/" }]
    },
    {
      id: 131,
      titleEn: "Carbon Monoxide Exposure: Help a Casualty",
      titleAr: "التعرض لأول أكسيد الكربون: مساعدة المصاب",
      descriptionEn: "Prioritize rescuer safety when someone may be affected by carbon monoxide.",
      descriptionAr: "أعطِ أولوية لسلامة المسعف عند احتمال تأثر شخص بأول أكسيد الكربون.",
      stepsEn: [
        "Do not enter a suspected contaminated area; move the person outside only if you can do so without entering danger.",
        "Call emergency services for breathing difficulty, confusion, collapse, chest pain, or severe weakness.",
        "If the person is unconscious but breathing normally, place them in the recovery position in fresh air.",
        "If they are not breathing normally, start CPR if you can and follow the emergency operator's instructions."
      ],
      stepsAr: [
        "لا تدخل مكاناً يُشتبه بتلوثه؛ أخرج المصاب فقط إذا أمكن ذلك دون دخول منطقة خطرة.",
        "اتصل بالإسعاف عند صعوبة التنفس أو الارتباك أو الإغماء أو ألم الصدر أو الضعف الشديد.",
        "إذا كان فاقد الوعي لكنه يتنفس طبيعياً، ضعه في وضع الإفاقة في الهواء الطلق.",
        "إذا لم يكن يتنفس طبيعياً، ابدأ الإنعاش إن استطعت واتبع تعليمات موظف الطوارئ."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/carbon-monoxide-poisoning/" }]
    },
    {
      id: 132,
      titleEn: "Heat Exhaustion: Cooling an Adult",
      titleAr: "الإجهاد الحراري: تبريد شخص بالغ",
      descriptionEn: "Cool someone with suspected heat exhaustion and watch for signs of heatstroke.",
      descriptionAr: "برّد المصاب المشتبه بإجهاده حرارياً وراقب علامات ضربة الحرارة.",
      stepsEn: [
        "Move them to a cool or shaded place and help remove unnecessary outer clothing.",
        "If fully awake and able to swallow, offer cool water or an oral rehydration drink.",
        "Cool their skin with cool water, fanning, or wrapped cold packs.",
        "Call emergency services if they become confused, faint, have a seizure, or do not improve promptly."
      ],
      stepsAr: [
        "انقل المصاب إلى مكان بارد أو مظلل وساعده على خلع الملابس الخارجية غير الضرورية.",
        "إذا كان واعياً تماماً وقادراً على البلع، قدم له ماءً بارداً أو محلول إماهة فموياً.",
        "برّد الجلد بالماء البارد أو التهوية أو كمادات باردة ملفوفة.",
        "اتصل بالإسعاف إذا ارتبك المصاب أو أُغمي عليه أو أصيب بتشنج أو لم يتحسن سريعاً."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/" }]
    },
    {
      id: 133,
      titleEn: "Heat Exhaustion in a Child",
      titleAr: "الإجهاد الحراري لدى طفل",
      descriptionEn: "Move a child with heat exhaustion to a cool place and seek help if they worsen.",
      descriptionAr: "انقل الطفل المصاب بإجهاد حراري إلى مكان بارد واطلب المساعدة إذا ساءت حالته.",
      stepsEn: [
        "Take the child to a cool, shaded place and remove unnecessary clothing.",
        "Cool their skin with cool water and fan them gently.",
        "Offer small sips of water only if the child is alert and swallowing normally.",
        "Call emergency services for confusion, a seizure, collapse, or very hot skin with worsening symptoms."
      ],
      stepsAr: [
        "انقل الطفل إلى مكان بارد ومظلل وأزل الملابس غير الضرورية.",
        "برّد جلده بالماء البارد وهوِّه برفق.",
        "قدم رشفات صغيرة من الماء فقط إذا كان الطفل واعياً ويبلع بصورة طبيعية.",
        "اتصل بالإسعاف عند الارتباك أو التشنج أو الإغماء أو سخونة الجلد الشديدة مع تدهور الأعراض."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/" }]
    },
    {
      id: 134,
      titleEn: "Heatstroke: Emergency Response",
      titleAr: "ضربة الحرارة: الاستجابة الطارئة",
      descriptionEn: "Treat suspected heatstroke as a medical emergency and begin cooling while help is coming.",
      descriptionAr: "تعامل مع الاشتباه بضربة الحرارة كحالة طارئة وابدأ التبريد أثناء وصول المساعدة.",
      stepsEn: [
        "Call emergency services for confusion, collapse, seizure, or very hot skin after heat exposure.",
        "Move the person to shade or a cool place and remove unnecessary clothing.",
        "Cool them rapidly with cool water, fanning, or wrapped cold packs while help is on the way.",
        "Do not give anything by mouth if they are drowsy, confused, or unable to swallow safely."
      ],
      stepsAr: [
        "اتصل بالإسعاف عند الارتباك أو الإغماء أو التشنج أو سخونة الجلد الشديدة بعد التعرض للحرارة.",
        "انقل المصاب إلى الظل أو مكان بارد وأزل الملابس غير الضرورية.",
        "برّده سريعاً بالماء البارد أو التهوية أو كمادات باردة ملفوفة أثناء انتظار المساعدة.",
        "لا تعطِ شيئاً عن طريق الفم إذا كان ناعساً أو مرتبكاً أو لا يستطيع البلع بأمان."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/" }]
    },
    {
      id: 135,
      titleEn: "Heatstroke in a Child",
      titleAr: "ضربة الحرارة لدى طفل",
      descriptionEn: "Recognize heatstroke in a child and cool them while emergency care is arranged.",
      descriptionAr: "تعرف على ضربة الحرارة لدى الطفل وبرّده أثناء ترتيب الرعاية الطارئة.",
      stepsEn: [
        "Call emergency services if the child is confused, unusually drowsy, having a seizure, or collapses after heat exposure.",
        "Move the child to a cool place, remove excess clothing, and cool the skin with water and fanning.",
        "Stay with the child and monitor their breathing and responsiveness.",
        "Do not force drinks if the child is confused, vomiting, or not fully alert."
      ],
      stepsAr: [
        "اتصل بالإسعاف إذا ارتبك الطفل أو نعس بشكل غير معتاد أو أصيب بتشنج أو أُغمي عليه بعد التعرض للحرارة.",
        "انقل الطفل إلى مكان بارد وأزل الملابس الزائدة وبرّد جلده بالماء والتهوية.",
        "ابقَ معه وراقب تنفسه ومدى استجابته.",
        "لا تجبره على شرب السوائل إذا كان مرتبكاً أو يتقيأ أو لم يستعد وعيه الكامل."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/" }]
    },
    {
      id: 136,
      titleEn: "Hypothermia: Immediate Care",
      titleAr: "انخفاض حرارة الجسم: الرعاية الفورية",
      descriptionEn: "Keep a person with suspected hypothermia sheltered and arrange emergency care.",
      descriptionAr: "أبقِ المصاب المشتبه بانخفاض حرارته في مكان محمي ورتب رعاية طارئة.",
      stepsEn: [
        "Call emergency services if hypothermia is suspected.",
        "Move the person indoors or to shelter and remove wet clothing if this can be done gently.",
        "Wrap them in dry blankets or towels and cover their head.",
        "Do not rub their limbs or use a hot bath, direct heat, or alcohol."
      ],
      stepsAr: [
        "اتصل بالإسعاف عند الاشتباه بانخفاض حرارة الجسم.",
        "انقل المصاب إلى الداخل أو مكان محمي وانزع الملابس المبللة برفق إن أمكن.",
        "لفه ببطانيات أو مناشف جافة وغطِّ رأسه.",
        "لا تفرك أطرافه ولا تستخدم حماماً ساخناً أو حرارة مباشرة أو كحولاً."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/hypothermia/" }]
    },
    {
      id: 137,
      titleEn: "Hypothermia in a Baby",
      titleAr: "انخفاض حرارة الجسم لدى رضيع",
      descriptionEn: "A cold, unusually sleepy, floppy, or poorly feeding baby needs urgent medical assessment.",
      descriptionAr: "يحتاج الرضيع البارد أو شديد النعاس أو المرتخي أو ضعيف الرضاعة إلى تقييم طبي عاجل.",
      stepsEn: [
        "Call emergency services or seek urgent medical help if a baby may have hypothermia.",
        "Move the baby to a warm sheltered place and remove wet clothing.",
        "Wrap the baby in dry warm layers and cover the head, keeping the face clear.",
        "Do not use a hot bath, direct heat, or vigorous rubbing; monitor breathing and responsiveness."
      ],
      stepsAr: [
        "اتصل بالإسعاف أو اطلب مساعدة طبية عاجلة إذا احتمل انخفاض حرارة الرضيع.",
        "انقل الرضيع إلى مكان دافئ ومحمي وانزع الملابس المبللة.",
        "لفه بطبقات جافة ودافئة وغطِّ رأسه مع إبقاء الوجه مكشوفاً.",
        "لا تستخدم حماماً ساخناً أو حرارة مباشرة أو فركاً قوياً؛ راقب التنفس والاستجابة."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/hypothermia/" }]
    },
    {
      id: 138,
      titleEn: "Hypothermia in an Unresponsive Person",
      titleAr: "انخفاض الحرارة لدى شخص غير مستجيب",
      descriptionEn: "Protect an unresponsive person who may be hypothermic while checking breathing.",
      descriptionAr: "احمِ فاقد الاستجابة المشتبه بانخفاض حرارته مع التحقق من التنفس.",
      stepsEn: [
        "Call emergency services and avoid unnecessary movement.",
        "Check breathing; if they are not breathing normally, start CPR if you can and follow the operator's instructions.",
        "If breathing normally, keep them lying down, dry, sheltered, and covered with blankets.",
        "Do not give food or drink to an unresponsive person and do not rub or apply direct heat."
      ],
      stepsAr: [
        "اتصل بالإسعاف وتجنب تحريك المصاب دون ضرورة.",
        "تحقق من التنفس؛ إذا لم يكن طبيعياً فابدأ الإنعاش إن استطعت واتبع تعليمات موظف الطوارئ.",
        "إذا كان يتنفس طبيعياً، أبقه مستلقياً وجافاً وفي مكان محمي وغطه ببطانيات.",
        "لا تعطِ طعاماً أو شراباً لفاقد الوعي ولا تفركه أو تعرضه لحرارة مباشرة."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/hypothermia/" }]
    },
    {
      id: 139,
      titleEn: "Suspected Poisoning by Swallowing",
      titleAr: "الاشتباه بالتسمم بعد ابتلاع مادة",
      descriptionEn: "Get urgent professional advice after someone may have swallowed a harmful substance.",
      descriptionAr: "اطلب المشورة المهنية العاجلة إذا ابتلع شخص مادة قد تكون ضارة.",
      stepsEn: [
        "Call emergency services for breathing difficulty, a seizure, loss of consciousness, or a potentially dangerous ingestion.",
        "Do not make the person vomit and do not give food or drink unless a clinician instructs you.",
        "Keep the product packaging or a sample to show the medical team if safe.",
        "Stay with the person and monitor their breathing and responsiveness."
      ],
      stepsAr: [
        "اتصل بالإسعاف عند صعوبة التنفس أو التشنج أو فقدان الوعي أو ابتلاع مادة يُحتمل خطورتها.",
        "لا تحاول جعل المصاب يتقيأ ولا تعطِه طعاماً أو شراباً إلا بتوجيه طبي.",
        "احتفظ بعبوة المنتج أو عينة لعرضها على الفريق الطبي إذا كان ذلك آمناً.",
        "ابقَ مع المصاب وراقب تنفسه ومدى استجابته."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/poisoning/" }]
    },
    {
      id: 140,
      titleEn: "Possible Poisoning in a Child",
      titleAr: "احتمال التسمم لدى طفل",
      descriptionEn: "Act promptly if a child may have swallowed, touched, or inhaled a harmful substance.",
      descriptionAr: "تحرك سريعاً إذا احتمل أن طفلاً ابتلع أو لمس أو استنشق مادة ضارة.",
      stepsEn: [
        "Call emergency services or seek urgent medical advice; do not wait for symptoms to appear.",
        "Do not make the child vomit or give food, drink, or home remedies.",
        "Keep the container or packaging and note what may have been taken and when.",
        "If the child becomes unresponsive, check breathing and follow emergency instructions."
      ],
      stepsAr: [
        "اتصل بالإسعاف أو اطلب مشورة طبية عاجلة ولا تنتظر ظهور الأعراض.",
        "لا تجعل الطفل يتقيأ ولا تقدم له طعاماً أو شراباً أو علاجات منزلية.",
        "احتفظ بالعبوة وسجل المادة المحتملة ووقت التعرض.",
        "إذا فقد الطفل استجابته، تحقق من التنفس واتبع تعليمات الطوارئ."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/poisoning/" }]
    },
    {
      id: 141,
      titleEn: "Chemical on the Skin",
      titleAr: "مادة كيميائية على الجلد",
      descriptionEn: "Reduce further exposure and get urgent advice after skin contact with a harmful chemical.",
      descriptionAr: "قلل التعرض واطلب المشورة العاجلة بعد ملامسة الجلد لمادة كيميائية ضارة.",
      stepsEn: [
        "Protect yourself from the substance and move away from the source if safe.",
        "Remove contaminated clothing carefully without spreading the chemical to unaffected skin.",
        "For a liquid chemical, rinse with plenty of cool running water; gently brush off dry powder first, then seek urgent medical advice.",
        "Call emergency services for severe burns, breathing problems, or a large exposure; keep the product label for responders."
      ],
      stepsAr: [
        "احمِ نفسك من المادة وابتعد عن مصدرها إذا كان ذلك آمناً.",
        "انزع الملابس الملوثة بحذر دون نشر المادة على جلد غير مصاب.",
        "للمادة السائلة، اشطف الجلد بكمية كبيرة من الماء الجاري البارد؛ أزل المسحوق الجاف برفق أولاً ثم اطلب مشورة طبية عاجلة.",
        "اتصل بالإسعاف عند الحروق الشديدة أو صعوبة التنفس أو التعرض الواسع؛ واحتفظ بملصق المنتج للمسعفين."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/poisoning/" }]
    },
    {
      id: 142,
      titleEn: "Inhaled Harmful Fumes",
      titleAr: "استنشاق أبخرة ضارة",
      descriptionEn: "Move away from fumes and prioritize rescuer safety after suspected inhalation exposure.",
      descriptionAr: "ابتعد عن الأبخرة وأعطِ أولوية لسلامة المسعف بعد الاشتباه باستنشاقها.",
      stepsEn: [
        "Do not enter a contaminated area; move to fresh air only if you can do so safely.",
        "Call emergency services for breathing difficulty, confusion, fainting, or chest pain.",
        "Keep the person at rest in fresh air and monitor breathing while waiting.",
        "Do not re-enter the area or restart equipment until authorities confirm it is safe."
      ],
      stepsAr: [
        "لا تدخل منطقة ملوثة؛ انتقل إلى الهواء الطلق فقط إذا أمكن ذلك بأمان.",
        "اتصل بالإسعاف عند صعوبة التنفس أو الارتباك أو الإغماء أو ألم الصدر.",
        "أبقِ المصاب مرتاحاً في الهواء الطلق وراقب تنفسه أثناء الانتظار.",
        "لا تعد إلى المكان ولا تشغل الأجهزة حتى تؤكد الجهات المختصة سلامته."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/carbon-monoxide-poisoning/" }]
    },
    {
      id: 143,
      titleEn: "Stroke: While Waiting for Emergency Help",
      titleAr: "السكتة الدماغية: أثناء انتظار الإسعاف",
      descriptionEn: "Arrange immediate emergency care and keep a person with possible stroke safe.",
      descriptionAr: "رتب رعاية طارئة فورية وحافظ على سلامة المصاب باحتمال السكتة الدماغية.",
      stepsEn: [
        "Call emergency services immediately for any sudden face, arm, speech, vision, balance, or severe headache symptoms.",
        "Note the time symptoms began or when the person was last known to be well.",
        "Keep them resting and warm; do not give food, drink, or medication unless emergency professionals direct you.",
        "Monitor breathing and responsiveness and be ready to start CPR if they stop breathing normally."
      ],
      stepsAr: [
        "اتصل بالإسعاف فوراً عند ظهور مفاجئ لضعف الوجه أو الذراع أو الكلام أو الرؤية أو التوازن أو صداع شديد.",
        "سجل وقت بدء الأعراض أو آخر وقت كان فيه المصاب بحالة طبيعية.",
        "أبقِه مرتاحاً ودافئاً ولا تعطِه طعاماً أو شراباً أو دواءً إلا بتوجيه من المختصين.",
        "راقب التنفس والاستجابة واستعد لبدء الإنعاش إذا توقف التنفس الطبيعي."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/stroke/symptoms/" }]
    },
    {
      id: 144,
      titleEn: "Stroke Symptoms That Have Resolved",
      titleAr: "زوال أعراض السكتة الدماغية",
      descriptionEn: "Treat stroke-like symptoms that stop as an emergency because they may be a transient ischemic attack.",
      descriptionAr: "تعامل مع أعراض شبيهة بالسكتة زالت كحالة طارئة لاحتمال النوبة الإقفارية العابرة.",
      stepsEn: [
        "Call emergency services immediately even if the person's face, arm, or speech has returned to normal.",
        "Record when symptoms started and how long they lasted.",
        "Keep the person with you and monitor for any return or worsening of symptoms.",
        "Do not let them drive themselves or delay assessment because they feel better."
      ],
      stepsAr: [
        "اتصل بالإسعاف فوراً حتى إذا عاد الوجه أو الذراع أو الكلام إلى طبيعته.",
        "سجل وقت بدء الأعراض ومدة استمرارها.",
        "ابقَ مع المصاب وراقب عودة الأعراض أو تفاقمها.",
        "لا تسمح له بالقيادة بنفسه ولا تؤخر التقييم لمجرد شعوره بالتحسن."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/stroke/symptoms/" }]
    },
    {
      id: 145,
      titleEn: "Heart Attack: While Waiting for Help",
      titleAr: "النوبة القلبية: أثناء انتظار المساعدة",
      descriptionEn: "Keep a person with possible heart attack at rest while emergency care is arranged.",
      descriptionAr: "أبقِ المصاب باحتمال النوبة القلبية مرتاحاً أثناء ترتيب الرعاية الطارئة.",
      stepsEn: [
        "Call emergency services for squeezing chest pain, pain spreading to the arm or jaw, or severe breathlessness.",
        "Help the person sit or rest in a comfortable supported position and avoid exertion.",
        "Help them take only their own prescribed angina medicine if they have it.",
        "Watch their breathing and responsiveness; start CPR if they become unresponsive and are not breathing normally."
      ],
      stepsAr: [
        "اتصل بالإسعاف عند ألم ضاغط بالصدر أو امتداد الألم للذراع أو الفك أو ضيق نفس شديد.",
        "ساعد المصاب على الجلوس أو الراحة في وضع مريح ومدعوم وتجنب المجهود.",
        "ساعده على استخدام دواء الذبحة الموصوف له فقط إذا كان بحوزته.",
        "راقب تنفسه واستجابته وابدأ الإنعاش إذا فقد الاستجابة ولم يتنفس طبيعياً."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/heart-attack/" }]
    },
    {
      id: 146,
      titleEn: "Possible Heart Attack in a Person with Angina",
      titleAr: "اشتباه نوبة قلبية لدى مريض الذبحة",
      descriptionEn: "Do not assume new or persistent chest pain is only an angina episode.",
      descriptionAr: "لا تفترض أن ألم الصدر الجديد أو المستمر مجرد نوبة ذبحة.",
      stepsEn: [
        "Call emergency services for new, severe, or persistent chest pain or pain with breathlessness, sweating, or nausea.",
        "Help the person rest and use their own prescribed GTN only as directed in their plan.",
        "Do not let them drive themselves to hospital.",
        "Monitor them continuously and follow the emergency operator's instructions."
      ],
      stepsAr: [
        "اتصل بالإسعاف عند ألم صدر جديد أو شديد أو مستمر أو مصحوب بضيق نفس أو تعرق أو غثيان.",
        "ساعد المصاب على الراحة ولا تساعده على استخدام بخاخ النيتروجليسرين إلا إذا كان موصوفاً له ووفق خطته.",
        "لا تسمح له بالقيادة بنفسه إلى المستشفى.",
        "راقبه باستمرار واتبع تعليمات موظف الطوارئ."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/heart-attack/" }]
    },
    {
      id: 147,
      titleEn: "Anaphylaxis During Pregnancy",
      titleAr: "الحساسية المفرطة أثناء الحمل",
      descriptionEn: "Treat suspected anaphylaxis in pregnancy as an emergency and use the person's prescribed injector.",
      descriptionAr: "تعامل مع الحساسية المفرطة المحتملة أثناء الحمل كحالة طارئة واستخدم الحاقن الموصوف للمصابة.",
      stepsEn: [
        "Call emergency services immediately and state that the person is pregnant and may be having anaphylaxis.",
        "Help them use their prescribed adrenaline auto-injector according to its instructions.",
        "Help them lie on their left side; if breathing is difficult, support a slow, comfortable sitting position.",
        "Stay with them, monitor breathing, and do not let them stand or walk."
      ],
      stepsAr: [
        "اتصل بالإسعاف فوراً واذكر أن المصابة حامل وقد تكون لديها حساسية مفرطة.",
        "ساعدها على استخدام حاقن الأدرينالين الموصوف وفق تعليماته.",
        "ساعدها على الاستلقاء على جانبها الأيسر؛ وإذا صعب التنفس فادعم جلوسها ببطء وبوضع مريح.",
        "ابقَ معها وراقب تنفسها ولا تسمح لها بالوقوف أو المشي."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/anaphylaxis/" }]
    },
    {
      id: 148,
      titleEn: "Anaphylaxis After an Insect Sting",
      titleAr: "الحساسية المفرطة بعد لسعة حشرة",
      descriptionEn: "Respond to a severe allergic reaction after a sting without delaying emergency care.",
      descriptionAr: "استجب للتفاعل التحسسي الشديد بعد اللسعة دون تأخير الرعاية الطارئة.",
      stepsEn: [
        "Call emergency services immediately for throat or tongue swelling, breathing difficulty, collapse, or rapidly worsening symptoms.",
        "Help the person use their prescribed adrenaline auto-injector as directed.",
        "If a sting remains in the skin, remove it if this can be done quickly and safely.",
        "Keep the person lying down, monitor breathing, and use a second prescribed injector after 5 minutes if symptoms have not improved."
      ],
      stepsAr: [
        "اتصل بالإسعاف فوراً عند تورم الحلق أو اللسان أو صعوبة التنفس أو الإغماء أو التفاقم السريع.",
        "ساعد المصاب على استخدام حاقن الأدرينالين الموصوف وفق التعليمات.",
        "إذا بقيت الإبرة في الجلد، أزلها إن أمكن بسرعة وأمان.",
        "أبقِ المصاب مستلقياً وراقب تنفسه واستخدم الحاقن الموصوف الثاني بعد 5 دقائق إذا لم تتحسن الأعراض."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/anaphylaxis/" }]
    },
    {
      id: 149,
      titleEn: "Low Blood Sugar Not Improving",
      titleAr: "انخفاض السكر الذي لا يتحسن",
      descriptionEn: "Escalate care if a conscious person remains hypoglycaemic after initial treatment.",
      descriptionAr: "صعّد الرعاية إذا استمر انخفاض السكر لدى شخص واعٍ بعد العلاج الأولي.",
      stepsEn: [
        "If the person is fully alert and can swallow, repeat their usual fast-acting glucose treatment according to their diabetes plan.",
        "Recheck glucose after about 10 to 15 minutes if a meter is available.",
        "Call emergency services if they worsen, become confused, have a seizure, or cannot swallow safely.",
        "Never give anything by mouth to a person who is drowsy or unconscious."
      ],
      stepsAr: [
        "إذا كان المصاب واعياً تماماً وقادراً على البلع، كرر علاج الجلوكوز سريع المفعول المعتاد وفق خطة السكري.",
        "أعد قياس السكر بعد نحو 10 إلى 15 دقيقة إذا توفر جهاز.",
        "اتصل بالإسعاف إذا ساءت حالته أو ارتبك أو أصيب بتشنج أو لم يعد قادراً على البلع بأمان.",
        "لا تعطِ أي شيء عن طريق الفم لشخص ناعس أو فاقد للوعي."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/" }]
    },
    {
      id: 150,
      titleEn: "Diabetes with Possible High Ketones",
      titleAr: "السكري مع احتمال ارتفاع الكيتونات",
      descriptionEn: "Escalate urgently when diabetes symptoms and high ketones may indicate ketoacidosis.",
      descriptionAr: "اطلب المساعدة العاجلة عندما تشير أعراض السكري وارتفاع الكيتونات إلى احتمال الحماض الكيتوني.",
      stepsEn: [
        "Follow the person's diabetes sick-day plan and check ketones only if they have the equipment and know how.",
        "Seek emergency care for high ketones, vomiting, deep breathing, fruity-smelling breath, unusual sleepiness, or confusion.",
        "Call emergency services if the person is deteriorating or cannot travel safely.",
        "Do not delay professional care or change insulin doses except as directed by their established plan or clinician."
      ],
      stepsAr: [
        "اتبع خطة السكري لأيام المرض وافحص الكيتونات فقط إذا توفر الجهاز وكان المصاب يعرف استعماله.",
        "اطلب رعاية طارئة عند ارتفاع الكيتونات أو القيء أو التنفس العميق أو رائحة النفس الشبيهة بالفواكه أو النعاس غير المعتاد أو الارتباك.",
        "اتصل بالإسعاف إذا تدهورت حالة المصاب أو تعذر نقله بأمان.",
        "لا تؤخر الرعاية المهنية ولا تغير جرعة الإنسولين إلا وفق خطة معتمدة لديه أو توجيه الطبيب."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/diabetic-ketoacidosis/" }]
    },
    {
      id: 151,
      titleEn: "CPR on a Woman or Person with Breasts",
      titleAr: "الإنعاش القلبي الرئوي لامرأة أو لشخص لديه ثديان",
      descriptionEn: "Do not delay CPR or defibrillation because of clothing or breast tissue.",
      descriptionAr: "لا تؤخر الإنعاش القلبي الرئوي أو استخدام مزيل الرجفان بسبب الملابس أو أنسجة الثدي.",
      stepsEn: [
        "Call emergency services if someone is unresponsive and not breathing normally.",
        "Start CPR if trained, or follow the emergency call handler's instructions.",
        "Ask someone to bring an AED; expose only the chest area needed to place its pads.",
        "Follow the AED prompts and make sure nobody touches the person during analysis or a shock."
      ],
      stepsAr: [
        "اتصل بالطوارئ إذا كان الشخص غير مستجيب ولا يتنفس بصورة طبيعية.",
        "ابدأ الإنعاش القلبي الرئوي إذا كنت مدرباً، أو اتبع تعليمات موظف الطوارئ.",
        "اطلب من شخص إحضار مزيل الرجفان؛ واكشف فقط مساحة الصدر اللازمة لوضع اللاصقات.",
        "اتبع تعليمات الجهاز وتأكد من عدم لمس أحد للمصاب أثناء التحليل أو إعطاء الصدمة."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/cpr-on-women-and-other-people-with-breasts/" }]
    },
    {
      id: 152,
      titleEn: "Head Injury in a Baby",
      titleAr: "إصابة الرأس لدى الرضيع",
      descriptionEn: "Recognize concerning signs after a baby's head injury and seek appropriate medical help.",
      descriptionAr: "تعرّف على العلامات المقلقة بعد إصابة رأس الرضيع واطلب المساعدة الطبية المناسبة.",
      stepsEn: [
        "Call emergency services if the baby is unresponsive, has a seizure, or is seriously injured.",
        "Seek urgent medical advice for repeated vomiting, unusual sleepiness, or worsening symptoms.",
        "Keep the baby as still and comfortable as possible, especially if a neck injury is possible.",
        "Stay with the baby and watch for changes while help is arranged."
      ],
      stepsAr: [
        "اتصل بالطوارئ إذا كان الرضيع غير مستجيب أو أصيب بتشنج أو كانت إصابته خطيرة.",
        "اطلب المشورة الطبية العاجلة عند تكرر القيء أو النعاس غير المعتاد أو تفاقم الأعراض.",
        "أبقِ الرضيع ساكناً ومرتاحاً قدر الإمكان، خصوصاً إذا كان احتمال إصابة الرقبة قائماً.",
        "ابقَ مع الرضيع وراقب أي تغيرات أثناء ترتيب المساعدة."
      ],
      sources: [{ nameAr: "إسعاف سانت جون", nameEn: "St John Ambulance", url: "https://www.sja.org.uk/first-aid-advice/baby-head-injury/" }]
    },
    {
      id: 153,
      titleEn: "Possible Ectopic Pregnancy",
      titleAr: "احتمال الحمل خارج الرحم",
      descriptionEn: "Treat severe pain, bleeding, or collapse in possible early pregnancy as urgent.",
      descriptionAr: "تعامل مع الألم الشديد أو النزيف أو الانهيار في احتمال الحمل المبكر كحالة عاجلة.",
      stepsEn: [
        "Call emergency services for severe abdominal pain, fainting, collapse, or heavy bleeding.",
        "Seek urgent medical advice if pregnancy is possible and there is pain or vaginal bleeding, even without a positive test.",
        "Keep the person resting and stay with them while help is arranged.",
        "Follow the emergency team's instructions while waiting for care."
      ],
      stepsAr: [
        "اتصل بالطوارئ عند ألم البطن الشديد أو الإغماء أو الانهيار أو النزيف الغزير.",
        "اطلب المشورة الطبية العاجلة إذا كان الحمل محتملاً مع وجود ألم أو نزيف مهبلي، حتى دون اختبار إيجابي.",
        "أرح المصابة وابقَ معها أثناء ترتيب المساعدة.",
        "لا تؤخر التقييم حتى لو تحسنت الأعراض مؤقتاً."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/ectopic-pregnancy/" }]
    },
    {
      id: 154,
      titleEn: "Possible Miscarriage",
      titleAr: "احتمال الإجهاض",
      descriptionEn: "Arrange prompt assessment for bleeding or pain during pregnancy and recognize emergency warning signs.",
      descriptionAr: "رتب تقييماً سريعاً عند حدوث نزيف أو ألم أثناء الحمل وتعرّف على علامات الخطر.",
      stepsEn: [
        "Contact the person's maternity service or urgent medical service for bleeding or pain in pregnancy.",
        "Call emergency services for heavy bleeding, severe pain, fainting, or collapse.",
        "Help the person rest and stay with them while they wait for care.",
        "Do not assume the cause; prompt professional assessment is important."
      ],
      stepsAr: [
        "اتصل بخدمة رعاية الحمل أو الخدمة الطبية العاجلة عند النزيف أو الألم أثناء الحمل.",
        "اتصل بالطوارئ عند النزيف الغزير أو الألم الشديد أو الإغماء أو الانهيار.",
        "ساعد المصابة على الراحة وابقَ معها أثناء انتظار الرعاية.",
        "لا تفترض سبب الأعراض؛ فالتقييم المهني السريع مهم."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/miscarriage/" }]
    },
    {
      id: 155,
      titleEn: "Possible Molar Pregnancy",
      titleAr: "احتمال الحمل العنقودي",
      descriptionEn: "Seek maternity assessment for unusual symptoms or bleeding in pregnancy.",
      descriptionAr: "اطلب تقييماً من رعاية الأمومة عند حدوث أعراض غير معتادة أو نزيف أثناء الحمل.",
      stepsEn: [
        "Contact a maternity professional promptly about bleeding or unusual symptoms during pregnancy.",
        "Call emergency services for heavy bleeding, severe pain, fainting, or collapse.",
        "Stay with the person and help them reach professional care.",
        "Do not try to diagnose or treat the cause at home."
      ],
      stepsAr: [
        "تواصل سريعاً مع مختص رعاية الأمومة بشأن النزيف أو الأعراض غير المعتادة أثناء الحمل.",
        "اتصل بالطوارئ عند النزيف الغزير أو الألم الشديد أو الإغماء أو الانهيار.",
        "ابقَ مع المصابة وساعدها في الوصول إلى الرعاية المهنية.",
        "لا تحاول تشخيص السبب أو علاجه في المنزل."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/molar-pregnancy/" }]
    },
    {
      id: 156,
      titleEn: "Vaginal Bleeding During Pregnancy",
      titleAr: "النزيف المهبلي أثناء الحمل",
      descriptionEn: "Get medical advice promptly for bleeding during pregnancy, even if it is light.",
      descriptionAr: "اطلب المشورة الطبية سريعاً عند حدوث نزيف أثناء الحمل، حتى لو كان خفيفاً.",
      stepsEn: [
        "Contact the maternity unit or clinician promptly for any bleeding during pregnancy.",
        "Call emergency services for heavy bleeding, severe pain, fainting, or feeling very unwell.",
        "Help the person sit or lie comfortably and stay with them.",
        "Follow the maternity team's instructions and do not delay care."
      ],
      stepsAr: [
        "اتصل بوحدة الأمومة أو الطبيب سريعاً عند أي نزيف أثناء الحمل.",
        "اتصل بالطوارئ عند النزيف الغزير أو الألم الشديد أو الإغماء أو الشعور بمرض شديد.",
        "ساعد المصابة على الجلوس أو الاستلقاء براحة وابقَ معها.",
        "اتبع تعليمات فريق الأمومة ولا تؤخر الرعاية."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/pregnancy/common-symptoms/vaginal-bleeding/" }]
    },
    {
      id: 157,
      titleEn: "Possible Premature Labour",
      titleAr: "احتمال بدء المخاض المبكر",
      descriptionEn: "Seek prompt maternity advice for signs of labour before 37 weeks of pregnancy.",
      descriptionAr: "اطلب مشورة الأمومة سريعاً عند ظهور علامات المخاض قبل الأسبوع السابع والثلاثين من الحمل.",
      stepsEn: [
        "Contact the maternity unit immediately if labour may be starting before 37 weeks.",
        "Call emergency services for heavy bleeding, severe pain, or collapse.",
        "Help the pregnant person rest in a comfortable place while advice is arranged.",
        "Follow the maternity team's directions; do not wait for symptoms to worsen."
      ],
      stepsAr: [
        "اتصل بوحدة الأمومة فوراً إذا بدا أن المخاض سيبدأ قبل الأسبوع السابع والثلاثين.",
        "اتصل بالطوارئ عند النزيف الغزير أو الألم الشديد أو الانهيار.",
        "ساعد الحامل على الراحة في مكان مريح أثناء ترتيب المشورة.",
        "اتبع توجيهات فريق الأمومة ولا تنتظر حتى تتفاقم الأعراض."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/pregnancy/labour-and-birth/premature-labour-and-birth/" }]
    },
    {
      id: 158,
      titleEn: "Possible Placental Complication",
      titleAr: "احتمال حدوث مضاعفات في المشيمة",
      descriptionEn: "Treat bleeding or significant pain in later pregnancy as needing prompt maternity advice.",
      descriptionAr: "تعامل مع النزيف أو الألم الشديد في أواخر الحمل بوصفه حالة تستلزم مشورة أمومة سريعة.",
      stepsEn: [
        "Contact the maternity unit promptly for vaginal bleeding or significant abdominal pain.",
        "Call emergency services for heavy bleeding, fainting, or collapse.",
        "Help the person rest and stay with them while help is arranged.",
        "Do not delay assessment or try to determine the placental cause yourself."
      ],
      stepsAr: [
        "اتصل بوحدة الأمومة سريعاً عند النزيف المهبلي أو ألم البطن الشديد.",
        "اتصل بالطوارئ عند النزيف الغزير أو الإغماء أو الانهيار.",
        "ساعد المصابة على الراحة وابقَ معها أثناء ترتيب المساعدة.",
        "لا تؤخر التقييم ولا تحاول تحديد سبب متعلق بالمشيمة بنفسك."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/pregnancy/labour-and-birth/placenta-complications/" }]
    },
    {
      id: 159,
      titleEn: "Possible Pre-eclampsia",
      titleAr: "احتمال تسمم الحمل",
      descriptionEn: "Recognize warning symptoms during pregnancy and seek immediate maternity assessment.",
      descriptionAr: "تعرّف على الأعراض التحذيرية أثناء الحمل واطلب تقييماً فورياً من رعاية الأمومة.",
      stepsEn: [
        "Contact the maternity team immediately for severe headache, vision problems, or severe pain below the ribs.",
        "Call emergency services for a seizure, collapse, or severe difficulty breathing.",
        "Keep the person accompanied and follow the maternity team's instructions.",
        "Do not wait for symptoms to settle before seeking advice."
      ],
      stepsAr: [
        "اتصل بفريق الأمومة فوراً عند الصداع الشديد أو مشكلات الرؤية أو الألم الشديد أسفل الأضلاع.",
        "اتصل بالطوارئ عند التشنج أو الانهيار أو صعوبة التنفس الشديدة.",
        "لا تترك المصابة وحدها واتبع تعليمات فريق الأمومة.",
        "لا تنتظر زوال الأعراض قبل طلب المشورة."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/pre-eclampsia/" }]
    },
    {
      id: 160,
      titleEn: "Severe Vomiting During Pregnancy",
      titleAr: "القيء الشديد أثناء الحمل",
      descriptionEn: "Seek medical advice when pregnancy-related vomiting prevents normal eating or drinking.",
      descriptionAr: "اطلب المشورة الطبية عندما يمنع القيء المرتبط بالحمل الأكل أو الشرب بصورة طبيعية.",
      stepsEn: [
        "Contact the maternity team or clinician promptly if vomiting is severe or persistent.",
        "Seek urgent care if the person cannot keep fluids down or shows signs of dehydration.",
        "Call emergency services if they collapse, become confused, or are seriously unwell.",
        "Do not start medicines unless a healthcare professional advises it."
      ],
      stepsAr: [
        "تواصل سريعاً مع فريق الأمومة أو الطبيب إذا كان القيء شديداً أو مستمراً.",
        "اطلب رعاية عاجلة إذا تعذر الاحتفاظ بالسوائل أو ظهرت علامات الجفاف.",
        "اتصل بالطوارئ إذا انهارت المصابة أو ارتبكت أو بدت مريضة بشدة.",
        "لا تبدأ أدوية إلا بتوجيه من مختص صحي."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/pregnancy/complications/severe-vomiting/" }]
    },
    {
      id: 161,
      titleEn: "Sickle Cell Pain Crisis",
      titleAr: "نوبة ألم فقر الدم المنجلي",
      descriptionEn: "Follow the person's established sickle cell care plan and recognize symptoms needing urgent help.",
      descriptionAr: "اتبع خطة الرعاية المعتمدة للمصاب بفقر الدم المنجلي وتعرّف على الأعراض التي تتطلب مساعدة عاجلة.",
      stepsEn: [
        "Help the person follow their own sickle cell care plan and contact their care team for a crisis.",
        "Seek urgent medical care for severe or unusual pain.",
        "Call emergency services for chest pain, breathing difficulty, fever, weakness, or confusion.",
        "Stay with the person and do not change prescribed treatment."
      ],
      stepsAr: [
        "ساعد المصاب على اتباع خطة رعايته لفقر الدم المنجلي واتصل بفريقه الصحي عند حدوث نوبة.",
        "اطلب رعاية طبية عاجلة للألم الشديد أو غير المعتاد.",
        "اتصل بالطوارئ عند ألم الصدر أو صعوبة التنفس أو الحمى أو الضعف أو الارتباك.",
        "ابقَ مع المصاب ولا تغير علاجه الموصوف."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/sickle-cell-disease/" }]
    },
    {
      id: 162,
      titleEn: "Bronchiolitis in a Baby",
      titleAr: "التهاب القصيبات لدى الرضيع",
      descriptionEn: "Recognize breathing or feeding problems in a baby and seek help at the appropriate urgency.",
      descriptionAr: "تعرّف على مشكلات التنفس أو التغذية لدى الرضيع واطلب المساعدة بالسرعة المناسبة.",
      stepsEn: [
        "Call emergency services if the baby has pauses in breathing, blue or grey lips, or severe breathing difficulty.",
        "Seek urgent medical advice if feeding is much reduced, breathing is worsening, or the baby is unusually sleepy.",
        "Keep the baby calm and stay nearby while arranging care.",
        "Arrange reassessment promptly if breathing or feeding worsens."
      ],
      stepsAr: [
        "اتصل بالطوارئ إذا توقف تنفس الرضيع مؤقتاً أو ازرقت شفاهه أو واجه صعوبة شديدة في التنفس.",
        "اطلب مشورة طبية عاجلة إذا قلّت الرضاعة كثيراً أو ساء التنفس أو أصبح الرضيع ناعساً على نحو غير معتاد.",
        "حافظ على هدوء الرضيع وابقَ بجانبه أثناء ترتيب الرعاية.",
        "اتبع المشورة الطبية ولا تعطِ أدوية غير موصوفة."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/bronchiolitis/" }]
    },
    {
      id: 163,
      titleEn: "Perforated Eardrum",
      titleAr: "ثقب طبلة الأذن",
      descriptionEn: "Protect an injured eardrum and seek medical advice for pain, discharge, or hearing changes.",
      descriptionAr: "احمِ طبلة الأذن المصابة واطلب المشورة الطبية عند الألم أو الإفرازات أو تغير السمع.",
      stepsEn: [
        "Keep the ear dry and do not put objects, drops, or cotton buds into it.",
        "Seek medical advice for suspected perforation, discharge, or hearing loss.",
        "Get urgent help for severe symptoms, significant head injury, or sudden deterioration.",
        "Follow a clinician's advice about swimming and ear care."
      ],
      stepsAr: [
        "حافظ على جفاف الأذن ولا تدخل فيها أجساماً أو قطرات أو أعواداً قطنية.",
        "اطلب المشورة الطبية عند الاشتباه بوجود ثقب أو إفرازات أو فقدان السمع.",
        "اطلب مساعدة عاجلة عند الأعراض الشديدة أو إصابة مهمة بالرأس أو التدهور المفاجئ.",
        "اتبع نصيحة الطبيب بشأن السباحة والعناية بالأذن."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/perforated-eardrum/" }]
    },
    {
      id: 164,
      titleEn: "New or Sudden Hearing Loss",
      titleAr: "فقدان السمع الجديد أو المفاجئ",
      descriptionEn: "Arrange prompt assessment for a sudden change in hearing, especially after an injury.",
      descriptionAr: "رتب تقييماً سريعاً عند حدوث تغير مفاجئ في السمع، خصوصاً بعد إصابة.",
      stepsEn: [
        "Seek urgent medical advice for sudden hearing loss or a rapid change in hearing.",
        "Call emergency services if the change occurs with a serious head injury, facial weakness, or collapse.",
        "Do not insert anything into the ear or try to clear it yourself.",
        "Stay with the person if they are unwell and help communicate with responders."
      ],
      stepsAr: [
        "اطلب مشورة طبية عاجلة عند فقدان السمع المفاجئ أو تغيره بسرعة.",
        "اتصل بالطوارئ إذا ترافق التغير مع إصابة خطيرة بالرأس أو ضعف الوجه أو الانهيار.",
        "لا تدخل شيئاً في الأذن ولا تحاول تنظيفها بنفسك.",
        "ابقَ مع المصاب إذا كان مريضاً وساعده على التواصل مع فرق الاستجابة."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/hearing-loss/" }]
    },
    {
      id: 165,
      titleEn: "Severe Eye Pain",
      titleAr: "ألم شديد في العين",
      descriptionEn: "Get urgent assessment for severe eye pain or pain accompanied by changes in vision.",
      descriptionAr: "اطلب تقييماً عاجلاً عند ألم العين الشديد أو اقترانه بتغيرات في الرؤية.",
      stepsEn: [
        "Seek urgent medical care for severe eye pain, sudden vision loss, or pain with a red eye.",
        "Call emergency services if a serious injury or sudden loss of sight occurs.",
        "Do not rub, press, or try to diagnose the eye yourself.",
        "Follow professional advice and arrange safe transport for assessment."
      ],
      stepsAr: [
        "اطلب رعاية طبية عاجلة لألم العين الشديد أو فقدان الرؤية المفاجئ أو الألم مع احمرار العين.",
        "اتصل بالطوارئ عند حدوث إصابة خطيرة أو فقدان مفاجئ للبصر.",
        "لا تفرك العين أو تضغط عليها ولا تحاول تشخيصها بنفسك.",
        "اتبع المشورة المهنية ورتب وسيلة نقل آمنة للتقييم."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/symptoms/eye-pain/" }]
    },
    {
      id: 166,
      titleEn: "New Floaters or Flashes in Vision",
      titleAr: "ظهور عوائم أو ومضات جديدة في الرؤية",
      descriptionEn: "Arrange prompt eye assessment for new or suddenly increasing floaters or flashes.",
      descriptionAr: "رتب تقييماً سريعاً للعين عند ظهور عوائم أو ومضات جديدة أو ازديادها المفاجئ.",
      stepsEn: [
        "Seek urgent eye-care advice for new floaters or flashes, particularly if they start suddenly.",
        "Call emergency services for sudden loss of vision or a dark shadow across the vision.",
        "Do not drive if vision is affected; ask someone to help arrange assessment.",
        "Follow the eye-care professional's instructions."
      ],
      stepsAr: [
        "اطلب مشورة عاجلة للعناية بالعين عند ظهور عوائم أو ومضات جديدة، خصوصاً إذا بدأت فجأة.",
        "اتصل بالطوارئ عند فقدان الرؤية فجأة أو ظهور ظل داكن يحجب جزءاً منها.",
        "لا تقد السيارة إذا تأثرت الرؤية؛ واطلب المساعدة لترتيب التقييم.",
        "اتبع تعليمات مختص العناية بالعين."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/symptoms/floaters-and-flashes-in-the-eyes/" }]
    },
    {
      id: 167,
      titleEn: "Vomiting Blood",
      titleAr: "قيء الدم",
      descriptionEn: "Treat vomiting blood as requiring urgent medical assessment.",
      descriptionAr: "تعامل مع قيء الدم بوصفه حالة تستلزم تقييماً طبياً عاجلاً.",
      stepsEn: [
        "Arrange urgent medical care for any vomiting of blood.",
        "Call emergency services if bleeding is heavy or the person is faint, confused, clammy, or very unwell.",
        "Keep the person accompanied and follow the emergency call handler's directions.",
        "Do not delay care even if the bleeding appears to stop."
      ],
      stepsAr: [
        "رتب رعاية طبية عاجلة عند حدوث أي قيء دموي.",
        "اتصل بالطوارئ إذا كان النزيف غزيراً أو شعر المصاب بالإغماء أو الارتباك أو التعرق البارد أو اعتلال شديد.",
        "لا تترك المصاب وحده واتبع تعليمات موظف الطوارئ.",
        "لا تؤخر الرعاية حتى إذا بدا أن النزيف توقف."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/symptoms/vomiting-blood/" }]
    },
    {
      id: 168,
      titleEn: "Coughing Up Blood",
      titleAr: "السعال المصحوب بالدم",
      descriptionEn: "Seek medical advice for blood in coughed-up mucus and recognize emergency warning signs.",
      descriptionAr: "اطلب المشورة الطبية عند وجود دم في البلغم وتعرّف على علامات الخطر الطارئة.",
      stepsEn: [
        "Get urgent medical advice for coughing up blood, even if it is only a small amount.",
        "Call emergency services for more than a few spots or streaks, breathing difficulty, chest pain, or a very fast heartbeat.",
        "Keep the person resting and stay with them while help is arranged.",
        "Do not drive if they are severely unwell."
      ],
      stepsAr: [
        "اطلب مشورة طبية عاجلة عند السعال المصحوب بالدم، حتى لو كانت الكمية قليلة.",
        "اتصل بالطوارئ إذا تجاوز الدم بضع نقاط أو خطوط، أو صاحبه ضيق تنفس أو ألم صدر أو تسارع شديد في القلب.",
        "أرح المصاب وابقَ معه أثناء ترتيب المساعدة.",
        "لا تدعه يقود إذا كان مريضاً بشدة."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/symptoms/coughing-up-blood/" }]
    },
    {
      id: 169,
      titleEn: "Rectal Bleeding",
      titleAr: "النزيف من المستقيم",
      descriptionEn: "Seek advice for rectal bleeding and emergency care for heavy bleeding or collapse.",
      descriptionAr: "اطلب المشورة عند النزيف من المستقيم والرعاية الطارئة عند النزيف الغزير أو الانهيار.",
      stepsEn: [
        "Arrange medical advice for bleeding from the bottom.",
        "Call emergency services for continuous or heavy bleeding, large clots, fainting, or severe weakness.",
        "Stay with the person if they feel faint and help them rest safely.",
        "Do not delay assessment if the bleeding is new or worsening."
      ],
      stepsAr: [
        "رتب مشورة طبية عند حدوث نزيف من المستقيم.",
        "اتصل بالطوارئ عند النزيف المستمر أو الغزير أو وجود جلطات كبيرة أو الإغماء أو الضعف الشديد.",
        "ابقَ مع المصاب إذا شعر بالإغماء وساعده على الراحة بأمان.",
        "لا تؤخر التقييم إذا كان النزيف جديداً أو يزداد سوءاً."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/symptoms/bleeding-from-the-bottom-rectal-bleeding/" }]
    },
    {
      id: 170,
      titleEn: "Blood in Urine",
      titleAr: "وجود دم في البول",
      descriptionEn: "Arrange prompt medical assessment for visible blood in urine, even without other symptoms.",
      descriptionAr: "رتب تقييماً طبياً سريعاً عند رؤية دم في البول، حتى دون أعراض أخرى.",
      stepsEn: [
        "Contact a healthcare professional promptly for any visible blood in urine.",
        "Seek urgent help if there is severe pain, difficulty passing urine, fever, or the person becomes very unwell.",
        "Call emergency services for collapse or severe deterioration.",
        "Do not try to treat the cause or delay assessment."
      ],
      stepsAr: [
        "تواصل سريعاً مع مختص صحي عند رؤية أي دم في البول.",
        "اطلب مساعدة عاجلة عند الألم الشديد أو صعوبة التبول أو الحمى أو اعتلال المصاب بشدة.",
        "اتصل بالطوارئ عند الانهيار أو التدهور الشديد.",
        "لا تحاول علاج السبب ولا تؤخر التقييم."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/symptoms/blood-in-urine/" }]
    },
    {
      id: 171,
      titleEn: "Possible Deep Vein Thrombosis",
      titleAr: "احتمال وجود جلطة في الأوردة العميقة",
      descriptionEn: "Seek prompt assessment for one-sided leg pain or swelling that could indicate a blood clot.",
      descriptionAr: "اطلب تقييماً سريعاً لألم أو تورم في ساق واحدة قد يشير إلى جلطة دموية.",
      stepsEn: [
        "Arrange urgent medical assessment for suspected DVT symptoms such as one-sided leg pain and swelling.",
        "Call emergency services immediately if chest pain, sudden breathlessness, or collapse occurs.",
        "Keep the person accompanied and follow professional instructions.",
        "Do not delay urgent assessment while waiting for care."
      ],
      stepsAr: [
        "رتب تقييماً طبياً عاجلاً عند أعراض جلطة الأوردة العميقة، مثل الألم والتورم في ساق واحدة.",
        "اتصل بالطوارئ فوراً عند ألم الصدر أو ضيق التنفس المفاجئ أو الانهيار.",
        "لا تترك المصاب وحده واتبع تعليمات المختصين.",
        "لا تدلك المنطقة المؤلمة أو المتورمة."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/deep-vein-thrombosis-dvt/" }]
    },
    {
      id: 172,
      titleEn: "Possible Pulmonary Embolism",
      titleAr: "احتمال الانصمام الرئوي",
      descriptionEn: "A possible clot in the lung needs urgent medical help.",
      descriptionAr: "تتطلب احتمالية وجود جلطة في الرئة مساعدة طبية عاجلة.",
      stepsEn: [
        "Call emergency services immediately for sudden breathlessness, chest pain, coughing blood, or collapse.",
        "Help the person rest in a comfortable position and stay with them.",
        "Do not let them drive themselves to hospital.",
        "Follow the emergency call handler's instructions."
      ],
      stepsAr: [
        "اتصل بالطوارئ فوراً عند ضيق التنفس المفاجئ أو ألم الصدر أو السعال المصحوب بالدم أو الانهيار.",
        "ساعد المصاب على الراحة في وضع مريح وابقَ معه.",
        "لا تدعه يقود بنفسه إلى المستشفى.",
        "اتبع تعليمات موظف الطوارئ."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/pulmonary-embolism/" }]
    },
    {
      id: 173,
      titleEn: "Possible Appendicitis",
      titleAr: "احتمال التهاب الزائدة الدودية",
      descriptionEn: "Arrange urgent assessment for worsening abdominal pain that could be appendicitis.",
      descriptionAr: "رتب تقييماً عاجلاً لألم البطن المتفاقم الذي قد يكون التهاباً في الزائدة الدودية.",
      stepsEn: [
        "Seek urgent medical advice for worsening abdominal pain, especially if it moves to the lower right side.",
        "Call emergency services if the person collapses or becomes seriously unwell.",
        "Help them rest and stay with them while arranging care.",
        "Do not delay assessment or attempt to diagnose the cause at home."
      ],
      stepsAr: [
        "اطلب مشورة طبية عاجلة لألم البطن المتفاقم، خصوصاً إذا انتقل إلى أسفل الجانب الأيمن.",
        "اتصل بالطوارئ إذا انهار المصاب أو أصبح مريضاً بشدة.",
        "ساعده على الراحة وابقَ معه أثناء ترتيب الرعاية.",
        "لا تؤخر التقييم ولا تحاول تشخيص السبب في المنزل."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/appendicitis/" }]
    },
    {
      id: 174,
      titleEn: "Sudden Testicle Pain",
      titleAr: "ألم الخصية المفاجئ",
      descriptionEn: "Treat sudden or severe testicle pain as needing immediate medical assessment.",
      descriptionAr: "تعامل مع ألم الخصية المفاجئ أو الشديد بوصفه حالة تحتاج إلى تقييم طبي فوري.",
      stepsEn: [
        "Go to emergency care immediately or call emergency services for sudden severe testicle pain.",
        "Do not wait to see if the pain settles; some causes need treatment quickly.",
        "Help the person avoid driving if the pain is severe or they feel unwell.",
        "Stay with them and follow the clinician's instructions."
      ],
      stepsAr: [
        "توجه فوراً إلى الطوارئ أو اتصل بخدمات الطوارئ عند ألم الخصية المفاجئ والشديد.",
        "لا تنتظر لترى إن كان الألم سيزول؛ فبعض الأسباب تحتاج إلى علاج سريع.",
        "ساعد المصاب على تجنب القيادة إذا كان الألم شديداً أو شعر بالاعتلال.",
        "ابقَ معه واتبع تعليمات الطبيب."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/symptoms/testicle-pain/" }]
    },
    {
      id: 175,
      titleEn: "Prolonged Painful Erection",
      titleAr: "انتصاب مؤلم مطول",
      descriptionEn: "Seek emergency care for a painful erection that does not go away.",
      descriptionAr: "اطلب رعاية طارئة عند استمرار الانتصاب المؤلم وعدم زواله.",
      stepsEn: [
        "Go to an emergency department immediately if a painful erection lasts for several hours.",
        "Call emergency services if severe pain or collapse makes travel unsafe.",
        "Do not apply ice or cold water and do not attempt a procedure.",
        "Tell clinicians about relevant conditions, such as sickle cell disease, if known."
      ],
      stepsAr: [
        "توجه إلى قسم الطوارئ فوراً إذا استمر الانتصاب المؤلم عدة ساعات.",
        "اتصل بالطوارئ إذا جعل الألم الشديد أو الانهيار الانتقال غير آمن.",
        "لا تضع الثلج أو الماء البارد ولا تحاول إجراء أي تدخل.",
        "أخبر الأطباء بالحالات ذات الصلة، مثل فقر الدم المنجلي، إن كانت معروفة."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/symptoms/priapism-painful-erections/" }]
    },
    {
      id: 176,
      titleEn: "Acute Pancreatitis Warning Signs",
      titleAr: "علامات التهاب البنكرياس الحاد",
      descriptionEn: "Recognize severe abdominal symptoms that need urgent hospital assessment.",
      descriptionAr: "تعرّف على أعراض البطن الشديدة التي تحتاج إلى تقييم عاجل في المستشفى.",
      stepsEn: [
        "Seek urgent medical care for sudden severe upper abdominal pain, particularly if it spreads to the back.",
        "Call emergency services if the person is very unwell, has difficulty breathing, or collapses.",
        "Help them rest and stay with them while arranging care.",
        "Do not try to diagnose or manage severe symptoms at home."
      ],
      stepsAr: [
        "اطلب رعاية طبية عاجلة عند ألم مفاجئ وشديد أعلى البطن، خصوصاً إذا امتد إلى الظهر.",
        "اتصل بالطوارئ إذا كان المصاب مريضاً بشدة أو واجه صعوبة في التنفس أو انهار.",
        "ساعده على الراحة وابقَ معه أثناء ترتيب الرعاية.",
        "لا تحاول تشخيص الأعراض الشديدة أو تدبيرها في المنزل."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/acute-pancreatitis/" }]
    },
    {
      id: 177,
      titleEn: "Possible Ruptured Abdominal Aortic Aneurysm",
      titleAr: "احتمال تمزق أمّ الدم الأبهرية البطنية",
      descriptionEn: "Sudden severe abdominal or back pain with collapse may be a life-threatening emergency.",
      descriptionAr: "قد يكون ألم البطن أو الظهر الشديد المفاجئ المصحوب بانهيار حالة طارئة تهدد الحياة.",
      stepsEn: [
        "Call emergency services immediately for sudden severe abdominal or back pain with fainting or collapse.",
        "Help the person lie still and stay with them while help is on the way.",
        "Do not let them drive or attempt to transport them yourself if emergency transport is needed.",
        "Follow the emergency call handler's instructions."
      ],
      stepsAr: [
        "اتصل بالطوارئ فوراً عند ألم البطن أو الظهر الشديد المفاجئ المصحوب بإغماء أو انهيار.",
        "ساعد المصاب على الاستلقاء دون حركة وابقَ معه حتى وصول المساعدة.",
        "لا تدعه يقود ولا تحاول نقله بنفسك إذا كان يحتاج إلى نقل إسعافي.",
        "اتبع تعليمات موظف الطوارئ."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/abdominal-aortic-aneurysm/" }]
    },
    {
      id: 178,
      titleEn: "Possible Kidney Infection",
      titleAr: "احتمال التهاب الكلى",
      descriptionEn: "Seek prompt care for fever with back or side pain and urinary symptoms.",
      descriptionAr: "اطلب الرعاية سريعاً عند الحمى المصحوبة بألم الظهر أو الجانب وأعراض بولية.",
      stepsEn: [
        "Contact a healthcare professional urgently for fever or chills with pain in the back or side and urinary symptoms.",
        "Call emergency services if the person becomes confused, very drowsy, or collapses.",
        "Stay with them and help arrange prompt medical assessment.",
        "Follow the healthcare professional's advice and do not delay assessment."
      ],
      stepsAr: [
        "تواصل سريعاً مع مختص صحي عند الحمى أو القشعريرة مع ألم الظهر أو الجانب وأعراض بولية.",
        "اتصل بالطوارئ إذا ارتبك المصاب أو أصبح شديد النعاس أو انهار.",
        "ابقَ معه وساعد على ترتيب تقييم طبي سريع.",
        "لا تستخدم مضادات حيوية متبقية ولا تؤخر المشورة المهنية."
      ],
      sources: [{ nameAr: "هيئة الخدمات الصحية الوطنية البريطانية", nameEn: "NHS", url: "https://www.nhs.uk/conditions/kidney-infection/" }]
    },
    {
      id: 179,
      titleEn: "Unresponsive Adult Who Is Breathing",
      titleAr: "شخص بالغ فاقد الاستجابة ويتنفس",
      descriptionEn: "Keep an unresponsive adult's airway open while emergency help is arranged.",
      descriptionAr: "حافظ على مجرى الهواء مفتوحاً لشخص بالغ فاقد الاستجابة أثناء طلب المساعدة.",
      stepsEn: [
        "Check the scene is safe, call to the person, and gently tap their shoulders.",
        "Open the airway and check for normal breathing for no more than 10 seconds.",
        "If they are breathing normally, place them on their side and keep the airway open.",
        "Call emergency services, stay with them, and keep checking their breathing."
      ],
      stepsAr: [
        "تحقق من أمان المكان ونادِ الشخص وربت برفق على كتفيه.",
        "افتح مجرى الهواء وتحقق من التنفس الطبيعي لمدة لا تتجاوز 10 ثوانٍ.",
        "إذا كان يتنفس طبيعياً، ضعه على جانبه وأبقِ مجرى الهواء مفتوحاً.",
        "اتصل بالطوارئ وابقَ معه وواصل مراقبة تنفسه."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid/unresponsive-and-breathing" }]
    },
    {
      id: 180,
      titleEn: "Unresponsive Adult Who Is Not Breathing Normally",
      titleAr: "شخص بالغ فاقد الاستجابة ولا يتنفس طبيعياً",
      descriptionEn: "Begin emergency response promptly when an adult is unresponsive and not breathing normally.",
      descriptionAr: "ابدأ الاستجابة الطارئة سريعاً إذا كان الشخص البالغ فاقد الاستجابة ولا يتنفس طبيعياً.",
      stepsEn: [
        "Call emergency services and ask someone to bring an automated external defibrillator (AED).",
        "Start chest compressions in the center of the chest, pushing hard and fast.",
        "Use an AED as soon as it arrives and follow its spoken prompts.",
        "Continue CPR until the person shows signs of life or emergency professionals take over."
      ],
      stepsAr: [
        "اتصل بالطوارئ واطلب من شخص إحضار جهاز مزيل الرجفان الخارجي الآلي.",
        "ابدأ ضغطات الصدر في منتصفه بقوة وسرعة.",
        "استخدم مزيل الرجفان فور وصوله واتبع تعليماته الصوتية.",
        "واصل الإنعاش حتى تظهر علامات الحياة أو يتولى المختصون الحالة."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid/unresponsive-and-not-breathing" }]
    },
    {
      id: 181,
      titleEn: "Unresponsive Child Who Is Breathing",
      titleAr: "طفل فاقد الاستجابة ويتنفس",
      descriptionEn: "Position an unresponsive, breathing child to help keep their airway open.",
      descriptionAr: "ضع الطفل فاقد الاستجابة الذي يتنفس في وضع يساعد على إبقاء مجرى الهواء مفتوحاً.",
      stepsEn: [
        "Check the scene is safe, call to the child, and check for normal breathing for up to 10 seconds.",
        "If breathing normally, place the child on their side and gently tilt their head to keep the airway open.",
        "Call emergency services and keep the child warm and accompanied.",
        "Keep checking their breathing and responsiveness until help arrives."
      ],
      stepsAr: [
        "تحقق من أمان المكان ونادِ الطفل وافحص تنفسه الطبيعي لمدة تصل إلى 10 ثوانٍ.",
        "إذا كان يتنفس طبيعياً، ضعه على جانبه وأمل رأسه برفق للمحافظة على مجرى الهواء.",
        "اتصل بالطوارئ وأبقِ الطفل دافئاً وبرفقة شخص.",
        "واصل مراقبة التنفس والاستجابة حتى وصول المساعدة."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/unresponsive-and-breathing-child" }]
    },
    {
      id: 182,
      titleEn: "Unresponsive Child Who Is Not Breathing",
      titleAr: "طفل فاقد الاستجابة ولا يتنفس",
      descriptionEn: "Give child-specific emergency resuscitation while help is on the way.",
      descriptionAr: "قدم إنعاشاً طارئاً مناسباً للأطفال أثناء وصول المساعدة.",
      stepsEn: [
        "Shout for help, call emergency services, and check breathing for no more than 10 seconds.",
        "If the child is not breathing normally, give five initial rescue breaths if able.",
        "Begin CPR using the child technique you know or follow the emergency call handler's instructions.",
        "Continue until the child shows signs of life or emergency professionals take over."
      ],
      stepsAr: [
        "اطلب المساعدة واتصل بالطوارئ وافحص التنفس لمدة لا تتجاوز 10 ثوانٍ.",
        "إذا لم يكن الطفل يتنفس طبيعياً، أعطه خمس نفخات إنقاذ أولية إذا استطعت.",
        "ابدأ إنعاش الطفل بالطريقة التي تعرفها أو اتبع تعليمات موظف الطوارئ.",
        "واصل حتى تظهر علامات الحياة أو يتولى المختصون الحالة."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/unresponsive-not-breathing-child" }]
    },
    {
      id: 183,
      titleEn: "Unresponsive Baby Who Is Breathing",
      titleAr: "رضيع فاقد الاستجابة ويتنفس",
      descriptionEn: "Support an unresponsive, breathing baby in a position that helps protect the airway.",
      descriptionAr: "ادعم الرضيع فاقد الاستجابة الذي يتنفس في وضع يساعد على حماية مجرى الهواء.",
      stepsEn: [
        "Check the scene is safe, call for help, and check the baby's breathing for no more than 10 seconds.",
        "If breathing normally, hold the baby on their side with the head slightly tilted back and supported.",
        "Call emergency services and stay with the baby.",
        "Keep watching the baby's breathing and responsiveness while waiting."
      ],
      stepsAr: [
        "تحقق من أمان المكان واطلب المساعدة وافحص تنفس الرضيع لمدة لا تتجاوز 10 ثوانٍ.",
        "إذا كان يتنفس طبيعياً، أمسكه على جانبه مع إمالة الرأس قليلاً للخلف وإسناده.",
        "اتصل بالطوارئ وابقَ مع الرضيع.",
        "واصل مراقبة تنفسه واستجابته أثناء الانتظار."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/unresponsive-and-breathing-baby" }]
    },
    {
      id: 184,
      titleEn: "Unresponsive Baby Who Is Not Breathing",
      titleAr: "رضيع فاقد الاستجابة ولا يتنفس",
      descriptionEn: "Give age-appropriate emergency resuscitation to a baby who is not breathing normally.",
      descriptionAr: "قدم إنعاشاً طارئاً مناسباً لعمر الرضيع الذي لا يتنفس طبيعياً.",
      stepsEn: [
        "Shout for help, call emergency services, and check the baby's breathing for no more than 10 seconds.",
        "If the baby is not breathing normally, give five gentle initial rescue breaths over the mouth and nose if able.",
        "Start infant CPR using the technique you know or follow the emergency call handler's instructions.",
        "Continue until the baby shows signs of life or emergency professionals take over."
      ],
      stepsAr: [
        "اطلب المساعدة واتصل بالطوارئ وافحص تنفس الرضيع لمدة لا تتجاوز 10 ثوانٍ.",
        "إذا لم يكن الرضيع يتنفس طبيعياً، أعطه خمس نفخات إنقاذ أولية لطيفة عبر الفم والأنف إن استطعت.",
        "ابدأ إنعاش الرضيع بالطريقة التي تعرفها أو اتبع تعليمات موظف الطوارئ.",
        "واصل حتى تظهر علامات الحياة أو يتولى المختصون الحالة."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/unresponsive-and-not-breathing-baby" }]
    },
    {
      id: 185,
      titleEn: "Epileptic Seizure in a Child or Baby",
      titleAr: "نوبة صرع لدى طفل أو رضيع",
      descriptionEn: "Protect a child or baby during a seizure and recognize when urgent medical help is needed.",
      descriptionAr: "احمِ الطفل أو الرضيع أثناء نوبة الصرع وتعرف على الحالات التي تتطلب مساعدة عاجلة.",
      stepsEn: [
        "Move nearby hazards away and protect the child's head with something soft.",
        "Do not restrain them or put anything in their mouth; note how long the seizure lasts.",
        "When jerking stops, place them on their side and monitor their breathing.",
        "Call emergency services for a first seizure, a seizure lasting over five minutes, injury, or uncertainty about the cause."
      ],
      stepsAr: [
        "أبعد الأخطار القريبة واحمِ رأس الطفل بشيء لين.",
        "لا تثبته ولا تضع شيئاً في فمه وسجل مدة النوبة.",
        "بعد توقف التشنجات، ضعه على جانبه وراقب تنفسه.",
        "اتصل بالطوارئ إذا كانت أول نوبة أو استمرت أكثر من خمس دقائق أو حدثت إصابة أو لم يُعرف سببها."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/epileptic-seizure" }]
    },
    {
      id: 186,
      titleEn: "Burn in a Baby or Child",
      titleAr: "حرق لدى رضيع أو طفل",
      descriptionEn: "Cool a baby's or child's burn safely and arrange medical advice.",
      descriptionAr: "برّد حرق الرضيع أو الطفل بأمان ورتب المشورة الطبية.",
      stepsEn: [
        "Move the child away from the heat source without putting yourself at risk.",
        "Cool the burn under cool running water for at least 20 minutes; focus water on the burn.",
        "Remove nearby clothing or jewelry but do not pull away anything stuck to the burn.",
        "Loosely cover the cooled burn with a clean covering and seek medical advice."
      ],
      stepsAr: [
        "أبعد الطفل عن مصدر الحرارة دون تعريض نفسك للخطر.",
        "برّد الحرق بماء جارٍ بارد لمدة 20 دقيقة على الأقل، وركز الماء على موضع الحرق.",
        "أزل الملابس أو الحلي القريبة لكن لا تنزع شيئاً ملتصقاً بالحرق.",
        "غطِّ الحرق بعد تبريده بغطاء نظيف غير محكم واطلب المشورة الطبية."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/burns" }]
    },
    {
      id: 187,
      titleEn: "Possible Broken Bone in a Child",
      titleAr: "اشتباه كسر لدى طفل",
      descriptionEn: "Support a child's suspected fracture without trying to straighten or reposition the limb.",
      descriptionAr: "ادعم الكسر المشتبه به لدى الطفل دون محاولة تقويم الطرف أو إعادته إلى موضعه.",
      stepsEn: [
        "Keep the child still and support the injured part with their hand, a cushion, or clothing.",
        "Do not attempt to straighten a misshapen limb or push exposed bone back into place.",
        "Call emergency services if the child is in severe pain, cannot be moved safely, or has a serious injury.",
        "Continue supporting the injury until medical help takes over."
      ],
      stepsAr: [
        "أبقِ الطفل ساكناً واسند الجزء المصاب بيده أو بوسادة أو بملابس.",
        "لا تحاول تقويم طرف مشوه أو دفع عظم ظاهر إلى مكانه.",
        "اتصل بالطوارئ إذا كان الألم شديداً أو تعذر تحريكه بأمان أو كانت الإصابة خطيرة.",
        "واصل إسناد الإصابة حتى يتولى المختصون الرعاية."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/broken-bone" }]
    },
    {
      id: 188,
      titleEn: "Severe Allergic Reaction in a Child",
      titleAr: "تفاعل تحسسي شديد لدى طفل",
      descriptionEn: "Treat a child's suspected anaphylaxis as an emergency.",
      descriptionAr: "تعامل مع الاشتباه بالحساسية المفرطة لدى الطفل كحالة طارئة.",
      stepsEn: [
        "Call emergency services immediately for breathing difficulty, throat or tongue swelling, collapse, or rapidly worsening symptoms.",
        "Help the child use their own prescribed adrenaline auto-injector according to its instructions.",
        "Keep them accompanied and in a comfortable position while waiting for help.",
        "Monitor breathing and follow the emergency operator's instructions."
      ],
      stepsAr: [
        "اتصل بالطوارئ فوراً عند صعوبة التنفس أو تورم الحلق أو اللسان أو الإغماء أو التفاقم السريع.",
        "ساعد الطفل على استخدام حاقن الأدرينالين الموصوف له وفق تعليماته.",
        "ابقَ مع الطفل وضعه في وضع مريح أثناء انتظار المساعدة.",
        "راقب التنفس واتبع تعليمات موظف الطوارئ."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/allergic-reaction" }]
    },
    {
      id: 189,
      titleEn: "Head Injury in a Child",
      titleAr: "إصابة الرأس لدى طفل",
      descriptionEn: "Provide initial care after a child's head injury and recognize signs that need emergency help.",
      descriptionAr: "قدم الرعاية الأولية بعد إصابة رأس الطفل وتعرف على العلامات التي تستلزم الطوارئ.",
      stepsEn: [
        "Have the child rest and apply a wrapped cold pack briefly to a bump.",
        "Call emergency services if they become drowsy, repeatedly vomit, confused, less responsive, or worsen.",
        "Do not let them return to sport until assessed by a medical professional.",
        "Stay with them and arrange medical advice if concussion is suspected."
      ],
      stepsAr: [
        "أرح الطفل وضع كمادة باردة ملفوفة لفترة قصيرة على موضع التورم.",
        "اتصل بالطوارئ إذا أصبح ناعساً أو تكرر القيء أو ارتبك أو قلت استجابته أو ساءت حالته.",
        "لا تسمح له بالعودة إلى الرياضة قبل تقييمه من مختص صحي.",
        "ابقَ معه واطلب المشورة الطبية عند الاشتباه بارتجاج."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/head-injury" }]
    },
    {
      id: 190,
      titleEn: "Severe Bleeding in a Baby or Child",
      titleAr: "نزيف شديد لدى رضيع أو طفل",
      descriptionEn: "Apply firm pressure and get emergency help for heavy bleeding in a child.",
      descriptionAr: "اضغط بقوة واطلب الطوارئ عند النزيف الغزير لدى الطفل.",
      stepsEn: [
        "Call emergency services or ask someone nearby to call.",
        "Apply firm, continuous pressure directly to the wound with a clean cloth or dressing.",
        "If an object is embedded, do not remove it; apply pressure around it.",
        "Keep pressure on the wound and keep the child warm until help arrives."
      ],
      stepsAr: [
        "اتصل بالطوارئ أو اطلب من شخص قريب الاتصال.",
        "اضغط بقوة وباستمرار مباشرة على الجرح بقطعة قماش أو ضماد نظيف.",
        "إذا كان جسم مغروس في الجرح، فلا تنزعه واضغط حوله.",
        "واصل الضغط على الجرح وحافظ على دفء الطفل حتى وصول المساعدة."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/bleeding-heavily" }]
    },
    {
      id: 191,
      titleEn: "Shock After Injury in a Child",
      titleAr: "الصدمة بعد إصابة طفل",
      descriptionEn: "Recognize possible shock after injury and keep a child warm while calling for help.",
      descriptionAr: "تعرف على احتمال الصدمة بعد الإصابة وأبقِ الطفل دافئاً أثناء طلب المساعدة.",
      stepsEn: [
        "Call emergency services for a child who is pale, weak, unusually drowsy, or rapidly worsening after an injury.",
        "Control any heavy bleeding with direct pressure.",
        "Help the child lie down or stay comfortably supported and keep them warm.",
        "Stay with them, monitor breathing and responsiveness, and follow emergency instructions."
      ],
      stepsAr: [
        "اتصل بالطوارئ إذا أصبح الطفل شاحباً أو ضعيفاً أو ناعساً بشكل غير معتاد أو ساءت حالته سريعاً بعد إصابة.",
        "سيطر على أي نزيف غزير بالضغط المباشر.",
        "ساعد الطفل على الاستلقاء أو البقاء في وضع مدعوم ومريح وحافظ على دفئه.",
        "ابقَ معه وراقب التنفس والاستجابة واتبع تعليمات الطوارئ."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/bleeding-heavily" }]
    },
    {
      id: 192,
      titleEn: "Croup in a Baby or Young Child",
      titleAr: "الخانوق لدى رضيع أو طفل صغير",
      descriptionEn: "Keep a baby or young child with croup calm and upright, and watch for breathing difficulty.",
      descriptionAr: "حافظ على هدوء الرضيع أو الطفل الصغير المصاب بالخانوق واجعله جالساً وراقب صعوبة التنفس.",
      stepsEn: [
        "Sit the child upright and comfort them; try to keep them calm.",
        "Watch for difficult or noisy breathing, marked distress, or blue-tinged skin.",
        "Call emergency services if breathing is seriously difficult or the child becomes very distressed.",
        "Seek medical advice if you are unsure or symptoms are worsening; do not use steam treatment."
      ],
      stepsAr: [
        "أجلس الطفل منتصباً وطمئنه وحاول الحفاظ على هدوئه.",
        "راقب صعوبة التنفس أو صوته غير المعتاد أو الضيق الشديد أو ازرقاق الجلد.",
        "اتصل بالطوارئ إذا كانت صعوبة التنفس شديدة أو أصبح الطفل في ضيق بالغ.",
        "اطلب المشورة الطبية عند الشك أو تفاقم الأعراض ولا تستخدم العلاج بالبخار."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/croup" }]
    },
    {
      id: 193,
      titleEn: "Fever in a Baby Under Three Months",
      titleAr: "الحمى لدى رضيع دون ثلاثة أشهر",
      descriptionEn: "A raised temperature in a very young baby needs prompt professional advice.",
      descriptionAr: "تستدعي الحرارة المرتفعة لدى الرضيع الصغير جداً مشورة طبية سريعة.",
      stepsEn: [
        "Check the baby's temperature with a thermometer if available.",
        "Contact a healthcare professional promptly for a fever in a baby under three months.",
        "Keep the baby comfortably dressed and offer their usual feeds if alert and feeding normally.",
        "Call emergency services if the baby is difficult to wake, struggling to breathe, or seriously unwell."
      ],
      stepsAr: [
        "قِس حرارة الرضيع بميزان حرارة إن توفر.",
        "تواصل سريعاً مع مختص صحي عند إصابة رضيع دون ثلاثة أشهر بالحمى.",
        "ألبس الرضيع ملابس مريحة وقدم رضعاته المعتادة إذا كان يقظاً ويرضع بصورة طبيعية.",
        "اتصل بالطوارئ إذا تعذر إيقاظه أو واجه صعوبة في التنفس أو بدا مريضاً بشدة."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/fever" }]
    },
    {
      id: 194,
      titleEn: "Fever in a Baby or Child",
      titleAr: "الحمى لدى رضيع أو طفل",
      descriptionEn: "Monitor a child's fever, prevent overheating, and seek help for serious warning signs.",
      descriptionAr: "راقب حمى الطفل وتجنب زيادة تدفئته واطلب المساعدة عند ظهور علامات خطر.",
      stepsEn: [
        "Check the temperature with a thermometer and observe the child's overall condition.",
        "Remove excess clothing, offer fluids if they can drink safely, and do not use cold baths or sponging.",
        "Follow the medicine label or clinician's advice; do not give medicine to a very young baby without professional advice.",
        "Seek urgent help for breathing difficulty, unusual drowsiness, a seizure, or a child who is getting worse."
      ],
      stepsAr: [
        "قِس الحرارة بميزان حرارة وراقب الحالة العامة للطفل.",
        "خفف الملابس الزائدة وقدم السوائل إذا استطاع الشرب بأمان ولا تستخدم حماماً بارداً أو إسفنجاً مبللاً.",
        "اتبع النشرة الدوائية أو نصيحة الطبيب ولا تعطِ دواءً لرضيع صغير جداً دون مشورة مهنية.",
        "اطلب مساعدة عاجلة عند صعوبة التنفس أو النعاس غير المعتاد أو التشنج أو تدهور الحالة."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/fever" }]
    },
    {
      id: 195,
      titleEn: "Vomiting and Diarrhoea in a Baby or Child",
      titleAr: "القيء والإسهال لدى رضيع أو طفل",
      descriptionEn: "Help prevent dehydration and recognize when a child needs urgent medical care.",
      descriptionAr: "ساعد على منع الجفاف وتعرف على الحالات التي تحتاج فيها حالة الطفل إلى رعاية عاجلة.",
      stepsEn: [
        "Offer small, frequent sips of fluid; continue usual feeding or breastfeeding as tolerated.",
        "Watch for reduced urination, dry mouth, unusual sleepiness, or inability to keep fluids down.",
        "Seek medical advice if symptoms persist, the child is very young, or dehydration is suspected.",
        "Call emergency services if the child is difficult to wake, collapses, or becomes seriously unwell."
      ],
      stepsAr: [
        "قدم رشفات صغيرة ومتكررة من السوائل واستمر في الرضاعة أو التغذية المعتادة حسب التحمل.",
        "راقب قلة التبول أو جفاف الفم أو النعاس غير المعتاد أو عدم القدرة على الاحتفاظ بالسوائل.",
        "اطلب المشورة الطبية إذا استمرت الأعراض أو كان الطفل صغيراً جداً أو اشتبهت بالجفاف.",
        "اتصل بالطوارئ إذا تعذر إيقاظ الطفل أو انهار أو أصبح مريضاً بشدة."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/vomiting-and-diarrhoea" }]
    },
    {
      id: 196,
      titleEn: "Dehydration Warning Signs in a Baby",
      titleAr: "علامات الجفاف لدى رضيع",
      descriptionEn: "Monitor a baby with vomiting or diarrhoea for dehydration and seek help early.",
      descriptionAr: "راقب علامات الجفاف لدى الرضيع المصاب بالقيء أو الإسهال واطلب المساعدة مبكراً.",
      stepsEn: [
        "Continue breastfeeding or the baby's usual milk feeds in small, frequent amounts if tolerated.",
        "Watch for fewer wet nappies, a dry mouth, no tears, or unusual drowsiness.",
        "Contact a healthcare professional promptly if the baby is not feeding or you suspect dehydration.",
        "Call emergency services if the baby is hard to wake, has breathing difficulty, or is seriously unwell."
      ],
      stepsAr: [
        "واصل الرضاعة الطبيعية أو الحليب المعتاد بكميات صغيرة ومتكررة إذا تحمله الرضيع.",
        "راقب قلة الحفاضات المبللة أو جفاف الفم أو غياب الدموع أو النعاس غير المعتاد.",
        "تواصل سريعاً مع مختص صحي إذا توقف الرضيع عن الرضاعة أو اشتبهت بالجفاف.",
        "اتصل بالطوارئ إذا تعذر إيقاظ الرضيع أو واجه صعوبة في التنفس أو بدا مريضاً بشدة."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/vomiting-and-diarrhoea" }]
    },
    {
      id: 197,
      titleEn: "Choking in a Baby: Chest Thrusts",
      titleAr: "اختناق الرضيع: الضغطات الصدرية",
      descriptionEn: "Use chest thrusts, not abdominal thrusts, if back blows do not clear a baby's airway.",
      descriptionAr: "استخدم الضغطات الصدرية لا البطنية إذا لم تفتح ضربات الظهر مجرى هواء الرضيع.",
      stepsEn: [
        "Support the baby face-down with the head lower than the body and give up to five back blows.",
        "If the blockage remains, turn the baby face-up while supporting the head and neck.",
        "Give up to five sharp chest thrusts with two fingers in the center of the chest below the nipple line.",
        "Call emergency services if the blockage persists; repeat the sequence and never use abdominal thrusts on a baby."
      ],
      stepsAr: [
        "أسند الرضيع ووجهه لأسفل مع جعل الرأس أخفض من الجسم وقدم حتى خمس ضربات على الظهر.",
        "إذا استمر الانسداد، أدره على ظهره مع إسناد الرأس والرقبة.",
        "قدم حتى خمس ضغطات صدرية حادة بإصبعين في منتصف الصدر أسفل خط الحلمتين.",
        "اتصل بالطوارئ إذا استمر الانسداد وكرر الخطوات ولا تستخدم الضغطات البطنية للرضيع."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/choking-baby" }]
    },
    {
      id: 198,
      titleEn: "Choking in a Child: Back Blows and Abdominal Thrusts",
      titleAr: "اختناق طفل: ضربات الظهر والضغطات البطنية",
      descriptionEn: "Use age-appropriate back blows and abdominal thrusts for a child over one year with severe choking.",
      descriptionAr: "استخدم ضربات الظهر والضغطات البطنية المناسبة لطفل تجاوز سنة عند الاختناق الشديد.",
      stepsEn: [
        "If the child cannot breathe, speak, or cough, call for help and lean them forward.",
        "Give up to five back blows between the shoulder blades, checking after each one.",
        "If the blockage remains, give up to five abdominal thrusts above the navel, checking after each one.",
        "Call emergency services if choking continues; if the child becomes unresponsive, begin child CPR."
      ],
      stepsAr: [
        "إذا لم يستطع الطفل التنفس أو الكلام أو السعال، اطلب المساعدة وأمله للأمام.",
        "قدم حتى خمس ضربات بين لوحي الكتف وتحقق بعد كل ضربة.",
        "إذا استمر الانسداد، قدم حتى خمس ضغطات بطنية فوق السرة وتحقق بعد كل ضغطة.",
        "اتصل بالطوارئ إذا استمر الاختناق؛ وإذا فقد الطفل الاستجابة فابدأ إنعاش الأطفال."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/choking-child" }]
    },
    {
      id: 199,
      titleEn: "Choking in a Baby: When to Call Emergency Services",
      titleAr: "اختناق الرضيع: متى تتصل بالطوارئ",
      descriptionEn: "Escalate promptly if a baby's airway remains blocked or the baby becomes unresponsive.",
      descriptionAr: "صعّد الاستجابة سريعاً إذا ظل مجرى هواء الرضيع مسدوداً أو فقد الرضيع الاستجابة.",
      stepsEn: [
        "Call emergency services if back blows and chest thrusts do not clear the obstruction.",
        "Continue alternating up to five back blows and five chest thrusts while checking after each action.",
        "If the baby becomes unresponsive, place them on a firm surface and check breathing.",
        "Start infant CPR if they are not breathing normally and follow the emergency operator's instructions."
      ],
      stepsAr: [
        "اتصل بالطوارئ إذا لم تزل ضربات الظهر والضغطات الصدرية الانسداد.",
        "واصل التبديل بين حتى خمس ضربات ظهر وخمس ضغطات صدرية مع التحقق بعد كل محاولة.",
        "إذا فقد الرضيع الاستجابة، ضعه على سطح صلب وتحقق من التنفس.",
        "ابدأ إنعاش الرضيع إذا لم يكن يتنفس طبيعياً واتبع تعليمات موظف الطوارئ."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/choking-baby" }]
    },
    {
      id: 200,
      titleEn: "Choking in a Child: After the Blockage Clears",
      titleAr: "اختناق طفل: بعد زوال الانسداد",
      descriptionEn: "Seek assessment after a child has needed abdominal thrusts, even if the obstruction clears.",
      descriptionAr: "اطلب تقييماً طبياً بعد حاجة الطفل إلى ضغطات بطنية حتى إذا زال الانسداد.",
      stepsEn: [
        "Call emergency services if breathing difficulty or choking continues.",
        "Arrange medical assessment after abdominal thrusts, even if the object comes out and the child appears better.",
        "Stay with the child and monitor breathing, swallowing, and alertness.",
        "Do not give food or drink if the child is still struggling to breathe or swallow."
      ],
      stepsAr: [
        "اتصل بالطوارئ إذا استمرت صعوبة التنفس أو الاختناق.",
        "رتب تقييماً طبياً بعد الضغطات البطنية حتى إذا خرج الجسم وبدا الطفل أفضل.",
        "ابقَ مع الطفل وراقب التنفس والبلع واليقظة.",
        "لا تقدم طعاماً أو شراباً إذا استمرت صعوبة التنفس أو البلع."
      ],
      sources: [{ nameAr: "الصليب الأحمر البريطاني", nameEn: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/choking-child" }]
    }
];
