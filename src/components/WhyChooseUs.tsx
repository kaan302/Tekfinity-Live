import { Zap, Target, Users2, Sparkles } from "lucide-react";
import aiCollabImage from "@/assets/ai-collab.jpg";
import cloudInfraImage from "@/assets/cloud-infra.jpg";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "Agile methodologies ensure rapid development without compromising quality",
    },
    {
      icon: Target,
      title: "Business-Focused Solutions",
      description: "We align technology with your business goals for maximum ROI",
    },
    {
      icon: Users2,
      title: "Dedicated Support",
      description: "24/7 support and maintenance to keep your systems running smoothly",
    },
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "Cutting-edge technology and creative problem-solving",
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">
                Why Choose TEKFINITY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Excellence in Every Line of Code
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We don't just write code—we craft solutions that drive business success.
                Our commitment to excellence, innovation, and client satisfaction sets us apart.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="space-y-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg inline-block">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-square rounded-2xl overflow-hidden hover-lift">
                  <img
                    src={aiCollabImage}
                    alt="AI Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-2xl text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-card border border-border p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-gradient mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years in Business</div>
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden hover-lift">
                  <img
                    src={cloudInfraImage}
                    alt="Cloud Infrastructure"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
