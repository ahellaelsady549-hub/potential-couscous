import { firstAidTips, type FirstAidTip } from '@/data/firstAidTips';

const settings = [
  { ar: 'في المنزل', en: 'at home', illustration: 'home' },
  { ar: 'في المدرسة', en: 'at school', illustration: 'school' },
  { ar: 'في مكان عام', en: 'in a public place', illustration: 'public' },
  { ar: 'في العمل', en: 'at work', illustration: 'work' },
  { ar: 'في الخارج', en: 'outdoors', illustration: 'outdoors' },
] as const;

const trustedSourceHosts = new Set([
  'www.sja.org.uk', 
  'www.nhs.uk', 
  'www.redcross.org.uk',
  'www.bhf.org.uk',
  'www.stroke.org.uk',
  'www.stroke.org',
  'www.world-stroke.org'
]);
const sourcedGuides = firstAidTips.filter((tip) =>
  tip.sources?.length
  && tip.sources.every((source) => {
    const url = new URL(source.url);
    return url.protocol === 'https:' && trustedSourceHosts.has(url.hostname);
  }),
);

const createPracticeLesson = (
  sourceTip: FirstAidTip,
  lessonId: number,
  setting: (typeof settings)[number],
): FirstAidTip => ({
  ...sourceTip,
  id: lessonId,
  videoUrl: undefined,
  titleAr: `${sourceTip.titleAr} — تدريب ${setting.ar}`,
  titleEn: `${sourceTip.titleEn} — ${setting.en} practice`,
  descriptionAr: `تدريب مبسّط على الإرشادات الموثقة لموقف ${setting.ar}.`,
  descriptionEn: `A short practice scenario based on verified guidance for a situation ${setting.en}.`,
  scenario: {
    settingAr: setting.ar,
    settingEn: setting.en,
    patientPromptAr: `أنا مش عارف أتصرف ${setting.ar} في موقف ${sourceTip.titleAr}.. نبدأ بإيه؟`,
    patientPromptEn: `I'm not sure what to do ${setting.en} in this ${sourceTip.titleEn} situation. What's the first step?`,
    assignmentAr: `مهمتك: رتّب خطوات هذا الدرس واشرح أول خطوة ومتى تطلب الطوارئ. تدرب بالكلام فقط، ولا تطبق خطوات إسعاف على شخص حقيقي دون تدريب مناسب.`,
    assignmentEn: `Your task: put these steps in order, explain the first step, and say when to call emergency services. Practise by talking only; do not perform first-aid procedures on a real person without suitable training.`,
    illustration: setting.illustration,
  },
});

const practiceLessons: FirstAidTip[] = sourcedGuides.flatMap((sourceTip, index) => [
  createPracticeLesson(sourceTip, 201 + index * 2, settings[index % settings.length]),
  createPracticeLesson(sourceTip, 202 + index * 2, settings[(index + 2) % settings.length]),
]);

const additionalPracticeLessons: FirstAidTip[] = sourcedGuides.slice(0, 51).map((sourceTip, index) =>
  createPracticeLesson(sourceTip, 451 + index, settings[(index + 4) % settings.length]),
);

if (sourcedGuides.length !== 125) {
  throw new Error(`Expected 125 first-aid guides from trusted medical sources, received ${sourcedGuides.length}.`);
}

if (practiceLessons.length !== 250 || additionalPracticeLessons.length !== 51) {
  throw new Error(
    `Expected 250 original and 51 additional source-backed practice lessons; received ${practiceLessons.length} and ${additionalPracticeLessons.length}.`,
  );
}

export const firstAidPracticeLessons = [...practiceLessons, ...additionalPracticeLessons];
export const allFirstAidLessons = [...firstAidTips, ...firstAidPracticeLessons];
export const firstAidAcademyLessonCount = allFirstAidLessons.length;
