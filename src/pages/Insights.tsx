import AccentureNav from "@/components/AccentureNav";
import AccentureFooter from "@/components/AccentureFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Clock } from "lucide-react";
import insightsFeaturedImage from "@/assets/insights-featured.jpg";
import { useNavigate } from "react-router-dom";

const Insights = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const insights = [
    {
      id: 'ai-transformation',
      category: t('cards.report'),
      title: t('cards.card1.title'),
      description: t('cards.card1.desc'),
      readTime: '8 min',
    },
    {
      id: 'cloud-migration',
      category: t('cards.case'),
      title: t('cards.card2.title'),
      description: t('cards.card2.desc'),
      readTime: '12 min',
    },
    {
      id: 'digital-strategy',
      category: t('cards.report'),
      title: t('cards.card3.title'),
      description: t('cards.card3.desc'),
      readTime: '10 min',
    },
    {
      id: 'future-software',
      category: t('cards.case'),
      title: t('cards.card4.title'),
      description: t('cards.card4.desc'),
      readTime: '15 min',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AccentureNav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-mesh">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('insights.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('insights.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-card border border-border rounded-lg overflow-hidden hover-lift">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto overflow-hidden">
                <img 
                  src={insightsFeaturedImage} 
                  alt="Future of Software Engineering" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <span className="text-sm text-primary font-semibold">{t('insights.featured')}</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                  {t('insights.featured.title')}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t('insights.featured.desc')}
                </p>
                <button 
                  onClick={() => navigate('/insights/future-software')}
                  className="flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
                >
                  {t('insights.readMore')} <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('insights.latest')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <div
                key={index}
                onClick={() => navigate(`/insights/${insight.id}`)}
                className="bg-card border border-border rounded-lg p-8 hover-lift group cursor-pointer"
              >
                <span className="text-xs text-primary font-semibold">{insight.category}</span>
                <h3 className="text-2xl font-bold mt-4 mb-4 group-hover:text-primary transition-colors">
                  {insight.title}
                </h3>
                <p className="text-muted-foreground mb-6">{insight.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {insight.readTime}
                  </div>
                  <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                    {t('insights.readMore')} <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AccentureFooter />
    </div>
  );
};

export default Insights;
