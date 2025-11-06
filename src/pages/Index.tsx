import AccentureNav from "@/components/AccentureNav";
import AccentureHero from "@/components/AccentureHero";
import StatsSection from "@/components/StatsSection";
import AccentureCards from "@/components/AccentureCards";
import ServicesShowcase from "@/components/ServicesShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import AccentureFeatures from "@/components/AccentureFeatures";
import CTASection from "@/components/CTASection";
import AccentureFooter from "@/components/AccentureFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AccentureNav />
      <main>
        <AccentureHero />
        <StatsSection />
        <AccentureCards />
        <ServicesShowcase />
        <WhyChooseUs />
        <TechStack />
        <Testimonials />
        <AccentureFeatures />
        <CTASection />
      </main>
      <AccentureFooter />
    </div>
  );
};

export default Index;
