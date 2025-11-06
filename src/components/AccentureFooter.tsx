import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const AccentureFooter = () => {
  const footerSections = [
    {
      title: "About TEKFINITY",
      links: ["About Us", "Leadership", "Careers", "Newsroom", "Investor Relations"],
    },
    {
      title: "Services",
      links: ["Strategy & Consulting", "Technology", "Operations", "Industry Solutions"],
    },
    {
      title: "Insights",
      links: ["Research & Insights", "Case Studies", "Blogs", "Podcasts"],
    },
    {
      title: "Resources",
      links: ["Clients", "Partners", "Suppliers", "Contact Us"],
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Bottom Links */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <img src={logoWhite} alt="TEKFINITY" className="h-6" />
              <div className="flex items-center gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Statement
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
              <span>© 2025 TEKFINITY</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AccentureFooter;
