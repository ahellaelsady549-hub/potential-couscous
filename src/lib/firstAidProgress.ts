export interface FirstAidProgress {
  points: number;
  streak: number;
  lastActive: string | null;
  completedLessonIds: number[];
  pendingLessonIds: number[];
}

export const FIRST_AID_PROGRESS_KEY = 'es3efny_first_aid_progress';

export const emptyFirstAidProgress: FirstAidProgress = {
  points: 0,
  streak: 0,
  lastActive: null,
  completedLessonIds: [],
  pendingLessonIds: [],
};

const getToday = () => new Date().toISOString().slice(0, 10);

export const readFirstAidProgress = (key: string): FirstAidProgress => {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return emptyFirstAidProgress;
    const parsed: unknown = JSON.parse(stored);
    if (!parsed || typeof parsed !== 'object') return emptyFirstAidProgress;
    const value = parsed as Partial<FirstAidProgress>;
    return {
      points: Number.isFinite(value.points) ? Math.max(0, value.points ?? 0) : 0,
      streak: Number.isFinite(value.streak) ? Math.max(0, value.streak ?? 0) : 0,
      lastActive: typeof value.lastActive === 'string' ? value.lastActive : null,
      completedLessonIds: Array.isArray(value.completedLessonIds)
        ? value.completedLessonIds.filter((id): id is number => Number.isInteger(id) && id > 0)
        : [],
      pendingLessonIds: Array.isArray(value.pendingLessonIds)
        ? value.pendingLessonIds.filter((id): id is number => Number.isInteger(id) && id > 0)
        : [],
    };
  } catch (error) {
    console.warn('Could not restore first-aid learning progress:', error);
    return emptyFirstAidProgress;
  }
};

export const saveFirstAidProgress = (key: string, value: FirstAidProgress) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn('Could not save first-aid learning progress locally:', error);
  }
};

export const advanceFirstAidStreak = (progress: FirstAidProgress): FirstAidProgress => {
  const today = getToday();
  if (progress.lastActive === today) return progress;
  const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
  return {
    ...progress,
    streak: progress.lastActive === yesterday ? progress.streak + 1 : 1,
    lastActive: today,
  };
};

export const getCachedFirstAidProgress = (userId?: string): FirstAidProgress =>
  readFirstAidProgress(`${FIRST_AID_PROGRESS_KEY}:${userId ?? 'guest'}`);
