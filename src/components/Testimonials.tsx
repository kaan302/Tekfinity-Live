import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah van der Berg",
      role: "CTO, TechCorp NL",
      content: "TEKFINITY transformed our legacy systems into a modern, scalable platform. Their expertise and dedication are unmatched.",
      rating: 5,
    },
    {
      name: "Mark Jansen",
      role: "CEO, StartupHub",
      content: "Working with TEKFINITY was a game-changer. They delivered our mobile app ahead of schedule with exceptional quality.",
      rating: 5,
    },
    {
      name: "Lisa de Vries",
      role: "Product Manager, FinanceFlow",
      content: "The team's technical knowledge and collaborative approach made our complex project a success. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from the companies we've helped transform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-6">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
