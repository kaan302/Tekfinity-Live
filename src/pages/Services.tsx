import { useNavigate } from "react-router-dom";
import AccentureNav from "@/components/AccentureNav";
import AccentureFooter from "@/components/AccentureFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Smartphone, Globe, Cloud, Brain, Database, Shield, Code, Zap } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: t('services.custom.title'),
      description: t('services.custom.desc'),
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: t('servicesShowcase.mobile'),
      description: t('servicesShowcase.mobileDesc'),
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: t('servicesShowcase.web'),
      description: t('servicesShowcase.webDesc'),
    },
    {
      icon: <Cloud className="w-12 h-12 text-primary" />,
      title: t('servicesShowcase.cloud'),
      description: t('servicesShowcase.cloudDesc'),
    },
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: t('servicesShowcase.ai'),
      description: t('servicesShowcase.aiDesc'),
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: t('servicesShowcase.data'),
      description: t('servicesShowcase.dataDesc'),
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: t('servicesShowcase.security'),
      description: t('servicesShowcase.securityDesc'),
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.desc'),
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
              {t('services.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('services.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover-lift"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('services.process.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('services.process.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('services.process.step1.title')}</h3>
              <p className="text-muted-foreground">{t('services.process.step1.desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('services.process.step2.title')}</h3>
              <p className="text-muted-foreground">{t('services.process.step2.desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('services.process.step3.title')}</h3>
              <p className="text-muted-foreground">{t('services.process.step3.desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('services.process.step4.title')}</h3>
              <p className="text-muted-foreground">{t('services.process.step4.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('services.cta.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('services.cta.desc')}
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            {t('cta.contact')}
          </button>
        </div>
      </section>

      <AccentureFooter />
    </div>
  );
};

export default Services;
