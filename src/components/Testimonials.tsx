import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: "Raihan Saboerali",
      role: "Cartura",
      content: t('testimonials.test1.content'),
      rating: 5,
    },
    {
      name: "Zekeriya Tezcan",
      role: "Moonstar Studios",
      content: t('testimonials.test2.content'),
      rating: 5,
    },
    {
      name: "Fawaz Alayesh",
      role: "Devcaffe",
      content: t('testimonials.test3.content'),
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">
              {t('testimonials.tag')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
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
