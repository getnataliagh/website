/**
 * English locale - Content and translations
 */
const slugs = require('./slugs');

const en = {
  // Language metadata
  lang: 'en',
  locale: 'en_US',
  langName: 'English',
  langNameEnglish: 'English',
  prefix: '/en',

  // Site metadata
  site: {
    currentYear: new Date().getFullYear(),
    name: 'Natalia',
    title: 'Natalia - AI Voice Assistant',
    description: 'AI voice assistant solution for businesses. Automate your incoming calls with conversational artificial intelligence.',
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

  // Navigation with /en/ prefix
  navigation: {
    main: [
      { label: 'Home', url: './', slug: 'index' },
      {
        label: 'Solutions',
        url: '#solutions',
        children: [
          {
            label: 'Natalia Voice',
            url: './voice-assistant-ai',
            slug: 'voice-assistant-ai',
            description: 'AI voice assistant available 24/7 for your incoming calls',
            icon: 'phone',
          },
          {
            label: 'Natalia Analytics',
            url: './analytics',
            slug: 'analytics',
            description: 'Intelligent transcription and analysis of all your conversations',
            icon: 'chart',
          },
          {
            label: 'Natalia WhatsApp',
            url: './whatsapp',
            slug: 'whatsapp',
            description: 'Engage your customers with 98% open rate',
            icon: 'message',
          },
        ],
      },
      {
        label: 'Industries',
        url: '#industries',
        children: [
          {
            label: 'Automotive',
            url: './automotive',
            slug: 'automotive',
            description: 'Dealerships and after-sales services',
            icon: 'car',
          },
          {
            label: 'Call Center',
            url: './call-center',
            slug: 'call-center',
            description: 'BPO and outsourced customer support',
            icon: 'headset',
          },
          {
            label: 'Helpdesk',
            url: './helpdesk',
            slug: 'helpdesk',
            description: 'IT technical support and assistance',
            icon: 'help',
          },
          {
            label: 'Hotline',
            url: './hotline',
            slug: 'hotline',
            description: '24/7 continuous service without interruption',
            icon: 'clock',
          },
        ],
      },
      { label: 'Partners', url: './partners', slug: 'partners' },
      { label: 'Press', url: './press', slug: 'press' },
      { label: 'About', url: './about', slug: 'about' },
      { label: 'Contact', url: './contact', slug: 'contact' },
    ],
    footer: [
      { label: 'Legal Notice', url: './legal-notice', slug: 'legal-notice' },
      { label: 'Privacy Policy', url: './privacy-policy', slug: 'privacy-policy' },
      { label: 'Terms of Service', url: './terms-of-service', slug: 'terms-of-service' },
    ],
  },

  // CTA buttons
  cta: {
    primary: {
      label: 'Request a Demo',
      url: './contact',
    },
    secondary: {
      label: 'Learn More',
      url: './about',
    },
    calculator: {
      label: 'Calculate My ROI',
      url: './calculator',
    },
  },

  // Common UI strings
  ui: {
    learnMore: 'Learn More',
    contactUs: 'Contact Us',
    bookDemo: 'Book a Demo',
    calculateRoi: 'Calculate My ROI',
    discoverSolutions: 'Discover Solutions',
    sendRequest: 'Send Request',
    sending: 'Sending...',
    formSuccess: 'Thank you! Your request has been sent. We will contact you very soon.',
    formError: 'An error occurred while sending. Please try again or contact us by email.',
    required: 'required',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Business Email',
    company: 'Company',
    phone: 'Phone',
    sector: 'Industry',
    message: 'Your Message',
    selectSector: 'Select your industry...',
    available247: 'Available 24/7',
    response: 'Response',
    allRightsReserved: 'All rights reserved.',
    hostedInFrance: 'Hosted in France',
    backToHome: 'Back to Home',
    pageNotFound: 'Page Not Found',
    pageNotFoundDescription: 'The page you are looking for does not exist or has been moved. Return to the homepage to continue browsing.',
  },

  // Footer sections
  footer: {
    solutions: 'Solutions',
    sectors: 'Industries',
    company: 'Company',
    roiCalculator: 'ROI Calculator',
    solutionLinks: [
      { label: 'Natalia Voice', url: './voice-assistant-ai', icon: 'phone' },
      { label: 'Natalia Analytics', url: './analytics', icon: 'chart' },
      { label: 'Natalia WhatsApp', url: './whatsapp', icon: 'message' },
      { label: 'ROI Calculator', url: './calculator', icon: 'calculator' },
    ],
    sectorLinks: [
      { label: 'Automotive', url: './automotive', icon: 'car' },
      { label: 'Call Center', url: './call-center', icon: 'headset' },
      { label: 'Helpdesk', url: './helpdesk', icon: 'help' },
      { label: 'Hotline', url: './hotline', icon: 'clock' },
    ],
    companyLinks: [
      { label: 'About', url: './about', icon: 'info' },
      { label: 'Partners', url: './partners', icon: 'partners' },
      { label: 'Press', url: './press', icon: 'press' },
      { label: 'Contact', url: './contact', icon: 'email' },
    ],
  },

  // Sector names for cards
  sectors: {
    automobile: {
      name: 'Automotive',
      description: 'Dealerships & After-sales',
    },
    callCenter: {
      name: 'Call Center',
      description: 'BPO & Support',
    },
    helpdesk: {
      name: 'IT Helpdesk',
      description: 'Technical support',
    },
    hotline: {
      name: '24/7 Hotline',
      description: 'Continuous service',
    },
  },

  // Features for homepage
  features: [
    {
      primary: true,
      title: '24/7 Availability',
      description: 'Natalia answers your calls 24/7, without interruption or fatigue.',
      icon: 'clock',
    },
    {
      primary: true,
      title: 'Simple Integration',
      description: 'Our REST API and connectors enable quick integration with your existing tools.',
      icon: 'plug',
    },
    {
      primary: true,
      title: 'Conversational AI',
      description: 'Natalia understands natural language and responds fluently and personally.',
      icon: 'brain',
    },
    {
      primary: true,
      title: 'Multilingual',
      description: 'Natalia speaks French, English, Spanish and more.',
      icon: 'globe',
    },
    {
      primary: true,
      title: 'Real-time Analytics',
      description: 'Dashboards and detailed reports on your calls.',
      icon: 'chart',
    },
    {
      primary: true,
      title: 'Enterprise Security',
      description: 'European hosting, GDPR compliance, end-to-end encryption.',
      icon: 'shield',
    },
  ],

  // Testimonials
  testimonials: [
    {
      quote: 'Natalia has transformed our customer service. We no longer miss any calls.',
      author: 'Marie Dupont',
      role: 'Customer Service Director',
      company: 'AutoPlus',
    },
    {
      quote: 'Integration was simple and results were immediate. Positive ROI in 3 months.',
      author: 'Jean Martin',
      role: 'CEO',
      company: 'TechStart',
    },
  ],

  // Stats
  stats: [
    { value: '24/7', label: 'Availability' },
    { value: '60%', label: 'Calls handled automatically' },
    { value: '3min', label: 'Average response time' },
    { value: '95%', label: 'Customer satisfaction' },
  ],

  // Page-specific SEO metadata
  pages: {
    index: {
      title: 'Natalia - AI Suite for Customer Relations | Voice, WhatsApp, Transcript',
      description: 'Natalia transforms your customer relations with 3 AI solutions: Voice (24/7 assistant), WhatsApp (98% open rate), Transcript (business intelligence). Request a demo.',
    },
    'voice-assistant-ai': {
      title: 'AI Voice Assistant - Natalia automates your calls',
      description: 'Discover Natalia, the AI voice assistant that answers your calls 24/7 with a natural voice and instant understanding.',
    },
    analytics: {
      title: 'Natalia Analytics - Transcription and business intelligence',
      description: 'Automatic transcription and AI analysis of all your conversations. Extract insights, improve your KPIs and train your teams.',
    },
    whatsapp: {
      title: 'Natalia WhatsApp - Customer engagement with 98% open rate',
      description: 'WhatsApp Business solution for enterprises. 98% open rate, centralized conversations and business intelligence.',
    },
    automotive: {
      title: 'Natalia for Automotive - Dealerships and After-Sales',
      description: 'AI solution for car dealerships. 24/7 call management, automatic appointment booking and lead qualification.',
    },
    'call-center': {
      title: 'Natalia for Call Centers - BPO and Support',
      description: 'AI solution for call centers and BPO. Reduce wait times, cut costs and improve customer satisfaction.',
    },
    helpdesk: {
      title: 'Natalia for IT Helpdesk - Technical Support',
      description: 'AI solution for helpdesk and IT support. Automatic level 1 resolution, ticket creation and intelligent routing.',
    },
    hotline: {
      title: 'Natalia Hotline - 24/7 Customer Service',
      description: 'AI hotline solution available 24/7. Answer 100% of your calls with consistent quality.',
    },
    calculator: {
      title: 'ROI Calculator - Estimate your savings with Natalia',
      description: 'Calculate the return on investment of Natalia for your business. Free personalized simulation.',
    },
    about: {
      title: 'About Natalia - Our team and mission',
      description: 'Discover the team behind Natalia, the AI voice assistant revolutionizing phone call management.',
    },
    partners: {
      title: 'Natalia Partners - Join our ecosystem',
      description: 'Become a Natalia partner and offer innovative AI solutions to your clients.',
    },
    press: {
      title: 'Press - Natalia in the media',
      description: 'Find the latest news and press releases from Natalia.',
    },
    contact: {
      title: 'Contact - Request a Natalia demo',
      description: 'Contact the Natalia team for a demo or any questions about our AI voice assistant solutions.',
    },
    'legal-notice': {
      title: 'Legal Notice - Natalia',
      description: 'Legal notice for the Natalia website.',
    },
    'privacy-policy': {
      title: 'Privacy Policy - Natalia',
      description: 'Privacy policy and personal data protection at Natalia.',
    },
    'terms-of-service': {
      title: 'Terms of Service - Natalia',
      description: 'Terms of service for the Natalia website and services.',
    },
    '404': {
      title: 'Page Not Found - Natalia',
      description: 'The page you are looking for does not exist.',
    },
    'legal': {
      title: 'Legal Information - Natalia',
      description: 'Legal and regulatory information for Natalia.',
    },
    'email-assistant-ai-automation': {
      title: 'Email Assistant & AI Automation - Natalia',
      description: 'Automate your emails and workflows with AI. Natalia handles your email requests with the same intelligence as by phone.',
    },
  },

  // Homepage specific content
  homepage: {
    hero: {
      badge: 'The complete AI suite for customer relations',
      title1: '3 AI solutions.',
      title2: 'One unified ecosystem.',
      subtitle: 'Natalia Voice, WhatsApp and Analytics work together to automate, centralize and optimize every customer interaction. Measurable results from the first month.',
      ctaPrimary: 'Request a Demo',
      ctaSecondary: 'Discover Solutions',
    },
    products: {
      voice: {
        name: 'Voice',
        tagline: '24/7 voice assistant',
      },
      whatsapp: {
        name: 'WhatsApp',
        tagline: '98% open rate',
      },
      analytics: {
        name: 'Analytics',
        tagline: 'Business intelligence',
      },
    },
    voiceCard: {
      badge: 'Flagship solution',
      title: 'Natalia Voice',
      description: 'The AI voice assistant available 24/7. Instant pickup, request qualification and complete integration with your business tools.',
      level1: {
        title: 'Level 1',
        description: 'Call handling + Smart routing',
      },
      level2: {
        title: 'Level 2',
        description: 'Messages + Lead qualification',
      },
      level3: {
        title: 'Level 3',
        description: 'Complete ERP/CRM integration',
      },
      companies: '+100 companies',
      cta: 'Learn more',
    },
    whatsappCard: {
      badge: 'Engagement',
      title: 'Natalia WhatsApp',
      description: 'Continue the conversation after the call. 98% open rate vs 20% for emails.',
      features: [
        'Centralize all exchanges',
        'Feed the knowledge base',
        'BI flows and recommendations',
      ],
      openRate: 'Open rate',
    },
    analyticsCard: {
      badge: 'Intelligence',
      title: 'Natalia Analytics',
      description: '100% of conversations captured and analyzed.',
      kpis: 'KPIs',
      csat: 'CSAT',
      training: 'Training',
    },
    stats: {
      availability: 'Availability',
      whatsappRate: 'WhatsApp open rate',
      conversationsCaptured: 'Conversations captured',
      responseTime: 'Response time',
    },
    solutions: {
      badge: 'Our solutions',
      title: 'A complete suite for',
      titleHighlight: 'every interaction',
      subtitle: 'Voice, WhatsApp and Analytics integrate seamlessly to create an intelligent customer relations ecosystem.',
    },
    valueProposition: {
      badge: 'Why Natalia',
      title: 'The ecosystem that',
      titleHighlight: 'transforms',
      titleEnd: 'your customer relations',
      subtitle: 'Our 3 solutions work together to create a virtuous cycle of continuous improvement.',
      capture: {
        title: 'Capture',
        description: 'Voice answers 24/7 and captures every request. No missed calls, every lead qualified.',
      },
      engage: {
        title: 'Engage',
        description: 'WhatsApp continues the conversation with 98% open rate. Every exchange enriches your customer knowledge.',
      },
      optimize: {
        title: 'Optimize',
        description: 'Analytics transcribes and analyzes every conversation to extract insights, KPIs and training recommendations.',
      },
      cycle: 'The virtuous cycle: Analytics transcribes Voice and WhatsApp conversations, identifies improvement areas, and recommendations feed into team training.',
    },
    deployment: {
      badge: 'Implementation',
      title: 'Deployment in',
      titleHighlight: '3 steps',
      step1: {
        title: 'Audit & Configuration',
        description: 'Analysis of your needs, custom configuration and integration with your existing tools.',
      },
      step2: {
        title: 'Training & Testing',
        description: 'AI training on your business context and testing phase with your teams.',
      },
      step3: {
        title: 'Go Live & Monitoring',
        description: 'Progressive rollout and performance monitoring with continuous optimization.',
      },
    },
    sectors: {
      badge: 'Industries',
      title: 'Adapted to',
      titleHighlight: 'your industry',
      subtitle: 'Natalia customizes to meet the specifics of your sector.',
    },
    integration: {
      title: 'Integrates with',
      titleHighlight: 'all your tools',
      subtitle: 'CRM, ERP, ticketing tools, business calendars... Natalia connects to your existing ecosystem.',
    },
    cta: {
      title: 'Ready to transform your customer relations?',
      subtitle: 'Discover how Voice, WhatsApp and Analytics can revolutionize your customer experience.',
      note: 'Personalized demo - Visible ROI from the first month',
    },
  },

  // Contact page specific content
  contact: {
    title: 'Contact Us',
    subtitle: 'Want a demonstration? Have a question? Our team is here to help.',
    formTitle: 'Request a Demo',
    writeUs: 'Write to Us',
    whyChoose: 'Why Choose Natalia?',
    whyItems: [
      'Available 24/7, without interruption',
      'Natural voice and advanced AI understanding',
      'Integration with your business tools',
      'Fast deployment and personalized support',
      'Secure hosting in France (GDPR)',
    ],
    demoReady: 'Ready for a demo?',
    demoDescription: 'We offer a personalized 30-minute demonstration to discover Natalia in action on your use cases.',
    sectors: [
      { value: 'automobile', label: 'Automotive / Dealerships' },
      { value: 'centre-appel', label: 'Call Centers' },
      { value: 'helpdesk', label: 'Helpdesk / IT Support' },
      { value: 'hotline', label: 'Hotline / Customer Service' },
      { value: 'autre', label: 'Other' },
    ],
  },

  // About page specific content
  about: {
    hero: {
      badge: 'Our story',
      title: 'About',
      subtitle: 'We are revolutionizing phone call management through artificial intelligence.',
    },
    mission: {
      badge: 'Our mission',
      title: 'Every call',
      titleHighlight: 'matters',
      paragraph1: 'At Natalia, we believe that <strong>every call matters</strong>. A missed call is a frustrated customer, a lost opportunity, a relationship that deteriorates.',
      paragraph2: 'Our mission is to enable every business to answer 100% of its calls, 24/7, with the same quality and empathy as a human employee.',
      paragraph3: 'We don\'t replace your teams, we assist them. We free them from repetitive tasks so they can focus on what really matters.',
      stat: '40%',
      statText: 'of business calls go unanswered.',
      statHighlight: 'We want to change that.',
    },
    timeline: {
      badge: 'Our journey',
      title: 'The story of',
      events: [
        {
          date: 'November 2024',
          title: 'Project genesis',
          description: 'While exchanging with local entrepreneurs at a SaaS Camp in Vendee, two issues emerged: the difficulty of recruiting and the inefficiency of the phone switchboard.',
        },
        {
          date: 'March 2025',
          title: 'First POC deployed',
          description: 'The project is launched, initially under the radar on the technical side. The first POC is deployed at a client in real conditions.',
        },
        {
          date: 'June 2025',
          title: 'Automotive launch',
          description: 'First pilots in the automotive sector. We discover that 40% of calls at dealerships go unanswered.',
        },
        {
          date: 'September 2025',
          title: 'IT helpdesk expansion',
          description: 'Expansion towards IT helpdesk support. Baptiste joins the technical team to accelerate development.',
        },
      ],
    },
    team: {
      badge: 'Our team',
      title: 'Complementary',
      titleHighlight: 'profiles',
      subtitle: 'United by common values and the desire to serve our customers.',
      members: [
        {
          name: 'Nicolas Dubreuil',
          role: 'CEO',
          title: 'Co-founder',
          description: 'Leads business development and growth strategy for Natalia.',
          linkedin: 'https://linkedin.com/in/nicolas-dubreuil-essca/',
          image: 'image.png',
          roleBg: 'bg-primary/10 border-primary/20',
          roleText: 'text-primary',
          titleText: 'text-primary',
        },
        {
          name: 'Jeremy David',
          role: 'COO',
          title: 'Co-founder',
          description: 'Expert in Lean methodology and operational process optimization.',
          linkedin: 'https://linkedin.com/in/jeremy-david-279564157/',
          image: 'image2.png',
          roleBg: 'bg-emerald-500/10 border-emerald-500/20',
          roleText: 'text-emerald-600',
          titleText: 'text-emerald-600',
        },
        {
          name: 'Louis Marsais',
          role: 'CTO',
          title: 'Co-founder',
          description: 'Product and technology manager. Architect of Natalia solutions.',
          linkedin: 'https://linkedin.com/in/louis-marsais/',
          image: 'louisAvif.avif',
          roleBg: 'bg-purple-500/10 border-purple-500/20',
          roleText: 'text-purple-600',
          titleText: 'text-purple-600',
        },
        {
          name: 'Francois-Guillaume Ribreau',
          role: 'AI Expert',
          title: 'Co-founder',
          description: 'Serial entrepreneur and artificial intelligence expert. Guardian of technological excellence.',
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
          description: 'Passionate and self-taught developer. Leads development of Natalia solutions.',
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
          description: 'At the intersection of customer relations expertise and his background as a lead developer, Malo solves customers\' technical issues and stays as close as possible to their needs.',
          linkedin: '',
          image: 'maloBlanchard.jpg',
          roleBg: 'bg-cyan-500/10 border-cyan-500/20',
          roleText: 'text-cyan-600',
          titleText: 'text-cyan-600',
        },
        {
          name: 'Pierre Turquand',
          role: 'Investor',
          title: 'Co-founder & Investor',
          description: 'Experienced entrepreneur. Supports strategic development of Natalia.',
          linkedin: '',
          image: 'captureDecran20251021A161843Png.png',
          roleBg: 'bg-gray-500/10 border-gray-500/20',
          roleText: 'text-gray-600',
          titleText: 'text-gray-600',
        },
      ],
    },
    values: {
      badge: 'Our values',
      title: 'What drives',
      titleHighlight: 'us',
      items: [
        {
          title: 'Innovation',
          description: 'We push the boundaries of voice AI to deliver ever more natural and effective experiences.',
        },
        {
          title: 'Human',
          description: 'AI at the service of humans, never the other way around. We augment your teams, we don\'t replace them.',
        },
        {
          title: 'Trust',
          description: 'Security, privacy, transparency. Your data is protected and hosted in France.',
        },
      ],
    },
    technology: {
      badge: 'Technology',
      title: 'Cutting-edge',
      titleHighlight: 'technology',
      paragraph1: 'Natalia is built on the latest advances in artificial intelligence and natural language processing.',
      paragraph2: 'Our R&D team is constantly working to improve our models to deliver ever more natural and relevant conversations.',
      paragraph3: 'We collaborate with the best AI research labs to stay at the forefront of innovation.',
      stackTitle: 'Our technology stack',
      stack: [
        'Latest generation Large Language Models (LLM)',
        'Ultra-realistic voice synthesis',
        'Real-time telephony API',
        'Scalable cloud infrastructure',
      ],
    },
    cta: {
      title: 'Want to learn more?',
      subtitle: 'Meet our team and discover how Natalia can transform your customer relations.',
      button: 'Contact us',
    },
  },

  // Voice Assistant page content
  voiceAssistant: {
    hero: {
      badge: 'Voicebot',
      title: 'Automate phone reception',
      titleHighlight: 'and request handling',
      titleEnd: 'at level 1, 24/7',
      subtitle: 'Conversational voice AI solution that handles incoming calls, qualifies requests and resolves simple issues or creates tickets, ensuring maximum availability and responsiveness.',
      ctaDemo: 'Book a Demo',
      ctaRoi: 'Calculate My ROI',
      available: 'Available',
      response: 'Response',
    },
    differentiators: {
      title: 'What makes the',
      titleHighlight: 'difference',
      items: [
        {
          title: 'Natural voice',
          description: 'No robotic voice. Natalia speaks with a natural, fluid voice that puts your customers at ease.',
        },
        {
          title: 'AI understanding',
          description: 'Natalia understands natural language, accents, hesitations. She adapts to each speaker.',
        },
        {
          title: 'Available 24/7',
          description: 'No lunch break, no vacations, no weekends. Natalia answers every call, every moment.',
        },
      ],
    },
    features: {
      title: 'Key',
      titleHighlight: 'features',
      subtitle: 'Concrete business capabilities to automate your phone reception',
      items: [
        {
          title: 'Call Qualification',
          description: 'Automatic identification of reason and urgency in natural language. Natalia understands customer needs from the first seconds.',
        },
        {
          title: 'Intelligent Routing',
          description: 'Automatic transfer to the right department or advisor after qualification. No more time lost in multiple redirections.',
        },
        {
          title: 'Level 1 Resolution',
          description: 'Automatic response to FAQs, status verification, password reset and other simple actions. Free your agents for complex cases.',
        },
        {
          title: 'Automatic Ticket Creation',
          description: 'Immediate creation in your CRM or ticketing tool. All collected information is transmitted for optimal follow-up.',
        },
      ],
    },
    capabilities: {
      title: 'Technical',
      titleHighlight: 'capabilities',
      subtitle: 'Cutting-edge technology for exceptional customer experience',
      comingSoon: 'Coming Soon',
      items: [
        {
          title: 'Multilingual',
          description: 'French, English, Spanish, German... Natalia adapts to your caller\'s language.',
        },
        {
          title: 'API & Webhooks',
          description: 'Integrate Natalia with your existing systems via our REST API and real-time webhooks.',
          comingSoon: true,
        },
        {
          title: 'Analytics',
          description: 'Real-time dashboard to track performance: resolution rate, average duration, satisfaction.',
        },
        {
          title: 'Smart transfer',
          description: 'Natalia detects when a human needs to take over and transfers the call with full context.',
        },
        {
          title: 'Security',
          description: 'Encrypted data, hosting in France, GDPR compliance. Your conversations are protected.',
        },
        {
          title: 'Self-learning',
          description: 'Natalia continuously improves by learning from each conversation.',
          comingSoon: true,
        },
      ],
    },
    howItWorks: {
      title: 'How it',
      titleHighlight: 'works',
      steps: [
        {
          title: 'Configuration',
          description: 'We configure Natalia according to your needs, business vocabulary and scenarios.',
        },
        {
          title: 'Integration',
          description: 'Natalia connects to your telephony and business tools (CRM, ERP, ticketing...).',
        },
        {
          title: 'Pilot',
          description: 'We launch a pilot on a defined scope to validate performance.',
        },
        {
          title: 'Deployment',
          description: 'Once validated, we deploy Natalia across all your lines.',
        },
      ],
    },
    benefits: {
      title: 'The',
      titleHighlight: 'benefits',
      titleEnd: 'for your business',
      subtitle: 'Measurable impact on your operations and customer experience',
      items: [
        {
          title: 'Call center decongestion',
          description: 'Reduce queues by automatically handling 60% of incoming calls. Your agents focus on high-value requests.',
        },
        {
          title: 'L1 support cost reduction',
          description: 'Reduce your first-level support costs by up to 40%. Natalia handles simple requests at a fraction of the human cost.',
        },
        {
          title: 'Improved customer experience',
          description: 'Instant response, zero wait time. Your customers get an immediate response, 24/7.',
        },
      ],
    },
    targets: {
      title: 'For',
      titleHighlight: 'whom',
      subtitle: 'Natalia Voice is designed for decision-makers who want to transform their customer service',
      items: [
        {
          title: 'Operations Director',
          description: 'Optimize your call flows, reduce peak loads and improve your operational KPIs with a solution that scales with your volume.',
        },
        {
          title: 'Customer Service Manager',
          description: 'Deliver exceptional customer experience with 24/7 availability, while freeing your teams for high-value interactions.',
        },
        {
          title: 'CIO',
          description: 'Fast deployment via REST API, integration with your existing stack (CRM, ERP, ticketing) and guaranteed GDPR compliance.',
        },
      ],
    },
    cta: {
      title: 'Ready to discover Natalia?',
      subtitle: 'Schedule a personalized demonstration with our team.',
      button: 'Book a Demo',
    },
  },

  // Analytics page content
  analytics: {
    hero: {
      badge: 'Voice Analytics',
      title: 'Transform your conversations',
      titleHighlight: 'into a strategic dashboard',
      subtitle: 'Conversational analytics tool based on Speech-to-Text that connects to your recordings, transcribes conversations, calculates critical KPIs, scoring and provides the insights needed for continuous improvement.',
      ctaDemo: 'Book a Demo',
      ctaExample: 'See an example',
      dashboard: {
        quality: 'Quality',
        satisfaction: 'Satisfaction',
        calls: 'Calls',
        days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        sentimentPlus: 'Sentiment +',
        complianceOk: 'Compliance OK',
      },
    },
    differentiators: {
      title: 'What makes the',
      titleHighlight: 'difference',
      items: [
        {
          title: 'Accurate Transcription',
          description: 'Our STT technology converts your calls into text with exceptional accuracy, even with accents and business vocabulary.',
        },
        {
          title: 'Intelligent Analysis',
          description: 'AI analyzes sentiment, detects keywords, evaluates compliance and identifies improvement opportunities.',
        },
        {
          title: 'Actionable Insights',
          description: 'Transform your voice data into informed decisions with clear dashboards and concrete recommendations.',
        },
      ],
    },
    features: {
      title: 'Key',
      titleHighlight: 'features',
      subtitle: 'Everything you need to analyze and improve the quality of your conversations',
      items: [
        {
          title: 'Full Transcription (STT)',
          description: 'Accurate conversion of 100% of your calls into usable text, with speaker identification and timestamps.',
        },
        {
          title: 'Analysis and Scoring',
          description: 'Sentiment analysis, compliance scoring, keyword detection and automatic quality assessment of conversations.',
        },
        {
          title: 'Management Dashboard',
          description: 'Dynamic dashboards with KPIs for management and quality teams. Visualize trends in real-time.',
        },
        {
          title: 'Operator Coaching',
          description: 'Identify best practices and areas for improvement. Support your teams with objective feedback.',
        },
        {
          title: 'Keyword Detection',
          description: 'Automatically detect mentions of products, competitors, customer irritants and business opportunities.',
        },
        {
          title: '100% Call Audit',
          description: 'No more sampling. Analyze all your conversations for complete compliance and quality control.',
        },
      ],
    },
    howItWorks: {
      title: 'How it',
      titleHighlight: 'works',
      steps: [
        {
          title: 'Connection',
          description: 'Connect Natalia Analytics to your existing call recordings via API or file import.',
        },
        {
          title: 'Transcription',
          description: 'Our STT automatically transcribes each call with exceptional accuracy.',
        },
        {
          title: 'Analysis',
          description: 'AI analyzes content, calculates scores and detects key insights.',
        },
        {
          title: 'Action',
          description: 'View your dashboards and make decisions based on concrete data.',
        },
      ],
    },
    benefits: {
      title: 'The',
      titleHighlight: 'benefits',
      titleEnd: 'for your business',
      subtitle: 'Transform your conversations into competitive advantage',
      items: [
        {
          title: 'Informed decisions',
          description: 'Base your strategic decisions on concrete voice data, not intuitions or limited samples.',
        },
        {
          title: 'Rapid improvement',
          description: 'Quickly identify areas for improvement and measure the impact of your actions on service quality.',
        },
        {
          title: 'Risk reduction',
          description: 'Audit 100% of your calls to ensure regulatory compliance and reduce legal risks.',
        },
      ],
    },
    targets: {
      title: 'For',
      titleHighlight: 'whom',
      subtitle: 'Natalia Analytics is designed for quality and performance professionals',
      items: [
        {
          title: 'Quality Director',
          description: 'Move from sampling to comprehensive audit. Identify non-conformities and track your quality indicators in real-time.',
        },
        {
          title: 'CX Director',
          description: 'Understand how your customers really feel. Detect irritants, measure satisfaction and optimize every touchpoint.',
        },
        {
          title: 'Sales Director',
          description: 'Coach your teams with objective data. Identify best practices and train your salespeople on concrete examples.',
        },
      ],
    },
    cta: {
      title: 'Ready to transform your conversations into insights?',
      subtitle: 'Discover Natalia Analytics during a personalized demonstration.',
      button: 'Book a Demo',
    },
  },

  // WhatsApp page content
  whatsapp: {
    hero: {
      badge: 'WhatsApp AI',
      title: 'Never lose a "hot" prospect again:',
      titleHighlight: 'follow up instantly on WhatsApp',
      subtitle: 'Solution that activates when a call is missed or received outside business hours, sends a WhatsApp message and continues the conversation in AI mode to qualify needs and convert the prospect.',
      ctaDemo: 'Book a Demo',
      ctaRoi: 'Calculate My ROI',
      auto: 'Auto',
      leadQualified: 'Qualified lead',
      floatingStats: {
        openRate: '98% open rate',
        response: 'Response <30s',
      },
      chat: {
        incoming: 'Hi! We noticed you tried to reach us.',
        incomingTime: '2:32 PM',
        response: 'Yes, I\'m looking for a quote for...',
        responseTime: '2:33 PM',
        iaResponse: 'Great! I can help you. What\'s your budget?',
        iaResponseTime: '2:33 PM',
      },
    },
    differentiators: {
      title: 'What makes the',
      titleHighlight: 'difference',
      items: [
        {
          title: 'Instant Reactivity',
          description: 'Less than 30 seconds between the missed call and the first WhatsApp message. Never let a prospect cool down.',
        },
        {
          title: '98% Open Rate',
          description: 'Unlike emails, WhatsApp messages are opened almost systematically. Your message will be read.',
        },
        {
          title: 'Automatic Qualification',
          description: 'Conversational AI qualifies the prospect (budget, needs, urgency) before you even intervene.',
        },
      ],
    },
    features: {
      title: 'Key',
      titleHighlight: 'features',
      subtitle: 'Turn every missed call into a conversion opportunity',
      items: [
        {
          title: 'Detection and Trigger',
          description: 'Automatically activates on missed call, outside business hours, or during overflow. No intervention required.',
        },
        {
          title: 'Personalized Follow-up',
          description: 'Contextual and personalized WhatsApp message thanks to conversational AI. Each prospect receives a tailored message.',
        },
        {
          title: 'Asynchronous Qualification',
          description: 'AI leads the discussion to obtain key information: budget, project type, urgency, contact details.',
        },
        {
          title: 'Document Collection',
          description: 'Prospects can send photos, documents or information directly via WhatsApp. Everything is centralized.',
        },
        {
          title: 'CRM Integration',
          description: 'Qualified leads are automatically synced to your CRM with all collected information.',
        },
        {
          title: 'Customizable Scenarios',
          description: 'Adapt conversation scripts to your industry: real estate, automotive, services, e-commerce...',
        },
      ],
    },
    howItWorks: {
      title: 'How it',
      titleHighlight: 'works',
      steps: [
        {
          title: 'Missed Call',
          description: 'A prospect tries to reach you but you\'re unavailable (outside hours, busy line...).',
        },
        {
          title: 'WhatsApp Message',
          description: 'In less than 30 seconds, the prospect receives a personalized WhatsApp message from Natalia.',
        },
        {
          title: 'AI Qualification',
          description: 'Conversational AI qualifies the need: budget, project, urgency, contact details.',
        },
        {
          title: 'Qualified Lead',
          description: 'You receive a qualified lead in your CRM, ready for a sales callback.',
        },
      ],
    },
    benefits: {
      title: 'The',
      titleHighlight: 'benefits',
      titleEnd: 'for your business',
      subtitle: 'Never lose a business opportunity again',
      items: [
        {
          title: 'Maximum Conversion',
          description: 'Convert up to 40% of your missed calls into qualified leads. Ideal for real estate, automotive and emergency services.',
        },
        {
          title: '24/7 Reactivity',
          description: 'Be present even when you\'re not. Weekends, holidays, nights... Natalia takes over without interruption.',
        },
        {
          title: 'Customer Satisfaction',
          description: 'Your prospects love WhatsApp. Simple, immediate and familiar channel. They feel taken care of instantly.',
        },
      ],
    },
    targets: {
      title: 'For',
      titleHighlight: 'whom',
      subtitle: 'Natalia WhatsApp is designed for sales teams who don\'t want to lose leads anymore',
      items: [
        {
          title: 'Sales Director',
          description: 'Maximize the ROI of your marketing investments. Every missed call is an opportunity recovered and automatically qualified.',
        },
        {
          title: 'Marketing Manager',
          description: 'Improve your conversion rates and measure the impact of your campaigns. Every generated lead is tracked through qualification.',
        },
        {
          title: 'Sales Manager',
          description: 'Your salespeople receive already qualified and warm leads. No more time wasted on unqualified prospects.',
        },
      ],
    },
    cta: {
      title: 'Ready to never lose prospects again?',
      subtitle: 'Discover Natalia WhatsApp during a personalized demonstration.',
      button: 'Book a Demo',
    },
  },

  // Automobile page content
  automobile: {
    hero: {
      title1: 'Natalia answers,',
      titleHighlight: 'transfers and assists',
      title2: 'your customers 24/7',
      subtitle: 'Natural voice, instant understanding and seamless integration with your automotive business tools',
      ctaDemo: 'Book a Demo',
      heroImageAlt: 'AI-powered car dealership',
    },
    quote1: {
      text: '40% of dealership calls go unanswered.',
      description: 'Between customers in the showroom, simultaneous calls and overwhelmed receptionists, many opportunities are lost.',
    },
    challenges: {
      title: 'Your',
      titleHighlight: 'daily',
      titleEnd: 'challenges',
      items: [
        {
          title: 'Missed calls',
          description: 'Your receptionists are busy with showroom customers. Calls ring unanswered, customers hang up.',
        },
        {
          title: 'Limited hours',
          description: 'Customers call outside business hours, during lunch breaks or on weekends.',
        },
        {
          title: 'Appointment booking',
          description: 'Workshop appointment booking is time-consuming and error-prone. Schedules are not always up to date.',
        },
        {
          title: 'Lost leads',
          description: 'Prospects who can\'t reach the dealership go to the competition.',
        },
      ],
    },
    quote2: {
      text: 'Every missed call is a lost opportunity. Every customer who hangs up may be',
      highlight: 'a vehicle sale or maintenance that slips away.',
    },
    solutions: {
      title: 'Our',
      titleHighlight: 'solutions',
      items: [
        {
          title: 'Available 24/7',
          description: 'Natalia answers calls even outside business hours, during breaks and weekends.',
        },
        {
          title: 'Appointment booking',
          description: 'Connected to Service Box or MecaPlanning, Natalia offers time slots and validates appointments directly.',
        },
        {
          title: 'Smart transfer',
          description: 'Natalia identifies the need and transfers to the right department: new cars, used cars, service, parts.',
        },
        {
          title: 'Integrated',
          description: 'Connected to your DMS (Nextlane, CDK Global, DC\'s Net, etc.) for perfect synchronization.',
        },
      ],
    },
    compatible: {
      title: 'Compatible with your',
      titleHighlight: 'business tools',
      subtitle: 'Native integration with leading automotive industry solutions',
    },
    useCases: {
      title: 'Concrete',
      titleHighlight: 'use cases',
      description: 'The goal is not to replace humans at the dealership but to assist them so they can focus on high-value tasks. With these 4 use cases, we address 80% of incoming call needs at dealerships.',
      items: [
        {
          title: 'Workshop appointments',
          description: 'Connected to your business calendar, Natalia offers time slots, confirms with the customer and enters information directly into the software.',
        },
        {
          title: 'Qualify leads',
          description: 'Natalia handles 100% of incoming requests. During the conversation, she qualifies the need and sends information to the relevant department.',
        },
        {
          title: 'Call transfer',
          description: '20% of dealership calls are transfers, which takes time and breaks your team\'s productivity.',
        },
        {
          title: 'General inquiries',
          description: 'Answers to recurring requests from your knowledge base. Natalia improves over time.',
        },
      ],
    },
    cta: {
      title: 'We define the pilot framework together during an initial meeting.',
      button: 'Book a Demo',
    },
  },

  // Call Center page content
  callCenter: {
    hero: {
      title1: 'Natalia answers,',
      titleHighlight: 'transfers and assists',
      title2: 'your customers 24/7',
      subtitle: 'Natural voice, instant understanding and seamless integration with your call center',
      ctaDemo: 'Book a Demo',
      heroImageAlt: 'AI-powered call center',
    },
    quote1: {
      text: 'AI is a major challenge for call centers in the coming months and years.',
      highlight: 'To stay competitive, you must offer solutions adapted to your clients.',
    },
    challenges: {
      title: 'Your',
      titleHighlight: 'problems',
      titleEnd: '...',
      items: [
        {
          title: 'High turnover',
          description: 'It\'s a demanding job for your teams, you have turnover and must constantly recruit and retrain.',
        },
        {
          title: 'Wait times',
          description: 'Despite meticulous planning, you can\'t handle the unexpected and scale your call capacity at the last moment...',
        },
        {
          title: 'Inconsistency',
          description: 'Your response quality is not always optimal, you struggle to standardize despite processes in place.',
        },
        {
          title: 'Unavailability',
          description: 'Between call peaks, closed hours, weekends, holidays, it\'s difficult to always be available for your customers.',
        },
      ],
    },
    quote2: {
      text: 'Despite your efforts, your organization has its limits and',
      highlight: 'your fixed costs drag down profitability...',
    },
    solutions: {
      title: 'Our',
      titleHighlight: 'solutions',
      items: [
        {
          title: 'Available',
          description: 'Bring availability and flexibility to your organization. 24/7 to handle calls, on-call duties, holidays, etc...',
        },
        {
          title: 'Customized',
          description: 'Our support adapts to your needs, it\'s not a standard off-the-shelf tool that doesn\'t match your requirements.',
        },
        {
          title: 'Scalable',
          description: 'We can handle 100 parallel calls, or more, depending on your needs, enough to manage the unexpected and peak calls.',
        },
        {
          title: 'Integrated',
          description: 'Connected to your business tools, Natalia routes flows to the right place at the right time to save you repetitive data entry.',
        },
      ],
    },
    compatible: {
      title: 'Natalia is compatible',
      titleHighlight: 'with all your business tools',
    },
    useCases: {
      title: 'Concrete',
      titleHighlight: 'use cases',
      description: 'The goal is not to replace humans but to assist them so they can focus on high-value tasks.',
      items: [
        {
          title: 'Appointment booking',
          description: 'Connected to your business calendar, Natalia offers time slots, confirms with the customer and enters information directly into the software.',
        },
        {
          title: 'Qualify leads',
          description: 'Natalia is available 24/7, she handles 100% of incoming requests. During the conversation, she qualifies the need and sends information to the relevant department.',
        },
        {
          title: 'Call transfer',
          description: '20% of calls are transfers, which takes time, breaks your team\'s productivity and doesn\'t add real value.',
        },
        {
          title: 'General inquiries',
          description: 'Answers to recurring requests from your knowledge base. Natalia learns from conversations over time to become more and more relevant.',
        },
      ],
    },
    cta: {
      title: 'We define the pilot framework together during an initial meeting.',
      button: 'Book a Demo',
    },
  },

  // Helpdesk page
  helpdesk: {
    hero: {
      title1: 'Natalia answers,',
      titleHighlight: 'qualifies and creates',
      title2: 'your tickets 24/7',
      subtitle: 'A natural voice, instant comprehension and seamless integration with your ticketing tool',
      ctaDemo: 'Book a Demo',
      heroImageAlt: 'AI-powered helpdesk',
    },
    quote1: {
      text: 'Your support teams are overwhelmed? Tickets are piling up? Users are waiting hours for a response?',
      highlight: 'Natalia takes over.',
    },
    challenges: {
      title: 'Your daily',
      titleHighlight: 'challenges',
      titleEnd: '',
      items: [
        {
          title: 'Speed expected',
          description: 'Users expect an immediate response. Every minute of waiting increases frustration.',
        },
        {
          title: 'Poorly qualified tickets',
          description: 'Incomplete or miscategorized tickets that require back-and-forth and slow down resolution.',
        },
        {
          title: 'User frustration',
          description: 'Users don\'t know the status of their request, they call back multiple times for the same issue.',
        },
        {
          title: 'Limited hours',
          description: 'Your support isn\'t available 24/7, but technical issues don\'t wait for office hours.',
        },
      ],
    },
    solutions: {
      title: 'Our',
      titleHighlight: 'solutions',
      items: [
        {
          title: 'Available 24/7',
          description: 'Natalia responds at any hour, even at night, on weekends and holidays.',
        },
        {
          title: 'Qualified tickets',
          description: 'Natalia collects all necessary information and creates complete, well-categorized tickets.',
        },
        {
          title: 'Fast resolution',
          description: 'For common issues, Natalia guides the user to the solution without human intervention.',
        },
        {
          title: 'Integrated',
          description: 'Connected to your ITSM (ServiceNow, GLPI, Jira, etc.), Natalia creates tickets directly in your system.',
        },
      ],
    },
    compatible: {
      title: 'Compatible with',
      titleHighlight: 'your tools',
      subtitle: 'Native integration with leading ITSM solutions',
    },
    useCases: {
      title: 'Concrete',
      titleHighlight: 'use cases',
      description: 'Natalia handles level 1 requests so your teams can focus on complex incidents.',
      items: [
        {
          title: 'Password reset',
          description: 'Natalia verifies the user\'s identity and guides them through resetting their password.',
        },
        {
          title: 'Hardware issue',
          description: 'Natalia diagnoses the problem and creates a ticket with all necessary information for intervention.',
        },
        {
          title: 'Software issue',
          description: 'Natalia guides the user through basic troubleshooting steps before escalating if necessary.',
        },
      ],
    },
    cta: {
      title: 'Ready to transform your helpdesk?',
      subtitle: 'Discover how Natalia can reduce your level 1 ticket load by 40%.',
      button: 'Book a Demo',
    },
  },

  // Legal index page
  legalIndex: {
    title: 'Legal',
    titleHighlight: 'Information',
    cards: [
      {
        title: 'Legal Notice',
        description: 'Information about the site publisher, hosting and intellectual property.',
        link: './legal-notice',
      },
      {
        title: 'Privacy Policy',
        description: 'How we collect, use and protect your personal data.',
        link: './privacy-policy',
      },
      {
        title: 'Terms of Service',
        description: 'The terms governing the use of our services.',
        link: './terms-of-service',
      },
    ],
  },

  // Legal Notice page
  legalNotice: {
    badge: 'Legal information',
    title: 'Legal',
    titleHighlight: 'Notice',
    subtitle: 'Legal and regulatory information about the Natalia website',
    sections: {
      editor: {
        title: 'Site publisher',
        items: [
          'The site getnatalia.com is published by Natalia SAS',
          'Legal form: SAS, simplified joint stock company',
          'Headquarters: 3 rue Jean Jaures - 85000 La Roche sur Yon, France',
          'SIREN: 990 566 499',
          'SIRET (headquarters): 990 566 499 00010',
          'EU VAT number: FR40990566499',
        ],
      },
      director: {
        title: 'Publication director',
        company: 'Natalia SAS',
        contactLabel: 'Contact',
      },
      hosting: {
        title: 'Hosting',
        items: [
          'The site is hosted by Netlify, Inc.',
          '2325 3rd Street, Suite 215',
          'San Francisco, California 94107',
          'United States',
        ],
      },
      intellectualProperty: {
        title: 'Intellectual property',
        text: 'All elements on the site (texts, logos, images, graphics, sounds, software, etc.) are protected by the provisions of the Intellectual Property Code. Any reproduction, representation, modification, publication or adaptation of all or part of the site\'s elements is prohibited without prior written authorization.',
      },
      personalData: {
        title: 'Personal data',
        text1: 'In accordance with the French Data Protection Act of January 6, 1978, as amended, and the General Data Protection Regulation (GDPR), you have the right to access, rectify, delete and object to personal data concerning you.',
        text2: 'To exercise these rights, you can contact us at:',
        moreInfo: 'More information',
        moreInfoText: 'For more information, please see our',
        privacyLink: 'privacy policy',
      },
    },
    cta: {
      title: 'Questions?',
      subtitle: 'Our team is available to answer all your questions.',
      contactButton: 'Contact us',
      privacyButton: 'Privacy policy',
      privacyButtonUrl: './privacy-policy',
    },
  },

  // Privacy Policy page
  privacyPolicy: {
    badge: 'Protecting your data',
    title: 'Privacy',
    titleHighlight: 'Policy',
    subtitle: 'We take the protection of your personal data very seriously. Discover how we collect, use and protect your information.',
    intro: 'This privacy policy aims to inform you clearly and transparently about how we collect, use and protect your personal data in accordance with the GDPR.',
    dataCollection: {
      title: 'Data collection',
      description: 'We collect personal data that you provide directly to us when using our services:',
      items: ['First and last name', 'Email address', 'Phone number', 'Company name', 'Connection and usage data'],
    },
    dataUsage: {
      title: 'Data usage',
      description: 'Your personal data is used exclusively to:',
      items: ['Provide and improve our services', 'Respond to your requests and questions', 'Send you information about our services', 'Analyze site usage to improve it'],
    },
    protection: {
      badge: 'Maximum security',
      title: 'Protection of',
      titleHighlight: 'your data',
      description: 'We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, modification, disclosure or destruction.',
      features: [
        { title: 'Data encryption', description: 'All your data is encrypted in transit and at rest' },
        { title: 'GDPR compliance', description: 'Strict compliance with the European data protection regulation' },
        { title: 'Controlled access', description: 'Strong authentication and access rights management' },
      ],
    },
    rights: {
      badge: 'GDPR',
      title: 'Your',
      titleHighlight: 'rights',
      description: 'In accordance with the GDPR, you have extensive rights over your personal data',
      items: [
        { title: 'Right of access', description: 'View all personal data we hold about you' },
        { title: 'Right of rectification', description: 'Modify or correct your personal information at any time' },
        { title: 'Right to erasure', description: 'Request permanent deletion of your personal data' },
        { title: 'Right to restriction', description: 'Restrict the processing of your data under certain conditions' },
        { title: 'Right to portability', description: 'Retrieve your data in a structured, reusable format' },
        { title: 'Right to object', description: 'Object to the processing of your data for legitimate reasons' },
      ],
    },
    cta: {
      badge: 'Contact',
      title: 'Questions about your data?',
      subtitle: 'For any questions regarding this privacy policy or to exercise your GDPR rights, our team is at your disposal.',
      contactLabel: 'Contact us at:',
      contactButton: 'Contact us',
      homeButton: 'Back to home',
    },
  },

  // Terms of Service page
  termsOfService: {
    badge: 'Legal terms',
    title: 'Terms of',
    titleHighlight: 'Service',
    subtitle: 'These general terms govern access to and use of Natalia services.',
    legalDoc: 'Legal document',
    updatedRegularly: 'Updated regularly',
    preamble: {
      title: 'Preamble',
      text: 'These terms of service govern access to and use of the services offered by Natalia, accessible via the getnatalia.com website. By using our services, you accept these terms in their entirety.',
    },
    articles: [
      {
        number: 'Article 1',
        title: 'Purpose',
        text: 'These Terms of Service define the conditions for accessing and using Natalia services, accessible via the getnatalia.com website.',
      },
      {
        number: 'Article 2',
        title: 'Service description',
        text: 'Natalia offers an AI-powered voice assistant solution enabling automation of incoming phone call management for businesses.',
      },
      {
        number: 'Article 3',
        title: 'Access to services',
        text: 'Access to Natalia services is reserved for professionals who have subscribed to a plan. Users agree to provide accurate information when registering.',
      },
      {
        number: 'Article 4',
        title: 'User obligations',
        intro: 'Users agree to:',
        items: [
          'Use services in accordance with their intended purpose',
          'Not infringe on the rights of third parties',
          'Comply with applicable laws',
          'Maintain the confidentiality of their credentials',
        ],
      },
      {
        number: 'Article 5',
        title: 'Intellectual property',
        text: 'All elements comprising the Natalia service (software, algorithms, interfaces, databases, trademarks, logos, etc.) are protected by intellectual property law and remain the exclusive property of Natalia SAS. Any unauthorized reproduction, representation, modification or exploitation is strictly prohibited.',
      },
      {
        number: 'Article 6',
        title: 'Liability',
        intro: 'Natalia is committed to implementing all necessary means to ensure the continuity and quality of its services. However, Natalia cannot be held liable for:',
        items: [
          'Indirect damages resulting from the use of its services',
          'Service interruptions due to force majeure',
          'Fraudulent or non-compliant use of its services',
        ],
      },
      {
        number: 'Article 7',
        title: 'Terms modification',
        text: 'Natalia reserves the right to modify these Terms at any time to adapt them to service developments or legislation. Users will be informed of any significant modification by email or via a notification on the site. Continued use of services after modification constitutes acceptance of the new terms.',
      },
      {
        number: 'Article 8',
        title: 'Contact',
        text: 'For any questions regarding these Terms, you can contact us at:',
      },
    ],
    cta: {
      badge: 'Questions?',
      title: 'Need clarification on our Terms?',
      subtitle: 'Our team is available to answer all your legal and contractual questions.',
      contactButton: 'Contact us',
      legalButton: 'Legal notice',
      legalButtonUrl: './legal-notice',
    },
  },

  // Hotline page
  hotline: {
    hero: {
      title1: 'Natalia answers,',
      titleHighlight: 'qualifies and creates',
      title2: 'your tickets 24/7',
      subtitle: 'A natural voice, instant comprehension and seamless integration with your ticketing tool',
      ctaDemo: 'Book a Demo',
      heroImageAlt: 'AI-powered hotline',
    },
    quote1: {
      text: 'Your hotline is often saturated? Wait times explode during call peaks?',
      highlight: 'Natalia absorbs the load and maintains service quality.',
    },
    challenges: {
      title: 'The',
      titleHighlight: 'challenges',
      titleEnd: 'of your hotline',
      items: [
        {
          title: 'Call peaks',
          description: 'Impossible to size your teams for peaks. Too many staff in normal times, not enough in a crisis.',
        },
        {
          title: 'Wait times',
          description: 'High wait times degrade customer experience and increase abandonment rates.',
        },
        {
          title: 'Technical complexity',
          description: 'Technical requests often require multiple exchanges to be understood and qualified.',
        },
        {
          title: 'Continuous training',
          description: 'Products evolve, documentation changes. Continuously training your teams is an ongoing challenge.',
        },
      ],
    },
    solutions: {
      title: 'Our',
      titleHighlight: 'solutions',
      items: [
        {
          title: 'Available 24/7',
          description: 'Natalia responds at any hour, absorbing peaks without wait times.',
        },
        {
          title: 'Configurable',
          description: 'Adapt scenarios to the specifics of your products and services.',
        },
        {
          title: 'Scalable',
          description: 'Go from 10 to 1000 simultaneous calls without impacting quality.',
        },
        {
          title: 'Integrated',
          description: 'Connected to your ticketing and CRM tools for complete tracking.',
        },
      ],
    },
    compatible: {
      title: 'Compatible with',
      titleHighlight: 'your tools',
      subtitle: 'Native integration with leading market solutions',
    },
    useCases: {
      title: 'Concrete',
      titleHighlight: 'use cases',
      description: 'Natalia handles recurring requests so your experts can focus on complex cases.',
      items: [
        {
          title: 'Dynamic FAQ',
          description: 'Answers to frequently asked questions based on your knowledge base.',
        },
        {
          title: 'Guided diagnosis',
          description: 'Natalia asks the right questions to identify the problem.',
        },
        {
          title: 'Ticket tracking',
          description: 'Users can check the status of their request at any time.',
        },
        {
          title: 'Smart escalation',
          description: 'Transfer to a human expert when the situation requires it.',
        },
      ],
    },
    cta: {
      title: 'Ready to optimize your hotline?',
      subtitle: 'Discover how Natalia can reduce your wait times by 70%.',
      button: 'Book a Demo',
    },
  },

  // Email Automation AI page
  emailAutomationPage: {
    hero: {
      titleHighlight: 'Automate',
      title: 'your emails and workflows',
      subtitle: 'Natalia processes your email requests with the same intelligence as phone calls. Categorization, automatic response, escalation.',
      ctaButton: 'Book a Demo',
      heroImageAlt: 'Natalia AI Mail Assistant',
    },
    challenges: {
      title: 'Your challenges with',
      titleHighlight: 'emails',
      items: [
        {
          title: 'Growing volume',
          description: 'Hundreds of emails per day to sort, categorize and process. Your teams are overwhelmed.',
        },
        {
          title: 'Response time',
          description: 'Customers expect a quick response. Delays hurt satisfaction and brand image.',
        },
        {
          title: 'Poor routing',
          description: 'Emails arrive at the wrong department. Internal back-and-forth extends delays.',
        },
      ],
    },
    solutions: {
      title: 'Our',
      titleHighlight: 'solutions',
      items: [
        {
          title: 'Auto categorization',
          description: 'Natalia analyzes each email and automatically categorizes it according to your criteria.',
        },
        {
          title: 'Smart routing',
          description: 'Emails are directed to the right department, the right person, as soon as they arrive.',
        },
        {
          title: 'Automatic response',
          description: 'For simple requests, Natalia generates and sends a personalized response.',
        },
        {
          title: 'Ticket creation',
          description: 'Requests are transformed into tickets in your tracking tool (Jira, Zendesk...).',
        },
      ],
    },
    workflow: {
      title: 'Workflow',
      titleHighlight: 'automation',
      steps: [
        {
          title: 'Reception',
          description: 'Email arrives in your inbox, Natalia analyzes it immediately.',
        },
        {
          title: 'Analysis',
          description: 'Extraction of subject, intent, urgency and key information.',
        },
        {
          title: 'Action',
          description: 'Automatic response, ticket creation, routing or escalation according to rules.',
        },
        {
          title: 'Tracking',
          description: 'Tracking dashboard, metrics and continuous improvement of responses.',
        },
      ],
      integrations: {
        title: 'Integrations',
        subtitle: 'Natalia connects to your existing tools:',
        items: ['Gmail / Outlook', 'Jira / Zendesk', 'Salesforce', 'HubSpot', 'Slack / Teams', 'Custom API'],
      },
    },
    cta: {
      title: 'Automate your emails today',
      subtitle: 'Reduce email processing time by 60% with Natalia.',
      button: 'Book a Demo',
    },
  },

  // Press page
  pressPage: {
    hero: {
      title: 'Press',
      titleHighlight: 'Room',
      subtitle: 'Find all the information about Natalia for your articles and reports.',
    },
    contact: {
      title: 'Press Contact',
      description: 'For any interview, information request, or editorial partnership, contact our communications team.',
    },
    about: {
      title: 'About Natalia',
      text1: 'Natalia is an AI-powered voice assistant solution that enables businesses to answer 100% of their calls, 24/7.',
      text2: 'Developed in France, Natalia integrates with major business tools and offers a natural, smooth voice experience.',
    },
    keyFacts: {
      title: 'Key',
      titleHighlight: 'Facts',
      items: [
        { value: '24/7', label: 'Availability' },
        { value: '100%', label: 'Calls handled' },
        { value: '<1s', label: 'Response time' },
        { value: 'EU', label: 'Hosting' },
      ],
    },
    pressReleases: {
      title: 'Press',
      titleHighlight: 'Releases',
      readButton: 'Read',
      items: [
        {
          date: 'January 2025',
          title: 'Natalia: AI transforms administrative management',
          url: 'https://www.informateurjudiciaire.fr/actualites/natalia-lia-transforme-la-gestion-administrative/',
        },
      ],
    },
    mediaKit: {
      title: 'Media',
      titleHighlight: 'Kit',
      description: 'Download our media kit containing logos, visuals, and information about Natalia.',
      button: 'Download media kit',
    },
    cta: {
      title: 'Need information?',
      subtitle: 'Our communications team is at your service.',
      button: 'Contact press team',
    },
  },

  // Partners page
  partnersPage: {
    hero: {
      title: 'Our',
      titleHighlight: 'partners',
      subtitle: 'An ecosystem of technology and business partners to offer you the best solutions.',
    },
    techPartners: {
      title: 'Technology',
      titleHighlight: 'partners',
    },
    autoPartners: {
      title: 'Automotive sector',
      titleHighlight: 'partners',
    },
    becomePartner: {
      title: 'Become a',
      titleHighlight: 'partner',
      intro: 'Are you a software vendor, phone integrator, or reseller?',
      description: 'Join our partner program and offer Natalia to your customers. Benefit from our technical and commercial support.',
      benefits: [
        'Complete technical training',
        'Commercial and marketing support',
        'Attractive sales commission',
        'Priority access to new features',
      ],
      button: 'Become a partner',
      typesTitle: 'Partnership types',
      types: [
        {
          title: 'Telephony integrators',
          description: 'Connect Natalia to your enterprise telephony solutions.',
        },
        {
          title: 'Software vendors',
          description: 'Integrate Natalia voice AI into your applications.',
        },
        {
          title: 'Resellers',
          description: 'Market Natalia to your customers.',
        },
      ],
    },
    cta: {
      title: 'Interested in a partnership?',
      subtitle: 'Contact our partnership team to discuss opportunities.',
      button: 'Contact us',
    },
  },

  // Calculator page
  calculatorPage: {
    hero: {
      title: 'Calculate your',
      titleHighlight: 'savings',
      titleEnd: 'with Natalia',
      subtitle: 'Estimate the return on investment Natalia can bring you based on your call volume.',
    },
    calculator: {
      title: 'ROI',
      titleHighlight: 'Simulator',
      sliders: {
        calls: {
          label: 'Number of incoming calls per month',
          min: '100',
          max: '10,000',
        },
        missed: {
          label: 'Current missed call rate (%)',
          min: '10%',
          max: '60%',
        },
        cost: {
          label: 'Average hourly cost per agent (USD)',
          min: '$15',
          max: '$50',
        },
        duration: {
          label: 'Average call duration (minutes)',
          min: '2 min',
          max: '15 min',
        },
      },
      results: {
        title: 'Estimated results',
        recovered: 'Calls recovered per month',
        hours: 'Hours saved per month',
        monthlySavings: 'Estimated monthly savings',
        annualSavings: 'Annual savings',
      },
      note: '* Estimate based on 100% call handling by Natalia and 60% resolution rate without human intervention.',
      button: 'Request a custom study',
    },
    units: {
      euros: 'USD',
      hours: 'h',
      min: 'min',
      percent: '%',
    },
    benefits: {
      title: 'Beyond',
      titleHighlight: 'savings',
      items: [
        {
          title: 'Customer satisfaction',
          description: 'No more waiting, no more missed calls. Your customers are taken care of immediately.',
        },
        {
          title: 'Productivity',
          description: 'Your teams focus on high-value tasks.',
        },
        {
          title: 'Data',
          description: 'Automatic data collection to better understand your customers.',
        },
      ],
    },
    cta: {
      title: 'Ready to take action?',
      subtitle: 'Request a free personalized study for your business.',
      button: 'Request a study',
    },
  },
};

module.exports = en;
