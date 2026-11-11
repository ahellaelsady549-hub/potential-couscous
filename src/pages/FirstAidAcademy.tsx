import { useEffect, useMemo, useRef, useState, type UIEvent } from 'react';
import { BookOpen, CheckCircle2, ChevronLeft, CircleHelp, Flame, HeartPulse, LockKeyhole, Medal, Search, Trophy } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { MedicalSourceLinks } from '@/components/MedicalSourceLinks';
import { useLanguage } from '@/contexts/LanguageContext';
import { allFirstAidLessons } from '@/data/firstAidPracticeLessons';
import { normalizeSearchText } from '@/lib/search';
import { useFirstAidProgress } from '@/hooks/useFirstAidProgress';
import { useAuth } from '@/contexts/AuthContext';

const PASSING_SCORE = 2;
const quizQuestionIndexes = [0, 1, 2];

// Deterministic shuffle using lessonId + questionIndex as seed
const shuffleArray = <T,>(array: T[], seed: number): T[] => {
  const result = [...array];
  let s = seed;
  for (let i = result.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) % 4294967296; // LCG
    const j = Math.floor((s / 4294967296) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

// Generate quiz options from across the entire lesson for better coverage
// Returns { options: Array<{stepIndex: number}>, correctStepIndex: number }
const getQuizOptions = (lessonId: number, questionIndex: number, stepCount: number) => {
  // Distribute questions across the lesson: early, middle, late
  const distributionPoints = [
    Math.floor(stepCount * 0.25),  // Early (25%)
    Math.floor(stepCount * 0.5),   // Middle (50%)
    Math.floor(stepCount * 0.75),  // Late (75%)
  ];
  
  // For each question, pick the correct answer from the distribution point
  const correctStepIndex = Math.min(distributionPoints[questionIndex] || questionIndex, stepCount - 1);
  
  // Generate 4 options: 1 correct + 3 distractors from nearby
  const options = [correctStepIndex];
  const maxDistractors = 3;
  
  // Add nearby steps as distractors
  for (let offset = 1; offset <= maxDistractors && options.length < 4; offset++) {
    const before = correctStepIndex - offset;
    const after = correctStepIndex + offset;
    if (before >= 0 && !options.includes(before)) options.push(before);
    if (after < stepCount && !options.includes(after) && options.length < 4) options.push(after);
  }
  
  // If still need more, add steps from distribution points
  for (const dp of distributionPoints) {
    if (options.length >= 4) break;
    const idx = Math.min(dp, stepCount - 1);
    if (!options.includes(idx)) options.push(idx);
  }
  
  // Deterministic shuffle based on lessonId + questionIndex
  const seed = lessonId * 100 + questionIndex * 7 + 12345;
  const shuffled = shuffleArray(options.map((stepIndex, i) => ({ stepIndex, isCorrect: i === 0 })), seed);
  
  return { options: shuffled, correctStepIndex: shuffled.findIndex(o => o.isCorrect) };
};

const FirstAidIllustration = ({ stepNumber, stepLabel, illustration }: {
  stepNumber: number;
  stepLabel: string;
  illustration: 'home' | 'school' | 'public' | 'work' | 'outdoors';
}) => (
  <div className={`first-aid-scene first-aid-scene-${illustration} mx-auto flex w-full max-w-[19rem] items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-4`} aria-hidden="true">
    <svg viewBox="0 0 280 180" className="h-auto w-full max-w-[17rem]" fill="none">
      <circle cx="140" cy="90" r="72" fill="hsl(var(--primary) / .08)" />
      <circle className="first-aid-scene-sparkle" cx="48" cy="39" r="5" fill="hsl(var(--secondary))" />
      <path d="M37 121h206" stroke="hsl(var(--border))" strokeWidth="4" strokeLinecap="round" />
      <g className="first-aid-helper">
        <path d="M71 145c2-29 12-45 33-45s31 16 33 45" fill="hsl(var(--primary))" />
        <path d="M88 64c0-15 8-25 21-25s21 10 21 25v8c0 15-8 25-21 25S88 87 88 72v-8Z" fill="#F5C9A8" />
        <path d="M86 63c1-19 10-29 24-29 12 0 20 9 21 24-8-2-14-7-17-13-6 7-16 12-28 13" fill="hsl(var(--primary))" />
        <path d="M101 68h.1m17 0h.1m-13 9c3 3 7 3 10 0" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M104 101v13m-7-6.5h14" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g className="first-aid-patient">
        <path d="M151 145c2-25 11-39 29-39s27 14 29 39" fill="hsl(var(--secondary))" />
        <path d="M163 73c0-13 7-22 18-22s18 9 18 22v7c0 13-7 22-18 22s-18-9-18-22v-7Z" fill="#E8B99A" />
        <path d="M161 72c2-15 9-24 21-24 11 0 18 8 19 21-13 1-24-4-31-12l-9 15" fill="#475569" />
        <path d="M170 76h.1m17 0h.1m-12 8c2.5 2 5.5 2 8 0" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <g className="first-aid-kit">
        <rect x="114" y="126" width="44" height="31" rx="6" fill="white" stroke="hsl(var(--primary))" strokeWidth="3" />
        <path d="M127 126v-6a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v6m-14 14h12m-6-6v12" stroke="hsl(var(--emergency))" strokeWidth="3" strokeLinecap="round" />
      </g>
      <path className="first-aid-heart" d="M140 47c-6-6-16 3 0 15 16-12 6-21 0-15Z" fill="hsl(var(--emergency))" />
      {illustration === 'home' && (
        <g className="first-aid-scene-object">
          <path d="m219 66 15-13 15 13v18h-30V66Z" fill="hsl(var(--secondary) / .2)" stroke="hsl(var(--secondary))" strokeWidth="2" />
          <path d="M230 84V72h9v12m-5-23v5m-2.5-2.5h5" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
        </g>
      )}
      {illustration === 'school' && (
        <g className="first-aid-scene-object">
          <path d="M218 61h14c4 0 7 3 7 7v17h-14c-4 0-7-3-7-7V61Zm21 7c0-4 3-7 7-7h4v24h-11" fill="hsl(var(--primary) / .12)" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinejoin="round" />
          <path d="M223 68h8m-8 5h8" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
        </g>
      )}
      {illustration === 'public' && (
        <g className="first-aid-scene-object">
          <rect x="225" y="52" width="21" height="34" rx="4" fill="white" stroke="hsl(var(--primary))" strokeWidth="2" />
          <path d="M232 80h7m-2-22v7m-3.5-3.5h7" stroke="hsl(var(--emergency))" strokeWidth="2" strokeLinecap="round" />
        </g>
      )}
      {illustration === 'work' && (
        <g className="first-aid-scene-object">
          <path d="M218 65h33v22h-33V65Zm9 0v-5h15v5m-24 8h33" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinejoin="round" />
          <path d="M234 69v9m-4.5-4.5h9" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
        </g>
      )}
      {illustration === 'outdoors' && (
        <g className="first-aid-scene-object">
          <circle cx="235" cy="68" r="9" fill="#FDE68A" />
          <path d="M235 51v5m0 24v5m17-17h-5m-24 0h-5m29-12-4 4m-16 16-4 4m24 0-4-4m-16-16-4-4" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" />
        </g>
      )}
      <text x="140" y="174" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">
        {`${stepLabel} ${stepNumber}`}
      </text>
    </svg>
  </div>
);

const FirstAidAcademy = () => {
  const { L, language } = useLanguage();
  const { user } = useAuth();
  const { progress, leaderboard, syncStatus, completeLesson, setProgress } = useFirstAidProgress();
  const [activeLessonId, setActiveLessonId] = useState(allFirstAidLessons[0]?.id ?? 0);
  const [search, setSearch] = useState('');
  const [stepIndex, setStepIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [lessonRead, setLessonRead] = useState(false);
  const [revealedStep, setRevealedStep] = useState(0);
  const [quizKey, setQuizKey] = useState(0);
  const [navigateToNextLesson, setNavigateToNextLesson] = useState(false);
  const lessonScrollRef = useRef<HTMLDivElement>(null);

  // Handle navigation to next lesson after progress update
  useEffect(() => {
    if (navigateToNextLesson) {
      setNavigateToNextLesson(false);
      nextLesson();
    }
  }, [navigateToNextLesson]);

  const activeLesson = allFirstAidLessons.find((tip) => tip.id === activeLessonId) ?? allFirstAidLessons[0];
  const lessonTitle = activeLesson ? (language === 'ar' ? activeLesson.titleAr : activeLesson.titleEn) : '';
  const lessonDescription = activeLesson ? (language === 'ar' ? activeLesson.descriptionAr : activeLesson.descriptionEn) : '';
  const lessonSteps = activeLesson ? (language === 'ar' ? activeLesson.stepsAr : activeLesson.stepsEn) : [];
  
  // Calculate correct answers using the same logic as getQuizOptions
  const correctAnswers = quizQuestionIndexes.filter((questionIndex) => {
    const { correctStepIndex } = getQuizOptions(activeLessonId, questionIndex, lessonSteps.length);
    return answers[questionIndex] === correctStepIndex;
  }).length;
  const passedQuiz = quizSubmitted && correctAnswers >= PASSING_SCORE;
  const topLearners = leaderboard.slice(0, 5);
  const currentLearner = leaderboard.find((learner) => learner.isCurrentUser);
  const displayedLeaderboard = currentLearner && !topLearners.some((learner) => learner.isCurrentUser)
    ? [...topLearners, currentLearner]
    : leaderboard.slice(0, 6);
  const filteredLessons = useMemo(() => {
    const query = normalizeSearchText(search.trim());
    if (!query) return allFirstAidLessons;
    return allFirstAidLessons.filter((tip) =>
      normalizeSearchText(`${tip.titleAr} ${tip.titleEn} ${tip.descriptionAr} ${tip.descriptionEn}`).includes(query),
    );
  }, [search]);

  const startLesson = (lessonId: number, force = false) => {
    const targetIndex = allFirstAidLessons.findIndex((tip) => tip.id === lessonId);
    const firstIncompleteIndex = allFirstAidLessons.findIndex((tip) => !progress.completedLessonIds.includes(tip.id));
    if (targetIndex < 0 || (!force && firstIncompleteIndex >= 0 && targetIndex > firstIncompleteIndex)) return;
    setActiveLessonId(lessonId);
    setStepIndex(0);
    setQuizStarted(false);
    setAnswers({});
    setQuizSubmitted(false);
    setLessonRead(false);
    setRevealedStep(0);
    setQuizKey(0);
  };

  useEffect(() => {
    if (quizStarted || !lessonScrollRef.current) return;
    const container = lessonScrollRef.current;
    container.scrollTop = 0;
    const frame = window.requestAnimationFrame(() => {
      setLessonRead(container.scrollHeight <= container.clientHeight + 1);
    });
    setRevealedStep(0);
    // Reset all to pending on new lesson
    container.querySelectorAll<HTMLElement>('[data-chat-reveal]').forEach(el => {
      el.setAttribute('data-chat-reveal', 'pending');
    });
    return () => window.cancelAnimationFrame(frame);
  }, [activeLessonId, quizStarted]);

  // IntersectionObserver for progressive reveal
  useEffect(() => {
    const container = lessonScrollRef.current;
    if (!container || quizStarted) return;

    const messages = container.querySelectorAll<HTMLElement>('[data-chat-reveal]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      messages.forEach((message) => message.setAttribute('data-chat-reveal', 'visible'));
      setRevealedStep(messages.length);
      return;
    }

    let observer: IntersectionObserver | null = null;
    let initialized = false;

    const initObserver = () => {
      if (initialized) return;
      initialized = true;
      
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const stepIndex = Number(entry.target.dataset.lessonStep);
          // Reveal sequentially - only reveal the next step
          if (stepIndex === revealedStep) {
            entry.target.setAttribute('data-chat-reveal', 'visible');
            setRevealedStep((prev) => prev + 1);
            observer?.unobserve(entry.target);
            // Observe the next pending element
            const nextEl = container.querySelector<HTMLElement>(`[data-lesson-step="${revealedStep + 1}"][data-chat-reveal="pending"]`);
            if (nextEl) observer?.observe(nextEl);
          }
        });
      }, { 
        root: container, 
        threshold: 0.3, 
        rootMargin: '0px 0px -20% 0px' 
      });

      // Only observe the first pending element initially
      const firstPending = container.querySelector<HTMLElement>('[data-chat-reveal="pending"]');
      if (firstPending) observer?.observe(firstPending);
    };

    // Delay initialization to let DOM settle and scroll position stabilize
    const timer = setTimeout(initObserver, 100);
    
    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [activeLessonId, quizStarted, revealedStep]);

  // Track scroll position for lessonRead and stepIndex
  const updateStepFromScroll = (event: UIEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    // Check if reached bottom
    if (container.scrollTop + container.clientHeight >= container.scrollHeight - 8) {
      setLessonRead(true);
    }
    // Update current step based on center of viewport
    const center = container.getBoundingClientRect().top + container.clientHeight / 2;
    const steps = container.querySelectorAll<HTMLElement>('[data-lesson-step]');
    let nearestStep = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;
    steps.forEach((step) => {
      const rect = step.getBoundingClientRect();
      const distance = Math.abs(rect.top + rect.height / 2 - center);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestStep = Number(step.dataset.lessonStep);
      }
    });
    setStepIndex(nearestStep);
  };

  const startQuiz = () => {
    if (!lessonRead) return;
    setAnswers({});
    setQuizSubmitted(false);
    setQuizStarted(true);
    // Force re-render of quiz content
    setQuizKey((prev) => prev + 1);
  };

  const submitQuiz = () => {
    setQuizSubmitted(true);
    if (correctAnswers >= PASSING_SCORE) {
      // Optimistically update progress so next lesson unlocks immediately
      setProgress((prev) => ({
        ...prev,
        completedLessonIds: [...new Set([...prev.completedLessonIds, activeLessonId])],
      }));
      void completeLesson(activeLessonId);

      // Go straight to the next lesson (force = bypass the lock check)
      const currentIndex = allFirstAidLessons.findIndex((tip) => tip.id === activeLessonId);
      const next = allFirstAidLessons[currentIndex + 1];
      if (next) {
        startLesson(next.id, true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const nextLesson = () => {
    const currentIndex = allFirstAidLessons.findIndex((tip) => tip.id === activeLessonId);
    if (currentIndex < 0) {
      console.warn('nextLesson: current lesson not found in allFirstAidLessons');
      return;
    }
    const next = allFirstAidLessons[currentIndex + 1];
    if (!next) {
      console.warn('nextLesson: no next lesson available');
      return;
    }
    startLesson(next.id, true);
  };

  const completedLessons = new Set(progress.completedLessonIds);
  const firstIncompleteIndex = allFirstAidLessons.findIndex((tip) => !completedLessons.has(tip.id));
  const isLessonUnlocked = (lessonId: number) => {
    const index = allFirstAidLessons.findIndex((tip) => tip.id === lessonId);
    return index >= 0 && (firstIncompleteIndex < 0 || index <= firstIncompleteIndex);
  };
  const nextLessonInSequence = allFirstAidLessons[allFirstAidLessons.findIndex((tip) => tip.id === activeLessonId) + 1];
  const isQuizPassed = completedLessons.has(activeLessonId);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-6xl px-4 py-8 route-content">
        <header className="mb-8 rounded-2xl bg-gradient-medical p-6 text-white md:p-10">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
            <HeartPulse className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="mb-2 text-sm font-semibold text-white/80">
            {L('تعلّم بالممارسة', 'Learn by doing')}
          </p>
          <h1 className="text-3xl font-bold md:text-4xl">
            {L('أكاديمية الإسعافات الأولية', 'First-aid Academy')}
          </h1>
          <p className="mt-3 max-w-3xl leading-7 text-white/85">
            {L(
              `تعلّم ${allFirstAidLessons.length} درسًا وتمرينًا تفاعليًا من مصادر طبية موثوقة، خطوة بخطوة، واختبر معلوماتك بعد كل درس.`,
              `Learn ${allFirstAidLessons.length} interactive lessons and practice scenarios, based on trusted medical sources, then take a quiz after each one.`,
            )}
          </p>
          <div className="mt-6 max-w-xl">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span>{L('تقدمك في الدورة', 'Your course progress')}</span>
              <span>{completedLessons.size} / {allFirstAidLessons.length}</span>
            </div>
            <Progress
              value={(completedLessons.size / allFirstAidLessons.length) * 100}
              aria-label={L('التقدم في الدورة', 'Course progress')}
              className="h-3 bg-white/25 [&>div]:bg-white"
            />
          </div>
        </header>

        <section aria-label={L('إنجازات التعلم', 'Learning achievements')} className="mb-6 grid gap-3 sm:grid-cols-3">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-amber-500/10 p-2 text-amber-600"><Medal className="h-5 w-5" /></span>
              <div><p className="text-sm text-muted-foreground">{L('نقاطك', 'Your points')}</p><p className="text-xl font-bold">{progress.points}</p></div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-orange-500/10 p-2 text-orange-600"><Flame className="h-5 w-5" /></span>
              <div><p className="text-sm text-muted-foreground">{L('سلسلة أيام التعلّم', 'Learning streak')}</p><p className="text-xl font-bold">{progress.streak} {L('يوم', 'days')}</p></div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary/10 p-2 text-primary"><CheckCircle2 className="h-5 w-5" /></span>
              <div><p className="text-sm text-muted-foreground">{L('دروس مكتملة', 'Lessons completed')}</p><p className="text-xl font-bold">{completedLessons.size}</p></div>
            </div>
          </Card>
        </section>

        {user && syncStatus === 'local' && (
          <p role="status" className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-6">
            {L(
              'تقدمك ونقاطك محفوظة على هذا الجهاز حاليًا، وستُزامَن عند عودة الاتصال بالخادم. قد لا يظهر ترتيبك على بقية الأجهزة قبل المزامنة.',
              'Your progress and points are saved on this device for now and will sync when the server is available. Your leaderboard rank may not appear on other devices until then.',
            )}
          </p>
        )}

        <Card className="mb-6 p-5">
          <div className="mb-4 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <h2 className="text-lg font-bold">{L('ترتيب المتعلمين', 'Learner leaderboard')}</h2>
          </div>
          {user ? (
            leaderboard.length ? (
              <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {displayedLeaderboard.map((learner) => (
                  <li key={`${learner.rank}-${learner.learnerLabel}`} className={`flex items-center justify-between gap-3 rounded-lg border p-3 ${learner.isCurrentUser ? 'border-primary bg-primary/5' : 'border-border'}`}>
                    <span className="flex min-w-0 items-center gap-2">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold">{learner.rank}</span>
                      <span className="truncate font-medium">{learner.learnerLabel}{learner.isCurrentUser ? ` (${L('أنت', 'you')})` : ''}</span>
                    </span>
                    <span className="shrink-0 text-sm font-semibold text-primary">{learner.points} {L('نقطة', 'pts')}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-sm text-muted-foreground">{L('ابدأ أول درس لتظهر في الترتيب.', 'Complete your first lesson to appear on the leaderboard.')}</p>
            )
          ) : (
            <p className="text-sm text-muted-foreground">
              {L('إنجازاتك محفوظة على هذا الجهاز. سجّل الدخول للمشاركة في ترتيب المتعلمين بين الأجهزة.', 'Your progress is saved on this device. Sign in to join the cross-device learner leaderboard.')}
              <a href="/auth" className="ms-2 font-semibold text-primary underline">{L('تسجيل الدخول', 'Sign in')}</a>
            </p>
          )}
          <p className="mt-3 text-xs text-muted-foreground">
            {L('تحصل على 10 نقاط عند اجتياز اختبار الدرس. الأسماء في الترتيب مستعارة لحماية الخصوصية.', 'Earn 10 points for each passed lesson quiz. Leaderboard names are pseudonyms to protect privacy.')}
          </p>
        </Card>

        <div className="mb-6 rounded-xl border border-emergency/30 bg-emergency/5 p-4">
          <p className="text-sm leading-6">
            {L(
              'المحتوى للتوعية والتعلّم ولا يغني عن التدريب المعتمد أو توجيهات الطوارئ. في الحالات الخطيرة اتصل بالإسعاف 123 فورًا.',
              'This content is for education and does not replace certified training or emergency instructions. In a serious emergency, call 123 immediately.',
            )}
          </p>
          <a className="mt-2 inline-flex font-semibold text-emergency underline" href="tel:123">
            {L('اتصل بالإسعاف 123', 'Call ambulance 123')}
          </a>
        </div>

        {activeLesson ? (
          <section aria-labelledby="active-lesson-title" className="mb-12">
            <Card className="overflow-hidden shadow-card">
              <CardContent className="p-5 md:p-8">
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-primary">
                      {L(`الدرس ${allFirstAidLessons.findIndex((tip) => tip.id === activeLessonId) + 1} من ${allFirstAidLessons.length}`, `Lesson ${allFirstAidLessons.findIndex((tip) => tip.id === activeLessonId) + 1} of ${allFirstAidLessons.length}`)}
                    </p>
                    <h2 id="active-lesson-title" className="text-2xl font-bold">{lessonTitle}</h2>
                    <p className="mt-2 text-muted-foreground">{lessonDescription}</p>
                  </div>
                  {isQuizPassed && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                      {L('مكتمل', 'Completed')}
                    </span>
                  )}
                </div>

                {!quizStarted ? (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{L(`خطوة ${stepIndex + 1} من ${lessonSteps.length}`, `Step ${stepIndex + 1} of ${lessonSteps.length}`)}</span>
                      <span>{Math.round(((stepIndex + 1) / Math.max(lessonSteps.length, 1)) * 100)}%</span>
                    </div>
                    <Progress value={((stepIndex + 1) / Math.max(lessonSteps.length, 1)) * 100} className="h-2" />
                    <div
                      ref={lessonScrollRef}
                      key={activeLessonId}
                      onScroll={updateStepFromScroll}
                      className="first-aid-chat-scroll max-h-[36rem] space-y-4 overflow-y-auto overscroll-contain rounded-xl border border-border p-3 md:p-4"
                      aria-label={L('محادثة الدرس، مرّر لقراءة الخطوات التالية', 'Lesson conversation, scroll to read the next steps')}
                    >
                      {lessonSteps.map((step, index) => (
                        <article
                          key={`${activeLessonId}-${index}`}
                          data-lesson-step={index}
                          data-chat-reveal="pending"
                          className="space-y-3 border-b border-border/60 px-1 py-4 last:border-b-0"
                        >
                            <div className="first-aid-dialogue first-aid-dialogue-patient">
                              <span className="first-aid-speaker first-aid-speaker-patient" aria-hidden="true">
                                <svg viewBox="0 0 40 40" fill="none">
                                  <circle cx="20" cy="20" r="20" fill="#F5C9A8" />
                                  <path d="M7 38c1-8 5-12 13-12s12 4 13 12" fill="#64748B" />
                                  <path d="M10 17c0-8 4-12 10-12s10 4 10 12v4c0 7-4 11-10 11s-10-4-10-11v-4Z" fill="#E8B99A" />
                                  <path d="M9 17C10 8 14 4 21 4c6 0 10 4 11 12-8 0-13-3-17-7l-6 8" fill="#475569" />
                                  <path d="M16 20h.1m8 0h.1m-6 4c1.3 1 2.7 1 4 0" stroke="#334155" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                              </span>
                              <div>
                                <p className="mb-1 text-xs font-bold text-muted-foreground">{L('المصاب', 'Patient')}</p>
                                <p className="rounded-2xl rounded-es-sm bg-card px-4 py-3 text-sm leading-6 shadow-sm">
                                  {index === 0
                                    ? activeLesson.scenario
                                      ? L(activeLesson.scenario.patientPromptAr, activeLesson.scenario.patientPromptEn)
                                      : L(`أنا مش عارف أتصرف في ${lessonTitle}.. نبدأ بإيه؟`, `I'm not sure what to do about ${lessonTitle}. What's the first step?`)
                                    : L(`تمام، فهمت الخطوة ${index}.. أعمل إيه دلوقتي؟`, `Okay, I understand step ${index}. What should I do now?`)}
                                </p>
                              </div>
                            </div>
                            <div className="first-aid-dialogue first-aid-dialogue-helper">
                              <span className="first-aid-speaker first-aid-speaker-helper" aria-hidden="true">
                                <svg viewBox="0 0 40 40" fill="none">
                                  <circle cx="20" cy="20" r="20" fill="#BAE6FD" />
                                  <path d="M6 38c1-8 6-12 14-12s13 4 14 12" fill="#0284C7" />
                                  <path d="M10 17c0-8 4-12 10-12s10 4 10 12v4c0 7-4 11-10 11s-10-4-10-11v-4Z" fill="#F5C9A8" />
                                  <path d="M8 16c1-9 5-13 12-13 6 0 11 4 12 12-8 0-13-3-16-8l-8 9" fill="#0C4A6E" />
                                  <path d="M16 20h.1m8 0h.1m-6 4c1.3 1 2.7 1 4 0" stroke="#334155" strokeWidth="1.8" strokeLinecap="round" />
                                  <path d="M17 27h6m-3-3v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                              </span>
                              <div>
                                <p className="mb-1 text-xs font-bold text-primary">{L('المُسعف', 'First-aider')}</p>
                                <p className="rounded-2xl rounded-ee-sm bg-primary px-4 py-3 text-sm font-medium leading-6 text-primary-foreground shadow-sm">
                                  <span className="me-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-foreground/20 text-xs font-bold">
                                    {index + 1}
                                  </span>
                                  {index === 0
                                    ? L('خلّينا ناخدها خطوة خطوة. أول حاجة: ', 'Let’s take it one step at a time. First: ')
                                    : L('كويس، الخطوة اللي بعدها: ', 'Good. The next step: ')}
                                  {step}
                                </p>
                              </div>
                            </div>
                        </article>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button onClick={startQuiz} disabled={!lessonRead} className="gap-2">
                        <CircleHelp className="h-4 w-4" />
                        {L('قرأت وفهمت، ابدأ الاختبار', 'I have read and understood — start the quiz')}
                      </Button>
                      {!lessonRead && (
                        <p className="text-sm text-muted-foreground" aria-live="polite">
                          {L('مرّر لآخر المحادثة لفتح الاختبار.', 'Scroll to the end of the conversation to unlock the quiz.')}
                        </p>
                      )}
                    </div>
                    <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-4">
                      <p className="mb-1 font-bold text-secondary">{L('واجبك بعد الدرس', 'Your lesson assignment')}</p>
                      <p className="text-sm leading-6">
                        {activeLesson.scenario
                          ? L(activeLesson.scenario.assignmentAr, activeLesson.scenario.assignmentEn)
                          : L(
                            `مهمتك: راجع خطوات «${lessonTitle}» واشرحها لشخص آخر بترتيبها. تدرب بالكلام فقط، ولا تطبق خطوات إسعاف على شخص حقيقي دون تدريب مناسب.`,
                            `Your task: review the steps for “${lessonTitle}” and explain them in order to someone else. Practise by talking only; do not perform first-aid procedures on a real person without suitable training.`,
                          )}
                      </p>
                    </div>
                    <MedicalSourceLinks sources={activeLesson.sources} />
                  </div>
                ) : (
                  <div key={quizKey} className="space-y-5">
                    <div className="flex items-center gap-2 text-primary">
                      <Trophy className="h-5 w-5" />
                      <h3 className="text-lg font-bold">{L('اختبر معلوماتك', 'Check what you learned')}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {L('الاختبار 3 أسئلة. تحتاج إلى إجابتين صحيحتين على الأقل لاجتيازه وفتح الدرس التالي.', 'The quiz has 3 questions. Get at least 2 correct to pass and unlock the next lesson.')}
                    </p>
                    {quizQuestionIndexes.map((questionIndex) => {
                      const { options, correctStepIndex } = getQuizOptions(activeLessonId, questionIndex, lessonSteps.length);
                      return (
                        <fieldset key={questionIndex} className="space-y-3 rounded-xl border border-border p-4">
                          <legend className="px-1 font-semibold">
                            {L(
                              ['ما أول خطوة يجب اتخاذها؟', 'ما الخطوة الثانية؟', 'ما الخطوة الثالثة؟'][questionIndex],
                              ['What is the first action to take?', 'What is the second step?', 'What is the third step?'][questionIndex],
                            )}
                          </legend>
                          {options.map(({ stepIndex: optionIndex }, optionPosition) => {
                            const selected = answers[questionIndex] === optionPosition;
                            const correct = optionPosition === correctStepIndex;
                            return (
                              <button
                                key={optionPosition}
                                type="button"
                                disabled={quizSubmitted}
                                aria-pressed={selected}
                                onClick={() => setAnswers((previous) => ({ ...previous, [questionIndex]: optionPosition }))}
                                className={`w-full rounded-lg border p-3 text-start text-sm leading-6 transition-colors ${
                                  quizSubmitted && correct
                                    ? 'border-green-600 bg-green-500/10'
                                    : quizSubmitted && selected
                                      ? 'border-destructive bg-destructive/10'
                                      : selected
                                        ? 'border-primary bg-primary/10'
                                        : 'border-border hover:border-primary/60 hover:bg-muted'
                                }`}
                              >
                                {language === 'ar' ? activeLesson.stepsAr[optionIndex] : activeLesson.stepsEn[optionIndex]}
                              </button>
                            );
                          })}
                        </fieldset>
                      );
                    })}
                    {quizSubmitted && (
                      <p className="font-semibold" aria-live="polite">
                        {passedQuiz
                          ? L(`أحسنت! أجبت ${correctAnswers} من 3 واجتزت الاختبار.`, `Great job! You got ${correctAnswers} of 3 and passed.`)
                          : L(`أجبت إجابة صحيحة عن ${correctAnswers} من 3. تحتاج إجابتين صحيحتين على الأقل؛ راجع الخطوات وحاول مرة أخرى.`, `You got ${correctAnswers} of 3. You need at least 2 correct answers; review the steps and try again.`)}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-3">
                      {!quizSubmitted ? (
                        <Button
                          onClick={submitQuiz}
                          disabled={quizQuestionIndexes.some((questionIndex) => answers[questionIndex] === undefined)}
                        >
                          {L('تحقق من إجاباتي', 'Check my answers')}
                        </Button>
                      ) : passedQuiz ? (
                        <>
                          <Button variant="outline" onClick={() => { setQuizStarted(false); setStepIndex(0); }}>
                            {L('راجع الدرس', 'Review lesson')}
                          </Button>
                          {nextLessonInSequence ? (
                            <Button onClick={nextLesson}>
                              {L('الدرس التالي', 'Next lesson')}
                              <ChevronLeft className="ms-2 h-4 w-4 rtl:rotate-180" />
                            </Button>
                          ) : (
                            <p className="font-semibold text-primary">
                              {L('أكملت جميع دروس الأكاديمية!', 'You completed every academy lesson!')}
                            </p>
                          )}
                        </>
                      ) : (
                        <Button onClick={startQuiz}>{L('أعد الاختبار', 'Try again')}</Button>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        ) : null}

        <section aria-labelledby="lesson-list-title" className="mb-12">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="lesson-list-title" className="text-2xl font-bold">
                {L('كل الدروس', 'All lessons')}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {L(`${filteredLessons.length} درسًا وتمرينًا متاحًا`, `${filteredLessons.length} lessons and practice scenarios available`)}
              </p>
            </div>
            <div className="relative w-full sm:max-w-sm">
              <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <Input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={L('ابحث عن درس...', 'Search lessons...')}
                aria-label={L('ابحث عن درس إسعافات أولية', 'Search first-aid lessons')}
                className="ps-10"
              />
            </div>
          </div>
          {filteredLessons.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filteredLessons.map((tip) => {
                const title = language === 'ar' ? tip.titleAr : tip.titleEn;
                const completed = completedLessons.has(tip.id);
                const selected = activeLessonId === tip.id;
                const unlocked = isLessonUnlocked(tip.id);
                return (
                  <button
                    key={tip.id}
                    type="button"
                    onClick={() => startLesson(tip.id)}
                    disabled={!unlocked}
                    aria-current={selected ? 'step' : undefined}
                    aria-label={!unlocked
                      ? L(`${title} — أكمل الدرس السابق أولًا`, `${title} — complete the previous lesson first`)
                      : title}
                    className={`motion-surface flex h-full items-start gap-3 rounded-xl border p-4 text-start disabled:cursor-not-allowed disabled:opacity-55 ${
                      selected ? 'border-primary bg-primary/5' : unlocked ? 'border-border bg-card hover:border-primary/50' : 'border-border bg-muted/40'
                    }`}
                  >
                    {completed
                      ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      : unlocked
                        ? <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                        : <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />}
                    <span className="min-w-0">
                      <span className="block font-semibold leading-6">{title}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {completed
                          ? L('مكتمل', 'Completed')
                          : !unlocked
                            ? L('مقفل — اجتز الدرس السابق لفتحه', 'Locked — pass the previous lesson to unlock')
                            : tip.scenario
                              ? L(`${tip.scenario.settingAr} · ${tip.stepsAr.length} خطوات واختبار من 3 أسئلة`, `${tip.scenario.settingEn} · ${tip.stepsEn.length} steps and a 3-question quiz`)
                              : L(`${tip.stepsAr.length} خطوات واختبار من 3 أسئلة`, `${tip.stepsEn.length} steps and a 3-question quiz`)}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="rounded-xl border border-dashed p-8 text-center text-muted-foreground">
              {L('لا توجد دروس تطابق بحثك.', 'No lessons match your search.')}
            </p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FirstAidAcademy;