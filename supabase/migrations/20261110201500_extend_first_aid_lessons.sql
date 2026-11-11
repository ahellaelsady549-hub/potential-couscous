ALTER TABLE public.first_aid_lesson_completions
  DROP CONSTRAINT IF EXISTS first_aid_lesson_completions_lesson_id_check;

ALTER TABLE public.first_aid_lesson_completions
  ADD CONSTRAINT first_aid_lesson_completions_lesson_id_check
  CHECK (lesson_id BETWEEN 1 AND 501);

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

  IF p_lesson_id IS NOT NULL AND p_lesson_id NOT BETWEEN 1 AND 501 THEN
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
