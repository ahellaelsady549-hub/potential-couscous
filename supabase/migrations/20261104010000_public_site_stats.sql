CREATE OR REPLACE FUNCTION public.get_public_site_stats()
RETURNS jsonb
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, public
AS $$
  SELECT jsonb_build_object(
    'registered_users', (SELECT count(*)::integer FROM public.profiles),
    'doctors', (SELECT count(*)::integer FROM public.doctors)
  );
$$;

REVOKE ALL ON FUNCTION public.get_public_site_stats() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_public_site_stats() TO anon, authenticated;
