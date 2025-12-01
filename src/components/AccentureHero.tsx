import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AccentureHero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-primary/5 pt-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        
        {/* Floating Icons */}
        <motion.div
          className="absolute top-1/3 right-1/4 text-primary/10"
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3 text-accent/10"
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 2,
          }}
        >
          <Zap className="w-16 h-16" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-1/3 text-primary/10"
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 4,
          }}
        >
          <Target className="w-10 h-10" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Software Engineering Excellence</span>
                </motion.div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                  {t('hero.title')}{" "}
                  <span className="relative inline-block">
                    <span className="text-gradient-accent">{t('hero.titleHighlight')}</span>
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                  </span>
                </h1>
              </motion.div>

              <motion.p 
                className="text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg"
                    className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground text-lg px-8 h-14 shadow-lg shadow-primary/25"
                    onClick={() => navigate('/start-project')}
                  >
                    {t('hero.cta')}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 h-14 border-2"
                    onClick={() => navigate('/services')}
                  >
                    {t('nav.services')}
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Content - Modern Card Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/* Main Feature Card */}
              <motion.div 
                className="col-span-2 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 p-8 rounded-3xl"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Live
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{t('hero.description')}</h3>
                <p className="text-muted-foreground">
                  Wij transformeren ideeën naar realiteit met cutting-edge technologie
                </p>
              </motion.div>

              {/* Stats Cards */}
              <motion.div 
                className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-2xl"
                whileHover={{ y: -5, borderColor: "hsl(var(--primary))" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Projecten afgerond</p>
              </motion.div>

              <motion.div 
                className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-2xl"
                whileHover={{ y: -5, borderColor: "hsl(var(--accent))" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-gradient-accent mb-2">98%</div>
                <p className="text-sm text-muted-foreground">Tevreden klanten</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccentureHero;
