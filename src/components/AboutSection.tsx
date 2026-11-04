import { addedCareOptionsCount, physicalConditionCatalog, mentalConditionCatalog } from "@/data/conditionCatalog";
import { treatments } from "@/data/treatments";
import { firstAidTips } from "@/data/firstAidTips";
import { Heart, Stethoscope, Brain, Cross, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { usePublicSiteStats } from "@/hooks/usePublicSiteStats";

export const AboutSection = () => {
  const { L } = useLanguage();
  const { stats: publicStats, error: statsError } = usePublicSiteStats();
  const physicalDiseases = physicalConditionCatalog;
  const mentalDiseases = mentalConditionCatalog;
  const stats = [
    {
      icon: Stethoscope,
      count: physicalDiseases.length,
      label: L("مرض جسدي", "Physical Disease"),
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Cross,
      count: treatments.length + addedCareOptionsCount,
      label: L("خيار علاج ورعاية", "Treatment and care option"),
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Heart,
      count: firstAidTips.length,
      label: L("إسعاف أولي", "First Aid"),
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      icon: Brain,
      count: mentalDiseases.length,
      label: L("مرض نفسي", "Mental Disorder"),
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Users,
      count: publicStats?.registeredUsers ?? null,
      label: L("مستخدم مسجل", "Registered users"),
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10"
    },
    {
      icon: Stethoscope,
      count: publicStats?.doctors ?? null,
      label: L("طبيب مسجل", "Registered doctors"),
      color: "text-amber-500",
      bgColor: "bg-amber-500/10"
    }
  ];

  return (
    <section id="about-section" className="py-16 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {L('من نحن', 'About Us')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {L('إسعفني هو منصة صحية شاملة مصممة خصيصاً لخدمة المجتمع المصري، نقدم معلومات طبية موثوقة وإرشادات للإسعافات الأولية والصحة النفسية.', 'Es3efny is a comprehensive health platform designed specifically to serve the Egyptian community, providing reliable medical information and guidance on first aid and mental health.')}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6 md:gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4`}>
                <stat.icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.color}`} />
              </div>
              <div className="text-2xl md:text-4xl font-bold text-foreground mb-1 md:mb-2"><AnimatedCounter value={stat.count} /></div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        {statsError && (
          <p role="status" className="mb-8 text-center text-sm text-muted-foreground">
            {L('تعذّر تحديث أعداد المستخدمين والأطباء الآن.', 'Could not refresh user and doctor counts right now.')}
          </p>
        )}

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{L('ماذا نقدم؟', 'What do we offer?')}</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            {L(
              `نقدم قاعدة بيانات شاملة تضم ${physicalDiseases.length} مرض جسدي و${treatments.length + addedCareOptionsCount} خيار علاج ورعاية و${firstAidTips.length} إرشاد إسعاف أولي و${mentalDiseases.length} مرض نفسي، بالإضافة إلى أرقام الطوارئ وحاسبة BMI وخطط النظام الغذائي والبحث عن أقرب المستشفيات والصيدليات.`,
              `We offer a comprehensive database of ${physicalDiseases.length} physical diseases, ${treatments.length + addedCareOptionsCount} treatment and care options, ${firstAidTips.length} first-aid guides, and ${mentalDiseases.length} mental health conditions, in addition to emergency numbers, a BMI calculator, diet plans, and nearby facility search.`,
            )}
          </p>
        </div>
      </div>
    </section>
  );
};
