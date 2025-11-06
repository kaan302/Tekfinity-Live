import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'nl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  nl: {
    // Navigation
    'nav.services': 'Wat we doen',
    'nav.insights': 'Wat we denken',
    'nav.about': 'Wie we zijn',
    'nav.careers': 'Carrières',
    'nav.country': 'Nederland',
    
    // Hero
    'hero.title': 'SAMEN BOUWEN WE',
    'hero.titleHighlight': 'DE TOEKOMST',
    'hero.subtitle': 'Schaalbare Softwareoplossingen',
    'hero.description': 'We helpen klanten prioriteit te geven aan bedrijfsstrategie, technologische gereedheid en organisatorische gereedheid om sneller waarde te creëren.',
    'hero.cta': 'Bekijk wat we doen',
    
    // Stats
    'stats.projects': 'Succesvolle Projecten',
    'stats.clients': 'Tevreden Klanten',
    'stats.experience': 'Jaar Ervaring',
    'stats.experts': 'Tech Experts',
    
    // Services
    'services.title': 'Onze Diensten',
    'services.subtitle': 'Uitgebreide softwareoplossingen voor elke bedrijfsbehoefte',
    'services.web': 'Web Development',
    'services.webDesc': 'Moderne, responsieve websites en webapplicaties gebouwd met de nieuwste technologieën',
    'services.app': 'App Development',
    'services.appDesc': 'Native en cross-platform mobiele applicaties voor iOS en Android',
    'services.custom': 'Custom Software',
    'services.customDesc': 'Op maat gemaakte softwareoplossingen afgestemd op uw unieke bedrijfsprocessen',
    'services.cloud': 'Cloud Infrastructuur',
    'services.cloudDesc': 'Schaalbare cloud-architectuur en DevOps-oplossingen',
    'services.ai': 'AI & Automatisering',
    'services.aiDesc': 'Intelligente automatisering en machine learning integraties',
    
    // Why Choose Us
    'why.title': 'Waarom TEKFINITY?',
    'why.subtitle': 'Wat ons onderscheidt in de Nederlandse tech-industrie',
    'why.innovation': 'Innovatie Gedreven',
    'why.innovationDesc': 'We blijven voorop lopen met cutting-edge technologieën en best practices',
    'why.quality': 'Kwaliteit Gegarandeerd',
    'why.qualityDesc': 'Rigoureuze testprocedures zorgen voor foutloze software-oplossingen',
    'why.agile': 'Agile Aanpak',
    'why.agileDesc': 'Flexibele ontwikkeling met regelmatige updates en transparante communicatie',
    'why.support': '24/7 Ondersteuning',
    'why.supportDesc': 'Toegewijde technische ondersteuning wanneer u ons nodig heeft',
    
    // Tech Stack
    'tech.title': 'Onze Technologie Stack',
    'tech.subtitle': 'We werken met toonaangevende technologieën om superieure resultaten te leveren',
    
    // Testimonials
    'testimonials.title': 'Wat Onze Klanten Zeggen',
    'testimonials.subtitle': 'Betrouwbaar door toonaangevende bedrijven in Nederland',
    
    // CTA
    'cta.title': 'Klaar om Uw Project te Starten?',
    'cta.description': "Laten we samenwerken om uw visie tot leven te brengen met cutting-edge softwareoplossingen",
    'cta.button': 'Neem Contact Op',
    
    // Footer
    'footer.services': 'Diensten',
    'footer.company': 'Bedrijf',
    'footer.contact': 'Contact',
    'footer.follow': 'Volg Ons',
    'footer.rights': 'Alle rechten voorbehouden.',
  },
  en: {
    // Navigation
    'nav.services': 'What we do',
    'nav.insights': 'What we think',
    'nav.about': 'Who we are',
    'nav.careers': 'Careers',
    'nav.country': 'Netherlands',
    
    // Hero
    'hero.title': 'TOGETHER WE BUILD',
    'hero.titleHighlight': 'THE FUTURE',
    'hero.subtitle': 'Scaling Software Solutions',
    'hero.description': 'We help clients prioritize business strategy, technology readiness and organizational readiness to get to value faster.',
    'hero.cta': 'See what we do',
    
    // Stats
    'stats.projects': 'Successful Projects',
    'stats.clients': 'Happy Clients',
    'stats.experience': 'Years Experience',
    'stats.experts': 'Tech Experts',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive software solutions for every business need',
    'services.web': 'Web Development',
    'services.webDesc': 'Modern, responsive websites and web applications built with the latest technologies',
    'services.app': 'App Development',
    'services.appDesc': 'Native and cross-platform mobile applications for iOS and Android',
    'services.custom': 'Custom Software',
    'services.customDesc': 'Tailor-made software solutions designed for your unique business processes',
    'services.cloud': 'Cloud Infrastructure',
    'services.cloudDesc': 'Scalable cloud architecture and DevOps solutions',
    'services.ai': 'AI & Automation',
    'services.aiDesc': 'Intelligent automation and machine learning integrations',
    
    // Why Choose Us
    'why.title': 'Why TEKFINITY?',
    'why.subtitle': 'What sets us apart in the Dutch tech industry',
    'why.innovation': 'Innovation Driven',
    'why.innovationDesc': 'We stay ahead with cutting-edge technologies and best practices',
    'why.quality': 'Quality Guaranteed',
    'why.qualityDesc': 'Rigorous testing procedures ensure flawless software solutions',
    'why.agile': 'Agile Approach',
    'why.agileDesc': 'Flexible development with regular updates and transparent communication',
    'why.support': '24/7 Support',
    'why.supportDesc': 'Dedicated technical support whenever you need us',
    
    // Tech Stack
    'tech.title': 'Our Technology Stack',
    'tech.subtitle': 'We work with industry-leading technologies to deliver superior results',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Trusted by leading companies across the Netherlands',
    
    // CTA
    'cta.title': 'Ready to Start Your Project?',
    'cta.description': "Let's work together to bring your vision to life with cutting-edge software solutions",
    'cta.button': 'Get In Touch',
    
    // Footer
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow Us',
    'footer.rights': 'All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('nl');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
