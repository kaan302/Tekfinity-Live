import { Smartphone, Globe, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import appDevImage from "@/assets/app-dev.jpg";
import webDevImage from "@/assets/web-dev.jpg";
import customSoftwareImage from "@/assets/custom-software.jpg";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      image: appDevImage,
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive, scalable web applications built with modern technologies to meet your business objectives.",
      image: webDevImage,
    },
    {
      icon: Code2,
      title: "Custom Software",
      description: "Tailored software solutions designed specifically for your unique business processes and requirements.",
      image: customSoftwareImage,
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software solutions to power your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover-lift border-none shadow-lg overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
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

export default Services;
