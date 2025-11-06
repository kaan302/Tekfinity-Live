import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@tekfinity.nl",
      href: "mailto:info@tekfinity.nl",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+31 (0) 20 123 4567",
      href: "tel:+31201234567",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Amsterdam, Netherlands",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="h-12" />
                <Input type="email" placeholder="Your Email" className="h-12" />
              </div>
              <Input placeholder="Subject" className="h-12" />
              <Textarea
                placeholder="Your Message"
                className="min-h-[200px] resize-none"
              />
              <Button size="lg" className="w-full sm:w-auto px-8">
                Send Message
              </Button>
            </form>
          </div>

          <div className="animate-slide-in-right space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <a
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
