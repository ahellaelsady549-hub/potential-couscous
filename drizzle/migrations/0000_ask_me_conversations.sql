ALTER TABLE public.ask_me_history ADD COLUMN IF NOT EXISTS conversation_id uuid;
ALTER TABLE public.ask_me_history ADD COLUMN IF NOT EXISTS conversation_title text;
UPDATE public.ask_me_history SET conversation_id = id WHERE conversation_id IS NULL;
UPDATE public.ask_me_history SET conversation_title = left(question, 60) WHERE conversation_title IS NULL;
CREATE INDEX IF NOT EXISTS ask_me_history_conv_idx ON public.ask_me_history(user_id, conversation_id);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ask_me_history TO authenticated;
DROP POLICY IF EXISTS "Users update own ask history" ON public.ask_me_history;
CREATE POLICY "Users update own ask history" ON public.ask_me_history FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);