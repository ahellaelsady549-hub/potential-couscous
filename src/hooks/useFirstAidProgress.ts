import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import {
  advanceFirstAidStreak,
  emptyFirstAidProgress,
  FIRST_AID_PROGRESS_KEY,
  readFirstAidProgress,
  saveFirstAidProgress,
  type FirstAidProgress,
} from '@/lib/firstAidProgress';

export interface FirstAidLeaderboardEntry {
  rank: number;
  learnerLabel: string;
  points: number;
  streak: number;
  completedLessons: number;
  isCurrentUser: boolean;
}

export type FirstAidProgressSyncStatus = 'checking' | 'synced' | 'local';

export const useFirstAidProgress = () => {
  const { user, loading: authLoading } = useAuth();
  const { language } = useLanguage();
  const { toast } = useToast();
  const [progress, setProgress] = useState<FirstAidProgress>(emptyFirstAidProgress);
  const [leaderboard, setLeaderboard] = useState<FirstAidLeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncStatus, setSyncStatus] = useState<FirstAidProgressSyncStatus>('checking');

  const storageKey = `${FIRST_AID_PROGRESS_KEY}:${user?.id ?? 'guest'}`;

  useEffect(() => {
    let active = true;
    if (authLoading) return () => { active = false; };
    setLoading(true);
    const cachedProgress = advanceFirstAidStreak(readFirstAidProgress(storageKey));
    saveFirstAidProgress(storageKey, cachedProgress);
    setProgress(cachedProgress);

    if (!user) {
      setLeaderboard([]);
      setSyncStatus('local');
      setLoading(false);
      return () => { active = false; };
    }

    const loadProgress = async () => {
      const [activityResult, completedResult, rankingResult] = await Promise.all([
        supabase.rpc('record_first_aid_activity', { p_lesson_id: null }).single(),
        supabase.from('first_aid_lesson_completions').select('lesson_id').eq('user_id', user.id),
        supabase.rpc('get_first_aid_leaderboard'),
      ]);
      if (!active) return;

      const progressErrors = [activityResult.error, completedResult.error]
        .filter((error) => error !== null);
      if (rankingResult.error) {
        console.error('Could not load the first-aid leaderboard:', rankingResult.error);
      }
      let points = activityResult.data?.points ?? cachedProgress.points;
      let streak = activityResult.data?.current_streak ?? cachedProgress.streak;
      let lastActive = activityResult.data?.last_active ?? cachedProgress.lastActive;
      const remoteLessonIds = new Set((completedResult.data ?? []).map((row) => row.lesson_id));
      const pendingLessonIds = new Set(cachedProgress.pendingLessonIds);

      if (!activityResult.error) {
        for (const lessonId of pendingLessonIds) {
          const { data, error } = await supabase
            .rpc('record_first_aid_activity', { p_lesson_id: lessonId })
            .single();
          if (error) {
            progressErrors.push(error);
            continue;
          }
          points = data.points;
          streak = data.current_streak;
          lastActive = data.last_active;
          remoteLessonIds.add(lessonId);
          pendingLessonIds.delete(lessonId);
        }
      }

      const nextProgress: FirstAidProgress = {
        points,
        streak,
        lastActive,
        completedLessonIds: [...new Set([...cachedProgress.completedLessonIds, ...remoteLessonIds])],
        pendingLessonIds: [...pendingLessonIds],
      };
      setProgress(nextProgress);
      setLeaderboard((rankingResult.data ?? []).map((row) => ({
        rank: Number(row.rank),
        learnerLabel: row.learner_label,
        points: row.points,
        streak: row.streak,
        completedLessons: Number(row.completed_lessons),
        isCurrentUser: row.is_current_user,
      })));
      saveFirstAidProgress(storageKey, nextProgress);
      setSyncStatus(progressErrors.length ? 'local' : 'synced');
    };

    const refreshProgress = () => {
      setLoading(true);
      setSyncStatus('checking');
      loadProgress()
      .catch((error: unknown) => {
        console.error('Could not load first-aid learning progress:', error);
        if (active) setSyncStatus('local');
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    };

    refreshProgress();
    window.addEventListener('online', refreshProgress);
    return () => {
      active = false;
      window.removeEventListener('online', refreshProgress);
    };
  }, [authLoading, storageKey, user]);

  const completeLesson = useCallback(async (lessonId: number) => {
    if (progress.completedLessonIds.includes(lessonId)) return;

    if (!user) {
      setProgress((previous) => {
        const next = advanceFirstAidStreak(previous);
        const updated = {
          ...next,
          points: next.points + 10,
          completedLessonIds: [...next.completedLessonIds, lessonId],
        };
        saveFirstAidProgress(storageKey, updated);
        return updated;
      });
      return;
    }

    const { data, error } = await supabase
      .rpc('record_first_aid_activity', { p_lesson_id: lessonId })
      .single();
    if (error) {
      console.error('Could not save first-aid lesson completion:', error);
      setProgress((previous) => {
        if (previous.completedLessonIds.includes(lessonId)) return previous;
        const next = advanceFirstAidStreak(previous);
        const updated = {
          ...next,
          points: next.points + 10,
          completedLessonIds: [...next.completedLessonIds, lessonId],
          pendingLessonIds: [...new Set([...next.pendingLessonIds, lessonId])],
        };
        saveFirstAidProgress(storageKey, updated);
        return updated;
      });
      setSyncStatus('local');
      toast({
        title: language === 'ar' ? 'حُفظ إنجازك على هذا الجهاز' : 'Progress saved on this device',
        description: language === 'ar'
          ? 'تعذر الاتصال بالخادم الآن. سنحاول مزامنة النقاط عند عودة الاتصال.'
          : 'The server is unavailable right now. Your points will sync when the connection returns.',
      });
      return;
    }

    setProgress((previous) => {
      const updated = {
        ...previous,
        points: data.points,
        streak: data.current_streak,
        lastActive: data.last_active,
        completedLessonIds: previous.completedLessonIds.includes(lessonId)
          ? previous.completedLessonIds
          : [...previous.completedLessonIds, lessonId],
        pendingLessonIds: previous.pendingLessonIds.filter((id) => id !== lessonId),
      };
      saveFirstAidProgress(storageKey, updated);
      return updated;
    });
    setSyncStatus('synced');

    const { data: ranking, error: rankingError } = await supabase.rpc('get_first_aid_leaderboard');
    if (rankingError) {
      console.error('Could not refresh the first-aid leaderboard:', rankingError);
      toast({
        title: language === 'ar' ? 'تعذر تحديث الترتيب' : 'Could not refresh leaderboard',
        description: rankingError.message,
        variant: 'destructive',
      });
      return;
    }
    setLeaderboard((ranking ?? []).map((row) => ({
      rank: Number(row.rank),
      learnerLabel: row.learner_label,
      points: row.points,
      streak: row.streak,
      completedLessons: Number(row.completed_lessons),
      isCurrentUser: row.is_current_user,
    })));
  }, [language, progress.completedLessonIds, storageKey, toast, user]);

  return { progress, leaderboard, loading, syncStatus, completeLesson, setProgress: setProgress as React.Dispatch<React.SetStateAction<FirstAidProgress>> };
};
