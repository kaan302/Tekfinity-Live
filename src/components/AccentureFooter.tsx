
import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";
import { useLanguage } from "@/contexts/LanguageContext";

const AccentureFooter = () => {
  const { t } = useLanguage();
  
  const footerSections = [
    {
      title: t('footer.about'),
      links: [
        { label: t('footer.aboutUs'), href: '/about' },
        { label: t('footer.careers'), href: '/careers' },
        { label: t('footer.contactUs'), href: '/contact' },
      ],
    },
    {
      title: t('footer.services'),
      links: [
        { label: t('footer.strategy'), href: '/services' },
        { label: t('footer.technology'), href: '/services' },
        { label: t('footer.operations'), href: '/services' },
      ],
    },
    {
      title: t('footer.insights'),
      links: [
        { label: t('footer.research'), href: '/insights' },
        { label: t('footer.caseStudies'), href: '/insights' },
        { label: t('footer.blogs'), href: '/insights' },
      ],
    },
    {
      title: t('footer.resources'),
      links: [
        { label: t('footer.clients'), href: '/about' },
        { label: t('footer.partners'), href: '/about' },
        { label: t('cta.start'), href: '/start-project' },
      ],
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
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Bottom Links */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <img src={logoWhite} alt="TEKFINITY" className="h-6" />
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
