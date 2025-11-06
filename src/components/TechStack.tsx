import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const TechStack = () => {
  const { t } = useLanguage();
  
  const technologies = {
    "Frontend": ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    "Backend": ["Node.js", "Python", "Java", "Go", ".NET Core"],
    "Mobile": ["React Native", "Flutter", "Swift", "Kotlin"],
    "Cloud & DevOps": ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    "Database": ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    "AI & ML": ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face"],
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">
              {t('tech.tag')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('tech.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('tech.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs], index) => (
            <div
              key={category}
              className="space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-sm py-2 px-4 bg-card hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
