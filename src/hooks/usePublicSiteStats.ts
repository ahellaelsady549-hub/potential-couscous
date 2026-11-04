import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

type PublicSiteStats = {
  registeredUsers: number;
  doctors: number;
};

function isPublicSiteStats(value: unknown): value is { registered_users: number; doctors: number } {
  if (!value || typeof value !== 'object') return false;
  const stats = value as Record<string, unknown>;
  return Number.isSafeInteger(stats.registered_users) && Number.isSafeInteger(stats.doctors);
}

export function usePublicSiteStats() {
  const [stats, setStats] = useState<PublicSiteStats | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    let timeout: ReturnType<typeof setTimeout>;

    const refresh = async () => {
      const { data, error: requestError } = await supabase.rpc('get_public_site_stats');
      if (!active) return;

      if (requestError) {
        console.error('Could not load public site statistics:', requestError);
        setError(true);
      } else if (isPublicSiteStats(data)) {
        setStats({ registeredUsers: data.registered_users, doctors: data.doctors });
        setError(false);
      } else {
        console.error('The public site statistics response has an invalid shape:', data);
        setError(true);
      }

      if (active) timeout = setTimeout(refresh, 60_000);
    };

    void refresh();
    return () => {
      active = false;
      clearTimeout(timeout);
    };
  }, []);

  return { stats, error };
}
