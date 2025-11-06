import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ["About Us", "Services", "Portfolio", "Contact"],
    Services: ["App Development", "Web Development", "Custom Software", "Consulting"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logoWhite} alt="TEKFINITY" className="h-10 mb-4" />
            <p className="text-background/80 text-sm leading-relaxed">
              Transforming businesses through innovative software solutions across the Netherlands.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/80 hover:text-background text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/60 text-sm">
            © {currentYear} TEKFINITY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
