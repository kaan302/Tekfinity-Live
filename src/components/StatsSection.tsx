import { TrendingUp, Users, Award, Globe2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const StatsSection = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      icon: Users,
      number: t('stats.clients.number'),
      label: t('stats.clients.label'),
      description: t('stats.clients.desc'),
    },
    {
      icon: Award,
      number: t('stats.satisfaction.number'),
      label: t('stats.satisfaction.label'),
      description: t('stats.satisfaction.desc'),
    },
    {
      icon: TrendingUp,
      number: t('stats.projects.number'),
      label: t('stats.projects.label'),
      description: t('stats.projects.desc'),
    },
    {
      icon: Globe2,
      number: t('stats.experience.number'),
      label: t('stats.experience.label'),
      description: t('stats.experience.desc'),
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('stats.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-card border border-border rounded-lg p-8 hover-lift">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-5xl font-bold text-gradient">
                    {stat.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
