CREATE TABLE public.user_weight_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  weight_kg NUMERIC NOT NULL CHECK (weight_kg > 20 AND weight_kg < 400),
  measured_on DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, measured_on)
);

ALTER TABLE public.user_weight_logs ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_weight_logs TO authenticated;

CREATE POLICY "Users manage their own weight logs"
ON public.user_weight_logs
FOR ALL TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

ALTER TABLE public.community_posts
ADD COLUMN IF NOT EXISTS video_url TEXT;

UPDATE storage.buckets
SET file_size_limit = 52428800
WHERE id = 'community-media';

DROP POLICY IF EXISTS "Signed-in users view community media" ON storage.objects;
CREATE POLICY "Signed-in users view community media"
ON storage.objects
FOR SELECT TO authenticated
USING (
  bucket_id = 'community-media'
  AND (
    owner = auth.uid()
    OR EXISTS (
      SELECT 1 FROM public.community_posts p
      WHERE p.image_url LIKE '%' || storage.objects.name || '%'
         OR p.voice_url LIKE '%' || storage.objects.name || '%'
         OR p.video_url LIKE '%' || storage.objects.name || '%'
    )
  )
);

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('doctor-cvs', 'doctor-cvs', false, 10485760, ARRAY['application/pdf'])
ON CONFLICT (id) DO UPDATE
SET public = false,
    file_size_limit = 10485760,
    allowed_mime_types = ARRAY['application/pdf'];

CREATE POLICY "Applicants manage their own CV files"
ON storage.objects
FOR ALL TO authenticated
USING (
  bucket_id = 'doctor-cvs'
  AND (storage.foldername(name))[1] = auth.uid()::text
)
WITH CHECK (
  bucket_id = 'doctor-cvs'
  AND (storage.foldername(name))[1] = auth.uid()::text
  AND owner = auth.uid()
);

CREATE POLICY "Admins can review doctor CV files"
ON storage.objects
FOR SELECT TO authenticated
USING (
  bucket_id = 'doctor-cvs'
  AND public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Admins can view doctor applications"
ON public.doctors
FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update doctor applications"
ON public.doctors
FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.guard_doctor_verification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF auth.uid() IS NULL OR NOT public.has_role(auth.uid(), 'admin') THEN
      NEW.is_verified := false;
      NEW.verification_status := 'pending';
    END IF;
    RETURN NEW;
  END IF;

  IF auth.uid() IS NULL OR NOT public.has_role(auth.uid(), 'admin') THEN
    IF NEW.is_verified IS DISTINCT FROM OLD.is_verified THEN
      RAISE EXCEPTION 'Only an administrator can verify a doctor';
    END IF;
    IF NEW.verification_status IS DISTINCT FROM OLD.verification_status
       AND NEW.verification_status NOT IN (OLD.verification_status, 'pending') THEN
      RAISE EXCEPTION 'Only an administrator can change the application status';
    END IF;
  END IF;

  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION public.guard_doctor_verification() FROM PUBLIC, anon, authenticated;

CREATE TRIGGER guard_doctor_verification
BEFORE INSERT OR UPDATE ON public.doctors
FOR EACH ROW EXECUTE FUNCTION public.guard_doctor_verification();

CREATE OR REPLACE FUNCTION public.assign_doctor_role_after_approval()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.is_verified = true
     AND NEW.verification_status = 'approved'
     AND (OLD.is_verified IS DISTINCT FROM NEW.is_verified
          OR OLD.verification_status IS DISTINCT FROM NEW.verification_status) THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.user_id, 'doctor')
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;

  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION public.assign_doctor_role_after_approval() FROM PUBLIC, anon, authenticated;

CREATE TRIGGER assign_doctor_role_after_approval
AFTER UPDATE OF is_verified, verification_status ON public.doctors
FOR EACH ROW EXECUTE FUNCTION public.assign_doctor_role_after_approval();

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data ->> 'full_name');

  IF NEW.raw_user_meta_data ->> 'account_type' = 'doctor'
     AND NULLIF(NEW.raw_user_meta_data ->> 'doctor_specialty', '') IS NOT NULL THEN
    INSERT INTO public.doctors (user_id, specialty, bio, portfolio_url, is_verified, verification_status)
    VALUES (
      NEW.id,
      NEW.raw_user_meta_data ->> 'doctor_specialty',
      NULLIF(NEW.raw_user_meta_data ->> 'doctor_bio', ''),
      NULLIF(NEW.raw_user_meta_data ->> 'doctor_portfolio_url', ''),
      false,
      'pending'
    )
    ON CONFLICT (user_id) DO NOTHING;
  END IF;

  RETURN NEW;
END;
$$;
