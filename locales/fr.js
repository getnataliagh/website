/**
 * French locale - Content and translations
 */
const slugs = require('./slugs');

const fr = {
  // Language metadata
  lang: 'fr',
  locale: 'fr_FR',
  langName: 'Francais',
  langNameEnglish: 'French',
  prefix: '/fr',

  // Site metadata
  site: {
    currentYear: new Date().getFullYear(),
    name: 'Natalia',
    title: 'Natalia - Assistante Vocale IA',
    description: "Solution d'assistante vocale IA pour entreprises. Automatisez vos appels entrants avec une intelligence artificielle conversationnelle.",
    baseUrl: 'https://getnatalia.com',
    author: 'Natalia',
    email: 'contact@getnatalia.com',
  },

  // Social links
  social: {
    twitter: {
      name: 'Twitter',
      href: '',
    },
    linkedin: {
      name: 'LinkedIn',
      href: '',
    },
  },

  // Navigation with /fr/ prefix
  navigation: {
    main: [
      { label: 'Accueil', url: './', slug: 'index' },
      {
        label: 'Solutions',
        url: '#solutions',
        children: [
          {
            label: 'Natalia Voice',
            url: './assistante-vocale-ia',
            slug: 'assistante-vocale-ia',
            description: 'Assistant vocal IA disponible 24h/24 pour vos appels entrants',
            icon: 'phone',
          },
          {
            label: 'Natalia Analyse',
            url: './analyse',
            slug: 'analyse',
            description: 'Transcription et analyse intelligente de toutes vos conversations',
            icon: 'chart',
          },
          {
            label: 'Natalia WhatsApp',
            url: './whatsapp',
            slug: 'whatsapp',
            description: "Engagez vos clients avec 98% de taux d'ouverture",
            icon: 'message',
          },
        ],
      },
      {
        label: 'Secteurs',
        url: '#secteurs',
        children: [
          {
            label: 'Automobile',
            url: './automobile',
            slug: 'automobile',
            description: 'Concessions et services apres-vente',
            icon: 'car',
          },
          {
            label: "Centre d'appel",
            url: './centre-d-appel',
            slug: 'centre-d-appel',
            description: 'BPO et support client externalise',
            icon: 'headset',
          },
          {
            label: 'Helpdesk',
            url: './helpdesk',
            slug: 'helpdesk',
            description: 'Support technique IT et assistance',
            icon: 'help',
          },
          {
            label: 'Hotline',
            url: './hotline',
            slug: 'hotline',
            description: 'Service continu 24/7 sans interruption',
            icon: 'clock',
          },
        ],
      },
      { label: 'Partenaires', url: './partenaires', slug: 'partenaires' },
      { label: 'Presse', url: './presse', slug: 'presse' },
      { label: 'A propos', url: './a-propos', slug: 'a-propos' },
      { label: 'Contact', url: './contact', slug: 'contact' },
    ],
    footer: [
      { label: 'Mentions legales', url: './mentions-legales', slug: 'mentions-legales' },
      { label: 'Politique de confidentialite', url: './politique-confidentialite', slug: 'politique-confidentialite' },
      { label: 'CGU', url: './conditions-generales-utilisation', slug: 'conditions-generales-utilisation' },
    ],
  },

  // CTA buttons
  cta: {
    primary: {
      label: 'Demander une demo',
      url: './contact',
    },
    secondary: {
      label: 'En savoir plus',
      url: './a-propos',
    },
    calculator: {
      label: 'Calculer mon ROI',
      url: './calculateur',
    },
  },

  // Common UI strings
  ui: {
    learnMore: 'En savoir plus',
    contactUs: 'Nous contacter',
    bookDemo: 'Reserver une demo',
    calculateRoi: 'Calculer mon ROI',
    discoverSolutions: 'Decouvrir les solutions',
    sendRequest: 'Envoyer ma demande',
    sending: 'Envoi en cours...',
    formSuccess: 'Merci ! Votre demande a bien ete envoyee. Nous vous recontacterons tres bientot.',
    formError: "Une erreur est survenue lors de l'envoi. Veuillez reessayer ou nous contacter par email.",
    required: 'requis',
    firstName: 'Prenom',
    lastName: 'Nom',
    email: 'Email professionnel',
    company: 'Entreprise',
    phone: 'Telephone',
    sector: "Secteur d'activite",
    message: 'Votre message',
    selectSector: 'Selectionnez votre secteur...',
    available247: 'Disponible 24/7',
    response: 'Reponse',
    allRightsReserved: 'Tous droits reserves.',
    hostedInFrance: 'Heberge en France',
    backToHome: "Retour a l'accueil",
    pageNotFound: 'Page non trouvee',
    pageNotFoundDescription: "La page que vous recherchez n'existe pas ou a ete deplacee. Retournez a l'accueil pour continuer votre navigation.",
  },

  // Footer sections
  footer: {
    solutions: 'Solutions',
    sectors: 'Secteurs',
    company: 'Entreprise',
    roiCalculator: 'Calculateur ROI',
    solutionLinks: [
      { label: 'Natalia Voice', url: './assistante-vocale-ia', icon: 'phone' },
      { label: 'Natalia Analyse', url: './analyse', icon: 'chart' },
      { label: 'Natalia WhatsApp', url: './whatsapp', icon: 'message' },
      { label: 'Calculateur ROI', url: './calculateur', icon: 'calculator' },
    ],
    sectorLinks: [
      { label: 'Automobile', url: './automobile', icon: 'car' },
      { label: "Centre d'appel", url: './centre-d-appel', icon: 'headset' },
      { label: 'Helpdesk', url: './helpdesk', icon: 'help' },
      { label: 'Hotline', url: './hotline', icon: 'clock' },
    ],
    companyLinks: [
      { label: 'A propos', url: './a-propos', icon: 'info' },
      { label: 'Partenaires', url: './partenaires', icon: 'partners' },
      { label: 'Presse', url: './presse', icon: 'press' },
      { label: 'Contact', url: './contact', icon: 'email' },
    ],
  },

  // Sector names for cards
  sectors: {
    automobile: {
      name: 'Automobile',
      description: 'Concessions & SAV',
    },
    callCenter: {
      name: "Centre d'appel",
      description: 'BPO & Support',
    },
    helpdesk: {
      name: 'Helpdesk IT',
      description: 'Support technique',
    },
    hotline: {
      name: 'Hotline 24/7',
      description: 'Service continu',
    },
  },

  // Features for homepage
  features: [
    {
      primary: true,
      title: 'Disponibilite 24/7',
      description: 'Natalia repond a vos appels 24h/24, 7j/7, sans interruption ni fatigue.',
      icon: 'clock',
    },
    {
      primary: true,
      title: 'Integration simple',
      description: 'Notre API REST et nos connecteurs permettent une integration rapide avec vos outils existants.',
      icon: 'plug',
    },
    {
      primary: true,
      title: 'IA Conversationnelle',
      description: 'Natalia comprend le langage naturel et repond de maniere fluide et personnalisee.',
      icon: 'brain',
    },
    {
      primary: true,
      title: 'Multilingue',
      description: 'Natalia parle francais, anglais, espagnol et plus encore.',
      icon: 'globe',
    },
    {
      primary: true,
      title: 'Analyse en temps reel',
      description: 'Tableaux de bord et rapports detailles sur vos appels.',
      icon: 'chart',
    },
    {
      primary: true,
      title: 'Securite Enterprise',
      description: 'Hebergement en Europe, conformite RGPD, chiffrement bout-en-bout.',
      icon: 'shield',
    },
  ],

  // Testimonials
  testimonials: [
    {
      quote: 'Natalia a transforme notre service client. Nous ne ratons plus aucun appel.',
      author: 'Marie Dupont',
      role: 'Directrice Service Client',
      company: 'AutoPlus',
    },
    {
      quote: "L'integration a ete simple et les resultats immediats. ROI positif en 3 mois.",
      author: 'Jean Martin',
      role: 'CEO',
      company: 'TechStart',
    },
  ],

  // Stats
  stats: [
    { value: '24/7', label: 'Disponibilite' },
    { value: '60%', label: 'Appels traites automatiquement' },
    { value: '3min', label: 'Temps de reponse moyen' },
    { value: '95%', label: 'Satisfaction client' },
  ],

  // Page-specific SEO metadata
  pages: {
    index: {
      title: 'Natalia - Suite IA pour la Relation Client | Voice, WhatsApp, Transcript',
      description: "Natalia transforme votre relation client avec 3 solutions IA: Voice (assistant 24/7), WhatsApp (98% d'ouverture), Transcript (intelligence commerciale). Demandez une demo.",
    },
    'assistante-vocale-ia': {
      title: 'Assistante Vocale IA - Natalia automatise vos appels',
      description: "Decouvrez Natalia, l'assistante vocale IA qui repond a vos appels 24/7 avec une voix naturelle et une comprehension instantanee.",
    },
    analyse: {
      title: 'Natalia Analyse - Transcription et intelligence commerciale',
      description: 'Transcription automatique et analyse IA de toutes vos conversations. Extrayez des insights, ameliorez vos KPIs et formez vos equipes.',
    },
    whatsapp: {
      title: 'Natalia WhatsApp - Engagement client 98% de taux d\'ouverture',
      description: 'Solution WhatsApp Business pour entreprises. 98% de taux d\'ouverture, centralisation des echanges et intelligence commerciale.',
    },
    automobile: {
      title: 'Natalia pour l\'Automobile - Concessions et SAV',
      description: 'Solution IA pour concessions automobiles. Gestion des appels 24/7, prise de RDV automatique et qualification des leads.',
    },
    'centre-d-appel': {
      title: 'Natalia pour Centres d\'Appels - BPO et Support',
      description: 'Solution IA pour centres d\'appels et BPO. Desengorgez vos lignes, reduisez les couts et ameliorez la satisfaction client.',
    },
    helpdesk: {
      title: 'Natalia pour Helpdesk IT - Support Technique',
      description: 'Solution IA pour helpdesk et support IT. Resolution automatique niveau 1, ouverture de tickets et routage intelligent.',
    },
    hotline: {
      title: 'Natalia Hotline - Service Client 24/7',
      description: 'Solution hotline IA disponible 24h/24. Repondez a 100% de vos appels avec une qualite constante.',
    },
    calculateur: {
      title: 'Calculateur ROI - Estimez vos economies avec Natalia',
      description: 'Calculez le retour sur investissement de Natalia pour votre entreprise. Simulation gratuite et personnalisee.',
    },
    'a-propos': {
      title: 'A propos de Natalia - Notre equipe et notre mission',
      description: "Decouvrez l'equipe derriere Natalia, l'assistante vocale IA qui revolutionne la gestion des appels telephoniques.",
    },
    partenaires: {
      title: 'Partenaires Natalia - Rejoignez notre ecosysteme',
      description: 'Devenez partenaire Natalia et proposez des solutions IA innovantes a vos clients.',
    },
    presse: {
      title: 'Presse - Natalia dans les medias',
      description: 'Retrouvez les dernieres actualites et communiques de presse de Natalia.',
    },
    contact: {
      title: 'Contact - Demandez une demo de Natalia',
      description: "Contactez l'equipe Natalia pour une demonstration ou pour toute question sur nos solutions d'assistante vocale IA.",
    },
    'mentions-legales': {
      title: 'Mentions legales - Natalia',
      description: 'Mentions legales du site Natalia.',
    },
    'politique-confidentialite': {
      title: 'Politique de confidentialite - Natalia',
      description: 'Politique de confidentialite et protection des donnees personnelles de Natalia.',
    },
    'conditions-generales-utilisation': {
      title: 'Conditions generales d\'utilisation - Natalia',
      description: 'CGU du site et des services Natalia.',
    },
    '404': {
      title: 'Page non trouvee - Natalia',
      description: 'La page que vous recherchez n\'existe pas.',
    },
    'legal': {
      title: 'Informations legales - Natalia',
      description: 'Informations legales et reglementaires de Natalia.',
    },
    'assistant-mail-automatisation-ia': {
      title: 'Assistant Mail & Automatisation IA - Natalia',
      description: 'Automatisez vos emails et workflows avec l\'IA. Natalia traite vos demandes par email avec la meme intelligence que par telephone.',
    },
  },

  // Homepage specific content
  homepage: {
    hero: {
      badge: 'La suite IA complete pour la relation client',
      title1: '3 solutions IA.',
      title2: 'Un ecosysteme unifie.',
      subtitle: 'Natalia Voice, WhatsApp et Analyse travaillent ensemble pour automatiser, centraliser et optimiser chaque interaction client. Resultats mesurables des le premier mois.',
      ctaPrimary: 'Demander une demo',
      ctaSecondary: 'Decouvrir les solutions',
    },
    products: {
      voice: {
        name: 'Voice',
        tagline: 'Assistant vocal 24/7',
      },
      whatsapp: {
        name: 'WhatsApp',
        tagline: "98% de taux d'ouverture",
      },
      analytics: {
        name: 'Analyse',
        tagline: 'Intelligence commerciale',
      },
    },
    voiceCard: {
      badge: 'Solution phare',
      title: 'Natalia Voice',
      description: "L'assistant vocal IA disponible 24h/24, 7j/7. Decrochage instantane, qualification des demandes et integration complete a vos outils metiers.",
      level1: {
        title: 'Niveau 1',
        description: "Prise d'appels + Routage intelligent",
      },
      level2: {
        title: 'Niveau 2',
        description: 'Messages + Qualification leads',
      },
      level3: {
        title: 'Niveau 3',
        description: 'Integration ERP/CRM complete',
      },
      companies: '+100 entreprises',
      cta: 'En savoir plus',
    },
    whatsappCard: {
      badge: 'Engagement',
      title: 'Natalia WhatsApp',
      description: "Continuez la conversation apres l'appel. 98% de taux d'ouverture vs 20% pour les emails.",
      features: [
        'Centralise tous les echanges',
        'Alimente la base de connaissances',
        'Flux BI et recommandations',
      ],
      openRate: "Taux d'ouverture",
    },
    analyticsCard: {
      badge: 'Intelligence',
      title: 'Natalia Analyse',
      description: '100% des conversations capturees et analysees.',
      kpis: 'KPIs',
      csat: 'CSAT',
      training: 'Training',
    },
    stats: {
      availability: 'Disponibilite',
      whatsappRate: "Taux d'ouverture WhatsApp",
      conversationsCaptured: 'Conversations capturees',
      responseTime: 'Temps de reponse',
    },
    solutions: {
      badge: 'Nos solutions',
      title: 'Une suite complete pour',
      titleHighlight: 'chaque interaction',
      subtitle: 'Voice, WhatsApp et Analyse s\'integrent parfaitement pour creer un ecosysteme de relation client intelligent.',
    },
    valueProposition: {
      badge: 'Pourquoi Natalia',
      title: "L'ecosysteme qui",
      titleHighlight: 'transforme',
      titleEnd: 'votre relation client',
      subtitle: 'Nos 3 solutions travaillent ensemble pour creer un cycle vertueux d\'amelioration continue.',
      capture: {
        title: 'Capture',
        description: 'Voice repond 24/7 et capture chaque demande. Aucun appel manque, chaque lead qualifie.',
      },
      engage: {
        title: 'Engage',
        description: "WhatsApp continue la conversation avec 98% d'ouverture. Chaque echange enrichit votre connaissance client.",
      },
      optimize: {
        title: 'Optimise',
        description: 'Analyse transcrit et analyse chaque conversation pour extraire des insights, KPIs et recommandations de formation.',
      },
      cycle: 'Le cycle vertueux : Analyse transcrit les conversations de Voice et WhatsApp, identifie les points d\'amelioration, et les recommandations alimentent la formation de vos equipes.',
    },
    deployment: {
      badge: 'Mise en place',
      title: 'Deploiement en',
      titleHighlight: '3 etapes',
      step1: {
        title: 'Audit & Configuration',
        description: 'Analyse de vos besoins, configuration personnalisee et integration a vos outils existants.',
      },
      step2: {
        title: 'Formation & Tests',
        description: "Entrainement de l'IA sur votre contexte metier et phase de tests avec vos equipes.",
      },
      step3: {
        title: 'Go Live & Suivi',
        description: 'Mise en production progressive et suivi des performances avec optimisation continue.',
      },
    },
    sectors: {
      badge: 'Secteurs',
      title: 'Adapte a',
      titleHighlight: 'votre industrie',
      subtitle: 'Natalia se personnalise pour repondre aux specificites de votre secteur.',
    },
    integration: {
      title: 'S\'integre a',
      titleHighlight: 'tous vos outils',
      subtitle: 'CRM, ERP, outils de ticketing, calendriers metiers... Natalia se connecte a votre ecosysteme existant.',
    },
    cta: {
      title: 'Pret a transformer votre relation client ?',
      subtitle: 'Decouvrez comment Voice, WhatsApp et Analyse peuvent revolutionner votre experience client.',
      note: 'Demo personnalisee - ROI visible des le premier mois',
    },
  },

  // Contact page specific content
  contact: {
    title: 'Contactez-nous',
    subtitle: 'Vous souhaitez une demonstration ? Vous avez une question ? Notre equipe est a votre ecoute.',
    formTitle: 'Demander une demo',
    writeUs: 'Nous ecrire',
    whyChoose: 'Pourquoi choisir Natalia ?',
    whyItems: [
      'Disponible 24/7, sans interruption',
      'Voix naturelle et comprehension IA avancee',
      'Integration avec vos outils metiers',
      'Deploiement rapide et accompagnement personnalise',
      'Hebergement securise en France (RGPD)',
    ],
    demoReady: 'Pret pour une demo ?',
    demoDescription: 'Nous vous proposons une demonstration personnalisee de 30 minutes pour decouvrir Natalia en action sur vos cas d\'usage.',
    sectors: [
      { value: 'automobile', label: 'Automobile / Concessions' },
      { value: 'centre-appel', label: 'Centre d\'appels' },
      { value: 'helpdesk', label: 'Helpdesk / Support IT' },
      { value: 'hotline', label: 'Hotline / Service client' },
      { value: 'autre', label: 'Autre' },
    ],
  },

  // About page specific content
  about: {
    hero: {
      badge: 'Notre histoire',
      title: 'A propos de',
      subtitle: 'Nous revolutionnons la gestion des appels telephoniques grace a l\'intelligence artificielle.',
    },
    mission: {
      badge: 'Notre mission',
      title: 'Chaque appel',
      titleHighlight: 'compte',
      paragraph1: 'Chez Natalia, nous croyons que <strong>chaque appel compte</strong>. Un appel manque, c\'est un client frustre, une opportunite perdue, une relation qui se degrade.',
      paragraph2: 'Notre mission est de permettre a chaque entreprise de repondre a 100% de ses appels, 24h/24, 7j/7, avec la meme qualite et la meme empathie qu\'un collaborateur humain.',
      paragraph3: 'Nous ne remplacons pas vos equipes, nous les assistons. Nous les liberons des taches repetitives pour qu\'elles se concentrent sur ce qui a vraiment de la valeur.',
      stat: '40%',
      statText: 'des appels en entreprise ne sont pas traites.',
      statHighlight: 'Nous voulons changer ca.',
    },
    timeline: {
      badge: 'Notre parcours',
      title: 'L\'histoire de',
      events: [
        {
          date: 'Novembre 2024',
          title: 'La genese du projet',
          description: 'En echangeant avec des entrepreneurs locaux lors d\'un SaaS Camp en Vendee, deux problematiques sont ressorties : la difficulte de recruter et l\'inefficacite du standard telephonique.',
        },
        {
          date: 'Mars 2025',
          title: 'Premier POC deploye',
          description: 'Le projet est lance, d\'abord en sous-marin sur la partie technique. Le premier POC est deploye chez un client en conditions reelles.',
        },
        {
          date: 'Juin 2025',
          title: 'Lancement automobile',
          description: 'Premiers pilotes dans le secteur automobile. On decouvre que 40% des appels en concession ne sont pas traites.',
        },
        {
          date: 'Septembre 2025',
          title: 'Expansion helpdesk IT',
          description: 'Elargissement vers le support helpdesk informatique. Baptiste rejoint l\'equipe technique pour accelerer le developpement.',
        },
      ],
    },
    team: {
      badge: 'Notre equipe',
      title: 'Des profils',
      titleHighlight: 'complementaires',
      subtitle: 'Unis par des valeurs communes et la volonte de servir nos clients.',
      members: [
        {
          name: 'Nicolas Dubreuil',
          role: 'CEO',
          title: 'Co-fondateur',
          description: 'Pilote le developpement commercial et la strategie de croissance de Natalia.',
          linkedin: 'https://linkedin.com/in/nicolas-dubreuil-essca/',
          image: 'image.png',
          roleBg: 'bg-primary/10 border-primary/20',
          roleText: 'text-primary',
          titleText: 'text-primary',
        },
        {
          name: 'Jeremy David',
          role: 'COO',
          title: 'Co-fondateur',
          description: 'Expert en methodologie Lean et optimisation des processus operationnels.',
          linkedin: 'https://linkedin.com/in/jeremy-david-279564157/',
          image: 'image2.png',
          roleBg: 'bg-emerald-500/10 border-emerald-500/20',
          roleText: 'text-emerald-600',
          titleText: 'text-emerald-600',
        },
        {
          name: 'Louis Marsais',
          role: 'CTO',
          title: 'Co-fondateur',
          description: 'Responsable produit et technologie. Architecte des solutions Natalia.',
          linkedin: 'https://linkedin.com/in/louis-marsais/',
          image: 'louisAvif.avif',
          roleBg: 'bg-purple-500/10 border-purple-500/20',
          roleText: 'text-purple-600',
          titleText: 'text-purple-600',
        },
        {
          name: 'Francois-Guillaume Ribreau',
          role: 'AI Expert',
          title: 'Co-fondateur',
          description: 'Serial entrepreneur et expert en intelligence artificielle. Garant de l\'excellence technologique.',
          linkedin: 'https://linkedin.com/in/francoisguillaumeribreau/',
          image: 'image3.png',
          roleBg: 'bg-amber-500/10 border-amber-500/20',
          roleText: 'text-amber-600',
          titleText: 'text-amber-600',
        },
        {
          name: 'Baptiste Parmantier',
          role: 'Lead Dev',
          title: 'Lead Software Engineer',
          description: 'Developpeur passionne et autodidacte. Pilote le developpement des solutions Natalia.',
          linkedin: 'https://linkedin.com/in/baptiste-parmantier/',
          image: 'image4.png',
          roleBg: 'bg-blue-500/10 border-blue-500/20',
          roleText: 'text-blue-600',
          titleText: 'text-blue-600',
        },
        {
          name: 'Malo Blanchard',
          role: 'Lead CX',
          title: 'Lead Customer Experience',
          description: 'Au croisement entre l\'expertise relation client et son passe de lead developpeur, Malo resout les problemes techniques des clients et repond au plus pres de leurs besoins.',
          linkedin: '',
          image: 'maloBlanchard.jpg',
          roleBg: 'bg-cyan-500/10 border-cyan-500/20',
          roleText: 'text-cyan-600',
          titleText: 'text-cyan-600',
        },
        {
          name: 'Pierre Turquand',
          role: 'Investor',
          title: 'Co-fondateur & Investisseur',
          description: 'Entrepreneur experimente. Soutient le developpement strategique de Natalia.',
          linkedin: '',
          image: 'captureDecran20251021A161843Png.png',
          roleBg: 'bg-gray-500/10 border-gray-500/20',
          roleText: 'text-gray-600',
          titleText: 'text-gray-600',
        },
      ],
    },
    values: {
      badge: 'Nos valeurs',
      title: 'Ce qui nous',
      titleHighlight: 'anime',
      items: [
        {
          title: 'Innovation',
          description: 'Nous repoussons les limites de l\'IA vocale pour offrir des experiences toujours plus naturelles et efficaces.',
        },
        {
          title: 'Humain',
          description: 'L\'IA au service de l\'humain, jamais l\'inverse. Nous augmentons vos equipes, nous ne les remplacons pas.',
        },
        {
          title: 'Confiance',
          description: 'Securite, confidentialite, transparence. Vos donnees sont protegees et hebergees en France.',
        },
      ],
    },
    technology: {
      badge: 'Technologie',
      title: 'Une technologie',
      titleHighlight: 'de pointe',
      paragraph1: 'Natalia s\'appuie sur les dernieres avancees en matiere d\'intelligence artificielle et de traitement du langage naturel.',
      paragraph2: 'Notre equipe R&D travaille en permanence a l\'amelioration de nos modeles pour offrir des conversations toujours plus naturelles et pertinentes.',
      paragraph3: 'Nous collaborons avec les meilleurs laboratoires de recherche en IA pour rester a la pointe de l\'innovation.',
      stackTitle: 'Notre stack technologique',
      stack: [
        'Large Language Models (LLM) de derniere generation',
        'Synthese vocale ultra-realiste',
        'API telephonique temps reel',
        'Infrastructure cloud scalable',
      ],
    },
    cta: {
      title: 'Envie d\'en savoir plus ?',
      subtitle: 'Rencontrez notre equipe et decouvrez comment Natalia peut transformer votre relation client.',
      button: 'Nous contacter',
    },
  },

  // Voice Assistant page content
  voiceAssistant: {
    hero: {
      badge: 'Voicebot',
      title: 'Automatisez l\'accueil telephonique',
      titleHighlight: 'et la gestion des demandes',
      titleEnd: 'de premier niveau, 24/7',
      subtitle: 'Solution d\'IA conversationnelle vocale qui gere les appels entrants, qualifie les demandes et resout les problemes simples ou ouvre des tickets, garantissant une disponibilite et une reactivite maximale.',
      ctaDemo: 'Reserver une demo',
      ctaRoi: 'Calculer mon ROI',
      available: 'Disponible',
      response: 'Reponse',
    },
    differentiators: {
      title: 'Ce qui fait la',
      titleHighlight: 'difference',
      items: [
        {
          title: 'Voix naturelle',
          description: 'Pas de voix robotique. Natalia parle avec une voix naturelle et fluide qui met vos clients en confiance.',
        },
        {
          title: 'Comprehension IA',
          description: 'Natalia comprend le langage naturel, les accents, les hesitations. Elle s\'adapte a chaque interlocuteur.',
        },
        {
          title: 'Disponible 24/7',
          description: 'Pas de pause dejeuner, pas de vacances, pas de week-end. Natalia repond a chaque appel, a chaque instant.',
        },
      ],
    },
    features: {
      title: 'Fonctionnalites',
      titleHighlight: 'cles',
      subtitle: 'Des capacites metier concretes pour automatiser votre accueil telephonique',
      items: [
        {
          title: 'Qualification d\'Appel',
          description: 'Identification automatique du motif et de l\'urgence en langage naturel. Natalia comprend le besoin du client des les premieres secondes.',
        },
        {
          title: 'Routage Intelligent',
          description: 'Transfert automatique vers le bon service ou conseiller apres qualification. Plus de temps perdu en redirections multiples.',
        },
        {
          title: 'Resolution Niveau 1',
          description: 'Reponse automatique aux FAQ, verification de statut, reinitialisation de mot de passe et autres actions simples. Liberez vos agents pour les cas complexes.',
        },
        {
          title: 'Ouverture Automatique de Ticket',
          description: 'Creation immediate dans votre CRM ou outil de ticketing. Toutes les informations recueillies sont transmises pour un suivi optimal.',
        },
      ],
    },
    capabilities: {
      title: 'Capacites',
      titleHighlight: 'techniques',
      subtitle: 'Une technologie de pointe pour une experience client exceptionnelle',
      comingSoon: 'Bientot',
      items: [
        {
          title: 'Multilingue',
          description: 'Francais, anglais, espagnol, allemand... Natalia s\'adapte a la langue de votre interlocuteur.',
        },
        {
          title: 'API & Webhooks',
          description: 'Integrez Natalia a vos systemes existants via notre API REST et nos webhooks en temps reel.',
          comingSoon: true,
        },
        {
          title: 'Analytics',
          description: 'Dashboard temps reel pour suivre les performances : taux de resolution, duree moyenne, satisfaction.',
        },
        {
          title: 'Transfert intelligent',
          description: 'Natalia detecte quand un humain doit prendre le relais et transfere l\'appel avec tout le contexte.',
        },
        {
          title: 'Securite',
          description: 'Donnees chiffrees, hebergement en France, conformite RGPD. Vos conversations sont protegees.',
        },
        {
          title: 'Auto-apprentissage',
          description: 'Natalia s\'ameliore continuellement en apprenant de chaque conversation.',
          comingSoon: true,
        },
      ],
    },
    howItWorks: {
      title: 'Comment ca',
      titleHighlight: 'marche',
      steps: [
        {
          title: 'Configuration',
          description: 'Nous parametrons Natalia selon vos besoins, votre vocabulaire metier et vos scenarios.',
        },
        {
          title: 'Integration',
          description: 'Natalia se connecte a votre telephonie et a vos outils metiers (CRM, ERP, ticketing...).',
        },
        {
          title: 'Pilote',
          description: 'Nous lancons un pilote sur un perimetre defini pour valider les performances.',
        },
        {
          title: 'Deploiement',
          description: 'Une fois valide, nous deployons Natalia sur l\'ensemble de vos lignes.',
        },
      ],
    },
    benefits: {
      title: 'Les',
      titleHighlight: 'benefices',
      titleEnd: 'pour votre entreprise',
      subtitle: 'Un impact mesurable sur vos operations et votre experience client',
      items: [
        {
          title: 'Desengorgement des centres d\'appels',
          description: 'Reduisez les files d\'attente en traitant automatiquement 60% des appels entrants. Vos agents se concentrent sur les demandes a forte valeur ajoutee.',
        },
        {
          title: 'Reduction des couts support N1',
          description: 'Diminuez vos couts de support de premier niveau jusqu\'a 40%. Natalia traite les demandes simples a une fraction du cout humain.',
        },
        {
          title: 'Experience client amelioree',
          description: 'Reponse instantanee, zero temps d\'attente. Vos clients obtiennent une reponse immediate, 24h/24 et 7j/7.',
        },
      ],
    },
    targets: {
      title: 'Pour',
      titleHighlight: 'qui',
      subtitle: 'Natalia Voice s\'adresse aux decideurs qui veulent transformer leur service client',
      items: [
        {
          title: 'Directeur Operations',
          description: 'Optimisez vos flux d\'appels, reduisez les pics de charge et ameliorez vos KPIs operationnels avec une solution qui s\'adapte a votre volumetrie.',
        },
        {
          title: 'Responsable Service Client',
          description: 'Offrez une experience client exceptionnelle avec une disponibilite 24/7, tout en liberant vos equipes pour les interactions a forte valeur ajoutee.',
        },
        {
          title: 'DSI',
          description: 'Deploiement rapide via API REST, integration avec votre stack existant (CRM, ERP, ticketing) et conformite RGPD assuree.',
        },
      ],
    },
    cta: {
      title: 'Pret a decouvrir Natalia ?',
      subtitle: 'Planifiez une demonstration personnalisee avec notre equipe.',
      button: 'Reserver une demo',
    },
  },

  // Analytics page content
  analytics: {
    hero: {
      badge: 'Analyse Vocale',
      title: 'Transformez vos conversations',
      titleHighlight: 'en tableau de bord strategique',
      subtitle: 'Outil d\'analyse conversationnelle base sur le Speech-to-Text qui se connecte a vos enregistrements, transcrit les echanges, calcule les KPIs critiques, le scoring et fournit les insights necessaires a l\'amelioration continue.',
      ctaDemo: 'Reserver une demo',
      ctaExample: 'Voir un exemple',
      dashboard: {
        quality: 'Qualite',
        satisfaction: 'Satisfaction',
        calls: 'Appels',
        days: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'],
        sentimentPlus: 'Sentiment +',
        complianceOk: 'Conformite OK',
      },
    },
    differentiators: {
      title: 'Ce qui fait la',
      titleHighlight: 'difference',
      items: [
        {
          title: 'Transcription Precise',
          description: 'Notre technologie STT convertit vos appels en texte avec une precision exceptionnelle, meme avec les accents et le vocabulaire metier.',
        },
        {
          title: 'Analyse Intelligente',
          description: 'L\'IA analyse le sentiment, detecte les mots-cles, evalue la conformite et identifie les opportunites d\'amelioration.',
        },
        {
          title: 'Insights Actionnables',
          description: 'Transformez vos donnees vocales en decisions eclairees avec des tableaux de bord clairs et des recommandations concretes.',
        },
      ],
    },
    features: {
      title: 'Fonctionnalites',
      titleHighlight: 'cles',
      subtitle: 'Tout ce dont vous avez besoin pour analyser et ameliorer la qualite de vos echanges',
      items: [
        {
          title: 'Transcription Integrale (STT)',
          description: 'Conversion precise de 100% de vos appels en texte exploitable, avec identification des locuteurs et horodatage.',
        },
        {
          title: 'Analyse et Scoring',
          description: 'Sentiment analysis, scoring de conformite, detection de mots-cles et evaluation automatique de la qualite de l\'echange.',
        },
        {
          title: 'Dashboard de Pilotage',
          description: 'Tableaux de bord dynamiques avec KPIs pour le management et les equipes qualite. Visualisez les tendances en temps reel.',
        },
        {
          title: 'Coaching des Operateurs',
          description: 'Identifiez les meilleures pratiques et les points d\'amelioration. Accompagnez vos equipes avec des feedbacks objectifs.',
        },
        {
          title: 'Detection Mots-Cles',
          description: 'Detectez automatiquement les mentions de produits, concurrents, irritants clients et opportunites commerciales.',
        },
        {
          title: 'Audit 100% des Appels',
          description: 'Fini l\'echantillonnage. Analysez l\'integralite de vos conversations pour une conformite et un controle qualite complets.',
        },
      ],
    },
    howItWorks: {
      title: 'Comment ca',
      titleHighlight: 'marche',
      steps: [
        {
          title: 'Connexion',
          description: 'Connectez Natalia Analyse a vos enregistrements d\'appels existants via API ou import de fichiers.',
        },
        {
          title: 'Transcription',
          description: 'Notre STT transcrit automatiquement chaque appel avec une precision exceptionnelle.',
        },
        {
          title: 'Analyse',
          description: 'L\'IA analyse le contenu, calcule les scores et detecte les insights cles.',
        },
        {
          title: 'Action',
          description: 'Consultez vos dashboards et prenez des decisions basees sur des donnees concretes.',
        },
      ],
    },
    benefits: {
      title: 'Les',
      titleHighlight: 'benefices',
      titleEnd: 'pour votre entreprise',
      subtitle: 'Transformez vos conversations en avantage concurrentiel',
      items: [
        {
          title: 'Decisions eclairees',
          description: 'Basez vos decisions strategiques sur des donnees vocales concretes, pas sur des intuitions ou des echantillons limites.',
        },
        {
          title: 'Amelioration rapide',
          description: 'Identifiez rapidement les axes d\'amelioration et mesurez l\'impact de vos actions sur la qualite de service.',
        },
        {
          title: 'Reduction du risque',
          description: 'Auditez 100% de vos appels pour assurer la conformite reglementaire et reduire les risques legaux.',
        },
      ],
    },
    targets: {
      title: 'Pour',
      titleHighlight: 'qui',
      subtitle: 'Natalia Analyse s\'adresse aux professionnels de la qualite et de la performance',
      items: [
        {
          title: 'Directeur Qualite',
          description: 'Passez de l\'echantillonnage a l\'audit exhaustif. Identifiez les non-conformites et suivez l\'evolution de vos indicateurs qualite en temps reel.',
        },
        {
          title: 'Directeur CX',
          description: 'Comprenez ce que ressentent vraiment vos clients. Detectez les irritants, mesurez la satisfaction et optimisez chaque point de contact.',
        },
        {
          title: 'Directeur Commercial',
          description: 'Coachez vos equipes avec des donnees objectives. Identifiez les meilleures pratiques et formez vos commerciaux sur des exemples concrets.',
        },
      ],
    },
    cta: {
      title: 'Pret a transformer vos conversations en insights ?',
      subtitle: 'Decouvrez Natalia Analyse lors d\'une demonstration personnalisee.',
      button: 'Reserver une demo',
    },
  },

  // WhatsApp page content
  whatsapp: {
    hero: {
      badge: 'WhatsApp IA',
      title: 'Ne perdez plus de prospect "chaud" :',
      titleHighlight: 'relancez instantanement sur WhatsApp',
      subtitle: 'Solution qui s\'active lorsqu\'un appel est manque ou recu en dehors des heures d\'ouverture, envoie un message WhatsApp et poursuit la discussion en mode IA pour qualifier le besoin et convertir le prospect.',
      ctaDemo: 'Reserver une demo',
      ctaRoi: 'Calculer mon ROI',
      auto: 'Auto',
      leadQualified: 'Lead qualifie',
      floatingStats: {
        openRate: '98% ouverture',
        response: 'Reponse <30s',
      },
      chat: {
        incoming: 'Bonjour ! Nous avons vu que vous avez essaye de nous joindre.',
        incomingTime: '14:32',
        response: 'Oui, je cherche un devis pour...',
        responseTime: '14:33',
        iaResponse: 'Parfait ! Je peux vous aider. Quel est votre budget ?',
        iaResponseTime: '14:33',
      },
    },
    differentiators: {
      title: 'Ce qui fait la',
      titleHighlight: 'difference',
      items: [
        {
          title: 'Reactivite Instantanee',
          description: 'Moins de 30 secondes entre l\'appel manque et le premier message WhatsApp. Ne laissez jamais un prospect refroidir.',
        },
        {
          title: '98% Taux d\'Ouverture',
          description: 'Contrairement aux emails, les messages WhatsApp sont ouverts quasi-systematiquement. Votre message sera lu.',
        },
        {
          title: 'Qualification Automatique',
          description: 'L\'IA conversationnelle qualifie le prospect (budget, besoins, urgence) avant meme que vous n\'interveniez.',
        },
      ],
    },
    features: {
      title: 'Fonctionnalites',
      titleHighlight: 'cles',
      subtitle: 'Transformez chaque appel manque en opportunite de conversion',
      items: [
        {
          title: 'Detection et Trigger',
          description: 'S\'active automatiquement sur appel manque, hors horaires d\'ouverture, ou en cas de debordement. Aucune intervention necessaire.',
        },
        {
          title: 'Relance Personnalisee',
          description: 'Message WhatsApp contextuel et personnalise grace a l\'IA conversationnelle. Chaque prospect recoit un message adapte.',
        },
        {
          title: 'Qualification Asynchrone',
          description: 'L\'IA mene la discussion pour obtenir les informations cles : budget, type de projet, urgence, coordonnees.',
        },
        {
          title: 'Collecte de Documents',
          description: 'Le prospect peut envoyer photos, documents ou informations directement via WhatsApp. Tout est centralise.',
        },
        {
          title: 'Integration CRM',
          description: 'Les leads qualifies sont automatiquement synchronises dans votre CRM avec toutes les informations collectees.',
        },
        {
          title: 'Scenarios Personnalisables',
          description: 'Adaptez les scripts de conversation a votre metier : immobilier, automobile, services, e-commerce...',
        },
      ],
    },
    howItWorks: {
      title: 'Comment ca',
      titleHighlight: 'marche',
      steps: [
        {
          title: 'Appel Manque',
          description: 'Un prospect essaie de vous joindre mais vous n\'etes pas disponible (hors horaires, ligne occupee...).',
        },
        {
          title: 'Message WhatsApp',
          description: 'En moins de 30 secondes, le prospect recoit un message WhatsApp personnalise de Natalia.',
        },
        {
          title: 'Qualification IA',
          description: 'L\'IA conversationnelle qualifie le besoin : budget, projet, urgence, coordonnees.',
        },
        {
          title: 'Lead Qualifie',
          description: 'Vous recevez un lead qualifie dans votre CRM, pret pour un rappel commercial.',
        },
      ],
    },
    benefits: {
      title: 'Les',
      titleHighlight: 'benefices',
      titleEnd: 'pour votre entreprise',
      subtitle: 'Ne perdez plus jamais une opportunite commerciale',
      items: [
        {
          title: 'Conversion Maximale',
          description: 'Transformez jusqu\'a 40% de vos appels manques en leads qualifies. Ideal pour l\'immobilier, l\'automobile et les services d\'urgence.',
        },
        {
          title: 'Reactivite 24/7',
          description: 'Soyez present meme quand vous ne l\'etes pas. Week-ends, jours feries, nuits... Natalia prend le relais sans interruption.',
        },
        {
          title: 'Satisfaction Client',
          description: 'Vos prospects adorent WhatsApp. Canal simple, immediat et familier. Ils se sentent pris en charge instantanement.',
        },
      ],
    },
    targets: {
      title: 'Pour',
      titleHighlight: 'qui',
      subtitle: 'Natalia WhatsApp s\'adresse aux equipes commerciales qui ne veulent plus perdre de leads',
      items: [
        {
          title: 'Directeur Commercial',
          description: 'Maximisez le ROI de vos investissements marketing. Chaque appel manque est une opportunite recuperee et qualifiee automatiquement.',
        },
        {
          title: 'Responsable Marketing',
          description: 'Ameliorez vos taux de conversion et mesurez l\'impact de vos campagnes. Chaque lead genere est suivi jusqu\'a la qualification.',
        },
        {
          title: 'Chef des Ventes',
          description: 'Vos commerciaux recoivent des leads deja qualifies et chauds. Plus de temps perdu sur des prospects non qualifies.',
        },
      ],
    },
    cta: {
      title: 'Pret a ne plus perdre de prospects ?',
      subtitle: 'Decouvrez Natalia WhatsApp lors d\'une demonstration personnalisee.',
      button: 'Reserver une demo',
    },
  },

  // Automobile page content
  automobile: {
    hero: {
      title1: 'Natalia repond,',
      titleHighlight: 'transfere et assiste',
      title2: 'vos clients 24/7',
      subtitle: 'Une voix naturelle, une comprehension instantanee et une integration fluide a vos outils metiers automobiles',
      ctaDemo: 'Reserver une demo',
      heroImageAlt: 'Concession automobile assistee par IA',
    },
    quote1: {
      text: '40% des appels en concession ne sont pas traites.',
      description: 'Entre les clients en showroom, les appels simultanes et les standardistes debordees, de nombreuses opportunites sont perdues.',
    },
    challenges: {
      title: 'Vos',
      titleHighlight: 'defis',
      titleEnd: 'quotidiens',
      items: [
        {
          title: 'Appels manques',
          description: 'Vos standardistes sont occupees avec les clients en showroom. Les appels sonnent dans le vide, les clients raccrochent.',
        },
        {
          title: 'Horaires limites',
          description: 'Les clients appellent en dehors des heures d\'ouverture, pendant la pause dejeuner ou le week-end.',
        },
        {
          title: 'Prise de RDV',
          description: 'La prise de RDV atelier est chronophage et source d\'erreurs. Les plannings ne sont pas toujours a jour.',
        },
        {
          title: 'Leads perdus',
          description: 'Les prospects qui n\'arrivent pas a joindre la concession vont voir la concurrence.',
        },
      ],
    },
    quote2: {
      text: 'Chaque appel manque est une opportunite perdue. Chaque client qui raccroche est peut-etre',
      highlight: 'une vente de vehicule ou un entretien qui s\'envole.',
    },
    solutions: {
      title: 'Nos',
      titleHighlight: 'solutions',
      items: [
        {
          title: 'Disponible 24/7',
          description: 'Natalia repond aux appels meme en dehors des heures d\'ouverture, pendant les pauses et les week-ends.',
        },
        {
          title: 'Prise de RDV',
          description: 'Connectee a Service Box ou MecaPlanning, Natalia propose des creneaux et valide les RDV directement.',
        },
        {
          title: 'Transfert intelligent',
          description: 'Natalia identifie le besoin et transfere vers le bon service : VN, VO, SAV, pieces detachees.',
        },
        {
          title: 'Integree',
          description: 'Connectee a vos DMS (Nextlane, CDK Global, DC\'s Net, etc.) pour une synchronisation parfaite.',
        },
      ],
    },
    compatible: {
      title: 'Compatible avec vos',
      titleHighlight: 'outils metiers',
      subtitle: 'Integration native avec les principales solutions du secteur automobile',
    },
    useCases: {
      title: 'Cas d\'usage',
      titleHighlight: 'concrets',
      description: 'L\'objectif n\'est pas de remplacer l\'humain en concession mais de l\'assister pour qu\'il se concentre sur les missions a forte valeur ajoutee. Avec ces 4 cas d\'usage, nous repondons a 80% des besoins en appels entrants en concession.',
      items: [
        {
          title: 'Prise de RDV atelier',
          description: 'Connectee a votre calendrier metier, Natalia propose des creneaux, valide avec le client et renseigne les informations directement sur le logiciel.',
        },
        {
          title: 'Qualifier les leads',
          description: 'Natalia prend en charge 100% des demandes entrants. Durant l\'echange, elle qualifie le besoin et renvoie les informations au service concerne.',
        },
        {
          title: 'Transfert d\'appels',
          description: '20% des appels en concession sont des appels a transferer, cela prend du temps et casse la productivite de vos equipes.',
        },
        {
          title: 'Demandes generales',
          description: 'Reponse aux demandes recurrentes a partir de votre base de connaissance. Natalia s\'enrichit dans le temps.',
        },
      ],
    },
    cta: {
      title: 'Nous definissons ensemble le cadre du pilote lors d\'un premier rendez-vous.',
      button: 'Reserver une demo',
    },
  },

  // Call Center page content
  callCenter: {
    hero: {
      title1: 'Natalia repond,',
      titleHighlight: 'transfere et assiste',
      title2: 'vos clients 24/7',
      subtitle: 'Une voix naturelle, une comprehension instantanee et une integration fluide a votre centre d\'appels',
      ctaDemo: 'Reserver une demo',
      heroImageAlt: 'Centre d\'appels assiste par IA',
    },
    quote1: {
      text: 'L\'IA est un enjeu majeur pour les centres d\'appels dans les mois et annees a venir.',
      highlight: 'Pour rester competitif, vous devez proposer des solutions adaptees a vos clients.',
    },
    challenges: {
      title: 'Vos',
      titleHighlight: 'problemes',
      titleEnd: '...',
      items: [
        {
          title: 'Turnover important',
          description: 'C\'est un metier eprouvant pour vos equipes, vous avez du turnover et devez sans cesse recruter et reformer a nouveau.',
        },
        {
          title: 'Temps d\'attente',
          description: 'Malgre un plan de charge millimetre, vous ne pouvez pas faire face aux imprevus et scaler votre capacite d\'appels au dernier moment...',
        },
        {
          title: 'Heterogeneite',
          description: 'Votre qualite de reponse n\'est pas toujours optimale, vous avez du mal a standardiser malgre les process en place.',
        },
        {
          title: 'Indisponibilites',
          description: 'Entre les pics d\'appels, les heures fermees, les week-ends, les vacances, il est difficile d\'etre toujours disponible pour vos clients.',
        },
      ],
    },
    quote2: {
      text: 'Malgre vos efforts, votre organisation a ses limites et',
      highlight: 'vos couts fixes plombent la rentabilite...',
    },
    solutions: {
      title: 'Nos',
      titleHighlight: 'solutions',
      items: [
        {
          title: 'Disponible',
          description: 'Apportez de la disponibilite et donc de la flexibilite a votre organisation. 24h/24, 7j/7 pour gerer les appels, les astreintes, les vacances, jours feries, etc...',
        },
        {
          title: 'Personnalisee',
          description: 'Notre accompagnement s\'adapte a vos besoins, ce n\'est pas un outil standard sur etagere qui ne correspond pas a votre cahier des charges.',
        },
        {
          title: 'Scalable',
          description: 'Nous pouvons mettre une capacite de 100 appels en parallele, ou plus, selon vos besoins, de quoi gerer les imprevus et les pics d\'appels.',
        },
        {
          title: 'Integree',
          description: 'Connectee a vos outils metiers, Natalia remonte les flux au bon endroit au bon moment pour vous faire gagner du temps de saisie repetitif.',
        },
      ],
    },
    compatible: {
      title: 'Natalia est compatible',
      titleHighlight: 'avec tous vos outils metiers',
    },
    useCases: {
      title: 'Cas d\'usage',
      titleHighlight: 'concrets',
      description: 'L\'objectif n\'est pas de remplacer l\'humain mais de l\'assister pour qu\'il se concentre sur les missions a forte valeur ajoutee.',
      items: [
        {
          title: 'Prise de RDV',
          description: 'Connectee a votre calendrier metier, Natalia propose des creneaux, valide avec le client et renseigne les informations directement sur le logiciel.',
        },
        {
          title: 'Qualifier les leads',
          description: 'Natalia est disponible 24h/24, 7j/7, elle prend en charge 100% des demandes entrants. Durant l\'echange, elle qualifie le besoin et renvoie les informations au service concerne.',
        },
        {
          title: 'Transfert d\'appels',
          description: '20% des appels sont des appels a transferer, cela prend du temps, casse la productivite de vos equipes et n\'apporte pas de reelle valeur ajoutee.',
        },
        {
          title: 'Demandes generales',
          description: 'Reponse aux demandes recurrentes a partir de votre base de connaissance. Natalia s\'enrichit des echanges dans le temps pour etre de plus en plus pertinente.',
        },
      ],
    },
    cta: {
      title: 'Nous definissons ensemble le cadre du pilote lors d\'un premier rendez-vous.',
      button: 'Reserver une demo',
    },
  },

  // Helpdesk page
  helpdesk: {
    hero: {
      title1: 'Natalia repond,',
      titleHighlight: 'qualifie et cree',
      title2: 'vos tickets 24/7',
      subtitle: 'Une voix naturelle, une comprehension instantanee et une integration fluide a votre outil de ticketing',
      ctaDemo: 'Reserver une demo',
      heroImageAlt: 'Helpdesk assiste par IA',
    },
    quote1: {
      text: 'Vos equipes support sont debordees ? Les tickets s\'accumulent ? Les utilisateurs attendent des heures pour une reponse ?',
      highlight: 'Natalia prend le relais.',
    },
    challenges: {
      title: 'Vos',
      titleHighlight: 'defis',
      titleEnd: 'quotidiens',
      items: [
        {
          title: 'Rapidite attendue',
          description: 'Les utilisateurs s\'attendent a une reponse immediate. Chaque minute d\'attente augmente la frustration.',
        },
        {
          title: 'Tickets mal qualifies',
          description: 'Des tickets incomplets ou mal categorises qui necessitent des allers-retours et ralentissent la resolution.',
        },
        {
          title: 'Frustration utilisateur',
          description: 'Les utilisateurs ne savent pas ou en est leur demande, ils rappellent plusieurs fois pour le meme probleme.',
        },
        {
          title: 'Horaires limites',
          description: 'Votre support n\'est pas disponible 24/7, mais les problemes techniques n\'attendent pas les heures de bureau.',
        },
      ],
    },
    solutions: {
      title: 'Nos',
      titleHighlight: 'solutions',
      items: [
        {
          title: 'Disponible 24/7',
          description: 'Natalia repond a toute heure, meme la nuit, les week-ends et les jours feries.',
        },
        {
          title: 'Tickets qualifies',
          description: 'Natalia collecte toutes les informations necessaires et cree des tickets complets et bien categorises.',
        },
        {
          title: 'Resolution rapide',
          description: 'Pour les problemes courants, Natalia guide l\'utilisateur vers la solution sans intervention humaine.',
        },
        {
          title: 'Integree',
          description: 'Connectee a votre ITSM (ServiceNow, GLPI, Jira, etc.), Natalia cree les tickets directement dans votre systeme.',
        },
      ],
    },
    compatible: {
      title: 'Compatible avec',
      titleHighlight: 'vos outils',
      subtitle: 'Integration native avec les principales solutions ITSM',
    },
    useCases: {
      title: 'Cas d\'usage',
      titleHighlight: 'concrets',
      description: 'Natalia prend en charge les demandes de niveau 1 pour que vos equipes se concentrent sur les incidents complexes.',
      items: [
        {
          title: 'Reset mot de passe',
          description: 'Natalia verifie l\'identite de l\'utilisateur et l\'accompagne dans la reinitialisation de son mot de passe.',
        },
        {
          title: 'Probleme materiel',
          description: 'Natalia diagnostique le probleme et cree un ticket avec toutes les informations necessaires pour l\'intervention.',
        },
        {
          title: 'Probleme logiciel',
          description: 'Natalia guide l\'utilisateur dans les etapes de depannage basiques avant d\'escalader si necessaire.',
        },
      ],
    },
    cta: {
      title: 'Pret a transformer votre helpdesk ?',
      subtitle: 'Decouvrez comment Natalia peut reduire votre charge de tickets de niveau 1 de 40%.',
      button: 'Reserver une demo',
    },
  },

  // Legal index page
  legalIndex: {
    title: 'Informations',
    titleHighlight: 'Legales',
    cards: [
      {
        title: 'Mentions Legales',
        description: 'Informations sur l\'editeur du site, l\'hebergement et la propriete intellectuelle.',
        link: './mentions-legales',
      },
      {
        title: 'Politique de Confidentialite',
        description: 'Comment nous collectons, utilisons et protegeons vos donnees personnelles.',
        link: './politique-confidentialite',
      },
      {
        title: 'Conditions Generales d\'Utilisation',
        description: 'Les conditions regissant l\'utilisation de nos services.',
        link: './conditions-generales-utilisation',
      },
    ],
  },

  // Legal Notice page (mentions-legales)
  legalNotice: {
    badge: 'Informations legales',
    title: 'Mentions',
    titleHighlight: 'Legales',
    subtitle: 'Informations legales et reglementaires concernant le site Natalia',
    sections: {
      editor: {
        title: 'Editeur du site',
        items: [
          'Le site getnatalia.com est edite par Natalia SAS',
          'Forme juridique : SAS, societe par actions simplifiee',
          'Siege social : 3 rue Jean Jaures - 85000 La Roche sur Yon',
          'SIREN : 990 566 499',
          'SIRET (siege) : 990 566 499 00010',
          'TVA intracommunautaire : FR40990566499',
        ],
      },
      director: {
        title: 'Directeur de la publication',
        company: 'Natalia SAS',
        contactLabel: 'Contact',
      },
      hosting: {
        title: 'Hebergement',
        items: [
          'Le site est heberge par Netlify, Inc.',
          '2325 3rd Street, Suite 215',
          'San Francisco, California 94107',
          'United States',
        ],
      },
      intellectualProperty: {
        title: 'Propriete intellectuelle',
        text: 'L\'ensemble des elements figurant sur le site (textes, logos, images, elements graphiques, sons, logiciels, etc.) sont proteges par les dispositions du Code de la Propriete Intellectuelle. Toute reproduction, representation, modification, publication ou adaptation de tout ou partie des elements du site est interdite sauf autorisation ecrite prealable.',
      },
      personalData: {
        title: 'Donnees personnelles',
        text1: 'Conformement a la loi Informatique et Libertes du 6 janvier 1978 modifiee et au Reglement General sur la Protection des Donnees (RGPD), vous disposez d\'un droit d\'acces, de rectification, de suppression et d\'opposition aux donnees personnelles vous concernant.',
        text2: 'Pour exercer ces droits, vous pouvez nous contacter a :',
        moreInfo: 'Plus d\'informations',
        moreInfoText: 'Pour plus d\'informations, consultez notre',
        privacyLink: 'politique de confidentialite',
      },
    },
    cta: {
      title: 'Des questions ?',
      subtitle: 'Notre equipe est a votre disposition pour repondre a toutes vos questions.',
      contactButton: 'Nous contacter',
      privacyButton: 'Politique de confidentialite',
      privacyButtonUrl: './politique-confidentialite',
    },
  },

  // Privacy Policy page
  privacyPolicy: {
    badge: 'Protection de vos donnees',
    title: 'Politique de',
    titleHighlight: 'Confidentialite',
    subtitle: 'Nous prenons la protection de vos donnees personnelles tres au serieux. Decouvrez comment nous collectons, utilisons et protegeons vos informations.',
    intro: 'La presente politique de confidentialite a pour but de vous informer de maniere claire et transparente sur la maniere dont nous collectons, utilisons et protegeons vos donnees personnelles conformement au RGPD.',
    dataCollection: {
      title: 'Collecte des donnees',
      description: 'Nous collectons les donnees personnelles que vous nous fournissez directement lors de votre utilisation de nos services :',
      items: ['Nom et prenom', 'Adresse email', 'Numero de telephone', 'Nom de l\'entreprise', 'Donnees de connexion et d\'utilisation'],
    },
    dataUsage: {
      title: 'Utilisation des donnees',
      description: 'Vos donnees personnelles sont utilisees exclusivement pour :',
      items: ['Fournir et ameliorer nos services', 'Repondre a vos demandes et questions', 'Vous envoyer des informations relatives a nos services', 'Analyser l\'utilisation de notre site pour l\'ameliorer'],
    },
    protection: {
      badge: 'Securite maximale',
      title: 'Protection de',
      titleHighlight: 'vos donnees',
      description: 'Nous mettons en oeuvre des mesures de securite techniques et organisationnelles appropriees pour proteger vos donnees personnelles contre tout acces, modification, divulgation ou destruction non autorisee.',
      features: [
        { title: 'Chiffrement des donnees', description: 'Toutes vos donnees sont chiffrees en transit et au repos' },
        { title: 'Conformite RGPD', description: 'Respect strict du reglement europeen sur la protection des donnees' },
        { title: 'Acces controle', description: 'Authentification forte et gestion des droits d\'acces' },
      ],
    },
    rights: {
      badge: 'RGPD',
      title: 'Vos',
      titleHighlight: 'droits',
      description: 'Conformement au RGPD, vous disposez de droits etendus sur vos donnees personnelles',
      items: [
        { title: 'Droit d\'acces', description: 'Consultez l\'integralite de vos donnees personnelles que nous detenons' },
        { title: 'Droit de rectification', description: 'Modifiez ou corrigez vos informations personnelles a tout moment' },
        { title: 'Droit a l\'effacement', description: 'Demandez la suppression definitive de vos donnees personnelles' },
        { title: 'Droit a la limitation', description: 'Limitez le traitement de vos donnees dans certaines conditions' },
        { title: 'Droit a la portabilite', description: 'Recuperez vos donnees dans un format structure et reutilisable' },
        { title: 'Droit d\'opposition', description: 'Opposez-vous au traitement de vos donnees pour des raisons legitimes' },
      ],
    },
    cta: {
      badge: 'Contact',
      title: 'Des questions sur vos donnees ?',
      subtitle: 'Pour toute question concernant cette politique de confidentialite ou pour exercer vos droits RGPD, notre equipe est a votre disposition.',
      contactLabel: 'Contactez-nous a :',
      contactButton: 'Nous contacter',
      homeButton: 'Retour a l\'accueil',
    },
  },

  // Terms of Service page
  termsOfService: {
    badge: 'Conditions legales',
    title: 'Conditions Generales',
    titleHighlight: 'd\'Utilisation',
    subtitle: 'Les presentes conditions generales regissent l\'acces et l\'utilisation des services Natalia.',
    legalDoc: 'Document juridique',
    updatedRegularly: 'Mis a jour regulierement',
    preamble: {
      title: 'Preambule',
      text: 'Les presentes conditions generales d\'utilisation regissent l\'acces et l\'utilisation des services proposes par Natalia, accessibles via le site getnatalia.com. En utilisant nos services, vous acceptez ces conditions dans leur integralite.',
    },
    articles: [
      {
        number: 'Article 1',
        title: 'Objet',
        text: 'Les presentes CGU ont pour objet de definir les conditions d\'acces et d\'utilisation des services Natalia, accessibles via le site getnatalia.com.',
      },
      {
        number: 'Article 2',
        title: 'Description des services',
        text: 'Natalia propose une solution d\'assistante vocale basee sur l\'intelligence artificielle permettant d\'automatiser la gestion des appels telephoniques entrants pour les entreprises.',
      },
      {
        number: 'Article 3',
        title: 'Acces aux services',
        text: 'L\'acces aux services Natalia est reserve aux professionnels ayant souscrit un abonnement. L\'utilisateur s\'engage a fournir des informations exactes lors de son inscription.',
      },
      {
        number: 'Article 4',
        title: 'Obligations de l\'utilisateur',
        intro: 'L\'utilisateur s\'engage a :',
        items: [
          'Utiliser les services conformement a leur destination',
          'Ne pas porter atteinte aux droits de tiers',
          'Respecter la legislation en vigueur',
          'Maintenir la confidentialite de ses identifiants',
        ],
      },
      {
        number: 'Article 5',
        title: 'Propriete intellectuelle',
        text: 'L\'ensemble des elements composant le service Natalia (logiciels, algorithmes, interfaces, bases de donnees, marques, logos, etc.) sont proteges par le droit de la propriete intellectuelle et restent la propriete exclusive de Natalia SAS. Toute reproduction, representation, modification ou exploitation non autorisee est strictement interdite.',
      },
      {
        number: 'Article 6',
        title: 'Responsabilite',
        intro: 'Natalia s\'engage a mettre en oeuvre tous les moyens necessaires pour assurer la continuite et la qualite de ses services. Toutefois, Natalia ne saurait etre tenue responsable :',
        items: [
          'Des dommages indirects resultant de l\'utilisation de ses services',
          'Des interruptions de service dues a des cas de force majeure',
          'De l\'utilisation frauduleuse ou non conforme de ses services',
        ],
      },
      {
        number: 'Article 7',
        title: 'Modification des CGU',
        text: 'Natalia se reserve le droit de modifier les presentes CGU a tout moment afin de les adapter aux evolutions de ses services ou a la legislation. Les utilisateurs seront informes de toute modification significative par email ou via une notification sur le site. La poursuite de l\'utilisation des services apres modification vaut acceptation des nouvelles conditions.',
      },
      {
        number: 'Article 8',
        title: 'Contact',
        text: 'Pour toute question relative aux presentes CGU, vous pouvez nous contacter a l\'adresse :',
      },
    ],
    cta: {
      badge: 'Une question ?',
      title: 'Besoin de precisions sur nos CGU ?',
      subtitle: 'Notre equipe est a votre disposition pour repondre a toutes vos questions juridiques et contractuelles.',
      contactButton: 'Nous contacter',
      legalButton: 'Mentions legales',
      legalButtonUrl: './mentions-legales',
    },
  },

  // Hotline page
  hotline: {
    hero: {
      title1: 'Natalia repond,',
      titleHighlight: 'qualifie et cree',
      title2: 'vos tickets 24/7',
      subtitle: 'Une voix naturelle, une comprehension instantanee et une integration fluide a votre outil de ticketing',
      ctaDemo: 'Reserver une demo',
      heroImageAlt: 'Hotline assistee par IA',
    },
    quote1: {
      text: 'Votre hotline est souvent saturee ? Les temps d\'attente explosent pendant les pics d\'appels ?',
      highlight: 'Natalia absorbe la charge et maintient la qualite de service.',
    },
    challenges: {
      title: 'Les',
      titleHighlight: 'defis',
      titleEnd: 'de votre hotline',
      items: [
        {
          title: 'Pics d\'appels',
          description: 'Impossible de dimensionner vos equipes pour les pics. Trop de personnel en temps normal, pas assez en cas de crise.',
        },
        {
          title: 'Temps d\'attente',
          description: 'Les temps d\'attente eleves degradent l\'experience client et augmentent le taux d\'abandon.',
        },
        {
          title: 'Complexite technique',
          description: 'Les demandes techniques necessitent souvent plusieurs echanges pour etre comprises et qualifiees.',
        },
        {
          title: 'Formation continue',
          description: 'Les produits evoluent, la documentation change. Former en continu vos equipes est un defi permanent.',
        },
      ],
    },
    solutions: {
      title: 'Nos',
      titleHighlight: 'solutions',
      items: [
        {
          title: 'Disponible 24/7',
          description: 'Natalia repond a toute heure, absorbant les pics sans delai d\'attente.',
        },
        {
          title: 'Parametrable',
          description: 'Adaptez les scenarios aux specificites de vos produits et services.',
        },
        {
          title: 'Scalable',
          description: 'Passez de 10 a 1000 appels simultanes sans impact sur la qualite.',
        },
        {
          title: 'Integree',
          description: 'Connectee a vos outils de ticketing et CRM pour un suivi complet.',
        },
      ],
    },
    compatible: {
      title: 'Compatible avec',
      titleHighlight: 'vos outils',
      subtitle: 'Integration native avec les principales solutions du marche',
    },
    useCases: {
      title: 'Cas d\'usage',
      titleHighlight: 'concrets',
      description: 'Natalia gere les demandes recurrentes pour que vos experts se concentrent sur les cas complexes.',
      items: [
        {
          title: 'FAQ dynamique',
          description: 'Reponses aux questions frequentes basees sur votre base de connaissances.',
        },
        {
          title: 'Diagnostic guide',
          description: 'Natalia pose les bonnes questions pour identifier le probleme.',
        },
        {
          title: 'Suivi de ticket',
          description: 'L\'utilisateur peut connaitre l\'etat de sa demande a tout moment.',
        },
        {
          title: 'Escalade intelligente',
          description: 'Transfert vers un expert humain quand la situation le necessite.',
        },
      ],
    },
    cta: {
      title: 'Pret a optimiser votre hotline ?',
      subtitle: 'Decouvrez comment Natalia peut reduire vos temps d\'attente de 70%.',
      button: 'Reserver une demo',
    },
  },

  // Email Automation AI page
  emailAutomationPage: {
    hero: {
      titleHighlight: 'Automatisez',
      title: 'vos emails et workflows',
      subtitle: 'Natalia traite vos demandes par email avec la meme intelligence que par telephone. Categorisation, reponse automatique, escalade.',
      ctaButton: 'Reserver une demo',
      heroImageAlt: 'Assistant Mail IA Natalia',
    },
    challenges: {
      title: 'Vos defis avec',
      titleHighlight: 'les emails',
      items: [
        {
          title: 'Volume croissant',
          description: 'Des centaines d\'emails par jour a trier, categoriser et traiter. Vos equipes sont submergees.',
        },
        {
          title: 'Temps de reponse',
          description: 'Les clients attendent une reponse rapide. Les delais nuisent a la satisfaction et a l\'image de marque.',
        },
        {
          title: 'Mauvais routage',
          description: 'Les emails arrivent au mauvais service. Les allers-retours internes rallongent les delais.',
        },
      ],
    },
    solutions: {
      title: 'Nos',
      titleHighlight: 'solutions',
      items: [
        {
          title: 'Categorisation auto',
          description: 'Natalia analyse chaque email et le categorise automatiquement selon vos criteres.',
        },
        {
          title: 'Routage intelligent',
          description: 'Les emails sont diriges vers le bon service, la bonne personne, des leur reception.',
        },
        {
          title: 'Reponse automatique',
          description: 'Pour les demandes simples, Natalia genere et envoie une reponse personnalisee.',
        },
        {
          title: 'Creation de tickets',
          description: 'Les demandes sont transformees en tickets dans votre outil de suivi (Jira, Zendesk...).',
        },
      ],
    },
    workflow: {
      title: 'Automatisation des',
      titleHighlight: 'workflows',
      steps: [
        {
          title: 'Reception',
          description: 'L\'email arrive dans votre boite, Natalia l\'analyse immediatement.',
        },
        {
          title: 'Analyse',
          description: 'Extraction du sujet, de l\'intention, de l\'urgence et des informations cles.',
        },
        {
          title: 'Action',
          description: 'Reponse automatique, creation de ticket, routage ou escalade selon les regles.',
        },
        {
          title: 'Suivi',
          description: 'Dashboard de suivi, metriques et amelioration continue des reponses.',
        },
      ],
      integrations: {
        title: 'Integrations',
        subtitle: 'Natalia se connecte a vos outils existants :',
        items: ['Gmail / Outlook', 'Jira / Zendesk', 'Salesforce', 'HubSpot', 'Slack / Teams', 'API personnalisee'],
      },
    },
    cta: {
      title: 'Automatisez vos emails des aujourd\'hui',
      subtitle: 'Reduisez de 60% le temps de traitement de vos emails avec Natalia.',
      button: 'Reserver une demo',
    },
  },

  // Press page
  pressPage: {
    hero: {
      title: 'Espace',
      titleHighlight: 'Presse',
      subtitle: 'Retrouvez toutes les informations sur Natalia pour vos articles et reportages.',
    },
    contact: {
      title: 'Contact Presse',
      description: 'Pour toute demande d\'interview, d\'information ou de partenariat editorial, contactez notre equipe communication.',
    },
    about: {
      title: 'A propos de Natalia',
      text1: 'Natalia est une solution d\'assistante vocale basee sur l\'intelligence artificielle qui permet aux entreprises de repondre a 100% de leurs appels, 24h/24, 7j/7.',
      text2: 'Developpee en France, Natalia s\'integre aux principaux outils metiers et offre une experience vocale naturelle et fluide.',
    },
    keyFacts: {
      title: 'Chiffres',
      titleHighlight: 'cles',
      items: [
        { value: '24/7', label: 'Disponibilite' },
        { value: '100%', label: 'Appels traites' },
        { value: '<1s', label: 'Temps de reponse' },
        { value: 'FR', label: 'Hebergement' },
      ],
    },
    pressReleases: {
      title: 'Communiques de',
      titleHighlight: 'presse',
      readButton: 'Lire',
      items: [
        {
          date: 'Janvier 2025',
          title: 'Natalia : l\'IA transforme la gestion administrative',
          url: 'https://www.informateurjudiciaire.fr/actualites/natalia-lia-transforme-la-gestion-administrative/',
        },
      ],
    },
    mediaKit: {
      title: 'Kit',
      titleHighlight: 'Media',
      description: 'Telechargez notre kit media contenant les logos, visuels et informations sur Natalia.',
      button: 'Telecharger le kit media',
    },
    cta: {
      title: 'Besoin d\'informations ?',
      subtitle: 'Notre equipe communication est a votre disposition.',
      button: 'Contacter l\'equipe presse',
    },
  },

  // Partners page
  partnersPage: {
    hero: {
      title: 'Nos',
      titleHighlight: 'partenaires',
      subtitle: 'Un ecosysteme de partenaires technologiques et commerciaux pour vous offrir les meilleures solutions.',
    },
    techPartners: {
      title: 'Partenaires',
      titleHighlight: 'technologiques',
    },
    autoPartners: {
      title: 'Partenaires secteur',
      titleHighlight: 'automobile',
    },
    becomePartner: {
      title: 'Devenez',
      titleHighlight: 'partenaire',
      intro: 'Vous etes un editeur de logiciel, un integrateur telephonique ou un revendeur ?',
      description: 'Rejoignez notre programme partenaires et proposez Natalia a vos clients. Beneficiez de notre accompagnement technique et commercial.',
      benefits: [
        'Formation technique complete',
        'Support commercial et marketing',
        'Commission attractive sur les ventes',
        'Acces prioritaire aux nouvelles fonctionnalites',
      ],
      button: 'Devenir partenaire',
      typesTitle: 'Types de partenariats',
      types: [
        {
          title: 'Integrateurs telephonie',
          description: 'Connectez Natalia a vos solutions de telephonie d\'entreprise.',
        },
        {
          title: 'Editeurs de logiciels',
          description: 'Integrez l\'IA vocale Natalia dans vos applications.',
        },
        {
          title: 'Revendeurs',
          description: 'Commercialisez Natalia aupres de vos clients.',
        },
      ],
    },
    cta: {
      title: 'Interesse par un partenariat ?',
      subtitle: 'Contactez notre equipe partenariats pour discuter des opportunites.',
      button: 'Nous contacter',
    },
  },

  // Calculator page
  calculatorPage: {
    hero: {
      title: 'Calculez vos',
      titleHighlight: 'economies',
      titleEnd: 'avec Natalia',
      subtitle: 'Estimez le retour sur investissement que Natalia peut vous apporter en fonction de votre volume d\'appels.',
    },
    calculator: {
      title: 'Simulateur de',
      titleHighlight: 'ROI',
      sliders: {
        calls: {
          label: 'Nombre d\'appels entrants par mois',
          min: '100',
          max: '10 000',
        },
        missed: {
          label: 'Taux d\'appels manques actuel (%)',
          min: '10%',
          max: '60%',
        },
        cost: {
          label: 'Cout horaire moyen d\'un agent (euros)',
          min: '15 euros',
          max: '50 euros',
        },
        duration: {
          label: 'Duree moyenne d\'un appel (minutes)',
          min: '2 min',
          max: '15 min',
        },
      },
      results: {
        title: 'Resultats estimes',
        recovered: 'Appels recuperes par mois',
        hours: 'Heures economisees par mois',
        monthlySavings: 'Economies mensuelles estimees',
        annualSavings: 'Economies annuelles',
      },
      note: '* Estimation basee sur une prise en charge de 100% des appels par Natalia et une resolution de 60% des demandes sans intervention humaine.',
      button: 'Demander une etude personnalisee',
    },
    units: {
      euros: 'euros',
      hours: 'h',
      min: 'min',
      percent: '%',
    },
    benefits: {
      title: 'Au-dela des',
      titleHighlight: 'economies',
      items: [
        {
          title: 'Satisfaction client',
          description: 'Plus d\'attente, plus d\'appels manques. Vos clients sont pris en charge immediatement.',
        },
        {
          title: 'Productivite',
          description: 'Vos equipes se concentrent sur les taches a forte valeur ajoutee.',
        },
        {
          title: 'Donnees',
          description: 'Collecte automatique de donnees pour mieux comprendre vos clients.',
        },
      ],
    },
    cta: {
      title: 'Pret a passer a l\'action ?',
      subtitle: 'Demandez une etude personnalisee gratuite pour votre entreprise.',
      button: 'Demander une etude',
    },
  },
};

module.exports = fr;
