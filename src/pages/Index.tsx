import AccentureNav from "@/components/AccentureNav";
import AccentureHero from "@/components/AccentureHero";
import AccentureCards from "@/components/AccentureCards";
import AccentureFeatures from "@/components/AccentureFeatures";
import AccentureFooter from "@/components/AccentureFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AccentureNav />
      <main>
        <AccentureHero />
        <AccentureCards />
        <AccentureFeatures />
      </main>
      <AccentureFooter />
    </div>
  );
};

export default Index;
