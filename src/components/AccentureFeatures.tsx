import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccentureFeatures = () => {
  const features = [
    {
      title: "What we do",
      description: "Comprehensive software engineering services tailored to your business needs",
      link: "Explore our services",
    },
    {
      title: "What we think",
      description: "Industry insights, thought leadership, and innovative perspectives",
      link: "Read our insights",
    },
    {
      title: "Who we are",
      description: "Meet the team driving digital transformation across the Netherlands",
      link: "About TEKFINITY",
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
