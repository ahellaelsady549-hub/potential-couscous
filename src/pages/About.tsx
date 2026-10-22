import { diseases } from "@/data/diseases";
import { treatments } from "@/data/treatments";
import { firstAidTips } from "@/data/firstAidTips";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Heart, Stethoscope, Brain, Cross, Users, Target, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const mentalHealthDiseaseIds = [
  'depression', 'bipolar', 'schizophrenia', 'ocd', 'ptsd', 
  'panic_disorder', 'social_anxiety', 'eating_disorder', 'adhd', 
  'autism', 'personality_disorder', 'substance_abuse', 'insomnia', 
  'phobia', 'dissociative', 'generalized_anxiety', 'seasonal_depression',
  'hoarding_disorder', 'body_dysmorphia', 'intermittent_explosive',
  'trichotillomania', 'dermatillomania', 'agoraphobia', 'adjustment_disorder',
  'somatoform', 'avoidant_personality', 'narcissistic_personality',
  'dependent_personality', 'paranoid_personality'
];

const About = () => {
  const { L } = useLanguage();
  // Calculate statistics
  const physicalDiseases = diseases.filter(d => !mentalHealthDiseaseIds.includes(d.id));
  const mentalDiseases = diseases.filter(d => mentalHealthDiseaseIds.includes(d.id));
  
  const stats = [
    {
      icon: Stethoscope,
      count: physicalDiseases.length,
      label: L("مرض جسدي", "physical disease"),
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Cross,
      count: treatments.length,
      label: L("علاج", "treatment"),
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Heart,
      count: firstAidTips.length,
      label: L("إسعاف أولي", "first aid tip"),
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      icon: Brain,
      count: mentalDiseases.length,
      label: L("مرض نفسي", "mental illness"),
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {L('من نحن', 'About Us')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {L('إسعفني هو منصة صحية شاملة مصممة خصيصاً لخدمة المجتمع المصري، نقدم معلومات طبية موثوقة وإرشادات للإسعافات الأولية والصحة النفسية.', 'Es3efny is a comprehensive health platform designed specifically to serve the Egyptian community, providing reliable medical information and guidance on first aid and mental health.')}
          </p>
        </div>

        {/* Statistics Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">
            {L('إحصائيات الموقع', 'Site Statistics')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.count}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{L('رسالتنا', 'Our Mission')}</h3>
            <p className="text-muted-foreground">
              {L('توفير معلومات صحية موثوقة وسهلة الوصول لكل مواطن مصري', 'Providing reliable and accessible health information to every Egyptian citizen')}
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{L('من نخدم', 'Who We Serve')}</h3>
            <p className="text-muted-foreground">
              {L('نخدم المجتمع المصري بأكمله من خلال توفير معلومات طبية موثوقة وشاملة', 'We serve the entire Egyptian community by providing reliable and comprehensive medical information')}
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{L('قيمنا', 'Our Values')}</h3>
            <p className="text-muted-foreground">
              {L('الدقة والموثوقية وسهولة الوصول هي أساس كل ما نقدمه', 'Accuracy, reliability and accessibility are the foundation of everything we offer')}
            </p>
          </div>
        </div>

        {/* Features Summary */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">{L('ماذا نقدم؟', 'What We Offer?')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {L(`نقدم قاعدة بيانات شاملة تضم ${physicalDiseases.length} مرض جسدي و${treatments.length} علاج و${firstAidTips.length} إسعاف أولي و${mentalDiseases.length} مرض نفسي، بالإضافة إلى أرقام الطوارئ وحاسبة BMI وخطط النظام الغذائي والبحث عن أقرب المستشفيات والصيدليات.`, `We offer a comprehensive database including ${physicalDiseases.length} physical diseases, ${treatments.length} treatments, ${firstAidTips.length} first aid tips and ${mentalDiseases.length} mental illnesses, in addition to emergency numbers, a BMI calculator, diet plans, and search for the nearest hospitals and pharmacies.`)}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
