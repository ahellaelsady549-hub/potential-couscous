export interface PhysicalDisease {
  id: string;
  nameAr: string;
  nameEn: string;
  symptomsAr: string[];
  symptomsEn: string[];
  treatmentsAr: string[];
  treatmentsEn: string[];
  sources?: Array<{ nameAr: string; nameEn: string; url: string }>;
  causesAr?: string[];
  causesEn?: string[];
}

export const physicalDiseases: PhysicalDisease[] = [
  {
    id: 'diabetes',
    nameAr: 'السكري',
    nameEn: 'Diabetes',
    symptomsAr: ['العطش الشديد', 'كثرة التبول', 'فقدان الوزن', 'التعب', 'بطء التئام الجروح', 'زغللة العين', 'الجوع المفرط'],
    symptomsEn: ['Excessive thirst', 'Frequent urination', 'Weight loss', 'Fatigue', 'Slow wound healing', 'Blurred vision', 'Excessive hunger'],
    treatmentsAr: ['الإنسولين', 'ميتفورمين', 'غليبنكلاميد', 'تنظيم الغذاء', 'التمارين الرياضية', 'مراقبة السكر يومياً'],
    treatmentsEn: ['Insulin', 'Metformin', 'Glibenclamide', 'Diet regulation', 'Exercise', 'Daily blood sugar monitoring']
  },
  {
    id: 'hypertension',
    nameAr: 'ارتفاع ضغط الدم',
    nameEn: 'Hypertension',
    symptomsAr: ['الصداع', 'ضيق التنفس', 'نزيف الأنف', 'الدوخة', 'ألم الصدر', 'خفقان القلب', 'عدم وضوح الرؤية'],
    symptomsEn: ['Headache', 'Shortness of breath', 'Nosebleeds', 'Dizziness', 'Chest pain', 'Heart palpitations', 'Blurred vision'],
    treatmentsAr: ['أملوديبين', 'لوسارتان', 'هيدروكلوروثيازيد', 'تقليل الملح', 'ممارسة الرياضة', 'تجنب التوتر'],
    treatmentsEn: ['Amlodipine', 'Losartan', 'Hydrochlorothiazide', 'Reducing salt', 'Exercise', 'Stress management']
  },
  {
    id: 'asthma',
    nameAr: 'الربو',
    nameEn: 'Asthma',
    symptomsAr: ['ضيق التنفس', 'صفير الصدر', 'السعال الليلي', 'ضيق الصدر', 'صعوبة التنفس عند المجهود', 'السعال الجاف'],
    symptomsEn: ['Shortness of breath', 'Wheezing', 'Night cough', 'Chest tightness', 'Exercise-induced breathing difficulty', 'Dry cough'],
    treatmentsAr: ['بخاخ سالبوتامول', 'بخاخ كورتيزون', 'مونتيلوكاست', 'تجنب المحفزات', 'خطة طوارئ الربو'],
    treatmentsEn: ['Salbutamol inhaler', 'Corticosteroid inhaler', 'Montelukast', 'Avoiding triggers', 'Asthma action plan']
  },
  {
    id: 'heart_disease',
    nameAr: 'أمراض القلب',
    nameEn: 'Heart Disease',
    symptomsAr: ['ألم الصدر', 'ضيق التنفس', 'خفقان القلب', 'الإرهاق', 'تورم القدمين', 'الدوخة', 'ألم في الذراع الأيسر'],
    symptomsEn: ['Chest pain', 'Shortness of breath', 'Heart palpitations', 'Fatigue', 'Swollen feet', 'Dizziness', 'Left arm pain'],
    treatmentsAr: ['أسبرين', 'ستاتينات', 'حاصرات بيتا', 'مميعات الدم', 'تغيير نمط الحياة', 'جراحة القلب عند الحاجة'],
    treatmentsEn: ['Aspirin', 'Statins', 'Beta-blockers', 'Blood thinners', 'Lifestyle changes', 'Heart surgery if needed']
  },
  {
    id: 'gastritis',
    nameAr: 'التهاب المعدة',
    nameEn: 'Gastritis',
    symptomsAr: ['ألم المعدة', 'الغثيان', 'القيء', 'الانتفاخ', 'حرقة المعدة', 'فقدان الشهية', 'الشعور بالامتلاء'],
    symptomsEn: ['Stomach pain', 'Nausea', 'Vomiting', 'Bloating', 'Heartburn', 'Loss of appetite', 'Feeling full'],
    treatmentsAr: ['أوميبرازول', 'رانيتيدين', 'مضادات الحموضة', 'تجنب الأطعمة الحارة', 'تنظيم الوجبات', 'علاج جرثومة المعدة'],
    treatmentsEn: ['Omeprazole', 'Ranitidine', 'Antacids', 'Avoiding spicy foods', 'Meal regulation', 'H. pylori treatment']
  },
  {
    id: 'kidney_disease',
    nameAr: 'أمراض الكلى',
    nameEn: 'Kidney Disease',
    symptomsAr: ['تورم القدمين', 'التعب', 'تغير لون البول', 'قلة التبول', 'الغثيان', 'الحكة', 'ضيق التنفس'],
    symptomsEn: ['Swollen feet', 'Fatigue', 'Urine color change', 'Decreased urination', 'Nausea', 'Itching', 'Shortness of breath'],
    treatmentsAr: ['غسيل الكلى', 'أدوية الضغط', 'تنظيم البروتين', 'تقليل الصوديوم', 'زراعة الكلى', 'مراقبة السوائل'],
    treatmentsEn: ['Dialysis', 'Blood pressure medications', 'Protein regulation', 'Sodium reduction', 'Kidney transplant', 'Fluid monitoring']
  },
  {
    id: 'liver_disease',
    nameAr: 'أمراض الكبد',
    nameEn: 'Liver Disease',
    symptomsAr: ['اصفرار الجلد', 'ألم البطن', 'تورم البطن', 'الحكة', 'البول الداكن', 'التعب', 'فقدان الشهية'],
    symptomsEn: ['Jaundice', 'Abdominal pain', 'Abdominal swelling', 'Itching', 'Dark urine', 'Fatigue', 'Loss of appetite'],
    treatmentsAr: ['علاج السبب', 'تجنب الكحول', 'أدوية حماية الكبد', 'تنظيم الغذاء', 'زراعة الكبد', 'علاج الفيروسات الكبدية'],
    treatmentsEn: ['Treating the cause', 'Avoiding alcohol', 'Liver protection medications', 'Diet regulation', 'Liver transplant', 'Hepatitis treatment']
  },
  {
    id: 'arthritis',
    nameAr: 'التهاب المفاصل',
    nameEn: 'Arthritis',
    symptomsAr: ['ألم المفاصل', 'تورم المفاصل', 'تيبس صباحي', 'صعوبة الحركة', 'احمرار', 'دفء المفصل', 'ضعف العضلات'],
    symptomsEn: ['Joint pain', 'Joint swelling', 'Morning stiffness', 'Difficulty moving', 'Redness', 'Joint warmth', 'Muscle weakness'],
    treatmentsAr: ['مسكنات الألم', 'مضادات الالتهاب', 'العلاج الطبيعي', 'الكمادات', 'حقن الكورتيزون', 'جراحة المفاصل'],
    treatmentsEn: ['Pain relievers', 'Anti-inflammatories', 'Physical therapy', 'Compresses', 'Cortisone injections', 'Joint surgery']
  },
  {
    id: 'migraine',
    nameAr: 'الصداع النصفي',
    nameEn: 'Migraine',
    symptomsAr: ['صداع شديد في جانب واحد', 'الغثيان', 'الحساسية للضوء', 'الحساسية للصوت', 'اضطرابات بصرية', 'القيء', 'ألم نابض'],
    symptomsEn: ['Severe one-sided headache', 'Nausea', 'Light sensitivity', 'Sound sensitivity', 'Visual disturbances', 'Vomiting', 'Throbbing pain'],
    treatmentsAr: ['تريبتانات', 'مسكنات الألم', 'أدوية وقائية', 'تجنب المحفزات', 'الراحة في غرفة مظلمة', 'بوتوكس للصداع المزمن'],
    treatmentsEn: ['Triptans', 'Pain relievers', 'Preventive medications', 'Avoiding triggers', 'Rest in dark room', 'Botox for chronic migraine']
  },
  {
    id: 'anemia',
    nameAr: 'فقر الدم',
    nameEn: 'Anemia',
    symptomsAr: ['التعب والإرهاق', 'شحوب الجلد', 'ضيق التنفس', 'الدوخة', 'برودة الأطراف', 'خفقان القلب', 'الصداع'],
    symptomsEn: ['Fatigue', 'Pale skin', 'Shortness of breath', 'Dizziness', 'Cold extremities', 'Heart palpitations', 'Headache'],
    treatmentsAr: ['مكملات الحديد', 'فيتامين ب12', 'حمض الفوليك', 'نظام غذائي غني بالحديد', 'نقل الدم', 'علاج السبب'],
    treatmentsEn: ['Iron supplements', 'Vitamin B12', 'Folic acid', 'Iron-rich diet', 'Blood transfusion', 'Treating the cause']
  },
  {
    id: 'thyroid_disorder',
    nameAr: 'اضطرابات الغدة الدرقية',
    nameEn: 'Thyroid Disorders',
    symptomsAr: ['تغير الوزن', 'التعب', 'تساقط الشعر', 'عدم انتظام ضربات القلب', 'الحساسية للحرارة أو البرودة', 'تغير المزاج', 'اضطراب الدورة الشهرية'],
    symptomsEn: ['Weight changes', 'Fatigue', 'Hair loss', 'Irregular heartbeat', 'Temperature sensitivity', 'Mood changes', 'Menstrual irregularities'],
    treatmentsAr: ['ليفوثيروكسين', 'أدوية مضادة للدرقية', 'اليود المشع', 'استئصال الغدة', 'مراقبة مستويات الهرمونات'],
    treatmentsEn: ['Levothyroxine', 'Anti-thyroid medications', 'Radioactive iodine', 'Thyroidectomy', 'Hormone level monitoring']
  },
  {
    id: 'pneumonia',
    nameAr: 'الالتهاب الرئوي',
    nameEn: 'Pneumonia',
    symptomsAr: ['السعال مع البلغم', 'الحمى', 'ضيق التنفس', 'ألم الصدر', 'القشعريرة', 'التعب', 'فقدان الشهية'],
    symptomsEn: ['Cough with phlegm', 'Fever', 'Shortness of breath', 'Chest pain', 'Chills', 'Fatigue', 'Loss of appetite'],
    treatmentsAr: ['المضادات الحيوية', 'خافضات الحرارة', 'الراحة والسوائل', 'الأكسجين', 'أدوية السعال', 'العلاج في المستشفى للحالات الشديدة'],
    treatmentsEn: ['Antibiotics', 'Fever reducers', 'Rest and fluids', 'Oxygen', 'Cough medications', 'Hospitalization for severe cases']
  },
  {
    id: 'ibs',
    nameAr: 'القولون العصبي',
    nameEn: 'Irritable Bowel Syndrome',
    symptomsAr: ['ألم البطن', 'الانتفاخ', 'الإسهال أو الإمساك', 'الغازات', 'تغير شكل البراز', 'الشعور بعدم إفراغ الأمعاء', 'المغص'],
    symptomsEn: ['Abdominal pain', 'Bloating', 'Diarrhea or constipation', 'Gas', 'Change in stool form', 'Incomplete evacuation', 'Cramping'],
    treatmentsAr: ['تعديل النظام الغذائي', 'الألياف', 'مضادات التشنج', 'البروبيوتيك', 'إدارة التوتر', 'تجنب الأطعمة المهيجة'],
    treatmentsEn: ['Diet modification', 'Fiber', 'Antispasmodics', 'Probiotics', 'Stress management', 'Avoiding trigger foods']
  },
  {
    id: 'urinary_infection',
    nameAr: 'التهاب المسالك البولية',
    nameEn: 'Urinary Tract Infection',
    symptomsAr: ['حرقة عند التبول', 'كثرة التبول', 'ألم أسفل البطن', 'بول عكر', 'دم في البول', 'رائحة كريهة للبول', 'الحمى'],
    symptomsEn: ['Burning urination', 'Frequent urination', 'Lower abdominal pain', 'Cloudy urine', 'Blood in urine', 'Foul-smelling urine', 'Fever'],
    treatmentsAr: ['المضادات الحيوية', 'شرب السوائل بكثرة', 'مسكنات الألم', 'تجنب المهيجات', 'فحص البول الدوري'],
    treatmentsEn: ['Antibiotics', 'Drinking plenty of fluids', 'Pain relievers', 'Avoiding irritants', 'Periodic urine tests']
  },
  {
    id: 'back_pain',
    nameAr: 'آلام الظهر',
    nameEn: 'Back Pain',
    symptomsAr: ['ألم أسفل الظهر', 'تيبس العضلات', 'صعوبة الحركة', 'ألم يمتد للساق', 'ضعف العضلات', 'تنميل', 'ألم يزداد مع الجلوس'],
    symptomsEn: ['Lower back pain', 'Muscle stiffness', 'Difficulty moving', 'Pain radiating to leg', 'Muscle weakness', 'Numbness', 'Pain worsening with sitting'],
    treatmentsAr: ['العلاج الطبيعي', 'مسكنات الألم', 'الكمادات الدافئة', 'تمارين التقوية', 'تصحيح الوضعية', 'الجراحة للحالات الشديدة'],
    treatmentsEn: ['Physical therapy', 'Pain relievers', 'Warm compresses', 'Strengthening exercises', 'Posture correction', 'Surgery for severe cases']
  },
  {
    id: 'allergy',
    nameAr: 'الحساسية',
    nameEn: 'Allergies',
    symptomsAr: ['العطس', 'سيلان الأنف', 'حكة العينين', 'الطفح الجلدي', 'صعوبة التنفس', 'تورم الوجه', 'السعال'],
    symptomsEn: ['Sneezing', 'Runny nose', 'Itchy eyes', 'Skin rash', 'Difficulty breathing', 'Facial swelling', 'Cough'],
    treatmentsAr: ['مضادات الهيستامين', 'بخاخات الأنف', 'قطرات العين', 'تجنب المحفزات', 'العلاج المناعي', 'حقنة الإبينفرين للحالات الشديدة'],
    treatmentsEn: ['Antihistamines', 'Nasal sprays', 'Eye drops', 'Avoiding triggers', 'Immunotherapy', 'Epinephrine for severe cases']
  },
  {
    id: 'flu',
    nameAr: 'الإنفلونزا',
    nameEn: 'Influenza',
    symptomsAr: ['الحمى', 'السعال', 'آلام الجسم', 'الصداع', 'التعب', 'التهاب الحلق', 'سيلان الأنف'],
    symptomsEn: ['Fever', 'Cough', 'Body aches', 'Headache', 'Fatigue', 'Sore throat', 'Runny nose'],
    treatmentsAr: ['الراحة والسوائل', 'خافضات الحرارة', 'مضادات الفيروسات', 'مسكنات الألم', 'تطعيم الإنفلونزا السنوي'],
    treatmentsEn: ['Rest and fluids', 'Fever reducers', 'Antivirals', 'Pain relievers', 'Annual flu vaccination']
  },
  {
    id: 'skin_infection',
    nameAr: 'التهابات الجلد',
    nameEn: 'Skin Infections',
    symptomsAr: ['احمرار الجلد', 'الحكة', 'التورم', 'الألم', 'الحرارة الموضعية', 'الإفرازات', 'تقشر الجلد'],
    symptomsEn: ['Skin redness', 'Itching', 'Swelling', 'Pain', 'Local warmth', 'Discharge', 'Skin peeling'],
    treatmentsAr: ['المضادات الحيوية الموضعية', 'مضادات الفطريات', 'كريمات الكورتيزون', 'تنظيف الجلد', 'المضادات الحيوية الفموية'],
    treatmentsEn: ['Topical antibiotics', 'Antifungals', 'Cortisone creams', 'Skin cleansing', 'Oral antibiotics']
  },
  {
    id: 'osteoporosis',
    nameAr: 'هشاشة العظام',
    nameEn: 'Osteoporosis',
    symptomsAr: ['الكسور السهلة', 'ألم الظهر', 'انحناء الظهر', 'قصر القامة', 'ضعف العظام', 'آلام المفاصل'],
    symptomsEn: ['Easy fractures', 'Back pain', 'Stooped posture', 'Height loss', 'Weak bones', 'Joint pain'],
    treatmentsAr: ['مكملات الكالسيوم', 'فيتامين د', 'البيسفوسفونات', 'التمارين الرياضية', 'تجنب السقوط', 'فحص كثافة العظام'],
    treatmentsEn: ['Calcium supplements', 'Vitamin D', 'Bisphosphonates', 'Exercise', 'Fall prevention', 'Bone density testing']
  },
  {
    id: 'physical_extra_retinal_detachment',
    nameAr: 'انفصال الشبكية',
    nameEn: 'Retinal Detachment',
    symptomsAr: ['زيادة مفاجئة في العوائم البصرية', 'ومضات ضوئية', 'ظل أو ستارة في مجال الرؤية', 'تشوش الرؤية'],
    symptomsEn: ['Sudden increase in floaters', 'Flashes of light', 'A shadow or curtain in the field of vision', 'Blurred vision'],
    treatmentsAr: ['إغلاق تمزقات الشبكية بالليزر لدى اختصاصي العيون', 'تجميد التمزقات بالتبريد لدى اختصاصي العيون', 'جراحة لإعادة تثبيت الشبكية عند الحاجة'],
    treatmentsEn: ['Laser treatment to seal retinal tears by an eye specialist', 'Freezing treatment (cryopexy) by an eye specialist', 'Surgery to reattach the retina when needed'],
    sources: [
      { nameAr: 'المعهد الوطني الأمريكي للعيون', nameEn: 'National Eye Institute', url: 'https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/retinal-detachment' }
    ]
  },
  {
    id: 'physical_extra_sickle_cell_disease',
    nameAr: 'مرض الخلايا المنجلية',
    nameEn: 'Sickle Cell Disease',
    symptomsAr: ['تورم مؤلم في اليدين والقدمين', 'التعب المرتبط بفقر الدم', 'اصفرار الجلد أو بياض العينين', 'نوبات ألم شديدة'],
    symptomsEn: ['Painful swelling of the hands and feet', 'Fatigue related to anemia', 'Yellowing of the skin or whites of the eyes', 'Episodes of severe pain'],
    treatmentsAr: ['نقل الدم للحالات المناسبة بإشراف الفريق الطبي', 'زرع نخاع العظم أو الخلايا الجذعية لحالات مختارة', 'العلاج الجيني للمرضى المؤهلين وتحت إشراف متخصص'],
    treatmentsEn: ['Blood transfusion for appropriate cases under medical care', 'Bone marrow or stem cell transplantation for selected cases', 'Gene therapy for eligible patients under specialist care'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/sicklecelldisease.html' }
    ]
  },
  {
    id: 'physical_extra_stroke',
    nameAr: 'السكتة الدماغية',
    nameEn: 'Stroke',
    symptomsAr: ['خدر أو ضعف مفاجئ في الوجه أو الذراع أو الساق، غالباً في جهة واحدة', 'ارتباك مفاجئ أو صعوبة في الكلام أو فهمه', 'اضطراب مفاجئ في الرؤية أو التوازن', 'صداع شديد مفاجئ'],
    symptomsEn: ['Sudden numbness or weakness of the face, arm, or leg, often on one side', 'Sudden confusion or difficulty speaking or understanding speech', 'Sudden vision or balance problems', 'Sudden severe headache'],
    treatmentsAr: ['علاج إسعافي في المستشفى يختاره الفريق الطبي حسب نوع السكتة', 'تأهيل بعد السكتة لاستعادة المهارات المتأثرة', 'رعاية طبية للحد من خطر حدوث سكتة أخرى'],
    treatmentsEn: ['Emergency hospital treatment selected according to stroke type', 'Post-stroke rehabilitation to regain affected skills', 'Medical care to reduce the risk of another stroke'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/stroke.html' }
    ]
  },
  {
    id: 'physical_extra_deep_vein_thrombosis',
    nameAr: 'تجلط الأوردة العميقة',
    nameEn: 'Deep Vein Thrombosis',
    symptomsAr: ['تورم في الجزء المصاب من الجسم', 'ألم أو إيلام في المنطقة المصابة', 'دفء واحمرار الجلد فوق الوريد'],
    symptomsEn: ['Swelling in the affected part of the body', 'Pain or tenderness in the affected area', 'Warmth and skin redness over the vein'],
    treatmentsAr: ['علاج يحدده الطبيب لتخفيف الألم والالتهاب', 'علاج طبي لإذابة الجلطة عند ملاءمته', 'علاج يحدده الطبيب للحد من تكوّن جلطات جديدة'],
    treatmentsEn: ['Clinician-directed treatment to ease pain and inflammation', 'Medical clot-dissolving treatment when appropriate', 'Clinician-directed treatment to prevent new clots'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/deepveinthrombosis.html' }
    ]
  },
  {
    id: 'physical_extra_hemophilia',
    nameAr: 'الناعور',
    nameEn: 'Hemophilia',
    symptomsAr: ['نزف في المفاصل مع تورم أو ألم', 'سهولة حدوث الكدمات', 'نزف يصعب إيقافه بعد الإصابة', 'نزف متكرر من الأنف'],
    symptomsEn: ['Bleeding into joints with swelling or pain', 'Easy bruising', 'Bleeding that is difficult to stop after injury', 'Frequent nosebleeds'],
    treatmentsAr: ['تعويض عامل التخثر الناقص بإشراف اختصاصي', 'علاجات طبية أخرى للسيطرة على النزف وفق الحالة', 'علاج طبيعي لتحسين وظيفة المفاصل عند تأثرها بالنزف'],
    treatmentsEn: ['Replacement of the missing clotting factor under specialist care', 'Other clinician-selected therapies to control bleeding as appropriate', 'Physical therapy to improve joint function when affected by bleeding'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/hemophilia.html' }
    ]
  },
  {
    id: 'physical_extra_chickenpox',
    nameAr: 'جدري الماء',
    nameEn: 'Chickenpox',
    symptomsAr: ['طفح جلدي حاك يتحول إلى بثور مملوءة بالسوائل', 'حمى', 'صداع', 'تعب', 'فقدان الشهية'],
    symptomsEn: ['Itchy rash that develops into fluid-filled blisters', 'Fever', 'Headache', 'Tiredness', 'Loss of appetite'],
    treatmentsAr: ['تدابير لتخفيف الحكة والعناية بالجلد يوصي بها مقدم الرعاية', 'رعاية موجّهة من مقدم الرعاية للحمى والانزعاج', 'علاج مضاد للفيروسات يقرره مقدم الرعاية للفئات الأكثر عرضة للمضاعفات'],
    treatmentsEn: ['Care-provider-recommended measures for itch relief and skin care', 'Care-provider-guided management of fever and discomfort', 'Provider-directed antiviral treatment for people at higher risk of complications'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/chickenpox.html' },
      { nameAr: 'مراكز مكافحة الأمراض والوقاية منها', nameEn: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/chickenpox/treatment/index.html' }
    ]
  },
  {
    id: 'physical_extra_cystic_fibrosis',
    nameAr: 'التليف الكيسي',
    nameEn: 'Cystic Fibrosis',
    symptomsAr: ['مخاط سميك ولزج', 'صعوبات في التنفس', 'التهابات رئوية متكررة'],
    symptomsEn: ['Thick, sticky mucus', 'Breathing problems', 'Repeated lung infections'],
    treatmentsAr: ['علاج طبيعي للصدر ضمن خطة الفريق الطبي', 'علاجات تنفسية يحددها الفريق المختص', 'دعم غذائي متخصص ضمن خطة الرعاية'],
    treatmentsEn: ['Chest physical therapy as part of the medical care plan', 'Respiratory therapies selected by the care team', 'Specialist nutritional therapy as part of care'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/cysticfibrosis.html' }
    ]
  },
  {
    id: 'physical_extra_acne',
    nameAr: 'حب الشباب',
    nameEn: 'Acne',
    symptomsAr: ['بثور أو رؤوس سوداء وبيضاء', 'ظهور البثور غالباً على الوجه أو الرقبة أو الظهر أو الصدر أو الكتفين', 'قد تترك البثور ندبات'],
    symptomsEn: ['Pimples, blackheads, or whiteheads', 'Pimples often appear on the face, neck, back, chest, or shoulders', 'Pimples may leave scars'],
    causesAr: ['تنسد بصيلات الشعر تحت الجلد فتتكون البثور.', 'قد تسهم التغيرات الهرمونية، مثل تغيرات سن المراهقة أو الحمل، في حدوثه؛ ولا يُعرف سبب دقيق واحد.'],
    causesEn: ['Hair follicles under the skin become clogged, forming pimples.', 'Hormonal changes, such as those during adolescence or pregnancy, may play a role; there is no single precisely known cause.'],
    treatmentsAr: ['تنظيف البشرة بلطف', 'استخدام مستحضرات أو أدوية علاجية يوصي بها مقدم الرعاية', 'تجنب لمس البشرة أو العبث بالبثور'],
    treatmentsEn: ['Clean the skin gently', 'Use treatment creams or medicines recommended by a health care provider', 'Avoid touching or picking at the skin'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/acne.html' }
    ]
  },
  {
    id: 'physical_extra_addison_disease',
    nameAr: 'مرض أديسون',
    nameEn: 'Addison Disease',
    symptomsAr: ['فقدان الوزن', 'ضعف العضلات', 'إرهاق يزداد تدريجياً', 'انخفاض ضغط الدم', 'اسمرار أو بقع داكنة في الجلد'],
    symptomsEn: ['Weight loss', 'Muscle weakness', 'Fatigue that worsens over time', 'Low blood pressure', 'Darkening or patches of darker skin'],
    causesAr: ['يحدث عندما لا تنتج الغدتان الكظريتان كمية كافية من هرموناتهما.', 'غالباً ما يسبب ذلك مهاجمة الجهاز المناعي لأنسجة الغدتين؛ وقد تشمل الأسباب الأخرى بعض العدوى أو السرطان.'],
    causesEn: ['It occurs when the adrenal glands do not make enough of their hormones.', 'It is usually caused by the immune system attacking the glands; other causes can include some infections or cancer.'],
    treatmentsAr: ['تعويض الهرمونات الناقصة بخطة يحددها الطبيب', 'متابعة طبية منتظمة لمراقبة الحالة والعلاج', 'حمل بطاقة تعريف طبية توضح الحالة وخطة الطوارئ'],
    treatmentsEn: ['Replace deficient hormones under a clinician-directed plan', 'Have regular medical follow-up to monitor the condition and treatment', 'Carry medical identification describing the condition and emergency plan'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/addisondisease.html' }
    ]
  },
  {
    id: 'physical_extra_atrial_fibrillation',
    nameAr: 'الرجفان الأذيني',
    nameEn: 'Atrial Fibrillation',
    symptomsAr: ['إرهاق شديد', 'خفقان أو تسارع أو عدم انتظام ضربات القلب', 'ضيق التنفس، خاصة عند الاستلقاء أو بذل المجهود', 'ألم الصدر', 'دوخة أو إغماء'],
    symptomsEn: ['Extreme fatigue', 'Heart palpitations or a fast or irregular heartbeat', 'Shortness of breath, especially when lying down or exercising', 'Chest pain', 'Dizziness or fainting'],
    causesAr: ['تغيرات في أنسجة القلب أو الإشارات الكهربائية التي تنظّم نبضه.', 'قد ترتبط الحالة بارتفاع ضغط الدم أو أمراض القلب أو التقدم في العمر، وأحياناً لا يُعرف سببها.'],
    causesEn: ['Changes in heart tissue or the electrical signals that regulate the heartbeat.', 'It may be associated with high blood pressure, heart disease, or aging; sometimes the cause is unknown.'],
    treatmentsAr: ['أدوية يختارها الطبيب للتحكم في معدل النبض أو إيقاعه', 'رعاية طبية للحد من خطر الجلطات حسب تقييم الطبيب', 'تغييرات صحية في نمط الحياة، وقد تُستخدم إجراءات متخصصة عند الحاجة'],
    treatmentsEn: ['Clinician-selected medicines to control heart rate or rhythm', 'Medical care to reduce clot risk as assessed by a clinician', 'Heart-healthy lifestyle changes; specialist procedures may be used when needed'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/atrialfibrillation.html' }
    ]
  },
  {
    id: 'physical_extra_aortic_aneurysm',
    nameAr: 'تمدد الشريان الأورطي',
    nameEn: 'Aortic Aneurysm',
    symptomsAr: ['قد لا تظهر أعراض', 'ألم في الصدر أو الظهر أو البطن أو الكتف أو الرقبة أو الفك', 'صعوبة البلع أو ضيق التنفس', 'في حالات التمزق: ألم مفاجئ شديد أو دوخة أو تسارع ضربات القلب'],
    symptomsEn: ['There may be no symptoms', 'Pain in the chest, back, abdomen, shoulder, neck, or jaw', 'Difficulty swallowing or shortness of breath', 'If rupture occurs: sudden severe pain, dizziness, or a fast heartbeat'],
    causesAr: ['يضعف جدار الشريان الأورطي تدريجياً، وقد لا يُعرف السبب الدقيق.', 'قد تشمل الأسباب تصلب الشرايين أو إصابة الشريان أو بعض العدوى أو الحالات الوراثية.'],
    causesEn: ['The aortic wall weakens over time, and the exact cause may be unknown.', 'Possible causes include atherosclerosis, injury to the aorta, some infections, or inherited conditions.'],
    treatmentsAr: ['متابعة حجم التمدد بالتصوير وفق خطة الطبيب', 'إدارة ضغط الدم والكوليسترول وتجنب التدخين بالتنسيق مع مقدم الرعاية', 'إصلاح جراحي للتمددات الكبيرة أو سريعة النمو عند الحاجة'],
    treatmentsEn: ['Monitor aneurysm size with imaging as directed by a clinician', 'Manage blood pressure and cholesterol and avoid smoking with health care guidance', 'Surgical repair for large or rapidly growing aneurysms when needed'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/aorticaneurysm.html' }
    ]
  },
  {
    id: 'physical_extra_alzheimers_disease',
    nameAr: 'مرض ألزهايمر',
    nameEn: "Alzheimer's Disease",
    symptomsAr: ['صعوبة تذكر الأحداث الحديثة أو أسماء أشخاص معروفين', 'الضياع في أماكن مألوفة أو تكرار السؤال نفسه', 'صعوبة الكلام أو القراءة أو الكتابة', 'تراجع القدرة على العناية بالنفس والأنشطة اليومية'],
    symptomsEn: ['Difficulty remembering recent events or familiar people’s names', 'Getting lost in familiar places or repeating the same question', 'Difficulty speaking, reading, or writing', 'Declining ability to care for oneself or manage daily activities'],
    causesAr: ['لا يُفهم السبب بالكامل؛ يُعتقد أن تغيرات مرتبطة بالعمر في الدماغ تتفاعل مع عوامل وراثية وصحية ونمط الحياة.', 'يزداد الخطر مع التقدم في العمر، وقد يسهم التاريخ العائلي في زيادة القابلية.'],
    causesEn: ['The cause is not fully understood; age-related brain changes are thought to interact with genetic, health, and lifestyle factors.', 'Risk increases with age, and family history may contribute to susceptibility.'],
    treatmentsAr: ['أدوية قد تساعد على إبطاء تفاقم بعض الأعراض لفترة محدودة، يحددها الطبيب', 'رعاية داعمة تساعد على تلبية احتياجات الحياة اليومية', 'التخطيط للرعاية والاستفادة من دعم مقدمي الرعاية والأسرة'],
    treatmentsEn: ['Clinician-selected medicines may help slow some symptoms for a limited time', 'Supportive care to help with daily needs', 'Care planning and support for caregivers and family'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/alzheimersdisease.html' }
    ]
  },
  {
    id: 'physical_extra_acute_lymphocytic_leukemia',
    nameAr: 'ابيضاض الدم اللمفاوي الحاد',
    nameEn: 'Acute Lymphocytic Leukemia',
    symptomsAr: ['ضعف أو تعب', 'حمى أو تعرق ليلي', 'سهولة حدوث الكدمات أو النزف', 'ضيق التنفس أو فقدان الوزن والشهية', 'ألم العظام أو البطن أو تورم العقد اللمفاوية'],
    symptomsEn: ['Weakness or fatigue', 'Fever or night sweats', 'Easy bruising or bleeding', 'Shortness of breath or weight and appetite loss', 'Bone or abdominal pain, or swollen lymph nodes'],
    causesAr: ['ينشأ المرض عندما تحدث تغيرات في المادة الوراثية لخلايا نخاع العظم.', 'السبب الدقيق لهذه التغيرات غير معروف، لكن بعض العوامل قد تزيد خطر الإصابة.'],
    causesEn: ['The disease develops when genetic changes occur in bone marrow cells.', 'The exact cause of these changes is unknown, although some factors may increase the risk.'],
    treatmentsAr: ['العلاج الكيميائي ضمن خطة اختصاصية', 'العلاج الإشعاعي في حالات يحددها الفريق الطبي', 'زرع الخلايا الجذعية لبعض المرضى بعد تقييم اختصاصي'],
    treatmentsEn: ['Chemotherapy as part of specialist-directed care', 'Radiation therapy in cases selected by the medical team', 'Stem cell transplant for some patients after specialist assessment'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/acutelymphocyticleukemia.html' }
    ]
  },
  {
    id: 'physical_extra_rheumatoid_arthritis',
    nameAr: 'التهاب المفاصل الروماتويدي',
    nameEn: 'Rheumatoid Arthritis',
    symptomsAr: ['ألم أو تيبس المفاصل، غالباً أسوأ صباحاً أو بعد عدم الحركة', 'تورم المفاصل وإيلامها واحمرارها أو دفؤها', 'إرهاق أو حمى أو فقدان الشهية', 'عقيدات صلبة تحت الجلد قرب المفاصل'],
    symptomsEn: ['Joint pain or stiffness, often worse in the morning or after inactivity', 'Joint swelling, tenderness, redness, or warmth', 'Fatigue, fever, or loss of appetite', 'Firm nodules under the skin near joints'],
    causesAr: ['السبب غير معروف؛ قد تتفاعل عوامل وراثية وبيئية وهرمونية.', 'قد تحفز عوامل مثل دخان السجائر الأعراض لدى بعض الأشخاص، ولا تعني عوامل الخطر أن المرض سيحدث حتماً.'],
    causesEn: ['The cause is unknown; genetic, environmental, and hormonal factors may interact.', 'Factors such as cigarette smoke may trigger symptoms in some people, but risk factors do not mean the disease will inevitably occur.'],
    treatmentsAr: ['متابعة مبكرة مع اختصاصي لتقليل الأعراض وتلف المفاصل', 'نشاط بدني مناسب والحفاظ على وزن صحي وفق إرشاد مقدم الرعاية', 'تجنب إصابات المفاصل والحركات المتكررة المجهدة'],
    treatmentsEn: ['Early specialist care to reduce symptoms and joint damage', 'Appropriate physical activity and maintaining a healthy weight with clinician guidance', 'Avoiding joint injuries and repetitive strenuous motions'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/rheumatoidarthritis.html' }
    ]
  },
  {
    id: 'physical_extra_osteoarthritis',
    nameAr: 'الفصال العظمي',
    nameEn: 'Osteoarthritis',
    symptomsAr: ['ألم عند تحريك المفصل وقد يتحسن بالراحة', 'تيبس بعد الاستيقاظ أو الراحة', 'تورم المفاصل بعد استخدامها', 'نقص مدى الحركة أو شعور بعدم ثبات المفصل'],
    symptomsEn: ['Pain with movement that may improve with rest', 'Stiffness after waking or resting', 'Joint swelling after use', 'Reduced range of motion or a feeling that the joint is unstable'],
    causesAr: ['يتحلل الغضروف الذي يغطي نهايات العظام في المفصل، والسبب الدقيق غير محسوم.', 'يزداد الاحتمال مع العمر والوزن الزائد وإصابة أو جراحة سابقة للمفصل أو الإفراط في استخدامه.'],
    causesEn: ['The cartilage covering the ends of bones in a joint breaks down; the exact cause is uncertain.', 'Risk increases with age, excess weight, previous joint injury or surgery, or joint overuse.'],
    treatmentsAr: ['تمارين لتحسين القوة والمرونة والتوازن', 'إنقاص الوزن عند الحاجة لتخفيف الضغط على المفاصل', 'دعامات أو نعال طبية ملائمة يوصي بها مقدم الرعاية'],
    treatmentsEn: ['Exercises to improve strength, flexibility, and balance', 'Weight loss when appropriate to reduce joint stress', 'Clinician-fitted braces or shoe inserts when recommended'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/osteoarthritis.html' }
    ]
  },
  {
    id: 'physical_extra_coronary_artery_disease',
    nameAr: 'مرض الشريان التاجي',
    nameEn: 'Coronary Artery Disease',
    symptomsAr: ['قد لا تظهر أعراض لدى بعض الأشخاص', 'ضغط أو ضيق أو ألم في الصدر قد يمتد إلى الرقبة أو الفك أو الكتف أو الذراع', 'ضيق التنفس', 'تعب غير معتاد، وقد تسوء الأعراض مع النشاط أو التوتر'],
    symptomsEn: ['Some people have no symptoms', 'Chest pressure, tightness, or pain that may spread to the neck, jaw, shoulder, or arm', 'Shortness of breath', 'Unusual fatigue; symptoms may worsen with activity or stress'],
    causesAr: ['تتراكم اللويحات المكوّنة من الدهون والكوليسترول والكالسيوم ومواد أخرى داخل الشرايين التاجية.', 'قد تسهم عوامل مثل التدخين وقلة النشاط والوزن الزائد وارتفاع ضغط الدم أو الكوليسترول أو سكر الدم في الخطر.'],
    causesEn: ['Plaque made of fat, cholesterol, calcium, and other substances builds up in the coronary arteries.', 'Smoking, inactivity, excess weight, high blood pressure or cholesterol, and high blood glucose can contribute to risk.'],
    treatmentsAr: ['تغييرات صحية للقلب في الغذاء والنشاط البدني بالتنسيق مع مقدم الرعاية', 'متابعة طبية لضبط عوامل الخطر والحالات المصاحبة', 'إجراءات لإعادة تدفق الدم، مثل القسطرة أو الجراحة، إذا أوصى بها الفريق الطبي'],
    treatmentsEn: ['Heart-healthy dietary and physical-activity changes with clinician guidance', 'Medical follow-up to manage risk factors and related conditions', 'Procedures to restore blood flow, such as angioplasty or surgery, when recommended by the care team'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/coronaryarterydisease.html' }
    ]
  },
  {
    id: 'physical_extra_heart_valve_disease',
    nameAr: 'مرض صمامات القلب',
    nameEn: 'Heart Valve Disease',
    symptomsAr: ['قد لا تظهر أعراض', 'ضيق التنفس أو التعب', 'تورم القدمين أو الكاحلين أو البطن', 'ألم الصدر مع النشاط أو دوخة أو إغماء'],
    symptomsEn: ['There may be no symptoms', 'Shortness of breath or fatigue', 'Swelling in the feet, ankles, or abdomen', 'Chest pain with activity, dizziness, or fainting'],
    causesAr: ['قد تكون الحالة خلقية أو تتطور مع التقدم في العمر أو وجود أمراض تؤثر في القلب.', 'قد تتضرر الصمامات بسبب حالات مثل الحمى الروماتيزمية أو التهاب الشغاف أو النوبة القلبية.'],
    causesEn: ['The condition may be congenital or develop with aging or other conditions affecting the heart.', 'Valve damage may follow conditions such as rheumatic fever, endocarditis, or a heart attack.'],
    treatmentsAr: ['متابعة طبية منتظمة لمراقبة وظيفة الصمام والقلب', 'علاج يحدده الطبيب بحسب نوع المرض وأعراضه', 'إجراء أو جراحة لإصلاح الصمام أو استبداله عند الحاجة'],
    treatmentsEn: ['Regular medical follow-up to monitor valve and heart function', 'Clinician-directed care based on the valve problem and symptoms', 'A procedure or surgery to repair or replace the valve when needed'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/heartvalvediseases.html' }
    ]
  },
  {
    id: 'physical_extra_peripheral_arterial_disease',
    nameAr: 'مرض الشرايين الطرفية',
    nameEn: 'Peripheral Arterial Disease',
    symptomsAr: ['قد لا تظهر أعراض', 'ألم أو خدر أو ثقل في عضلات الساق عند المشي أو صعود الدرج', 'ضعف أو غياب النبض في الساقين أو القدمين', 'قروح بطيئة الالتئام أو شحوب أو ازرقاق الجلد'],
    symptomsEn: ['There may be no symptoms', 'Leg muscle pain, numbness, or heaviness when walking or climbing stairs', 'Weak or absent pulses in the legs or feet', 'Slow-healing sores or pale or bluish skin'],
    causesAr: ['تتراكم اللويحات على جدران الشرايين التي تغذي الذراعين والساقين فتضيقها أو تسدها.', 'التدخين عامل خطر رئيسي، كما يزيد الخطر مع التقدم في العمر والسكري وارتفاع الكوليسترول أو الضغط.'],
    causesEn: ['Plaque builds up in arteries supplying the arms and legs, narrowing or blocking them.', 'Smoking is a major risk factor; age, diabetes, high cholesterol, and high blood pressure also increase risk.'],
    treatmentsAr: ['تغييرات نمط الحياة، بما فيها النشاط البدني وتعديل الغذاء', 'متابعة طبية لإدارة ضغط الدم والكوليسترول وعوامل الخطر الأخرى', 'إجراء أو جراحة لتحسين تدفق الدم في بعض الحالات'],
    treatmentsEn: ['Lifestyle changes, including physical activity and dietary changes', 'Medical follow-up to manage blood pressure, cholesterol, and other risk factors', 'A procedure or surgery to improve blood flow in some cases'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/peripheralarterialdisease.html' }
    ]
  },
  {
    id: 'physical_extra_heart_attack',
    nameAr: 'النوبة القلبية',
    nameEn: 'Heart Attack',
    symptomsAr: ['ضغط أو ألم أو امتلاء في منتصف الصدر أو جانبه الأيسر', 'ضيق التنفس', 'ألم أو انزعاج في الذراعين أو الظهر أو الكتفين أو الرقبة أو الفك أو أعلى البطن', 'غثيان أو دوخة أو تعرق بارد أو خفقان'],
    symptomsEn: ['Pressure, pain, or fullness in the middle or left side of the chest', 'Shortness of breath', 'Pain or discomfort in the arms, back, shoulders, neck, jaw, or upper abdomen', 'Nausea, dizziness, cold sweat, or palpitations'],
    causesAr: ['غالباً ما تسد جلطة دموية شرياناً تاجياً بعد تراكم اللويحات وتمزقها.', 'قد تسبب تشنجات الشريان التاجي الشديدة النوبة القلبية في حالات أقل شيوعاً.'],
    causesEn: ['Most often, a blood clot blocks a coronary artery after plaque builds up and ruptures.', 'Severe coronary artery spasms can cause a heart attack less commonly.'],
    treatmentsAr: ['طلب الإسعاف فوراً عند الاشتباه بالنوبة القلبية', 'علاج عاجل في المستشفى لاستعادة تدفق الدم وتحديده من قبل الفريق الطبي', 'تأهيل قلبي وتغييرات نمط الحياة خلال التعافي وفق خطة الرعاية'],
    treatmentsEn: ['Call emergency services immediately if a heart attack is suspected', 'Urgent hospital treatment to restore blood flow, determined by the medical team', 'Cardiac rehabilitation and lifestyle changes during recovery as part of the care plan'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/heartattack.html' }
    ]
  },
  {
    id: 'physical_extra_congenital_heart_defects',
    nameAr: 'عيوب القلب الخلقية',
    nameEn: 'Congenital Heart Defects',
    symptomsAr: ['ازرقاق الجلد أو الشفتين أو الأظافر', 'تعب غير معتاد، خاصة أثناء الرضاعة', 'ضعف تدفق الدم', 'تنفس سريع أو صعب', 'نفخة قلبية'],
    symptomsEn: ['Bluish skin, lips, or fingernails', 'Unusual fatigue, especially during feeding', 'Poor blood flow', 'Fast or difficult breathing', 'Heart murmur'],
    causesAr: ['تحدث عندما لا ينمو قلب الجنين بشكل طبيعي أثناء الحمل.', 'السبب غالباً غير معروف؛ وقد تسبب تغيرات جينية بعض العيوب، وقد تكون موروثة أو تحدث أثناء الحمل.'],
    causesEn: ['They occur when the fetal heart does not develop normally during pregnancy.', 'The cause is often unknown; genetic changes can cause some defects and may be inherited or occur during pregnancy.'],
    treatmentsAr: ['متابعة متخصصة لمراقبة العيب ووظيفة القلب', 'إجراءات أو جراحة لإصلاح العيب عندما يوصي بها فريق القلب', 'رعاية داعمة مخصصة بحسب نوع العيب وشدته'],
    treatmentsEn: ['Specialist follow-up to monitor the defect and heart function', 'Procedures or surgery to repair the defect when recommended by the cardiac team', 'Individualized supportive care based on the type and severity of the defect'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/congenitalheartdefects.html' }
    ]
  },
  {
    id: 'physical_extra_breast_cancer',
    nameAr: 'سرطان الثدي',
    nameEn: 'Breast Cancer',
    symptomsAr: ['كتلة أو سماكة جديدة في الثدي أو قربه أو تحت الإبط', 'تغير حجم الثدي أو شكله', 'تغضن الجلد أو انقلاب الحلمة إلى الداخل', 'إفراز غير الحليب من الحلمة أو احمرار وتقشر الجلد أو ألم الثدي'],
    symptomsEn: ['A new lump or thickening in or near the breast or armpit', 'A change in breast size or shape', 'Dimpling of the skin or an inward-turning nipple', 'Nipple discharge other than milk, red or scaly skin, or breast pain'],
    causesAr: ['ينشأ عندما تحدث تغيرات في المادة الوراثية لخلايا الثدي فتنمو خارج السيطرة؛ وقد لا يُعرف سبب هذه التغيرات.', 'قد تكون بعض التغيرات الجينية موروثة، كما قد تؤثر عوامل نمط الحياة والبيئة في الخطر.'],
    causesEn: ['It develops when genetic changes cause breast cells to grow out of control; the cause of these changes may be unknown.', 'Some genetic changes may be inherited, and lifestyle and environmental factors can also affect risk.'],
    treatmentsAr: ['جراحة يحدد نوعها الفريق المعالج بحسب الحالة', 'علاج إشعاعي عند ملاءمته', 'علاج دوائي مثل العلاج الكيميائي أو الهرموني أو الموجّه وفق خصائص الورم'],
    treatmentsEn: ['Surgery selected by the care team for the individual case', 'Radiation therapy when appropriate', 'Medication such as chemotherapy, hormone therapy, or targeted therapy based on tumor features'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/breastcancer.html' }
    ]
  },
  {
    id: 'physical_extra_lung_cancer',
    nameAr: 'سرطان الرئة',
    nameEn: 'Lung Cancer',
    symptomsAr: ['سعال لا يزول أو يزداد سوءاً', 'سعال مصحوب بالدم', 'ألم الصدر أو ضيق التنفس أو صفير', 'بحة الصوت أو فقدان الشهية أو الوزن أو التعب'],
    symptomsEn: ['A cough that does not go away or worsens', 'Coughing up blood', 'Chest pain, shortness of breath, or wheezing', 'Hoarseness, appetite or weight loss, or fatigue'],
    causesAr: ['ينشأ في أنسجة الرئة، غالباً في الخلايا المبطنة للممرات الهوائية.', 'التدخين أهم عوامل الخطر؛ وتشمل العوامل الأخرى التدخين السلبي وبعض التعرضات المهنية أو الإشعاعية وتلوث الهواء والتاريخ العائلي.'],
    causesEn: ['It forms in lung tissue, usually in cells lining the air passages.', 'Smoking is the most important risk factor; others include secondhand smoke, some workplace or radiation exposures, air pollution, and family history.'],
    treatmentsAr: ['جراحة لبعض الحالات وفق نوع الورم ومرحلته', 'علاج إشعاعي وفق تقييم الفريق الطبي', 'علاج دوائي كيميائي أو مناعي أو موجّه بحسب نوع السرطان ومرحلته'],
    treatmentsEn: ['Surgery for some cases depending on cancer type and stage', 'Radiation therapy as assessed by the medical team', 'Drug treatment such as chemotherapy, immunotherapy, or targeted therapy based on cancer type and stage'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/lungcancer.html' }
    ]
  },
  {
    id: 'physical_extra_prostate_cancer',
    nameAr: 'سرطان البروستاتا',
    nameEn: 'Prostate Cancer',
    symptomsAr: ['قد لا تظهر أعراض، خاصة في البداية', 'ضعف تدفق البول أو صعوبة بدئه أو توقفه وعودته', 'الحاجة الملحة أو المتكررة للتبول، خصوصاً ليلاً', 'ألم أو حرقة عند التبول أو دم في البول أو السائل المنوي', 'ألم مستمر أسفل الظهر أو الوركين أو الحوض'],
    symptomsEn: ['There may be no symptoms, especially early on', 'A weak urine stream or difficulty starting or stopping urination', 'Urgent or frequent urination, especially at night', 'Pain or burning with urination, or blood in urine or semen', 'Persistent pain in the lower back, hips, or pelvis'],
    causesAr: ['يحدث عند تغير المادة الوراثية لخلايا البروستاتا؛ والسبب الدقيق غير معروف غالباً.', 'قد تكون بعض التغيرات الجينية موروثة أو تحدث خلال الحياة، ويزداد الاحتمال مع العمر ووجود تاريخ عائلي.'],
    causesEn: ['It occurs when genetic material in prostate cells changes; the exact cause is often unknown.', 'Some genetic changes may be inherited or occur during life; risk increases with age and family history.'],
    treatmentsAr: ['المراقبة النشطة أو الانتظار اليقظ لبعض الحالات بعد مناقشة الطبيب', 'الجراحة لإزالة البروستاتا في حالات مختارة', 'العلاج الإشعاعي أو الهرموني وفق مرحلة المرض وتقييم الاختصاصي'],
    treatmentsEn: ['Active surveillance or watchful waiting for some cases after clinician discussion', 'Surgery to remove the prostate in selected cases', 'Radiation or hormone therapy based on disease stage and specialist assessment'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/prostatecancer.html' }
    ]
  },
  {
    id: 'physical_extra_thyroid_cancer',
    nameAr: 'سرطان الغدة الدرقية',
    nameEn: 'Thyroid Cancer',
    symptomsAr: ['قد لا تظهر أعراض في البداية', 'كتلة أو عقدة في الرقبة', 'صعوبة التنفس أو البلع أو ألم عند البلع', 'بحة أو تغير مستمر في الصوت'],
    symptomsEn: ['There may be no symptoms at first', 'A lump or nodule in the neck', 'Difficulty breathing or swallowing, or pain with swallowing', 'Persistent hoarseness or voice changes'],
    causesAr: ['يبدأ السرطان في أنسجة الغدة الدرقية، ولا يُعرف دائماً سبب حدوثه.', 'قد يزداد الخطر مع التعرض لبعض أنواع الإشعاع أو وجود حالات وراثية أو تاريخ عائلي لسرطان الغدة الدرقية.'],
    causesEn: ['The cancer starts in thyroid tissue, and the reason it develops is not always known.', 'Risk may be higher with certain radiation exposures, inherited conditions, or a family history of thyroid cancer.'],
    treatmentsAr: ['جراحة وفق نوع الورم ومدى انتشاره', 'علاج إشعاعي، وقد يشمل اليود المشع، عند ملاءمته', 'علاج هرموني أو كيميائي أو موجّه أو مراقبة نشطة بحسب الحالة'],
    treatmentsEn: ['Surgery based on cancer type and spread', 'Radiation therapy, which may include radioactive iodine, when appropriate', 'Hormone, chemotherapy, or targeted therapy, or active monitoring, depending on the case'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/thyroidcancer.html' }
    ]
  },
  {
    id: 'physical_extra_skin_cancer',
    nameAr: 'سرطان الجلد',
    nameEn: 'Skin Cancer',
    symptomsAr: ['علامة جلدية جديدة أو متغيرة', 'آفة جلدية مشبوهة تحتاج إلى فحص طبي', 'تتكون الأنواع الشائعة غالباً على الرأس أو الوجه أو الرقبة أو اليدين أو الذراعين'],
    symptomsEn: ['A new or changing skin mark', 'A suspicious skin lesion that needs medical evaluation', 'Common types often form on the head, face, neck, hands, or arms'],
    causesAr: ['ينشأ عندما تنمو خلايا الجلد بشكل غير طبيعي؛ وقد تسهم الأشعة فوق البنفسجية والتعرض للشمس في الخطر.', 'يزداد الاحتمال مع حروق الشمس أو كثرة التعرض للشمس أو وجود تاريخ عائلي أو التقدم في العمر.'],
    causesEn: ['It develops when skin cells grow abnormally; ultraviolet radiation and sun exposure can contribute to risk.', 'Risk is higher with sunburns or extensive sun exposure, family history, or older age.'],
    treatmentsAr: ['جراحة لإزالة السرطان عند ملاءمتها', 'علاج إشعاعي أو كيميائي وفق نوع السرطان', 'علاج ضوئي أو علاجات بيولوجية لبعض الحالات'],
    treatmentsEn: ['Surgery to remove the cancer when appropriate', 'Radiation or chemotherapy depending on cancer type', 'Photodynamic or biologic therapy for some cases'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/skincancer.html' }
    ]
  },
  {
    id: 'physical_extra_steatotic_liver_disease',
    nameAr: 'مرض الكبد الدهني',
    nameEn: 'Steatotic Liver Disease',
    symptomsAr: ['غالباً لا تظهر أعراض', 'قد يحدث تعب', 'قد يظهر انزعاج في أعلى الجانب الأيمن من البطن'],
    symptomsEn: ['Often there are no symptoms', 'Fatigue may occur', 'Discomfort may occur in the upper-right abdomen'],
    causesAr: ['تراكم كمية زائدة من الدهون في الكبد؛ ويشمل المرض النوع المرتبط باضطراب الأيض والنوع المرتبط بالكحول.', 'سبب النوع المرتبط باضطراب الأيض غير معروف، ويرتبط أكثر بالسكري من النوع الثاني والسمنة واضطراب الدهون؛ أما النوع المرتبط بالكحول فينتج عن شربه بكثرة.'],
    causesEn: ['Excess fat builds up in the liver; types include metabolic dysfunction-associated and alcohol-associated disease.', 'The cause of the metabolic type is unknown and it is more common with type 2 diabetes, obesity, and abnormal blood fats; alcohol-associated disease results from heavy alcohol use.'],
    treatmentsAr: ['إنقاص الوزن ضمن خطة صحية يوصي بها مقدم الرعاية للنوع المرتبط باضطراب الأيض', 'إيقاف الكحول وطلب الدعم المناسب للنوع المرتبط بالكحول', 'مراجعة الأدوية مع الطبيب وعدم إيقاف أي دواء دون توجيهه'],
    treatmentsEn: ['Weight loss as part of a clinician-recommended plan for metabolic disease', 'Stop alcohol use and seek appropriate support for alcohol-associated disease', 'Review medicines with a clinician and do not stop any medicine without their direction'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/steatoticliverdisease.html' }
    ]
  },
  {
    id: 'physical_extra_ulcerative_colitis',
    nameAr: 'التهاب القولون التقرحي',
    nameEn: 'Ulcerative Colitis',
    symptomsAr: ['ألم البطن', 'إسهال مصحوب بالدم أو القيح', 'تعب شديد أو فقر دم', 'فقدان الوزن أو الشهية أو نزف من المستقيم'],
    symptomsEn: ['Abdominal pain', 'Diarrhea with blood or pus', 'Severe fatigue or anemia', 'Weight or appetite loss, or rectal bleeding'],
    causesAr: ['يسبب التهاباً وتقرحات في بطانة المستقيم والقولون.', 'السبب غير محسوم؛ وقد يسهم التاريخ العائلي في القابلية للإصابة.'],
    causesEn: ['It causes inflammation and ulcers in the lining of the rectum and colon.', 'The cause is not established; family history may contribute to susceptibility.'],
    treatmentsAr: ['أدوية يختارها الطبيب للسيطرة على الالتهاب والأعراض', 'متابعة طبية منتظمة لمراقبة النشاط والمضاعفات', 'جراحة لإزالة القولون في الحالات الشديدة عند الحاجة'],
    treatmentsEn: ['Clinician-selected medicines to control inflammation and symptoms', 'Regular medical follow-up to monitor disease activity and complications', 'Surgery to remove the colon in severe cases when needed'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/ulcerativecolitis.html' }
    ]
  },
  {
    id: 'physical_extra_urinary_incontinence',
    nameAr: 'سلس البول',
    nameEn: 'Urinary Incontinence',
    symptomsAr: ['تسرب البول أو عدم القدرة على التحكم بالتبول', 'تسرب البول عند السعال أو العطاس أو الضحك أو النشاط البدني', 'تسرب البول قبل الوصول إلى المرحاض بعد إلحاح مفاجئ', 'قد يحدث التسرب أثناء النوم'],
    symptomsEn: ['Urine leakage or inability to control urination', 'Leakage with coughing, sneezing, laughing, or physical activity', 'Leakage before reaching the toilet after a sudden urge', 'Leakage may occur during sleep'],
    causesAr: ['تختلف الأسباب بحسب النوع، وقد تشمل ضعف عضلات قاع الحوض أو فرط نشاط المثانة أو عدم إفراغها بالكامل.', 'قد ترتبط الحالة بالتقدم في العمر أو الحمل والولادة أو بعض الأمراض والأدوية أو مشكلة مؤقتة مثل العدوى.'],
    causesEn: ['Causes vary by type and may include weak pelvic floor muscles, an overactive bladder, or incomplete bladder emptying.', 'It may be associated with aging, pregnancy and childbirth, some conditions or medicines, or a temporary problem such as infection.'],
    treatmentsAr: ['تعديلات نمط الحياة التي يوصي بها مقدم الرعاية', 'تدريب المثانة وفق جدول يحدده مقدم الرعاية', 'تمارين قاع الحوض أو علاجات أخرى يختارها الطبيب بحسب نوع السلس وسببه'],
    treatmentsEn: ['Lifestyle changes recommended by a health care provider', 'Bladder training on a schedule set with a health care provider', 'Pelvic floor exercises or other clinician-selected care based on the type and cause'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/urinaryincontinence.html' }
    ]
  },
  {
    id: 'physical_extra_pcos',
    nameAr: 'متلازمة تكيس المبايض',
    nameEn: 'Polycystic Ovary Syndrome',
    symptomsAr: ['عدم انتظام الدورة الشهرية أو غيابها', 'زيادة الشعر في الوجه أو الجسم', 'زيادة الوزن أو صعوبة إنقاصه', 'حب شباب شديد أو بشرة دهنية', 'صعوبة الحمل لدى بعض المصابات'],
    symptomsEn: ['Irregular or absent menstrual periods', 'Excess facial or body hair', 'Weight gain or difficulty losing weight', 'Severe acne or oily skin', 'Difficulty becoming pregnant in some people'],
    causesAr: ['السبب الدقيق غير معروف، وقد تسهم عوامل وراثية واختلالات الأندروجين ومقاومة الإنسولين.', 'قد تسير الحالة في العائلات، ولا يُعرف ما إذا كانت مقاومة الإنسولين سبباً مباشراً أم جزءاً من تفاعل عوامل متعددة.'],
    causesEn: ['The exact cause is unknown; genetic factors, androgen imbalance, and insulin resistance may play a role.', 'It can run in families, and it is not known whether insulin resistance is a direct cause or part of interacting factors.'],
    treatmentsAr: ['متابعة طبية مخصصة للأعراض والأهداف الصحية', 'تعديلات نمط الحياة التي يوصي بها مقدم الرعاية', 'علاجات دوائية أو دعم للخصوبة وفق الأعراض وتقييم الطبيب'],
    treatmentsEn: ['Individualized medical care for symptoms and health goals', 'Lifestyle changes recommended by a health care provider', 'Medicines or fertility support according to symptoms and clinician assessment'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/polycysticovarysyndrome.html' }
    ]
  },
  {
    id: 'physical_extra_ovarian_cancer',
    nameAr: 'سرطان المبيض',
    nameEn: 'Ovarian Cancer',
    symptomsAr: ['قد لا تظهر أعراض مبكرة', 'ألم أو تورم أو ضغط في البطن أو الحوض', 'حاجة مفاجئة أو متكررة للتبول', 'صعوبة الأكل أو الشعور بالامتلاء', 'غازات أو انتفاخ أو إمساك'],
    symptomsEn: ['There may be no early symptoms', 'Pain, swelling, or pressure in the abdomen or pelvis', 'A sudden or frequent need to urinate', 'Difficulty eating or feeling full', 'Gas, bloating, or constipation'],
    causesAr: ['ينشأ عند حدوث تغيرات في المادة الوراثية لخلايا المبيض؛ وغالباً لا يُعرف سبب هذه التغيرات.', 'قد تكون بعض التغيرات موروثة، وتشمل عوامل الخطر تاريخاً عائلياً أو تغيرات جينية مثل BRCA1 أو BRCA2.'],
    causesEn: ['It develops when genetic changes occur in ovarian cells; the cause of these changes is often unknown.', 'Some changes may be inherited; risk factors include family history or genetic changes such as BRCA1 or BRCA2.'],
    treatmentsAr: ['جراحة لإزالة أكبر قدر ممكن من السرطان وفق خطة الفريق المختص', 'العلاج الكيميائي', 'العلاج الموجّه عند ملاءمته لخصائص الورم'],
    treatmentsEn: ['Surgery to remove as much cancer as possible under a specialist care plan', 'Chemotherapy', 'Targeted therapy when appropriate for the tumor features'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/ovariancancer.html' }
    ]
  },
  {
    id: 'physical_extra_cervical_cancer',
    nameAr: 'سرطان عنق الرحم',
    nameEn: 'Cervical Cancer',
    symptomsAr: ['قد لا تظهر أعراض في البداية', 'نزف مهبلي غير معتاد، مثل النزف بعد الجماع أو بين الدورات', 'إفراز مهبلي مائي أو كريه الرائحة أو ممزوج بالدم', 'ألم الحوض أو ألم أثناء الجماع'],
    symptomsEn: ['There may be no symptoms at first', 'Unusual vaginal bleeding, such as after sex or between periods', 'Watery, foul-smelling, or blood-tinged vaginal discharge', 'Pelvic pain or pain during sex'],
    causesAr: ['تنتج معظم الحالات عن عدوى مستمرة بأنواع عالية الخطورة من فيروس الورم الحليمي البشري.', 'قد يزيد الخطر مع ضعف المناعة أو التدخين أو بعض العوامل الصحية والتناسلية.'],
    causesEn: ['Most cases are caused by persistent infection with high-risk types of human papillomavirus.', 'Risk may be increased by a weakened immune system, smoking, and some health or reproductive factors.'],
    treatmentsAr: ['جراحة لإزالة السرطان وفق المرحلة', 'علاج إشعاعي', 'علاج كيميائي وفق مدى انتشار المرض وتقييم الفريق المعالج'],
    treatmentsEn: ['Surgery to remove the cancer based on its stage', 'Radiation therapy', 'Chemotherapy based on disease spread and the care team’s assessment'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/cervicalcancer.html' }
    ]
  },
  {
    id: 'physical_extra_whooping_cough',
    nameAr: 'السعال الديكي',
    nameEn: 'Whooping Cough',
    symptomsAr: ['سيلان الأنف أو حمى خفيفة أو سعال بسيط في البداية', 'نوبات سعال سريعة ومتكررة يعقبها صوت شهيق مرتفع', 'قيء أثناء نوبات السعال أو بعدها', 'إرهاق بعد نوبات السعال'],
    symptomsEn: ['Runny nose, mild fever, or an occasional cough at first', 'Rapid repeated coughing fits followed by a high-pitched whoop', 'Vomiting during or after coughing fits', 'Exhaustion after coughing fits'],
    causesAr: ['تسببه بكتيريا بورديتيلا السعال الديكي.', 'ينتقل غالباً من شخص لآخر عبر السعال أو العطاس أو الاقتراب الشديد، وقد ينتقل أحياناً عبر الأسطح الملوثة.'],
    causesEn: ['It is caused by Bordetella pertussis bacteria.', 'It usually spreads through coughing, sneezing, or close contact and can sometimes spread through contaminated surfaces.'],
    treatmentsAr: ['تقييم طبي مبكر، إذ قد يوصي مقدم الرعاية بمضاد حيوي', 'رعاية في المستشفى إذا كانت الحالة شديدة', 'اتباع إرشادات مقدم الرعاية للحد من نقل العدوى للآخرين'],
    treatmentsEn: ['Early medical assessment; a health care provider may recommend antibiotics', 'Hospital care if the illness is severe', 'Follow health care guidance to reduce spreading the infection to others'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/whoopingcough.html' }
    ]
  },
  {
    id: 'physical_extra_syphilis',
    nameAr: 'الزهري',
    nameEn: 'Syphilis',
    symptomsAr: ['قرحة صغيرة غير مؤلمة في المرحلة المبكرة', 'تورم العقد اللمفاوية القريبة أحياناً', 'طفح جلدي غير حاك، وقد يظهر على اليدين والقدمين', 'قد تختفي الأعراض وتعود أو لا تُلاحظ لسنوات'],
    symptomsEn: ['A small painless sore in the early stage', 'Sometimes swollen nearby lymph nodes', 'A non-itchy rash that may appear on the hands and feet', 'Symptoms may disappear and return or go unnoticed for years'],
    causesAr: ['عدوى بكتيرية تصيب المنطقة التناسلية أو الشفتين أو الفم أو الشرج.', 'تنتقل عادة عبر الاتصال الجنسي مع شخص مصاب، ويمكن أن تنتقل من الحامل إلى الجنين.'],
    causesEn: ['A bacterial infection affecting the genital area, lips, mouth, or anus.', 'It usually spreads through sexual contact with an infected person and can pass from a pregnant person to a fetus.'],
    treatmentsAr: ['تقييم طبي وفحوص لتحديد الإصابة ومرحلتها', 'علاج بالمضادات الحيوية يحدده مقدم الرعاية', 'متابعة طبية بعد العلاج، مع تقييم الشركاء وفق إرشادات الصحة العامة'],
    treatmentsEn: ['Medical assessment and testing to identify infection and stage', 'Clinician-directed antibiotic treatment', 'Medical follow-up after treatment, with partner evaluation according to public health guidance'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/syphilis.html' }
    ]
  },
  {
    id: 'physical_extra_gonorrhea',
    nameAr: 'السيلان',
    nameEn: 'Gonorrhea',
    symptomsAr: ['قد لا تظهر أعراض', 'ألم عند التبول أو إفراز من القضيب', 'نزف بين الدورات أو ألم عند التبول أو زيادة الإفرازات المهبلية', 'قد يسبب ألماً أو مضاعفات في الحوض عند عدم علاجه'],
    symptomsEn: ['There may be no symptoms', 'Pain with urination or discharge from the penis', 'Bleeding between periods, painful urination, or increased vaginal discharge', 'Untreated infection may cause pelvic pain or complications'],
    causesAr: ['عدوى بكتيرية تصيب الجهاز التناسلي أو الفم أو الشرج.', 'تنتقل عبر الجنس المهبلي أو الفموي أو الشرجي مع شريك مصاب، وقد تنتقل إلى الطفل أثناء الولادة.'],
    causesEn: ['A bacterial infection affecting the genital tract, mouth, or anus.', 'It spreads through vaginal, oral, or anal sex with an infected partner and may pass to a baby during childbirth.'],
    treatmentsAr: ['فحص مخبري وتقييم سريري لتأكيد العدوى', 'علاج بالمضادات الحيوية يختاره مقدم الرعاية وفق الإرشادات السارية', 'متابعة الشركاء والامتناع عن نقل العدوى حتى إتمام تعليمات العلاج الطبية'],
    treatmentsEn: ['Laboratory testing and clinical assessment to confirm infection', 'Clinician-selected antibiotic treatment in line with current guidance', 'Partner follow-up and avoiding transmission until medical treatment instructions are completed'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/gonorrhea.html' }
    ]
  },
  {
    id: 'physical_extra_sepsis',
    nameAr: 'الإنتان',
    nameEn: 'Sepsis',
    symptomsAr: ['سرعة التنفس أو ضربات القلب', 'ضيق التنفس', 'ارتباك أو تشوش', 'ألم أو انزعاج شديد', 'حمى أو ارتعاش أو شعور شديد بالبرد', 'جلد رطب أو متعرق'],
    symptomsEn: ['Rapid breathing or heart rate', 'Shortness of breath', 'Confusion or disorientation', 'Extreme pain or discomfort', 'Fever, shivering, or feeling very cold', 'Clammy or sweaty skin'],
    causesAr: ['استجابة مفرطة وشديدة من الجسم لعدوى موجودة.', 'تكون العدوى البكتيرية السبب الأكثر شيوعاً، لكن أنواعاً أخرى من العدوى قد تؤدي إليه أيضاً.'],
    causesEn: ['An extreme, overactive response by the body to an existing infection.', 'Bacterial infections are the most common cause, but other types of infection can also lead to it.'],
    treatmentsAr: ['طلب رعاية طبية طارئة فور الاشتباه بالإنتان', 'علاج سريع في المستشفى لمصدر العدوى ومضاعفاتها', 'رعاية داعمة قد تشمل السوائل الوريدية أو الأكسجين وفق تقييم الفريق الطبي'],
    treatmentsEn: ['Seek emergency medical care immediately if sepsis is suspected', 'Prompt hospital treatment of the infection source and complications', 'Supportive care may include intravenous fluids or oxygen as assessed by the medical team'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/sepsis.html' }
    ]
  },
  {
    id: 'physical_extra_salmonella_infection',
    nameAr: 'عدوى السالمونيلا',
    nameEn: 'Salmonella Infection',
    symptomsAr: ['حمى', 'إسهال', 'تقلصات البطن', 'صداع', 'غثيان أو قيء أو فقدان الشهية'],
    symptomsEn: ['Fever', 'Diarrhea', 'Abdominal cramps', 'Headache', 'Nausea, vomiting, or loss of appetite'],
    causesAr: ['تسببها بكتيريا السالمونيلا، وقد توجد في بعض الأطعمة النيئة أو غير المغسولة.', 'قد تحدث العدوى أيضاً بعد التعامل مع بعض الحيوانات الأليفة، خصوصاً الزواحف.'],
    causesEn: ['It is caused by Salmonella bacteria, which may be present in some raw or unwashed foods.', 'Infection can also occur after handling some pets, especially reptiles.'],
    treatmentsAr: ['تعويض السوائل ومراقبة علامات الجفاف', 'رعاية طبية عند شدة الأعراض أو زيادة خطر المضاعفات', 'مضادات حيوية يقررها مقدم الرعاية في حالات مختارة مثل انتشار العدوى إلى الدم'],
    treatmentsEn: ['Replace fluids and monitor for signs of dehydration', 'Seek medical care for severe symptoms or increased risk of complications', 'Clinician-directed antibiotics in selected cases, such as infection spreading to the bloodstream'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/salmonellainfections.html' }
    ]
  },
  {
    id: 'physical_extra_lyme_disease',
    nameAr: 'داء لايم',
    nameEn: 'Lyme Disease',
    symptomsAr: ['طفح جلدي أحمر قد يتسع تدريجياً', 'حمى أو قشعريرة أو صداع أو إرهاق', 'آلام العضلات والمفاصل أو تورم العقد اللمفاوية', 'إذا انتشرت العدوى: ألم وتورم المفاصل أو شلل الوجه أو اضطراب ضربات القلب'],
    symptomsEn: ['A red rash that may gradually expand', 'Fever, chills, headache, or fatigue', 'Muscle and joint aches or swollen lymph nodes', 'If infection spreads: joint pain and swelling, facial palsy, or an irregular heartbeat'],
    causesAr: ['عدوى بكتيرية تنتقل إلى الإنسان عبر لدغة قراد مصاب.', 'تنتشر في الولايات المتحدة عادةً بكتيريا بوريليا برغدورفيرية بواسطة القراد أسود الأرجل.'],
    causesEn: ['A bacterial infection transmitted to people through the bite of an infected tick.', 'In the United States, it is usually spread by Borrelia burgdorferi carried by blacklegged ticks.'],
    treatmentsAr: ['تقييم مقدم الرعاية مع مراعاة الأعراض والتعرض المحتمل للقراد', 'علاج بالمضادات الحيوية يحدده مقدم الرعاية؛ العلاج المبكر يساعد على التعافي', 'رعاية موجّهة للأعراض المستمرة بعد العلاج بالتشاور مع مقدم الرعاية'],
    treatmentsEn: ['Health care assessment considering symptoms and possible tick exposure', 'Clinician-directed antibiotic treatment; early treatment supports recovery', 'Provider-guided care for persistent symptoms after treatment'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/lymedisease.html' }
    ]
  },
  {
    id: 'physical_extra_pulmonary_embolism',
    nameAr: 'الانصمام الرئوي',
    nameEn: 'Pulmonary Embolism',
    symptomsAr: ['ضيق التنفس أو سرعة التنفس', 'ألم أو انزعاج في الصدر يزداد مع السعال أو التنفس العميق', 'تسارع ضربات القلب', 'سعال مصحوب بالدم أو دوخة أو إغماء'],
    symptomsEn: ['Shortness of breath or rapid breathing', 'Chest pain or discomfort that worsens with coughing or deep breathing', 'Increased heart rate', 'Coughing up blood, dizziness, or fainting'],
    causesAr: ['غالباً ما تسد جلطة دموية شرياناً في الرئة بعد انتقالها عبر مجرى الدم.', 'تنشأ الجلطة عادة في وريد عميق بالساق؛ وقد تزيد الجراحة أو قلة الحركة لفترة طويلة أو بعض الأمراض من الخطر.'],
    causesEn: ['Usually a blood clot travels through the bloodstream and blocks an artery in the lung.', 'The clot often forms in a deep leg vein; surgery, prolonged immobility, and some illnesses can increase risk.'],
    treatmentsAr: ['رعاية طبية عاجلة عند الاشتباه بالانصمام الرئوي', 'أدوية مضادة للتخثر يقررها الفريق الطبي', 'إذابة الجلطة أو إزالتها بإجراء طبي في بعض الحالات الشديدة'],
    treatmentsEn: ['Urgent medical care if pulmonary embolism is suspected', 'Clinician-directed anticoagulant treatment', 'Medical clot-dissolving or clot-removal procedures in some severe cases'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/pulmonaryembolism.html' }
    ]
  },
  {
    id: 'physical_extra_pulmonary_hypertension',
    nameAr: 'ارتفاع ضغط الدم الرئوي',
    nameEn: 'Pulmonary Hypertension',
    symptomsAr: ['ضيق التنفس', 'ألم أو ضغط في الصدر', 'دوخة قد تؤدي إلى الإغماء', 'إرهاق', 'تورم البطن أو الساقين أو القدمين', 'خفقان القلب'],
    symptomsEn: ['Shortness of breath', 'Chest pain or pressure', 'Dizziness that may lead to fainting', 'Fatigue', 'Swelling of the abdomen, legs, or feet', 'Heart palpitations'],
    causesAr: ['قد تضيق الأوعية الدموية في الرئتين أو تتضرر أو تنسد، فيرتفع ضغط الدم فيها.', 'قد تنشأ الحالة بسبب مرض آخر في القلب أو الرئتين أو الكبد أو جلطة رئوية، وأحياناً يكون السبب غير واضح.'],
    causesEn: ['Blood vessels in the lungs may become narrowed, damaged, or blocked, raising pressure within them.', 'It may be caused by another heart, lung, or liver condition or a pulmonary clot; sometimes the cause is unclear.'],
    treatmentsAr: ['تغييرات نمط حياة صحية وتأهيل رئوي وفق الخطة الطبية', 'أدوية يختارها الطبيب وفق سبب الحالة، وقد تشمل أدوية لإرخاء الأوعية أو تقليل التورم', 'علاج بالأكسجين أو إجراءات متخصصة أو زراعة رئة في حالات مختارة'],
    treatmentsEn: ['Healthy lifestyle changes and pulmonary rehabilitation as part of the care plan', 'Clinician-selected medicines based on the cause, which may include medicines to relax vessels or reduce swelling', 'Oxygen therapy, specialist procedures, or lung transplant in selected cases'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/pulmonaryhypertension.html' }
    ]
  },
  {
    id: 'physical_extra_cardiomyopathy',
    nameAr: 'اعتلال عضلة القلب',
    nameEn: 'Cardiomyopathy',
    symptomsAr: ['قد لا تظهر أعراض لدى بعض الأشخاص', 'ضعف قدرة القلب على ضخ الدم', 'قد تحدث مضاعفات مثل فشل القلب أو اضطراب ضربات القلب'],
    symptomsEn: ['Some people may have no symptoms', 'Reduced ability of the heart to pump blood', 'Complications may include heart failure or abnormal heart rhythms'],
    causesAr: ['مجموعة أمراض تؤدي إلى تضخم عضلة القلب أو زيادة سماكتها أو تيبسها.', 'قد تسببها النوبات القلبية أو ارتفاع ضغط الدم أو العدوى أو أمراض أخرى؛ وبعض الأنواع وراثي، وفي حالات كثيرة لا يُعرف السبب.'],
    causesEn: ['A group of diseases that enlarge the heart muscle or make it thicker or stiffer.', 'Heart attacks, high blood pressure, infections, or other diseases may cause it; some types are inherited, and many cases have no known cause.'],
    treatmentsAr: ['أدوية يحددها الطبيب لمساعدة القلب على أداء وظيفته', 'إجراءات أو جراحة بحسب نوع اعتلال العضلة ومضاعفاته', 'تغييرات نمط الحياة والمتابعة الطبية وفق خطة اختصاصي القلب'],
    treatmentsEn: ['Clinician-selected medicines to help the heart function', 'Procedures or surgery based on the type of cardiomyopathy and its complications', 'Lifestyle changes and medical follow-up under a cardiology care plan'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/cardiomyopathy.html' }
    ]
  },
  {
    id: 'physical_extra_atherosclerosis',
    nameAr: 'تصلب الشرايين العصيدي',
    nameEn: 'Atherosclerosis',
    symptomsAr: ['قد لا تظهر أعراض في المراحل المبكرة', 'تعتمد الأعراض على الشرايين المصابة وقد تشمل ألم الصدر أو ضيق التنفس', 'ألم أو ثقل أو تشنج في الساق عند المشي', 'قد تظهر أعراض اضطراب تدفق الدم إلى الدماغ أو الأمعاء'],
    symptomsEn: ['There may be no symptoms in early stages', 'Symptoms depend on affected arteries and may include chest pain or shortness of breath', 'Leg pain, heaviness, or cramping when walking', 'Signs of reduced blood flow to the brain or intestines may occur'],
    causesAr: ['تتراكم اللويحات المكوّنة من الكوليسترول والدهون وخلايا الدم والكالسيوم ومواد أخرى داخل الشرايين.', 'قد تتعلق إصابة الشرايين بعوامل نمط الحياة أو حالات صحية أو عوامل وراثية؛ ويزداد الاحتمال مع التقدم في العمر.'],
    causesEn: ['Plaque made of cholesterol, fat, blood cells, calcium, and other substances builds up inside arteries.', 'Artery damage may relate to lifestyle factors, health conditions, or genetics; risk increases with age.'],
    treatmentsAr: ['تغييرات صحية للقلب في الغذاء والنشاط البدني بالتنسيق مع مقدم الرعاية', 'أدوية يختارها الطبيب لإدارة عوامل الخطر أو المضاعفات', 'إجراءات أو جراحة عند الحاجة لمعالجة انسداد الشرايين أو مضاعفاته'],
    treatmentsEn: ['Heart-healthy dietary and physical-activity changes with clinician guidance', 'Clinician-selected medicines to manage risk factors or complications', 'Procedures or surgery when needed to address arterial blockage or complications'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/atherosclerosis.html' }
    ]
  },
  {
    id: 'physical_extra_colorectal_cancer',
    nameAr: 'سرطان القولون والمستقيم',
    nameEn: 'Colorectal Cancer',
    symptomsAr: ['قد لا تظهر أعراض مبكرة', 'تغير مستمر في عادات الإخراج أو شكل البراز', 'دم أحمر أو داكن في البراز', 'غازات أو انتفاخ أو تقلصات متكررة', 'فقدان وزن غير مبرر أو إرهاق'],
    symptomsEn: ['There may be no early symptoms', 'Persistent change in bowel habits or stool shape', 'Bright red or very dark blood in stool', 'Frequent gas, bloating, or cramps', 'Unexplained weight loss or fatigue'],
    causesAr: ['تحدث تغيرات في المادة الوراثية لخلايا القولون أو المستقيم، وغالباً لا يُعرف سببها الدقيق.', 'قد تكون بعض التغيرات موروثة؛ كما قد تؤثر السن والتاريخ العائلي وبعض الأمراض المزمنة ونمط الحياة في الخطر.'],
    causesEn: ['Genetic changes develop in colon or rectal cells, and the exact cause is often unknown.', 'Some changes may be inherited; age, family history, certain chronic diseases, and lifestyle can also affect risk.'],
    treatmentsAr: ['جراحة لإزالة السرطان وفق موقعه ومرحلته', 'علاج كيميائي وفق خطة اختصاصية', 'علاج إشعاعي أو علاجات أخرى بحسب نوع الورم ومكانه'],
    treatmentsEn: ['Surgery to remove the cancer based on its location and stage', 'Chemotherapy as part of specialist-directed care', 'Radiation or other therapies depending on tumor type and location'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/colorectalcancer.html' }
    ]
  },
  {
    id: 'physical_extra_bladder_cancer',
    nameAr: 'سرطان المثانة',
    nameEn: 'Bladder Cancer',
    symptomsAr: ['دم في البول', 'حاجة متكررة للتبول', 'ألم عند التبول', 'ألم أسفل الظهر'],
    symptomsEn: ['Blood in the urine', 'Frequent urge to urinate', 'Pain when urinating', 'Lower back pain'],
    causesAr: ['يحدث السرطان في بطانة المثانة.', 'تشمل عوامل الخطر التدخين والتعرض لبعض المواد الكيميائية في العمل والتقدم في العمر أو التاريخ العائلي.'],
    causesEn: ['The cancer develops in the lining of the bladder.', 'Risk factors include smoking, exposure to some workplace chemicals, older age, or family history.'],
    treatmentsAr: ['جراحة بحسب نوع السرطان ومدى انتشاره', 'علاج إشعاعي', 'علاج كيميائي أو بيولوجي وفق تقييم الفريق الطبي'],
    treatmentsEn: ['Surgery based on cancer type and spread', 'Radiation therapy', 'Chemotherapy or biologic therapy as assessed by the medical team'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/bladdercancer.html' }
    ]
  },
  {
    id: 'physical_extra_liver_cancer',
    nameAr: 'سرطان الكبد',
    nameEn: 'Liver Cancer',
    symptomsAr: ['قد لا تظهر أعراض حتى مراحل متقدمة', 'كتلة أو ألم في الجانب الأيمن من البطن', 'اصفرار الجلد أو بياض العينين'],
    symptomsEn: ['There may be no symptoms until advanced stages', 'A lump or pain on the right side of the abdomen', 'Yellowing of the skin or whites of the eyes'],
    causesAr: ['يبدأ السرطان الأولي في الكبد، بينما يبدأ السرطان النقيلي في موضع آخر ثم ينتشر إلى الكبد.', 'تشمل عوامل خطر سرطان الكبد الأولي التهاب الكبد B أو C، والكحول بكثرة، وتليف الكبد، والسمنة أو السكري.'],
    causesEn: ['Primary cancer starts in the liver, while metastatic cancer begins elsewhere and spreads to the liver.', 'Risk factors for primary liver cancer include hepatitis B or C, heavy alcohol use, cirrhosis, obesity, or diabetes.'],
    treatmentsAr: ['جراحة في الحالات المناسبة', 'علاج إشعاعي أو كيميائي وفق خطة الاختصاصي', 'زراعة الكبد لبعض المرضى بعد تقييم متخصص'],
    treatmentsEn: ['Surgery when appropriate', 'Radiation or chemotherapy as part of specialist care', 'Liver transplantation for some patients after specialist assessment'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/livercancer.html' }
    ]
  },
  {
    id: 'physical_extra_pancreatic_cancer',
    nameAr: 'سرطان البنكرياس',
    nameEn: 'Pancreatic Cancer',
    symptomsAr: ['قد لا تظهر أعراض مبكرة', 'اصفرار الجلد أو العينين', 'ألم البطن أو الظهر', 'فقدان الوزن أو التعب'],
    symptomsEn: ['There may be no early symptoms', 'Yellowing of the skin or eyes', 'Abdominal or back pain', 'Weight loss or fatigue'],
    causesAr: ['يبدأ غالباً في الخلايا التي تنتج العصارات الهاضمة في البنكرياس.', 'تشمل عوامل الخطر التدخين والسكري طويل الأمد والتهاب البنكرياس المزمن وبعض الاضطرابات الوراثية.'],
    causesEn: ['It usually begins in cells that produce digestive juices in the pancreas.', 'Risk factors include smoking, long-term diabetes, chronic pancreatitis, and certain inherited disorders.'],
    treatmentsAr: ['جراحة للحالات التي يحددها الفريق المختص', 'علاج إشعاعي', 'علاج كيميائي أو موجّه بحسب تقييم السرطان'],
    treatmentsEn: ['Surgery for cases selected by the specialist team', 'Radiation therapy', 'Chemotherapy or targeted therapy as determined by cancer assessment'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/pancreaticcancer.html' }
    ]
  },
  {
    id: 'physical_extra_stomach_cancer',
    nameAr: 'سرطان المعدة',
    nameEn: 'Stomach Cancer',
    symptomsAr: ['عسر الهضم أو انزعاج المعدة', 'دم في البراز أو قيء', 'فقدان وزن غير مبرر', 'اصفرار الجلد أو صعوبة البلع في المراحل المتقدمة'],
    symptomsEn: ['Indigestion or stomach discomfort', 'Blood in stool or vomiting', 'Unexplained weight loss', 'Jaundice or difficulty swallowing in advanced cases'],
    causesAr: ['ينشأ السرطان في المعدة، وقد يصعب اكتشافه في مراحله المبكرة.', 'تشمل عوامل الخطر عدوى الملوية البوابية السابقة والتهاب المعدة والتدخين والتاريخ العائلي وبعض الأنماط الغذائية.'],
    causesEn: ['The cancer develops in the stomach and may be difficult to detect early.', 'Risk factors include prior Helicobacter pylori infection, stomach inflammation, smoking, family history, and some dietary patterns.'],
    treatmentsAr: ['جراحة وفق موقع السرطان ومدى انتشاره', 'علاج كيميائي', 'علاج إشعاعي أو مزيج من العلاجات بحسب الخطة الطبية'],
    treatmentsEn: ['Surgery based on cancer location and spread', 'Chemotherapy', 'Radiation therapy or a combination of treatments as determined by the care plan'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/stomachcancer.html' }
    ]
  },
  {
    id: 'physical_extra_non_hodgkin_lymphoma',
    nameAr: 'لمفوما لاهودجكينية',
    nameEn: 'Non-Hodgkin Lymphoma',
    symptomsAr: ['تورم غير مؤلم في العقد اللمفاوية بالعنق أو الإبط أو الأربية', 'فقدان وزن غير مبرر', 'حمى أو تعرق ليلي غزير', 'سعال أو صعوبة تنفس أو ألم الصدر', 'ضعف أو تعب أو امتلاء البطن'],
    symptomsEn: ['Painless swollen lymph nodes in the neck, armpits, or groin', 'Unexplained weight loss', 'Fever or soaking night sweats', 'Cough, trouble breathing, or chest pain', 'Weakness, fatigue, or abdominal fullness'],
    causesAr: ['يبدأ عندما تصبح خلية مناعية من نوع الخلايا التائية أو البائية غير طبيعية وتتكاثر.', 'غالباً لا يُعرف السبب؛ وقد يزيد الخطر مع ضعف المناعة أو بعض أنواع العدوى.'],
    causesEn: ['It begins when an immune T cell or B cell becomes abnormal and multiplies.', 'The cause is often unknown; a weakened immune system or some infections may raise risk.'],
    treatmentsAr: ['علاج كيميائي وفق نوع اللمفوما ومرحلتها', 'علاج إشعاعي أو موجّه أو بيولوجي بحسب الحالة', 'مراقبة نشطة لبعض الحالات التي لا تسبب أعراضاً، بتوجيه اختصاصي'],
    treatmentsEn: ['Chemotherapy based on lymphoma type and stage', 'Radiation, targeted, or biologic therapy depending on the case', 'Specialist-directed active monitoring for some cases without symptoms'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/lymphoma.html' }
    ]
  },
  {
    id: 'physical_extra_obesity',
    nameAr: 'السمنة',
    nameEn: 'Obesity',
    symptomsAr: ['زيادة مفرطة في دهون الجسم', 'قد يترافق تراكم الدهون حول الخصر مع مخاطر صحية أعلى', 'قد تزيد الأعراض أو المشكلات الصحية المرتبطة بها مع الحالات المصاحبة'],
    symptomsEn: ['Excess body fat', 'Fat concentrated around the waist may be associated with higher health risks', 'Related symptoms or health problems may increase with coexisting conditions'],
    causesAr: ['تحدث مع مرور الوقت عندما تتجاوز السعرات المتناولة ما يستخدمه الجسم في النشاط والحياة اليومية.', 'قد تؤثر في الوزن عوامل وراثية وعادات الأكل والنشاط وبعض الأدوية أو الحالات الصحية.'],
    causesEn: ['It develops over time when energy intake exceeds what the body uses through activity and daily life.', 'Genetics, eating habits, activity, some medicines, or health conditions may affect body weight.'],
    treatmentsAr: ['خطة غذاء ونشاط بدني صحية وآمنة بإرشاد مقدم الرعاية', 'استشارات أو مجموعات دعم للمساعدة على وضع أهداف واقعية', 'أدوية أو إجراءات لإنقاص الوزن للحالات التي يحددها الطبيب'],
    treatmentsEn: ['A safe healthy eating and physical-activity plan with health care guidance', 'Counseling or support groups to help set realistic goals', 'Weight-loss medicines or procedures for cases selected by a clinician'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/obesity.html' }
    ]
  },
  {
    id: 'physical_extra_metabolic_syndrome',
    nameAr: 'متلازمة الأيض',
    nameEn: 'Metabolic Syndrome',
    symptomsAr: ['غالباً لا توجد علامات واضحة سوى كبر محيط الخصر', 'قد تشمل عوامل الخطر ارتفاع الدهون الثلاثية', 'انخفاض كوليسترول HDL أو ارتفاع ضغط الدم أو سكر الدم'],
    symptomsEn: ['Often there are no obvious signs except a large waistline', 'Risk factors may include high triglycerides', 'Low HDL cholesterol, high blood pressure, or high blood sugar'],
    causesAr: ['مجموعة من عوامل الخطر التي تجتمع معاً، ويُشخّص وجودها عند توفر عدة عوامل.', 'قد تسهم السمنة أو زيادة الوزن وقلة النشاط ومقاومة الإنسولين والعمر والوراثة.'],
    causesEn: ['A group of risk factors that occur together; diagnosis requires several factors to be present.', 'Obesity or excess weight, inactivity, insulin resistance, age, and genetics may contribute.'],
    treatmentsAr: ['اتباع نمط غذائي صحي للقلب', 'نشاط بدني منتظم وخطة للحفاظ على وزن صحي بإرشاد مقدم الرعاية', 'علاج طبي موجّه لعوامل الخطر عند الحاجة'],
    treatmentsEn: ['Follow a heart-healthy eating plan', 'Regular physical activity and a healthy-weight plan with clinician guidance', 'Clinician-directed treatment of risk factors when needed'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/metabolicsyndrome.html' }
    ]
  },
  {
    id: 'physical_extra_cerebral_palsy',
    nameAr: 'الشلل الدماغي',
    nameEn: 'Cerebral Palsy',
    symptomsAr: ['تأخر بلوغ مراحل النمو الحركي', 'توتر عضلي غير طبيعي أو تيبس', 'وضعية غير معتادة أو تفضيل جانب من الجسم', 'رعشة أو حركات لا إرادية مفاجئة'],
    symptomsEn: ['Delays in reaching motor developmental milestones', 'Abnormal muscle tone or stiffness', 'Unusual posture or favoring one side of the body', 'Tremors or sudden uncontrolled movements'],
    causesAr: ['ينتج عن تطور غير طبيعي أو تلف في الدماغ أثناء نموه.', 'قد يكون خلقياً بسبب تغيرات جينية أو تشوهات أو عدوى أو إصابة؛ وقد يحدث بعد الولادة بسبب تلف الدماغ أو عدوى أو سكتة أو إصابة، وأحياناً لا يُعرف السبب.'],
    causesEn: ['It results from abnormal development or damage to the developing brain.', 'It may be congenital due to genetic changes, malformations, infection, or injury; acquired cases may follow brain damage, infection, stroke, or injury, and sometimes the cause is unknown.'],
    treatmentsAr: ['علاج تأهيلي لتحسين المهارات الحركية والوظائف اليومية', 'دعم متخصص للتواصل والاحتياجات المرتبطة بالحالة', 'متابعة متعددة التخصصات لوضع خطة تناسب احتياجات الطفل'],
    treatmentsEn: ['Rehabilitation to improve motor skills and daily function', 'Specialist support for communication and related needs', 'Multidisciplinary follow-up to tailor a plan to the child’s needs'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/cerebralpalsy.html' }
    ]
  },
  {
    id: 'physical_extra_amyotrophic_lateral_sclerosis',
    nameAr: 'التصلب الجانبي الضموري',
    nameEn: 'Amyotrophic Lateral Sclerosis',
    symptomsAr: ['صعوبة المشي أو الجري', 'صعوبة الكتابة أو أداء حركات اليد', 'مشكلات في الكلام', 'ضعف تدريجي قد يؤثر في الحركة والتنفس'],
    symptomsEn: ['Difficulty walking or running', 'Difficulty writing or performing hand movements', 'Speech problems', 'Progressive weakness that may affect movement and breathing'],
    causesAr: ['مرض يصيب الخلايا العصبية الحركية في الدماغ والحبل الشوكي.', 'السبب غير معروف غالباً؛ وقد يسري المرض في بعض العائلات، بينما تحدث حالات كثيرة دون تاريخ عائلي.'],
    causesEn: ['A disease affecting motor neurons in the brain and spinal cord.', 'The cause is often unknown; it runs in some families, while many cases occur without a family history.'],
    treatmentsAr: ['رعاية من فريق متخصص لإدارة الأعراض والاحتياجات الوظيفية', 'دعم التنفس عند تأثر عضلات التنفس وتحت إشراف الفريق الطبي', 'أدوية قد تخفف الأعراض أو تساعد على إبطاء تقدم المرض وفق تقييم الاختصاصي'],
    treatmentsEn: ['Specialist team care to manage symptoms and functional needs', 'Breathing support if respiratory muscles are affected, under medical supervision', 'Medicines may relieve symptoms or help slow disease progression as assessed by a specialist'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/amyotrophiclateralsclerosis.html' }
    ]
  },
  {
    id: 'physical_extra_myasthenia_gravis',
    nameAr: 'الوهن العضلي الوبيل',
    nameEn: 'Myasthenia Gravis',
    symptomsAr: ['ضعف عضلات العين أو تدلي الجفن', 'رؤية ضبابية أو مزدوجة', 'صعوبة المضغ أو الكلام أو البلع', 'ضيق التنفس أو ضعف الأطراف والرقبة', 'يزداد الضعف مع النشاط ويتحسن بالراحة'],
    symptomsEn: ['Weak eye muscles or drooping eyelids', 'Blurred or double vision', 'Difficulty chewing, speaking, or swallowing', 'Shortness of breath or weakness in the limbs and neck', 'Weakness worsens with activity and improves with rest'],
    causesAr: ['خلل في نقل الإشارات العصبية إلى العضلات عند الوصلة العصبية العضلية.', 'يصنع الجهاز المناعي أجساماً مضادة تعيق ارتباط الأستيل كولين بالعضلة، وقد تؤدي الغدة الزعترية دوراً في بعض الحالات.'],
    causesEn: ['A problem with nerve-signal transmission to muscles at the neuromuscular junction.', 'The immune system makes antibodies that block acetylcholine from binding to muscle; the thymus may play a role in some cases.'],
    treatmentsAr: ['أدوية يختارها الاختصاصي لتحسين الإشارات بين الأعصاب والعضلات', 'علاجات يحددها الطبيب لتقليل الاستجابة المناعية', 'علاجات متخصصة مثل تبادل البلازما أو الغلوبولين المناعي الوريدي للحالات التي تستدعيها'],
    treatmentsEn: ['Specialist-selected medicines to improve nerve-to-muscle signaling', 'Clinician-directed treatments to reduce immune responses', 'Specialist treatments such as plasma exchange or intravenous immunoglobulin when indicated'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/myastheniagravis.html' }
    ]
  },
  {
    id: 'physical_extra_ankylosing_spondylitis',
    nameAr: 'التهاب الفقار المقسط',
    nameEn: 'Ankylosing Spondylitis',
    symptomsAr: ['ألم وتيبس أسفل الظهر أو الوركين', 'قد يزداد الألم ليلاً أو بعد الجلوس طويلاً', 'صعوبة الحركة أو الانحناء', 'قد يحدث ألم أو التهاب في مفاصل أخرى أو تعب'],
    symptomsEn: ['Pain and stiffness in the lower back or hips', 'Pain may worsen at night or after prolonged sitting', 'Difficulty moving or bending', 'Pain or inflammation in other joints or fatigue may occur'],
    causesAr: ['التهاب يصيب الفقرات والمفاصل بين العمود الفقري والحوض.', 'السبب غير معروف، لكن يُعتقد أن البيئة والجينات تؤديان دوراً؛ وقد تزيد بعض الجينات الاستعداد ولا تعني الإصابة حتماً.'],
    causesEn: ['Inflammation affects the vertebrae and joints between the spine and pelvis.', 'The cause is unknown, but genes and environment are thought to play a role; risk-related genes do not make disease inevitable.'],
    treatmentsAr: ['علاج طبيعي لتحسين الحركة والمحافظة على وضعية الجسم', 'نشاط بدني مناسب مع متابعة الأعراض وإرشاد الفريق الطبي', 'أدوية لتخفيف الأعراض أو جراحة للحالات الشديدة يحددها الاختصاصي'],
    treatmentsEn: ['Physical therapy to improve mobility and maintain posture', 'Appropriate physical activity with symptom monitoring and care-team guidance', 'Specialist-selected medicines for symptoms or surgery in severe cases'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/ankylosingspondylitis.html' }
    ]
  },
  {
    id: 'physical_extra_scoliosis',
    nameAr: 'الجنف',
    nameEn: 'Scoliosis',
    symptomsAr: ['انحناء جانبي للعمود الفقري', 'ميل الجسم إلى جانب واحد', 'عدم تساوي الكتفين أو الوركين'],
    symptomsEn: ['A sideways curve of the spine', 'Leaning to one side', 'Uneven shoulders or hips'],
    causesAr: ['هو انحناء جانبي للعمود الفقري، وقد يظهر خلال طفرة النمو في أواخر الطفولة أو بداية المراهقة.', 'قد يسري في العائلات، وفي بعض الحالات لا يُعرف السبب.'],
    causesEn: ['It is a sideways spinal curve that may appear during the growth spurt of late childhood or early adolescence.', 'It can run in families, and the cause is unknown in some cases.'],
    treatmentsAr: ['فحوص متابعة دورية للانحناءات الخفيفة', 'دعامة للظهر عند توصية الطبيب بها', 'جراحة لبعض الحالات وفق درجة الانحناء واحتمال تطوره'],
    treatmentsEn: ['Regular checkups for mild curves', 'A back brace when recommended by a clinician', 'Surgery for some cases based on curve severity and risk of progression'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/scoliosis.html' }
    ]
  },
  {
    id: 'physical_extra_guillain_barre_syndrome',
    nameAr: 'متلازمة غيلان باريه',
    nameEn: 'Guillain-Barre Syndrome',
    symptomsAr: ['ضعف أو وخز يبدأ غالباً في الساقين', 'قد ينتشر الضعف إلى الجزء العلوي من الجسم', 'ضعف شديد قد يسبب شللاً مؤقتاً', 'قد تتأثر عضلات التنفس في الحالات الشديدة'],
    symptomsEn: ['Weakness or tingling that often begins in the legs', 'Weakness may spread to the upper body', 'Severe weakness may cause temporary paralysis', 'Breathing muscles may be affected in severe cases'],
    causesAr: ['اضطراب نادر يهاجم فيه الجهاز المناعي الجهاز العصبي المحيطي.', 'السبب غير معروف؛ وقد يسبق ظهوره أحياناً عدوى أو جراحة أو تطعيم.'],
    causesEn: ['A rare disorder in which the immune system attacks the peripheral nervous system.', 'The cause is unknown; an infection, surgery, or vaccination may sometimes precede it.'],
    treatmentsAr: ['رعاية طبية ومراقبة في المستشفى بسبب احتمال تأثر التنفس', 'تبادل البلازما ضمن خطة اختصاصية', 'علاجات دوائية أو مناعية يحددها الفريق الطبي بحسب الحالة'],
    treatmentsEn: ['Medical care and hospital monitoring because breathing may be affected', 'Plasma exchange as part of specialist-directed care', 'Clinician-selected medicines or immune therapies based on the case'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/guillainbarresyndrome.html' }
    ]
  },
  {
    id: 'physical_extra_huntingtons_disease',
    nameAr: 'مرض هنتنغتون',
    nameEn: "Huntington's Disease",
    symptomsAr: ['حركات لا إرادية', 'ضعف التناسق أو مشكلات التوازن', 'تراجع القدرة على المشي أو الكلام أو البلع مع تقدم المرض', 'قد تحدث تغيرات في التفكير والتعرف على أفراد الأسرة'],
    symptomsEn: ['Uncontrolled movements', 'Poor coordination or balance problems', 'Declining ability to walk, talk, or swallow as the disease progresses', 'Changes in thinking or recognizing family members may occur'],
    causesAr: ['مرض وراثي يؤدي إلى تدهور بعض الخلايا العصبية في الدماغ.', 'ينجم عن جين معيب موروث؛ إذا كان أحد الوالدين مصاباً، فاحتمال وراثة الجين لدى الطفل 50%.'],
    causesEn: ['An inherited disease that causes certain nerve cells in the brain to deteriorate.', 'It is caused by an inherited defective gene; if one parent has the disease, a child has a 50% chance of inheriting the gene.'],
    treatmentsAr: ['أدوية يصفها الطبيب لإدارة بعض الأعراض', 'دعم تأهيلي ووظيفي للتكيف مع تغير القدرات', 'رعاية طويلة الأمد وتخطيط داعم للمريض والأسرة'],
    treatmentsEn: ['Clinician-prescribed medicines to manage some symptoms', 'Rehabilitation and functional support to adapt to changes in abilities', 'Long-term care and supportive planning for the person and family'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/huntingtonsdisease.html' }
    ]
  },
  {
    id: 'physical_extra_muscular_dystrophy',
    nameAr: 'الحثل العضلي',
    nameEn: 'Muscular Dystrophy',
    symptomsAr: ['ضعف عضلي يزداد سوءاً مع الوقت', 'صعوبة المشي أو أداء الأنشطة اليومية', 'قد تتأثر أعضاء أخرى بحسب النوع'],
    symptomsEn: ['Muscle weakness that worsens over time', 'Difficulty walking or doing daily activities', 'Other organs may be affected depending on the type'],
    causesAr: ['مجموعة من الأمراض الجينية الناتجة عن تغير في جين واحد أو أكثر.', 'تؤثر التغيرات الجينية في البروتينات التي تقوي العضلات وتحميها؛ وقد تنتقل في العائلة أو تظهر لأول مرة لدى الشخص.'],
    causesEn: ['A group of genetic diseases caused by a change in one or more genes.', 'The gene changes affect proteins that strengthen and protect muscles; the condition may run in a family or occur for the first time in a person.'],
    treatmentsAr: ['علاج طبيعي ومهني لدعم الحركة والمهارات اليومية', 'رعاية تنفسية أو علاج للنطق والبلع وفق الاحتياجات', 'أجهزة مساعدة أو أدوية أو جراحة لمعالجة الأعراض والمضاعفات بحسب النوع'],
    treatmentsEn: ['Physical and occupational therapy to support mobility and daily skills', 'Respiratory care or speech and swallowing therapy as needed', 'Assistive devices, medicines, or surgery to address symptoms and complications based on type'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/musculardystrophy.html' }
    ]
  },
  {
    id: 'physical_extra_kidney_cancer',
    nameAr: 'سرطان الكلى',
    nameEn: 'Kidney Cancer',
    symptomsAr: ['قد لا تظهر أعراض في البداية', 'دم في البول', 'كتلة في البطن أو ألم مستمر في الخاصرة', 'فقدان وزن أو شهية دون سبب واضح'],
    symptomsEn: ['There may be no symptoms at first', 'Blood in the urine', 'An abdominal lump or persistent side pain', 'Unexplained weight or appetite loss'],
    causesAr: ['ينشأ السرطان في بطانة الأنابيب الدقيقة داخل الكلى.', 'يزداد الاحتمال مع العمر والتدخين وبعض الحالات الوراثية أو إساءة استخدام أدوية الألم لفترة طويلة.'],
    causesEn: ['The cancer forms in the lining of tiny tubes inside the kidneys.', 'Risk increases with age, smoking, certain inherited conditions, or long-term misuse of pain medicines.'],
    treatmentsAr: ['جراحة وفق عمر المريض وصحته ومرحلة الورم', 'علاج إشعاعي أو كيميائي بحسب نوع الحالة', 'علاج بيولوجي أو موجّه يختاره الفريق الطبي'],
    treatmentsEn: ['Surgery based on age, overall health, and cancer stage', 'Radiation or chemotherapy depending on the case', 'Biologic or targeted therapy selected by the medical team'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/kidneycancer.html' }
    ]
  },
  {
    id: 'physical_extra_esophageal_cancer',
    nameAr: 'سرطان المريء',
    nameEn: 'Esophageal Cancer',
    symptomsAr: ['قد لا تظهر أعراض مبكرة', 'صعوبة أو ألم عند البلع', 'فقدان الوزن', 'بحة الصوت أو سعال لا يزول'],
    symptomsEn: ['There may be no early symptoms', 'Difficulty or pain with swallowing', 'Weight loss', 'Hoarseness or a persistent cough'],
    causesAr: ['يبدأ السرطان في أنسجة المريء، وهو الأنبوب الذي ينقل الطعام والسوائل من الحلق إلى المعدة.', 'يزداد الخطر مع التدخين أو الإفراط في شرب الكحول أو الارتجاع الحمضي، كما يزداد مع العمر.'],
    causesEn: ['The cancer begins in the esophagus, the tube carrying food and liquids from the throat to the stomach.', 'Risk is higher with smoking, heavy alcohol use, or acid reflux, and increases with age.'],
    treatmentsAr: ['جراحة وفق موقع الورم ومدى انتشاره', 'علاج إشعاعي أو كيميائي بحسب خطة الاختصاصي', 'دعم غذائي عند صعوبة البلع بسبب السرطان أو علاجه'],
    treatmentsEn: ['Surgery based on tumor location and spread', 'Radiation or chemotherapy as part of specialist-directed care', 'Nutritional support if swallowing is difficult because of the cancer or its treatment'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/esophagealcancer.html' }
    ]
  },
  {
    id: 'physical_extra_uterine_cancer',
    nameAr: 'سرطان الرحم',
    nameEn: 'Uterine Cancer',
    symptomsAr: ['نزف مهبلي غير طبيعي', 'ألم أو ضغط في الحوض', 'إفراز مهبلي غير معتاد', 'كتلة في الحوض أو صعوبة في التبول أحياناً'],
    symptomsEn: ['Abnormal vaginal bleeding', 'Pelvic pain or pressure', 'Unusual vaginal discharge', 'A pelvic mass or sometimes difficulty urinating'],
    causesAr: ['يتكون في أنسجة الرحم؛ والسبب غير معروف.', 'قد تزيد عوامل تغيّر توازن الهرمونات الخطر، ومنها السمنة ومتلازمة الأيض وبعض العوامل الوراثية أو العلاجية.'],
    causesEn: ['It forms in uterine tissue; the cause is unknown.', 'Factors that alter hormone balance may increase risk, including obesity, metabolic syndrome, and some genetic or treatment-related factors.'],
    treatmentsAr: ['جراحة لإزالة الرحم بحسب تقييم الفريق الطبي', 'علاج هرموني في حالات مختارة', 'علاج إشعاعي أو كيميائي وفق نوع السرطان ومدى انتشاره'],
    treatmentsEn: ['Surgery to remove the uterus as assessed by the medical team', 'Hormone therapy in selected cases', 'Radiation or chemotherapy based on cancer type and spread'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/uterinecancer.html' }
    ]
  },
  {
    id: 'physical_extra_testicular_cancer',
    nameAr: 'سرطان الخصية',
    nameEn: 'Testicular Cancer',
    symptomsAr: ['كتلة أو تورم غير مؤلم في إحدى الخصيتين', 'تغير في ملمس الخصية', 'ألم خافت أسفل البطن أو في الأربية', 'تجمع مفاجئ للسوائل في كيس الصفن أو ألم بالخصية'],
    symptomsEn: ['A painless lump or swelling in a testicle', 'A change in how a testicle feels', 'A dull ache in the lower abdomen or groin', 'Sudden fluid buildup in the scrotum or testicular discomfort'],
    causesAr: ['ينشأ السرطان في أنسجة إحدى الخصيتين أو كلتيهما.', 'لا يُعرف سبب دقيق؛ وتشمل عوامل الخطر تطور الخصية غير الطبيعي أو الخصية المعلقة أو الإصابة السابقة أو التاريخ العائلي.'],
    causesEn: ['The cancer develops in the tissue of one or both testicles.', 'The exact cause is unknown; risk factors include abnormal testicular development, an undescended testicle, prior cancer, or family history.'],
    treatmentsAr: ['جراحة وفق التشخيص وخطة الفريق المختص', 'علاج إشعاعي أو كيميائي عند ملاءمته', 'مراقبة وفحوص متابعة بعد الجراحة عندما يوصي الطبيب بذلك'],
    treatmentsEn: ['Surgery as part of the diagnostic and specialist care plan', 'Radiation or chemotherapy when appropriate', 'Surveillance and follow-up testing after surgery when recommended by a clinician'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/testicularcancer.html' }
    ]
  },
  {
    id: 'physical_extra_hodgkin_lymphoma',
    nameAr: 'لمفوما هودجكين',
    nameEn: 'Hodgkin Lymphoma',
    symptomsAr: ['تورم غير مؤلم في العقد اللمفاوية بالعنق أو الإبط أو الأربية', 'حمى دون سبب معروف أو تعرق ليلي غزير', 'فقدان وزن غير مبرر', 'حكة جلدية أو إرهاق'],
    symptomsEn: ['Painless swollen lymph nodes in the neck, armpits, or groin', 'Unexplained fever or drenching night sweats', 'Unexplained weight loss', 'Itchy skin or fatigue'],
    causesAr: ['سرطان يتطور في الجهاز اللمفاوي، وهو جزء من جهاز المناعة.', 'السبب غير معروف؛ وقد يزداد الخطر مع التقدم في العمر أو عدوى سابقة بفيروس إبشتاين-بار أو وجود تاريخ عائلي.'],
    causesEn: ['A cancer that develops in the lymph system, part of the immune system.', 'The cause is unknown; risk may be higher with age, prior Epstein-Barr virus infection, or family history.'],
    treatmentsAr: ['علاج كيميائي', 'علاج إشعاعي بحسب تقييم الاختصاصي', 'علاج موجّه أو مناعي وفق نوع المرض ومرحلته'],
    treatmentsEn: ['Chemotherapy', 'Radiation therapy as assessed by a specialist', 'Targeted or immunotherapy based on disease type and stage'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/hodgkinlymphoma.html' }
    ]
  },
  {
    id: 'physical_extra_multiple_myeloma',
    nameAr: 'الورم النقوي المتعدد',
    nameEn: 'Multiple Myeloma',
    symptomsAr: ['ألم العظام، غالباً في الظهر أو الأضلاع', 'كسور العظام', 'ضعف أو إرهاق', 'فقدان الوزن أو عدوى وحمى متكررة', 'عطش شديد أو كثرة التبول'],
    symptomsEn: ['Bone pain, often in the back or ribs', 'Bone fractures', 'Weakness or fatigue', 'Weight loss or frequent infections and fevers', 'Excessive thirst or frequent urination'],
    causesAr: ['سرطان يبدأ في خلايا البلازما، وهي نوع من خلايا الدم البيضاء، وتتجمع خلاياه في نخاع العظم والعظام.', 'السبب الدقيق غير معروف؛ وهو أكثر شيوعاً لدى كبار السن وقد يسري في بعض العائلات.'],
    causesEn: ['A cancer that begins in plasma cells, a type of white blood cell, and accumulates in bone marrow and bones.', 'The exact cause is unknown; it is more common in older adults and can run in some families.'],
    treatmentsAr: ['مراقبة اختصاصية للحالات التي لا تسبب أعراضاً', 'علاج كيميائي أو موجّه وفق مرحلة المرض والأعراض', 'زرع خلايا جذعية أو علاج إشعاعي لبعض الحالات وفق تقييم الفريق الطبي'],
    treatmentsEn: ['Specialist monitoring for cases without symptoms', 'Chemotherapy or targeted therapy based on disease stage and symptoms', 'Stem cell transplant or radiation for some cases as assessed by the medical team'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/multiplemyeloma.html' }
    ]
  },
  {
    id: 'physical_extra_pulmonary_fibrosis',
    nameAr: 'التليف الرئوي',
    nameEn: 'Pulmonary Fibrosis',
    symptomsAr: ['ضيق التنفس', 'سعال جاف مستمر', 'إرهاق', 'فقدان وزن غير مبرر أو ألم في العضلات والمفاصل'],
    symptomsEn: ['Shortness of breath', 'Persistent dry cough', 'Fatigue', 'Unexplained weight loss or muscle and joint aches'],
    causesAr: ['يتندب نسيج الرئة العميق ويصبح سميكاً وصلباً، ما يصعّب التنفس.', 'قد تشمل الأسباب ملوثات بيئية أو بعض الأدوية أو أمراض النسيج الضام أو أمراض الرئة الخلالية؛ وغالباً لا يُعرف السبب.'],
    causesEn: ['Deep lung tissue becomes scarred, thick, and stiff, making breathing difficult.', 'Possible causes include environmental pollutants, some medicines, connective tissue diseases, or interstitial lung disease; often the cause is unknown.'],
    treatmentsAr: ['أدوية يختارها الطبيب للمساعدة على تدبير الحالة', 'علاج بالأكسجين عند الحاجة', 'تأهيل رئوي أو زراعة رئة لبعض الحالات وفق تقييم الاختصاصي'],
    treatmentsEn: ['Clinician-selected medicines to help manage the condition', 'Oxygen therapy when needed', 'Pulmonary rehabilitation or lung transplant for some cases as assessed by a specialist'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/pulmonaryfibrosis.html' }
    ]
  },
  {
    id: 'physical_extra_cushings_syndrome',
    nameAr: 'متلازمة كوشينغ',
    nameEn: 'Cushing Syndrome',
    symptomsAr: ['زيادة الوزن خاصة حول البطن والجزء العلوي من الجسم', 'وجه مستدير أو تراكم الدهون خلف الرقبة', 'علامات تمدد أرجوانية عريضة', 'إرهاق شديد أو ضعف العضلات', 'ارتفاع ضغط الدم أو سكر الدم وسهولة حدوث الكدمات'],
    symptomsEn: ['Weight gain, especially around the abdomen and upper body', 'Rounded face or fat buildup behind the neck', 'Wide purple stretch marks', 'Severe fatigue or muscle weakness', 'High blood pressure or blood glucose and easy bruising'],
    causesAr: ['يحدث عندما يرتفع هرمون الكورتيزول في الجسم لفترة طويلة.', 'السبب الأكثر شيوعاً استخدام جرعات عالية من أدوية الكورتيكوستيرويد مدة طويلة؛ وقد تسبب أورام الغدة النخامية أو الكظرية أو غيرها حالات أقل شيوعاً.'],
    causesEn: ['It occurs when cortisol levels in the body remain too high for a long time.', 'The most common cause is long-term use of high-dose glucocorticoid medicines; pituitary, adrenal, or other tumors cause less common cases.'],
    treatmentsAr: ['تعديل دواء الكورتيكوستيرويد تدريجياً فقط بتوجيه الطبيب عند كونه السبب', 'جراحة لإزالة ورم مسبب عند ملاءمتها', 'علاج إشعاعي أو أدوية لخفض الكورتيزول وفق تقييم الاختصاصي'],
    treatmentsEn: ['Gradual adjustment of glucocorticoid medicine only under clinician direction when it is the cause', 'Surgery to remove a causative tumor when appropriate', 'Radiation or cortisol-lowering medicines as assessed by a specialist'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/cushingsyndrome.html' }
    ]
  },
  {
    id: 'physical_extra_marfan_syndrome',
    nameAr: 'متلازمة مارفان',
    nameEn: 'Marfan Syndrome',
    symptomsAr: ['طول ونحافة مع رخاوة المفاصل', 'مشكلات في القلب أو الأوعية الدموية مثل ضعف الشريان الأورطي', 'مشكلات في العظام أو العينين أو الجلد أو الرئتين'],
    symptomsEn: ['Tall, slender build with loose joints', 'Heart or blood vessel problems such as a weakened aorta', 'Problems affecting bones, eyes, skin, or lungs'],
    causesAr: ['اضطراب يصيب النسيج الضام الذي يدعم الجلد والعظام والأوعية الدموية والأعضاء.', 'ينجم عن خلل في جين الفيبرلين؛ وقد تختلف شدة الأعراض بين الأشخاص.'],
    causesEn: ['A disorder affecting connective tissue that supports the skin, bones, blood vessels, and organs.', 'It is caused by a problem in the fibrillin gene; symptom severity varies among people.'],
    treatmentsAr: ['متابعة دورية للقلب والأوعية والعينين والهيكل العظمي', 'أدوية يحددها الطبيب للمساعدة في تقليل مخاطر المضاعفات', 'جراحة أو علاجات أخرى لمعالجة مشكلات محددة عند الحاجة'],
    treatmentsEn: ['Regular monitoring of the heart, blood vessels, eyes, and skeleton', 'Clinician-selected medicines to help reduce complication risks', 'Surgery or other therapies to address specific problems when needed'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/marfansyndrome.html' }
    ]
  },
  {
    id: 'physical_extra_ehlers_danlos_syndrome',
    nameAr: 'متلازمة إهلرز-دانلوس',
    nameEn: 'Ehlers-Danlos Syndrome',
    symptomsAr: ['مفاصل رخوة', 'هشاشة الأوعية الدموية الصغيرة', 'تندب أو التئام غير طبيعي للجروح', 'جلد ناعم ومخملي ومطاطي مع سهولة حدوث الكدمات'],
    symptomsEn: ['Loose joints', 'Fragile small blood vessels', 'Abnormal scarring or wound healing', 'Soft, velvety, stretchy skin that bruises easily'],
    causesAr: ['مجموعة اضطرابات وراثية تضعف النسيج الضام الذي يدعم الجلد والعظام والأوعية الدموية والأعضاء.', 'تتسبب تغيرات جينية في إضعاف النسيج الضام، وتختلف الأنواع والسمات المصاحبة لها.'],
    causesEn: ['A group of inherited disorders that weaken connective tissue supporting the skin, bones, blood vessels, and organs.', 'Gene changes weaken connective tissue; types and associated features vary.'],
    treatmentsAr: ['تدبير الأعراض ضمن خطة طبية فردية', 'علاج طبيعي لدعم المفاصل والحركة', 'تعلم حماية المفاصل والوقاية من الإصابات'],
    treatmentsEn: ['Manage symptoms under an individualized medical plan', 'Physical therapy to support joints and mobility', 'Learn joint-protection strategies and injury prevention'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/ehlersdanlossyndrome.html' }
    ]
  },
  {
    id: 'physical_extra_sjogrens_disease',
    nameAr: 'مرض شوغرن',
    nameEn: "Sjögren's Disease",
    symptomsAr: ['جفاف العينين مع حكة أو حرقة أو تشوش الرؤية', 'جفاف الفم والحلق وصعوبة البلع أو الكلام', 'ألم المفاصل والعضلات أو جفاف الجلد', 'خدر أو وخز في اليدين أو القدمين أو إرهاق'],
    symptomsEn: ['Dry eyes with itching, burning, or blurred vision', 'Dry mouth and throat with difficulty swallowing or speaking', 'Joint or muscle pain or dry skin', 'Numbness or tingling in the hands or feet, or fatigue'],
    causesAr: ['مرض مناعي ذاتي يهاجم فيه الجهاز المناعي الغدد المنتجة للرطوبة في العينين والفم وأجزاء أخرى.', 'السبب غير معروف؛ وقد تتفاعل عوامل وراثية وبيئية، وربما تحفز عدوى سابقة الحالة لدى بعض الأشخاص.'],
    causesEn: ['An autoimmune disease in which the immune system attacks moisture-producing glands in the eyes, mouth, and other areas.', 'The cause is unknown; genetic and environmental factors may interact, and a prior infection may trigger the disease in some people.'],
    treatmentsAr: ['دموع صناعية أو مراهم لتخفيف جفاف العين', 'بدائل اللعاب أو أدوية يصفها الطبيب لتخفيف جفاف الفم', 'عناية بالأسنان ومتابعة طبية للأعراض والمضاعفات'],
    treatmentsEn: ['Artificial tears or ointments to relieve dry eyes', 'Saliva substitutes or clinician-prescribed medicines to relieve dry mouth', 'Dental care and medical follow-up for symptoms and complications'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/sjogrensdisease.html' }
    ]
  },
  {
    id: 'physical_extra_scleroderma',
    nameAr: 'تصلب الجلد',
    nameEn: 'Scleroderma',
    symptomsAr: ['بقع جلدية سميكة أو قاسية ومشدودة', 'قد يتغير لون الجلد', 'تيبس وألم المفاصل أو إرهاق', 'قد يحدث صعوبة في البلع أو حرقة المعدة أو ضيق التنفس'],
    symptomsEn: ['Thick, hard, tight patches of skin', 'Skin color changes may occur', 'Joint stiffness and pain or fatigue', 'Difficulty swallowing, heartburn, or shortness of breath may occur'],
    causesAr: ['مرض مناعي ذاتي يسبب التهاباً وسماكة في الجلد أو أنسجة أخرى.', 'السبب غير معروف؛ وقد تتفاعل عوامل جينية وبيئية ومناعية وهرمونية.'],
    causesEn: ['An autoimmune disease causing inflammation and thickening in the skin or other tissues.', 'The cause is unknown; genetic, environmental, immune, and hormonal factors may interact.'],
    treatmentsAr: ['أدوية يختارها الطبيب لتخفيف الأعراض والحد من المضاعفات', 'علاج طبيعي أو مهني لدعم القوة والقيام بالمهام اليومية', 'رعاية أسنان منتظمة ومتابعة اختصاصية للأعضاء المتأثرة'],
    treatmentsEn: ['Clinician-selected medicines to relieve symptoms and limit complications', 'Physical or occupational therapy to support strength and daily activities', 'Regular dental care and specialist monitoring of affected organs'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/scleroderma.html' }
    ]
  },
  {
    id: 'physical_extra_diabetes_insipidus',
    nameAr: 'السكري الكاذب',
    nameEn: 'Diabetes Insipidus',
    symptomsAr: ['كثرة التبول', 'عطش شديد وشرب كميات كبيرة من السوائل', 'إنتاج كميات كبيرة من البول المخفف', 'قد يسبب التبول اضطراب النوم أو التبول اللاإرادي'],
    symptomsEn: ['Frequent urination', 'Extreme thirst and drinking large amounts of fluid', 'Producing large amounts of dilute urine', 'Urination may disrupt sleep or cause bedwetting'],
    causesAr: ['حالة تؤثر في طريقة تعامل الكلى مع السوائل، وهي مختلفة عن داء السكري المرتبط بالإنسولين وسكر الدم.', 'تنجم عادةً عن مشكلة في الغدة النخامية أو الكليتين.'],
    causesEn: ['A condition affecting how the kidneys handle fluids, distinct from diabetes mellitus involving insulin and blood sugar.', 'It is usually caused by a problem with the pituitary gland or kidneys.'],
    treatmentsAr: ['تقييم طبي لتحديد سبب الحالة ونوعها', 'أدوية قد تساعد على ضبط التبول وفق خطة الطبيب', 'إرشادات فردية لإدارة السوائل ومتابعة توازنها مع مقدم الرعاية'],
    treatmentsEn: ['Medical assessment to identify the cause and type', 'Medicines may help manage urination as part of a clinician-directed plan', 'Individualized guidance on fluid management and monitoring with a health care provider'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/diabetesinsipidus.html' }
    ]
  },
  {
    id: 'physical_extra_raynaud_phenomenon',
    nameAr: 'ظاهرة رينو',
    nameEn: 'Raynaud Phenomenon',
    symptomsAr: ['برودة وخدر أصابع اليدين أو القدمين عند التعرض للبرد أو التوتر', 'قد يتغير لون الجلد إلى الأبيض أو الأزرق', 'وخز أو خفقان أو احمرار عند عودة تدفق الدم'],
    symptomsEn: ['Cold, numb fingers or toes in response to cold or stress', 'Skin may turn white or blue', 'Tingling, throbbing, or redness as blood flow returns'],
    causesAr: ['تضيق الأوعية الدموية في اليدين والقدمين بسرعة عند البرد أو التوتر وتبقى متضيقة مدة أطول.', 'النوع الأولي سببه غير معروف؛ أما النوع الثانوي فقد يرتبط بأمراض أخرى أو التعرض للبرد أو بعض المواد الكيميائية.'],
    causesEn: ['Blood vessels in the hands and feet narrow quickly in response to cold or stress and stay narrowed longer.', 'The cause of primary Raynaud phenomenon is unknown; secondary cases may be linked to other diseases, cold exposure, or certain chemicals.'],
    treatmentsAr: ['الحفاظ على دفء الجسم واليدين والقدمين في الطقس البارد', 'تدفئة اليدين أو القدمين تدريجياً أثناء النوبة وتجنب المحفزات المعروفة', 'مراجعة الطبيب للعلاج الدوائي أو الإجراءات إذا لم تكفِ تدابير الوقاية'],
    treatmentsEn: ['Keep the body, hands, and feet warm in cold weather', 'Warm the hands or feet gradually during an attack and avoid known triggers', 'Consult a clinician about medicines or procedures if preventive measures are not enough'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/raynaudphenomenon.html' }
    ]
  },
  {
    id: 'physical_extra_hemochromatosis',
    nameAr: 'داء ترسب الأصبغة الدموية',
    nameEn: 'Hemochromatosis',
    symptomsAr: ['قد لا تظهر أعراض لدى بعض الأشخاص', 'ألم المفاصل', 'تعب أو ضعف عام', 'فقدان الوزن أو ألم المعدة'],
    symptomsEn: ['Some people may have no symptoms', 'Joint pain', 'Fatigue or general weakness', 'Weight loss or stomach pain'],
    causesAr: ['يمتص الجسم كمية من الحديد تفوق حاجته ويخزن الفائض في الأنسجة، خاصة الكبد والقلب والبنكرياس.', 'النوع الأولي وراثي؛ أما النوع الثانوي فقد ينتج عن حالات أخرى مثل فقر الدم أو أمراض الكبد أو نقل الدم.'],
    causesEn: ['The body absorbs more iron than it needs and stores excess in tissues, especially the liver, heart, and pancreas.', 'The primary type is inherited; the secondary type may result from other conditions such as anemia, liver disease, or blood transfusions.'],
    treatmentsAr: ['إزالة الدم والحديد الزائد بإجراء يحدده الطبيب', 'أدوية للتعامل مع تراكم الحديد عند ملاءمتها', 'تغييرات غذائية يوصي بها مقدم الرعاية وفق الحالة'],
    treatmentsEn: ['Remove blood and excess iron through a clinician-directed procedure', 'Use medicines to address iron buildup when appropriate', 'Make dietary changes recommended by a health care provider for the individual case'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/hemochromatosis.html' }
    ]
  },
  {
    id: 'physical_extra_wilson_disease',
    nameAr: 'مرض ويلسون',
    nameEn: 'Wilson Disease',
    symptomsAr: ['حلقة بنية صدئة حول قرنية العين', 'قد تظهر مشكلات في الكبد أو الجهاز العصبي المركزي', 'قد تتأثر الكليتان أو العينان'],
    symptomsEn: ['A rusty-brown ring around the cornea', 'Liver or central nervous system problems may occur', 'The kidneys or eyes may be affected'],
    causesAr: ['اضطراب وراثي يمنع الجسم من التخلص من النحاس الزائد.', 'يبدأ النحاس بالتراكم في الكبد، ثم قد يصل إلى الدم ويؤذي الدماغ والكليتين والعينين.'],
    causesEn: ['An inherited disorder that prevents the body from removing excess copper.', 'Copper builds up in the liver and may enter the bloodstream, damaging the brain, kidneys, and eyes.'],
    treatmentsAr: ['أدوية يصفها الطبيب لإزالة النحاس الزائد من الجسم', 'اتباع نظام غذائي منخفض النحاس وفق إرشادات مقدم الرعاية', 'متابعة طبية مستمرة والالتزام بخطة العلاج طويلة الأمد'],
    treatmentsEn: ['Clinician-prescribed medicines to remove excess copper from the body', 'Follow a low-copper diet under health care guidance', 'Ongoing medical follow-up and adherence to the long-term care plan'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/wilsondisease.html' }
    ]
  },
  {
    id: 'physical_extra_concussion',
    nameAr: 'الارتجاج',
    nameEn: 'Concussion',
    symptomsAr: ['صداع أو ألم في الرقبة', 'غثيان أو دوار أو طنين الأذن', 'تعب أو شعور بالذهول أو اختلاف عن المعتاد', 'قد تظهر الأعراض بعد الإصابة بأيام أو أسابيع'],
    symptomsEn: ['Headache or neck pain', 'Nausea, dizziness, or ringing in the ears', 'Fatigue, feeling dazed, or not feeling like oneself', 'Symptoms may begin days or weeks after the injury'],
    causesAr: ['إصابة دماغية تحدث عندما تؤدي ضربة للرأس أو الجسم إلى تحرك الرأس والدماغ بسرعة ذهاباً وإياباً.', 'قد تنتج عن سقوط أو إصابة رياضية أو حادث مركبة أو ضربة أو اهتزاز شديد.'],
    causesEn: ['A brain injury that occurs when a hit to the head or body makes the head and brain move rapidly back and forth.', 'It may result from a fall, sports injury, vehicle crash, blow, or violent shaking.'],
    treatmentsAr: ['الراحة مهمة لمساعدة الدماغ على التعافي', 'تقليل الأنشطة البدنية والأنشطة التي تتطلب تركيزاً في البداية وفق إرشادات مقدم الرعاية', 'العودة التدريجية إلى الأنشطة المعتادة بعد موافقة مقدم الرعاية'],
    treatmentsEn: ['Rest is important to help the brain heal', 'Initially limit physical and concentration-intensive activities as advised by a health care provider', 'Return gradually to normal activities when cleared by a health care provider'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/concussion.html' }
    ]
  },
  {
    id: 'physical_extra_hydrocephalus',
    nameAr: 'استسقاء الدماغ',
    nameEn: 'Hydrocephalus',
    symptomsAr: ['زيادة السائل الدماغي الشوكي وضغطه على الدماغ', 'صداع وغثيان أو قيء', 'تشوش الرؤية أو مشكلات التوازن', 'تغيرات في التحكم بالمثانة أو التفكير والذاكرة', 'كبر غير معتاد في الرأس في النوع الخلقي'],
    symptomsEn: ['Excess cerebrospinal fluid putting pressure on the brain', 'Headache, nausea, or vomiting', 'Blurred vision or balance problems', 'Changes in bladder control, thinking, or memory', 'Unusually large head in congenital cases'],
    causesAr: ['تراكم كمية زائدة من السائل الدماغي الشوكي داخل الدماغ.', 'قد يكون خلقياً بسبب مشكلات جينية أو نمو الجنين، أو مكتسباً بعد إصابة الرأس أو السكتة أو العدوى أو الورم أو نزف الدماغ.'],
    causesEn: ['Too much cerebrospinal fluid builds up in the brain.', 'It may be congenital due to genetic or fetal-development problems, or acquired after head injury, stroke, infection, tumor, or brain bleeding.'],
    treatmentsAr: ['جراحة لتركيب تحويلة لتصريف السائل عند الحاجة', 'أدوية ضمن خطة الطبيب', 'علاج تأهيلي لدعم الوظائف المتأثرة'],
    treatmentsEn: ['Surgery to place a shunt to drain fluid when needed', 'Medicines as part of a clinician-directed plan', 'Rehabilitation therapy to support affected functions'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/hydrocephalus.html' }
    ]
  },
  {
    id: 'physical_extra_encephalitis',
    nameAr: 'التهاب الدماغ',
    nameEn: 'Encephalitis',
    symptomsAr: ['حمى أو إرهاق أو صداع أو آلام الجسم', 'صداع شديد أو تيبس الرقبة أو قيء', 'تشنجات أو تغيرات سلوكية أو نعاس', 'ضعف العضلات أو شلل جزئي في الأطراف'],
    symptomsEn: ['Fever, fatigue, headache, or body aches', 'Severe headache, stiff neck, or vomiting', 'Seizures, behavior changes, or drowsiness', 'Muscle weakness or partial paralysis of the limbs'],
    causesAr: ['تورم والتهاب في الدماغ يحدث عندما تنشط عدوى أو حالة طبية الجهاز المناعي.', 'العدوى الفيروسية هي السبب الأكثر شيوعاً؛ وقد يحدث التهاب مناعي ذاتي أو أسباب بكتيرية أو فطرية أو طفيلية أقل شيوعاً.'],
    causesEn: ['Brain inflammation occurs when an infection or medical condition activates the immune system.', 'Viral infection is the most common cause; autoimmune, bacterial, fungal, or parasitic causes are less common.'],
    treatmentsAr: ['رعاية طبية عاجلة وغالباً في المستشفى', 'علاج دوائي يحدده الفريق الطبي وفق سبب الالتهاب', 'رعاية داعمة تشمل الراحة والتغذية والسوائل، وقد يلزم تأهيل بعد استقرار الحالة'],
    treatmentsEn: ['Urgent medical care, often in a hospital', 'Clinician-directed medicines based on the cause of inflammation', 'Supportive care including rest, nutrition, and fluids; rehabilitation may be needed after stabilization'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/encephalitis.html' }
    ]
  },
  {
    id: 'physical_extra_restless_legs_syndrome',
    nameAr: 'متلازمة تململ الساقين',
    nameEn: 'Restless Legs Syndrome',
    symptomsAr: ['رغبة قوية في تحريك الساقين', 'إحساس مزعج في الساقين عند الاستلقاء أو الجلوس، مثل الزحف أو الوخز أو الحرقة', 'تتحسن الأعراض مؤقتاً بالحركة', 'صعوبة في بدء النوم أو استمراره'],
    symptomsEn: ['A strong urge to move the legs', 'Uncomfortable sensations while lying down or sitting, such as crawling, tingling, or burning', 'Movement temporarily relieves symptoms', 'Difficulty falling or staying asleep'],
    causesAr: ['لا يُعرف السبب في معظم الحالات.', 'قد ترتبط بعض الحالات بمرض أو حمل أو أدوية مؤقتاً، وقد يزيد الكافيين أو التبغ أو الكحول الأعراض.'],
    causesEn: ['The cause is unknown in most cases.', 'Some cases may be associated with an illness, pregnancy, or medicines; caffeine, tobacco, or alcohol may worsen symptoms.'],
    treatmentsAr: ['اتباع عادات نوم منتظمة', 'استخدام تقنيات الاسترخاء وممارسة نشاط بدني معتدل نهاراً', 'مراجعة مقدم الرعاية بشأن الأدوية إذا لم تكفِ التغييرات السلوكية'],
    treatmentsEn: ['Maintain regular sleep habits', 'Use relaxation techniques and moderate daytime exercise', 'Consult a health care provider about medicines if lifestyle changes are not enough'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/restlesslegs.html' }
    ]
  },
  {
    id: 'physical_extra_cholera',
    nameAr: 'الكوليرا',
    nameEn: 'Cholera',
    symptomsAr: ['إسهال مائي', 'قيء', 'تقلصات في الساقين', 'قد يحدث جفاف أو صدمة عند فقدان السوائل الشديد'],
    symptomsEn: ['Watery diarrhea', 'Vomiting', 'Leg cramps', 'Dehydration or shock may occur with severe fluid loss'],
    causesAr: ['عدوى بكتيرية تنتقل عادة عبر طعام أو ماء ملوث بالبراز.', 'قد تحدث الفاشيات بعد الكوارث أو في المناطق التي تعاني من ضعف معالجة المياه والصرف الصحي.'],
    causesEn: ['A bacterial infection usually spread through food or water contaminated with feces.', 'Outbreaks may occur after disasters or in areas with inadequate water and sewage treatment.'],
    treatmentsAr: ['تعويض السوائل والأملاح بمحلول الإماهة الفموي', 'سوائل وريدية للحالات الشديدة تحت رعاية طبية', 'مضادات حيوية لبعض الحالات وفق تقييم مقدم الرعاية'],
    treatmentsEn: ['Replace fluids and salts with an oral rehydration solution', 'Intravenous fluids for severe cases under medical care', 'Antibiotics for some cases as assessed by a health care provider'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/cholera.html' }
    ]
  },
  {
    id: 'physical_extra_botulism',
    nameAr: 'التسمم الوشيقي',
    nameEn: 'Botulism',
    symptomsAr: ['رؤية مزدوجة أو ضبابية', 'تدلي الجفون أو صعوبة البلع', 'تداخل الكلام أو جفاف الفم', 'ضعف العضلات'],
    symptomsEn: ['Double or blurred vision', 'Drooping eyelids or difficulty swallowing', 'Slurred speech or dry mouth', 'Muscle weakness'],
    causesAr: ['مرض خطير تسببه مادة سامة تنتجها بكتيريا المطثية الوشيقية.', 'قد يحدث بعد تناول طعام ملوث بالسم، أو من جرح مصاب، أو ابتلاع رضيع أبواغ البكتيريا.'],
    causesEn: ['A serious illness caused by a toxin produced by Clostridium botulinum bacteria.', 'It may follow eating food contaminated with toxin, an infected wound, or an infant ingesting bacterial spores.'],
    treatmentsAr: ['رعاية طبية طارئة في المستشفى', 'مضاد للسموم يقدمه الفريق الطبي عند ملاءمته', 'رعاية مكثفة أو جراحة للجرح المصاب بحسب نوع الحالة'],
    treatmentsEn: ['Emergency medical care in a hospital', 'Antitoxin administered by the medical team when appropriate', 'Intensive care or surgery for an infected wound depending on the type'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/botulism.html' }
    ]
  },
  {
    id: 'physical_extra_rabies',
    nameAr: 'داء الكلب',
    nameEn: 'Rabies',
    symptomsAr: ['قد تبدأ الأعراض بحمى وصداع وإرهاق', 'قد يحدث لاحقاً ارتباك أو هلوسة أو شلل', 'تبدأ الأعراض عادة بعد التعرض لعضة حيوان مصاب'],
    symptomsEn: ['Early symptoms may include fever, headache, and fatigue', 'Confusion, hallucinations, or paralysis may develop later', 'Symptoms usually begin after exposure to the bite of an infected animal'],
    causesAr: ['مرض فيروسي قاتل ينتقل إلى الإنسان عبر عضة حيوان مصاب.', 'تشمل الحيوانات الناقلة بعض الحيوانات البرية والكلاب والقطط وحيوانات المزرعة.'],
    causesEn: ['A deadly viral disease transmitted to people through the bite of an infected animal.', 'Animals that may transmit it include some wild animals, dogs, cats, and farm animals.'],
    treatmentsAr: ['غسل موضع العضة جيداً فوراً', 'الحصول على رعاية طبية عاجلة بعد التعرض', 'بدء الوقاية بعد التعرض التي يحددها مقدم الرعاية دون تأخير'],
    treatmentsEn: ['Wash the bite wound thoroughly right away', 'Get urgent medical care after exposure', 'Begin post-exposure prevention as directed by a health care provider without delay'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/rabies.html' }
    ]
  },
  {
    id: 'physical_extra_rsv_infection',
    nameAr: 'عدوى الفيروس المخلوي التنفسي',
    nameEn: 'Respiratory Syncytial Virus Infection',
    symptomsAr: ['سيلان الأنف أو انخفاض الشهية', 'سعال أو عطاس أو حمى أو صفير', 'قد يظهر تهيج أو انخفاض النشاط أو صعوبة التنفس لدى الرضع الصغار'],
    symptomsEn: ['Runny nose or decreased appetite', 'Cough, sneezing, fever, or wheezing', 'Young infants may show irritability, decreased activity, or trouble breathing'],
    causesAr: ['عدوى فيروسية تصيب الجهاز التنفسي.', 'تنتقل عبر الهواء عند السعال أو العطاس، أو الملامسة المباشرة، أو لمس أسطح ملوثة ثم الوجه.'],
    causesEn: ['A viral infection affecting the respiratory system.', 'It spreads through the air when someone coughs or sneezes, direct contact, or touching contaminated surfaces and then the face.'],
    treatmentsAr: ['الراحة والسوائل للوقاية من الجفاف', 'رعاية لتخفيف الحمى أو الألم وفق إرشادات مقدم الرعاية', 'أكسجين أو رعاية في المستشفى عند حدوث عدوى شديدة'],
    treatmentsEn: ['Rest and fluids to help prevent dehydration', 'Care to ease fever or pain as directed by a health care provider', 'Oxygen or hospital care for severe infection'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/respiratorysyncytialvirusinfections.html' }
    ]
  },
  {
    id: 'physical_extra_alpha1_antitrypsin_deficiency',
    nameAr: 'نقص ألفا-1 مضاد التربسين',
    nameEn: 'Alpha-1 Antitrypsin Deficiency',
    symptomsAr: ['ضيق التنفس أو الصفير', 'التهابات رئوية متكررة', 'قد تحدث مشكلات كبدية، خاصة في الطفولة'],
    symptomsEn: ['Shortness of breath or wheezing', 'Repeated lung infections', 'Liver problems may occur, especially in childhood'],
    causesAr: ['اضطراب وراثي يؤدي إلى انخفاض بروتين ألفا-1 مضاد التربسين أو قصوره.', 'قد يتراكم البروتين غير الطبيعي في الكبد، بينما يؤدي نقصه إلى زيادة خطر تلف الرئتين.'],
    causesEn: ['An inherited disorder that causes low or abnormal alpha-1 antitrypsin protein.', 'Abnormal protein may build up in the liver, while low levels increase the risk of lung damage.'],
    treatmentsAr: ['تجنب التدخين والتعرض لدخان التبغ وملوثات الرئة', 'الوقاية من التهابات الجهاز التنفسي ومتابعتها مبكراً', 'رعاية رئوية أو كبدية متخصصة وفق الحالة'],
    treatmentsEn: ['Avoid smoking, secondhand smoke, and lung irritants', 'Prevent respiratory infections and seek early care for them', 'Get specialist lung or liver care based on the individual condition'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/alpha1antitrypsindeficiency.html' }
    ]
  },
  {
    id: 'physical_extra_atopic_dermatitis',
    nameAr: 'التهاب الجلد التأتبي',
    nameEn: 'Atopic Dermatitis',
    symptomsAr: ['حكة وجفاف الجلد', 'طفح جلدي قد يصبح سميكاً أو متقشراً', 'قد تظهر نوبات متكررة من تهيج الجلد'],
    symptomsEn: ['Itchy, dry skin', 'A rash that may become thickened or scaly', 'Repeated flares of skin irritation may occur'],
    causesAr: ['حالة جلدية مزمنة مرتبطة بخلل في حاجز الجلد واستجابة مناعية.', 'تتداخل عوامل وراثية وبيئية، وقد تثير بعض المهيجات أو المحسسات النوبات.'],
    causesEn: ['A chronic skin condition associated with a weakened skin barrier and immune response.', 'Genetic and environmental factors contribute, and irritants or allergens may trigger flares.'],
    treatmentsAr: ['ترطيب الجلد بانتظام بمرطبات مناسبة', 'تجنب المهيجات المعروفة واستخدام منظفات لطيفة', 'مراجعة مقدم الرعاية لاختيار علاج النوبات عند الحاجة'],
    treatmentsEn: ['Moisturize the skin regularly with suitable emollients', 'Avoid known irritants and use gentle cleansers', 'Consult a health care provider about treatment for flares when needed'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/eczema.html' }
    ]
  },
  {
    id: 'physical_extra_cellulitis',
    nameAr: 'التهاب النسيج الخلوي',
    nameEn: 'Cellulitis',
    symptomsAr: ['احمرار الجلد ودفؤه وألمه', 'تورم المنطقة المصابة', 'قد تحدث حمى أو قشعريرة'],
    symptomsEn: ['Red, warm, and painful skin', 'Swelling in the affected area', 'Fever or chills may occur'],
    causesAr: ['عدوى بكتيرية تصيب الطبقات العميقة من الجلد والأنسجة تحته.', 'تدخل البكتيريا غالباً عبر جرح أو شق في الجلد.'],
    causesEn: ['A bacterial infection of the deeper layers of skin and underlying tissue.', 'Bacteria often enter through a cut or break in the skin.'],
    treatmentsAr: ['الحصول على تقييم طبي سريع، خاصة إذا انتشر الاحمرار أو ظهرت حمى', 'اتباع العلاج الذي يحدده الطبيب للعدوى', 'رفع الطرف المصاب والراحة إذا أوصى مقدم الرعاية بذلك'],
    treatmentsEn: ['Seek prompt medical assessment, especially if redness spreads or fever develops', 'Follow the infection treatment plan prescribed by a clinician', 'Elevate and rest the affected limb if advised by a health care provider'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/cellulitis.html' }
    ]
  },
  {
    id: 'physical_extra_crohns_disease',
    nameAr: 'داء كرون',
    nameEn: 'Crohn Disease',
    symptomsAr: ['ألم وتقلصات في البطن', 'إسهال قد يكون مصحوباً بالدم', 'تعب أو فقدان وزن'],
    symptomsEn: ['Abdominal pain and cramps', 'Diarrhea that may contain blood', 'Fatigue or weight loss'],
    causesAr: ['مرض التهابي مزمن في الأمعاء.', 'السبب الدقيق غير معروف؛ وقد تسهم عوامل وراثية ومناعية وبيئية.'],
    causesEn: ['A chronic inflammatory disease of the intestines.', 'The exact cause is unknown; genetic, immune, and environmental factors may contribute.'],
    treatmentsAr: ['خطة علاج يضعها اختصاصي لتقليل الالتهاب والسيطرة على الأعراض', 'دعم غذائي مناسب ومتابعة نقص العناصر عند الحاجة', 'تقييم الجراحة عند حدوث مضاعفات أو عدم كفاية العلاج الطبي'],
    treatmentsEn: ['A specialist-directed plan to reduce inflammation and control symptoms', 'Appropriate nutrition support and assessment for deficiencies when needed', 'Surgical evaluation for complications or when medical care is insufficient'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/crohnsdisease.html' }
    ]
  },
  {
    id: 'physical_extra_dengue',
    nameAr: 'حمى الضنك',
    nameEn: 'Dengue',
    symptomsAr: ['حمى شديدة', 'صداع وألم خلف العينين أو في العضلات والمفاصل', 'غثيان أو طفح جلدي'],
    symptomsEn: ['High fever', 'Headache and pain behind the eyes or in muscles and joints', 'Nausea or rash'],
    causesAr: ['عدوى فيروسية تنتقل إلى الإنسان عبر لدغات بعوض مصاب.', 'تنتشر أساساً في المناطق الاستوائية وشبه الاستوائية.'],
    causesEn: ['A viral infection transmitted to people through bites from infected mosquitoes.', 'It occurs mainly in tropical and subtropical regions.'],
    treatmentsAr: ['طلب المشورة الطبية للتقييم ومراقبة علامات المرض الشديد', 'الراحة وشرب السوائل وفق إرشادات مقدم الرعاية', 'اتباع توجيهات الطبيب بشأن تسكين الأعراض وتجنب ما قد يزيد النزف'],
    treatmentsEn: ['Seek medical advice for assessment and monitoring for severe illness', 'Rest and drink fluids as advised by a health care provider', 'Follow clinician guidance for symptom relief and avoiding medicines that may increase bleeding'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/dengue.html' }
    ]
  },
  {
    id: 'physical_extra_impetigo',
    nameAr: 'القوباء',
    nameEn: 'Impetigo',
    symptomsAr: ['قروح جلدية حمراء قد تنفتح وتكوّن قشوراً بلون العسل', 'حكة حول القروح', 'قد تنتشر القروح إلى مناطق مجاورة'],
    symptomsEn: ['Red skin sores that may break open and form honey-colored crusts', 'Itching around the sores', 'Sores may spread to nearby areas'],
    causesAr: ['عدوى جلدية سطحية تسببها بكتيريا المكورات العنقودية أو العقدية.', 'تدخل البكتيريا عبر شقوق الجلد، وتنتشر العدوى بسهولة بالملامسة المباشرة.'],
    causesEn: ['A superficial skin infection caused by staphylococcal or streptococcal bacteria.', 'Bacteria enter through breaks in the skin, and the infection spreads easily through direct contact.'],
    treatmentsAr: ['اتباع العلاج الموضعي أو الفموي الذي يحدده الطبيب', 'تنظيف القروح وتغطيتها وفق تعليمات مقدم الرعاية', 'غسل اليدين وعدم مشاركة المناشف أو الأدوات الشخصية'],
    treatmentsEn: ['Use topical or oral treatment as directed by a clinician', 'Clean and cover sores as advised by a health care provider', 'Wash hands and avoid sharing towels or personal items'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/impetigo.html' }
    ]
  },
  {
    id: 'physical_extra_malaria',
    nameAr: 'الملاريا',
    nameEn: 'Malaria',
    symptomsAr: ['حمى وقشعريرة وتعرق', 'صداع أو آلام في الجسم', 'غثيان أو قيء'],
    symptomsEn: ['Fever, chills, and sweating', 'Headache or body aches', 'Nausea or vomiting'],
    causesAr: ['مرض تسببه طفيليات تنتقل عادة عبر لدغة بعوضة أنوفيلة مصابة.', 'قد تنتقل العدوى أيضاً عبر الدم الملوث أو من الأم إلى الجنين.'],
    causesEn: ['A disease caused by parasites, usually transmitted through the bite of an infected Anopheles mosquito.', 'Infection may also spread through contaminated blood or from a pregnant person to a fetus.'],
    treatmentsAr: ['طلب الرعاية الطبية سريعاً عند الاشتباه بالملاريا', 'استخدام علاج يختاره الطبيب بناءً على نوع الطفيلي والمنطقة والحالة', 'متابعة المضاعفات والالتزام بمتابعة مقدم الرعاية'],
    treatmentsEn: ['Seek prompt medical care if malaria is suspected', 'Use treatment selected by a clinician based on the parasite, region, and individual condition', 'Monitor for complications and follow up with a health care provider'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/malaria.html' }
    ]
  },
  {
    id: 'physical_extra_measles',
    nameAr: 'الحصبة',
    nameEn: 'Measles',
    symptomsAr: ['حمى وسعال وسيلان الأنف', 'احمرار ودمع العينين', 'طفح جلدي ينتشر من الوجه إلى الجسم'],
    symptomsEn: ['Fever, cough, and runny nose', 'Red, watery eyes', 'A rash that spreads from the face to the body'],
    causesAr: ['عدوى فيروسية شديدة الانتقال تنتشر عبر الهواء والرذاذ التنفسي.', 'قد يبقى الفيروس في الهواء أو على الأسطح مدة بعد مغادرة الشخص المصاب.'],
    causesEn: ['A highly contagious viral infection spread through the air and respiratory droplets.', 'The virus may remain in the air or on surfaces for a time after an infected person leaves.'],
    treatmentsAr: ['الاتصال بمقدم الرعاية قبل الذهاب إلى العيادة لتقليل نقل العدوى', 'الراحة والسوائل والرعاية الداعمة وفق المشورة الطبية', 'تقييم طبي فوري عند ظهور صعوبة التنفس أو علامات المضاعفات'],
    treatmentsEn: ['Call a health care provider before visiting to reduce transmission', 'Rest, fluids, and supportive care as medically advised', 'Get prompt medical assessment for breathing difficulty or signs of complications'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/measles.html' }
    ]
  },
  {
    id: 'physical_extra_meniere_disease',
    nameAr: 'مرض منيير',
    nameEn: 'Meniere Disease',
    symptomsAr: ['نوبات دوار شديدة', 'طنين أو إحساس بالضغط في الأذن', 'فقدان سمع متقلب، غالباً في أذن واحدة'],
    symptomsEn: ['Episodes of severe vertigo', 'Ringing or a feeling of pressure in the ear', 'Fluctuating hearing loss, often in one ear'],
    causesAr: ['اضطراب في الأذن الداخلية يؤثر في السمع والتوازن.', 'السبب غير معروف على وجه اليقين، وقد يرتبط بتغيرات السوائل داخل الأذن.'],
    causesEn: ['An inner-ear disorder that affects hearing and balance.', 'The exact cause is uncertain and may involve changes in inner-ear fluid.'],
    treatmentsAr: ['الجلوس أو الاستلقاء بأمان أثناء نوبة الدوار', 'إعادة تأهيل التوازن أو استخدام وسائل مساعدة وفق توصية المختص', 'مناقشة تدبير الأعراض وخيارات العلاج مع اختصاصي الأذن'],
    treatmentsEn: ['Sit or lie down safely during a vertigo episode', 'Use balance rehabilitation or assistive measures as recommended by a specialist', 'Discuss symptom management and treatment options with an ear specialist'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/menieresdisease.html' }
    ]
  },
  {
    id: 'physical_extra_mumps',
    nameAr: 'النكاف',
    nameEn: 'Mumps',
    symptomsAr: ['تورم مؤلم في الغدد اللعابية قرب الفك', 'حمى وصداع وآلام عضلية', 'تعب أو ألم عند المضغ والبلع'],
    symptomsEn: ['Painful swelling of salivary glands near the jaw', 'Fever, headache, and muscle aches', 'Fatigue or pain when chewing or swallowing'],
    causesAr: ['عدوى فيروسية تنتقل عبر اللعاب والرذاذ التنفسي.', 'قد تنتشر بمشاركة الأدوات أو الملامسة القريبة لشخص مصاب.'],
    causesEn: ['A viral infection spread through saliva and respiratory droplets.', 'It may spread by sharing items or close contact with an infected person.'],
    treatmentsAr: ['الراحة وشرب السوائل', 'استخدام كمادات باردة أو دافئة لتخفيف انزعاج الغدد', 'طلب المشورة الطبية ومراقبة علامات المضاعفات'],
    treatmentsEn: ['Rest and drink fluids', 'Use cool or warm compresses to ease gland discomfort', 'Seek medical advice and watch for signs of complications'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/mumps.html' }
    ]
  },
  {
    id: 'physical_extra_pelvic_inflammatory_disease',
    nameAr: 'مرض التهاب الحوض',
    nameEn: 'Pelvic Inflammatory Disease',
    symptomsAr: ['ألم أسفل البطن أو الحوض', 'إفرازات مهبلية غير معتادة', 'حمى أو ألم أثناء الجماع أو التبول'],
    symptomsEn: ['Lower abdominal or pelvic pain', 'Unusual vaginal discharge', 'Fever or pain during sex or urination'],
    causesAr: ['عدوى تصيب الأعضاء التناسلية العلوية، وغالباً ما تنتقل عبر بكتيريا تسبب عدوى منقولة جنسياً.', 'قد تسببها أحياناً بكتيريا أخرى، وقد تكون الأعراض خفيفة أو غير واضحة.'],
    causesEn: ['An infection of the upper reproductive organs, often caused by bacteria that cause sexually transmitted infections.', 'Other bacteria may sometimes cause it, and symptoms can be mild or absent.'],
    treatmentsAr: ['الحصول على تقييم وعلاج طبيين دون تأخير', 'إكمال خطة العلاج التي يحددها مقدم الرعاية ومتابعة التحسن', 'إبلاغ الشركاء واتباع إرشادات الفحص والوقاية التي يوصي بها الطبيب'],
    treatmentsEn: ['Get medical assessment and treatment without delay', 'Complete the care plan set by a health care provider and follow up on improvement', 'Inform partners and follow clinician advice about testing and prevention'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/pelvicinflammatorydisease.html' }
    ]
  },
  {
    id: 'physical_extra_primary_ovarian_insufficiency',
    nameAr: 'قصور المبيض الأولي',
    nameEn: 'Primary Ovarian Insufficiency',
    symptomsAr: ['عدم انتظام الدورة الشهرية أو انقطاعها', 'هبات ساخنة أو تعرق ليلي', 'صعوبة الحمل'],
    symptomsEn: ['Irregular or absent menstrual periods', 'Hot flashes or night sweats', 'Difficulty becoming pregnant'],
    causesAr: ['تتوقف المبايض عن العمل بصورة طبيعية قبل سن الأربعين.', 'قد يرتبط القصور بتغيرات كروموسومية أو مناعية أو علاجات طبية، لكن السبب قد لا يُعرف.'],
    causesEn: ['The ovaries stop functioning normally before age 40.', 'It may be associated with chromosomal or immune changes or medical treatments, though the cause may be unknown.'],
    treatmentsAr: ['مناقشة العلاج الهرموني الملائم والمخاطر مع مقدم الرعاية', 'متابعة صحة العظام والقلب وفق التقييم الطبي', 'استشارة اختصاصي الخصوبة بشأن خيارات الإنجاب إن رغبت المريضة'],
    treatmentsEn: ['Discuss appropriate hormone treatment and risks with a health care provider', 'Monitor bone and heart health as medically advised', 'Consult a fertility specialist about reproductive options if desired'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/primaryovarianinsufficiency.html' }
    ]
  },
  {
    id: 'physical_extra_rubella',
    nameAr: 'الحصبة الألمانية',
    nameEn: 'Rubella',
    symptomsAr: ['طفح جلدي يبدأ غالباً بالوجه', 'حمى خفيفة وتضخم العقد اللمفاوية', 'ألم المفاصل، خاصة لدى البالغات'],
    symptomsEn: ['A rash that often begins on the face', 'Mild fever and swollen lymph nodes', 'Joint pain, especially in adults'],
    causesAr: ['عدوى فيروسية تنتقل عبر الرذاذ التنفسي أو الملامسة المباشرة.', 'قد تنتقل من الحامل إلى الجنين وتسبب مضاعفات خلقية خطيرة.'],
    causesEn: ['A viral infection spread through respiratory droplets or direct contact.', 'It can pass from a pregnant person to the fetus and cause serious congenital complications.'],
    treatmentsAr: ['استشارة مقدم الرعاية، وبالأخص أثناء الحمل أو بعد التعرض خلاله', 'الراحة والسوائل والرعاية الداعمة للأعراض', 'اتباع إرشادات العزل والوقاية من نقل العدوى'],
    treatmentsEn: ['Consult a health care provider, especially during or after exposure in pregnancy', 'Rest, fluids, and supportive care for symptoms', 'Follow guidance to isolate and prevent transmission'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/rubella.html' }
    ]
  },
  {
    id: 'physical_extra_tetanus',
    nameAr: 'الكزاز',
    nameEn: 'Tetanus',
    symptomsAr: ['تشنج وتيبس عضلات الفك', 'صعوبة البلع', 'تشنجات عضلية مؤلمة أو تيبس عام'],
    symptomsEn: ['Jaw muscle spasms and stiffness', 'Difficulty swallowing', 'Painful muscle spasms or generalized stiffness'],
    causesAr: ['عدوى بكتيرية تنتج سماً يؤثر في الأعصاب والعضلات.', 'تدخل البكتيريا عادة عبر جرح ملوث بالتربة أو الغبار أو براز الحيوانات.'],
    causesEn: ['A bacterial infection that produces a toxin affecting nerves and muscles.', 'Bacteria usually enter through a wound contaminated with soil, dust, or animal feces.'],
    treatmentsAr: ['الحصول على رعاية طبية طارئة عند الاشتباه بالكزاز', 'تنظيف الجرح والعلاج المناعي والدوائي تحت إشراف طبي', 'استكمال التطعيم والجرعات المنشطة وفق توصية مقدم الرعاية'],
    treatmentsEn: ['Seek emergency medical care if tetanus is suspected', 'Receive wound care and immune or drug treatment under medical supervision', 'Complete vaccination and booster doses as recommended by a health care provider'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/tetanus.html' }
    ]
  },
  {
    id: 'physical_extra_thalassemia',
    nameAr: 'الثلاسيميا',
    nameEn: 'Thalassemia',
    symptomsAr: ['تعب وضعف بسبب فقر الدم', 'شحوب أو اصفرار الجلد', 'تأخر النمو أو تضخم البطن في الحالات الشديدة'],
    symptomsEn: ['Fatigue and weakness due to anemia', 'Pale or yellowish skin', 'Delayed growth or abdominal swelling in severe cases'],
    causesAr: ['مجموعة اضطرابات دم وراثية تؤثر في إنتاج الهيموغلوبين.', 'تحدث بسبب تغيرات في جينات سلاسل ألفا أو بيتا من الهيموغلوبين.'],
    causesEn: ['A group of inherited blood disorders that affect hemoglobin production.', 'They result from changes in genes for the alpha or beta chains of hemoglobin.'],
    treatmentsAr: ['متابعة اختصاصي الدم لتحديد الرعاية المناسبة لشدة الحالة', 'نقل الدم عند الحاجة ضمن خطة طبية', 'مراقبة تراكم الحديد ومضاعفاته وعلاجها بإشراف مختص'],
    treatmentsEn: ['Follow up with a blood specialist to plan care for the severity of the condition', 'Receive blood transfusions when needed as part of a medical plan', 'Monitor and manage iron buildup and complications under specialist care'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/thalassemia.html' }
    ]
  },
  {
    id: 'physical_extra_uterine_fibroids',
    nameAr: 'الأورام الليفية الرحمية',
    nameEn: 'Uterine Fibroids',
    symptomsAr: ['قد لا تسبب أعراضاً', 'نزف حيضي غزير أو مطول', 'ضغط أو ألم في الحوض أو كثرة التبول'],
    symptomsEn: ['May cause no symptoms', 'Heavy or prolonged menstrual bleeding', 'Pelvic pressure or pain, or frequent urination'],
    causesAr: ['أورام حميدة تنمو في عضلة الرحم أو حولها.', 'السبب غير معروف تماماً، وقد تتأثر بنموها الهرمونات والعوامل الوراثية.'],
    causesEn: ['Benign growths that develop in or around the muscle of the uterus.', 'The exact cause is unknown; hormones and genetic factors may influence their growth.'],
    treatmentsAr: ['المراقبة الطبية إذا لم تسبب الأورام أعراضاً مزعجة', 'مناقشة خيارات العلاج الدوائي أو الإجراءات مع الطبيب', 'طلب رعاية بشأن النزف الغزير أو الألم أو أعراض فقر الدم'],
    treatmentsEn: ['Use medical monitoring when fibroids are not causing troublesome symptoms', 'Discuss medicine or procedure options with a clinician', 'Seek care for heavy bleeding, pain, or symptoms of anemia'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/uterinefibroids.html' }
    ]
  },
  {
    id: 'physical_extra_warts',
    nameAr: 'الثآليل',
    nameEn: 'Warts',
    symptomsAr: ['نتوءات جلدية صغيرة خشنة أو ملساء', 'قد تظهر على اليدين أو القدمين أو مناطق أخرى', 'قد تسبب ألماً إذا كانت في موضع ضغط'],
    symptomsEn: ['Small rough or smooth skin growths', 'May appear on the hands, feet, or other areas', 'May hurt when located in a pressure-bearing area'],
    causesAr: ['نمو جلدي تسببه أنواع من فيروس الورم الحليمي البشري.', 'قد ينتقل الفيروس بالملامسة المباشرة أو عبر أسطح ملوثة.'],
    causesEn: ['A skin growth caused by types of human papillomavirus.', 'The virus may spread through direct contact or contaminated surfaces.'],
    treatmentsAr: ['قد تختفي بعض الثآليل دون علاج مع الوقت', 'مناقشة العلاجات الموضعية أو الإجراءات مع مقدم الرعاية', 'تجنب العبث بالثؤلول وعدم مشاركة الأدوات الشخصية'],
    treatmentsEn: ['Some warts may go away on their own over time', 'Discuss topical treatments or procedures with a health care provider', 'Avoid picking at warts and do not share personal items'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/warts.html' }
    ]
  },
  {
    id: 'physical_extra_amblyopia',
    nameAr: 'الغمش',
    nameEn: 'Amblyopia',
    symptomsAr: ['ضعف الرؤية في عين واحدة غالباً', 'ضعف إدراك العمق', 'قد لا يلاحظ الطفل المشكلة بنفسه'],
    symptomsEn: ['Reduced vision, usually in one eye', 'Reduced depth perception', 'A child may not notice the problem'],
    causesAr: ['ضعف تطور الرؤية في إحدى العينين خلال الطفولة.', 'قد ينتج عن الحول أو اختلاف كبير في قوة الإبصار أو عائق يحجب الرؤية.'],
    causesEn: ['Vision in one eye does not develop normally during childhood.', 'It may result from strabismus, a large difference in refractive error, or an obstruction to vision.'],
    treatmentsAr: ['إجراء فحوصات العين المبكرة والمنتظمة للأطفال', 'استخدام النظارات التصحيحية إذا أوصى بها اختصاصي العيون', 'اتباع خطة تغطية العين أو العلاج الآخر التي يحددها الاختصاصي'],
    treatmentsEn: ['Arrange early and regular eye examinations for children', 'Use corrective glasses if recommended by an eye specialist', 'Follow the specialist-directed eye patching or other treatment plan'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/amblyopia.html' }
    ]
  },
  {
    id: 'physical_extra_bells_palsy',
    nameAr: 'شلل بيل',
    nameEn: 'Bell Palsy',
    symptomsAr: ['ضعف أو شلل مفاجئ في جانب واحد من الوجه', 'صعوبة إغلاق العين أو الابتسام', 'تغير حاسة التذوق أو زيادة حساسية الصوت'],
    symptomsEn: ['Sudden weakness or paralysis on one side of the face', 'Difficulty closing an eye or smiling', 'Changes in taste or increased sound sensitivity'],
    causesAr: ['ضعف مؤقت في العصب الوجهي يؤدي إلى ضعف عضلات جانب من الوجه.', 'السبب الدقيق غير مؤكد، وقد يرتبط بتورم العصب بعد عدوى فيروسية.'],
    causesEn: ['Temporary dysfunction of the facial nerve causes weakness in one side of the face.', 'The exact cause is uncertain and may involve nerve swelling after a viral infection.'],
    treatmentsAr: ['طلب تقييم طبي سريع لاستبعاد أسباب أخرى لضعف الوجه', 'حماية العين من الجفاف إذا تعذر إغلاقها وفق إرشادات الطبيب', 'اتباع خطة العلاج والمتابعة التي يوصي بها مقدم الرعاية'],
    treatmentsEn: ['Seek prompt medical assessment to rule out other causes of facial weakness', 'Protect the eye from dryness if it cannot close, as advised by a clinician', 'Follow the treatment and follow-up plan recommended by a health care provider'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/bellspalsy.html' }
    ]
  },
  {
    id: 'physical_extra_chagas_disease',
    nameAr: 'داء شاغاس',
    nameEn: 'Chagas Disease',
    symptomsAr: ['قد لا تظهر أعراض في المرحلة المبكرة', 'حمى وتعب أو تورم في موضع دخول الطفيلي', 'قد تحدث لاحقاً مشكلات في القلب أو الجهاز الهضمي'],
    symptomsEn: ['There may be no symptoms in the early stage', 'Fever, fatigue, or swelling at the parasite entry site', 'Heart or digestive problems may develop later'],
    causesAr: ['عدوى يسببها طفيل ينتقل غالباً عبر حشرة الترياتومين المصابة.', 'قد تنتقل أيضاً من الأم إلى الجنين أو عبر الدم أو الأعضاء الملوثة.'],
    causesEn: ['An infection caused by a parasite, usually transmitted by an infected triatomine bug.', 'It may also spread from a pregnant person to a fetus or through contaminated blood or organs.'],
    treatmentsAr: ['التقييم الطبي لتأكيد العدوى وتحديد مرحلتها', 'استخدام علاج مضاد للطفيليات يحدده الطبيب عند ملاءمته', 'متابعة القلب والجهاز الهضمي للكشف عن المضاعفات وعلاجها'],
    treatmentsEn: ['Get medical assessment to confirm infection and determine its stage', 'Use antiparasitic treatment selected by a clinician when appropriate', 'Monitor the heart and digestive system for complications and manage them'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/chagasdisease.html' }
    ]
  },
  {
    id: 'physical_extra_croup',
    nameAr: 'الخانوق',
    nameEn: 'Croup',
    symptomsAr: ['سعال نباحي', 'بحّة في الصوت', 'صوت حاد عند الشهيق وقد يصاحبه صعوبة تنفس'],
    symptomsEn: ['A barking cough', 'Hoarseness', 'A high-pitched sound when breathing in, sometimes with breathing difficulty'],
    causesAr: ['عدوى فيروسية تسبب تورماً في مجرى التنفس العلوي.', 'تنتشر الفيروسات المسببة عبر الرذاذ أو الملامسة.'],
    causesEn: ['A viral infection causes swelling in the upper airway.', 'The viruses that cause it spread through droplets or contact.'],
    treatmentsAr: ['الحفاظ على هدوء الطفل وراحته وتقديم السوائل', 'طلب رعاية عاجلة عند صعوبة التنفس أو ازرقاق الشفاه', 'اتباع العلاج الذي يحدده الطبيب للحالات التي تحتاجه'],
    treatmentsEn: ['Keep the child calm and rested and offer fluids', 'Seek urgent care for breathing difficulty or bluish lips', 'Follow clinician-directed treatment when it is needed'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/croup.html' }
    ]
  },
  {
    id: 'physical_extra_diphtheria',
    nameAr: 'الدفتيريا',
    nameEn: 'Diphtheria',
    symptomsAr: ['التهاب الحلق والحمى', 'غشاء سميك رمادي في الحلق أو الأنف', 'صعوبة البلع أو التنفس'],
    symptomsEn: ['Sore throat and fever', 'A thick gray coating in the throat or nose', 'Difficulty swallowing or breathing'],
    causesAr: ['عدوى بكتيرية قد تنتج سماً يسبب أذى للأنسجة والأعضاء.', 'تنتشر عبر الرذاذ التنفسي أو الملامسة المباشرة للإفرازات أو القروح.'],
    causesEn: ['A bacterial infection that may produce a toxin that damages tissues and organs.', 'It spreads through respiratory droplets or direct contact with secretions or sores.'],
    treatmentsAr: ['الحصول على رعاية طبية طارئة وعزل العدوى وفق التوجيهات', 'تلقي مضاد السموم والمضادات الحيوية تحت إشراف طبي', 'استكمال التطعيم والجرعات المنشطة حسب توصية مقدم الرعاية'],
    treatmentsEn: ['Get emergency medical care and isolate as directed', 'Receive antitoxin and antibiotics under medical supervision', 'Complete vaccination and boosters as recommended by a health care provider'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/diphtheria.html' }
    ]
  },
  {
    id: 'physical_extra_giardiasis',
    nameAr: 'داء الجيارديات',
    nameEn: 'Giardiasis',
    symptomsAr: ['إسهال مائي أو دهني كريه الرائحة', 'غازات وتقلصات في البطن', 'غثيان أو تعب'],
    symptomsEn: ['Watery or greasy, foul-smelling diarrhea', 'Gas and abdominal cramps', 'Nausea or fatigue'],
    causesAr: ['عدوى طفيلية تصيب الأمعاء.', 'تنتقل بابتلاع الطفيلي من ماء أو طعام ملوث أو عبر الملامسة من شخص مصاب.'],
    causesEn: ['A parasitic infection of the intestines.', 'It spreads by swallowing parasites in contaminated water or food or through contact with an infected person.'],
    treatmentsAr: ['تعويض السوائل للوقاية من الجفاف', 'مراجعة مقدم الرعاية لتحديد الحاجة إلى علاج مضاد للطفيليات', 'غسل اليدين واستخدام ماء مأمون لتقليل انتقال العدوى'],
    treatmentsEn: ['Replace fluids to help prevent dehydration', 'Consult a health care provider about whether antiparasitic treatment is needed', 'Wash hands and use safe water to reduce transmission'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/giardiainfections.html' }
    ]
  },
  {
    id: 'physical_extra_hantavirus_infection',
    nameAr: 'عدوى فيروس هانتا',
    nameEn: 'Hantavirus Infection',
    symptomsAr: ['حمى وقشعريرة وآلام عضلية', 'صداع أو غثيان أو قيء', 'قد يتطور ضيق التنفس سريعاً في المتلازمة الرئوية'],
    symptomsEn: ['Fever, chills, and muscle aches', 'Headache, nausea, or vomiting', 'Breathing difficulty may develop quickly in pulmonary syndrome'],
    causesAr: ['فيروسات تنتقل غالباً من القوارض المصابة إلى الإنسان.', 'قد تحدث العدوى باستنشاق هواء ملوث بإفرازات القوارض أو ملامستها.'],
    causesEn: ['Viruses usually transmitted from infected rodents to people.', 'Infection may occur by breathing air contaminated with rodent droppings or by contacting them.'],
    treatmentsAr: ['الحصول على رعاية طبية عاجلة عند الاشتباه بالعدوى', 'رعاية داعمة في المستشفى ومراقبة التنفس والدورة الدموية', 'تقليل التعرض للقوارض واتباع إرشادات تنظيف فضلاتها بأمان'],
    treatmentsEn: ['Seek urgent medical care if infection is suspected', 'Receive supportive hospital care and monitoring of breathing and circulation', 'Reduce rodent exposure and follow safe cleanup guidance for droppings'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/hantavirusinfections.html' }
    ]
  },
  {
    id: 'physical_extra_hiatal_hernia',
    nameAr: 'الفتق الحجابي',
    nameEn: 'Hiatal Hernia',
    symptomsAr: ['قد لا يسبب أعراضاً', 'حرقة أو ارتجاع حمضي', 'صعوبة البلع أو ألم الصدر أحياناً'],
    symptomsEn: ['May cause no symptoms', 'Heartburn or acid reflux', 'Difficulty swallowing or occasional chest pain'],
    causesAr: ['يندفع جزء من المعدة عبر فتحة في الحجاب الحاجز إلى الصدر.', 'قد تسهم زيادة الضغط في البطن أو ضعف الأنسجة مع التقدم في العمر.'],
    causesEn: ['Part of the stomach pushes through an opening in the diaphragm into the chest.', 'Increased abdominal pressure or age-related tissue weakening may contribute.'],
    treatmentsAr: ['تناول وجبات أصغر وتجنب الاستلقاء مباشرة بعد الطعام', 'تحديد الأطعمة أو العادات التي تزيد الارتجاع وتعديلها', 'مناقشة العلاج الطبي أو الجراحي مع مقدم الرعاية إذا استمرت الأعراض'],
    treatmentsEn: ['Eat smaller meals and avoid lying down right after eating', 'Identify and adjust foods or habits that worsen reflux', 'Discuss medical or surgical care with a health care provider if symptoms persist'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/hiatalhernia.html' }
    ]
  },
  {
    id: 'physical_extra_interstitial_cystitis',
    nameAr: 'التهاب المثانة الخلالي',
    nameEn: 'Interstitial Cystitis',
    symptomsAr: ['ألم أو ضغط في المثانة والحوض', 'كثرة التبول أو الإلحاح البولي', 'قد يزداد الألم مع امتلاء المثانة'],
    symptomsEn: ['Bladder and pelvic pain or pressure', 'Frequent urination or urinary urgency', 'Pain may worsen as the bladder fills'],
    causesAr: ['حالة مزمنة تسبب ألماً وأعراضاً بولية من دون عدوى بكتيرية واضحة.', 'السبب غير معروف، وقد تتداخل عوامل في بطانة المثانة والأعصاب والمناعة.'],
    causesEn: ['A chronic condition causing pain and urinary symptoms without a clear bacterial infection.', 'The cause is unknown and may involve the bladder lining, nerves, and immune system.'],
    treatmentsAr: ['تدوين الأطعمة والمشروبات التي قد تزيد الأعراض ومناقشتها مع الطبيب', 'تجربة تدريب المثانة أو العلاج الطبيعي لقاع الحوض بإشراف مختص', 'اختيار خطة علاج فردية مع مقدم الرعاية ومتابعة أثرها'],
    treatmentsEn: ['Track foods and drinks that may worsen symptoms and discuss them with a clinician', 'Try bladder training or pelvic floor physical therapy under professional guidance', 'Choose an individualized care plan with a health care provider and monitor its effects'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/interstitialcystitis.html' }
    ]
  },
  {
    id: 'physical_extra_kawasaki_disease',
    nameAr: 'مرض كاواساكي',
    nameEn: 'Kawasaki Disease',
    symptomsAr: ['حمى مستمرة', 'احمرار العينين والطفح الجلدي', 'تغيرات في الشفتين واللسان واليدين أو القدمين'],
    symptomsEn: ['Persistent fever', 'Red eyes and rash', 'Changes in the lips, tongue, hands, or feet'],
    causesAr: ['مرض التهابي يصيب الأوعية الدموية ويظهر غالباً لدى الأطفال الصغار.', 'السبب غير معروف، ولا يُعد المرض معدياً بين الأشخاص.'],
    causesEn: ['An inflammatory disease of blood vessels that most often affects young children.', 'The cause is unknown, and the disease is not considered contagious between people.'],
    treatmentsAr: ['طلب رعاية طبية عاجلة عند استمرار الحمى أو الاشتباه بالمرض', 'تلقي العلاج في المستشفى للحد من التهاب الأوعية ومضاعفات القلب', 'متابعة القلب بعد المرض وفق مواعيد الاختصاصي'],
    treatmentsEn: ['Seek urgent medical care for persistent fever or suspected disease', 'Receive hospital treatment to reduce vessel inflammation and heart complications', 'Follow the specialist’s schedule for heart checks after illness'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/kawasakidisease.html' }
    ]
  },
  {
    id: 'physical_extra_leishmaniasis',
    nameAr: 'داء الليشمانيات',
    nameEn: 'Leishmaniasis',
    symptomsAr: ['قد تسبب الصورة الجلدية قرحاً جلدية', 'قد تشمل الصورة الحشوية الحمى وفقدان الوزن وتضخم الطحال', 'تختلف الأعراض بحسب نوع الطفيلي والمنطقة المصابة'],
    symptomsEn: ['The skin form may cause skin ulcers', 'The visceral form may cause fever, weight loss, and enlarged spleen', 'Symptoms vary by parasite type and affected area'],
    causesAr: ['مرض طفيلي ينتقل إلى الإنسان بلسعة ذبابة الرمل المصابة.', 'تختلف أشكال المرض بحسب نوع الليشمانيا واستجابة الجسم.'],
    causesEn: ['A parasitic disease transmitted to people by the bite of an infected sand fly.', 'Forms of the disease vary according to the Leishmania species and the body’s response.'],
    treatmentsAr: ['مراجعة مختص لتحديد نوع المرض ومدى إصابة الأعضاء', 'استخدام علاج يحدده الطبيب وفق نوع الطفيلي وشدة الحالة', 'العناية بالقروح ومتابعتها طبياً عند وجود إصابة جلدية'],
    treatmentsEn: ['Consult a specialist to determine the disease form and organ involvement', 'Use treatment chosen by a clinician based on the parasite and severity', 'Care for and medically monitor sores when skin disease is present'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/leishmaniasis.html' }
    ]
  },
  {
    id: 'physical_extra_osteogenesis_imperfecta',
    nameAr: 'تكون العظم الناقص',
    nameEn: 'Osteogenesis Imperfecta',
    symptomsAr: ['سهولة تكسر العظام', 'قصر القامة أو تشوه العظام', 'قد يحدث ضعف في الأسنان أو فقدان السمع'],
    symptomsEn: ['Bones that fracture easily', 'Short stature or bone deformities', 'Weak teeth or hearing loss may occur'],
    causesAr: ['اضطراب وراثي يؤثر في تكوين الكولاجين الضروري لقوة العظام.', 'تنتج معظم الحالات عن تغيرات في جينات الكولاجين وقد تنتقل بالوراثة.'],
    causesEn: ['An inherited disorder affecting collagen needed for strong bones.', 'Most cases result from changes in collagen genes and may be passed down in families.'],
    treatmentsAr: ['رعاية متعددة التخصصات لدعم الحركة وصحة العظام', 'الوقاية من الإصابات والتعامل الطبي مع الكسور', 'متابعة السمع والأسنان والنمو مع المختصين'],
    treatmentsEn: ['Use multidisciplinary care to support mobility and bone health', 'Prevent injuries and obtain medical care for fractures', 'Monitor hearing, teeth, and growth with specialists'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/osteogenesisimperfecta.html' }
    ]
  },
  {
    id: 'physical_extra_rickets',
    nameAr: 'الكساح',
    nameEn: 'Rickets',
    symptomsAr: ['ألم أو ضعف العظام والعضلات', 'تأخر النمو أو تأخر المشي', 'تقوس الساقين أو تشوهات عظمية'],
    symptomsEn: ['Bone or muscle pain and weakness', 'Delayed growth or delayed walking', 'Bowed legs or bone deformities'],
    causesAr: ['تلين وضعف العظام لدى الأطفال بسبب خلل في تمعدنها.', 'قد ينجم عن نقص فيتامين د أو الكالسيوم أو الفوسفات، أو عن اضطراب وراثي أو مرض آخر.'],
    causesEn: ['Softening and weakening of children’s bones due to impaired mineralization.', 'It may result from low vitamin D, calcium, or phosphate, or from an inherited or other disease.'],
    treatmentsAr: ['تحديد السبب ومعالجته تحت إشراف مقدم الرعاية', 'اتباع التوصيات الغذائية أو المكملات التي يحددها الطبيب', 'متابعة نمو العظام وتصحيح التشوهات عند الحاجة'],
    treatmentsEn: ['Identify and treat the cause under health care supervision', 'Follow dietary or supplement recommendations set by a clinician', 'Monitor bone growth and address deformities when needed'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/rickets.html' }
    ]
  },
  {
    id: 'physical_extra_sarcoidosis',
    nameAr: 'الساركويد',
    nameEn: 'Sarcoidosis',
    symptomsAr: ['قد لا تظهر أعراض', 'سعال وضيق تنفس أو ألم في الصدر', 'تعب أو حمى أو تضخم العقد اللمفاوية'],
    symptomsEn: ['May cause no symptoms', 'Cough, shortness of breath, or chest pain', 'Fatigue, fever, or enlarged lymph nodes'],
    causesAr: ['مرض التهابي قد تتكون فيه تجمعات من الخلايا المناعية في أعضاء مختلفة.', 'السبب غير معروف؛ وقد تتفاعل عوامل مناعية ووراثية مع محفزات بيئية.'],
    causesEn: ['An inflammatory disease in which clusters of immune cells may form in different organs.', 'The cause is unknown; immune and genetic factors may interact with environmental triggers.'],
    treatmentsAr: ['المراقبة الطبية إذا كانت الأعراض خفيفة ولم تتأثر الأعضاء', 'علاج يقرره الطبيب عند وجود أعراض أو تأثر مهم للأعضاء', 'متابعة وظائف الرئة والعينين والأعضاء المصابة'],
    treatmentsEn: ['Use medical monitoring when symptoms are mild and organs are not affected', 'Use clinician-directed treatment when symptoms or organ involvement warrant it', 'Monitor lung, eye, and other affected organ function'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/sarcoidosis.html' }
    ]
  },
  {
    id: 'physical_extra_spinal_stenosis',
    nameAr: 'تضيق القناة الشوكية',
    nameEn: 'Spinal Stenosis',
    symptomsAr: ['ألم أو خدر أو ضعف في الظهر أو الأطراف', 'قد يزداد الألم عند الوقوف أو المشي', 'قد تتحسن الأعراض عند الانحناء إلى الأمام أو الجلوس'],
    symptomsEn: ['Back or limb pain, numbness, or weakness', 'Pain may worsen with standing or walking', 'Symptoms may improve when bending forward or sitting'],
    causesAr: ['تضيق المساحات داخل العمود الفقري مما قد يضغط على الأعصاب.', 'يحدث غالباً مع التغيرات المرتبطة بالعمر، وقد تسهم إصابات أو حالات عظمية أخرى.'],
    causesEn: ['Narrowing of spaces in the spine may put pressure on nerves.', 'It often occurs with age-related changes; injuries or other bone conditions may contribute.'],
    treatmentsAr: ['ممارسة تمارين أو علاج طبيعي ملائم بإشراف مختص', 'تعديل الأنشطة التي تزيد الأعراض مع الحفاظ على الحركة الآمنة', 'مناقشة خيارات السيطرة على الأعراض أو الجراحة مع الطبيب'],
    treatmentsEn: ['Use suitable exercises or physical therapy under professional guidance', 'Adjust activities that worsen symptoms while maintaining safe movement', 'Discuss symptom management or surgery options with a clinician'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/spinalstenosis.html' }
    ]
  },
  {
    id: 'physical_extra_tourette_syndrome',
    nameAr: 'متلازمة توريت',
    nameEn: 'Tourette Syndrome',
    symptomsAr: ['حركات لا إرادية متكررة مثل الرمش أو هز الكتفين', 'أصوات أو كلمات لا إرادية', 'قد تتغير شدة العرات وتكرارها بمرور الوقت'],
    symptomsEn: ['Repeated involuntary movements such as blinking or shoulder shrugging', 'Involuntary sounds or words', 'Tics may change in frequency and severity over time'],
    causesAr: ['اضطراب عصبي يتميز بعرات حركية وصوتية.', 'السبب غير معروف بالكامل، وتشارك عوامل وراثية وتغيرات في دوائر الدماغ.'],
    causesEn: ['A neurologic disorder characterized by motor and vocal tics.', 'The cause is not fully known; genetic factors and changes in brain circuits are involved.'],
    treatmentsAr: ['التثقيف والدعم في المنزل والمدرسة والعمل', 'العلاج السلوكي المتخصص للمساعدة في إدارة العرات', 'مناقشة خيارات العلاج مع الطبيب إذا أثرت الأعراض في الحياة اليومية'],
    treatmentsEn: ['Provide education and support at home, school, and work', 'Use specialized behavioral therapy to help manage tics', 'Discuss care options with a clinician if symptoms affect daily life'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/tourettesyndrome.html' }
    ]
  },
  {
    id: 'physical_extra_toxoplasmosis',
    nameAr: 'داء المقوسات',
    nameEn: 'Toxoplasmosis',
    symptomsAr: ['غالباً لا تظهر أعراض أو تظهر أعراض شبيهة بالإنفلونزا', 'تضخم العقد اللمفاوية أو آلام عضلية', 'قد تكون العدوى خطرة على الجنين أو ضعيفي المناعة'],
    symptomsEn: ['Often no symptoms or flu-like symptoms', 'Swollen lymph nodes or muscle aches', 'Infection may be serious for a fetus or people with weakened immunity'],
    causesAr: ['عدوى يسببها طفيل المقوسة الغوندية.', 'تنتقل عبر الطعام أو الماء الملوث، أو براز القطط، أو من الحامل إلى الجنين.'],
    causesEn: ['An infection caused by the Toxoplasma gondii parasite.', 'It spreads through contaminated food or water, cat feces, or from a pregnant person to a fetus.'],
    treatmentsAr: ['استشارة مقدم الرعاية، خصوصاً أثناء الحمل أو عند ضعف المناعة', 'استخدام علاج يحدده الطبيب بحسب الأعراض والحالة الصحية', 'الوقاية بطهي الطعام جيداً وغسل اليدين وتجنب ملامسة فضلات القطط'],
    treatmentsEn: ['Consult a health care provider, especially during pregnancy or with weakened immunity', 'Use treatment selected by a clinician based on symptoms and health status', 'Prevent infection by cooking food thoroughly, washing hands, and avoiding cat feces'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/toxoplasmosis.html' }
    ]
  },
  {
    id: 'physical_extra_trigeminal_neuralgia',
    nameAr: 'ألم العصب ثلاثي التوائم',
    nameEn: 'Trigeminal Neuralgia',
    symptomsAr: ['نوبات ألم مفاجئ شديد في جانب الوجه', 'يشبه الألم الصدمة الكهربائية أو الطعن', 'قد تحفزه ملامسة الوجه أو المضغ أو تنظيف الأسنان'],
    symptomsEn: ['Sudden episodes of severe pain on one side of the face', 'Pain may feel like an electric shock or stabbing', 'Touching the face, chewing, or brushing teeth may trigger it'],
    causesAr: ['اضطراب ألم يصيب العصب ثلاثي التوائم المسؤول عن الإحساس في الوجه.', 'قد يضغط وعاء دموي على العصب، أو تنتج الحالة عن مرض عصبي أو سبب آخر.'],
    causesEn: ['A pain disorder affecting the trigeminal nerve, which carries sensation from the face.', 'A blood vessel may press on the nerve, or the condition may result from a neurologic disease or another cause.'],
    treatmentsAr: ['طلب تقييم طبي لتأكيد التشخيص واستبعاد أسباب أخرى', 'استخدام خطة دوائية يختارها الطبيب لمكافحة ألم الأعصاب', 'مناقشة الإجراءات أو الجراحة إذا استمر الألم رغم الرعاية الطبية'],
    treatmentsEn: ['Get medical assessment to confirm the diagnosis and rule out other causes', 'Use a clinician-selected medicine plan for nerve pain', 'Discuss procedures or surgery if pain persists despite medical care'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/trigeminalneuralgia.html' }
    ]
  },
  {
    id: 'physical_extra_west_nile_virus',
    nameAr: 'عدوى فيروس غرب النيل',
    nameEn: 'West Nile Virus Infection',
    symptomsAr: ['قد لا تظهر أعراض', 'حمى وصداع وآلام في الجسم', 'قد تحدث أعراض عصبية شديدة مثل الارتباك أو الضعف'],
    symptomsEn: ['May cause no symptoms', 'Fever, headache, and body aches', 'Severe neurologic symptoms such as confusion or weakness may occur'],
    causesAr: ['عدوى فيروسية تنتقل غالباً عبر لدغة بعوضة مصابة.', 'نادراً ما تنتقل عبر الدم أو الأعضاء أو من الأم إلى الطفل.'],
    causesEn: ['A viral infection usually transmitted through the bite of an infected mosquito.', 'Rarely, it may spread through blood, organs, or from a pregnant person to a baby.'],
    treatmentsAr: ['الراحة والسوائل والرعاية الداعمة للحالات الخفيفة', 'طلب رعاية عاجلة للأعراض العصبية أو الشديدة', 'الوقاية من لدغات البعوض باستخدام وسائل الحماية المناسبة'],
    treatmentsEn: ['Use rest, fluids, and supportive care for mild illness', 'Seek urgent care for neurologic or severe symptoms', 'Prevent mosquito bites with appropriate protective measures'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/westnilevirus.html' }
    ]
  },
  {
    id: 'physical_extra_zika_virus_disease',
    nameAr: 'مرض فيروس زيكا',
    nameEn: 'Zika Virus Disease',
    symptomsAr: ['حمى وطفح جلدي', 'ألم المفاصل واحمرار العينين', 'قد تكون العدوى أثناء الحمل مرتبطة بمضاعفات جنينية'],
    symptomsEn: ['Fever and rash', 'Joint pain and red eyes', 'Infection during pregnancy may be associated with fetal complications'],
    causesAr: ['عدوى فيروسية تنتقل غالباً عبر بعوض الزاعجة المصاب.', 'قد تنتقل أيضاً جنسياً أو من الحامل إلى الجنين.'],
    causesEn: ['A viral infection usually transmitted by infected Aedes mosquitoes.', 'It may also spread sexually or from a pregnant person to a fetus.'],
    treatmentsAr: ['استشارة مقدم الرعاية، وبالأخص أثناء الحمل أو التخطيط له', 'الراحة وشرب السوائل والرعاية الداعمة للأعراض', 'منع لدغات البعوض والانتقال الجنسي وفق إرشادات الصحة العامة'],
    treatmentsEn: ['Consult a health care provider, especially during or when planning pregnancy', 'Rest, drink fluids, and use supportive care for symptoms', 'Prevent mosquito bites and sexual transmission according to public health guidance'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/zikavirus.html' }
    ]
  },
  {
    id: 'physical_extra_anthrax',
    nameAr: 'الجمرة الخبيثة',
    nameEn: 'Anthrax',
    symptomsAr: ['قرحة جلدية قد تتحول إلى جلبة سوداء', 'حمى أو تعب', 'قد تظهر أعراض تنفسية أو هضمية بحسب طريق التعرض'],
    symptomsEn: ['A skin sore that may develop a black center', 'Fever or fatigue', 'Respiratory or digestive symptoms may occur depending on exposure route'],
    causesAr: ['عدوى تسببها بكتيريا تنتج أبواغاً يمكنها البقاء في البيئة.', 'قد تحدث العدوى عبر الجلد أو استنشاق الأبواغ أو تناول طعام ملوث.'],
    causesEn: ['An infection caused by bacteria that produce spores able to persist in the environment.', 'Infection may occur through the skin, by breathing in spores, or by eating contaminated food.'],
    treatmentsAr: ['الحصول على تقييم طبي عاجل عند الاشتباه بالتعرض أو العدوى', 'استخدام مضادات حيوية أو علاج آخر يحدده الفريق الطبي', 'تلقي الرعاية في المستشفى عند الأعراض الشديدة أو التعرض الاستنشاقي'],
    treatmentsEn: ['Get urgent medical assessment if exposure or infection is suspected', 'Use antibiotics or other treatment selected by the medical team', 'Receive hospital care for severe symptoms or inhalational exposure'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/anthrax.html' }
    ]
  },
  {
    id: 'physical_extra_candidiasis',
    nameAr: 'داء المبيضات',
    nameEn: 'Candidiasis',
    symptomsAr: ['تختلف الأعراض بحسب موضع العدوى', 'قد تسبب عدوى الفم بقعاً بيضاء أو ألماً', 'قد تسبب العدوى المهبلية حكة وإفرازات'],
    symptomsEn: ['Symptoms vary depending on the site of infection', 'Oral infection may cause white patches or soreness', 'Vaginal infection may cause itching and discharge'],
    causesAr: ['فرط نمو فطريات المبيضات التي تعيش عادة على الجلد أو في الجسم.', 'قد يزيد خطر العدوى مع المضادات الحيوية أو ضعف المناعة أو تغيرات أخرى في الجسم.'],
    causesEn: ['Overgrowth of Candida fungi that normally live on the skin or in the body.', 'Antibiotics, weakened immunity, or other body changes may increase infection risk.'],
    treatmentsAr: ['تحديد موضع العدوى ومراجعة مقدم الرعاية إذا كانت شديدة أو متكررة', 'استخدام علاج مضاد للفطريات يختاره الطبيب بحسب موضع العدوى', 'الحفاظ على نظافة وجفاف المنطقة واتباع إرشادات الوقاية المناسبة'],
    treatmentsEn: ['Identify the infection site and consult a clinician if it is severe or recurrent', 'Use antifungal treatment selected by a clinician for the infection site', 'Keep the area clean and dry and follow appropriate prevention guidance'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/candidiasis.html' }
    ]
  },
  {
    id: 'physical_extra_legionnaires_disease',
    nameAr: 'داء الفيالقة',
    nameEn: 'Legionnaires Disease',
    symptomsAr: ['حمى وسعال', 'ضيق تنفس أو ألم عضلي', 'قد يحدث صداع أو إسهال أو ارتباك'],
    symptomsEn: ['Fever and cough', 'Shortness of breath or muscle aches', 'Headache, diarrhea, or confusion may occur'],
    causesAr: ['نوع من الالتهاب الرئوي تسببه بكتيريا الليجيونيلا.', 'تحدث العدوى عادة باستنشاق رذاذ ماء ملوث، ولا تنتقل عادة من شخص لآخر.'],
    causesEn: ['A type of pneumonia caused by Legionella bacteria.', 'Infection usually occurs by breathing in contaminated water droplets and typically does not spread person to person.'],
    treatmentsAr: ['طلب تقييم طبي سريع عند ظهور أعراض الالتهاب الرئوي', 'تلقي العلاج الذي يحدده الطبيب للعدوى', 'الحصول على رعاية داعمة أو مستشفوية بحسب شدة الحالة'],
    treatmentsEn: ['Seek prompt medical assessment for symptoms of pneumonia', 'Receive infection treatment selected by a clinician', 'Use supportive or hospital care according to illness severity'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/legionnairesdisease.html' }
    ]
  },
  {
    id: 'physical_extra_osteonecrosis',
    nameAr: 'تنخر العظم',
    nameEn: 'Osteonecrosis',
    symptomsAr: ['قد لا تظهر أعراض في البداية', 'ألم في المفصل يزداد مع الحركة أو تحميل الوزن', 'تيبس أو محدودية حركة المفصل'],
    symptomsEn: ['May cause no symptoms at first', 'Joint pain that worsens with movement or weight bearing', 'Joint stiffness or limited movement'],
    causesAr: ['موت نسيج العظم بسبب نقص تدفق الدم إليه.', 'قد يرتبط بإصابة أو استخدام طويل لبعض الأدوية أو حالات صحية أخرى.'],
    causesEn: ['Bone tissue dies because of reduced blood supply.', 'It may be associated with injury, long-term use of some medicines, or other health conditions.'],
    treatmentsAr: ['تخفيف التحميل على المفصل المصاب وفق إرشادات الطبيب', 'متابعة اختصاصي العظام لتقييم تطور الحالة', 'مناقشة التأهيل أو الإجراءات الجراحية بحسب شدة الضرر'],
    treatmentsEn: ['Reduce load on the affected joint as advised by a clinician', 'Follow up with an orthopedic specialist to assess progression', 'Discuss rehabilitation or surgery depending on the extent of damage'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/osteonecrosis.html' }
    ]
  },
  {
    id: 'physical_extra_pinworm_infection',
    nameAr: 'عدوى الدودة الدبوسية',
    nameEn: 'Pinworm Infection',
    symptomsAr: ['حكة حول الشرج، خاصة ليلاً', 'اضطراب النوم أو التهيج', 'قد لا تظهر أعراض لدى بعض المصابين'],
    symptomsEn: ['Itching around the anus, especially at night', 'Sleep disturbance or irritability', 'Some infected people may have no symptoms'],
    causesAr: ['عدوى بدودة طفيلية صغيرة تعيش في الأمعاء.', 'تنتقل العدوى بابتلاع البيوض من الأيدي أو الأسطح أو الأغطية الملوثة.'],
    causesEn: ['An infection by a small parasitic worm that lives in the intestines.', 'It spreads by swallowing eggs from contaminated hands, surfaces, or bedding.'],
    treatmentsAr: ['مراجعة مقدم الرعاية لتحديد العلاج المناسب للمصابين ومخالطيهم', 'غسل اليدين وقص الأظافر وتجنب حك المنطقة', 'غسل الملابس والأغطية بانتظام للحد من تكرر العدوى'],
    treatmentsEn: ['Consult a health care provider about appropriate care for infected people and close contacts', 'Wash hands, keep nails short, and avoid scratching the area', 'Wash clothing and bedding regularly to reduce reinfection'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/pinworms.html' }
    ]
  },
  {
    id: 'physical_extra_cleft_lip_palate',
    nameAr: 'الشفة الأرنبية وشق الحنك',
    nameEn: 'Cleft Lip and Palate',
    symptomsAr: ['فتحة أو شق في الشفة العليا أو سقف الفم', 'صعوبة في الرضاعة أو التغذية', 'قد تتأثر النطق والأسنان أو السمع'],
    symptomsEn: ['An opening or split in the upper lip or roof of the mouth', 'Difficulty feeding or sucking', 'Speech, teeth, or hearing may be affected'],
    causesAr: ['عيب خلقي يحدث عندما لا تلتحم أنسجة الوجه والفم بالكامل أثناء نمو الجنين.', 'قد تسهم عوامل وراثية وبيئية، وغالباً لا يُعرف سبب محدد.'],
    causesEn: ['A birth defect that occurs when facial and oral tissues do not fully join during fetal development.', 'Genetic and environmental factors may contribute, and a specific cause is often unknown.'],
    treatmentsAr: ['دعم التغذية للرضيع بالتعاون مع فريق الرعاية', 'إصلاح جراحي ومتابعة متعددة التخصصات وفق الخطة الطبية', 'دعم النطق والأسنان والسمع خلال مراحل النمو'],
    treatmentsEn: ['Support infant feeding with the care team', 'Use surgical repair and multidisciplinary follow-up according to the medical plan', 'Provide speech, dental, and hearing support during development'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/cleftlipandpalate.html' }
    ]
  },
  {
    id: 'physical_extra_creutzfeldt_jakob_disease',
    nameAr: 'مرض كروتزفيلد-ياكوب',
    nameEn: 'Creutzfeldt-Jakob Disease',
    symptomsAr: ['تدهور سريع في الذاكرة والتفكير', 'تغيرات في السلوك أو الشخصية', 'اختلال التوازن أو حركات لا إرادية'],
    symptomsEn: ['Rapid decline in memory and thinking', 'Changes in behavior or personality', 'Loss of balance or involuntary movements'],
    causesAr: ['مرض دماغي تنكسي نادر يرتبط ببروتينات غير طبيعية تسمى البريونات.', 'معظم الحالات عفوية؛ ونادراً ما تكون وراثية أو مرتبطة بتعرض طبي ملوث.'],
    causesEn: ['A rare degenerative brain disease associated with abnormal proteins called prions.', 'Most cases are sporadic; rare cases are inherited or linked to contaminated medical exposure.'],
    treatmentsAr: ['الحصول على تقييم متخصص للأعراض العصبية المتفاقمة بسرعة', 'تقديم رعاية داعمة للراحة والسلامة والاحتياجات اليومية', 'دعم الأسرة ومقدمي الرعاية بالتنسيق مع الفريق الطبي'],
    treatmentsEn: ['Obtain specialist assessment for rapidly worsening neurologic symptoms', 'Provide supportive care for comfort, safety, and daily needs', 'Support family members and caregivers in coordination with the medical team'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/creutzfeldtjakobdisease.html' }
    ]
  },
  {
    id: 'physical_extra_lymphedema',
    nameAr: 'الوذمة اللمفية',
    nameEn: 'Lymphedema',
    symptomsAr: ['تورم مزمن في الذراع أو الساق أو موضع آخر', 'ثقل أو شد في الطرف المصاب', 'تغيرات جلدية أو محدودية الحركة'],
    symptomsEn: ['Chronic swelling in an arm, leg, or another area', 'Heaviness or tightness in the affected limb', 'Skin changes or limited movement'],
    causesAr: ['تراكم السائل اللمفي بسبب خلل أو انسداد في الجهاز اللمفي.', 'قد تكون الحالة خلقية أو تحدث بعد جراحة أو علاج إشعاعي أو عدوى.'],
    causesEn: ['Lymph fluid builds up because of a problem or blockage in the lymphatic system.', 'It may be congenital or occur after surgery, radiation treatment, or infection.'],
    treatmentsAr: ['استخدام الضغط والعلاج اللمفي المركب بإشراف مختص', 'ممارسة حركة وتمارين مناسبة مع العناية بالجلد', 'مراجعة مقدم الرعاية عند زيادة التورم أو ظهور احمرار أو حمى'],
    treatmentsEn: ['Use compression and complete decongestive therapy under professional guidance', 'Use suitable movement and exercise with careful skin care', 'Contact a health care provider if swelling worsens or redness or fever develops'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/lymphedema.html' }
    ]
  },
  {
    id: 'physical_extra_myalgic_encephalomyelitis',
    nameAr: 'التهاب الدماغ والنخاع العضلي ومتلازمة التعب المزمن',
    nameEn: 'Myalgic Encephalomyelitis/Chronic Fatigue Syndrome',
    symptomsAr: ['تعب شديد لا يتحسن بالراحة', 'تدهور الأعراض بعد مجهود بدني أو ذهني', 'نوم غير منعش وصعوبات في التركيز'],
    symptomsEn: ['Severe fatigue that is not improved by rest', 'Worsening symptoms after physical or mental effort', 'Unrefreshing sleep and difficulty concentrating'],
    causesAr: ['مرض مزمن معقد يؤثر في أجهزة متعددة من الجسم.', 'السبب غير معروف، وقد تبدأ الحالة بعد عدوى أو حدث صحي آخر لدى بعض الأشخاص.'],
    causesEn: ['A complex chronic disease that affects multiple body systems.', 'The cause is unknown; in some people, the illness may begin after an infection or another health event.'],
    treatmentsAr: ['تنظيم النشاط والراحة لتجنب تفاقم الأعراض بعد المجهود', 'معالجة الأعراض المصاحبة بخطة يضعها مقدم الرعاية', 'طلب دعم متخصص للنوم والألم والوظائف اليومية بحسب الحاجة'],
    treatmentsEn: ['Balance activity and rest to avoid post-exertional symptom worsening', 'Manage associated symptoms with a plan developed by a health care provider', 'Seek specialist support for sleep, pain, and daily functioning as needed'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/chronicfatiguesyndrome.html' }
    ]
  },
  {
    id: 'physical_extra_myositis',
    nameAr: 'التهاب العضلات',
    nameEn: 'Myositis',
    symptomsAr: ['ضعف العضلات، خاصة قرب الجذع', 'صعوبة النهوض أو صعود الدرج أو رفع الذراعين', 'قد يحدث ألم عضلي أو طفح جلدي بحسب النوع'],
    symptomsEn: ['Muscle weakness, especially near the trunk', 'Difficulty standing up, climbing stairs, or lifting the arms', 'Muscle pain or rash may occur depending on the type'],
    causesAr: ['مجموعة حالات تسبب التهاباً وضعفاً في العضلات.', 'قد ترتبط باضطراب مناعي ذاتي أو عدوى أو دواء أو سبب آخر.'],
    causesEn: ['A group of conditions that cause muscle inflammation and weakness.', 'It may be associated with an autoimmune disorder, infection, medicine, or another cause.'],
    treatmentsAr: ['تقييم طبي لتحديد نوع التهاب العضلات والسبب', 'اتباع علاج يحدده المختص ومراقبة تأثيره', 'العلاج الطبيعي أو التأهيلي للحفاظ على الحركة بأمان'],
    treatmentsEn: ['Get medical assessment to identify the myositis type and cause', 'Follow specialist-directed treatment and monitor its effects', 'Use physical or rehabilitation therapy to maintain safe mobility'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/myositis.html' }
    ]
  },
  {
    id: 'physical_extra_carbon_monoxide_poisoning',
    nameAr: 'التسمم بأول أكسيد الكربون',
    nameEn: 'Carbon Monoxide Poisoning',
    symptomsAr: ['صداع ودوخة', 'ضعف أو غثيان وقيء', 'تشوش أو فقدان وعي في الحالات الشديدة'],
    symptomsEn: ['Headache and dizziness', 'Weakness, nausea, or vomiting', 'Confusion or loss of consciousness in severe cases'],
    causesAr: ['استنشاق غاز أول أكسيد الكربون عديم اللون والرائحة.', 'ينتج الغاز عن احتراق الوقود في أماكن سيئة التهوية أو بسبب أجهزة معطوبة.'],
    causesEn: ['Breathing carbon monoxide, a colorless and odorless gas.', 'The gas results from fuel combustion in poorly ventilated spaces or malfunctioning appliances.'],
    treatmentsAr: ['الخروج فوراً إلى هواء نقي وطلب خدمات الطوارئ', 'تلقي الأكسجين والعلاج الطبي العاجل', 'المتابعة الطبية لاحتمال ظهور مضاعفات متأخرة'],
    treatmentsEn: ['Move immediately to fresh air and contact emergency services', 'Receive oxygen and urgent medical treatment', 'Get medical follow-up for possible delayed complications'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/carbonmonoxidepoisoning.html' }
    ]
  },
  {
    id: 'physical_extra_cytomegalovirus_infection',
    nameAr: 'عدوى الفيروس المضخم للخلايا',
    nameEn: 'Cytomegalovirus Infection',
    symptomsAr: ['قد لا تظهر أعراض لدى الأصحاء', 'قد تحدث حمى أو تعب وآلام عضلية', 'قد تسبب مرضاً شديداً لدى ضعيفي المناعة أو مضاعفات جنينية'],
    symptomsEn: ['Healthy people may have no symptoms', 'Fever, fatigue, or muscle aches may occur', 'Severe illness may occur in immunocompromised people, and fetal complications are possible'],
    causesAr: ['عدوى بفيروس شائع ينتقل عبر سوائل الجسم مثل اللعاب والبول والدم.', 'قد ينتقل من الحامل إلى الجنين أو عبر نقل الدم وزراعة الأعضاء.'],
    causesEn: ['An infection by a common virus spread through body fluids such as saliva, urine, and blood.', 'It may pass from a pregnant person to a fetus or through blood transfusion and organ transplantation.'],
    treatmentsAr: ['تقييم طبي، خاصة لحديثي الولادة وضعيفي المناعة', 'رعاية داعمة للأعراض البسيطة وفق المشورة الطبية', 'استخدام أدوية مضادة للفيروسات في حالات محددة تحت إشراف مختص'],
    treatmentsEn: ['Get medical assessment, especially for newborns and immunocompromised people', 'Use supportive care for mild symptoms as medically advised', 'Use antiviral medicines in selected cases under specialist supervision'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/cytomegalovirusinfections.html' }
    ]
  },
  {
    id: 'physical_extra_lead_poisoning',
    nameAr: 'التسمم بالرصاص',
    nameEn: 'Lead Poisoning',
    symptomsAr: ['قد لا تظهر أعراض مبكرة', 'ألم بالبطن أو إمساك وتعب', 'قد يؤثر في النمو والتعلم والجهاز العصبي لدى الأطفال'],
    symptomsEn: ['Early symptoms may be absent', 'Abdominal pain, constipation, or fatigue', 'Growth, learning, and the nervous system may be affected in children'],
    causesAr: ['تراكم الرصاص في الجسم بعد التعرض له.', 'قد يأتي التعرض من الطلاء أو الغبار أو الماء أو التربة أو منتجات ملوثة.'],
    causesEn: ['Lead builds up in the body after exposure.', 'Exposure may come from paint, dust, water, soil, or contaminated products.'],
    treatmentsAr: ['تحديد مصدر الرصاص وإيقاف التعرض له بأمان', 'إجراء تقييم طبي وفحوصات متابعة لمستوى الرصاص', 'استخدام العلاج الطبي المناسب للحالة، مع دعم النمو والتعلم للأطفال'],
    treatmentsEn: ['Identify the lead source and safely stop further exposure', 'Get medical assessment and follow-up blood lead testing', 'Use medical treatment appropriate to the case, with developmental and learning support for children'],
    sources: [
      { nameAr: 'ميدلاين بلس (المكتبة الوطنية الأمريكية للطب)', nameEn: 'MedlinePlus (U.S. National Library of Medicine)', url: 'https://medlineplus.gov/leadpoisoning.html' }
    ]
  }
];
