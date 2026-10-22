export interface GymDay {
  key: string;
  name: string;
  nameEn: string;
  muscles: string;
  musclesEn: string;
  exercises: string[];
  exercisesEn: string[];
}

export interface GymProgram {
  key: string;
  name: string;
  nameEn: string;
  level: string;
  levelEn: string;
  daysPerWeek: string;
  daysPerWeekEn: string;
  bestFor: string;
  bestForEn: string;
  days: GymDay[];
}

export const gymPrograms: GymProgram[] = [
  {
    key: 'full_body',
    name: 'الجسم كامل (Full Body)',
    nameEn: 'Full Body',
    level: 'مبتدئ',
    levelEn: 'Beginner',
    daysPerWeek: '3 أيام',
    daysPerWeekEn: '3 days',
    bestFor: 'الأفضل للمبتدئين ومن لديه وقت قليل (3 أيام بالأسبوع).',
    bestForEn: 'Best for beginners and those with limited time (3 days/week).',
    days: [
      {
        key: 'fb_a',
        name: 'اليوم الأول - جسم كامل A',
        nameEn: 'Day 1 - Full Body A',
        muscles: 'صدر + ظهر + أرجل + كتف',
        musclesEn: 'Chest + Back + Legs + Shoulders',
        exercises: ['سكوات بالبار', 'بنش برس مستوي', 'سحب أرضي (Barbell Row)', 'كتف أمامي بالدمبل', 'بايسبس بالبار', 'بطن (Plank)'],
        exercisesEn: ['Barbell Squat', 'Flat Bench Press', 'Barbell Row', 'Dumbbell Front Raise', 'Barbell Bicep Curl', 'Plank'],
      },
      {
        key: 'fb_b',
        name: 'اليوم الثاني - جسم كامل B',
        nameEn: 'Day 2 - Full Body B',
        muscles: 'أرجل + ظهر + صدر + ترايسبس',
        musclesEn: 'Legs + Back + Chest + Triceps',
        exercises: ['ديدليفت', 'بنش برس مائل بالدمبل', 'عقلة أو سحب أمامي', 'ضغط كتف بالبار', 'ترايسبس بالحبل', 'رفرفة جانبي'],
        exercisesEn: ['Deadlift', 'Incline Dumbbell Bench Press', 'Pull-up or Lat Pulldown', 'Barbell Overhead Press', 'Cable Triceps Pushdown', 'Lateral Raise'],
      },
      {
        key: 'fb_c',
        name: 'اليوم الثالث - جسم كامل C',
        nameEn: 'Day 3 - Full Body C',
        muscles: 'أرجل + صدر + ظهر + بطن',
        musclesEn: 'Legs + Chest + Back + Abs',
        exercises: ['ليج برس', 'رومانيان ديدليفت', 'تفتيح صدر بالدمبل', 'سحب أرضي بالكابل', 'سمانة واقف', 'بطن (Crunches)'],
        exercisesEn: ['Leg Press', 'Romanian Deadlift', 'Dumbbell Chest Fly', 'Cable Row', 'Standing Calf Raise', 'Crunches'],
      },
    ],
  },
  {
    key: 'upper_lower',
    name: 'علوي / سفلي (Upper / Lower)',
    nameEn: 'Upper / Lower',
    level: 'مبتدئ - متوسط',
    levelEn: 'Beginner - Intermediate',
    daysPerWeek: '4 أيام',
    daysPerWeekEn: '4 days',
    bestFor: 'توازن ممتاز بين التكرار والراحة، مناسب لبناء العضل والقوة.',
    bestForEn: 'Excellent balance between frequency and recovery, great for building muscle and strength.',
    days: [
      { key: 'ul_up1', name: 'علوي 1 (قوة)', nameEn: 'Upper 1 (Strength)', muscles: 'صدر + ظهر + كتف + ذراعين', musclesEn: 'Chest + Back + Shoulders + Arms', exercises: ['بنش برس بالبار', 'سحب أرضي بالبار', 'ضغط كتف بالدمبل', 'سحب أمامي واسع', 'بايسبس بالبار', 'ترايسبس ديب'], exercisesEn: ['Barbell Bench Press', 'Barbell Row', 'Dumbbell Overhead Press', 'Wide-Grip Lat Pulldown', 'Barbell Bicep Curl', 'Triceps Dip'] },
      { key: 'ul_low1', name: 'سفلي 1 (قوة)', nameEn: 'Lower 1 (Strength)', muscles: 'أرجل + سمانة + بطن', musclesEn: 'Legs + Calves + Abs', exercises: ['سكوات خلفي', 'رومانيان ديدليفت', 'ليج برس', 'سمانة جالس', 'بطن معلق'], exercisesEn: ['Back Squat', 'Romanian Deadlift', 'Leg Press', 'Seated Calf Raise', 'Hanging Leg Raise'] },
      { key: 'ul_up2', name: 'علوي 2 (تضخيم)', nameEn: 'Upper 2 (Hypertrophy)', muscles: 'صدر + ظهر + كتف + ذراعين', musclesEn: 'Chest + Back + Shoulders + Arms', exercises: ['بنش مائل بالدمبل', 'تجديف بالدمبل', 'رفرفة جانبي', 'سحب وجه (Face Pull)', 'بايسبس مطرقة', 'ترايسبس فوق الرأس'], exercisesEn: ['Incline Dumbbell Press', 'Dumbbell Row', 'Lateral Raise', 'Face Pull', 'Hammer Curl', 'Overhead Triceps Extension'] },
      { key: 'ul_low2', name: 'سفلي 2 (تضخيم)', nameEn: 'Lower 2 (Hypertrophy)', muscles: 'أرجل + مؤخرة + بطن', musclesEn: 'Legs + Glutes + Abs', exercises: ['سكوات أمامي', 'ليج كيرل', 'ليج إكستنشن', 'هيب ثراست', 'سمانة واقف', 'بطن جانبي'], exercisesEn: ['Front Squat', 'Leg Curl', 'Leg Extension', 'Hip Thrust', 'Standing Calf Raise', 'Side Plank'] },
    ],
  },
  {
    key: 'bro_split',
    name: 'برو سبليت (Bro Split)',
    nameEn: 'Bro Split',
    level: 'متوسط',
    levelEn: 'Intermediate',
    daysPerWeek: '5 أيام',
    daysPerWeekEn: '5 days',
    bestFor: 'كل عضلة يوم كامل — تركيز عالي وحجم تدريب كبير للعضلة.',
    bestForEn: 'One muscle group per day — high focus and volume for each muscle.',
    days: [
      { key: 'bro_chest', name: 'يوم الصدر', nameEn: 'Chest Day', muscles: 'صدر + ترايسبس', musclesEn: 'Chest + Triceps', exercises: ['بنش برس مستوي', 'بنش مائل بالدمبل', 'تفتيح بالكابل', 'ديب صدر', 'ترايسبس بالحبل'], exercisesEn: ['Flat Bench Press', 'Incline Dumbbell Press', 'Cable Fly', 'Chest Dip', 'Cable Triceps Pushdown'] },
      { key: 'bro_back', name: 'يوم الظهر', nameEn: 'Back Day', muscles: 'ظهر + بايسبس', musclesEn: 'Back + Biceps', exercises: ['ديدليفت', 'عقلة', 'سحب أرضي', 'سحب أمامي ضيق', 'بايسبس بالبار'], exercisesEn: ['Deadlift', 'Pull-up', 'Barbell Row', 'Close-Grip Lat Pulldown', 'Barbell Bicep Curl'] },
      { key: 'bro_shoulder', name: 'يوم الكتف', nameEn: 'Shoulder Day', muscles: 'كتف + ترابيس', musclesEn: 'Shoulders + Traps', exercises: ['ضغط كتف بالبار', 'رفرفة جانبي', 'رفرفة أمامي', 'رفرفة خلفي', 'شراغ (Shrugs)'], exercisesEn: ['Barbell Overhead Press', 'Lateral Raise', 'Front Raise', 'Rear Delt Fly', 'Shrugs'] },
      { key: 'bro_legs', name: 'يوم الأرجل', nameEn: 'Leg Day', muscles: 'أرجل + سمانة', musclesEn: 'Legs + Calves', exercises: ['سكوات', 'ليج برس', 'ليج كيرل', 'ليج إكستنشن', 'سمانة واقف'], exercisesEn: ['Squat', 'Leg Press', 'Leg Curl', 'Leg Extension', 'Standing Calf Raise'] },
      { key: 'bro_arms', name: 'يوم الذراعين والبطن', nameEn: 'Arms & Abs Day', muscles: 'بايسبس + ترايسبس + بطن', musclesEn: 'Biceps + Triceps + Abs', exercises: ['بايسبس بالبار', 'بايسبس مطرقة', 'ترايسبس فرنساوي', 'ترايسبس بالحبل', 'بطن (Plank + Crunches)'], exercisesEn: ['Barbell Bicep Curl', 'Hammer Curl', 'French Press', 'Cable Triceps Pushdown', 'Plank + Crunches'] },
    ],
  },
  {
    key: 'ppl',
    name: 'بوش بول ليج (Push / Pull / Legs)',
    nameEn: 'Push / Pull / Legs',
    level: 'متوسط - متقدم',
    levelEn: 'Intermediate - Advanced',
    daysPerWeek: '6 أيام',
    daysPerWeekEn: '6 days',
    bestFor: 'الأشهر عالمياً لبناء العضل بتكرار مرتين أسبوعياً لكل عضلة.',
    bestForEn: 'The most popular split worldwide, hitting each muscle twice a week.',
    days: [
      { key: 'ppl_push1', name: 'دفع (Push) 1', nameEn: 'Push 1', muscles: 'صدر + كتف + ترايسبس', musclesEn: 'Chest + Shoulders + Triceps', exercises: ['بنش برس بالبار', 'ضغط كتف بالدمبل', 'بنش مائل بالدمبل', 'رفرفة جانبي', 'ترايسبس بالحبل'], exercisesEn: ['Barbell Bench Press', 'Dumbbell Overhead Press', 'Incline Dumbbell Press', 'Lateral Raise', 'Cable Triceps Pushdown'] },
      { key: 'ppl_pull1', name: 'سحب (Pull) 1', nameEn: 'Pull 1', muscles: 'ظهر + بايسبس', musclesEn: 'Back + Biceps', exercises: ['ديدليفت', 'عقلة', 'سحب أرضي بالبار', 'سحب وجه', 'بايسبس بالبار'], exercisesEn: ['Deadlift', 'Pull-up', 'Barbell Row', 'Face Pull', 'Barbell Bicep Curl'] },
      { key: 'ppl_legs1', name: 'أرجل (Legs) 1', nameEn: 'Legs 1', muscles: 'أرجل + سمانة + بطن', musclesEn: 'Legs + Calves + Abs', exercises: ['سكوات خلفي', 'رومانيان ديدليفت', 'ليج برس', 'سمانة واقف', 'بطن معلق'], exercisesEn: ['Back Squat', 'Romanian Deadlift', 'Leg Press', 'Standing Calf Raise', 'Hanging Leg Raise'] },
      { key: 'ppl_push2', name: 'دفع (Push) 2', nameEn: 'Push 2', muscles: 'صدر + كتف + ترايسبس', musclesEn: 'Chest + Shoulders + Triceps', exercises: ['بنش مائل بالبار', 'ضغط كتف بالماكينة', 'تفتيح بالكابل', 'رفرفة جانبي بالكابل', 'ترايسبس فوق الرأس'], exercisesEn: ['Incline Barbell Press', 'Machine Shoulder Press', 'Cable Fly', 'Cable Lateral Raise', 'Overhead Triceps Extension'] },
      { key: 'ppl_pull2', name: 'سحب (Pull) 2', nameEn: 'Pull 2', muscles: 'ظهر + بايسبس', musclesEn: 'Back + Biceps', exercises: ['سحب أمامي واسع', 'تجديف بالدمبل', 'سحب أرضي بالكابل', 'رفرفة خلفي', 'بايسبس مطرقة'], exercisesEn: ['Wide-Grip Lat Pulldown', 'Dumbbell Row', 'Cable Row', 'Rear Delt Fly', 'Hammer Curl'] },
      { key: 'ppl_legs2', name: 'أرجل (Legs) 2', nameEn: 'Legs 2', muscles: 'أرجل + مؤخرة + بطن', musclesEn: 'Legs + Glutes + Abs', exercises: ['سكوات أمامي', 'هيب ثراست', 'ليج كيرل', 'ليج إكستنشن', 'سمانة جالس'], exercisesEn: ['Front Squat', 'Hip Thrust', 'Leg Curl', 'Leg Extension', 'Seated Calf Raise'] },
    ],
  },
  {
    key: 'arnold',
    name: 'أرنولد سبليت (Arnold Split)',
    nameEn: 'Arnold Split',
    level: 'متقدم',
    levelEn: 'Advanced',
    daysPerWeek: '6 أيام',
    daysPerWeekEn: '6 days',
    bestFor: 'حجم تدريب عالي جداً — للمتقدمين ذوي الاستشفاء الجيد.',
    bestForEn: 'Very high training volume — for advanced lifters with good recovery.',
    days: [
      { key: 'arn_cb1', name: 'صدر + ظهر (1)', nameEn: 'Chest + Back (1)', muscles: 'صدر + ظهر', musclesEn: 'Chest + Back', exercises: ['بنش برس مستوي', 'عقلة واسعة', 'بنش مائل بالدمبل', 'سحب أرضي', 'تفتيح بالكابل', 'سحب أمامي'], exercisesEn: ['Flat Bench Press', 'Wide-Grip Pull-up', 'Incline Dumbbell Press', 'Barbell Row', 'Cable Fly', 'Lat Pulldown'] },
      { key: 'arn_sa1', name: 'كتف + ذراعين (1)', nameEn: 'Shoulders + Arms (1)', muscles: 'كتف + بايسبس + ترايسبس', musclesEn: 'Shoulders + Biceps + Triceps', exercises: ['ضغط كتف بالبار', 'رفرفة جانبي', 'بايسبس بالبار', 'ترايسبس فرنساوي', 'بايسبس مطرقة'], exercisesEn: ['Barbell Overhead Press', 'Lateral Raise', 'Barbell Bicep Curl', 'French Press', 'Hammer Curl'] },
      { key: 'arn_leg1', name: 'أرجل + بطن (1)', nameEn: 'Legs + Abs (1)', muscles: 'أرجل + بطن', musclesEn: 'Legs + Abs', exercises: ['سكوات خلفي', 'ليج كيرل', 'ليج إكستنشن', 'سمانة واقف', 'بطن معلق'], exercisesEn: ['Back Squat', 'Leg Curl', 'Leg Extension', 'Standing Calf Raise', 'Hanging Leg Raise'] },
      { key: 'arn_cb2', name: 'صدر + ظهر (2)', nameEn: 'Chest + Back (2)', muscles: 'صدر + ظهر', musclesEn: 'Chest + Back', exercises: ['بنش مائل بالبار', 'تجديف بالدمبل', 'ديب صدر', 'سحب أرضي بالكابل', 'بولوفر'], exercisesEn: ['Incline Barbell Press', 'Dumbbell Row', 'Chest Dip', 'Cable Row', 'Pullover'] },
      { key: 'arn_sa2', name: 'كتف + ذراعين (2)', nameEn: 'Shoulders + Arms (2)', muscles: 'كتف + بايسبس + ترايسبس', musclesEn: 'Shoulders + Biceps + Triceps', exercises: ['ضغط كتف بالدمبل', 'رفرفة خلفي', 'بايسبس بالكابل', 'ترايسبس بالحبل', 'شراغ'], exercisesEn: ['Dumbbell Overhead Press', 'Rear Delt Fly', 'Cable Bicep Curl', 'Cable Triceps Pushdown', 'Shrugs'] },
      { key: 'arn_leg2', name: 'أرجل + بطن (2)', nameEn: 'Legs + Abs (2)', muscles: 'أرجل + بطن', musclesEn: 'Legs + Abs', exercises: ['ديدليفت', 'ليج برس', 'لانجز', 'سمانة جالس', 'بطن جانبي'], exercisesEn: ['Deadlift', 'Leg Press', 'Lunges', 'Seated Calf Raise', 'Side Plank'] },
    ],
  },
  {
    key: 'phul',
    name: 'PHUL (Power Hypertrophy Upper Lower)',
    nameEn: 'PHUL (Power Hypertrophy Upper Lower)',
    level: 'متوسط - متقدم',
    levelEn: 'Intermediate - Advanced',
    daysPerWeek: '4 أيام',
    daysPerWeekEn: '4 days',
    bestFor: 'يجمع بين أيام القوة (Power) وأيام التضخيم (Hypertrophy).',
    bestForEn: 'Combines power days and hypertrophy days.',
    days: [
      { key: 'phul_pu', name: 'قوة علوي (Power Upper)', nameEn: 'Power Upper', muscles: 'صدر + ظهر + كتف + ذراعين', musclesEn: 'Chest + Back + Shoulders + Arms', exercises: ['بنش برس بالبار 3-5 تكرار', 'سحب أرضي بالبار 3-5 تكرار', 'ضغط كتف بالبار', 'عقلة بأوزان', 'بايسبس بالبار', 'ترايسبس ضيق'], exercisesEn: ['Barbell Bench Press 3-5 reps', 'Barbell Row 3-5 reps', 'Barbell Overhead Press', 'Weighted Pull-up', 'Barbell Bicep Curl', 'Close-Grip Bench Press'] },
      { key: 'phul_pl', name: 'قوة سفلي (Power Lower)', nameEn: 'Power Lower', muscles: 'أرجل + سمانة', musclesEn: 'Legs + Calves', exercises: ['سكوات خلفي 3-5 تكرار', 'ديدليفت 3-5 تكرار', 'ليج برس', 'ليج كيرل', 'سمانة واقف'], exercisesEn: ['Back Squat 3-5 reps', 'Deadlift 3-5 reps', 'Leg Press', 'Leg Curl', 'Standing Calf Raise'] },
      { key: 'phul_hu', name: 'تضخيم علوي (Hypertrophy Upper)', nameEn: 'Hypertrophy Upper', muscles: 'صدر + ظهر + كتف + ذراعين', musclesEn: 'Chest + Back + Shoulders + Arms', exercises: ['بنش مائل بالدمبل 8-12', 'سحب أمامي واسع', 'تفتيح بالكابل', 'رفرفة جانبي', 'بايسبس مطرقة', 'ترايسبس بالحبل'], exercisesEn: ['Incline Dumbbell Press 8-12', 'Wide-Grip Lat Pulldown', 'Cable Fly', 'Lateral Raise', 'Hammer Curl', 'Cable Triceps Pushdown'] },
      { key: 'phul_hl', name: 'تضخيم سفلي (Hypertrophy Lower)', nameEn: 'Hypertrophy Lower', muscles: 'أرجل + بطن', musclesEn: 'Legs + Abs', exercises: ['سكوات أمامي 8-12', 'رومانيان ديدليفت', 'ليج إكستنشن', 'ليج كيرل', 'سمانة جالس', 'بطن'], exercisesEn: ['Front Squat 8-12', 'Romanian Deadlift', 'Leg Extension', 'Leg Curl', 'Seated Calf Raise', 'Abs'] },
    ],
  },
  {
    key: 'phat',
    name: 'PHAT (Power Hypertrophy Adaptive Training)',
    nameEn: 'PHAT (Power Hypertrophy Adaptive Training)',
    level: 'متقدم',
    levelEn: 'Advanced',
    daysPerWeek: '5 أيام',
    daysPerWeekEn: '5 days',
    bestFor: 'برنامج لايل ماكدونالد: قوة + تضخيم لأقصى نمو للمتقدمين.',
    bestForEn: "Lyle McDonald's program: power + hypertrophy for maximum growth in advanced lifters.",
    days: [
      { key: 'phat_ub', name: 'قوة الجزء العلوي', nameEn: 'Upper Power', muscles: 'صدر + ظهر + كتف + ذراعين', musclesEn: 'Chest + Back + Shoulders + Arms', exercises: ['سحب أمامي 3-5 تكرار', 'سحب أرضي بالبار', 'بنش برس بالبار 3-5', 'ضغط كتف بالدمبل', 'بايسبس بالبار', 'ترايسبس ضيق'], exercisesEn: ['Lat Pulldown 3-5 reps', 'Barbell Row', 'Barbell Bench Press 3-5', 'Dumbbell Overhead Press', 'Barbell Bicep Curl', 'Close-Grip Bench Press'] },
      { key: 'phat_lb', name: 'قوة الجزء السفلي', nameEn: 'Lower Power', muscles: 'أرجل + سمانة', musclesEn: 'Legs + Calves', exercises: ['سكوات 3-5 تكرار', 'ليج برس', 'ليج كيرل', 'سمانة واقف'], exercisesEn: ['Squat 3-5 reps', 'Leg Press', 'Leg Curl', 'Standing Calf Raise'] },
      { key: 'phat_back', name: 'تضخيم ظهر + كتف خلفي', nameEn: 'Back + Rear Delts Hypertrophy', muscles: 'ظهر + كتف خلفي + بايسبس', musclesEn: 'Back + Rear Delts + Biceps', exercises: ['سحب أرضي 8-12', 'سحب أمامي واسع', 'تجديف بالدمبل', 'رفرفة خلفي', 'بايسبس بالكابل'], exercisesEn: ['Barbell Row 8-12', 'Wide-Grip Lat Pulldown', 'Dumbbell Row', 'Rear Delt Fly', 'Cable Bicep Curl'] },
      { key: 'phat_chest', name: 'تضخيم صدر + كتف', nameEn: 'Chest + Shoulders Hypertrophy', muscles: 'صدر + كتف + ترايسبس', musclesEn: 'Chest + Shoulders + Triceps', exercises: ['بنش مائل بالدمبل 8-12', 'تفتيح بالكابل', 'ضغط كتف بالماكينة', 'رفرفة جانبي', 'ترايسبس بالحبل'], exercisesEn: ['Incline Dumbbell Press 8-12', 'Cable Fly', 'Machine Shoulder Press', 'Lateral Raise', 'Cable Triceps Pushdown'] },
      { key: 'phat_legs', name: 'تضخيم أرجل + بطن', nameEn: 'Legs + Abs Hypertrophy', muscles: 'أرجل + بطن', musclesEn: 'Legs + Abs', exercises: ['سكوات أمامي 8-12', 'رومانيان ديدليفت', 'ليج إكستنشن', 'ليج كيرل', 'سمانة جالس', 'بطن'], exercisesEn: ['Front Squat 8-12', 'Romanian Deadlift', 'Leg Extension', 'Leg Curl', 'Seated Calf Raise', 'Abs'] },
    ],
  },
];

export const getProgram = (key: string) => gymPrograms.find((p) => p.key === key);
