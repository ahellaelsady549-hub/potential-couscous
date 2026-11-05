CREATE OR REPLACE FUNCTION public.get_doctor_busy_slots(_doctor_id uuid)
RETURNS TABLE(starts_at timestamptz, ends_at timestamptz, status text)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT b.starts_at, b.ends_at, b.status FROM public.doctor_bookings b
  WHERE b.doctor_id = _doctor_id AND b.status = 'confirmed' AND b.ends_at > now() AND auth.uid() IS NOT NULL
$$;
REVOKE EXECUTE ON FUNCTION public.get_doctor_busy_slots(uuid) FROM anon, public;
GRANT EXECUTE ON FUNCTION public.get_doctor_busy_slots(uuid) TO authenticated;