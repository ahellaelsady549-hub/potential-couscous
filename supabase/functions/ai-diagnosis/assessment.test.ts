import { describe, expect, test } from 'bun:test';
import { assessmentSchema, isAssessment } from './assessment';

const result = {
  summary: 'قد تكون الأعراض مرتبطة بأسباب متعددة تحتاج للفحص', urgency: 'urgent',
  dangerSigns: ['عند ضيق التنفس اتصل بالإسعاف 123'], nextSteps: ['اطلب تقييماً طبياً اليوم'],
  doctorVisit: { timing: 'اليوم', reason: 'استمرار الأعراض', preparation: ['مدة الأعراض'] },
  limitations: 'تقييم مبدئي وليس تشخيصاً مؤكداً',
};
describe('structured preliminary assessment', () => {
  test('requires danger signs', () => {
    expect(isAssessment(result)).toBe(true);
    expect(isAssessment({ ...result, dangerSigns: [] })).toBe(false);
  });
  test('requires next steps', () => expect(isAssessment({ ...result, nextSteps: undefined })).toBe(false));
  test('requires doctor timing and reason', () => {
    expect(isAssessment({ ...result, doctorVisit: { ...result.doctorVisit, timing: '' } })).toBe(false);
    expect(isAssessment({ ...result, doctorVisit: { ...result.doctorVisit, reason: '' } })).toBe(false);
  });
  test('requires assessment limitations', () => expect(isAssessment({ ...result, limitations: '' })).toBe(false));
  test('rejects unknown urgency instead of treating it as safe', () => expect(isAssessment({ ...result, urgency: 'safe' })).toBe(false));
  test('output schema excludes diagnosis claims and probabilities', () => {
    expect(assessmentSchema.additionalProperties).toBe(false);
    expect(Object.keys(assessmentSchema.properties)).toEqual(['summary', 'urgency', 'dangerSigns', 'nextSteps', 'doctorVisit', 'limitations']);
  });
});