const locals = {};

// Site metadata
locals.site = {
  currentYear: new Date().getFullYear(),
  name: 'Natalia',
  title: 'Natalia - Assistante Vocale IA',
  description: "Solution d'assistante vocale IA pour entreprises. Automatisez vos appels entrants avec une intelligence artificielle conversationnelle.",
  url: 'https://getnatalia.com',
  language: 'fr',
  locale: 'fr_FR',
  author: 'Natalia',
  email: 'contact@getnatalia.com',
};

// Social links
locals.social = {
  twitter: {
    name: 'Twitter',
    href: '',
    logo: `<svg role="img" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  },
  linkedin: {
    name: 'LinkedIn',
    href: '',
    logo: `<svg role="img" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
};

// Navigation
locals.navigation = {
  main: [
    { label: 'Accueil', url: '/' },
    {
      label: 'Solutions',
      url: '#solutions',
      children: [
        {
          label: 'Natalia Voice',
          url: '/assistante-vocale-ia',
          description: 'Assistant vocal IA disponible 24h/24 pour vos appels entrants',
          icon: 'phone',
        },
        {
          label: 'Natalia Analyse',
          url: '/analyse',
          description: 'Transcription et analyse intelligente de toutes vos conversations',
          icon: 'chart',
        },
        {
          label: 'Natalia WhatsApp',
          url: '/whatsapp',
          description: 'Engagez vos clients avec 98% de taux d\'ouverture',
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
          url: '/automobile',
          description: 'Concessions et services après-vente',
          icon: 'car',
        },
        {
          label: "Centre d'appel",
          url: '/centre-d-appel',
          description: 'BPO et support client externalisé',
          icon: 'headset',
        },
        {
          label: 'Helpdesk',
          url: '/helpdesk',
          description: 'Support technique IT et assistance',
          icon: 'help',
        },
        {
          label: 'Hotline',
          url: '/hotline',
          description: 'Service continu 24/7 sans interruption',
          icon: 'clock',
        },
      ],
    },
    { label: 'Partenaires', url: '/partenaires' },
    { label: 'Presse', url: '/presse' },
    { label: 'À propos', url: '/a-propos' },
    { label: 'Contact', url: '/contact' },
  ],
  footer: [
    { label: 'Mentions légales', url: '/mentions-legales' },
    { label: 'Politique de confidentialité', url: '/politique-confidentialite' },
    { label: 'CGU', url: '/conditions-generales-utilisation' },
  ],
};

// CTA buttons
locals.cta = {
  primary: {
    label: 'Demander une démo',
    url: '/contact',
  },
  secondary: {
    label: 'En savoir plus',
    url: '/a-propos',
  },
};

// Features for homepage
locals.features = [
  {
    primary: true,
    title: 'Disponibilité 24/7',
    description: 'Natalia répond à vos appels 24h/24, 7j/7, sans interruption ni fatigue.',
    icon: 'clock',
  },
  {
    primary: true,
    title: 'Intégration simple',
    description: 'Notre API REST et nos connecteurs permettent une intégration rapide avec vos outils existants.',
    icon: 'plug',
  },
  {
    primary: true,
    title: 'IA Conversationnelle',
    description: 'Natalia comprend le langage naturel et répond de manière fluide et personnalisée.',
    icon: 'brain',
  },
  {
    primary: true,
    title: 'Multilingue',
    description: 'Natalia parle français, anglais, espagnol et plus encore.',
    icon: 'globe',
  },
  {
    primary: true,
    title: 'Analyse en temps réel',
    description: 'Tableaux de bord et rapports détaillés sur vos appels.',
    icon: 'chart',
  },
  {
    primary: true,
    title: 'Sécurité Enterprise',
    description: 'Hébergement en Europe, conformité RGPD, chiffrement bout-en-bout.',
    icon: 'shield',
  },
];

// Testimonials
locals.testimonials = [
  {
    quote: "Natalia a transformé notre service client. Nous ne ratons plus aucun appel.",
    author: 'Marie Dupont',
    role: 'Directrice Service Client',
    company: 'AutoPlus',
  },
  {
    quote: "L'intégration a été simple et les résultats immédiats. ROI positif en 3 mois.",
    author: 'Jean Martin',
    role: 'CEO',
    company: 'TechStart',
  },
];

// Stats
locals.stats = [
  { value: '24/7', label: 'Disponibilité' },
  { value: '60%', label: 'Appels traités automatiquement' },
  { value: '3min', label: 'Temps de réponse moyen' },
  { value: '95%', label: 'Satisfaction client' },
];

module.exports = locals;
