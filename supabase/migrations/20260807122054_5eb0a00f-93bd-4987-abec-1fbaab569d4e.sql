-- 1. Tighten community_likes read access
DROP POLICY IF EXISTS "Anyone auth can view likes" ON public.community_likes;
CREATE POLICY "Likes visible for existing posts or own likes"
ON public.community_likes FOR SELECT TO authenticated
USING (
  user_id = auth.uid()
  OR EXISTS (SELECT 1 FROM public.community_posts p WHERE p.id = community_likes.post_id)
);

-- 2. Restrict doctor_ratings review text
DROP POLICY IF EXISTS "Ratings viewable by signed-in users" ON public.doctor_ratings;
CREATE POLICY "Own ratings or ratings of own doctor profile"
ON public.doctor_ratings FOR SELECT TO authenticated
USING (
  user_id = auth.uid()
  OR EXISTS (SELECT 1 FROM public.doctors d WHERE d.id = doctor_ratings.doctor_id AND d.user_id = auth.uid())
  OR public.has_role(auth.uid(), 'admin')
);

-- 3. SECURITY DEFINER functions: remove any anon/public execute rights
REVOKE ALL ON FUNCTION public.get_community_stats() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.get_registered_users() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.get_profile_public(uuid) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.request_doctor_role(uuid) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.has_role(uuid, user_role) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.is_user_banned(uuid) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.is_admin_email() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.handle_new_user_role() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_doctor_rating() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.get_community_stats() FROM authenticated;
REVOKE ALL ON FUNCTION public.get_registered_users() FROM authenticated;
GRANT EXECUTE ON FUNCTION public.get_community_stats() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_registered_users() TO authenticated;