CREATE TABLE public.gym_user_custom_programs (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL UNIQUE REFERENCES auth.users ON DELETE CASCADE,
  plan jsonb NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.gym_user_custom_programs TO authenticated;
GRANT ALL ON public.gym_user_custom_programs TO service_role;

ALTER TABLE public.gym_user_custom_programs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "own custom gym program select"
  ON public.gym_user_custom_programs FOR SELECT TO authenticated
  USING (auth.uid() = user_id);
CREATE POLICY "own custom gym program insert"
  ON public.gym_user_custom_programs FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY "own custom gym program update"
  ON public.gym_user_custom_programs FOR UPDATE TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "own custom gym program delete"
  ON public.gym_user_custom_programs FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

CREATE TRIGGER gym_user_custom_program_updated
  BEFORE UPDATE ON public.gym_user_custom_programs
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
