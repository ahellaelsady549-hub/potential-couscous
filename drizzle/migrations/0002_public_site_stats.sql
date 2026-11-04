CREATE OR REPLACE FUNCTION public.get_public_stats()
RETURNS json LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT json_build_object(
    'users', (SELECT COUNT(*) FROM auth.users),
    'doctors', (SELECT COUNT(*) FROM public.doctors WHERE is_verified = true)
  );
$$;
REVOKE ALL ON FUNCTION public.get_public_stats() FROM public;
GRANT EXECUTE ON FUNCTION public.get_public_stats() TO anon, authenticated;
ALTER TABLE public.doctors ADD COLUMN IF NOT EXISTS rejection_reason text;
ALTER TABLE public.doctors ADD COLUMN IF NOT EXISTS reviewed_at timestamptz;