import { CheckCircle2 } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const About = () => {
  const values = [
    "Customer-centric approach",
    "Cutting-edge technology",
    "Agile development methodology",
    "Transparent communication",
    "Quality-driven solutions",
    "Long-term partnerships",
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <img src={servicesBg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">TEKFINITY</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Based in the Netherlands, TEKFINITY is a premier software engineering and
              development company dedicated to transforming businesses through innovative
              technology solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We specialize in creating custom applications and websites that not only meet
              but exceed our clients' expectations. Our team of experienced developers and
              designers work collaboratively to deliver solutions that drive real business value.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={servicesBg}
                  alt="Technology visualization"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-xl shadow-xl">
                <div className="text-5xl font-bold mb-2">5+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
