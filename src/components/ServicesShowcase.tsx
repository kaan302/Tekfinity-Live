import { Smartphone, Code2, Cloud, Cpu, Database, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesShowcase = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Smartphone,
      title: t('servicesShowcase.mobile'),
      description: t('servicesShowcase.mobileDesc'),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code2,
      title: t('servicesShowcase.web'),
      description: t('servicesShowcase.webDesc'),
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: Cloud,
      title: t('servicesShowcase.cloud'),
      description: t('servicesShowcase.cloudDesc'),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cpu,
      title: t('servicesShowcase.ai'),
      description: t('servicesShowcase.aiDesc'),
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Database,
      title: t('servicesShowcase.data'),
      description: t('servicesShowcase.dataDesc'),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: t('servicesShowcase.security'),
      description: t('servicesShowcase.securityDesc'),
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">
              {t('servicesShowcase.tag')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('servicesShowcase.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('servicesShowcase.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover-lift overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${service.color} mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
