import AccentureNav from "@/components/AccentureNav";
import AccentureFooter from "@/components/AccentureFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: t('about.values.mission.title'),
      description: t('about.values.mission.desc'),
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: t('about.values.team.title'),
      description: t('about.values.team.desc'),
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.desc'),
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.desc'),
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
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">{t('about.story.title')}</h2>
              <p className="text-lg text-muted-foreground mb-4">
                {t('about.story.p1')}
              </p>
              <p className="text-lg text-muted-foreground">
                {t('about.story.p2')}
              </p>
            </div>
            <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('about.values.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('about.values.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">{t('stats.clients.number')}</div>
              <div className="text-lg font-semibold mb-1">{t('stats.clients.label')}</div>
              <div className="text-sm text-muted-foreground">{t('stats.clients.desc')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">{t('stats.projects.number')}</div>
              <div className="text-lg font-semibold mb-1">{t('stats.projects.label')}</div>
              <div className="text-sm text-muted-foreground">{t('stats.projects.desc')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">{t('stats.satisfaction.number')}</div>
              <div className="text-lg font-semibold mb-1">{t('stats.satisfaction.label')}</div>
              <div className="text-sm text-muted-foreground">{t('stats.satisfaction.desc')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">{t('stats.experience.number')}</div>
              <div className="text-lg font-semibold mb-1">{t('stats.experience.label')}</div>
              <div className="text-sm text-muted-foreground">{t('stats.experience.desc')}</div>
            </div>
          </div>
        </div>
      </section>

      <AccentureFooter />
    </div>
  );
};

export default About;
