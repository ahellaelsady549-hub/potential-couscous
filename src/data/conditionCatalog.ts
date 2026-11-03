import { diseases, type Disease } from '@/data/diseases';
import { physicalDiseases } from '@/data/physicalDiseases';
import { mentalDiseases } from '@/data/mentalDiseases';
import { conditionCauses } from '@/data/conditionCauses';

type SourceReference = { nameAr: string; nameEn: string; url: string };

export type ConditionRecord = Disease & {
  treatmentsAr?: string[];
  treatmentsEn?: string[];
  causesAr?: string[];
  causesEn?: string[];
  sources?: SourceReference[];
};

const existingMentalIds = new Set([
  'anxiety', 'psychogenic_amnesia', 'factitious_disorder', 'brief_psychotic',
  'acute_stress', 'pyromania', 'kleptomania', 'pica',
  'depression', 'bipolar', 'schizophrenia', 'ocd', 'ptsd',
  'panic_disorder', 'social_anxiety', 'eating_disorder', 'adhd',
  'autism', 'personality_disorder', 'substance_abuse', 'insomnia',
  'phobia', 'dissociative', 'generalized_anxiety', 'seasonal_depression',
  'hoarding_disorder', 'body_dysmorphia', 'intermittent_explosive',
  'trichotillomania', 'dermatillomania', 'agoraphobia', 'adjustment_disorder',
  'somatoform', 'avoidant_personality', 'narcissistic_personality',
  'dependent_personality', 'paranoid_personality',
  'borderline_personality', 'cyclothymia', 'selective_mutism',
  'reactive_attachment', 'excoriation', 'gambling_disorder',
  'illness_anxiety', 'binge_eating', 'rumination', 'separation_anxiety',
  'conversion_disorder',
]);

const mentalAliases: Record<string, string> = {
  mental_extra_seasonal_affective_disorder: 'seasonal_depression',
  mental_extra_autism_spectrum_disorder: 'autism',
  mental_extra_borderline_personality_disorder: 'borderline_personality',
  mental_extra_paranoid_personality_disorder: 'paranoid_personality',
  mental_extra_avoidant_personality_disorder: 'avoidant_personality',
  mental_extra_narcissistic_personality_disorder: 'narcissistic_personality',
  mental_extra_dependent_personality_disorder: 'dependent_personality',
  mental_extra_binge_eating_disorder: 'binge_eating',
  mental_extra_agoraphobia: 'agoraphobia',
  mental_extra_specific_phobia: 'phobia',
  mental_extra_cyclothymic_disorder: 'cyclothymia',
};

const newPhysicalConditions: ConditionRecord[] = physicalDiseases
  .filter((condition) => condition.id.startsWith('physical_extra_'));

const newMentalConditions: ConditionRecord[] = mentalDiseases
  .filter((condition) => condition.id.startsWith('mental_extra_'));

const mentalSupplementById = new Map(
  newMentalConditions.map((condition) => [mentalAliases[condition.id] ?? condition.id, condition]),
);

export const addedCareOptionsCount = [...newPhysicalConditions, ...newMentalConditions]
  .reduce((count, condition) => count + (condition.treatmentsAr?.length ?? 0), 0);

export const conditionCatalog: ConditionRecord[] = [
  ...diseases.map((condition) => {
    const supplement = mentalSupplementById.get(condition.id);
    if (!supplement) return condition;
    return {
      ...condition,
      treatmentsAr: supplement.treatmentsAr,
      treatmentsEn: supplement.treatmentsEn,
      sources: supplement.sources,
      causesAr: conditionCauses[supplement.id]?.causesAr,
      causesEn: conditionCauses[supplement.id]?.causesEn,
    };
  }),
  ...newPhysicalConditions,
  ...newMentalConditions.filter((condition) => !mentalAliases[condition.id]),
].map((condition) => ({ ...condition, ...conditionCauses[condition.id] }));

export const physicalConditionCatalog = conditionCatalog.filter(
  (condition) => !existingMentalIds.has(condition.id) && !condition.id.startsWith('mental_extra_'),
);

export const mentalConditionCatalog = conditionCatalog.filter(
  (condition) => existingMentalIds.has(condition.id) || condition.id.startsWith('mental_extra_'),
);
