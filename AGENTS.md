# Architecture rules

- Home section navigation uses URL hashes after the menu closes, and the home page owns scrolling; this avoids focus restoration undoing navigation and supports links from other pages.
- Home scroll reveals use a scoped IntersectionObserver hook with reduced-motion and unsupported-browser fallbacks; this keeps content accessible without continuous scroll listeners.
- Ask me is mounted in a dedicated auth-guarded page using the existing chat component; this preserves saved history without coupling chat to diagnosis.
- Shared motion uses CSS classes on controls and surfaces with reduced-motion guards; this avoids continuous listeners and leaves fixed navigation positioning intact.- Routes except home are lazy-loaded under one Suspense fallback; this keeps the first load small.
- Ask me conversations group ask_me_history rows by conversation_id with a shared conversation_title; this avoids a separate conversations table.
- Diagnosis returns a validated structured preliminary assessment, displayed on an authenticated results route using navigation state rather than persistent client storage; this keeps medical guidance organized without storing symptoms locally.
