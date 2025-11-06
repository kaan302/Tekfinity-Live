import { Smartphone, Code2, Cloud, Cpu, Database, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesShowcase = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS & Android apps with cutting-edge features and seamless UX",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Modern, responsive web applications built with latest frameworks",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by advanced AI algorithms",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Big data solutions and analytics for data-driven decisions",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions to protect your assets",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Software Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we deliver end-to-end software engineering services
            that drive innovation and business growth
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
