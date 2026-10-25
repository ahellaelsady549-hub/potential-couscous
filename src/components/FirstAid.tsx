import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { firstAidTips } from '@/data/firstAidTips';
import { Heart, Search, ChevronDown, ChevronUp, Filter, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MedicalSources } from '@/components/MedicalSources';
import { normalizeSearchText } from '@/lib/search';

const categories = [
  { id: 'all', nameAr: 'الكل', nameEn: 'All' },
  { id: 'injuries', nameAr: 'الإصابات والجروح', nameEn: 'Injuries & Wounds' },
  { id: 'breathing', nameAr: 'مشاكل التنفس', nameEn: 'Breathing Problems' },
  { id: 'burns', nameAr: 'الحروق', nameEn: 'Burns' },
  { id: 'bites', nameAr: 'اللدغات والعضات', nameEn: 'Bites & Stings' },
  { id: 'medical', nameAr: 'الحالات الطبية', nameEn: 'Medical Conditions' },
  { id: 'cardiac', nameAr: 'القلب والدورة الدموية', nameEn: 'Heart & Circulation' },
  { id: 'environmental', nameAr: 'الحالات البيئية', nameEn: 'Environmental Conditions' },
  { id: 'other', nameAr: 'أخرى', nameEn: 'Other' }
];

const getCategoryForTip = (tip: typeof firstAidTips[0]): string => {
  const title = tip.titleAr.toLowerCase();
  const desc = tip.descriptionAr.toLowerCase();
  const combined = title + ' ' + desc;
  
  if (combined.includes('قلب') || combined.includes('إنعاش') || combined.includes('نبض') || combined.includes('سكتة')) return 'cardiac';
  if (combined.includes('جرح') || combined.includes('نزيف') || combined.includes('كسر') || combined.includes('التواء') || combined.includes('إصابة')) return 'injuries';
  if (combined.includes('تنفس') || combined.includes('اختناق') || combined.includes('ربو') || combined.includes('غرق')) return 'breathing';
  if (combined.includes('حرق') || combined.includes('حرارة') || combined.includes('كهرب')) return 'burns';
  if (combined.includes('لدغ') || combined.includes('عض') || combined.includes('لسع') || combined.includes('سم')) return 'bites';
  if (combined.includes('سكر') || combined.includes('صرع') || combined.includes('إغماء') || combined.includes('تسمم')) return 'medical';
  if (combined.includes('حرارة') || combined.includes('برد') || combined.includes('شمس') || combined.includes('جفاف')) return 'environmental';
  return 'other';
};

export const FirstAid = () => {
  const { t, L, language } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const filteredTips = firstAidTips.filter(tip => {
    const tipCategory = tip.category || getCategoryForTip(tip);
    const matchesCategory = selectedCategory === 'all' || tipCategory === selectedCategory;
    const searchLower = normalizeSearchText(searchQuery.trim());
    const title = language === 'ar' ? tip.titleAr : tip.titleEn;
    const description = language === 'ar' ? tip.descriptionAr : tip.descriptionEn;
    const steps = language === 'ar' ? tip.stepsAr : tip.stepsEn;
    const matchesSearch = searchLower === '' || 
      normalizeSearchText(title).includes(searchLower) ||
      normalizeSearchText(description).includes(searchLower) ||
      steps.some(step => normalizeSearchText(step).includes(searchLower));
    return matchesCategory && matchesSearch;
  });

  const displayedTips = showAll ? filteredTips : filteredTips.slice(0, 6);

  const toggleCard = (id: number) => {
    const idStr = id.toString();
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(idStr)) {
        newSet.delete(idStr);
      } else {
        newSet.add(idStr);
      }
      return newSet;
    });
  };

  return (
    <section id="first-aid" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
            <Heart className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t('firstAid.title')}
          </h2>
          <p className="text-muted-foreground mt-2" aria-live="polite">
            {filteredTips.length} {L('إسعاف أولي متاح', 'first aid tips available')}
          </p>
        </div>

        <div className="mx-auto mb-8 max-w-4xl rounded-xl border border-emergency/30 bg-emergency/5 p-4 text-center">
          <p className="mb-3 text-sm leading-6">
            {L(
              'هذه إرشادات توعوية عامة وليست بديلاً عن تدريب الإسعافات أو تعليمات الإسعاف. في الحالات الخطيرة اتصل بـ 123 واتبع تعليمات موظف الطوارئ.',
              'These are general educational tips, not a substitute for first-aid training or emergency dispatcher instructions. For serious situations, call 123 and follow the dispatcher’s guidance.',
            )}
          </p>
          <Button asChild variant="destructive" size="sm">
            <a href="tel:123">
              {L('اتصل بالإسعاف 123', 'Call ambulance 123')}
            </a>
          </Button>
        </div>

        <div className="max-w-xl mx-auto mb-12 space-y-4">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <Select value={selectedCategory} onValueChange={(value) => { setSelectedCategory(value); setShowAll(false); }}>
              <SelectTrigger aria-label={L('تصفية حسب الفئة', 'Filter by category')} className="h-12 shadow-soft border-2">
                <SelectValue placeholder={L('اختر الفئة', 'Select Category')} />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border z-50">
                {categories.map(cat => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {L(cat.nameAr, cat.nameEn)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="relative">
            <Search className="absolute start-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden />
            <Input
              type="search"
              aria-label={L('ابحث في إرشادات الإسعافات الأولية', 'Search first-aid guidance')}
              placeholder={L('ابحث في الإسعافات الأولية...', 'Search first aid tips...')}
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setShowAll(false); }}
              className="ps-12 pe-12 h-12 shadow-soft border-2 focus:border-primary"
            />
            {(searchQuery || selectedCategory !== 'all') && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setShowAll(false); }}
                aria-label={L('مسح البحث والتصفية', 'Clear search and filters')}
                className="absolute end-1 top-1/2 h-9 w-9 -translate-y-1/2"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
          {displayedTips.map((tip) => {
            const isExpanded = expandedCards.has(tip.id.toString());
            
            return (
              <Card key={tip.id} className="p-6 shadow-card hover:shadow-soft transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-primary flex-1">
                    {language === 'ar' ? tip.titleAr : tip.titleEn}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleCard(tip.id)}
                    aria-expanded={isExpanded}
                    aria-label={isExpanded
                      ? L(`إخفاء خطوات ${tip.titleAr}`, `Hide steps for ${tip.titleEn}`)
                      : L(`عرض خطوات ${tip.titleAr}`, `Show steps for ${tip.titleEn}`)}
                  >
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'ar' ? tip.descriptionAr : tip.descriptionEn}
                </p>
                {isExpanded && (
                  <div className="space-y-4">
                    <ol className="space-y-2 text-sm">
                      {(language === 'ar' ? tip.stepsAr : tip.stepsEn).map((step, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="font-semibold text-primary">{index + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {filteredTips.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">{L('لا توجد نتائج مطابقة للبحث', 'No matching results found')}</p>
          </div>
        )}

        {filteredTips.length > 6 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-2 border-primary hover:bg-primary/10"
            >
              {showAll ? L('عرض أقل', 'Show Less') : L(`عرض المزيد (${filteredTips.length - 6} إضافي)`, `Show More (${filteredTips.length - 6} more)`)}
            </Button>
          </div>
        )}

        <MedicalSources topic="firstAid" />
      </div>
    </section>
  );
};
