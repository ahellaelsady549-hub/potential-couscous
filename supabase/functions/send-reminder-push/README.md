# Web Push reminder setup

Web Push requires HTTPS, a VAPID key pair, the database migration, and a deployed Edge Function.

1. Generate a VAPID key pair with `npx web-push generate-vapid-keys`. Keep the private key secret.
2. Set `VITE_WEB_PUSH_PUBLIC_KEY` to the public key in the app's local `.env.local` and production build environment.
3. Set the Edge Function secrets without committing them:

   ```text
   supabase secrets set VAPID_PUBLIC_KEY=<public-key> VAPID_PRIVATE_KEY=<private-key> VAPID_SUBJECT=mailto:<contact-email>
   ```

4. Apply migrations and deploy the sender:

   ```text
   supabase db push
   supabase functions deploy send-reminder-push
   ```

5. In the Supabase SQL editor, store the service-role key in Vault for the scheduled sender:

   ```sql
   select vault.create_secret('<service-role-key>', 'web_push_service_role_key');
   ```

The migration schedules the Edge Function once per minute using that Vault secret. Never put the service-role key or VAPID private key in frontend code, `.env.local` committed to Git, or chat.

The browser can play custom MP3 sounds only while the site is open and audio playback is allowed. A push received with the site closed uses the operating system's notification sound; browsers do not allow websites to attach custom audio to a background notification.
