import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const AccentureCards = () => {
  const { t } = useLanguage();
  
  const cards = [
    {
      type: t('cards.report'),
      title: t('cards.card1.title'),
      description: t('cards.card1.desc'),
      image: card1,
      gradient: "from-orange-200/20 to-pink-200/20",
    },
    {
      type: t('cards.report'),
      title: t('cards.card2.title'),
      description: t('cards.card2.desc'),
      image: card2,
      gradient: "from-blue-200/20 to-purple-200/20",
    },
    {
      type: t('cards.case'),
      title: t('cards.card3.title'),
      description: t('cards.card3.desc'),
      image: card3,
      gradient: "from-purple-200/20 to-indigo-200/20",
    },
    {
      type: t('cards.report'),
      title: t('cards.card4.title'),
      description: t('cards.card4.desc'),
      image: card4,
      gradient: "from-pink-200/20 to-purple-200/20",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card hover-lift cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-80`} />
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground border-none">
                  {card.type}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccentureCards;
