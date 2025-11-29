import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccentureNav from "@/components/AccentureNav";
import AccentureFooter from "@/components/AccentureFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@tekfinity.nl",
      href: "mailto:info@tekfinity.nl",
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      content: "+31 (0) 20 123 4567",
      href: "tel:+31201234567",
    },
    {
      icon: MapPin,
      title: t("contact.location"),
      content: "Amsterdam, Netherlands",
      href: "#",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          ...formData,
          type: "contact",
        },
      });

      if (error) throw error;

      toast({
        title: t("contact.success.title"),
        description: t("contact.success.description"),
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: t("contact.error.title"),
        description: t("contact.error.description"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AccentureNav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              {t("contact.hero.title")}
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
              {t("contact.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-8">{t("contact.form.title")}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder={t("contact.form.name")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-14 text-lg"
                  />
                  <Input
                    type="email"
                    placeholder={t("contact.form.email")}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-14 text-lg"
                  />
                </div>
                <Input
                  placeholder={t("contact.form.subject")}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="h-14 text-lg"
                />
                <Textarea
                  placeholder={t("contact.form.message")}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-[200px] resize-none text-lg"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto px-8 h-14 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-8">{t("contact.info.title")}</h2>
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <a href={info.href} className="flex items-start gap-4 group">
                      <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}

              {/* CTA Card */}
              <Card className="bg-primary text-primary-foreground mt-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{t("contact.cta.title")}</h3>
                  <p className="text-primary-foreground/80 mb-6">
                    {t("contact.cta.description")}
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => navigate("/start-project")}
                    className="group"
                  >
                    {t("contact.cta.button")}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <AccentureFooter />
    </div>
  );
};

export default Contact;
