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
    'stats.title': 'Vertrouwd door Toonaangevende Organisaties',
    'stats.subtitle': 'Ons trackrecord spreekt voor zich',
    'stats.clients.number': '500+',
    'stats.clients.label': 'Klanten Geholpen',
    'stats.clients.desc': 'Door heel Nederland',
    'stats.satisfaction.number': '98%',
    'stats.satisfaction.label': 'Klanttevredenheid',
    'stats.satisfaction.desc': 'Toonaangevend retentiepercentage',
    'stats.projects.number': '250+',
    'stats.projects.label': 'Projecten Opgeleverd',
    'stats.projects.desc': 'Op tijd en binnen budget',
    'stats.experience.number': '15+',
    'stats.experience.label': 'Jaar Ervaring',
    'stats.experience.desc': 'In software engineering',
    
    // Cards
    'cards.report': 'ONDERZOEKSRAPPORT',
    'cards.case': 'CASESTUDIE',
    'cards.card1.title': 'Digitale Transformatie: Van complexiteit beheren tot groei versnellen',
    'cards.card1.desc': 'Digitale transformatie is niet alleen een technologie-strategie—het is een gamechanger voor bedrijfsconcurrentievermogen. Ontdek hoe organisaties snel bewegen om hun voordeel te behouden.',
    'cards.card2.title': 'Moderne Ontwikkeling 2025: De toekomst van agile software engineering',
    'cards.card2.desc': 'Ontwikkelteams, geconfronteerd met complexiteit en snelle verandering, zoeken efficiëntie gecombineerd met innovatie, schaalbaarheid en verbinding.',
    'cards.card3.title': 'Enterprise Oplossingen: Platforms bouwen voor morgen',
    'cards.card3.desc': 'Hoe toonaangevende bedrijven hun legacy systemen transformeren naar moderne, schaalbare platforms die bedrijfswaarde opleveren.',
    'cards.card4.title': 'Innovatie Versneld: Mens-AI samenwerking in software',
    'cards.card4.desc': 'Het snijvlak verkennen van menselijke creativiteit en AI-mogelijkheden om te revolutioneren hoe we softwareoplossingen bouwen.',
    
    // Services Showcase
    'servicesShowcase.tag': 'Onze Expertise',
    'servicesShowcase.title': 'Uitgebreide Softwareoplossingen',
    'servicesShowcase.subtitle': 'Van concept tot implementatie leveren we end-to-end software engineering diensten die innovatie en bedrijfsgroei stimuleren',
    'servicesShowcase.mobile': 'Mobiele App Development',
    'servicesShowcase.mobileDesc': 'Native iOS & Android apps met cutting-edge functies en naadloze UX',
    'servicesShowcase.web': 'Web Development',
    'servicesShowcase.webDesc': 'Moderne, responsieve webapplicaties gebouwd met de nieuwste frameworks',
    'servicesShowcase.cloud': 'Cloud Oplossingen',
    'servicesShowcase.cloudDesc': 'Schaalbare cloud-infrastructuur en migratiediensten',
    'servicesShowcase.ai': 'AI & Machine Learning',
    'servicesShowcase.aiDesc': 'Intelligente oplossingen aangedreven door geavanceerde AI-algoritmes',
    'servicesShowcase.data': 'Data Engineering',
    'servicesShowcase.dataDesc': 'Big data oplossingen en analytics voor datagedreven beslissingen',
    'servicesShowcase.security': 'Cyberbeveiliging',
    'servicesShowcase.securityDesc': 'Enterprise-grade beveiligingsoplossingen om uw assets te beschermen',
    
    // Why Choose Us
    'why.tag': 'Waarom TEKFINITY Kiezen',
    'why.title': 'Excellentie in Elke Regel Code',
    'why.subtitle': 'We schrijven niet alleen code—we creëren oplossingen die bedrijfssucces stimuleren. Onze toewijding aan excellentie, innovatie en klanttevredenheid onderscheidt ons.',
    'why.fast': 'Razendsnel Leveren',
    'why.fastDesc': 'Agile methodologieën zorgen voor snelle ontwikkeling zonder kwaliteit in te boeten',
    'why.business': 'Bedrijfsgerichte Oplossingen',
    'why.businessDesc': 'We stemmen technologie af op uw bedrijfsdoelen voor maximale ROI',
    'why.dedicated': 'Toegewijde Ondersteuning',
    'why.dedicatedDesc': '24/7 ondersteuning en onderhoud om uw systemen soepel te laten draaien',
    'why.innovation': 'Innovatie Eerst',
    'why.innovationDesc': 'Cutting-edge technologie en creatief probleemoplossen',
    'why.successRate': 'Succespercentage',
    'why.yearsInBusiness': 'Jaar in Bedrijf',
    
    // Tech Stack
    'tech.tag': 'Technologie Stack',
    'tech.title': 'Gebouwd met Toonaangevende Technologieën',
    'tech.subtitle': 'We maken gebruik van de nieuwste en meest betrouwbare technologieën om robuuste, schaalbare oplossingen te bouwen',
    
    // Testimonials
    'testimonials.tag': 'Klantbeoordelingen',
    'testimonials.title': 'Wat Onze Klanten Zeggen',
    'testimonials.subtitle': 'Geloof ons niet zomaar—hoor van de bedrijven die we hebben helpen transformeren',
    'testimonials.test1.content': 'TEKFINITY transformeerde onze legacy systemen naar een modern, schaalbaar platform. Hun expertise en toewijding zijn ongeëvenaard.',
    'testimonials.test2.content': 'Werken met TEKFINITY was een gamechanger. Ze leverden onze mobiele app voor schema met uitzonderlijke kwaliteit.',
    'testimonials.test3.content': 'De technische kennis en samenwerkende aanpak van het team maakten ons complexe project tot een succes. Sterk aanbevolen!',
    
    // CTA
    'cta.tag': 'Klaar om te Beginnen?',
    'cta.title': 'Laten We Samen Iets',
    'cta.titleHighlight': 'Buitengewoons Bouwen',
    'cta.subtitle': 'Transformeer uw visie naar werkelijkheid met ons expert team. Plan een gratis consultatie om uw project vandaag te bespreken.',
    'cta.start': 'Start Uw Project',
    'cta.contact': 'Contact Verkoop',
    
    // Features
    'features.do.title': 'Wat we doen',
    'features.do.desc': 'Uitgebreide software engineering diensten op maat gemaakt voor uw bedrijfsbehoeften',
    'features.do.link': 'Ontdek onze diensten',
    'features.think.title': 'Wat we denken',
    'features.think.desc': 'Industrie-inzichten, thought leadership en innovatieve perspectieven',
    'features.think.link': 'Lees onze inzichten',
    'features.who.title': 'Wie we zijn',
    'features.who.desc': 'Maak kennis met het team dat digitale transformatie stimuleert in Nederland',
    'features.who.link': 'Over TEKFINITY',
    
    // Footer
    'footer.about': 'Over TEKFINITY',
    'footer.aboutUs': 'Over Ons',
    'footer.leadership': 'Leiderschap',
    'footer.careers': 'Carrières',
    'footer.newsroom': 'Nieuwskamer',
    'footer.investor': 'Investeerdersrelaties',
    'footer.services': 'Diensten',
    'footer.strategy': 'Strategie & Consultancy',
    'footer.technology': 'Technologie',
    'footer.operations': 'Operaties',
    'footer.industry': 'Brancheoplossingen',
    'footer.insights': 'Inzichten',
    'footer.research': 'Onderzoek & Inzichten',
    'footer.caseStudies': 'Casestudies',
    'footer.blogs': 'Blogs',
    'footer.podcasts': 'Podcasts',
    'footer.resources': 'Bronnen',
    'footer.clients': 'Klanten',
    'footer.partners': 'Partners',
    'footer.suppliers': 'Leveranciers',
    'footer.contactUs': 'Contact',
    'footer.privacy': 'Privacyverklaring',
    'footer.terms': 'Gebruiksvoorwaarden',
    'footer.cookies': 'Cookiebeleid',
    'footer.rights': '© 2025 TEKFINITY',
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
    'stats.title': 'Trusted by Leading Organizations',
    'stats.subtitle': 'Our track record speaks for itself',
    'stats.clients.number': '500+',
    'stats.clients.label': 'Clients Served',
    'stats.clients.desc': 'Across the Netherlands',
    'stats.satisfaction.number': '98%',
    'stats.satisfaction.label': 'Client Satisfaction',
    'stats.satisfaction.desc': 'Industry-leading retention',
    'stats.projects.number': '250+',
    'stats.projects.label': 'Projects Delivered',
    'stats.projects.desc': 'On time and on budget',
    'stats.experience.number': '15+',
    'stats.experience.label': 'Years Experience',
    'stats.experience.desc': 'In software engineering',
    
    // Cards
    'cards.report': 'RESEARCH REPORT',
    'cards.case': 'CASE STUDY',
    'cards.card1.title': 'Digital Transformation: From managing complexity to accelerating growth',
    'cards.card1.desc': "Digital transformation isn't just a technology play—it's a game-changer for business competitiveness. Discover how organizations are moving fast to secure their advantage.",
    'cards.card2.title': 'Modern Development 2025: The future of agile software engineering',
    'cards.card2.desc': 'Development teams, facing complexity and rapid change, are seeking efficiency combined with innovation, scalability and connection.',
    'cards.card3.title': 'Enterprise Solutions: Building platforms for tomorrow',
    'cards.card3.desc': 'How leading companies are transforming their legacy systems into modern, scalable platforms that drive business value.',
    'cards.card4.title': 'Innovation Accelerated: Human-AI collaboration in software',
    'cards.card4.desc': 'Exploring the intersection of human creativity and AI capabilities to revolutionize how we build software solutions.',
    
    // Services Showcase
    'servicesShowcase.tag': 'Our Expertise',
    'servicesShowcase.title': 'Comprehensive Software Solutions',
    'servicesShowcase.subtitle': 'From concept to deployment, we deliver end-to-end software engineering services that drive innovation and business growth',
    'servicesShowcase.mobile': 'Mobile App Development',
    'servicesShowcase.mobileDesc': 'Native iOS & Android apps with cutting-edge features and seamless UX',
    'servicesShowcase.web': 'Web Development',
    'servicesShowcase.webDesc': 'Modern, responsive web applications built with the latest frameworks',
    'servicesShowcase.cloud': 'Cloud Solutions',
    'servicesShowcase.cloudDesc': 'Scalable cloud infrastructure and migration services',
    'servicesShowcase.ai': 'AI & Machine Learning',
    'servicesShowcase.aiDesc': 'Intelligent solutions powered by advanced AI algorithms',
    'servicesShowcase.data': 'Data Engineering',
    'servicesShowcase.dataDesc': 'Big data solutions and analytics for data-driven decisions',
    'servicesShowcase.security': 'Cybersecurity',
    'servicesShowcase.securityDesc': 'Enterprise-grade security solutions to protect your assets',
    
    // Why Choose Us
    'why.tag': 'Why Choose TEKFINITY',
    'why.title': 'Excellence in Every Line of Code',
    'why.subtitle': "We don't just write code—we craft solutions that drive business success. Our commitment to excellence, innovation, and client satisfaction sets us apart.",
    'why.fast': 'Lightning Fast Delivery',
    'why.fastDesc': 'Agile methodologies ensure rapid development without compromising quality',
    'why.business': 'Business-Focused Solutions',
    'why.businessDesc': 'We align technology with your business goals for maximum ROI',
    'why.dedicated': 'Dedicated Support',
    'why.dedicatedDesc': '24/7 support and maintenance to keep your systems running smoothly',
    'why.innovation': 'Innovation First',
    'why.innovationDesc': 'Cutting-edge technology and creative problem-solving',
    'why.successRate': 'Success Rate',
    'why.yearsInBusiness': 'Years in Business',
    
    // Tech Stack
    'tech.tag': 'Technology Stack',
    'tech.title': 'Built with Industry-Leading Technologies',
    'tech.subtitle': 'We leverage the latest and most reliable technologies to build robust, scalable solutions',
    
    // Testimonials
    'testimonials.tag': 'Client Testimonials',
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': "Don't just take our word for it - hear from the companies we've helped transform",
    'testimonials.test1.content': 'TEKFINITY transformed our legacy systems into a modern, scalable platform. Their expertise and dedication are unmatched.',
    'testimonials.test2.content': 'Working with TEKFINITY was a game-changer. They delivered our mobile app ahead of schedule with exceptional quality.',
    'testimonials.test3.content': "The team's technical knowledge and collaborative approach made our complex project a success. Highly recommended!",
    
    // CTA
    'cta.tag': 'Ready to Get Started?',
    'cta.title': "Let's Build Something",
    'cta.titleHighlight': 'Extraordinary Together',
    'cta.subtitle': 'Transform your vision into reality with our expert team. Schedule a free consultation to discuss your project today.',
    'cta.start': 'Start Your Project',
    'cta.contact': 'Contact Sales',
    
    // Features
    'features.do.title': 'What we do',
    'features.do.desc': 'Comprehensive software engineering services tailored to your business needs',
    'features.do.link': 'Explore our services',
    'features.think.title': 'What we think',
    'features.think.desc': 'Industry insights, thought leadership, and innovative perspectives',
    'features.think.link': 'Read our insights',
    'features.who.title': 'Who we are',
    'features.who.desc': 'Meet the team driving digital transformation across the Netherlands',
    'features.who.link': 'About TEKFINITY',
    
    // Footer
    'footer.about': 'About TEKFINITY',
    'footer.aboutUs': 'About Us',
    'footer.leadership': 'Leadership',
    'footer.careers': 'Careers',
    'footer.newsroom': 'Newsroom',
    'footer.investor': 'Investor Relations',
    'footer.services': 'Services',
    'footer.strategy': 'Strategy & Consulting',
    'footer.technology': 'Technology',
    'footer.operations': 'Operations',
    'footer.industry': 'Industry Solutions',
    'footer.insights': 'Insights',
    'footer.research': 'Research & Insights',
    'footer.caseStudies': 'Case Studies',
    'footer.blogs': 'Blogs',
    'footer.podcasts': 'Podcasts',
    'footer.resources': 'Resources',
    'footer.clients': 'Clients',
    'footer.partners': 'Partners',
    'footer.suppliers': 'Suppliers',
    'footer.contactUs': 'Contact Us',
    'footer.privacy': 'Privacy Statement',
    'footer.terms': 'Terms of Use',
    'footer.cookies': 'Cookie Policy',
    'footer.rights': '© 2025 TEKFINITY',
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
