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
    
    // Services Page
    'services.hero.title': 'Wat We Doen',
    'services.hero.subtitle': 'Uitgebreide software engineering diensten om uw bedrijf te transformeren',
    'services.custom.title': 'Maatwerk Software',
    'services.custom.desc': 'Op maat gemaakte oplossingen perfect afgestemd op uw unieke bedrijfsbehoeften',
    'services.consulting.title': 'Technische Consultancy',
    'services.consulting.desc': 'Expert advies om uw technologiestrategie te optimaliseren',
    'services.process.title': 'Ons Proces',
    'services.process.subtitle': 'Van concept tot oplevering volgen we een bewezen aanpak die kwaliteit en succes garandeert',
    'services.process.step1.title': 'Ontdekking',
    'services.process.step1.desc': 'We beginnen met het begrijpen van uw doelen, uitdagingen en visie',
    'services.process.step2.title': 'Strategie',
    'services.process.step2.desc': 'Ontwikkel een technische roadmap afgestemd op uw bedrijfsdoelen',
    'services.process.step3.title': 'Ontwikkeling',
    'services.process.step3.desc': 'Bouwen van schaalbare, hoogwaardige oplossingen met agile methodologieën',
    'services.process.step4.title': 'Oplevering',
    'services.process.step4.desc': 'Naadloze implementatie met voortdurende ondersteuning en optimalisatie',
    'services.cta.title': 'Klaar om uw project te starten?',
    'services.cta.desc': 'Neem vandaag nog contact met ons op om te bespreken hoe wij uw bedrijf kunnen helpen',
    
    // Insights Page
    'insights.hero.title': 'Wat We Denken',
    'insights.hero.subtitle': 'Industrie-inzichten, onderzoek en thought leadership',
    'insights.featured': 'UITGELICHT',
    'insights.featured.title': 'De Toekomst van Software Engineering in 2025',
    'insights.featured.desc': 'Ontdek hoe AI, cloud-native architectuur en moderne ontwikkelpraktijken de industrie herdefiniëren.',
    'insights.readMore': 'Lees meer',
    'insights.latest': 'Laatste Inzichten',
    
    // About Page
    'about.hero.title': 'Wie We Zijn',
    'about.hero.subtitle': 'Een team van gepassioneerde innovators die digitale transformatie stimuleren',
    'about.story.title': 'Ons Verhaal',
    'about.story.p1': 'TEKFINITY werd opgericht met één missie: de kloof overbruggen tussen bedrijfsdoelen en technologische innovatie. Vanaf dag één hebben we ons gericht op het leveren van software engineering excellence.',
    'about.story.p2': 'Vandaag werken we met toonaangevende organisaties in Nederland, waarbij we digitale transformatie stimuleren door middel van cutting-edge technologie en ongeëvenaarde expertise.',
    'about.story.p3': 'Met een team van meer dan 150 getalenteerde engineers, designers en consultants leveren we innovatieve oplossingen die echte bedrijfswaarde creëren. Onze klanten kiezen ons vanwege onze bewezen trackrecord, technische expertise en onwrikbare toewijding aan hun succes.',
    'about.values.title': 'Onze Waarden',
    'about.values.subtitle': 'De principes die ons werk leiden',
    'about.values.mission.title': 'Onze Missie',
    'about.values.mission.desc': 'Bedrijven empoweren met innovatieve softwareoplossingen',
    'about.values.team.title': 'Ons Team',
    'about.values.team.desc': 'Talentvolle professionals toegewijd aan excellentie',
    'about.values.excellence.title': 'Excellence',
    'about.values.excellence.desc': 'Altijd streven naar de hoogste kwaliteitsnormen',
    'about.values.innovation.title': 'Innovatie',
    'about.values.innovation.desc': 'De grenzen van wat mogelijk is verleggen',
    
    // Careers Page
    'careers.hero.title': 'Carrières bij TEKFINITY',
    'careers.hero.subtitle': 'Word deel van een team dat de toekomst van software engineering vormt',
    'careers.benefits.title': 'Waarom bij ons werken?',
    'careers.benefits.learning': '🎓 Continue leer- en ontwikkelingsmogelijkheden',
    'careers.benefits.balance': '⚖️ Werk-privébalans en flexibele werktijden',
    'careers.benefits.health': '🏥 Uitgebreid gezondheids- en wellnessprogramma',
    'careers.benefits.remote': '🌍 Remote werk opties',
    'careers.benefits.growth': '📈 Duidelijke carrièrepaden en groei',
    'careers.benefits.culture': '🤝 Collaboratieve en inclusieve cultuur',
    'careers.openings.title': 'Open Posities',
    'careers.job1.title': 'Senior Full-Stack Developer',
    'careers.job1.location': 'Amsterdam',
    'careers.job1.type': 'Fulltime',
    'careers.job1.department': 'Engineering',
    'careers.job2.title': 'Cloud Architect',
    'careers.job2.location': 'Rotterdam',
    'careers.job2.type': 'Fulltime',
    'careers.job2.department': 'Infrastructure',
    'careers.job3.title': 'AI/ML Engineer',
    'careers.job3.location': 'Utrecht',
    'careers.job3.type': 'Fulltime',
    'careers.job3.department': 'AI & Data',
    'careers.job4.title': 'UX/UI Designer',
    'careers.job4.location': 'Amsterdam',
    'careers.job4.type': 'Fulltime',
    'careers.job4.department': 'Design',
    'careers.apply': 'Solliciteer nu',
    'careers.culture.title': 'Onze Cultuur',
    'careers.culture.subtitle': 'Bij TEKFINITY geloven we dat geweldige producten worden gemaakt door geweldige teams',
    'careers.culture.innovation.title': 'Innovatie Gedreven',
    'careers.culture.innovation.desc': 'We moedigen creativiteit aan en verwelkomen nieuwe ideeën van iedereen',
    'careers.culture.collaboration.title': 'Collaboratief',
    'careers.culture.collaboration.desc': 'Teamwork en open communicatie staan centraal in alles wat we doen',
    'careers.culture.growth.title': 'Groeifocus',
    'careers.culture.growth.desc': 'Continue leren en ontwikkeling zijn kernwaarden van ons team',
    'careers.cta.title': 'Zie je jezelf niet in deze rollen?',
    'careers.cta.desc': 'We zijn altijd op zoek naar getalenteerde mensen. Stuur ons je CV!',
    'careers.cta.button': 'Stuur Open Sollicitatie',
    
    // Search
    'search.title': 'Zoeken',
    'search.placeholder': 'Zoek naar diensten, inzichten, vacatures...',
    'search.empty': 'Begin met typen om te zoeken',
    'search.noResults': 'Geen resultaten gevonden',
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
    
    // Services Page
    'services.hero.title': 'What We Do',
    'services.hero.subtitle': 'Comprehensive software engineering services to transform your business',
    'services.custom.title': 'Custom Software',
    'services.custom.desc': 'Tailored solutions perfectly aligned with your unique business needs',
    'services.consulting.title': 'Technical Consulting',
    'services.consulting.desc': 'Expert guidance to optimize your technology strategy',
    'services.process.title': 'Our Process',
    'services.process.subtitle': 'From concept to delivery, we follow a proven approach that ensures quality and success',
    'services.process.step1.title': 'Discovery',
    'services.process.step1.desc': 'We begin by understanding your goals, challenges, and vision',
    'services.process.step2.title': 'Strategy',
    'services.process.step2.desc': 'Develop a technical roadmap aligned with your business objectives',
    'services.process.step3.title': 'Development',
    'services.process.step3.desc': 'Build scalable, high-quality solutions using agile methodologies',
    'services.process.step4.title': 'Delivery',
    'services.process.step4.desc': 'Seamless deployment with ongoing support and optimization',
    'services.cta.title': 'Ready to start your project?',
    'services.cta.desc': 'Get in touch with us today to discuss how we can help your business',
    
    // Insights Page
    'insights.hero.title': 'What We Think',
    'insights.hero.subtitle': 'Industry insights, research, and thought leadership',
    'insights.featured': 'FEATURED',
    'insights.featured.title': 'The Future of Software Engineering in 2025',
    'insights.featured.desc': 'Explore how AI, cloud-native architecture, and modern development practices are redefining the industry.',
    'insights.readMore': 'Read more',
    'insights.latest': 'Latest Insights',
    
    // About Page
    'about.hero.title': 'Who We Are',
    'about.hero.subtitle': 'A team of passionate innovators driving digital transformation',
    'about.story.title': 'Our Story',
    'about.story.p1': 'TEKFINITY was founded with one mission: to bridge the gap between business objectives and technological innovation. From day one, we\'ve focused on delivering software engineering excellence.',
    'about.story.p2': 'Today, we work with leading organizations across the Netherlands, driving digital transformation through cutting-edge technology and unmatched expertise.',
    'about.story.p3': 'With a team of over 150 talented engineers, designers, and consultants, we deliver innovative solutions that create real business value. Our clients choose us for our proven track record, technical expertise, and unwavering commitment to their success.',
    'about.values.title': 'Our Values',
    'about.values.subtitle': 'The principles that guide our work',
    'about.values.mission.title': 'Our Mission',
    'about.values.mission.desc': 'Empowering businesses with innovative software solutions',
    'about.values.team.title': 'Our Team',
    'about.values.team.desc': 'Talented professionals dedicated to excellence',
    'about.values.excellence.title': 'Excellence',
    'about.values.excellence.desc': 'Always striving for the highest standards of quality',
    'about.values.innovation.title': 'Innovation',
    'about.values.innovation.desc': 'Pushing the boundaries of what\'s possible',
    
    // Careers Page
    'careers.hero.title': 'Careers at TEKFINITY',
    'careers.hero.subtitle': 'Join a team that\'s shaping the future of software engineering',
    'careers.benefits.title': 'Why Work With Us?',
    'careers.benefits.learning': '🎓 Continuous learning and development opportunities',
    'careers.benefits.balance': '⚖️ Work-life balance and flexible hours',
    'careers.benefits.health': '🏥 Comprehensive health and wellness program',
    'careers.benefits.remote': '🌍 Remote work options',
    'careers.benefits.growth': '📈 Clear career paths and advancement',
    'careers.benefits.culture': '🤝 Collaborative and inclusive culture',
    'careers.openings.title': 'Open Positions',
    'careers.job1.title': 'Senior Full-Stack Developer',
    'careers.job1.location': 'Amsterdam',
    'careers.job1.type': 'Full-time',
    'careers.job1.department': 'Engineering',
    'careers.job2.title': 'Cloud Architect',
    'careers.job2.location': 'Rotterdam',
    'careers.job2.type': 'Full-time',
    'careers.job2.department': 'Infrastructure',
    'careers.job3.title': 'AI/ML Engineer',
    'careers.job3.location': 'Utrecht',
    'careers.job3.type': 'Full-time',
    'careers.job3.department': 'AI & Data',
    'careers.job4.title': 'UX/UI Designer',
    'careers.job4.location': 'Amsterdam',
    'careers.job4.type': 'Full-time',
    'careers.job4.department': 'Design',
    'careers.apply': 'Apply now',
    'careers.culture.title': 'Our Culture',
    'careers.culture.subtitle': 'At TEKFINITY, we believe great products are built by great teams',
    'careers.culture.innovation.title': 'Innovation Driven',
    'careers.culture.innovation.desc': 'We encourage creativity and welcome new ideas from everyone',
    'careers.culture.collaboration.title': 'Collaborative',
    'careers.culture.collaboration.desc': 'Teamwork and open communication are at the heart of everything we do',
    'careers.culture.growth.title': 'Growth Focused',
    'careers.culture.growth.desc': 'Continuous learning and development are core values of our team',
    'careers.cta.title': "Don't see yourself in these roles?",
    'careers.cta.desc': "We're always looking for talented people. Send us your CV!",
    'careers.cta.button': 'Send Open Application',
    
    // Search
    'search.title': 'Search',
    'search.placeholder': 'Search for services, insights, jobs...',
    'search.empty': 'Start typing to search',
    'search.noResults': 'No results found',
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
