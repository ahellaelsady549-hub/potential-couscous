import { useEffect, useMemo, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, MessagesSquare, Send, Trash2, Plus, Pencil, Check, Search } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

type Msg = { role: 'user' | 'assistant'; content: string };
type Row = { id: string; question: string; answer: string; created_at: string; conversation_id: string | null; conversation_title: string | null };
type Conv = { id: string; title: string; updated: string; rows: Row[] };

const SUGGESTIONS: Array<{ ar: string; en: string }> = [
  { ar: 'إيه أسباب الصداع المستمر؟', en: 'What causes a persistent headache?' },
  { ar: 'اعملي خطة مذاكرة أسبوعية', en: 'Build me a weekly study plan' },
  { ar: 'أفضل أكل عالي البروتين ورخيص', en: 'Best cheap high-protein foods' },
  { ar: 'اشرح لي فرق الفيروس والبكتيريا', en: 'Explain the difference between viruses and bacteria' },
];

export const AskMe = ({ standalone = false }: { standalone?: boolean }) => {
  const Title = standalone ? 'div' : CardTitle;
  const { user } = useAuth();
  const { L, language } = useLanguage();
  const [rows, setRows] = useState<Row[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!user) return;
    supabase
      .from('ask_me_history')
      .select('id, question, answer, created_at, conversation_id, conversation_title')
      .order('created_at', { ascending: true })
      .limit(500)
      .then(({ data, error }) => {
        if (error) toast.error(L('تعذر تحميل المحادثات', 'Could not load conversations'));
        else setRows((data as Row[]) || []);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  const conversations = useMemo<Conv[]>(() => {
    const map = new Map<string, Conv>();
    rows.forEach((r) => {
      const cid = r.conversation_id || r.id;
      const c = map.get(cid) || { id: cid, title: r.conversation_title || r.question.slice(0, 60), updated: r.created_at, rows: [] };
      c.rows.push(r);
      c.updated = r.created_at;
      if (r.conversation_title) c.title = r.conversation_title;
      map.set(cid, c);
    });
    const q = search.trim().toLowerCase();
    return [...map.values()]
      .filter((c) => !q || c.title.toLowerCase().includes(q) || c.rows.some((r) => r.question.toLowerCase().includes(q) || r.answer.toLowerCase().includes(q)))
      .sort((a, b) => b.updated.localeCompare(a.updated));
  }, [rows, search]);

  const active = conversations.find((c) => c.id === activeId) || null;
  const messages: Msg[] = (active?.rows || rows.filter((r) => (r.conversation_id || r.id) === activeId)).flatMap((r) => [
    { role: 'user' as const, content: r.question },
    { role: 'assistant' as const, content: r.answer },
  ]);

  const ask = async (question: string) => {
    const q = question.trim();
    if (q.length < 2) return toast.error(L('اكتب سؤالك أولاً', 'Type your question first'));
    if (!user) return;
    setInput('');
    setLoading(true);
    const cid = activeId || crypto.randomUUID();
    const title = active?.title || q.slice(0, 60);
    setActiveId(cid);
    try {
      const { data, error } = await supabase.functions.invoke('ask-anything', {
        body: { question: q, history: messages.slice(-10), lang: language },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      const answer = data.answer as string;
      const { data: saved, error: saveErr } = await supabase
        .from('ask_me_history')
        .insert({ user_id: user.id, question: q, answer, conversation_id: cid, conversation_title: title })
        .select('id, question, answer, created_at, conversation_id, conversation_title')
        .single();
      if (saveErr || !saved) {
        toast.error(L('تم الرد لكن تعذر الحفظ', 'Answered, but saving failed'));
        setRows((p) => [...p, { id: crypto.randomUUID(), question: q, answer, created_at: new Date().toISOString(), conversation_id: cid, conversation_title: title }]);
      } else setRows((p) => [...p, saved as Row]);
      setTimeout(() => endRef.current?.scrollIntoView({ block: 'nearest' }), 50);
    } catch {
      setInput(q);
      toast.error(L('الخدمة مش متاحة دلوقتي، جرّب تاني بعد شوية', 'The service is unavailable right now, please try again shortly'));
    } finally {
      setLoading(false);
    }
  };

  const rename = async (cid: string) => {
    const t = editTitle.trim().slice(0, 80);
    setEditing(null);
    if (!t) return;
    const { error } = await supabase.from('ask_me_history').update({ conversation_title: t }).eq('conversation_id', cid);
    if (error) return toast.error(L('تعذر تغيير الاسم', 'Could not rename'));
    setRows((p) => p.map((r) => ((r.conversation_id || r.id) === cid ? { ...r, conversation_title: t } : r)));
  };

  const remove = async (cid: string) => {
    const { error } = await supabase.from('ask_me_history').delete().eq('conversation_id', cid);
    if (error) return toast.error(L('تعذر الحذف', 'Could not delete'));
    setRows((p) => p.filter((r) => (r.conversation_id || r.id) !== cid));
    if (activeId === cid) setActiveId(null);
  };

  return (
    <Card id="ask-me" className={standalone ? 'ask-me-page border-0 bg-transparent shadow-none' : 'mt-10'}>
      <CardHeader>
        <Title className="flex items-center gap-2 text-xl">
          <MessagesSquare className="h-5 w-5 text-primary" />
          {standalone ? <h1 className="text-3xl font-bold">{L('اسألني', 'Ask me')}</h1> : L('اسألني', 'Ask me')}
        </Title>
        <p className="text-sm text-muted-foreground">
          {L('كل محادثة بتتحفظ لوحدها — تقدر ترجع لها، تغيّر اسمها أو تدوّر فيها.', 'Each conversation is saved separately — reopen, rename or search it anytime.')}
        </p>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-[240px_1fr]">
        <aside className="space-y-2 rounded-lg border border-border p-2">
          <Button className="w-full gap-2" size="sm" onClick={() => setActiveId(null)}>
            <Plus className="h-4 w-4" />{L('محادثة جديدة', 'New conversation')}
          </Button>
          <div className="relative">
            <Search className="absolute start-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={L('بحث...', 'Search...')} className="ps-8" aria-label={L('بحث في المحادثات', 'Search conversations')} />
          </div>
          <ul className="max-h-[360px] space-y-1 overflow-y-auto">
            {conversations.length === 0 && <li className="py-4 text-center text-xs text-muted-foreground">{L('لا توجد محادثات', 'No conversations')}</li>}
            {conversations.map((c) => (
              <li key={c.id} className={`group flex items-center gap-1 rounded-md px-2 py-1 text-sm ${c.id === activeId ? 'bg-accent text-accent-foreground' : 'hover:bg-muted'}`}>
                {editing === c.id ? (
                  <>
                    <Input autoFocus value={editTitle} onChange={(e) => setEditTitle(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && rename(c.id)} className="h-7" />
                    <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => rename(c.id)} aria-label={L('حفظ', 'Save')}><Check className="h-4 w-4" /></Button>
                  </>
                ) : (
                  <>
                    <button className="flex-1 truncate text-start" onClick={() => setActiveId(c.id)}>{c.title}</button>
                    <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => { setEditing(c.id); setEditTitle(c.title); }} aria-label={L('تغيير الاسم', 'Rename')}><Pencil className="h-3.5 w-3.5" /></Button>
                    <Button size="icon" variant="ghost" className="h-7 w-7 text-destructive" onClick={() => remove(c.id)} aria-label={L('حذف', 'Delete')}><Trash2 className="h-3.5 w-3.5" /></Button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </aside>

        <section className="space-y-4">
          {messages.length === 0 ? (
            <div className="motion-stagger grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SUGGESTIONS.map((s) => (
                <Button key={s.en} variant="outline" size="sm" className="h-auto min-h-12 whitespace-normal text-start" onClick={() => ask(L(s.ar, s.en))} disabled={loading}>
                  {L(s.ar, s.en)}
                </Button>
              ))}
            </div>
          ) : (
            <div aria-live="polite" aria-busy={loading} className="max-h-[460px] space-y-3 overflow-y-auto rounded-lg border border-border p-3">
              {messages.map((m, i) => (
                <div key={i} className={`motion-message break-words ${m.role === 'user' ? 'text-end' : 'text-start'}`}>
                  <div className={m.role === 'user' ? 'inline-block max-w-[90%] rounded-2xl bg-primary px-4 py-2 text-sm text-primary-foreground' : 'inline-block max-w-full whitespace-pre-wrap text-sm leading-relaxed text-foreground'}>
                    {m.content}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
          )}
          {loading && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />{L('جاري التفكير...', 'Thinking...')}
            </div>
          )}
          <div className="flex flex-col gap-2 sm:flex-row">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); ask(input); } }}
              placeholder={L('اكتب أي سؤال...', 'Type any question...')}
              rows={2}
              className="flex-1 resize-none"
              disabled={loading}
            />
            <Button onClick={() => ask(input)} disabled={loading} className="gap-2 sm:self-end">
              <Send className="h-4 w-4" />{L('إرسال', 'Send')}
            </Button>
          </div>
        </section>
      </CardContent>
    </Card>
  );
};
