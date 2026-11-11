import { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Trash2, Maximize2, Minimize2, Loader2, ImageIcon, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { announceAiResponse } from '@/lib/aiResponse';
import { getRegisteredUserName, getSiteCreatorReply } from '@/lib/siteIdentity';

interface Message {
  text: string;
  isBot: boolean;
  imageUrl?: string;
}

interface ChatRequest {
  message: string;
  history: Array<{ role: 'user' | 'assistant'; content: string }>;
  imageBase64?: string;
  imageType?: string;
}

const SUGGESTED_QUESTIONS = [
  'إزاي أستخدم خدمة شخصني؟',
  'فين ألاقي أرقام الطوارئ؟',
  'إزاي أبحث عن طبيب؟',
  'إيه الخدمات الموجودة في الموقع؟'
];

const STORAGE_KEY = 'es3efny_chat_history';
const GUEST_MSG_COUNT_KEY = 'es3efny_guest_msg_count';
const GUEST_MSG_LIMIT = 5;

type Point = { x: number; y: number };
type DragState = { pointerId: number; startX: number; startY: number; origin: Point; width: number; height: number; target: 'launcher' | 'chat' };

const TamennyCharacter = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M10 43c.7-8.2 5.2-12.4 14-12.4S37.3 34.8 38 43" fill="currentColor" opacity=".3" />
    <path d="M14 20.5c0-6 4.4-10.5 10-10.5s10 4.5 10 10.5v4c0 5.7-4.4 10-10 10s-10-4.3-10-10v-4Z" fill="white" />
    <path d="M13 19h22l-2.8-7H16l-3 7Z" fill="#FDE68A" />
    <path d="M20 24h.1m7.8 0h.1M21 28c1.7 1.8 4.3 1.8 6 0" stroke="#075985" strokeWidth="2" strokeLinecap="round" />
    <path d="M23 10V6h5v4m-2.5-2.5h-5" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 33v8m-4-4h8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".95" />
  </svg>
);

interface SiteGuideBotProps {
  onOpenChange?: (isOpen: boolean) => void;
}

export const SiteGuideBot = ({ onOpenChange }: SiteGuideBotProps = {}) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [launcherPosition, setLauncherPosition] = useState<Point | null>(null);
  const [chatPosition, setChatPosition] = useState<Point | null>(null);
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved) as Message[]; } catch (error) {
        console.warn('Could not restore the site guide conversation:', error);
        return [];
      }
    }
    return [{ text: 'أهلًا! أنا طمّني 😊 دليل إسعفني، وهساعدك تلاقي الخدمة المناسبة وتفهم تستخدمها إزاي.\n\nتحب تعرف عن أنهي جزء في الموقع؟ 🏥', isBot: true }];
  });
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ base64: string; type: string; preview: string } | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const dragRef = useRef<DragState | null>(null);
  const suppressLauncherClickRef = useRef(false);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const drag = dragRef.current;
      if (!drag || drag.pointerId !== event.pointerId) return;
      const width = Math.min(drag.width, window.innerWidth - 16);
      const height = Math.min(drag.height, window.innerHeight - 16);
      const next = {
        x: Math.max(8, Math.min(window.innerWidth - width - 8, drag.origin.x + event.clientX - drag.startX)),
        y: Math.max(8, Math.min(window.innerHeight - height - 8, drag.origin.y + event.clientY - drag.startY)),
      };
      if (drag.target === 'chat') setChatPosition(next);
      else {
        setLauncherPosition(next);
        if (Math.abs(event.clientX - drag.startX) > 4 || Math.abs(event.clientY - drag.startY) > 4) {
          suppressLauncherClickRef.current = true;
        }
      }
    };
    const handlePointerUp = (event: PointerEvent) => {
      if (dragRef.current?.pointerId === event.pointerId) dragRef.current = null;
    };
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, []);

  useEffect(() => {
    const keepLauncherInView = () => {
      const width = window.innerWidth < 640 ? 56 : 180;
      const height = 64;
      setLauncherPosition((position) => position && ({
        x: Math.max(8, Math.min(window.innerWidth - width - 8, position.x)),
        y: Math.max(8, Math.min(window.innerHeight - height - 8, position.y)),
      }));
    };
    window.addEventListener('resize', keepLauncherInView);
    return () => window.removeEventListener('resize', keepLauncherInView);
  }, []);

  const startDrag = (event: React.PointerEvent<HTMLElement>, target: DragState['target']) => {
    if (isFullScreen) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const fallback = { x: rect.left, y: rect.top };
    const origin = target === 'chat' ? (chatPosition ?? fallback) : (launcherPosition ?? fallback);
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      origin,
      width: rect.width,
      height: rect.height,
      target,
    };
  };

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => { scrollToBottom(); }, [messages]);
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(messages)); } catch (error) {
      console.warn('Could not save the site guide conversation:', error);
    }
  }, [messages]);
  useEffect(() => { onOpenChange?.(isOpen); }, [isOpen, onOpenChange]);

  const getGuestMessageCount = (): number => {
    try { return parseInt(localStorage.getItem(GUEST_MSG_COUNT_KEY) || '0', 10); } catch { return 0; }
  };

  const incrementGuestMessageCount = () => {
    const current = getGuestMessageCount();
    localStorage.setItem(GUEST_MSG_COUNT_KEY, String(current + 1));
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast({ title: "خطأ", description: "حجم الصورة يجب أن يكون أقل من 5 ميجابايت", variant: "destructive" });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.split(',')[1];
      setSelectedImage({ base64, type: file.type, preview: result });
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if ((!textToSend.trim() && !selectedImage) || isProcessing) return;

    const userMessage: Message = {
      text: textToSend || (selectedImage ? '📷 صورة مرفقة' : ''),
      isBot: false,
      imageUrl: selectedImage?.preview
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    const currentImage = selectedImage;
    setSelectedImage(null);
    setIsProcessing(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      const isGuest = !session?.access_token;

      if (isGuest) {
        const guestCount = getGuestMessageCount();
        if (guestCount >= GUEST_MSG_LIMIT) {
          const botMessage: Message = {
            text: `لقد استخدمت ${GUEST_MSG_LIMIT} رسائل مجانية. سجل دخولك للحصول على رسائل غير محدودة! 🔐\n\nيمكنك التسجيل من خلال زر "تسجيل الدخول" في أعلى الصفحة.`,
            isBot: true
          };
          setMessages(prev => [...prev, botMessage]);
          setIsProcessing(false);
          return;
        }
      }

      let creatorReply = getSiteCreatorReply(textToSend);
      if (creatorReply) {
        creatorReply = getSiteCreatorReply(
          textToSend,
          await getRegisteredUserName(session?.user ?? null),
        ) ?? creatorReply;
      }
      if (creatorReply) {
        setMessages(prev => [...prev, { text: creatorReply, isBot: true }]);
        announceAiResponse(creatorReply);
        if (isGuest) incrementGuestMessageCount();
        return;
      }

      const conversationHistory: ChatRequest['history'] = messages.slice(-10).map(m => ({
        role: m.isBot ? 'assistant' : 'user',
        content: m.text
      }));

      const body: ChatRequest = {
        message: textToSend || (currentImage ? "ما هذا؟ اشرح لي هذه الصورة من الناحية الطبية." : ''),
        history: conversationHistory
      };

      if (currentImage) {
        body.imageBase64 = currentImage.base64;
        body.imageType = currentImage.type;
      }

      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      if (session?.access_token) {
        headers['Authorization'] = `Bearer ${session.access_token}`;
      }

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-chat`,
        {
          method: 'POST',
          headers: {
            ...headers,
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'حدث خطأ في الاتصال');
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      const botResponse = data?.response || 'عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.';
      const botMessage: Message = { text: botResponse, isBot: true };
      setMessages(prev => [...prev, botMessage]);
      announceAiResponse(botResponse);

      if (isGuest) incrementGuestMessageCount();
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'حدث خطأ غير متوقع';
      toast({ title: "خطأ", description: errorMessage, variant: "destructive" });
      const botMessage: Message = { text: 'عذراً، حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.', isBot: true };
      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearHistory = () => {
    const initialMessage: Message = { text: 'أهلًا! أنا طمّني 😊 دليل إسعفني، وهساعدك تلاقي الخدمة المناسبة وتفهم تستخدمها إزاي.\n\nتحب تعرف عن أنهي جزء في الموقع؟ 🏥', isBot: true };
    setMessages([initialMessage]);
    try { localStorage.removeItem(STORAGE_KEY); } catch (error) {
      console.warn('Could not clear the saved site guide conversation:', error);
    }
    toast({ title: "تم مسح المحادثة", description: "تم حذف سجل المحادثة من هذا الجهاز" });
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsFullScreen(false);
    setLauncherPosition(null);
    setChatPosition(null);
  };

  return (
    <>
      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageSelect}
        className="hidden"
      />

      {/* Floating Button */}
      {!isOpen && (
        <>
          <Button
            onPointerDown={(event) => startDrag(event, 'launcher')}
            onClick={() => {
              if (suppressLauncherClickRef.current) {
                suppressLauncherClickRef.current = false;
                return;
              }
              const rect = document.getElementById('site-guide-launcher')?.getBoundingClientRect();
              if (rect) setChatPosition({ x: Math.max(8, Math.min(window.innerWidth - 336, rect.left)), y: Math.max(8, Math.min(window.innerHeight - 476, rect.top - 420)) });
              setIsOpen(true);
            }}
            id="site-guide-launcher"
            aria-label="افتح المحادثة مع طمّني"
            aria-expanded={isOpen}
            aria-controls="site-guide-chat"
            className="tamenny-launcher fixed z-40 h-14 w-14 touch-none cursor-grab rounded-full border border-primary-foreground/20 bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.7)] transition-[box-shadow,scale] duration-300 hover:scale-105 hover:shadow-[0_12px_36px_-8px_hsl(var(--primary)/0.8)] focus-visible:ring-4 focus-visible:ring-primary/30 active:cursor-grabbing sm:w-auto sm:gap-3 sm:px-5"
            style={launcherPosition
              ? { left: launcherPosition.x, top: launcherPosition.y }
              : { right: 'max(1rem, env(safe-area-inset-right))', bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
          >
            <TamennyCharacter className="tamenny-character h-8 w-8" />
            <span className="hidden sm:inline">اسأل طمّني</span>
          </Button>
        </>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card id="site-guide-chat" className={`fixed z-[60] flex flex-col overflow-hidden border border-primary/20 shadow-xl transition-all duration-300 ease-in-out
          ${isFullScreen
            ? 'inset-0 rounded-none'
            : 'rounded-xl sm:w-80 sm:h-[420px]'
          }
        `} style={!isFullScreen
          ? chatPosition
            ? { left: chatPosition.x, top: chatPosition.y, width: 'min(320px, calc(100vw - 32px))', height: 'min(420px, calc(100vh - 32px))' }
            : { top: 'max(5rem, env(safe-area-inset-top))', right: 16, height: 'min(420px, calc(100vh - max(5rem, env(safe-area-inset-top)) - 1rem))', width: 'min(320px, calc(100vw - 32px))' }
          : undefined}>
          {/* Header */}
          <div
            onPointerDown={(event) => startDrag(event, 'chat')}
            className={`flex touch-none items-center justify-between border-b bg-gradient-to-r from-primary to-accent px-3 py-2 text-primary-foreground ${isFullScreen ? '' : 'cursor-grab active:cursor-grabbing'}`}
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <TamennyCharacter className="tamenny-character h-7 w-7" />
                <Sparkles className="h-2 w-2 absolute -top-1 -right-1 text-yellow-300" />
              </div>
              <span className="font-semibold text-sm">طمنّي</span>
            </div>
            <div className="flex items-center gap-0.5">
              <Button variant="ghost" size="icon" onPointerDown={(event) => event.stopPropagation()} onClick={() => setIsFullScreen(!isFullScreen)} className="h-7 w-7 hover:bg-primary-foreground/20 text-primary-foreground" title={isFullScreen ? "تصغير" : "ملء الشاشة"}>
                {isFullScreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
              </Button>
              <Button variant="ghost" size="icon" onPointerDown={(event) => event.stopPropagation()} onClick={clearHistory} className="h-7 w-7 hover:bg-primary-foreground/20 text-primary-foreground" title="مسح المحادثة">
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
              <Button variant="ghost" size="sm" onPointerDown={(event) => event.stopPropagation()} onClick={closeChat} className="h-7 gap-1 px-2 text-xs hover:bg-primary-foreground/20 text-primary-foreground" title="إخفاء">
                <EyeOff className="h-3.5 w-3.5" />
                <span>إخفاء</span>
              </Button>
              <Button variant="ghost" size="icon" onPointerDown={(event) => event.stopPropagation()} onClick={closeChat} className="h-7 w-7 hover:bg-primary-foreground/20 text-primary-foreground" title="إغلاق">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gradient-to-b from-background to-accent/5">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-xl shadow-sm ${
                    message.isBot
                      ? 'bg-card text-card-foreground rounded-tr-sm border border-border/50'
                      : 'bg-primary text-primary-foreground rounded-tl-sm'
                  }`}
                >
                  {message.imageUrl && (
                    <img src={message.imageUrl} alt="مرفق" className="max-w-full rounded-lg mb-1.5 max-h-32 object-cover" />
                  )}
                  <p className="text-xs whitespace-pre-wrap leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            {isProcessing && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-xl rounded-tr-sm bg-card border border-border/50 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-[10px] text-muted-foreground">يفكر...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Image Preview */}
          {selectedImage && (
            <div className="px-2 py-1.5 border-t bg-accent/10 flex items-center gap-2">
              <img src={selectedImage.preview} alt="معاينة" className="h-10 w-10 rounded object-cover" />
              <span className="text-xs text-muted-foreground flex-1">صورة مرفقة</span>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setSelectedImage(null)}>
                <X className="h-3 w-3" />
              </Button>
            </div>
          )}

          {/* Suggested Questions */}
          <div className="px-2 py-1.5 border-t bg-accent/5">
            <div className="flex flex-wrap gap-1 max-h-12 overflow-y-auto">
              {SUGGESTED_QUESTIONS.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(question)}
                  disabled={isProcessing}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors disabled:opacity-50"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-2 border-t bg-card">
            <div className="flex gap-1.5">
              <Button
                onClick={() => imageInputRef.current?.click()}
                size="icon"
                variant="outline"
                className="rounded-full h-8 w-8 shrink-0"
                disabled={isProcessing}
                title="إرسال صورة"
              >
                <ImageIcon className="h-3.5 w-3.5" />
              </Button>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="اكتب رسالتك..."
                className="flex-1 rounded-full h-8 text-xs"
                disabled={isProcessing}
              />
              <Button
                onClick={() => handleSend()}
                size="icon"
                className="rounded-full h-8 w-8 shrink-0"
                disabled={isProcessing || (!input.trim() && !selectedImage)}
              >
                {isProcessing ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};
