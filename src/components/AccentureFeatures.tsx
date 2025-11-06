import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const AccentureFeatures = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      title: t('features.do.title'),
      description: t('features.do.desc'),
      link: t('features.do.link'),
    },
    {
      title: t('features.think.title'),
      description: t('features.think.desc'),
      link: t('features.think.link'),
    },
    {
      title: t('features.who.title'),
      description: t('features.who.desc'),
      link: t('features.who.link'),
    },
  ];

  return (
    <section className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-6">
              <div className="w-12 h-1 bg-primary" />
              <h2 className="text-3xl font-bold">{feature.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {feature.description}
              </p>
              <Button
                variant="link"
                className="text-primary hover:text-primary/80 p-0 h-auto group"
              >
                {feature.link}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccentureFeatures;
