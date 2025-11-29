import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccentureNav from "@/components/AccentureNav";
import AccentureFooter from "@/components/AccentureFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Rocket, 
  Sparkles, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  Globe,
  Smartphone,
  Code,
  Cloud,
  Brain,
  Palette
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

const services = [
  { id: "web", icon: Globe, label: "Web Development" },
  { id: "mobile", icon: Smartphone, label: "App Development" },
  { id: "custom", icon: Code, label: "Custom Software" },
  { id: "cloud", icon: Cloud, label: "Cloud Solutions" },
  { id: "ai", icon: Brain, label: "AI Integration" },
  { id: "design", icon: Palette, label: "UI/UX Design" },
];

const budgetOptions = [
  { id: "small", label: "€5.000 - €15.000", description: "Starter projecten" },
  { id: "medium", label: "€15.000 - €50.000", description: "Middelgrote projecten" },
  { id: "large", label: "€50.000 - €100.000", description: "Enterprise oplossingen" },
  { id: "enterprise", label: "€100.000+", description: "Grote transformaties" },
];

const timelineOptions = [
  { id: "urgent", label: "1-2 maanden", description: "Urgent" },
  { id: "normal", label: "3-4 maanden", description: "Standaard" },
  { id: "relaxed", label: "5-6 maanden", description: "Flexibel" },
  { id: "long", label: "6+ maanden", description: "Langlopend" },
];

const StartProject = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    description: "",
  });

  const totalSteps = 4;

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          subject: `Project Aanvraag: ${formData.company || formData.name}`,
          message: formData.description,
          type: "project",
          projectDetails: {
            budget: budgetOptions.find((b) => b.id === formData.budget)?.label,
            timeline: timelineOptions.find((t) => t.id === formData.timeline)?.label,
            services: formData.services.map((s) => services.find((srv) => srv.id === s)?.label),
            description: formData.description,
          },
        },
      });

      if (error) throw error;

      toast({
        title: t("startProject.success.title"),
        description: t("startProject.success.description"),
      });

      navigate("/");
    } catch (error) {
      console.error("Error submitting project:", error);
      toast({
        title: t("startProject.error.title"),
        description: t("startProject.error.description"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email;
      case 2:
        return formData.services.length > 0;
      case 3:
        return formData.budget && formData.timeline;
      case 4:
        return formData.description.length > 20;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <AccentureNav />

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-6 animate-fade-in">
              <Rocket className="h-4 w-4" />
              <span className="text-sm font-medium">{t("startProject.badge")}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              {t("startProject.hero.title")}
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
              {t("startProject.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500",
                      currentStep >= step
                        ? "bg-primary text-primary-foreground scale-110"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {currentStep > step ? <Check className="h-6 w-6" /> : step}
                  </div>
                  {step < 4 && (
                    <div
                      className={cn(
                        "w-16 md:w-24 h-1 mx-2 rounded-full transition-all duration-500",
                        currentStep > step ? "bg-primary" : "bg-muted"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{t("startProject.steps.contact")}</span>
              <span>{t("startProject.steps.services")}</span>
              <span>{t("startProject.steps.details")}</span>
              <span>{t("startProject.steps.description")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Step 1: Contact Info */}
            {currentStep === 1 && (
              <Card className="animate-fade-in backdrop-blur-sm bg-card/80 border-primary/10">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{t("startProject.step1.title")}</h2>
                      <p className="text-muted-foreground">{t("startProject.step1.subtitle")}</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">{t("startProject.form.name")}</label>
                        <Input
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="h-14 text-lg bg-background/50"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">{t("startProject.form.email")}</label>
                        <Input
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-14 text-lg bg-background/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">{t("startProject.form.company")}</label>
                      <Input
                        placeholder="Company B.V. (optioneel)"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="h-14 text-lg bg-background/50"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Services */}
            {currentStep === 2 && (
              <Card className="animate-fade-in backdrop-blur-sm bg-card/80 border-primary/10">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{t("startProject.step2.title")}</h2>
                      <p className="text-muted-foreground">{t("startProject.step2.subtitle")}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceToggle(service.id)}
                        className={cn(
                          "p-6 rounded-xl border-2 transition-all duration-300 text-left group animate-fade-in",
                          formData.services.includes(service.id)
                            ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                            : "border-border hover:border-primary/50 bg-background/50"
                        )}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors",
                          formData.services.includes(service.id)
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted group-hover:bg-primary/20"
                        )}>
                          <service.icon className="h-6 w-6" />
                        </div>
                        <span className="font-semibold">{service.label}</span>
                        {formData.services.includes(service.id) && (
                          <Check className="h-5 w-5 text-primary absolute top-4 right-4" />
                        )}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Budget & Timeline */}
            {currentStep === 3 && (
              <Card className="animate-fade-in backdrop-blur-sm bg-card/80 border-primary/10">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{t("startProject.step3.title")}</h2>
                      <p className="text-muted-foreground">{t("startProject.step3.subtitle")}</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold mb-4">{t("startProject.form.budget")}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {budgetOptions.map((option, index) => (
                        <button
                          key={option.id}
                          onClick={() => setFormData({ ...formData, budget: option.id })}
                          className={cn(
                            "p-6 rounded-xl border-2 transition-all duration-300 text-left animate-fade-in",
                            formData.budget === option.id
                              ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                              : "border-border hover:border-primary/50 bg-background/50"
                          )}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <span className="font-bold text-lg block">{option.label}</span>
                          <span className="text-sm text-muted-foreground">{option.description}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">{t("startProject.form.timeline")}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {timelineOptions.map((option, index) => (
                        <button
                          key={option.id}
                          onClick={() => setFormData({ ...formData, timeline: option.id })}
                          className={cn(
                            "p-4 rounded-xl border-2 transition-all duration-300 text-center animate-fade-in",
                            formData.timeline === option.id
                              ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                              : "border-border hover:border-primary/50 bg-background/50"
                          )}
                          style={{ animationDelay: `${(index + 4) * 50}ms` }}
                        >
                          <span className="font-bold block">{option.label}</span>
                          <span className="text-sm text-muted-foreground">{option.description}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Description */}
            {currentStep === 4 && (
              <Card className="animate-fade-in backdrop-blur-sm bg-card/80 border-primary/10">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{t("startProject.step4.title")}</h2>
                      <p className="text-muted-foreground">{t("startProject.step4.subtitle")}</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t("startProject.form.description")}</label>
                    <Textarea
                      placeholder={t("startProject.form.descriptionPlaceholder")}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="min-h-[250px] text-lg bg-background/50 resize-none"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      {formData.description.length}/20 {t("startProject.form.minChars")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                disabled={currentStep === 1}
                className="h-14 px-8"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                {t("startProject.navigation.back")}
              </Button>
              
              {currentStep < totalSteps ? (
                <Button
                  size="lg"
                  onClick={() => setCurrentStep((prev) => Math.min(totalSteps, prev + 1))}
                  disabled={!canProceed()}
                  className="h-14 px-8 group"
                >
                  {t("startProject.navigation.next")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              ) : (
                <Button
                  size="lg"
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className="h-14 px-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                >
                  {isSubmitting ? t("startProject.navigation.submitting") : t("startProject.navigation.submit")}
                  <Rocket className="ml-2 h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <AccentureFooter />
    </div>
  );
};

export default StartProject;
