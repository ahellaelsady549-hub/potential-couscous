import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Heart, Mail, Lock, User, Home, KeyRound, Stethoscope, FileText, Loader2, RefreshCw, Moon, Sun } from 'lucide-react';
import { z } from 'zod';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable/index';
import { medicalSpecialties } from '@/data/specialties';
import QuickBotTest from '@/components/QuickBotTest';
import { useTheme } from '@/contexts/ThemeContext';

const emailSchema = z.string().email('البريد الإلكتروني غير صالح / Invalid email address');
const passwordSchema = z.string().min(6, 'كلمة المرور 6 أحرف على الأقل / Password must be at least 6 characters');
const nameSchema = z.string().min(2, 'الاسم حرفين على الأقل / Name must be at least 2 characters');

const Auth = () => {
  const { user, signIn, loading } = useAuth();
  const { L } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isLoading, setIsLoading] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  
  // User type selection
  const [userType, setUserType] = useState<'user' | 'doctor'>('user');
  
  // Doctor specific fields
  const [doctorSpecialty, setDoctorSpecialty] = useState('');
  const [doctorBio, setDoctorBio] = useState('');
  const [doctorCvUrl, setDoctorCvUrl] = useState('');
  const [doctorPortfolioUrl, setDoctorPortfolioUrl] = useState('');
  
  // AI CV Review
  const [isReviewingCv, setIsReviewingCv] = useState(false);
  const [cvReview, setCvReview] = useState<string | null>(null);
  
  // OTP verification states
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpValue, setOtpValue] = useState('');
  const [pendingEmail, setPendingEmail] = useState('');
  const [pendingUserData, setPendingUserData] = useState<any>(null);
  

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      emailSchema.parse(loginEmail);
      passwordSchema.parse(loginPassword);
    } catch (err) {
      if (err instanceof z.ZodError) {
        toast({
          title: L('خطأ في البيانات','Invalid data'),
          description: err.errors[0].message,
          variant: 'destructive'
        });
        return;
      }
    }

    setIsLoading(true);
    const { error } = await signIn(loginEmail, loginPassword);
    setIsLoading(false);

    if (error) {
      toast({
        title: L('خطأ في تسجيل الدخول','Sign-in error'),
        description: error.message === 'Invalid login credentials' 
          ? L('البريد الإلكتروني أو كلمة المرور غير صحيحة','Incorrect email or password')
          : error.message === 'Email not confirmed'
          ? L('البريد الإلكتروني غير مؤكد، يرجى التحقق من بريدك','Email not confirmed, please check your inbox')
          : error.message,
        variant: 'destructive'
      });
    } else {
      toast({
        title: L('تم تسجيل الدخول بنجاح','Signed in successfully'),
        description: L('مرحباً بك في إسعفني','Welcome to Es3efny')
      });
    }
  };

  const reviewCvWithAI = async () => {
    if (!doctorCvUrl) {
      toast({
        title: L('خطأ','Error'),
        description: L('يرجى إدخال رابط السيرة الذاتية أولاً','Please enter your CV link first'),
        variant: 'destructive'
      });
      return;
    }

    setIsReviewingCv(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-chat', {
        body: {
          message: `أنت مراجع سير ذاتية محترف. قم بمراجعة السيرة الذاتية للطبيب المتقدم وأعطه تقييماً موجزاً. 
          الرابط: ${doctorCvUrl}
          التخصص المطلوب: ${medicalSpecialties.find(s => s.value === doctorSpecialty)?.labelAr || doctorSpecialty}
          
          أجب بتقييم موجز (3-4 جمل) يتضمن:
          1. هل الرابط يبدو صالحاً؟
          2. نصائح عامة للطبيب
          3. التوقعات من السيرة الذاتية الجيدة`
        }
      });

      if (error) throw error;
      setCvReview(data?.response || L('تم استلام السيرة الذاتية وسيتم مراجعتها','CV received and will be reviewed'));
    } catch (error) {
      console.error('Error reviewing CV:', error);
      setCvReview(L('تم استلام السيرة الذاتية وسيتم مراجعتها من قبل الإدارة','CV received and will be reviewed by our team'));
    } finally {
      setIsReviewingCv(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      nameSchema.parse(signupName);
      emailSchema.parse(signupEmail);
      passwordSchema.parse(signupPassword);
      
      if (userType === 'doctor' && !doctorSpecialty) {
        toast({
          title: L('خطأ في البيانات','Invalid data'),
          description: L('يرجى اختيار التخصص الطبي','Please select a medical specialty'),
          variant: 'destructive'
        });
        return;
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        toast({
          title: L('خطأ في البيانات','Invalid data'),
          description: err.errors[0].message,
          variant: 'destructive'
        });
        return;
      }
    }

    setIsLoading(true);
    
    const { data, error } = await supabase.auth.signUp({
      email: signupEmail,
      password: signupPassword,
      options: {
        data: {
          full_name: signupName
        }
      }
    });

    if (error) {
      setIsLoading(false);
      if (error.message.includes('already registered')) {
        toast({
          title: L('خطأ في التسجيل','Sign-up error'),
          description: L('هذا البريد الإلكتروني مسجل بالفعل','This email is already registered'),
          variant: 'destructive'
        });
      } else {
        toast({
          title: L('خطأ في التسجيل','Sign-up error'),
          description: error.message,
          variant: 'destructive'
        });
      }
      return;
    }

    if (data.user) {
      try {
        await supabase.from('user_roles').insert({
          user_id: data.user.id,
          role: userType
        });

        if (userType === 'doctor') {
          await supabase.from('doctors').insert({
            user_id: data.user.id,
            specialty: doctorSpecialty,
            bio: doctorBio,
            cv_url: doctorCvUrl,
            portfolio_url: doctorPortfolioUrl,
            ai_cv_review: cvReview,
            is_verified: false,
            verification_status: 'pending'
          });
        }
      } catch (err) {
        console.error('Error creating user data:', err);
      }
    }

    setIsLoading(false);
    toast({
      title: L('تم التسجيل بنجاح','Registered successfully'),
      description: userType === 'doctor'
        ? L('مرحباً بك! سيتم مراجعة حسابك من قبل الإدارة','Welcome! Your account will be reviewed by our team')
        : L('مرحباً بك في إسعفني!','Welcome to Es3efny!')
    });
    navigate('/');
  };

  const handleVerifyOtp = async () => {
    if (otpValue.length !== 6) {
      toast({
        title: L('خطأ','Error'),
        description: L('يرجى إدخال رمز التحقق المكون من 6 أرقام','Please enter the 6-digit verification code'),
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);
    
    const { data, error } = await supabase.auth.verifyOtp({
      email: pendingEmail,
      token: otpValue,
      type: 'signup'
    });
    
    if (error) {
      setIsLoading(false);
      toast({
        title: L('خطأ في التحقق','Verification error'),
        description: L('رمز التحقق غير صحيح أو منتهي الصلاحية','The verification code is invalid or expired'),
        variant: 'destructive'
      });
      return;
    }

    // After successful verification, create role and doctor profile if needed
    if (data.user && pendingUserData) {
      try {
        // Insert user role
        await supabase.from('user_roles').insert({
          user_id: data.user.id,
          role: pendingUserData.userType
        });

        // If doctor, create doctor profile
        if (pendingUserData.userType === 'doctor') {
          await supabase.from('doctors').insert({
            user_id: data.user.id,
            specialty: pendingUserData.doctorSpecialty,
            bio: pendingUserData.doctorBio,
            cv_url: pendingUserData.doctorCvUrl,
            portfolio_url: pendingUserData.doctorPortfolioUrl,
            ai_cv_review: pendingUserData.cvReview,
            is_verified: false,
            verification_status: 'pending'
          });
        }
      } catch (err) {
        console.error('Error creating user data:', err);
      }
    }

    setIsLoading(false);
    toast({
      title: L('تم التحقق بنجاح','Verified successfully'),
      description: pendingUserData?.userType === 'doctor' 
        ? L('مرحباً بك! سيتم مراجعة حسابك من قبل الإدارة','Welcome! Your account will be reviewed by our team')
        : L('مرحباً بك في إسعفني!','Welcome to Es3efny!')
    });
    setShowOtpInput(false);
    navigate('/');
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: pendingEmail
    });
    
    setIsLoading(false);

    if (error) {
      toast({
        title: L('خطأ','Error'),
        description: L('حدث خطأ أثناء إعادة إرسال الرمز','Something went wrong resending the code'),
        variant: 'destructive'
      });
    } else {
      toast({
        title: L('تم إعادة الإرسال','Resent'),
        description: L('تم إرسال رمز تحقق جديد إلى بريدك الإلكتروني','A new verification code was sent to your email')
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-primary">{L('جاري التحميل...','Loading...')}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        aria-label={theme === 'light' ? L('تفعيل الوضع الداكن', 'Enable dark mode') : L('تفعيل الوضع الفاتح', 'Enable light mode')}
        className="absolute top-4 left-4"
      >
        {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate('/')}
        className="absolute top-4 right-4"
      >
        <Home className="h-4 w-4 ml-2" />
        {L('الرئيسية','Home')}
      </Button>
      <Card className="w-full max-w-md shadow-2xl border-primary/20">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-medical bg-clip-text text-transparent">
            {L('إسعفني','Es3efny')}
          </CardTitle>
          <CardDescription>
            {L('سجل دخولك لإدارة صحتك','Sign in to manage your health')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {showOtpInput ? (
            <div className="space-y-6">
              <div className="text-center">
                <KeyRound className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{L('التحقق من البريد الإلكتروني','Email verification')}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {L('أدخل رمز التحقق المرسل إلى','Enter the verification code sent to')}
                  <br />
                  <span className="font-medium text-foreground">{pendingEmail}</span>
                </p>
              </div>
              
              <div className="flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={otpValue}
                  onChange={setOtpValue}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button 
                onClick={handleVerifyOtp}
                className="w-full bg-gradient-medical hover:opacity-90"
                disabled={isLoading || otpValue.length !== 6}
              >
                {isLoading ? L('جاري التحقق...','Verifying...') : L('تأكيد الرمز','Confirm code')}
              </Button>

              <div className="flex items-center justify-between text-sm">
                <Button 
                  variant="link" 
                  onClick={handleResendOtp}
                  disabled={isLoading}
                  className="p-0"
                >
                  {L('إعادة إرسال الرمز','Resend code')}
                </Button>
                <Button 
                  variant="link" 
                  onClick={() => setShowOtpInput(false)}
                  className="p-0"
                >
                  {L('تغيير البريد','Change email')}
                </Button>
              </div>
            </div>
          ) : (
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">{L('تسجيل الدخول','Sign in')}</TabsTrigger>
                <TabsTrigger value="signup">{L('إنشاء حساب','Create account')}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">{L('البريد الإلكتروني','Email')}</Label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="example@email.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="pr-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">{L('كلمة المرور','Password')}</Label>
                    <div className="relative">
                      <Lock className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="pr-10"
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-medical hover:opacity-90"
                    disabled={isLoading}
                  >
                    {isLoading ? L('جاري تسجيل الدخول...','Signing in...') : L('تسجيل الدخول','Sign in')}
                  </Button>
                  
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4 mt-4">
                  {/* User Type Selection */}
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      type="button"
                      variant={userType === 'user' ? 'default' : 'outline'}
                      className={userType === 'user' ? 'bg-gradient-medical' : ''}
                      onClick={() => setUserType('user')}
                    >
                      <User className="w-4 h-4 ml-2" />
                      {L('مستخدم','User')}
                    </Button>
                    <Button
                      type="button"
                      variant={userType === 'doctor' ? 'default' : 'outline'}
                      className={userType === 'doctor' ? 'bg-gradient-medical' : ''}
                      onClick={() => setUserType('doctor')}
                    >
                      <Stethoscope className="w-4 h-4 ml-2" />
                      {L('طبيب','Doctor')}
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-name">{L('الاسم الكامل','Full name')}</Label>
                    <div className="relative">
                      <User className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder={L('محمد أحمد','John Smith')}
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                        className="pr-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">{L('البريد الإلكتروني','Email')}</Label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="example@email.com"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        className="pr-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">{L('كلمة المرور','Password')}</Label>
                    <div className="relative">
                      <Lock className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        className="pr-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Doctor-specific fields */}
                  {userType === 'doctor' && (
                    <div className="space-y-4 pt-2 border-t">
                      <p className="text-sm text-muted-foreground">{L('معلومات الطبيب','Doctor information')}</p>
                      
                      <div className="space-y-2">
                        <Label>{L('التخصص الطبي','Medical specialty')}</Label>
                        <Select value={doctorSpecialty} onValueChange={setDoctorSpecialty}>
                          <SelectTrigger>
                            <SelectValue placeholder={L('اختر التخصص','Choose a specialty')} />
                          </SelectTrigger>
                          <SelectContent>
                            {medicalSpecialties.map(spec => (
                              <SelectItem key={spec.value} value={spec.value}>
                                {spec.labelAr}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>{L('نبذة عنك (اختياري)','About you (optional)')}</Label>
                        <Textarea
                          placeholder={L('اكتب نبذة مختصرة عن خبراتك ومؤهلاتك...','Write a short bio about your experience and qualifications...')}
                          value={doctorBio}
                          onChange={(e) => setDoctorBio(e.target.value)}
                          rows={3}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>{L('رابط السيرة الذاتية (Google Drive, LinkedIn, etc.)','CV link (Google Drive, LinkedIn, etc.)')}</Label>
                        <div className="flex gap-2">
                          <div className="relative flex-1">
                            <FileText className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              type="url"
                              placeholder="https://..."
                              value={doctorCvUrl}
                              onChange={(e) => setDoctorCvUrl(e.target.value)}
                              className="pr-10"
                            />
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={reviewCvWithAI}
                            disabled={isReviewingCv || !doctorCvUrl}
                          >
                            {isReviewingCv ? <Loader2 className="w-4 h-4 animate-spin" /> : L('مراجعة','Review')}
                          </Button>
                        </div>
                        {cvReview && (
                          <p className="text-sm text-muted-foreground bg-muted p-2 rounded">
                            {cvReview}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label>{L('رابط البورتفوليو (اختياري)','Portfolio link (optional)')}</Label>
                        <Input
                          type="url"
                          placeholder="https://..."
                          value={doctorPortfolioUrl}
                          onChange={(e) => setDoctorPortfolioUrl(e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-medical hover:opacity-90"
                    disabled={isLoading}
                  >
                    {isLoading ? L('جاري إنشاء الحساب...','Creating account...') : L('إنشاء حساب','Create account')}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          )}
          
          {/* Quick Bot Test */}
          <div className="border-t pt-4 mt-4">
            <QuickBotTest />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
