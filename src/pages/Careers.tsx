import AccentureNav from "@/components/AccentureNav";
import AccentureFooter from "@/components/AccentureFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const Careers = () => {
  const { t } = useLanguage();

  const openings = [
    {
      title: t('careers.job1.title'),
      location: t('careers.job1.location'),
      type: t('careers.job1.type'),
      department: t('careers.job1.department'),
    },
    {
      title: t('careers.job2.title'),
      location: t('careers.job2.location'),
      type: t('careers.job2.type'),
      department: t('careers.job2.department'),
    },
    {
      title: t('careers.job3.title'),
      location: t('careers.job3.location'),
      type: t('careers.job3.type'),
      department: t('careers.job3.department'),
    },
    {
      title: t('careers.job4.title'),
      location: t('careers.job4.location'),
      type: t('careers.job4.type'),
      department: t('careers.job4.department'),
    },
  ];

  const benefits = [
    t('careers.benefits.learning'),
    t('careers.benefits.balance'),
    t('careers.benefits.health'),
    t('careers.benefits.remote'),
    t('careers.benefits.growth'),
    t('careers.benefits.culture'),
  ];

  return (
    <div className="min-h-screen bg-background">
      <AccentureNav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-mesh">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('careers.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('careers.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">{t('careers.benefits.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover-lift"
              >
                <p className="text-lg font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12">{t('careers.openings.title')}</h2>
          <div className="space-y-4 max-w-4xl">
            {openings.map((job, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover-lift group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {job.department}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all whitespace-nowrap">
                    {t('careers.apply')} <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('careers.cta.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('careers.cta.desc')}
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
            {t('careers.cta.button')}
          </button>
        </div>
      </section>

      <AccentureFooter />
    </div>
  );
};

export default Careers;
