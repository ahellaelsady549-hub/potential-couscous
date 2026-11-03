import type { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

const siteCreatorQuestionPattern =
  /(?:(?:مين|من)\s+(?:(?:هو|اللي|الذى|الذي)\s+)?(?:عمل|عامل|أنشأ|انشأ|أسس|اسس|صمم|بنى|بني)(?=\s|$)|(?:مين|من)\s+(?:مؤسس|منشئ|صاحب)(?=\s|$)|(?:الموقع|إسعفني|اسعفني)\s+(?:اتعمل|تأسس|تأسست|اتأسس)(?=\s|$)|who\s+(?:(?:made|created|founded|built)\s+(?:the\s+)?(?:website|site|es3efny)|is\s+the\s+founder))/i;

function cleanName(value: unknown): string {
  if (typeof value !== 'string') return '';
  return [...value].filter((character) => character.charCodeAt(0) >= 32 && character.charCodeAt(0) !== 127).join('').trim().slice(0, 80);
}

export async function getRegisteredUserName(user: User | null): Promise<string> {
  if (user) {
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('user_id', user.id)
      .maybeSingle();
    if (error) console.warn('Could not load the signed-in user profile name:', error);
    if (profile?.full_name?.trim()) return cleanName(profile.full_name);
  }

  const metadata = user?.user_metadata ?? {};
  const name = [metadata.full_name, metadata.name, metadata.username, metadata.display_name, metadata.preferred_username]
    .find((value) => typeof value === 'string' && value.trim().length > 0);
  return cleanName(name);
}

export function getSiteCreatorReply(question: string, userName = ''): string | null {
  const normalizedQuestion = question
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[؟?!.,،]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const asksAboutWebsite = /(?:الموقع|إسعفني|اسعفني|المنصة|website|site|es3efny)/i.test(normalizedQuestion);
  const asksAboutCreator = siteCreatorQuestionPattern.test(normalizedQuestion)
    || /(?:عن\s+)?(?:اللي|الذى|الذي)\s+(?:عمل|أنشأ|انشأ|أسس|اسس|صمم|بنى|بني)(?=\s|$)/i.test(normalizedQuestion)
    || /(?:مين|من)\s+(?:عمل|أنشأ|انشأ|أسس|اسس|صمم|بنى|بني)(?=\s|$)/i.test(normalizedQuestion);
  if (!asksAboutCreator || (!asksAboutWebsite && !/(?:عمل|أنشأ|انشأ|أسس|اسس|صمم|بنى|بني)\s+(?:الموقع|إسعفني|اسعفني)/i.test(normalizedQuestion))) return null;
  const firstName = userName.split(/\s+/)[0];

  if (/[A-Za-z]/.test(normalizedQuestion) && !/[\u0600-\u06FF]/.test(normalizedQuestion)) {
    return `${firstName ? `Hi ${firstName}, ` : ''}Es3efny was founded in 2024, about two years ago, by Mohamed Abdelaziz. Its content has been reviewed by accredited doctors, and the website is still under Ministry of Health review; final approval has not been issued.`;
  }

  return `${firstName ? `يا ${firstName}، ` : ''}تأسس موقع إسعفني عام 2024، منذ نحو عامين، على يد محمد عبد العزيز. راجع محتواه أطباء معتمدون، والموقع ما زال قيد مراجعة وزارة الصحة ولم تصدر الموافقة النهائية بعد.`;
}
