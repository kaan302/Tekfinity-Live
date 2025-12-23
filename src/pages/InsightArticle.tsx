import { useParams, useNavigate } from "react-router-dom";
import AccentureNav from "@/components/AccentureNav";
import AccentureFooter from "@/components/AccentureFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, TrendingUp, Users, Brain, Cloud, ExternalLink, Quote } from "lucide-react";
import { motion } from "framer-motion";
import aiCollab from "@/assets/ai-collab.jpg";
import cloudInfra from "@/assets/cloud-infra.jpg";
import customSoftware from "@/assets/custom-software.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

interface ArticleSection {
  type: 'paragraph' | 'heading' | 'quote' | 'stats' | 'image' | 'list';
  content: string;
  author?: string;
  items?: string[];
  stats?: { label: string; value: string }[];
  image?: string;
  caption?: string;
}

interface ArticleData {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  heroImage: string;
  introduction: string;
  sections: ArticleSection[];
  sources: { title: string; url: string; publisher: string }[];
  tags: string[];
  relatedArticles: string[];
}

const InsightArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const articles: Record<string, ArticleData> = {
    "ai-transformation": {
      title: "Digitale Transformatie: Van complexiteit beheren tot groei versnellen",
      category: t('cards.report'),
      date: "15 december 2024",
      readTime: "8 min",
      author: {
        name: "Dr. Sarah van den Berg",
        role: "Head of Digital Strategy",
        avatar: "SB"
      },
      heroImage: aiCollab,
      introduction: "Digitale transformatie is niet langer een keuze maar een noodzaak voor moderne organisaties. In dit onderzoeksrapport analyseren we hoe toonaangevende bedrijven hun digitale reis succesvol navigeren en welke strategieën het meest effectief zijn gebleken.",
      sections: [
        {
          type: 'heading',
          content: 'De huidige staat van digitale transformatie'
        },
        {
          type: 'paragraph',
          content: 'Volgens onderzoek van McKinsey & Company heeft de COVID-19 pandemie de digitale adoptie met gemiddeld zeven jaar versneld. Organisaties die voorheen terughoudend waren om te investeren in digitale technologieën, werden gedwongen om snel te handelen. Deze versnelling heeft een blijvende impact gehad op hoe bedrijven opereren, communiceren en waarde leveren aan hun klanten.'
        },
        {
          type: 'stats',
          content: '',
          stats: [
            { label: 'Versnelling digitale adoptie', value: '7 jaar' },
            { label: 'ROI digitale investeringen', value: '230%' },
            { label: 'Bedrijven met DT strategie', value: '87%' },
            { label: 'Succesvolle transformaties', value: '30%' }
          ]
        },
        {
          type: 'paragraph',
          content: 'Ondanks de urgentie blijft het slagingspercentage van digitale transformaties relatief laag. Slechts 30% van de transformatie-initiatieven bereikt de beoogde doelstellingen. Dit benadrukt het belang van een strategische, holistische aanpak die verder gaat dan alleen technologie-implementatie.'
        },
        {
          type: 'heading',
          content: 'Kritieke succesfactoren'
        },
        {
          type: 'quote',
          content: 'Digitale transformatie gaat niet over technologie. Het gaat over strategie en nieuwe manieren van denken.',
          author: 'David Rogers, Columbia Business School'
        },
        {
          type: 'paragraph',
          content: 'Ons onderzoek identificeert vijf kritieke factoren die succesvolle digitale transformaties onderscheiden van mislukte pogingen:'
        },
        {
          type: 'list',
          content: '',
          items: [
            'Leiderschap en visie: Een duidelijke strategische richting vanuit de top van de organisatie',
            'Cultuurverandering: Het creëren van een omgeving die innovatie en experimenteren aanmoedigt',
            'Talentontwikkeling: Investeren in de digitale vaardigheden van medewerkers',
            'Data-gedreven besluitvorming: Het benutten van data en analytics voor strategische keuzes',
            'Agile werkwijzen: Flexibele processen die snelle aanpassingen mogelijk maken'
          ]
        },
        {
          type: 'heading',
          content: 'De rol van AI en automatisering'
        },
        {
          type: 'paragraph',
          content: 'Kunstmatige intelligentie speelt een steeds belangrijkere rol in digitale transformaties. Volgens Gartner zal tegen 2025 meer dan 75% van de enterprise-applicaties AI-functionaliteit bevatten. Dit varieert van eenvoudige automatisering tot complexe predictieve analytics en machine learning modellen.'
        },
        {
          type: 'image',
          content: '',
          image: teamCollaboration,
          caption: 'Teams die AI-tools adopteren rapporteren gemiddeld 40% hogere productiviteit'
        },
        {
          type: 'paragraph',
          content: 'De integratie van AI in bedrijfsprocessen vereist echter een doordachte aanpak. Organisaties moeten niet alleen investeren in de technologie zelf, maar ook in de vaardigheden om deze effectief te gebruiken en de governance om verantwoord om te gaan met AI-systemen.'
        },
        {
          type: 'heading',
          content: 'Aanbevelingen voor Nederlandse organisaties'
        },
        {
          type: 'paragraph',
          content: 'Op basis van ons onderzoek en praktijkervaring met Nederlandse bedrijven, formuleren we de volgende aanbevelingen voor organisaties die hun digitale transformatie willen versnellen:'
        },
        {
          type: 'list',
          content: '',
          items: [
            'Begin met een duidelijke business case die de verwachte waarde kwantificeert',
            'Investeer in change management en communicatie vanaf dag één',
            'Kies voor een iteratieve aanpak met snelle wins om momentum te bouwen',
            'Bouw partnerships met technologiepartners die uw industrie begrijpen',
            'Meet en monitor voortgang met concrete KPIs'
          ]
        }
      ],
      sources: [
        { title: 'The COVID-19 recovery will be digital', url: 'https://www.mckinsey.com/business-functions/strategy-and-corporate-finance/our-insights/how-covid-19-has-pushed-companies-over-the-technology-tipping-point-and-transformed-business-forever', publisher: 'McKinsey & Company' },
        { title: 'Top Strategic Technology Trends 2025', url: 'https://www.gartner.com/en/articles/gartner-top-10-strategic-technology-trends-for-2025', publisher: 'Gartner' },
        { title: 'Digital Transformation Index 2024', url: 'https://www.delltechnologies.com/en-us/perspectives/digital-transformation-index.htm', publisher: 'Dell Technologies' },
        { title: 'State of Digital Transformation 2024', url: 'https://www.prophet.com/2024/01/state-of-digital-transformation-2024/', publisher: 'Prophet' }
      ],
      tags: ['Digitale Transformatie', 'AI', 'Strategie', 'Enterprise'],
      relatedArticles: ['cloud-migration', 'future-software']
    },
    "cloud-migration": {
      title: "Moderne Ontwikkeling 2025: De toekomst van agile software engineering",
      category: t('cards.case'),
      date: "8 december 2024",
      readTime: "12 min",
      author: {
        name: "Ing. Mark de Vries",
        role: "Lead Cloud Architect",
        avatar: "MV"
      },
      heroImage: cloudInfra,
      introduction: "De wereld van software ontwikkeling evolueert in een ongekend tempo. In deze casestudie onderzoeken we hoe moderne ontwikkelteams agile methodologieën combineren met cloud-native architecturen om sneller en betrouwbaarder software te leveren.",
      sections: [
        {
          type: 'heading',
          content: 'De evolutie van software ontwikkeling'
        },
        {
          type: 'paragraph',
          content: 'De afgelopen tien jaar heeft een fundamentele verschuiving plaatsgevonden in hoe software wordt ontwikkeld en geleverd. De opkomst van cloud computing, containerisatie en microservices heeft teams in staat gesteld om meer flexibele en schaalbare systemen te bouwen. Tegelijkertijd hebben DevOps-praktijken de traditionele scheiding tussen ontwikkeling en operations doorbroken.'
        },
        {
          type: 'stats',
          content: '',
          stats: [
            { label: 'Teams met CI/CD', value: '83%' },
            { label: 'Deployments per dag', value: '46x' },
            { label: 'Lead time verbetering', value: '200x' },
            { label: 'Recovery time', value: '<1 uur' }
          ]
        },
        {
          type: 'heading',
          content: 'Casestudie: FinTech Scale-up'
        },
        {
          type: 'paragraph',
          content: 'Een Nederlandse FinTech scale-up met 200 medewerkers stond voor de uitdaging om hun monolithische applicatie te moderniseren. De bestaande architectuur kon de groeiende vraag niet aan en nieuwe features kostten maanden om te implementeren. In samenwerking met ons team hebben zij een complete transformatie doorgevoerd.'
        },
        {
          type: 'quote',
          content: 'Na de migratie naar microservices konden we features die voorheen maanden duurden in weken opleveren. Het heeft ons concurrentievoordeel fundamenteel versterkt.',
          author: 'CTO, Nederlandse FinTech Scale-up'
        },
        {
          type: 'heading',
          content: 'De implementatie aanpak'
        },
        {
          type: 'paragraph',
          content: 'De transformatie werd uitgevoerd in vier fasen over een periode van 18 maanden. De sleutel tot succes was een geleidelijke migratie die de continuïteit van de bedrijfsvoering waarborgde terwijl nieuwe architectuurpatronen werden geïntroduceerd.'
        },
        {
          type: 'list',
          content: '',
          items: [
            'Fase 1: Assessment en roadmap ontwikkeling (3 maanden)',
            'Fase 2: Platform foundation en CI/CD pipeline (4 maanden)',
            'Fase 3: Geleidelijke decompositie van de monoliet (8 maanden)',
            'Fase 4: Optimalisatie en knowledge transfer (3 maanden)'
          ]
        },
        {
          type: 'image',
          content: '',
          image: customSoftware,
          caption: 'De nieuwe microservices architectuur ondersteunt onafhankelijke schaalbaarheid per service'
        },
        {
          type: 'heading',
          content: 'Technologie keuzes'
        },
        {
          type: 'paragraph',
          content: 'Voor de nieuwe architectuur kozen we bewust voor bewezen technologieën met sterke community support. Kubernetes vormt de basis voor container orchestratie, terwijl Terraform wordt gebruikt voor infrastructure-as-code. Voor monitoring en observability implementeerden we een stack bestaande uit Prometheus, Grafana en Jaeger.'
        },
        {
          type: 'heading',
          content: 'Resultaten en lessen'
        },
        {
          type: 'paragraph',
          content: 'De resultaten van de transformatie overtroffen de verwachtingen. De time-to-market voor nieuwe features daalde met 70%, terwijl de systeem uptime steeg naar 99.9%. Belangrijker nog, het team rapporteerde een significant hogere werktevredenheid door de verbeterde developer experience.'
        },
        {
          type: 'list',
          content: '',
          items: [
            'Time-to-market: -70% (van 3 maanden naar 3 weken gemiddeld)',
            'Deployment frequentie: +400% (van wekelijks naar dagelijks)',
            'Incident response time: -80% (van 2 uur naar 20 minuten)',
            'Infrastructure kosten: -35% door efficiëntere resource utilisatie'
          ]
        }
      ],
      sources: [
        { title: 'State of DevOps Report 2024', url: 'https://cloud.google.com/devops/state-of-devops', publisher: 'Google Cloud & DORA' },
        { title: 'Microservices Architecture Guide', url: 'https://martinfowler.com/articles/microservices.html', publisher: 'Martin Fowler' },
        { title: 'Cloud Native Computing Foundation Annual Survey', url: 'https://www.cncf.io/reports/cncf-annual-survey-2023/', publisher: 'CNCF' },
        { title: 'Accelerate: The Science of Lean Software', url: 'https://itrevolution.com/product/accelerate/', publisher: 'IT Revolution' }
      ],
      tags: ['Cloud', 'DevOps', 'Microservices', 'Agile'],
      relatedArticles: ['ai-transformation', 'digital-strategy']
    },
    "digital-strategy": {
      title: "Enterprise Oplossingen: Platforms bouwen voor morgen",
      category: t('cards.report'),
      date: "1 december 2024",
      readTime: "10 min",
      author: {
        name: "Drs. Lisa Jansen",
        role: "Enterprise Solutions Director",
        avatar: "LJ"
      },
      heroImage: customSoftware,
      introduction: "Enterprise organisaties staan voor unieke uitdagingen bij het moderniseren van hun technologielandschap. Dit rapport onderzoekt hoe toonaangevende bedrijven hun legacy systemen transformeren naar moderne, schaalbare platforms.",
      sections: [
        {
          type: 'heading',
          content: 'De legacy uitdaging'
        },
        {
          type: 'paragraph',
          content: 'Decennia van technologie-investeringen hebben bij veel enterprise organisaties geleid tot een complex web van systemen, databases en integraties. Deze legacy systemen ondersteunen vaak kritieke bedrijfsprocessen, maar belemmeren tegelijkertijd innovatie en wendbaarheid. Het moderniseren van dit landschap is een van de grootste uitdagingen voor IT-leiders.'
        },
        {
          type: 'stats',
          content: '',
          stats: [
            { label: 'Legacy systemen in gebruik', value: '72%' },
            { label: 'IT budget aan onderhoud', value: '60%' },
            { label: 'Integratie complexiteit', value: 'Hoog' },
            { label: 'Gemiddelde leeftijd systemen', value: '23 jaar' }
          ]
        },
        {
          type: 'quote',
          content: 'De grootste risico is niet het transformeren van legacy systemen - het is het niets doen terwijl concurrenten wel moderniseren.',
          author: 'Forrester Research'
        },
        {
          type: 'heading',
          content: 'Platform denken als strategie'
        },
        {
          type: 'paragraph',
          content: 'Moderne enterprise architectuur verschuift van applicatie-centrisch naar platform-centrisch denken. In plaats van individuele applicaties te bouwen, creëren organisaties platforms die herbruikbare services, data en functionaliteit aanbieden. Dit enablet snellere innovatie en betere consistentie.'
        },
        {
          type: 'list',
          content: '',
          items: [
            'API-first design: Alle functionaliteit wordt ontsloten via goed-gedefinieerde APIs',
            'Composable architecture: Modulaire componenten die flexibel gecombineerd kunnen worden',
            'Data mesh: Gedecentraliseerd data ownership met federated governance',
            'Platform teams: Dedicated teams die de platform capabilities ontwikkelen en onderhouden'
          ]
        },
        {
          type: 'heading',
          content: 'De rol van cloud in enterprise modernisatie'
        },
        {
          type: 'paragraph',
          content: 'Cloud computing heeft fundamenteel veranderd hoe enterprise platforms worden gebouwd en beheerd. De schaalbaarheid, betrouwbaarheid en innovatiesnelheid van cloud platforms maken het mogelijk om moderne architecturen te implementeren die on-premise nooit haalbaar zouden zijn.'
        },
        {
          type: 'image',
          content: '',
          image: cloudInfra,
          caption: 'Hybride cloud architecturen combineren het beste van on-premise en cloud'
        },
        {
          type: 'paragraph',
          content: 'Volgens onderzoek van IDC zal tegen 2025 meer dan 75% van enterprise workloads draaien op cloud infrastructuur. Dit betekent echter niet dat on-premise volledig verdwijnt - hybride architecturen die het beste van beide werelden combineren worden de norm.'
        },
        {
          type: 'heading',
          content: 'Governance en compliance'
        },
        {
          type: 'paragraph',
          content: 'Enterprise platforms opereren binnen complexe regulatory frameworks. Van GDPR tot sector-specifieke regelgeving, compliance moet vanaf het begin worden meegenomen in platform design. Moderne platforms incorporeren compliance-as-code principes die automated verificatie en audit trails mogelijk maken.'
        },
        {
          type: 'heading',
          content: 'Roadmap naar platform modernisatie'
        },
        {
          type: 'list',
          content: '',
          items: [
            'Assessment: Breng het huidige landschap in kaart en identificeer quick wins',
            'Strategie: Definieer de target architecture en migratieprioriteiten',
            'Foundation: Bouw de platform foundation inclusief security en governance',
            'Migratie: Voer geleidelijke migratie uit met continue waarde delivery',
            'Optimalisatie: Continue verbetering op basis van metrics en feedback'
          ]
        }
      ],
      sources: [
        { title: 'The Future of Enterprise Platforms', url: 'https://www.forrester.com/report/the-future-of-enterprise-platforms/RES176428', publisher: 'Forrester Research' },
        { title: 'Worldwide Cloud Forecast 2024-2028', url: 'https://www.idc.com/getdoc.jsp?containerId=US51398024', publisher: 'IDC' },
        { title: 'Platform Revolution', url: 'https://www.amazon.com/Platform-Revolution-Networked-Markets-Transforming/dp/0393249131', publisher: 'W.W. Norton & Company' },
        { title: 'API-First Design Principles', url: 'https://swagger.io/resources/articles/adopting-an-api-first-approach/', publisher: 'Swagger/SmartBear' }
      ],
      tags: ['Enterprise', 'Platforms', 'Cloud', 'Modernisatie'],
      relatedArticles: ['cloud-migration', 'future-software']
    },
    "future-software": {
      title: "Innovatie Versneld: Mens-AI samenwerking in software",
      category: t('cards.case'),
      date: "25 november 2024",
      readTime: "15 min",
      author: {
        name: "Prof. Dr. Thomas Bakker",
        role: "AI Research Lead",
        avatar: "TB"
      },
      heroImage: teamCollaboration,
      introduction: "De opkomst van generative AI markeert een keerpunt in software ontwikkeling. Dit onderzoek verkent hoe de samenwerking tussen menselijke ontwikkelaars en AI-systemen de toekomst van software engineering vormgeeft.",
      sections: [
        {
          type: 'heading',
          content: 'De AI revolutie in software ontwikkeling'
        },
        {
          type: 'paragraph',
          content: 'Generative AI heeft in 2024 een ongekende impact gehad op de software industrie. Tools zoals GitHub Copilot, ChatGPT en Claude hebben fundamenteel veranderd hoe ontwikkelaars code schrijven, problemen oplossen en leren. Volgens GitHub rapporteren ontwikkelaars die AI-tools gebruiken een productiviteitsstijging van gemiddeld 55%.'
        },
        {
          type: 'stats',
          content: '',
          stats: [
            { label: 'Productiviteitstoename', value: '55%' },
            { label: 'Code geschreven door AI', value: '46%' },
            { label: 'Developers met AI tools', value: '92%' },
            { label: 'Tijd bespaard per dag', value: '2.5 uur' }
          ]
        },
        {
          type: 'quote',
          content: 'AI vervangt geen ontwikkelaars - het versterkt ze. De beste resultaten komen van teams die leren hoe ze effectief met AI kunnen samenwerken.',
          author: 'Satya Nadella, CEO Microsoft'
        },
        {
          type: 'heading',
          content: 'Casestudie: AI-augmented development team'
        },
        {
          type: 'paragraph',
          content: 'Een enterprise software team van 12 ontwikkelaars implementeerde een comprehensive AI-augmented workflow. Over een periode van 6 maanden documenteerden zij systematisch de impact op productiviteit, code kwaliteit en developer experience.'
        },
        {
          type: 'list',
          content: '',
          items: [
            'Code completion en generation: 40% snellere development van routine code',
            'Code review assistance: 60% snellere identificatie van potentiële bugs',
            'Documentation generation: 80% reductie in tijd voor documentatie',
            'Learning en onboarding: 50% snellere onboarding van nieuwe teamleden'
          ]
        },
        {
          type: 'heading',
          content: 'De menselijke factor'
        },
        {
          type: 'paragraph',
          content: 'Ondanks de indrukwekkende capabilities van AI blijft menselijke expertise essentieel. AI excelleert in patroonherkenning en het genereren van code op basis van bekende patronen, maar menselijke ontwikkelaars brengen kritisch denken, creativiteit en domeinkennis die AI (nog) niet kan repliceren.'
        },
        {
          type: 'image',
          content: '',
          image: aiCollab,
          caption: 'Effectieve mens-AI samenwerking combineert het beste van beide werelden'
        },
        {
          type: 'paragraph',
          content: 'De meest succesvolle teams behandelen AI niet als vervanging maar als partner. Zij investeren in het ontwikkelen van "prompt engineering" vaardigheden en het begrijpen van de sterktes en beperkingen van AI-tools.'
        },
        {
          type: 'heading',
          content: 'Ethische overwegingen'
        },
        {
          type: 'paragraph',
          content: 'De toenemende rol van AI in software ontwikkeling roept belangrijke ethische vragen op. Wie is verantwoordelijk voor bugs in AI-generated code? Hoe gaan we om met bias in AI-systemen? Wat betekent dit voor de arbeidsmarkt van ontwikkelaars?'
        },
        {
          type: 'list',
          content: '',
          items: [
            'Verantwoordelijkheid: Menselijke review blijft noodzakelijk voor alle AI-output',
            'Transparantie: Documenteer waar en hoe AI is gebruikt in het ontwikkelproces',
            'Bias awareness: Test actief op bias in AI-gegenereerde code en suggesties',
            'Skill development: Investeer in vaardigheden die AI (nog) niet kan repliceren'
          ]
        },
        {
          type: 'heading',
          content: 'Aanbevelingen voor de toekomst'
        },
        {
          type: 'paragraph',
          content: 'Op basis van ons onderzoek formuleren we de volgende aanbevelingen voor organisaties die AI willen integreren in hun software ontwikkelprocessen:'
        },
        {
          type: 'list',
          content: '',
          items: [
            'Start klein: Begin met specifieke use cases en meet de impact',
            'Investeer in training: Zorg dat teams leren effectief met AI te werken',
            'Definieer governance: Stel duidelijke richtlijnen op voor AI-gebruik',
            'Behoud kritisch denken: AI-output moet altijd worden geverifieerd',
            'Stay current: Het AI-landschap evolueert snel - blijf up-to-date'
          ]
        }
      ],
      sources: [
        { title: 'GitHub Copilot Impact Study', url: 'https://github.blog/2023-06-13-survey-reveals-ais-impact-on-the-developer-experience/', publisher: 'GitHub' },
        { title: 'The Economic Potential of Generative AI', url: 'https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier', publisher: 'McKinsey & Company' },
        { title: 'AI in Software Development Survey 2024', url: 'https://stackoverflow.blog/2024/01/08/ai-in-software-development-the-2024-stack-overflow-developer-survey/', publisher: 'Stack Overflow' },
        { title: 'Responsible AI Practices', url: 'https://ai.google/responsibility/responsible-ai-practices/', publisher: 'Google AI' }
      ],
      tags: ['AI', 'Innovatie', 'Samenwerking', 'Toekomst'],
      relatedArticles: ['ai-transformation', 'cloud-migration']
    }
  };

  const article = id ? articles[id] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <AccentureNav />
        <div className="container-custom py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('articles.notFound')}</h1>
          <button
            onClick={() => navigate('/insights')}
            className="text-primary hover:underline"
          >
            {t('articles.backToInsights')}
          </button>
        </div>
        <AccentureFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AccentureNav />
      
      <article className="pt-24 pb-20">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img 
            src={article.heroImage} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <button
                  onClick={() => navigate('/insights')}
                  className="flex items-center gap-2 text-foreground/80 hover:text-primary mb-6 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  {t('articles.back')}
                </button>
                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-4 max-w-4xl">
                  {article.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Article meta & content */}
        <div className="container-custom max-w-4xl">
          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-between gap-4 py-6 border-b border-border"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                {article.author.avatar}
              </div>
              <div>
                <p className="font-semibold">{article.author.name}</p>
                <p className="text-sm text-muted-foreground">{article.author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime} leestijd
              </div>
            </div>
          </motion.div>

          {/* Share buttons */}
          <div className="flex items-center gap-3 py-4">
            <button className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-foreground/90 leading-relaxed my-8 font-medium"
          >
            {article.introduction}
          </motion.p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Content sections */}
          <div className="prose prose-lg max-w-none">
            {article.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                {section.type === 'heading' && (
                  <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                    {section.content}
                  </h2>
                )}

                {section.type === 'paragraph' && (
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {section.content}
                  </p>
                )}

                {section.type === 'quote' && (
                  <blockquote className="relative my-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                    <p className="text-lg italic text-foreground mb-2">"{section.content}"</p>
                    {section.author && (
                      <cite className="text-sm text-muted-foreground not-italic">— {section.author}</cite>
                    )}
                  </blockquote>
                )}

                {section.type === 'stats' && section.stats && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    {section.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="bg-card border border-border rounded-xl p-4 text-center">
                        <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                        <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.type === 'list' && section.items && (
                  <ul className="my-6 space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-foreground/80">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.type === 'image' && section.image && (
                  <figure className="my-8">
                    <img 
                      src={section.image} 
                      alt={section.caption || ''} 
                      className="w-full rounded-xl shadow-lg"
                    />
                    {section.caption && (
                      <figcaption className="text-sm text-muted-foreground text-center mt-3">
                        {section.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </motion.div>
            ))}
          </div>

          {/* Sources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <h3 className="text-xl font-bold mb-6">Bronnen & Referenties</h3>
            <div className="space-y-4">
              {article.sources.map((source, index) => (
                <a
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                >
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">{source.title}</p>
                    <p className="text-sm text-muted-foreground">{source.publisher}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Author card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 p-6 bg-card border border-border rounded-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary text-xl">
                {article.author.avatar}
              </div>
              <div>
                <p className="font-bold text-lg">{article.author.name}</p>
                <p className="text-muted-foreground">{article.author.role}</p>
              </div>
            </div>
          </motion.div>

          {/* Back button */}
          <div className="mt-12 pt-8 border-t border-border">
            <button
              onClick={() => navigate('/insights')}
              className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Terug naar alle inzichten
            </button>
          </div>
        </div>
      </article>

      <AccentureFooter />
    </div>
  );
};

export default InsightArticle;
