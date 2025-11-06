import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const AccentureHero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center bg-background pt-16 overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              {t('hero.title')}{" "}
              <span className="relative inline-block">
                <span className="text-gradient-accent">{t('hero.titleHighlight')}</span>
              </span>
            </h1>
          </div>

          {/* Right Content Card */}
          <div className="bg-card/80 backdrop-blur-sm border border-border p-8 lg:p-12 rounded-2xl hover-lift animate-slide-in-right">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              {t('hero.subtitle')}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
            <Button className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground glow-effect">
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccentureHero;
