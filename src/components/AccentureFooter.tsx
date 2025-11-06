import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import { useLanguage } from "@/contexts/LanguageContext";

const AccentureFooter = () => {
  const { t } = useLanguage();
  
  const footerSections = [
    {
      title: t('footer.about'),
      links: [t('footer.aboutUs'), t('footer.leadership'), t('footer.careers'), t('footer.newsroom'), t('footer.investor')],
    },
    {
      title: t('footer.services'),
      links: [t('footer.strategy'), t('footer.technology'), t('footer.operations'), t('footer.industry')],
    },
    {
      title: t('footer.insights'),
      links: [t('footer.research'), t('footer.caseStudies'), t('footer.blogs'), t('footer.podcasts')],
    },
    {
      title: t('footer.resources'),
      links: [t('footer.clients'), t('footer.partners'), t('footer.suppliers'), t('footer.contactUs')],
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
                {t('footer.privacy')}
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                {t('footer.terms')}
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                {t('footer.cookies')}
              </a>
              <span>{t('footer.rights')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AccentureFooter;
