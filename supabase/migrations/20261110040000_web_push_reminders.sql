CREATE TABLE public.web_push_subscriptions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  endpoint text NOT NULL UNIQUE,
  subscription jsonb NOT NULL,
  timezone text NOT NULL DEFAULT 'UTC',
  medication_reminders boolean NOT NULL DEFAULT true,
  appointment_reminders boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.web_push_subscriptions ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.web_push_subscriptions TO authenticated;
GRANT ALL ON public.web_push_subscriptions TO service_role;

CREATE POLICY "users manage their own web push subscriptions"
  ON public.web_push_subscriptions FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.web_push_reminder_deliveries (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  subscription_id uuid NOT NULL REFERENCES public.web_push_subscriptions ON DELETE CASCADE,
  reminder_key text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (subscription_id, reminder_key)
);

ALTER TABLE public.web_push_reminder_deliveries ENABLE ROW LEVEL SECURITY;
GRANT ALL ON public.web_push_reminder_deliveries TO service_role;

CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

SELECT cron.schedule(
  'send-web-push-reminders',
  '* * * * *',
  $job$
    SELECT net.http_post(
      url := 'https://rmcbcxtbdinpmsyafaao.supabase.co/functions/v1/send-reminder-push',
      headers := jsonb_build_object(
        'Authorization',
        'Bearer ' || decrypted_secret,
        'Content-Type',
        'application/json'
      ),
      body := '{}'::jsonb
    )
    FROM vault.decrypted_secrets
    WHERE name = 'web_push_service_role_key';
  $job$
);
