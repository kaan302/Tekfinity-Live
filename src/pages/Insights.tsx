import AccentureNav from "@/components/AccentureNav";
import AccentureFooter from "@/components/AccentureFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Clock, TrendingUp, Users, Brain, Cloud, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import aiCollab from "@/assets/ai-collab.jpg";
import cloudInfra from "@/assets/cloud-infra.jpg";
import customSoftware from "@/assets/custom-software.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

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
      image: aiCollab,
      icon: Brain,
      stats: { views: '12.5K', shares: '2.3K' },
      tags: ['AI', 'Digitale Transformatie', 'Strategie'],
    },
    {
      id: 'cloud-migration',
      category: t('cards.case'),
      title: t('cards.card2.title'),
      description: t('cards.card2.desc'),
      readTime: '12 min',
      image: cloudInfra,
      icon: Cloud,
      stats: { views: '8.2K', shares: '1.8K' },
      tags: ['Cloud', 'DevOps', 'Agile'],
    },
    {
      id: 'digital-strategy',
      category: t('cards.report'),
      title: t('cards.card3.title'),
      description: t('cards.card3.desc'),
      readTime: '10 min',
      image: customSoftware,
      icon: TrendingUp,
      stats: { views: '15.3K', shares: '3.1K' },
      tags: ['Enterprise', 'Platforms', 'Modernisatie'],
    },
    {
      id: 'future-software',
      category: t('cards.case'),
      title: t('cards.card4.title'),
      description: t('cards.card4.desc'),
      readTime: '15 min',
      image: teamCollaboration,
      icon: Users,
      stats: { views: '20.1K', shares: '4.5K' },
      tags: ['AI', 'Innovatie', 'Samenwerking'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-background">
      <AccentureNav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-mesh relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Onderzoek & Inzichten
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('insights.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Diepgaande onderzoeksrapporten, casestudies en thought leadership van onze experts. 
              Ontdek de laatste trends en best practices in software engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl overflow-hidden hover-lift shadow-lg"
          >
            <div className="grid md:grid-cols-2">
              <div className="h-72 md:h-auto overflow-hidden relative">
                <img 
                  src={teamCollaboration} 
                  alt="Future of Software Engineering" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r" />
                <div className="absolute bottom-4 left-4 md:hidden">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {t('insights.featured')}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="hidden md:inline-block text-sm text-primary font-semibold mb-4 bg-primary/10 px-3 py-1 rounded-full w-fit">
                  {t('insights.featured')}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  {t('insights.featured.title')}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('insights.featured.desc')}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    15 min leestijd
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    20.1K views
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/insights/future-software')}
                  className="flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all w-fit group"
                >
                  {t('insights.readMore')} 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">{t('insights.latest')}</h2>
              <p className="text-muted-foreground mt-2">Onderzoeksrapporten en casestudies van onze experts</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                Alle
              </button>
              <button className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary/10 transition-colors">
                Rapporten
              </button>
              <button className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary/10 transition-colors">
                Casestudies
              </button>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {insights.map((insight, index) => {
              const IconComponent = insight.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onClick={() => navigate(`/insights/${insight.id}`)}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover-lift group cursor-pointer shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        {insight.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2 flex-wrap">
                        {insight.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-background/80 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                          {insight.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 line-clamp-2">{insight.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {insight.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {insight.stats.views}
                        </div>
                      </div>
                      <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all text-sm">
                        Lees meer <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Blijf op de hoogte</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Ontvang onze nieuwste onderzoeksrapporten en inzichten direct in uw inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Uw e-mailadres"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Inschrijven
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <AccentureFooter />
    </div>
  );
};

export default Insights;
