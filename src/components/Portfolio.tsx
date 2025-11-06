import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import appDevImage from "@/assets/app-dev.jpg";
import webDevImage from "@/assets/web-dev.jpg";
import customSoftwareImage from "@/assets/custom-software.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Full-stack e-commerce solution with advanced inventory management",
      image: webDevImage,
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "Healthcare Mobile App",
      category: "App Development",
      description: "Patient management system with real-time appointment scheduling",
      image: appDevImage,
      tags: ["React Native", "Firebase", "TypeScript"],
    },
    {
      title: "Enterprise Resource Planning",
      category: "Custom Software",
      description: "Comprehensive ERP system for manufacturing operations",
      image: customSoftwareImage,
      tags: ["Angular", "Spring Boot", "MySQL"],
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our expertise through successful client partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover-lift overflow-hidden border-none shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
                <Badge className="absolute top-4 right-4 bg-primary">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
