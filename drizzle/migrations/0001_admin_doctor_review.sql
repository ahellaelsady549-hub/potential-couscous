CREATE POLICY "Admins view all doctors" ON public.doctors FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins review doctors" ON public.doctors FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Doctors upload own cv" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'doctor-cvs' AND (storage.foldername(name))[1] = auth.uid()::text);
CREATE POLICY "Doctors and admins read cvs" ON storage.objects FOR SELECT TO authenticated USING (bucket_id = 'doctor-cvs' AND ((storage.foldername(name))[1] = auth.uid()::text OR public.has_role(auth.uid(), 'admin')));
CREATE OR REPLACE FUNCTION public.get_pending_doctors()
RETURNS TABLE(id uuid, user_id uuid, full_name text, email text, specialty text, bio text, cv_url text, verification_status text, is_verified boolean, created_at timestamptz)
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path TO 'public'
AS $$
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN RAISE EXCEPTION 'Admin access required'; END IF;
  RETURN QUERY SELECT d.id, d.user_id, p.full_name, p.email, d.specialty, d.bio, d.cv_url, d.verification_status, d.is_verified, d.created_at
  FROM public.doctors d LEFT JOIN public.profiles p ON p.user_id = d.user_id ORDER BY d.created_at DESC;
END;
$$;
GRANT EXECUTE ON FUNCTION public.get_pending_doctors() TO authenticated;