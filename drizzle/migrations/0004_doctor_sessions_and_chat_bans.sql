CREATE TABLE public.doctor_availability (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  doctor_id uuid NOT NULL REFERENCES public.doctors(id) ON DELETE CASCADE,
  weekday smallint NOT NULL CHECK (weekday BETWEEN 0 AND 6),
  start_time time NOT NULL,
  end_time time NOT NULL CHECK (end_time > start_time),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.doctor_availability TO authenticated;
GRANT ALL ON public.doctor_availability TO service_role;
ALTER TABLE public.doctor_availability ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Signed in view availability" ON public.doctor_availability FOR SELECT TO authenticated USING (true);
CREATE POLICY "Doctors manage own availability" ON public.doctor_availability FOR ALL TO authenticated
  USING (doctor_id IN (SELECT id FROM public.doctors WHERE user_id = auth.uid()))
  WITH CHECK (doctor_id IN (SELECT id FROM public.doctors WHERE user_id = auth.uid()));

CREATE TABLE public.doctor_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  doctor_id uuid NOT NULL REFERENCES public.doctors(id) ON DELETE CASCADE,
  user_id uuid NOT NULL,
  starts_at timestamptz NOT NULL,
  ends_at timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'confirmed' CHECK (status IN ('confirmed','cancelled')),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX doctor_bookings_doctor_idx ON public.doctor_bookings (doctor_id, starts_at);
CREATE INDEX doctor_bookings_user_idx ON public.doctor_bookings (user_id, starts_at);
GRANT SELECT, INSERT, UPDATE ON public.doctor_bookings TO authenticated;
GRANT ALL ON public.doctor_bookings TO service_role;
ALTER TABLE public.doctor_bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Participants view bookings" ON public.doctor_bookings FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR doctor_id IN (SELECT id FROM public.doctors WHERE user_id = auth.uid()) OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Users book for themselves" ON public.doctor_bookings FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "Participants cancel bookings" ON public.doctor_bookings FOR UPDATE TO authenticated
  USING (user_id = auth.uid() OR doctor_id IN (SELECT id FROM public.doctors WHERE user_id = auth.uid()))
  WITH CHECK (status = 'cancelled');

CREATE TABLE public.chat_bans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  target_user_id uuid,
  conversation_id uuid REFERENCES public.conversations(id) ON DELETE CASCADE,
  reason text,
  expires_at timestamptz,
  created_by uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CHECK (target_user_id IS NOT NULL OR conversation_id IS NOT NULL)
);
GRANT SELECT, INSERT, DELETE ON public.chat_bans TO authenticated;
GRANT ALL ON public.chat_bans TO service_role;
ALTER TABLE public.chat_bans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage chat bans" ON public.chat_bans FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin') AND created_by = auth.uid());
CREATE POLICY "Users see own bans" ON public.chat_bans FOR SELECT TO authenticated USING (target_user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.validate_doctor_booking()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE local_start timestamp; local_end timestamp;
BEGIN
  IF NEW.status = 'cancelled' THEN RETURN NEW; END IF;
  IF TG_OP = 'UPDATE' THEN RETURN NEW; END IF;
  IF NEW.ends_at <= NEW.starts_at OR NEW.ends_at - NEW.starts_at > interval '2 hours' THEN
    RAISE EXCEPTION 'مدة الجلسة غير صحيحة';
  END IF;
  IF NEW.starts_at < now() THEN RAISE EXCEPTION 'لا يمكن الحجز في وقت مضى'; END IF;
  IF NOT EXISTS (SELECT 1 FROM public.doctors WHERE id = NEW.doctor_id AND is_verified = true) THEN
    RAISE EXCEPTION 'الطبيب غير معتمد';
  END IF;
  local_start := NEW.starts_at AT TIME ZONE 'Africa/Cairo';
  local_end := NEW.ends_at AT TIME ZONE 'Africa/Cairo';
  IF local_start::date <> local_end::date OR NOT EXISTS (
    SELECT 1 FROM public.doctor_availability a
    WHERE a.doctor_id = NEW.doctor_id AND a.weekday = extract(dow FROM local_start)
      AND a.start_time <= local_start::time AND a.end_time >= local_end::time
  ) THEN
    RAISE EXCEPTION 'الموعد خارج ساعات عمل الطبيب';
  END IF;
  IF EXISTS (SELECT 1 FROM public.doctor_bookings b WHERE b.doctor_id = NEW.doctor_id AND b.status = 'confirmed'
     AND b.starts_at < NEW.ends_at AND b.ends_at > NEW.starts_at) THEN
    RAISE EXCEPTION 'الموعد محجوز بالفعل';
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER validate_doctor_booking BEFORE INSERT OR UPDATE ON public.doctor_bookings
  FOR EACH ROW EXECUTE FUNCTION public.validate_doctor_booking();

CREATE OR REPLACE FUNCTION public.is_chat_banned(_conversation_id uuid, _user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.chat_bans b
    LEFT JOIN public.conversations c ON c.id = _conversation_id
    LEFT JOIN public.doctors d ON d.id = c.doctor_id
    WHERE (b.expires_at IS NULL OR b.expires_at > now())
      AND (b.conversation_id = _conversation_id OR b.target_user_id IN (_user_id, c.user_id, d.user_id))
  )
$$;

CREATE OR REPLACE FUNCTION public.can_chat(_conversation_id uuid, _user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT NOT public.is_chat_banned(_conversation_id, _user_id) AND EXISTS (
    SELECT 1 FROM public.conversations c
    JOIN public.doctors d ON d.id = c.doctor_id
    JOIN public.doctor_bookings b ON b.doctor_id = c.doctor_id AND b.user_id = c.user_id
    WHERE c.id = _conversation_id AND (c.user_id = _user_id OR d.user_id = _user_id)
      AND b.status = 'confirmed' AND now() BETWEEN b.starts_at AND b.ends_at + interval '1 hour'
  )
$$;
GRANT EXECUTE ON FUNCTION public.can_chat(uuid, uuid) TO authenticated;

CREATE POLICY "Chat only during booked session" ON public.messages AS RESTRICTIVE FOR INSERT TO authenticated
  WITH CHECK (public.can_chat(conversation_id, auth.uid()));

CREATE POLICY "Chat participants read files" ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'chat-files' AND (storage.foldername(name))[1]::uuid IN (
    SELECT c.id FROM public.conversations c LEFT JOIN public.doctors d ON d.id = c.doctor_id
    WHERE c.user_id = auth.uid() OR d.user_id = auth.uid()));
CREATE POLICY "Chat participants upload during session" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'chat-files' AND public.can_chat((storage.foldername(name))[1]::uuid, auth.uid()));