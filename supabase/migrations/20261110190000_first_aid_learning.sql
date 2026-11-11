CREATE TABLE public.first_aid_learning_stats (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  points INTEGER NOT NULL DEFAULT 0 CHECK (points >= 0),
  current_streak INTEGER NOT NULL DEFAULT 0 CHECK (current_streak >= 0),
  last_active DATE,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.first_aid_lesson_completions (
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id INTEGER NOT NULL CHECK (lesson_id BETWEEN 1 AND 450),
  completed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, lesson_id)
);

ALTER TABLE public.first_aid_learning_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.first_aid_lesson_completions ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON public.first_aid_learning_stats TO authenticated;
GRANT SELECT ON public.first_aid_lesson_completions TO authenticated;

CREATE POLICY "Users can view their own first-aid learning stats"
ON public.first_aid_learning_stats
FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own first-aid lesson completions"
ON public.first_aid_lesson_completions
FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.record_first_aid_activity(p_lesson_id INTEGER DEFAULT NULL)
RETURNS TABLE(points INTEGER, current_streak INTEGER, last_active DATE, lesson_completed BOOLEAN)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_today DATE := (now() AT TIME ZONE 'UTC')::DATE;
  v_completed BOOLEAN := false;
  v_inserted_count INTEGER := 0;
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Authentication is required';
  END IF;

  IF p_lesson_id IS NOT NULL AND p_lesson_id NOT BETWEEN 1 AND 450 THEN
    RAISE EXCEPTION 'Invalid first-aid lesson';
  END IF;

  INSERT INTO public.first_aid_learning_stats (user_id)
  VALUES (v_user_id)
  ON CONFLICT (user_id) DO NOTHING;

  UPDATE public.first_aid_learning_stats AS stats
  SET current_streak = CASE
        WHEN stats.last_active = v_today THEN stats.current_streak
        WHEN stats.last_active = v_today - 1 THEN stats.current_streak + 1
        ELSE 1
      END,
      last_active = v_today,
      updated_at = now()
  WHERE stats.user_id = v_user_id;

  IF p_lesson_id IS NOT NULL THEN
    INSERT INTO public.first_aid_lesson_completions (user_id, lesson_id)
    VALUES (v_user_id, p_lesson_id)
    ON CONFLICT (user_id, lesson_id) DO NOTHING;

    GET DIAGNOSTICS v_inserted_count = ROW_COUNT;
    v_completed := v_inserted_count > 0;
    IF v_completed THEN
      UPDATE public.first_aid_learning_stats AS stats
      SET points = stats.points + 10,
          updated_at = now()
      WHERE stats.user_id = v_user_id;
    END IF;
  END IF;

  RETURN QUERY
  SELECT stats.points, stats.current_streak, stats.last_active, v_completed
  FROM public.first_aid_learning_stats AS stats
  WHERE stats.user_id = v_user_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.get_first_aid_leaderboard()
RETURNS TABLE(
  rank BIGINT,
  learner_label TEXT,
  points INTEGER,
  streak INTEGER,
  completed_lessons BIGINT,
  is_current_user BOOLEAN
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  WITH ranked AS (
    SELECT
      row_number() OVER (ORDER BY stats.points DESC, stats.current_streak DESC, count(completions.lesson_id) DESC, stats.updated_at ASC) AS learner_rank,
      stats.user_id,
      stats.points,
      stats.current_streak,
      count(completions.lesson_id) AS completed_count
    FROM public.first_aid_learning_stats AS stats
    LEFT JOIN public.first_aid_lesson_completions AS completions
      ON completions.user_id = stats.user_id
    WHERE stats.points > 0
    GROUP BY stats.user_id, stats.points, stats.current_streak, stats.updated_at
  )
  SELECT
    ranked.learner_rank,
    'متعلم-' || upper(substr(md5(ranked.user_id::TEXT), 1, 6)),
    ranked.points,
    ranked.current_streak,
    ranked.completed_count,
    ranked.user_id = auth.uid()
  FROM ranked
  WHERE ranked.learner_rank <= 100 OR ranked.user_id = auth.uid()
  ORDER BY ranked.learner_rank;
$$;

REVOKE ALL ON FUNCTION public.record_first_aid_activity(INTEGER) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.record_first_aid_activity(INTEGER) TO authenticated;

REVOKE ALL ON FUNCTION public.get_first_aid_leaderboard() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_first_aid_leaderboard() TO anon, authenticated;
