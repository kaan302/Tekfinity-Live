import { ArrowRight, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccentureHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              TOGETHER WE{" "}
              <span className="relative inline-block">
                REIN
                <span className="text-primary">V</span>
                ENTED
              </span>
            </h1>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-foreground hover:text-primary"
            >
              <Pause size={20} />
            </Button>
          </div>

          {/* Right Content Card */}
          <div className="bg-card border border-border p-8 lg:p-12">
            <div className="w-12 h-1 bg-primary mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Scaling Software Solutions
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We help clients prioritize business strategy, technology readiness
              and organizational readiness to get to value faster.
            </p>
            <Button className="group bg-primary hover:bg-primary/90 text-primary-foreground">
              See what we do
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccentureHero;
