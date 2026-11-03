export interface Treatment {
  id: string;
  diseaseId: string;
  nameEn: string;
  nameAr: string;
  price?: string;
  pricePackage?: string;
  priceSourceType?: 'official' | 'retail';
  priceVerifiedAt?: string;
  priceSourceUrl?: string;
  dosageEn: string;
  dosageAr: string;
}

export const treatments: Treatment[] = [
  // الإنفلونزا (Flu)
  {
    id: 'flu_1',
    diseaseId: 'flu',
    nameEn: 'Congestal',
    nameAr: 'كونجستال',
    dosageEn: '1 tablet 3 times daily',
    dosageAr: '1 قرص 3 مرات يومياً'
  },
  {
    id: 'flu_2',
    diseaseId: 'flu',
    nameEn: '123 Cold',
    nameAr: '123',
    dosageEn: '2 tablets 3 times daily',
    dosageAr: '2 قرص 3 مرات يومياً'
  },
  {
    id: 'flu_3',
    diseaseId: 'flu',
    nameEn: 'Flurest',
    nameAr: 'فلورست',
    dosageEn: '1 tablet every 6 hours',
    dosageAr: '1 قرص كل 6 ساعات'
  },
  
  // كوفيد-19 (COVID-19)
  {
    id: 'covid_1',
    diseaseId: 'covid19',
    nameEn: 'Vitamin C 1000',
    nameAr: 'فيتامين سي 1000',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'covid_2',
    diseaseId: 'covid19',
    nameEn: 'Vitamin D',
    nameAr: 'فيتامين د',
    dosageEn: '1 capsule weekly',
    dosageAr: '1 كبسولة أسبوعياً'
  },
  {
    id: 'covid_3',
    diseaseId: 'covid19',
    nameEn: 'Zinc',
    nameAr: 'زنك',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  
  // السكري (Diabetes)
  {
    id: 'diabetes_1',
    diseaseId: 'diabetes',
    nameEn: 'Glucophage',
    nameAr: 'جلوكوفاج',
    dosageEn: '1 tablet twice daily',
    dosageAr: '1 قرص مرتين يومياً'
  },
  {
    id: 'diabetes_2',
    diseaseId: 'diabetes',
    nameEn: 'Amaryl',
    nameAr: 'اماريل',
    dosageEn: '1 tablet in the morning',
    dosageAr: '1 قرص صباحاً'
  },
  {
    id: 'diabetes_3',
    diseaseId: 'diabetes',
    nameEn: 'Diamicron',
    nameAr: 'دياميكرون',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  
  // ارتفاع ضغط الدم (Hypertension)
  {
    id: 'hypertension_1',
    diseaseId: 'hypertension',
    nameEn: 'Concor',
    nameAr: 'كونكور',
    dosageEn: '1 tablet in the morning',
    dosageAr: '1 قرص صباحاً'
  },
  {
    id: 'hypertension_2',
    diseaseId: 'hypertension',
    nameEn: 'Norvasc',
    nameAr: 'نورفاسك',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'hypertension_3',
    diseaseId: 'hypertension',
    nameEn: 'Coversyl',
    nameAr: 'كوفرسيل',
    dosageEn: '1 tablet in the morning',
    dosageAr: '1 قرص صباحاً'
  },
  
  // الربو (Asthma)
  {
    id: 'asthma_1',
    diseaseId: 'asthma',
    nameEn: 'Ventolin Inhaler',
    nameAr: 'فنتولين بخاخ',
    dosageEn: '1 puff as needed',
    dosageAr: 'بخة واحدة عند الحاجة'
  },
  {
    id: 'asthma_2',
    diseaseId: 'asthma',
    nameEn: 'Seretide Inhaler',
    nameAr: 'سيريتايد بخاخ',
    dosageEn: '1 puff morning and evening',
    dosageAr: 'بخة صباحاً ومساءً'
  },
  {
    id: 'asthma_3',
    diseaseId: 'asthma',
    nameEn: 'Singulair',
    nameAr: 'سينجولير',
    dosageEn: '1 tablet in the evening',
    dosageAr: '1 قرص مساءً'
  },
  
  // فقر الدم (Anemia)
  {
    id: 'anemia_1',
    diseaseId: 'anemia',
    nameEn: 'Feroglobin',
    nameAr: 'فيروجلوبين',
    dosageEn: '1 capsule daily',
    dosageAr: '1 كبسولة يومياً'
  },
  {
    id: 'anemia_2',
    diseaseId: 'anemia',
    nameEn: 'Haemojet',
    nameAr: 'هيموجيت',
    dosageEn: '1 tablet twice daily',
    dosageAr: '1 قرص مرتين يومياً'
  },
  {
    id: 'anemia_3',
    diseaseId: 'anemia',
    nameEn: 'Vitatron',
    nameAr: 'فيتاترون',
    dosageEn: '1 capsule daily',
    dosageAr: '1 كبسولة يومياً'
  },
  
  // الصداع النصفي (Migraine)
  {
    id: 'migraine_1',
    diseaseId: 'migraine',
    nameEn: 'Migranil',
    nameAr: 'ميجرانيل',
    dosageEn: '1 tablet at onset of attack',
    dosageAr: '1 قرص عند بداية النوبة'
  },
  {
    id: 'migraine_2',
    diseaseId: 'migraine',
    nameEn: 'Imigran',
    nameAr: 'اميجران',
    dosageEn: '1 tablet as needed',
    dosageAr: '1 قرص عند الحاجة'
  },
  {
    id: 'migraine_3',
    diseaseId: 'migraine',
    nameEn: 'Paracetamol 500',
    nameAr: 'باراسيتامول 500',
    dosageEn: '2 tablets every 6 hours',
    dosageAr: '2 قرص كل 6 ساعات'
  },
  
  // التهاب المعدة (Gastritis)
  {
    id: 'gastritis_1',
    diseaseId: 'gastritis',
    nameEn: 'Controloc',
    nameAr: 'كونترولوك',
    dosageEn: '1 tablet in the morning before meals',
    dosageAr: '1 قرص صباحاً قبل الأكل'
  },
  {
    id: 'gastritis_2',
    diseaseId: 'gastritis',
    nameEn: 'Nexium',
    nameAr: 'نيكسيوم',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'gastritis_3',
    diseaseId: 'gastritis',
    nameEn: 'Gaviscon',
    nameAr: 'جافيسكون',
    dosageEn: '10ml after meals',
    dosageAr: '10 مل بعد الأكل'
  },
  
  // التهاب المفاصل (Arthritis)
  {
    id: 'arthritis_1',
    diseaseId: 'arthritis',
    nameEn: 'Celebrex',
    nameAr: 'سيليبريكس',
    dosageEn: '1 capsule twice daily',
    dosageAr: '1 كبسولة مرتين يومياً'
  },
  {
    id: 'arthritis_2',
    diseaseId: 'arthritis',
    nameEn: 'Mobic',
    nameAr: 'موبيك',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'arthritis_3',
    diseaseId: 'arthritis',
    nameEn: 'Arthrofast',
    nameAr: 'ارثروفاست',
    dosageEn: '1 sachet twice daily',
    dosageAr: '1 كيس مرتين يومياً'
  },
  
  // التهاب الشعب الهوائية (Bronchitis)
  {
    id: 'bronchitis_1',
    diseaseId: 'bronchitis',
    nameEn: 'Augmentin',
    nameAr: 'اوجمنتين',
    dosageEn: '1 tablet twice daily',
    dosageAr: '1 قرص مرتين يومياً'
  },
  {
    id: 'bronchitis_2',
    diseaseId: 'bronchitis',
    nameEn: 'Azithromycin',
    nameAr: 'ازيثروميسين',
    dosageEn: '1 tablet daily for 3 days',
    dosageAr: '1 قرص يومياً لمدة 3 أيام'
  },
  {
    id: 'bronchitis_3',
    diseaseId: 'bronchitis',
    nameEn: 'Clavox',
    nameAr: 'كلافوكس',
    dosageEn: '1 tablet 3 times daily',
    dosageAr: '1 قرص 3 مرات يومياً'
  },
  
  // التهاب الجيوب الأنفية (Sinusitis)
  {
    id: 'sinusitis_1',
    diseaseId: 'sinusitis',
    nameEn: 'Sinoclear',
    nameAr: 'سينوكلير',
    dosageEn: '1 spray in each nostril twice daily',
    dosageAr: 'بخة في كل فتحة أنف مرتين يومياً'
  },
  {
    id: 'sinusitis_2',
    diseaseId: 'sinusitis',
    nameEn: 'Telfast',
    nameAr: 'تلفاست',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'sinusitis_3',
    diseaseId: 'sinusitis',
    nameEn: 'Rhinocort',
    nameAr: 'رينوكورت',
    dosageEn: '1 spray daily',
    dosageAr: 'بخة واحدة يومياً'
  },
  
  // التهاب المسالك البولية (UTI)
  {
    id: 'uti_1',
    diseaseId: 'urinary_infection',
    nameEn: 'Ciprofloxacin',
    nameAr: 'سيبروفلوكساسين',
    dosageEn: '1 tablet twice daily',
    dosageAr: '1 قرص مرتين يومياً'
  },
  {
    id: 'uti_2',
    diseaseId: 'urinary_infection',
    nameEn: 'Urivin',
    nameAr: 'يوريفين',
    dosageEn: '1 sachet 3 times daily',
    dosageAr: '1 كيس 3 مرات يومياً'
  },
  {
    id: 'uti_3',
    diseaseId: 'urinary_infection',
    nameEn: 'Flagyl',
    nameAr: 'فلاجيل',
    dosageEn: '1 tablet 3 times daily',
    dosageAr: '1 قرص 3 مرات يومياً'
  },
  
  // اضطراب الغدة الدرقية (Thyroid Disorder)
  {
    id: 'thyroid_1',
    diseaseId: 'thyroid_disorder',
    nameEn: 'Euthyrox',
    nameAr: 'يوثيروكس',
    dosageEn: '1 tablet in the morning on empty stomach',
    dosageAr: '1 قرص صباحاً على الريق'
  },
  {
    id: 'thyroid_2',
    diseaseId: 'thyroid_disorder',
    nameEn: 'Thyroxine',
    nameAr: 'ثيروكسين',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'thyroid_3',
    diseaseId: 'thyroid_disorder',
    nameEn: 'Carbimazole',
    nameAr: 'كاربيمازول',
    dosageEn: '1 tablet twice daily',
    dosageAr: '1 قرص مرتين يومياً'
  },
  
  // اضطراب القلق (Anxiety)
  {
    id: 'anxiety_1',
    diseaseId: 'anxiety',
    nameEn: 'Xanax',
    nameAr: 'زولام',
    dosageEn: '1 tablet as needed',
    dosageAr: '1 قرص عند الحاجة'
  },
  {
    id: 'anxiety_2',
    diseaseId: 'anxiety',
    nameEn: 'Lexotanil',
    nameAr: 'ليكسوتانيل',
    dosageEn: '1 tablet in the evening',
    dosageAr: '1 قرص مساءً'
  },
  {
    id: 'anxiety_3',
    diseaseId: 'anxiety',
    nameEn: 'Inderal',
    nameAr: 'اندرال',
    dosageEn: '1 tablet twice daily',
    dosageAr: '1 قرص مرتين يومياً'
  },
  
  // التهاب الأنف التحسسي (Allergic Rhinitis)
  {
    id: 'allergic_1',
    diseaseId: 'allergic_rhinitis',
    nameEn: 'Claritin',
    nameAr: 'كلاريتين',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'allergic_2',
    diseaseId: 'allergic_rhinitis',
    nameEn: 'Zyrtec',
    nameAr: 'زيرتك',
    dosageEn: '1 tablet in the evening',
    dosageAr: '1 قرص مساءً'
  },
  {
    id: 'allergic_3',
    diseaseId: 'allergic_rhinitis',
    nameEn: 'Avamys Spray',
    nameAr: 'أفاميس بخاخ',
    dosageEn: '1 spray daily',
    dosageAr: 'بخة واحدة يومياً'
  },
  
  // ارتفاع الكوليسترول (High Cholesterol)
  {
    id: 'cholesterol_1',
    diseaseId: 'cholesterol',
    nameEn: 'Lipitor',
    nameAr: 'ليبيتور',
    dosageEn: '1 tablet in the evening',
    dosageAr: '1 قرص مساءً'
  },
  {
    id: 'cholesterol_2',
    diseaseId: 'cholesterol',
    nameEn: 'Crestor',
    nameAr: 'كريستور',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'cholesterol_3',
    diseaseId: 'cholesterol',
    nameEn: 'Atorvastatin',
    nameAr: 'اتورفاستاتين',
    dosageEn: '1 tablet at bedtime',
    dosageAr: '1 قرص قبل النوم'
  },
  
  // حصى الكلى (Kidney Stones)
  {
    id: 'kidney_1',
    diseaseId: 'kidney_stones',
    nameEn: 'Rowatinex',
    nameAr: 'روتينكس',
    dosageEn: '1-2 capsules 3 times daily',
    dosageAr: '1-2 كبسولة 3 مرات يومياً'
  },
  {
    id: 'kidney_2',
    diseaseId: 'kidney_stones',
    nameEn: 'Cystone',
    nameAr: 'سيستون',
    dosageEn: '2 tablets twice daily',
    dosageAr: '2 قرص مرتين يومياً'
  },
  {
    id: 'kidney_3',
    diseaseId: 'kidney_stones',
    nameEn: 'Epimag',
    nameAr: 'ابيماج',
    dosageEn: '1 sachet twice daily',
    dosageAr: '1 كيس مرتين يومياً'
  },
  
  // النقرس (Gout)
  {
    id: 'gout_1',
    diseaseId: 'gout',
    nameEn: 'Colchicine',
    nameAr: 'كولشيسين',
    dosageEn: '1 tablet at onset then 1 after hour',
    dosageAr: '1 قرص عند بداية النوبة ثم 1 بعد ساعة'
  },
  {
    id: 'gout_2',
    diseaseId: 'gout',
    nameEn: 'Allopurinol',
    nameAr: 'الوبيورينول',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'gout_3',
    diseaseId: 'gout',
    nameEn: 'Zyloric',
    nameAr: 'زيلوريك',
    dosageEn: '1 tablet daily after meals',
    dosageAr: '1 قرص يومياً بعد الأكل'
  },
  
  // التهاب الكبد (Hepatitis)
  {
    id: 'hepatitis_1',
    diseaseId: 'hepatitis',
    nameEn: 'Hepamerz',
    nameAr: 'هيباميرز',
    dosageEn: '1 sachet 3 times daily',
    dosageAr: '1 كيس 3 مرات يومياً'
  },
  {
    id: 'hepatitis_2',
    diseaseId: 'hepatitis',
    nameEn: 'Hepa-Merz',
    nameAr: 'هيبا-ميرز',
    dosageEn: '2 sachets twice daily',
    dosageAr: '2 كيس مرتين يومياً'
  },
  {
    id: 'hepatitis_3',
    diseaseId: 'hepatitis',
    nameEn: 'Silymarin',
    nameAr: 'سيليمارين',
    dosageEn: '1 capsule 3 times daily',
    dosageAr: '1 كبسولة 3 مرات يومياً'
  },
  
  // السل (Tuberculosis)
  {
    id: 'tb_1',
    diseaseId: 'tuberculosis',
    nameEn: 'Rifampicin',
    nameAr: 'ريفامبيسين',
    dosageEn: '1 tablet daily on empty stomach',
    dosageAr: '1 قرص يومياً على الريق'
  },
  {
    id: 'tb_2',
    diseaseId: 'tuberculosis',
    nameEn: 'Isoniazid',
    nameAr: 'ايزونيازيد',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'tb_3',
    diseaseId: 'tuberculosis',
    nameEn: 'Ethambutol',
    nameAr: 'ايثامبوتول',
    dosageEn: '2 tablets daily',
    dosageAr: '2 قرص يومياً'
  },
  
  // قرحة المعدة (Stomach Ulcer)
  {
    id: 'ulcer_1',
    diseaseId: 'ulcer',
    nameEn: 'Omeprazole',
    nameAr: 'اوميبرازول',
    dosageEn: '1 capsule before breakfast',
    dosageAr: '1 كبسولة قبل الإفطار'
  },
  {
    id: 'ulcer_2',
    diseaseId: 'ulcer',
    nameEn: 'Pantoprazole',
    nameAr: 'بانتوبرازول',
    dosageEn: '1 tablet twice daily',
    dosageAr: '1 قرص مرتين يومياً'
  },
  {
    id: 'ulcer_3',
    diseaseId: 'ulcer',
    nameEn: 'Ranitidine',
    nameAr: 'رانيتيدين',
    dosageEn: '1 tablet twice daily',
    dosageAr: '1 قرص مرتين يومياً'
  },
  
  // الإكزيما (Eczema)
  {
    id: 'eczema_1',
    diseaseId: 'eczema',
    nameEn: 'Betnovate Cream',
    nameAr: 'بيتنوفيت كريم',
    dosageEn: 'Apply thin layer twice daily',
    dosageAr: 'دهان طبقة رقيقة مرتين يومياً'
  },
  {
    id: 'eczema_2',
    diseaseId: 'eczema',
    nameEn: 'Elocon Cream',
    nameAr: 'ايلوكون كريم',
    dosageEn: 'Apply once daily',
    dosageAr: 'دهان مرة واحدة يومياً'
  },
  {
    id: 'eczema_3',
    diseaseId: 'eczema',
    nameEn: 'Moisturex Cream',
    nameAr: 'مويستوريكس كريم',
    dosageEn: 'Apply 2-3 times daily',
    dosageAr: 'دهان 2-3 مرات يومياً'
  },
  
  // الصدفية (Psoriasis)
  {
    id: 'psoriasis_1',
    diseaseId: 'psoriasis',
    nameEn: 'Daivobet Gel',
    nameAr: 'دايفوبيت جل',
    dosageEn: 'Apply once daily',
    dosageAr: 'دهان مرة واحدة يومياً'
  },
  {
    id: 'psoriasis_2',
    diseaseId: 'psoriasis',
    nameEn: 'Methotrexate',
    nameAr: 'ميثوتريكسات',
    dosageEn: '1 tablet weekly',
    dosageAr: '1 قرص أسبوعياً'
  },
  {
    id: 'psoriasis_3',
    diseaseId: 'psoriasis',
    nameEn: 'Diprosone Ointment',
    nameAr: 'ديبروزون مرهم',
    dosageEn: 'Apply twice daily',
    dosageAr: 'دهان مرتين يومياً'
  },
  
  // الدوالي (Varicose Veins)
  {
    id: 'varicose_1',
    diseaseId: 'varicose_veins',
    nameEn: 'Daflon',
    nameAr: 'دافلون',
    dosageEn: '1 tablet twice daily',
    dosageAr: '1 قرص مرتين يومياً'
  },
  {
    id: 'varicose_2',
    diseaseId: 'varicose_veins',
    nameEn: 'Venoruton',
    nameAr: 'فينوروتون',
    dosageEn: '1 capsule 3 times daily',
    dosageAr: '1 كبسولة 3 مرات يومياً'
  },
  {
    id: 'varicose_3',
    diseaseId: 'varicose_veins',
    nameEn: 'Cyclo 3',
    nameAr: 'سيكلو 3',
    dosageEn: '2 capsules daily',
    dosageAr: '2 كبسولة يومياً'
  },
  
  // متلازمة القولون العصبي (IBS)
  {
    id: 'ibs_1',
    diseaseId: 'ibs',
    nameEn: 'Librax',
    nameAr: 'ليبراكس',
    dosageEn: '1 tablet 3 times daily before meals',
    dosageAr: '1 قرص 3 مرات يومياً قبل الأكل'
  },
  {
    id: 'ibs_2',
    diseaseId: 'ibs',
    nameEn: 'Colona',
    nameAr: 'كولونا',
    dosageEn: '1-2 tablets 3 times daily',
    dosageAr: '1-2 قرص 3 مرات يومياً'
  },
  {
    id: 'ibs_3',
    diseaseId: 'ibs',
    nameEn: 'Spasmocanulase',
    nameAr: 'سباسموكانيوليز',
    dosageEn: '1 tablet 3 times daily',
    dosageAr: '1 قرص 3 مرات يومياً'
  },
  
  // الالتهاب الرئوي (Pneumonia)
  {
    id: 'pneumonia_1',
    diseaseId: 'pneumonia',
    nameEn: 'Augmentin 1gm',
    nameAr: 'اوجمنتين 1 جم',
    dosageEn: '1 tablet twice daily',
    dosageAr: '1 قرص مرتين يومياً'
  },
  {
    id: 'pneumonia_2',
    diseaseId: 'pneumonia',
    nameEn: 'Ceftriaxone Injection',
    nameAr: 'سيفترياكسون حقن',
    dosageEn: '1 injection daily',
    dosageAr: '1 حقنة يومياً'
  },
  {
    id: 'pneumonia_3',
    diseaseId: 'pneumonia',
    nameEn: 'Zinnat',
    nameAr: 'زينات',
    dosageEn: '1 tablet twice daily',
    dosageAr: '1 قرص مرتين يومياً'
  },
  
  // التهاب الزائدة الدودية (Appendicitis)
  {
    id: 'appendicitis_1',
    diseaseId: 'appendicitis',
    nameEn: 'Paracetamol for pain',
    nameAr: 'باراسيتامول للألم',
    dosageEn: 'Seek immediate medical attention - surgery required',
    dosageAr: 'يجب التوجه للطوارئ فوراً - تتطلب جراحة'
  },
  {
    id: 'appendicitis_2',
    diseaseId: 'appendicitis',
    nameEn: 'Post-surgery Antibiotics',
    nameAr: 'مضادات حيوية بعد الجراحة',
    dosageEn: 'As prescribed by surgeon',
    dosageAr: 'حسب وصف الجراح'
  },
  {
    id: 'appendicitis_3',
    diseaseId: 'appendicitis',
    nameEn: 'Anti-inflammatory',
    nameAr: 'مضاد للالتهاب',
    dosageEn: 'Post-surgery as needed',
    dosageAr: 'بعد الجراحة حسب الحاجة'
  },
  
  // التهاب اللوزتين (Tonsillitis)
  {
    id: 'tonsillitis_1',
    diseaseId: 'tonsillitis',
    nameEn: 'Cefotax',
    nameAr: 'سيفوتاكس',
    dosageEn: '1 tablet twice daily',
    dosageAr: '1 قرص مرتين يومياً'
  },
  {
    id: 'tonsillitis_2',
    diseaseId: 'tonsillitis',
    nameEn: 'Megamox',
    nameAr: 'ميجاموكس',
    dosageEn: '1 tablet twice daily',
    dosageAr: '1 قرص مرتين يومياً'
  },
  {
    id: 'tonsillitis_3',
    diseaseId: 'tonsillitis',
    nameEn: 'Betadine Gargle',
    nameAr: 'بيتادين غرغرة',
    dosageEn: 'Gargle 3-4 times daily',
    dosageAr: 'غرغرة 3-4 مرات يومياً'
  },
  
  // التهاب الملتحمة (Conjunctivitis)
  {
    id: 'conjunctivitis_1',
    diseaseId: 'conjunctivitis',
    nameEn: 'Tobramycin Eye Drops',
    nameAr: 'توبراميسين قطرة للعين',
    dosageEn: '1 drop 4 times daily',
    dosageAr: 'قطرة واحدة 4 مرات يومياً'
  },
  {
    id: 'conjunctivitis_2',
    diseaseId: 'conjunctivitis',
    nameEn: 'Optichlor Eye Drops',
    nameAr: 'اوبتيكلور قطرة للعين',
    dosageEn: '2 drops every 4 hours',
    dosageAr: '2 قطرة كل 4 ساعات'
  },
  {
    id: 'conjunctivitis_3',
    diseaseId: 'conjunctivitis',
    nameEn: 'Vigamox Eye Drops',
    nameAr: 'فيجاموكس قطرة للعين',
    dosageEn: '1 drop 3 times daily',
    dosageAr: 'قطرة واحدة 3 مرات يومياً'
  },
  
  // البواسير (Hemorrhoids)
  {
    id: 'hemorrhoids_1',
    diseaseId: 'hemorrhoids',
    nameEn: 'Proctoglyvenol Cream',
    nameAr: 'بروكتوجليفينول كريم',
    dosageEn: 'Apply 2-3 times daily',
    dosageAr: 'دهان 2-3 مرات يومياً'
  },
  {
    id: 'hemorrhoids_2',
    diseaseId: 'hemorrhoids',
    nameEn: 'Procto-Glyvenol Suppositories',
    nameAr: 'بروكتوجليفينول لبوس',
    dosageEn: '1 suppository twice daily',
    dosageAr: 'لبوسة واحدة مرتين يومياً'
  },
  {
    id: 'hemorrhoids_3',
    diseaseId: 'hemorrhoids',
    nameEn: 'Daflon 500',
    nameAr: 'دافلون 500',
    dosageEn: '2 tablets twice daily',
    dosageAr: '2 قرص مرتين يومياً'
  },
  
  // هشاشة العظام (Osteoporosis)
  {
    id: 'osteoporosis_1',
    diseaseId: 'osteoporosis',
    nameEn: 'Calcium + Vitamin D',
    nameAr: 'كالسيوم + فيتامين د',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'osteoporosis_2',
    diseaseId: 'osteoporosis',
    nameEn: 'Fosamax',
    nameAr: 'فوساماكس',
    dosageEn: '1 tablet weekly on empty stomach',
    dosageAr: '1 قرص أسبوعياً على الريق'
  },
  {
    id: 'osteoporosis_3',
    diseaseId: 'osteoporosis',
    nameEn: 'Osteocare',
    nameAr: 'اوستيوكير',
    dosageEn: '1 tablet twice daily',
    dosageAr: '1 قرص مرتين يومياً'
  },
  
  // عرق النسا (Sciatica)
  {
    id: 'sciatica_1',
    diseaseId: 'sciatica',
    nameEn: 'Neurobion Forte',
    nameAr: 'نيوروبيون فورت',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'sciatica_2',
    diseaseId: 'sciatica',
    nameEn: 'Voltaren SR',
    nameAr: 'فولتارين اس ار',
    dosageEn: '1 tablet twice daily',
    dosageAr: '1 قرص مرتين يومياً'
  },
  {
    id: 'sciatica_3',
    diseaseId: 'sciatica',
    nameEn: 'Myolgin Capsules',
    nameAr: 'ميولجين كبسولات',
    dosageEn: '1 capsule twice daily',
    dosageAr: '1 كبسولة مرتين يومياً'
  },
  
  // الدوار (Vertigo)
  {
    id: 'vertigo_1',
    diseaseId: 'vertigo',
    nameEn: 'Betaserc',
    nameAr: 'بيتاسيرك',
    dosageEn: '1 tablet 3 times daily',
    dosageAr: '1 قرص 3 مرات يومياً'
  },
  {
    id: 'vertigo_2',
    diseaseId: 'vertigo',
    nameEn: 'Dramamine',
    nameAr: 'درامامين',
    dosageEn: '1 tablet every 6 hours',
    dosageAr: '1 قرص كل 6 ساعات'
  },
  {
    id: 'vertigo_3',
    diseaseId: 'vertigo',
    nameEn: 'Stugeron',
    nameAr: 'ستوجيرون',
    dosageEn: '1 tablet 3 times daily',
    dosageAr: '1 قرص 3 مرات يومياً'
  },
  
  // ارتجاع المريء (Acid Reflux)
  {
    id: 'reflux_1',
    diseaseId: 'acid_reflux',
    nameEn: 'Esomeprazole',
    nameAr: 'ايزوميبرازول',
    dosageEn: '1 tablet before breakfast',
    dosageAr: '1 قرص قبل الإفطار'
  },
  {
    id: 'reflux_2',
    diseaseId: 'acid_reflux',
    nameEn: 'Gaviscon Advance',
    nameAr: 'جافيسكون ادفانس',
    dosageEn: '10ml after meals',
    dosageAr: '10 مل بعد الأكل'
  },
  {
    id: 'reflux_3',
    diseaseId: 'acid_reflux',
    nameEn: 'Motilium',
    nameAr: 'موتيليوم',
    dosageEn: '1 tablet 3 times before meals',
    dosageAr: '1 قرص 3 مرات قبل الأكل'
  },
  
  // حصوات المرارة (Gallstones)
  {
    id: 'gallstones_1',
    diseaseId: 'gallstones',
    nameEn: 'Ursofalk',
    nameAr: 'يورسوفالك',
    dosageEn: '1 capsule twice daily',
    dosageAr: '1 كبسولة مرتين يومياً'
  },
  {
    id: 'gallstones_2',
    diseaseId: 'gallstones',
    nameEn: 'Buscopan',
    nameAr: 'بسكوبان',
    dosageEn: '1 tablet 3 times daily for pain',
    dosageAr: '1 قرص 3 مرات يومياً للألم'
  },
  {
    id: 'gallstones_3',
    diseaseId: 'gallstones',
    nameEn: 'Digestin',
    nameAr: 'ديجستين',
    dosageEn: '1 tablet after meals',
    dosageAr: '1 قرص بعد الأكل'
  },
  
  // الاكتئاب (Depression)
  {
    id: 'depression_1',
    diseaseId: 'depression',
    nameEn: 'Prozac (Fluoxetine)',
    nameAr: 'بروزاك',
    dosageEn: '1 capsule daily in morning',
    dosageAr: '1 كبسولة يومياً صباحاً'
  },
  {
    id: 'depression_2',
    diseaseId: 'depression',
    nameEn: 'Faverin (Fluvoxamine)',
    nameAr: 'فافرين',
    dosageEn: '1 tablet at night',
    dosageAr: '1 قرص ليلاً'
  },
  {
    id: 'depression_3',
    diseaseId: 'depression',
    nameEn: 'Cipralex (Escitalopram)',
    nameAr: 'سيبرالكس',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  
  // الاضطراب ثنائي القطب (Bipolar)
  {
    id: 'bipolar_1',
    diseaseId: 'bipolar',
    nameEn: 'Depakine (Valproate)',
    nameAr: 'ديباكين',
    dosageEn: '1 tablet twice daily',
    dosageAr: '1 قرص مرتين يومياً'
  },
  {
    id: 'bipolar_2',
    diseaseId: 'bipolar',
    nameEn: 'Lithium Carbonate',
    nameAr: 'ليثيوم كاربونات',
    dosageEn: '2-3 tablets daily as prescribed',
    dosageAr: '2-3 قرص يومياً حسب الوصف'
  },
  {
    id: 'bipolar_3',
    diseaseId: 'bipolar',
    nameEn: 'Tegretol (Carbamazepine)',
    nameAr: 'تجريتول',
    dosageEn: '1 tablet twice daily',
    dosageAr: '1 قرص مرتين يومياً'
  },
  
  // الفصام (Schizophrenia)
  {
    id: 'schizophrenia_1',
    diseaseId: 'schizophrenia',
    nameEn: 'Risperdal (Risperidone)',
    nameAr: 'ريسبردال',
    dosageEn: '1-2 tablets daily',
    dosageAr: '1-2 قرص يومياً'
  },
  {
    id: 'schizophrenia_2',
    diseaseId: 'schizophrenia',
    nameEn: 'Zyprexa (Olanzapine)',
    nameAr: 'زيبركسا',
    dosageEn: '1 tablet at bedtime',
    dosageAr: '1 قرص قبل النوم'
  },
  {
    id: 'schizophrenia_3',
    diseaseId: 'schizophrenia',
    nameEn: 'Seroquel (Quetiapine)',
    nameAr: 'سيروكويل',
    dosageEn: '1-2 tablets daily',
    dosageAr: '1-2 قرص يومياً'
  },
  
  // الوسواس القهري (OCD)
  {
    id: 'ocd_1',
    diseaseId: 'ocd',
    nameEn: 'Anafranil (Clomipramine)',
    nameAr: 'انافرانيل',
    dosageEn: '1 tablet daily, increase gradually',
    dosageAr: '1 قرص يومياً، مع الزيادة التدريجية'
  },
  {
    id: 'ocd_2',
    diseaseId: 'ocd',
    nameEn: 'Zoloft (Sertraline)',
    nameAr: 'زولفت',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'ocd_3',
    diseaseId: 'ocd',
    nameEn: 'Luvox (Fluvoxamine)',
    nameAr: 'لوفوكس',
    dosageEn: '1 tablet at night',
    dosageAr: '1 قرص ليلاً'
  },
  
  // اضطراب ما بعد الصدمة (PTSD)
  {
    id: 'ptsd_1',
    diseaseId: 'ptsd',
    nameEn: 'Paroxetine',
    nameAr: 'باروكسيتين',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'ptsd_2',
    diseaseId: 'ptsd',
    nameEn: 'Prazosin',
    nameAr: 'برازوسين',
    dosageEn: '1 tablet at bedtime for nightmares',
    dosageAr: '1 قرص قبل النوم للكوابيس'
  },
  {
    id: 'ptsd_3',
    diseaseId: 'ptsd',
    nameEn: 'Sertraline',
    nameAr: 'سيرترالين',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  
  // اضطراب الهلع (Panic Disorder)
  {
    id: 'panic_1',
    diseaseId: 'panic_disorder',
    nameEn: 'Xanax (Alprazolam)',
    nameAr: 'زاناكس',
    dosageEn: '0.5mg as needed, max 3 times daily',
    dosageAr: '0.5 ملجم عند الحاجة، بحد أقصى 3 مرات يومياً'
  },
  {
    id: 'panic_2',
    diseaseId: 'panic_disorder',
    nameEn: 'Rivotril (Clonazepam)',
    nameAr: 'ريفوتريل',
    dosageEn: '0.5-1mg twice daily',
    dosageAr: '0.5-1 ملجم مرتين يومياً'
  },
  {
    id: 'panic_3',
    diseaseId: 'panic_disorder',
    nameEn: 'Paxil (Paroxetine)',
    nameAr: 'باكسيل',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  
  // القلق الاجتماعي (Social Anxiety)
  {
    id: 'social_anxiety_1',
    diseaseId: 'social_anxiety',
    nameEn: 'Propranolol',
    nameAr: 'بروبرانولول',
    dosageEn: '10-40mg before social situations',
    dosageAr: '10-40 ملجم قبل المواقف الاجتماعية'
  },
  {
    id: 'social_anxiety_2',
    diseaseId: 'social_anxiety',
    nameEn: 'Effexor (Venlafaxine)',
    nameAr: 'افكسور',
    dosageEn: '1 capsule daily',
    dosageAr: '1 كبسولة يومياً'
  },
  {
    id: 'social_anxiety_3',
    diseaseId: 'social_anxiety',
    nameEn: 'Zoloft (Sertraline)',
    nameAr: 'زولفت',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  
  // اضطرابات الأكل (Eating Disorders)
  {
    id: 'eating_1',
    diseaseId: 'eating_disorder',
    nameEn: 'Fluoxetine',
    nameAr: 'فلوكسيتين',
    dosageEn: '1 capsule daily',
    dosageAr: '1 كبسولة يومياً'
  },
  {
    id: 'eating_2',
    diseaseId: 'eating_disorder',
    nameEn: 'Multivitamin Supplements',
    nameAr: 'مكملات الفيتامينات',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'eating_3',
    diseaseId: 'eating_disorder',
    nameEn: 'Psychotherapy Sessions',
    nameAr: 'جلسات العلاج النفسي',
    dosageEn: 'Weekly sessions recommended',
    dosageAr: 'جلسات أسبوعية موصى بها'
  },
  
  // اضطراب نقص الانتباه (ADHD)
  {
    id: 'adhd_1',
    diseaseId: 'adhd',
    nameEn: 'Ritalin (Methylphenidate)',
    nameAr: 'ريتالين',
    dosageEn: '1 tablet 2-3 times daily',
    dosageAr: '1 قرص 2-3 مرات يومياً'
  },
  {
    id: 'adhd_2',
    diseaseId: 'adhd',
    nameEn: 'Concerta',
    nameAr: 'كونسيرتا',
    dosageEn: '1 tablet once daily in morning',
    dosageAr: '1 قرص مرة واحدة صباحاً'
  },
  {
    id: 'adhd_3',
    diseaseId: 'adhd',
    nameEn: 'Strattera (Atomoxetine)',
    nameAr: 'ستراتيرا',
    dosageEn: '1 capsule daily',
    dosageAr: '1 كبسولة يومياً'
  },
  
  // طيف التوحد (Autism)
  {
    id: 'autism_1',
    diseaseId: 'autism',
    nameEn: 'Risperdal for irritability',
    nameAr: 'ريسبردال للتهيج',
    dosageEn: 'As prescribed by specialist',
    dosageAr: 'حسب وصف الطبيب المختص'
  },
  {
    id: 'autism_2',
    diseaseId: 'autism',
    nameEn: 'Speech Therapy',
    nameAr: 'علاج النطق',
    dosageEn: '2-3 sessions weekly',
    dosageAr: '2-3 جلسات أسبوعياً'
  },
  {
    id: 'autism_3',
    diseaseId: 'autism',
    nameEn: 'Behavioral Therapy (ABA)',
    nameAr: 'العلاج السلوكي',
    dosageEn: 'Daily intensive sessions',
    dosageAr: 'جلسات مكثفة يومية'
  },
  
  // اضطراب الشخصية الحدية (Borderline Personality)
  {
    id: 'personality_1',
    diseaseId: 'personality_disorder',
    nameEn: 'Dialectical Behavior Therapy',
    nameAr: 'العلاج السلوكي الجدلي',
    dosageEn: 'Weekly individual and group sessions',
    dosageAr: 'جلسات فردية وجماعية أسبوعية'
  },
  {
    id: 'personality_2',
    diseaseId: 'personality_disorder',
    nameEn: 'Lamictal (Lamotrigine)',
    nameAr: 'لاميكتال',
    dosageEn: '1 tablet daily, increase gradually',
    dosageAr: '1 قرص يومياً، مع الزيادة التدريجية'
  },
  {
    id: 'personality_3',
    diseaseId: 'personality_disorder',
    nameEn: 'Quetiapine for mood',
    nameAr: 'كويتيابين للمزاج',
    dosageEn: '1 tablet at bedtime',
    dosageAr: '1 قرص قبل النوم'
  },
  
  // تعاطي المخدرات (Substance Abuse)
  {
    id: 'substance_1',
    diseaseId: 'substance_abuse',
    nameEn: 'Naltrexone',
    nameAr: 'نالتريكسون',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'substance_2',
    diseaseId: 'substance_abuse',
    nameEn: 'Addiction Counseling',
    nameAr: 'استشارات الإدمان',
    dosageEn: 'Weekly sessions',
    dosageAr: 'جلسات أسبوعية'
  },
  {
    id: 'substance_3',
    diseaseId: 'substance_abuse',
    nameEn: 'Detox Program',
    nameAr: 'برنامج سحب السموم',
    dosageEn: 'Inpatient 7-28 days',
    dosageAr: 'إقامة داخلية 7-28 يوم'
  },
  
  // الأرق المزمن (Insomnia)
  {
    id: 'insomnia_1',
    diseaseId: 'insomnia',
    nameEn: 'Stilnox (Zolpidem)',
    nameAr: 'ستيلنوكس',
    dosageEn: '1 tablet at bedtime',
    dosageAr: '1 قرص قبل النوم'
  },
  {
    id: 'insomnia_2',
    diseaseId: 'insomnia',
    nameEn: 'Melatonin',
    nameAr: 'ميلاتونين',
    dosageEn: '1-3mg 30 minutes before sleep',
    dosageAr: '1-3 ملجم قبل النوم بـ30 دقيقة'
  },
  {
    id: 'insomnia_3',
    diseaseId: 'insomnia',
    nameEn: 'Trazodone',
    nameAr: 'ترازودون',
    dosageEn: '50mg at bedtime',
    dosageAr: '50 ملجم قبل النوم'
  },
  
  // الرهاب المحدد (Phobia)
  {
    id: 'phobia_1',
    diseaseId: 'phobia',
    nameEn: 'Cognitive Behavioral Therapy',
    nameAr: 'العلاج المعرفي السلوكي',
    dosageEn: 'Weekly sessions',
    dosageAr: 'جلسات أسبوعية'
  },
  {
    id: 'phobia_2',
    diseaseId: 'phobia',
    nameEn: 'Propranolol for symptoms',
    nameAr: 'بروبرانولول للأعراض',
    dosageEn: '10-40mg as needed',
    dosageAr: '10-40 ملجم عند الحاجة'
  },
  {
    id: 'phobia_3',
    diseaseId: 'phobia',
    nameEn: 'Exposure Therapy',
    nameAr: 'العلاج بالتعرض',
    dosageEn: 'Gradual exposure sessions',
    dosageAr: 'جلسات تعرض تدريجي'
  },
  
  // الاضطرابات الانفصامية (Dissociative)
  {
    id: 'dissociative_1',
    diseaseId: 'dissociative',
    nameEn: 'Trauma-focused Therapy',
    nameAr: 'العلاج المركز على الصدمة',
    dosageEn: 'Weekly intensive sessions',
    dosageAr: 'جلسات مكثفة أسبوعية'
  },
  {
    id: 'dissociative_2',
    diseaseId: 'dissociative',
    nameEn: 'Antidepressants',
    nameAr: 'مضادات الاكتئاب',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'dissociative_3',
    diseaseId: 'dissociative',
    nameEn: 'EMDR Therapy',
    nameAr: 'علاج EMDR',
    dosageEn: 'Weekly specialized sessions',
    dosageAr: 'جلسات متخصصة أسبوعية'
  },
  
  // الالتهاب الرئوي (Pneumonia)
  {
    id: 'pneumonia_1',
    diseaseId: 'pneumonia',
    nameEn: 'Augmentin (Amoxicillin/Clavulanate)',
    nameAr: 'أوجمنتين',
    dosageEn: '1 tablet every 12 hours',
    dosageAr: '1 قرص كل 12 ساعة'
  },
  {
    id: 'pneumonia_2',
    diseaseId: 'pneumonia',
    nameEn: 'Azithromycin (Zithromax)',
    nameAr: 'زيثروماكس',
    dosageEn: '500mg once daily for 3 days',
    dosageAr: '500 ملغ مرة يومياً لمدة 3 أيام'
  },
  {
    id: 'pneumonia_3',
    diseaseId: 'pneumonia',
    nameEn: 'Ceftriaxone Injection',
    nameAr: 'سيفترياكسون حقن',
    dosageEn: '1g injection daily',
    dosageAr: 'حقنة 1 جم يومياً'
  },
  
  // أمراض الكلى المزمنة (Kidney Disease)
  {
    id: 'kidney_disease_1',
    diseaseId: 'kidney_disease',
    nameEn: 'Lasix (Furosemide)',
    nameAr: 'لازيكس',
    dosageEn: '40mg once or twice daily',
    dosageAr: '40 ملغ مرة أو مرتين يومياً'
  },
  {
    id: 'kidney_disease_2',
    diseaseId: 'kidney_disease',
    nameEn: 'Erythropoietin',
    nameAr: 'إريثروبويتين',
    dosageEn: 'Weekly injection as prescribed',
    dosageAr: 'حقنة أسبوعية حسب الوصفة'
  },
  {
    id: 'kidney_disease_3',
    diseaseId: 'kidney_disease',
    nameEn: 'Calcium Carbonate',
    nameAr: 'كربونات الكالسيوم',
    dosageEn: '1-2 tablets with meals',
    dosageAr: '1-2 قرص مع الوجبات'
  },
  
  // تليف الكبد (Cirrhosis)
  {
    id: 'cirrhosis_1',
    diseaseId: 'cirrhosis',
    nameEn: 'Spironolactone (Aldactone)',
    nameAr: 'ألداكتون',
    dosageEn: '100mg daily',
    dosageAr: '100 ملغ يومياً'
  },
  {
    id: 'cirrhosis_2',
    diseaseId: 'cirrhosis',
    nameEn: 'Propranolol',
    nameAr: 'بروبرانولول',
    dosageEn: '40mg twice daily',
    dosageAr: '40 ملغ مرتين يومياً'
  },
  {
    id: 'cirrhosis_3',
    diseaseId: 'cirrhosis',
    nameEn: 'Lactulose',
    nameAr: 'لاكتيلوز',
    dosageEn: '30ml three times daily',
    dosageAr: '30 مل 3 مرات يومياً'
  },
  
  // مرض الانسداد الرئوي المزمن (COPD)
  {
    id: 'copd_1',
    diseaseId: 'copd',
    nameEn: 'Ventolin Inhaler (Salbutamol)',
    nameAr: 'فنتولين بخاخ',
    dosageEn: '2 puffs as needed',
    dosageAr: 'بختان عند الحاجة'
  },
  {
    id: 'copd_2',
    diseaseId: 'copd',
    nameEn: 'Spiriva (Tiotropium)',
    nameAr: 'سبيريفا',
    dosageEn: '1 capsule inhaled daily',
    dosageAr: 'كبسولة واحدة استنشاق يومياً'
  },
  {
    id: 'copd_3',
    diseaseId: 'copd',
    nameEn: 'Prednisone',
    nameAr: 'بريدنيزون',
    dosageEn: '40mg daily for 5 days',
    dosageAr: '40 ملغ يومياً لمدة 5 أيام'
  },
  
  // مرض السيلياك (Celiac Disease)
  {
    id: 'celiac_disease_1',
    diseaseId: 'celiac_disease',
    nameEn: 'Vitamin D3 Supplements',
    nameAr: 'مكملات فيتامين د3',
    dosageEn: '50,000 IU weekly',
    dosageAr: '50,000 وحدة أسبوعياً'
  },
  {
    id: 'celiac_disease_2',
    diseaseId: 'celiac_disease',
    nameEn: 'Iron Supplements (Ferrous Sulfate)',
    nameAr: 'مكملات الحديد',
    dosageEn: '325mg daily',
    dosageAr: '325 ملغ يومياً'
  },
  {
    id: 'celiac_disease_3',
    diseaseId: 'celiac_disease',
    nameEn: 'Multivitamin Supplements',
    nameAr: 'مكملات متعددة الفيتامينات',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  
  // انتباذ بطانة الرحم (Endometriosis)
  {
    id: 'endometriosis_1',
    diseaseId: 'endometriosis',
    nameEn: 'Ibuprofen',
    nameAr: 'إيبوبروفين',
    dosageEn: '400mg every 6-8 hours',
    dosageAr: '400 ملغ كل 6-8 ساعات'
  },
  {
    id: 'endometriosis_2',
    diseaseId: 'endometriosis',
    nameEn: 'Oral Contraceptives',
    nameAr: 'حبوب منع الحمل',
    dosageEn: '1 tablet daily',
    dosageAr: '1 قرص يومياً'
  },
  {
    id: 'endometriosis_3',
    diseaseId: 'endometriosis',
    nameEn: 'Danazol',
    nameAr: 'دانازول',
    dosageEn: '200-400mg twice daily',
    dosageAr: '200-400 ملغ مرتين يومياً'
  },
  
  // انقطاع النفس النومي (Sleep Apnea)
  {
    id: 'sleep_apnea_1',
    diseaseId: 'sleep_apnea',
    nameEn: 'CPAP Machine Therapy',
    nameAr: 'علاج جهاز CPAP',
    dosageEn: 'Use nightly during sleep',
    dosageAr: 'استخدام ليلي أثناء النوم'
  },
  {
    id: 'sleep_apnea_2',
    diseaseId: 'sleep_apnea',
    nameEn: 'Weight Loss Medication',
    nameAr: 'أدوية إنقاص الوزن',
    dosageEn: 'As prescribed by doctor',
    dosageAr: 'حسب وصف الطبيب'
  },
  {
    id: 'sleep_apnea_3',
    diseaseId: 'sleep_apnea',
    nameEn: 'Modafinil (for daytime sleepiness)',
    nameAr: 'مودافينيل (للنعاس النهاري)',
    dosageEn: '200mg once daily',
    dosageAr: '200 ملغ مرة يومياً'
  },
  
  // الذئبة الحمراء (Lupus)
  {
    id: 'lupus_1',
    diseaseId: 'lupus',
    nameEn: 'Hydroxychloroquine (Plaquenil)',
    nameAr: 'بلاكونيل',
    dosageEn: '200mg twice daily',
    dosageAr: '200 ملغ مرتين يومياً'
  },
  {
    id: 'lupus_2',
    diseaseId: 'lupus',
    nameEn: 'Prednisone',
    nameAr: 'بريدنيزون',
    dosageEn: '5-60mg daily as prescribed',
    dosageAr: '5-60 ملغ يومياً حسب الوصفة'
  },
  {
    id: 'lupus_3',
    diseaseId: 'lupus',
    nameEn: 'Methotrexate',
    nameAr: 'ميثوتريكسات',
    dosageEn: '7.5-25mg weekly',
    dosageAr: '7.5-25 ملغ أسبوعياً'
  },
  
  // مرض باركنسون (Parkinson's)
  {
    id: 'parkinsons_1',
    diseaseId: 'parkinsons',
    nameEn: 'Sinemet (Carbidopa-Levodopa)',
    nameAr: 'سينيميت',
    dosageEn: '1 tablet 3 times daily',
    dosageAr: '1 قرص 3 مرات يومياً'
  },
  {
    id: 'parkinsons_2',
    diseaseId: 'parkinsons',
    nameEn: 'Pramipexole',
    nameAr: 'براميبيكسول',
    dosageEn: '0.5-1.5mg three times daily',
    dosageAr: '0.5-1.5 ملغ 3 مرات يومياً'
  },
  {
    id: 'parkinsons_3',
    diseaseId: 'parkinsons',
    nameEn: 'Rasagiline',
    nameAr: 'راساجيلين',
    dosageEn: '1mg once daily',
    dosageAr: '1 ملغ مرة يومياً'
  },
  
  // التصلب المتعدد (Multiple Sclerosis)
  {
    id: 'multiple_sclerosis_1',
    diseaseId: 'multiple_sclerosis',
    nameEn: 'Interferon Beta',
    nameAr: 'إنترفيرون بيتا',
    dosageEn: 'Injection 3 times weekly',
    dosageAr: 'حقنة 3 مرات أسبوعياً'
  },
  {
    id: 'multiple_sclerosis_2',
    diseaseId: 'multiple_sclerosis',
    nameEn: 'Glatiramer Acetate',
    nameAr: 'جلاتيرامير أسيتات',
    dosageEn: '20mg daily injection',
    dosageAr: 'حقنة 20 ملغ يومياً'
  },
  {
    id: 'multiple_sclerosis_3',
    diseaseId: 'multiple_sclerosis',
    nameEn: 'Methylprednisolone',
    nameAr: 'ميثيل بريدنيزولون',
    dosageEn: 'High-dose IV for flare-ups',
    dosageAr: 'جرعة عالية وريدية لنوبات التفاقم'
  },
  
  // الفيبروميالجيا (Fibromyalgia)
  {
    id: 'fibromyalgia_1',
    diseaseId: 'fibromyalgia',
    nameEn: 'Pregabalin (Lyrica)',
    nameAr: 'ليريكا',
    dosageEn: '75mg twice daily',
    dosageAr: '75 ملغ مرتين يومياً'
  },
  {
    id: 'fibromyalgia_2',
    diseaseId: 'fibromyalgia',
    nameEn: 'Duloxetine (Cymbalta)',
    nameAr: 'سيمبالتا',
    dosageEn: '60mg once daily',
    dosageAr: '60 ملغ مرة يومياً'
  },
  {
    id: 'fibromyalgia_3',
    diseaseId: 'fibromyalgia',
    nameEn: 'Amitriptyline',
    nameAr: 'أميتريبتيلين',
    dosageEn: '10-25mg at bedtime',
    dosageAr: '10-25 ملغ عند النوم'
  },
  
  // مرض كرون (Crohn's Disease)
  {
    id: 'crohns_disease_1',
    diseaseId: 'crohns_disease',
    nameEn: 'Mesalamine (Pentasa)',
    nameAr: 'بنتاسا',
    dosageEn: '1g four times daily',
    dosageAr: '1 جم 4 مرات يومياً'
  },
  {
    id: 'crohns_disease_2',
    diseaseId: 'crohns_disease',
    nameEn: 'Azathioprine',
    nameAr: 'أزاثيوبرين',
    dosageEn: '2-2.5mg/kg daily',
    dosageAr: '2-2.5 ملغ/كجم يومياً'
  },
  {
    id: 'crohns_disease_3',
    diseaseId: 'crohns_disease',
    nameEn: 'Budesonide',
    nameAr: 'بوديزونيد',
    dosageEn: '9mg once daily',
    dosageAr: '9 ملغ مرة يومياً'
  },
  
  // اضطراب القلق العام (Generalized Anxiety)
  {
    id: 'generalized_anxiety_1',
    diseaseId: 'generalized_anxiety',
    nameEn: 'Xanax (Alprazolam)',
    nameAr: 'زاناكس',
    dosageEn: '0.25-0.5mg three times daily',
    dosageAr: '0.25-0.5 ملغ 3 مرات يومياً'
  },
  {
    id: 'generalized_anxiety_2',
    diseaseId: 'generalized_anxiety',
    nameEn: 'Buspirone',
    nameAr: 'بوسبيرون',
    dosageEn: '15mg twice daily',
    dosageAr: '15 ملغ مرتين يومياً'
  },
  {
    id: 'generalized_anxiety_3',
    diseaseId: 'generalized_anxiety',
    nameEn: 'Lexapro (Escitalopram)',
    nameAr: 'ليكسابرو',
    dosageEn: '10mg once daily',
    dosageAr: '10 ملغ مرة يومياً'
  },
  
  // الاكتئاب الموسمي (Seasonal Depression)
  {
    id: 'seasonal_depression_1',
    diseaseId: 'seasonal_depression',
    nameEn: 'Light Therapy Lamp',
    nameAr: 'مصباح العلاج بالضوء',
    dosageEn: '30 minutes daily in morning',
    dosageAr: '30 دقيقة يومياً في الصباح'
  },
  {
    id: 'seasonal_depression_2',
    diseaseId: 'seasonal_depression',
    nameEn: 'Vitamin D3 High Dose',
    nameAr: 'فيتامين د3 جرعة عالية',
    dosageEn: '5000 IU daily',
    dosageAr: '5000 وحدة يومياً'
  },
  {
    id: 'seasonal_depression_3',
    diseaseId: 'seasonal_depression',
    nameEn: 'Wellbutrin (Bupropion)',
    nameAr: 'ويلبوترين',
    dosageEn: '150mg once daily',
    dosageAr: '150 ملغ مرة يومياً'
  },
  
  // اضطراب الاكتناز (Hoarding Disorder)
  {
    id: 'hoarding_disorder_1',
    diseaseId: 'hoarding_disorder',
    nameEn: 'Cognitive Behavioral Therapy',
    nameAr: 'العلاج السلوكي المعرفي',
    dosageEn: 'Weekly therapy sessions',
    dosageAr: 'جلسات علاجية أسبوعية'
  },
  {
    id: 'hoarding_disorder_2',
    diseaseId: 'hoarding_disorder',
    nameEn: 'Paroxetine (Paxil)',
    nameAr: 'باكسيل',
    dosageEn: '20-60mg daily',
    dosageAr: '20-60 ملغ يومياً'
  },
  {
    id: 'hoarding_disorder_3',
    diseaseId: 'hoarding_disorder',
    nameEn: 'Venlafaxine (Effexor)',
    nameAr: 'إيفكسور',
    dosageEn: '75-225mg daily',
    dosageAr: '75-225 ملغ يومياً'
  },
  
  // اضطراب تشوه الجسم (Body Dysmorphia)
  {
    id: 'body_dysmorphia_1',
    diseaseId: 'body_dysmorphia',
    nameEn: 'Fluoxetine (Prozac)',
    nameAr: 'بروزاك',
    dosageEn: '40-80mg daily',
    dosageAr: '40-80 ملغ يومياً'
  },
  {
    id: 'body_dysmorphia_2',
    diseaseId: 'body_dysmorphia',
    nameEn: 'CBT for Body Image',
    nameAr: 'العلاج المعرفي السلوكي لصورة الجسم',
    dosageEn: 'Weekly specialized sessions',
    dosageAr: 'جلسات متخصصة أسبوعية'
  },
  {
    id: 'body_dysmorphia_3',
    diseaseId: 'body_dysmorphia',
    nameEn: 'Clomipramine',
    nameAr: 'كلوميبرامين',
    dosageEn: '150-250mg daily',
    dosageAr: '150-250 ملغ يومياً'
  },
  
  // اضطراب الانفجار المتقطع (Intermittent Explosive)
  {
    id: 'intermittent_explosive_1',
    diseaseId: 'intermittent_explosive',
    nameEn: 'Anger Management Therapy',
    nameAr: 'علاج إدارة الغضب',
    dosageEn: 'Weekly group or individual sessions',
    dosageAr: 'جلسات جماعية أو فردية أسبوعية'
  },
  {
    id: 'intermittent_explosive_2',
    diseaseId: 'intermittent_explosive',
    nameEn: 'Fluoxetine',
    nameAr: 'فلوكسيتين',
    dosageEn: '20-60mg daily',
    dosageAr: '20-60 ملغ يومياً'
  },
  {
    id: 'intermittent_explosive_3',
    diseaseId: 'intermittent_explosive',
    nameEn: 'Carbamazepine (Tegretol)',
    nameAr: 'تجريتول',
    dosageEn: '200-400mg twice daily',
    dosageAr: '200-400 ملغ مرتين يومياً'
  },
  
  // اضطراب نتف الشعر (Trichotillomania)
  {
    id: 'trichotillomania_1',
    diseaseId: 'trichotillomania',
    nameEn: 'Habit Reversal Training',
    nameAr: 'تدريب عكس العادة',
    dosageEn: 'Weekly behavioral therapy',
    dosageAr: 'علاج سلوكي أسبوعي'
  },
  {
    id: 'trichotillomania_2',
    diseaseId: 'trichotillomania',
    nameEn: 'N-Acetylcysteine (NAC)',
    nameAr: 'إن-أسيتيل سيستين',
    dosageEn: '1200-2400mg daily',
    dosageAr: '1200-2400 ملغ يومياً'
  },
  {
    id: 'trichotillomania_3',
    diseaseId: 'trichotillomania',
    nameEn: 'Clomipramine',
    nameAr: 'كلوميبرامين',
    dosageEn: '50-250mg daily',
    dosageAr: '50-250 ملغ يومياً'
  },
  
  // اضطراب تقشير الجلد (Dermatillomania)
  {
    id: 'dermatillomania_1',
    diseaseId: 'dermatillomania',
    nameEn: 'Cognitive Behavioral Therapy',
    nameAr: 'العلاج السلوكي المعرفي',
    dosageEn: 'Weekly therapy for habit control',
    dosageAr: 'علاج أسبوعي للتحكم في العادة'
  },
  {
    id: 'dermatillomania_2',
    diseaseId: 'dermatillomania',
    nameEn: 'Fluoxetine (Prozac)',
    nameAr: 'بروزاك',
    dosageEn: '40-80mg daily',
    dosageAr: '40-80 ملغ يومياً'
  },
  {
    id: 'dermatillomania_3',
    diseaseId: 'dermatillomania',
    nameEn: 'N-Acetylcysteine (NAC)',
    nameAr: 'إن-أسيتيل سيستين',
    dosageEn: '1200-2400mg daily',
    dosageAr: '1200-2400 ملغ يومياً'
  },
  
  // New Physical Disease Treatments
  
  // الذئبة الحمراء (Lupus)
  {
    id: 'lupus_1',
    diseaseId: 'lupus',
    nameEn: 'Plaquenil (Hydroxychloroquine)',
    nameAr: 'بلاكونيل',
    dosageEn: '200-400mg daily',
    dosageAr: '200-400 ملغ يومياً'
  },
  {
    id: 'lupus_2',
    diseaseId: 'lupus',
    nameEn: 'Prednisone',
    nameAr: 'بريدنيزون',
    dosageEn: '5-60mg daily as prescribed',
    dosageAr: '5-60 ملغ يومياً حسب الوصفة'
  },
  {
    id: 'lupus_3',
    diseaseId: 'lupus',
    nameEn: 'Imuran (Azathioprine)',
    nameAr: 'إيموران',
    dosageEn: '50-150mg daily',
    dosageAr: '50-150 ملغ يومياً'
  },
  
  // الفيبروميالجيا (Fibromyalgia)
  {
    id: 'fibromyalgia_1',
    diseaseId: 'fibromyalgia',
    nameEn: 'Lyrica (Pregabalin)',
    nameAr: 'ليريكا',
    dosageEn: '75-150mg twice daily',
    dosageAr: '75-150 ملغ مرتين يومياً'
  },
  {
    id: 'fibromyalgia_2',
    diseaseId: 'fibromyalgia',
    nameEn: 'Cymbalta (Duloxetine)',
    nameAr: 'سيمبالتا',
    dosageEn: '30-60mg daily',
    dosageAr: '30-60 ملغ يومياً'
  },
  {
    id: 'fibromyalgia_3',
    diseaseId: 'fibromyalgia',
    nameEn: 'Flexeril (Cyclobenzaprine)',
    nameAr: 'فليكسيريل',
    dosageEn: '5-10mg at bedtime',
    dosageAr: '5-10 ملغ قبل النوم'
  },
  
  // مرض كرون (Crohn's Disease)
  {
    id: 'crohns_1',
    diseaseId: 'crohns_disease',
    nameEn: 'Pentasa (Mesalamine)',
    nameAr: 'بينتازا',
    dosageEn: '1g four times daily',
    dosageAr: '1 جم أربع مرات يومياً'
  },
  {
    id: 'crohns_2',
    diseaseId: 'crohns_disease',
    nameEn: 'Imuran (Azathioprine)',
    nameAr: 'إيموران',
    dosageEn: '2-2.5mg/kg daily',
    dosageAr: '2-2.5 ملغ/كغ يومياً'
  },
  {
    id: 'crohns_3',
    diseaseId: 'crohns_disease',
    nameEn: 'Budesonide',
    nameAr: 'بوديزونيد',
    dosageEn: '9mg daily',
    dosageAr: '9 ملغ يومياً'
  },
  
  // التصلب المتعدد (Multiple Sclerosis)
  {
    id: 'ms_1',
    diseaseId: 'multiple_sclerosis',
    nameEn: 'Avonex (Interferon beta-1a)',
    nameAr: 'أفونيكس',
    dosageEn: 'Once weekly injection',
    dosageAr: 'حقنة مرة أسبوعياً'
  },
  {
    id: 'ms_2',
    diseaseId: 'multiple_sclerosis',
    nameEn: 'Tecfidera (Dimethyl fumarate)',
    nameAr: 'تيكفيديرا',
    dosageEn: '240mg twice daily',
    dosageAr: '240 ملغ مرتين يومياً'
  },
  {
    id: 'ms_3',
    diseaseId: 'multiple_sclerosis',
    nameEn: 'Methylprednisolone',
    nameAr: 'ميثيل بريدنيزولون',
    dosageEn: 'IV infusion for relapses',
    dosageAr: 'حقن وريدية للانتكاسات'
  },
  
  // مرض باركنسون (Parkinson's)
  {
    id: 'parkinsons_1',
    diseaseId: 'parkinsons',
    nameEn: 'Sinemet (Levodopa/Carbidopa)',
    nameAr: 'سينيميت',
    dosageEn: '25/100mg three times daily',
    dosageAr: '25/100 ملغ ثلاث مرات يومياً'
  },
  {
    id: 'parkinsons_2',
    diseaseId: 'parkinsons',
    nameEn: 'Mirapex (Pramipexole)',
    nameAr: 'ميرابيكس',
    dosageEn: '0.125-0.5mg three times daily',
    dosageAr: '0.125-0.5 ملغ ثلاث مرات يومياً'
  },
  {
    id: 'parkinsons_3',
    diseaseId: 'parkinsons',
    nameEn: 'Artane (Trihexyphenidyl)',
    nameAr: 'أرتين',
    dosageEn: '2-5mg twice daily',
    dosageAr: '2-5 ملغ مرتين يومياً'
  },
  
  // الصرع (Epilepsy)
  {
    id: 'epilepsy_1',
    diseaseId: 'epilepsy',
    nameEn: 'Tegretol (Carbamazepine)',
    nameAr: 'تجريتول',
    dosageEn: '200-400mg twice daily',
    dosageAr: '200-400 ملغ مرتين يومياً'
  },
  {
    id: 'epilepsy_2',
    diseaseId: 'epilepsy',
    nameEn: 'Depakine (Valproic Acid)',
    nameAr: 'ديباكين',
    dosageEn: '250-500mg twice daily',
    dosageAr: '250-500 ملغ مرتين يومياً'
  },
  {
    id: 'epilepsy_3',
    diseaseId: 'epilepsy',
    nameEn: 'Keppra (Levetiracetam)',
    nameAr: 'كيبرا',
    dosageEn: '500-1500mg twice daily',
    dosageAr: '500-1500 ملغ مرتين يومياً'
  },
  
  // التهاب البنكرياس (Pancreatitis)
  {
    id: 'pancreatitis_1',
    diseaseId: 'pancreatitis',
    nameEn: 'Creon (Pancrelipase)',
    nameAr: 'كريون',
    dosageEn: '1-2 capsules with meals',
    dosageAr: '1-2 كبسولة مع الوجبات'
  },
  {
    id: 'pancreatitis_2',
    diseaseId: 'pancreatitis',
    nameEn: 'Omeprazole',
    nameAr: 'أوميبرازول',
    dosageEn: '20-40mg daily',
    dosageAr: '20-40 ملغ يومياً'
  },
  {
    id: 'pancreatitis_3',
    diseaseId: 'pancreatitis',
    nameEn: 'Tramadol',
    nameAr: 'ترامادول',
    dosageEn: '50-100mg every 6 hours as needed',
    dosageAr: '50-100 ملغ كل 6 ساعات عند الحاجة'
  },
  
  // التهاب الشغاف (Endocarditis)
  {
    id: 'endocarditis_1',
    diseaseId: 'endocarditis',
    nameEn: 'Penicillin G',
    nameAr: 'بنسلين جي',
    dosageEn: 'IV every 4 hours for 4-6 weeks',
    dosageAr: 'وريدياً كل 4 ساعات لمدة 4-6 أسابيع'
  },
  {
    id: 'endocarditis_2',
    diseaseId: 'endocarditis',
    nameEn: 'Gentamicin',
    nameAr: 'جنتاميسين',
    dosageEn: '3mg/kg daily IV',
    dosageAr: '3 ملغ/كغ يومياً وريدياً'
  },
  {
    id: 'endocarditis_3',
    diseaseId: 'endocarditis',
    nameEn: 'Vancomycin',
    nameAr: 'فانكوميسين',
    dosageEn: '15-20mg/kg every 12 hours IV',
    dosageAr: '15-20 ملغ/كغ كل 12 ساعة وريدياً'
  },
  
  // التهاب الرتج (Diverticulitis)
  {
    id: 'diverticulitis_1',
    diseaseId: 'diverticulitis',
    nameEn: 'Metronidazole (Flagyl)',
    nameAr: 'فلاجيل',
    dosageEn: '500mg three times daily',
    dosageAr: '500 ملغ ثلاث مرات يومياً'
  },
  {
    id: 'diverticulitis_2',
    diseaseId: 'diverticulitis',
    nameEn: 'Ciprofloxacin',
    nameAr: 'سيبروفلوكساسين',
    dosageEn: '500mg twice daily',
    dosageAr: '500 ملغ مرتين يومياً'
  },
  {
    id: 'diverticulitis_3',
    diseaseId: 'diverticulitis',
    nameEn: 'Fiber Supplement (Psyllium)',
    nameAr: 'مكمل الألياف',
    dosageEn: '1 tablespoon with water daily',
    dosageAr: 'ملعقة كبيرة مع الماء يومياً'
  },
  
  // التهاب السحايا (Meningitis)
  {
    id: 'meningitis_1',
    diseaseId: 'meningitis',
    nameEn: 'Ceftriaxone (Rocephin)',
    nameAr: 'روسيفين',
    dosageEn: '2g IV every 12 hours',
    dosageAr: '2 جم وريدياً كل 12 ساعة'
  },
  {
    id: 'meningitis_2',
    diseaseId: 'meningitis',
    nameEn: 'Dexamethasone',
    nameAr: 'ديكساميثازون',
    dosageEn: '0.15mg/kg every 6 hours',
    dosageAr: '0.15 ملغ/كغ كل 6 ساعات'
  },
  {
    id: 'meningitis_3',
    diseaseId: 'meningitis',
    nameEn: 'Ampicillin',
    nameAr: 'أمبيسيلين',
    dosageEn: '2g IV every 4 hours',
    dosageAr: '2 جم وريدياً كل 4 ساعات'
  },
  
  // New Mental Health Disease Treatments
  
  // رهاب الخلاء (Agoraphobia)
  {
    id: 'agoraphobia_1',
    diseaseId: 'agoraphobia',
    nameEn: 'Exposure Therapy',
    nameAr: 'العلاج بالتعرض',
    dosageEn: 'Weekly sessions with gradual exposure',
    dosageAr: 'جلسات أسبوعية مع تعرض تدريجي'
  },
  {
    id: 'agoraphobia_2',
    diseaseId: 'agoraphobia',
    nameEn: 'Sertraline (Zoloft)',
    nameAr: 'زولوفت',
    dosageEn: '50-200mg daily',
    dosageAr: '50-200 ملغ يومياً'
  },
  {
    id: 'agoraphobia_3',
    diseaseId: 'agoraphobia',
    nameEn: 'Alprazolam (Xanax)',
    nameAr: 'زاناكس',
    dosageEn: '0.25-0.5mg as needed',
    dosageAr: '0.25-0.5 ملغ عند الحاجة'
  },
  
  // اضطراب التكيف (Adjustment Disorder)
  {
    id: 'adjustment_1',
    diseaseId: 'adjustment_disorder',
    nameEn: 'Supportive Psychotherapy',
    nameAr: 'العلاج النفسي الداعم',
    dosageEn: 'Weekly therapy sessions',
    dosageAr: 'جلسات علاجية أسبوعية'
  },
  {
    id: 'adjustment_2',
    diseaseId: 'adjustment_disorder',
    nameEn: 'Escitalopram (Cipralex)',
    nameAr: 'سيبرالكس',
    dosageEn: '10-20mg daily',
    dosageAr: '10-20 ملغ يومياً'
  },
  {
    id: 'adjustment_3',
    diseaseId: 'adjustment_disorder',
    nameEn: 'Buspirone (Buspar)',
    nameAr: 'بوسبار',
    dosageEn: '5-10mg twice daily',
    dosageAr: '5-10 ملغ مرتين يومياً'
  },
  
  // اضطراب الأعراض الجسدية (Somatic Symptom)
  {
    id: 'somatoform_1',
    diseaseId: 'somatoform',
    nameEn: 'CBT for Health Anxiety',
    nameAr: 'العلاج المعرفي السلوكي لقلق الصحة',
    dosageEn: 'Weekly specialized sessions',
    dosageAr: 'جلسات متخصصة أسبوعية'
  },
  {
    id: 'somatoform_2',
    diseaseId: 'somatoform',
    nameEn: 'Duloxetine (Cymbalta)',
    nameAr: 'سيمبالتا',
    dosageEn: '30-60mg daily',
    dosageAr: '30-60 ملغ يومياً'
  },
  {
    id: 'somatoform_3',
    diseaseId: 'somatoform',
    nameEn: 'Mindfulness Therapy',
    nameAr: 'العلاج باليقظة الذهنية',
    dosageEn: 'Weekly group or individual sessions',
    dosageAr: 'جلسات جماعية أو فردية أسبوعية'
  },
  
  // اضطراب الشخصية التجنبية (Avoidant Personality)
  {
    id: 'avoidant_1',
    diseaseId: 'avoidant_personality',
    nameEn: 'Schema Therapy',
    nameAr: 'العلاج بالمخطط',
    dosageEn: 'Long-term weekly therapy',
    dosageAr: 'علاج طويل الأمد أسبوعي'
  },
  {
    id: 'avoidant_2',
    diseaseId: 'avoidant_personality',
    nameEn: 'Paroxetine (Paxil)',
    nameAr: 'باكسيل',
    dosageEn: '20-40mg daily',
    dosageAr: '20-40 ملغ يومياً'
  },
  {
    id: 'avoidant_3',
    diseaseId: 'avoidant_personality',
    nameEn: 'Social Skills Training',
    nameAr: 'تدريب المهارات الاجتماعية',
    dosageEn: 'Weekly group sessions',
    dosageAr: 'جلسات جماعية أسبوعية'
  },
  
  // اضطراب الشخصية النرجسية (Narcissistic Personality)
  {
    id: 'narcissistic_1',
    diseaseId: 'narcissistic_personality',
    nameEn: 'Psychodynamic Therapy',
    nameAr: 'العلاج النفسي الديناميكي',
    dosageEn: 'Long-term individual therapy',
    dosageAr: 'علاج فردي طويل الأمد'
  },
  {
    id: 'narcissistic_2',
    diseaseId: 'narcissistic_personality',
    nameEn: 'Mentalization-Based Therapy',
    nameAr: 'العلاج القائم على العقلنة',
    dosageEn: 'Weekly therapy focusing on empathy',
    dosageAr: 'علاج أسبوعي يركز على التعاطف'
  },
  {
    id: 'narcissistic_3',
    diseaseId: 'narcissistic_personality',
    nameEn: 'Lamictal (Lamotrigine)',
    nameAr: 'لاميكتال',
    dosageEn: '100-200mg daily for mood stability',
    dosageAr: '100-200 ملغ يومياً لاستقرار المزاج'
  },
  
  // اضطراب الشخصية الاعتمادية (Dependent Personality)
  {
    id: 'dependent_1',
    diseaseId: 'dependent_personality',
    nameEn: 'Assertiveness Training',
    nameAr: 'تدريب الحزم',
    dosageEn: 'Weekly skills-based sessions',
    dosageAr: 'جلسات مهارية أسبوعية'
  },
  {
    id: 'dependent_2',
    diseaseId: 'dependent_personality',
    nameEn: 'Individual Psychotherapy',
    nameAr: 'العلاج النفسي الفردي',
    dosageEn: 'Weekly therapy for independence',
    dosageAr: 'علاج أسبوعي للاستقلالية'
  },
  {
    id: 'dependent_3',
    diseaseId: 'dependent_personality',
    nameEn: 'Fluoxetine (Prozac)',
    nameAr: 'بروزاك',
    dosageEn: '20-40mg daily',
    dosageAr: '20-40 ملغ يومياً'
  },
  
  // اضطراب الشخصية المرتابة (Paranoid Personality)
  {
    id: 'paranoid_1',
    diseaseId: 'paranoid_personality',
    nameEn: 'Trust-Building Therapy',
    nameAr: 'علاج بناء الثقة',
    dosageEn: 'Long-term individual therapy',
    dosageAr: 'علاج فردي طويل الأمد'
  },
  {
    id: 'paranoid_2',
    diseaseId: 'paranoid_personality',
    nameEn: 'Risperidone (Risperdal)',
    nameAr: 'ريسبيردال',
    dosageEn: '0.5-2mg daily for severe symptoms',
    dosageAr: '0.5-2 ملغ يومياً للأعراض الشديدة'
  },
  {
    id: 'paranoid_3',
    diseaseId: 'paranoid_personality',
    nameEn: 'Cognitive Restructuring Therapy',
    nameAr: 'علاج إعادة الهيكلة المعرفية',
    dosageEn: 'Weekly sessions to challenge beliefs',
    dosageAr: 'جلسات أسبوعية لتحدي المعتقدات'
  },

  // علاجات الأمراض الجسدية الجديدة
  // فشل القلب
  {
    id: 'heart_failure_1',
    diseaseId: 'heart_failure',
    nameEn: 'Lasix (Furosemide)',
    nameAr: 'لازكس',
    dosageEn: '40-80mg daily',
    dosageAr: '40-80 ملغ يومياً'
  },
  {
    id: 'heart_failure_2',
    diseaseId: 'heart_failure',
    nameEn: 'Enalapril',
    nameAr: 'إنالابريل',
    dosageEn: '5-20mg twice daily',
    dosageAr: '5-20 ملغ مرتين يومياً'
  },
  {
    id: 'heart_failure_3',
    diseaseId: 'heart_failure',
    nameEn: 'Carvedilol',
    nameAr: 'كارفيديلول',
    dosageEn: '3.125-25mg twice daily',
    dosageAr: '3.125-25 ملغ مرتين يومياً'
  },

  // تضخم البروستاتا
  {
    id: 'prostate_1',
    diseaseId: 'prostate_enlargement',
    nameEn: 'Tamsulosin (Flomax)',
    nameAr: 'تامسولوسين',
    dosageEn: '0.4mg once daily',
    dosageAr: '0.4 ملغ مرة يومياً'
  },
  {
    id: 'prostate_2',
    diseaseId: 'prostate_enlargement',
    nameEn: 'Finasteride (Proscar)',
    nameAr: 'فيناسترايد',
    dosageEn: '5mg once daily',
    dosageAr: '5 ملغ مرة يومياً'
  },
  {
    id: 'prostate_3',
    diseaseId: 'prostate_enlargement',
    nameEn: 'Alfuzosin',
    nameAr: 'الفوزوسين',
    dosageEn: '10mg once daily',
    dosageAr: '10 ملغ مرة يومياً'
  },

  // التهاب البنكرياس
  {
    id: 'pancreatitis_1',
    diseaseId: 'pancreatitis',
    nameEn: 'Pain Management (Hospital)',
    nameAr: 'إدارة الألم (مستشفى)',
    dosageEn: 'IV fluids and pain control',
    dosageAr: 'سوائل وريدية والتحكم بالألم'
  },
  {
    id: 'pancreatitis_2',
    diseaseId: 'pancreatitis',
    nameEn: 'Creon (Pancreatic Enzymes)',
    nameAr: 'كريون',
    dosageEn: '1-3 capsules with meals',
    dosageAr: '1-3 كبسولات مع الوجبات'
  },
  {
    id: 'pancreatitis_3',
    diseaseId: 'pancreatitis',
    nameEn: 'Omeprazole',
    nameAr: 'أوميبرازول',
    dosageEn: '20-40mg daily',
    dosageAr: '20-40 ملغ يومياً'
  },

  // التهاب الردب
  {
    id: 'diverticulitis_1',
    diseaseId: 'diverticulitis',
    nameEn: 'Metronidazole + Ciprofloxacin',
    nameAr: 'مترونيدازول + سيبروفلوكساسين',
    dosageEn: 'Combined antibiotic course',
    dosageAr: 'علاج مضاد حيوي مشترك'
  },
  {
    id: 'diverticulitis_2',
    diseaseId: 'diverticulitis',
    nameEn: 'Buscopan',
    nameAr: 'بوسكوبان',
    dosageEn: '10mg 3 times daily',
    dosageAr: '10 ملغ 3 مرات يومياً'
  },
  {
    id: 'diverticulitis_3',
    diseaseId: 'diverticulitis',
    nameEn: 'High Fiber Diet',
    nameAr: 'نظام غذائي عالي الألياف',
    dosageEn: '25-35g fiber daily',
    dosageAr: '25-35 غرام ألياف يومياً'
  },

  // المياه الزرقاء
  {
    id: 'glaucoma_1',
    diseaseId: 'glaucoma',
    nameEn: 'Timolol Eye Drops',
    nameAr: 'قطرة تيمولول',
    dosageEn: '1 drop twice daily',
    dosageAr: 'قطرة مرتين يومياً'
  },
  {
    id: 'glaucoma_2',
    diseaseId: 'glaucoma',
    nameEn: 'Latanoprost (Xalatan)',
    nameAr: 'لاتانوبروست',
    dosageEn: '1 drop at bedtime',
    dosageAr: 'قطرة قبل النوم'
  },
  {
    id: 'glaucoma_3',
    diseaseId: 'glaucoma',
    nameEn: 'Dorzolamide',
    nameAr: 'دورزولاميد',
    dosageEn: '1 drop 3 times daily',
    dosageAr: 'قطرة 3 مرات يومياً'
  },

  // المياه البيضاء
  {
    id: 'cataracts_1',
    diseaseId: 'cataracts',
    nameEn: 'Cataract Surgery',
    nameAr: 'جراحة المياه البيضاء',
    dosageEn: 'Outpatient surgical procedure',
    dosageAr: 'إجراء جراحي'
  },
  {
    id: 'cataracts_2',
    diseaseId: 'cataracts',
    nameEn: 'Anti-inflammatory Eye Drops',
    nameAr: 'قطرة مضادة للالتهاب',
    dosageEn: 'Post-surgery care',
    dosageAr: 'للعناية بعد الجراحة'
  },
  {
    id: 'cataracts_3',
    diseaseId: 'cataracts',
    nameEn: 'Antibiotic Eye Drops',
    nameAr: 'قطرة مضاد حيوي',
    dosageEn: 'Post-surgery infection prevention',
    dosageAr: 'للوقاية من العدوى بعد الجراحة'
  },

  // متلازمة النفق الرسغي
  {
    id: 'carpal_1',
    diseaseId: 'carpal_tunnel',
    nameEn: 'Wrist Splint',
    nameAr: 'جبيرة الرسغ',
    dosageEn: 'Wear at night',
    dosageAr: 'ارتداء ليلاً'
  },
  {
    id: 'carpal_2',
    diseaseId: 'carpal_tunnel',
    nameEn: 'Ibuprofen',
    nameAr: 'إيبوبروفين',
    dosageEn: '400mg 3 times daily',
    dosageAr: '400 ملغ 3 مرات يومياً'
  },
  {
    id: 'carpal_3',
    diseaseId: 'carpal_tunnel',
    nameEn: 'Corticosteroid Injection',
    nameAr: 'حقن الكورتيزون',
    dosageEn: 'Single injection',
    dosageAr: 'حقنة واحدة'
  },

  // الفيبروميالجيا
  {
    id: 'fibromyalgia_1',
    diseaseId: 'fibromyalgia',
    nameEn: 'Lyrica (Pregabalin)',
    nameAr: 'ليريكا',
    dosageEn: '150-300mg daily',
    dosageAr: '150-300 ملغ يومياً'
  },
  {
    id: 'fibromyalgia_2',
    diseaseId: 'fibromyalgia',
    nameEn: 'Cymbalta (Duloxetine)',
    nameAr: 'سيمبالتا',
    dosageEn: '60mg daily',
    dosageAr: '60 ملغ يومياً'
  },
  {
    id: 'fibromyalgia_3',
    diseaseId: 'fibromyalgia',
    nameEn: 'Amitriptyline',
    nameAr: 'أميتريبتيلين',
    dosageEn: '10-50mg at bedtime',
    dosageAr: '10-50 ملغ قبل النوم'
  },

  // الذئبة الحمراء
  {
    id: 'lupus_1',
    diseaseId: 'lupus',
    nameEn: 'Plaquenil (Hydroxychloroquine)',
    nameAr: 'بلاكنيل',
    dosageEn: '200-400mg daily',
    dosageAr: '200-400 ملغ يومياً'
  },
  {
    id: 'lupus_2',
    diseaseId: 'lupus',
    nameEn: 'Prednisone',
    nameAr: 'بريدنيزون',
    dosageEn: '5-60mg daily',
    dosageAr: '5-60 ملغ يومياً'
  },
  {
    id: 'lupus_3',
    diseaseId: 'lupus',
    nameEn: 'Imuran (Azathioprine)',
    nameAr: 'إيموران',
    dosageEn: '50-150mg daily',
    dosageAr: '50-150 ملغ يومياً'
  },

  // انقطاع النفس النومي
  {
    id: 'sleep_apnea_1',
    diseaseId: 'sleep_apnea',
    nameEn: 'CPAP Machine',
    nameAr: 'جهاز ضغط الهواء الإيجابي',
    dosageEn: 'Use every night during sleep',
    dosageAr: 'الاستخدام كل ليلة أثناء النوم'
  },
  {
    id: 'sleep_apnea_2',
    diseaseId: 'sleep_apnea',
    nameEn: 'Oral Appliance',
    nameAr: 'جهاز فموي',
    dosageEn: 'Wear during sleep',
    dosageAr: 'ارتداء أثناء النوم'
  },
  {
    id: 'sleep_apnea_3',
    diseaseId: 'sleep_apnea',
    nameEn: 'Weight Management',
    nameAr: 'إدارة الوزن',
    dosageEn: 'Lifestyle changes',
    dosageAr: 'تغييرات نمط الحياة'
  },

  // الحزام الناري
  {
    id: 'shingles_1',
    diseaseId: 'shingles',
    nameEn: 'Acyclovir',
    nameAr: 'أسيكلوفير',
    dosageEn: '800mg 5 times daily for 7 days',
    dosageAr: '800 ملغ 5 مرات يومياً لمدة 7 أيام'
  },
  {
    id: 'shingles_2',
    diseaseId: 'shingles',
    nameEn: 'Valacyclovir',
    nameAr: 'فالاسيكلوفير',
    dosageEn: '1000mg 3 times daily for 7 days',
    dosageAr: '1000 ملغ 3 مرات يومياً لمدة 7 أيام'
  },
  {
    id: 'shingles_3',
    diseaseId: 'shingles',
    nameEn: 'Gabapentin',
    nameAr: 'جابابنتين',
    dosageEn: '300-600mg 3 times daily',
    dosageAr: '300-600 ملغ 3 مرات يومياً'
  },

  // عدم تحمل اللاكتوز
  {
    id: 'lactose_1',
    diseaseId: 'celiac_intolerance',
    nameEn: 'Lactaid Tablets',
    nameAr: 'أقراص لاكتيز',
    dosageEn: '1-2 tablets before dairy',
    dosageAr: '1-2 قرص قبل منتجات الألبان'
  },
  {
    id: 'lactose_2',
    diseaseId: 'celiac_intolerance',
    nameEn: 'Lactose-Free Products',
    nameAr: 'منتجات خالية من اللاكتوز',
    dosageEn: 'Replace regular dairy',
    dosageAr: 'استبدال منتجات الألبان العادية'
  },
  {
    id: 'lactose_3',
    diseaseId: 'celiac_intolerance',
    nameEn: 'Calcium Supplement',
    nameAr: 'مكمل الكالسيوم',
    dosageEn: '500-1000mg daily',
    dosageAr: '500-1000 ملغ يومياً'
  },

  // مرض مينيير
  {
    id: 'meniere_1',
    diseaseId: 'meniere_disease',
    nameEn: 'Betahistine (Betaserc)',
    nameAr: 'بيتاسيرك',
    dosageEn: '16mg 3 times daily',
    dosageAr: '16 ملغ 3 مرات يومياً'
  },
  {
    id: 'meniere_2',
    diseaseId: 'meniere_disease',
    nameEn: 'Diuretics (Low Salt Diet)',
    nameAr: 'مدرات البول ونظام قليل الملح',
    dosageEn: 'As prescribed with diet changes',
    dosageAr: 'حسب الوصفة مع تغييرات غذائية'
  },
  {
    id: 'meniere_3',
    diseaseId: 'meniere_disease',
    nameEn: 'Prochlorperazine',
    nameAr: 'بروكلوربيرازين',
    dosageEn: '5-10mg 3 times daily',
    dosageAr: '5-10 ملغ 3 مرات يومياً'
  },

  // علاجات الأمراض النفسية الجديدة
  // اضطراب الشخصية الحدية
  {
    id: 'borderline_1',
    diseaseId: 'borderline_personality',
    nameEn: 'Dialectical Behavior Therapy (DBT)',
    nameAr: 'العلاج السلوكي الجدلي',
    dosageEn: 'Weekly individual and group sessions',
    dosageAr: 'جلسات فردية وجماعية أسبوعية'
  },
  {
    id: 'borderline_2',
    diseaseId: 'borderline_personality',
    nameEn: 'Quetiapine (Seroquel)',
    nameAr: 'سيروكويل',
    dosageEn: '50-300mg daily',
    dosageAr: '50-300 ملغ يومياً'
  },
  {
    id: 'borderline_3',
    diseaseId: 'borderline_personality',
    nameEn: 'Mood Stabilizers',
    nameAr: 'مثبتات المزاج',
    dosageEn: 'As prescribed',
    dosageAr: 'حسب الوصفة'
  },

  // اضطراب المزاج الدوري
  {
    id: 'cyclothymia_1',
    diseaseId: 'cyclothymia',
    nameEn: 'Lithium',
    nameAr: 'ليثيوم',
    dosageEn: '300-600mg daily',
    dosageAr: '300-600 ملغ يومياً'
  },
  {
    id: 'cyclothymia_2',
    diseaseId: 'cyclothymia',
    nameEn: 'Lamotrigine',
    nameAr: 'لاموتريجين',
    dosageEn: '25-200mg daily',
    dosageAr: '25-200 ملغ يومياً'
  },
  {
    id: 'cyclothymia_3',
    diseaseId: 'cyclothymia',
    nameEn: 'Psychotherapy',
    nameAr: 'العلاج النفسي',
    dosageEn: 'Weekly sessions',
    dosageAr: 'جلسات أسبوعية'
  },

  // الصمت الانتقائي
  {
    id: 'selective_mutism_1',
    diseaseId: 'selective_mutism',
    nameEn: 'Behavioral Therapy',
    nameAr: 'العلاج السلوكي',
    dosageEn: 'Weekly sessions',
    dosageAr: 'جلسات أسبوعية'
  },
  {
    id: 'selective_mutism_2',
    diseaseId: 'selective_mutism',
    nameEn: 'Fluoxetine (for severe cases)',
    nameAr: 'فلوكستين للحالات الشديدة',
    dosageEn: '10-20mg daily',
    dosageAr: '10-20 ملغ يومياً'
  },
  {
    id: 'selective_mutism_3',
    diseaseId: 'selective_mutism',
    nameEn: 'School-Based Intervention',
    nameAr: 'التدخل المدرسي',
    dosageEn: 'Coordinated with school',
    dosageAr: 'بالتنسيق مع المدرسة'
  },

  // اضطراب التعلق التفاعلي
  {
    id: 'reactive_1',
    diseaseId: 'reactive_attachment',
    nameEn: 'Attachment-Focused Therapy',
    nameAr: 'علاج التركيز على التعلق',
    dosageEn: 'Family-based weekly sessions',
    dosageAr: 'جلسات عائلية أسبوعية'
  },
  {
    id: 'reactive_2',
    diseaseId: 'reactive_attachment',
    nameEn: 'Parent Training',
    nameAr: 'تدريب الوالدين',
    dosageEn: 'Regular training sessions',
    dosageAr: 'جلسات تدريب منتظمة'
  },
  {
    id: 'reactive_3',
    diseaseId: 'reactive_attachment',
    nameEn: 'Play Therapy',
    nameAr: 'العلاج باللعب',
    dosageEn: 'Weekly sessions',
    dosageAr: 'جلسات أسبوعية'
  },

  // اضطراب قطف الجلد
  {
    id: 'excoriation_1',
    diseaseId: 'excoriation',
    nameEn: 'Habit Reversal Training',
    nameAr: 'تدريب عكس العادة',
    dosageEn: 'Weekly therapy sessions',
    dosageAr: 'جلسات علاج أسبوعية'
  },
  {
    id: 'excoriation_2',
    diseaseId: 'excoriation',
    nameEn: 'N-Acetylcysteine',
    nameAr: 'إن-أسيتيل سيستين',
    dosageEn: '1200-2400mg daily',
    dosageAr: '1200-2400 ملغ يومياً'
  },
  {
    id: 'excoriation_3',
    diseaseId: 'excoriation',
    nameEn: 'Sertraline',
    nameAr: 'سيرترالين',
    dosageEn: '50-200mg daily',
    dosageAr: '50-200 ملغ يومياً'
  },

  // اضطراب القمار
  {
    id: 'gambling_1',
    diseaseId: 'gambling_disorder',
    nameEn: 'Cognitive Behavioral Therapy',
    nameAr: 'العلاج المعرفي السلوكي',
    dosageEn: 'Weekly individual sessions',
    dosageAr: 'جلسات فردية أسبوعية'
  },
  {
    id: 'gambling_2',
    diseaseId: 'gambling_disorder',
    nameEn: 'Naltrexone',
    nameAr: 'نالتريكسون',
    dosageEn: '50-100mg daily',
    dosageAr: '50-100 ملغ يومياً'
  },
  {
    id: 'gambling_3',
    diseaseId: 'gambling_disorder',
    nameEn: 'Support Groups',
    nameAr: 'مجموعات الدعم',
    dosageEn: 'Regular group meetings',
    dosageAr: 'اجتماعات جماعية منتظمة'
  },

  // اضطراب قلق المرض
  {
    id: 'illness_anxiety_1',
    diseaseId: 'illness_anxiety',
    nameEn: 'CBT for Health Anxiety',
    nameAr: 'العلاج المعرفي لقلق الصحة',
    dosageEn: 'Weekly therapy sessions',
    dosageAr: 'جلسات علاج أسبوعية'
  },
  {
    id: 'illness_anxiety_2',
    diseaseId: 'illness_anxiety',
    nameEn: 'Paroxetine',
    nameAr: 'باروكستين',
    dosageEn: '20-40mg daily',
    dosageAr: '20-40 ملغ يومياً'
  },
  {
    id: 'illness_anxiety_3',
    diseaseId: 'illness_anxiety',
    nameEn: 'Stress Management Training',
    nameAr: 'تدريب إدارة التوتر',
    dosageEn: 'Weekly sessions',
    dosageAr: 'جلسات أسبوعية'
  },

  // اضطراب نهم الطعام
  {
    id: 'binge_eating_1',
    diseaseId: 'binge_eating',
    nameEn: 'CBT for Eating Disorders',
    nameAr: 'العلاج المعرفي لاضطرابات الأكل',
    dosageEn: 'Weekly therapy sessions',
    dosageAr: 'جلسات علاج أسبوعية'
  },
  {
    id: 'binge_eating_2',
    diseaseId: 'binge_eating',
    nameEn: 'Lisdexamfetamine (Vyvanse)',
    nameAr: 'ليسديكسامفيتامين',
    dosageEn: '30-70mg daily',
    dosageAr: '30-70 ملغ يومياً'
  },
  {
    id: 'binge_eating_3',
    diseaseId: 'binge_eating',
    nameEn: 'Nutritional Counseling',
    nameAr: 'الإرشاد الغذائي',
    dosageEn: 'Regular sessions',
    dosageAr: 'جلسات منتظمة'
  },

  // اضطراب الاجترار
  {
    id: 'rumination_1',
    diseaseId: 'rumination',
    nameEn: 'Diaphragmatic Breathing Training',
    nameAr: 'تدريب التنفس الحجابي',
    dosageEn: 'Daily practice',
    dosageAr: 'ممارسة يومية'
  },
  {
    id: 'rumination_2',
    diseaseId: 'rumination',
    nameEn: 'Behavioral Therapy',
    nameAr: 'العلاج السلوكي',
    dosageEn: 'Weekly sessions',
    dosageAr: 'جلسات أسبوعية'
  },
  {
    id: 'rumination_3',
    diseaseId: 'rumination',
    nameEn: 'Biofeedback',
    nameAr: 'الارتجاع البيولوجي',
    dosageEn: 'Regular training sessions',
    dosageAr: 'جلسات تدريب منتظمة'
  },

  // اضطراب قلق الانفصال
  {
    id: 'separation_1',
    diseaseId: 'separation_anxiety',
    nameEn: 'Family Therapy',
    nameAr: 'العلاج الأسري',
    dosageEn: 'Weekly family sessions',
    dosageAr: 'جلسات عائلية أسبوعية'
  },
  {
    id: 'separation_2',
    diseaseId: 'separation_anxiety',
    nameEn: 'Sertraline',
    nameAr: 'سيرترالين',
    dosageEn: '25-200mg daily',
    dosageAr: '25-200 ملغ يومياً'
  },
  {
    id: 'separation_3',
    diseaseId: 'separation_anxiety',
    nameEn: 'Exposure Therapy',
    nameAr: 'العلاج بالتعرض',
    dosageEn: 'Gradual exposure sessions',
    dosageAr: 'جلسات تعرض تدريجي'
  },

  // اضطراب التحويل
  {
    id: 'conversion_1',
    diseaseId: 'conversion_disorder',
    nameEn: 'Physical Therapy',
    nameAr: 'العلاج الطبيعي',
    dosageEn: 'Regular rehabilitation sessions',
    dosageAr: 'جلسات تأهيل منتظمة'
  },
  {
    id: 'conversion_2',
    diseaseId: 'conversion_disorder',
    nameEn: 'Psychotherapy',
    nameAr: 'العلاج النفسي',
    dosageEn: 'Weekly sessions',
    dosageAr: 'جلسات أسبوعية'
  },
  {
    id: 'conversion_3',
    diseaseId: 'conversion_disorder',
    nameEn: 'Stress Reduction Techniques',
    nameAr: 'تقنيات تقليل التوتر',
    dosageEn: 'Daily practice',
    dosageAr: 'ممارسة يومية'
  },
  // علاجات 19 مرض جسدي جديد
  {
    id: 'meningitis_1',
    diseaseId: 'meningitis',
    nameEn: 'Ceftriaxone Injection',
    nameAr: 'حقن سيفترياكسون',
    dosageEn: 'As prescribed by doctor',
    dosageAr: 'حسب وصفة الطبيب'
  },
  {
    id: 'meningitis_2',
    diseaseId: 'meningitis',
    nameEn: 'Dexamethasone',
    nameAr: 'ديكساميثازون',
    dosageEn: 'As prescribed',
    dosageAr: 'حسب الوصفة'
  },
  {
    id: 'pancreatitis_1',
    diseaseId: 'pancreatitis',
    nameEn: 'Creon',
    nameAr: 'كريون',
    dosageEn: '1-2 capsules with meals',
    dosageAr: '1-2 كبسولة مع الوجبات'
  },
  {
    id: 'pancreatitis_2',
    diseaseId: 'pancreatitis',
    nameEn: 'Omeprazole',
    nameAr: 'أوميبرازول',
    dosageEn: '1 capsule daily before meals',
    dosageAr: 'كبسولة يومياً قبل الأكل'
  },
  {
    id: 'diverticulitis_1',
    diseaseId: 'diverticulitis',
    nameEn: 'Metronidazole',
    nameAr: 'ميترونيدازول',
    dosageEn: '1 tablet 3 times daily',
    dosageAr: 'قرص 3 مرات يومياً'
  },
  {
    id: 'diverticulitis_2',
    diseaseId: 'diverticulitis',
    nameEn: 'Ciprofloxacin',
    nameAr: 'سيبروفلوكساسين',
    dosageEn: '1 tablet twice daily',
    dosageAr: 'قرص مرتين يومياً'
  },
  {
    id: 'hernia_1',
    diseaseId: 'hernia',
    nameEn: 'Surgical Repair',
    nameAr: 'إصلاح جراحي',
    dosageEn: 'One-time surgery',
    dosageAr: 'عملية جراحية واحدة'
  },
  {
    id: 'hernia_2',
    diseaseId: 'hernia',
    nameEn: 'Pain Management',
    nameAr: 'إدارة الألم',
    dosageEn: 'As needed for pain',
    dosageAr: 'عند الحاجة للألم'
  },
  {
    id: 'lupus_1',
    diseaseId: 'lupus',
    nameEn: 'Hydroxychloroquine',
    nameAr: 'هيدروكسي كلوروكين',
    dosageEn: '1-2 tablets daily',
    dosageAr: '1-2 قرص يومياً'
  },
  {
    id: 'lupus_2',
    diseaseId: 'lupus',
    nameEn: 'Prednisone',
    nameAr: 'بريدنيزون',
    dosageEn: 'As prescribed by rheumatologist',
    dosageAr: 'حسب وصفة طبيب الروماتيزم'
  },
  {
    id: 'fibromyalgia_1',
    diseaseId: 'fibromyalgia',
    nameEn: 'Lyrica',
    nameAr: 'ليريكا',
    dosageEn: '75-150mg twice daily',
    dosageAr: '75-150 ملغ مرتين يومياً'
  },
  {
    id: 'fibromyalgia_2',
    diseaseId: 'fibromyalgia',
    nameEn: 'Cymbalta',
    nameAr: 'سيمبالتا',
    dosageEn: '60mg once daily',
    dosageAr: '60 ملغ مرة يومياً'
  },
  {
    id: 'bells_palsy_1',
    diseaseId: 'bells_palsy',
    nameEn: 'Prednisolone',
    nameAr: 'بريدنيزولون',
    dosageEn: 'Tapering dose over 10 days',
    dosageAr: 'جرعة تنازلية لمدة 10 أيام'
  },
  {
    id: 'bells_palsy_2',
    diseaseId: 'bells_palsy',
    nameEn: 'Eye Lubricant',
    nameAr: 'مرطب العين',
    dosageEn: 'Apply as needed',
    dosageAr: 'يوضع عند الحاجة'
  },
  {
    id: 'carpal_tunnel_1',
    diseaseId: 'carpal_tunnel',
    nameEn: 'Wrist Splint',
    nameAr: 'جبيرة الرسغ',
    dosageEn: 'Wear at night',
    dosageAr: 'ارتداء ليلاً'
  },
  {
    id: 'carpal_tunnel_2',
    diseaseId: 'carpal_tunnel',
    nameEn: 'Ibuprofen',
    nameAr: 'إيبوبروفين',
    dosageEn: '1 tablet every 6-8 hours',
    dosageAr: 'قرص كل 6-8 ساعات'
  },
  {
    id: 'plantar_fasciitis_1',
    diseaseId: 'plantar_fasciitis',
    nameEn: 'Orthotic Insoles',
    nameAr: 'نعال تقويمية',
    dosageEn: 'Wear daily in shoes',
    dosageAr: 'ارتداء يومياً في الحذاء'
  },
  {
    id: 'plantar_fasciitis_2',
    diseaseId: 'plantar_fasciitis',
    nameEn: 'Naproxen',
    nameAr: 'نابروكسين',
    dosageEn: '1 tablet twice daily',
    dosageAr: 'قرص مرتين يومياً'
  },
  {
    id: 'tendinitis_1',
    diseaseId: 'tendinitis',
    nameEn: 'Voltaren Gel',
    nameAr: 'جل فولتارين',
    dosageEn: 'Apply 3-4 times daily',
    dosageAr: 'يوضع 3-4 مرات يومياً'
  },
  {
    id: 'tendinitis_2',
    diseaseId: 'tendinitis',
    nameEn: 'Physical Therapy',
    nameAr: 'علاج طبيعي',
    dosageEn: '2-3 sessions weekly',
    dosageAr: '2-3 جلسات أسبوعياً'
  },
  {
    id: 'bursitis_1',
    diseaseId: 'bursitis',
    nameEn: 'Corticosteroid Injection',
    nameAr: 'حقن كورتيكوستيرويد',
    dosageEn: 'Single injection as needed',
    dosageAr: 'حقنة واحدة عند الحاجة'
  },
  {
    id: 'bursitis_2',
    diseaseId: 'bursitis',
    nameEn: 'Ketoprofen',
    nameAr: 'كيتوبروفين',
    dosageEn: '1 capsule twice daily',
    dosageAr: 'كبسولة مرتين يومياً'
  },
  {
    id: 'shingles_1',
    diseaseId: 'shingles',
    nameEn: 'Acyclovir',
    nameAr: 'أسيكلوفير',
    dosageEn: '800mg 5 times daily for 7 days',
    dosageAr: '800 ملغ 5 مرات يومياً لمدة 7 أيام'
  },
  {
    id: 'shingles_2',
    diseaseId: 'shingles',
    nameEn: 'Gabapentin',
    nameAr: 'جابابنتين',
    dosageEn: 'Starting 300mg, increase as needed',
    dosageAr: 'بدء 300 ملغ، زيادة حسب الحاجة'
  },
  {
    id: 'rosacea_1',
    diseaseId: 'rosacea',
    nameEn: 'Metrogel',
    nameAr: 'ميتروجيل',
    dosageEn: 'Apply twice daily',
    dosageAr: 'يوضع مرتين يومياً'
  },
  {
    id: 'rosacea_2',
    diseaseId: 'rosacea',
    nameEn: 'Doxycycline',
    nameAr: 'دوكسيسايكلين',
    dosageEn: '100mg daily',
    dosageAr: '100 ملغ يومياً'
  },
  {
    id: 'vitiligo_1',
    diseaseId: 'vitiligo',
    nameEn: 'Tacrolimus Ointment',
    nameAr: 'مرهم تاكروليموس',
    dosageEn: 'Apply twice daily',
    dosageAr: 'يوضع مرتين يومياً'
  },
  {
    id: 'vitiligo_2',
    diseaseId: 'vitiligo',
    nameEn: 'Phototherapy',
    nameAr: 'العلاج الضوئي',
    dosageEn: '2-3 sessions weekly',
    dosageAr: '2-3 جلسات أسبوعياً'
  },
  {
    id: 'glaucoma_1',
    diseaseId: 'glaucoma',
    nameEn: 'Xalatan Eye Drops',
    nameAr: 'قطرة زالاتان',
    dosageEn: '1 drop at bedtime',
    dosageAr: 'قطرة واحدة قبل النوم'
  },
  {
    id: 'glaucoma_2',
    diseaseId: 'glaucoma',
    nameEn: 'Timolol Eye Drops',
    nameAr: 'قطرة تيمولول',
    dosageEn: '1 drop twice daily',
    dosageAr: 'قطرة مرتين يومياً'
  },
  {
    id: 'cataracts_1',
    diseaseId: 'cataracts',
    nameEn: 'Cataract Surgery',
    nameAr: 'جراحة الساد',
    dosageEn: 'One-time surgical procedure',
    dosageAr: 'إجراء جراحي لمرة واحدة'
  },
  {
    id: 'cataracts_2',
    diseaseId: 'cataracts',
    nameEn: 'Eye Vitamins',
    nameAr: 'فيتامينات العين',
    dosageEn: '1 capsule daily',
    dosageAr: 'كبسولة يومياً'
  },
  {
    id: 'macular_degeneration_1',
    diseaseId: 'macular_degeneration',
    nameEn: 'Lucentis Injection',
    nameAr: 'حقن لوسينتيس',
    dosageEn: 'Monthly eye injections',
    dosageAr: 'حقن شهرية في العين'
  },
  {
    id: 'macular_degeneration_2',
    diseaseId: 'macular_degeneration',
    nameEn: 'AREDS Supplements',
    nameAr: 'مكملات AREDS',
    dosageEn: '2 capsules daily',
    dosageAr: 'كبسولتان يومياً'
  },
  {
    id: 'otitis_media_1',
    diseaseId: 'otitis_media',
    nameEn: 'Amoxicillin',
    nameAr: 'أموكسيسيلين',
    dosageEn: '3 times daily for 7-10 days',
    dosageAr: '3 مرات يومياً لمدة 7-10 أيام'
  },
  {
    id: 'otitis_media_2',
    diseaseId: 'otitis_media',
    nameEn: 'Ear Drops',
    nameAr: 'قطرة الأذن',
    dosageEn: '3-4 drops 3 times daily',
    dosageAr: '3-4 قطرات 3 مرات يومياً'
  },
  {
    id: 'tinnitus_1',
    diseaseId: 'tinnitus',
    nameEn: 'Betaserc',
    nameAr: 'بيتاسيرك',
    dosageEn: '1 tablet 3 times daily',
    dosageAr: 'قرص 3 مرات يومياً'
  },
  {
    id: 'tinnitus_2',
    diseaseId: 'tinnitus',
    nameEn: 'Ginkgo Biloba',
    nameAr: 'جينكو بيلوبا',
    dosageEn: '1 capsule twice daily',
    dosageAr: 'كبسولة مرتين يومياً'
  },
  // علاجات 11 مرض نفسي جديد
  {
    id: 'reactive_attachment_1',
    diseaseId: 'reactive_attachment',
    nameEn: 'Play Therapy',
    nameAr: 'العلاج باللعب',
    dosageEn: 'Weekly sessions',
    dosageAr: 'جلسات أسبوعية'
  },
  {
    id: 'reactive_attachment_2',
    diseaseId: 'reactive_attachment',
    nameEn: 'Family Therapy',
    nameAr: 'العلاج الأسري',
    dosageEn: 'Weekly family sessions',
    dosageAr: 'جلسات أسرية أسبوعية'
  },
  {
    id: 'selective_mutism_1',
    diseaseId: 'selective_mutism',
    nameEn: 'Behavioral Therapy',
    nameAr: 'العلاج السلوكي',
    dosageEn: 'Weekly sessions',
    dosageAr: 'جلسات أسبوعية'
  },
  {
    id: 'selective_mutism_2',
    diseaseId: 'selective_mutism',
    nameEn: 'Fluoxetine',
    nameAr: 'فلوكستين',
    dosageEn: '10-20mg daily',
    dosageAr: '10-20 ملغ يومياً'
  },
  {
    id: 'depersonalization_1',
    diseaseId: 'depersonalization',
    nameEn: 'Psychotherapy',
    nameAr: 'العلاج النفسي',
    dosageEn: 'Weekly sessions',
    dosageAr: 'جلسات أسبوعية'
  },
  {
    id: 'depersonalization_2',
    diseaseId: 'depersonalization',
    nameEn: 'Naltrexone',
    nameAr: 'نالتريكسون',
    dosageEn: '50mg daily',
    dosageAr: '50 ملغ يومياً'
  },
  {
    id: 'psychogenic_amnesia_1',
    diseaseId: 'psychogenic_amnesia',
    nameEn: 'Trauma-focused Therapy',
    nameAr: 'علاج الصدمات',
    dosageEn: 'Weekly sessions',
    dosageAr: 'جلسات أسبوعية'
  },
  {
    id: 'psychogenic_amnesia_2',
    diseaseId: 'psychogenic_amnesia',
    nameEn: 'EMDR Therapy',
    nameAr: 'علاج EMDR',
    dosageEn: 'Bi-weekly sessions',
    dosageAr: 'جلسات كل أسبوعين'
  },
  {
    id: 'factitious_disorder_1',
    diseaseId: 'factitious_disorder',
    nameEn: 'Cognitive Behavioral Therapy',
    nameAr: 'العلاج السلوكي المعرفي',
    dosageEn: 'Weekly sessions',
    dosageAr: 'جلسات أسبوعية'
  },
  {
    id: 'factitious_disorder_2',
    diseaseId: 'factitious_disorder',
    nameEn: 'Family Counseling',
    nameAr: 'الإرشاد الأسري',
    dosageEn: 'Bi-weekly sessions',
    dosageAr: 'جلسات كل أسبوعين'
  },
  {
    id: 'brief_psychotic_1',
    diseaseId: 'brief_psychotic',
    nameEn: 'Risperidone',
    nameAr: 'ريسبيريدون',
    dosageEn: '1-2mg daily',
    dosageAr: '1-2 ملغ يومياً'
  },
  {
    id: 'brief_psychotic_2',
    diseaseId: 'brief_psychotic',
    nameEn: 'Olanzapine',
    nameAr: 'أولانزابين',
    dosageEn: '5-10mg daily',
    dosageAr: '5-10 ملغ يومياً'
  },
  {
    id: 'acute_stress_1',
    diseaseId: 'acute_stress',
    nameEn: 'Brief CBT',
    nameAr: 'علاج سلوكي معرفي قصير',
    dosageEn: '4-8 sessions',
    dosageAr: '4-8 جلسات'
  },
  {
    id: 'acute_stress_2',
    diseaseId: 'acute_stress',
    nameEn: 'Prazosin',
    nameAr: 'برازوسين',
    dosageEn: '1-2mg at bedtime',
    dosageAr: '1-2 ملغ قبل النوم'
  },
  {
    id: 'pyromania_1',
    diseaseId: 'pyromania',
    nameEn: 'Cognitive Behavioral Therapy',
    nameAr: 'العلاج السلوكي المعرفي',
    dosageEn: 'Weekly sessions',
    dosageAr: 'جلسات أسبوعية'
  },
  {
    id: 'pyromania_2',
    diseaseId: 'pyromania',
    nameEn: 'Naltrexone',
    nameAr: 'نالتريكسون',
    dosageEn: '50mg daily',
    dosageAr: '50 ملغ يومياً'
  },
  {
    id: 'kleptomania_1',
    diseaseId: 'kleptomania',
    nameEn: 'Fluvoxamine',
    nameAr: 'فلوفوكسامين',
    dosageEn: '100-200mg daily',
    dosageAr: '100-200 ملغ يومياً'
  },
  {
    id: 'kleptomania_2',
    diseaseId: 'kleptomania',
    nameEn: 'Behavioral Therapy',
    nameAr: 'العلاج السلوكي',
    dosageEn: 'Weekly sessions',
    dosageAr: 'جلسات أسبوعية'
  },
  {
    id: 'excoriation_1',
    diseaseId: 'excoriation',
    nameEn: 'N-Acetyl Cysteine',
    nameAr: 'إن-أسيتيل سيستين',
    dosageEn: '1200-2400mg daily',
    dosageAr: '1200-2400 ملغ يومياً'
  },
  {
    id: 'excoriation_2',
    diseaseId: 'excoriation',
    nameEn: 'Habit Reversal Therapy',
    nameAr: 'علاج عكس العادات',
    dosageEn: 'Weekly sessions',
    dosageAr: 'جلسات أسبوعية'
  },
  {
    id: 'pica_1',
    diseaseId: 'pica',
    nameEn: 'Iron Supplements',
    nameAr: 'مكملات الحديد',
    dosageEn: '1 tablet daily',
    dosageAr: 'قرص يومياً'
  },
  {
    id: 'pica_2',
    diseaseId: 'pica',
    nameEn: 'Behavioral Intervention',
    nameAr: 'تدخل سلوكي',
    dosageEn: 'Weekly sessions',
    dosageAr: 'جلسات أسبوعية'
  }
];
