CREATE OR REPLACE FUNCTION public.get_doctor_requests()
RETURNS TABLE(id uuid, user_id uuid, full_name text, email text, specialty text, bio text, cv_url text, portfolio_url text, verification_status text, is_verified boolean, ai_cv_review text, rejection_reason text, reviewed_at timestamptz, created_at timestamptz)
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN RAISE EXCEPTION 'Admin access required'; END IF;
  RETURN QUERY SELECT d.id, d.user_id, p.full_name, p.email, d.specialty, d.bio, d.cv_url, d.portfolio_url, d.verification_status, d.is_verified, d.ai_cv_review, d.rejection_reason, d.reviewed_at, d.created_at
  FROM public.doctors d LEFT JOIN public.profiles p ON p.user_id = d.user_id ORDER BY d.created_at DESC;
END; $$;
GRANT EXECUTE ON FUNCTION public.get_doctor_requests() TO authenticated;