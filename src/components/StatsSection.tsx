import { TrendingUp, Users, Award, Globe2 } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Clients Served",
      description: "Across the Netherlands",
    },
    {
      icon: Award,
      number: "98%",
      label: "Client Satisfaction",
      description: "Industry-leading retention",
    },
    {
      icon: TrendingUp,
      number: "250+",
      label: "Projects Delivered",
      description: "On time and on budget",
    },
    {
      icon: Globe2,
      number: "15+",
      label: "Years Experience",
      description: "In software engineering",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-card border border-border rounded-lg p-8 hover-lift">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-5xl font-bold text-gradient">
                    {stat.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
