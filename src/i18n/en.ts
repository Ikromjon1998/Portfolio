import type { Translations } from './types';

export const en = {
  meta: {
    title: 'Ikromjon Ochilov — Senior Full-Stack Engineer · Berlin',
    description:
      'Senior Full-Stack Engineer in Berlin — Laravel, React/TypeScript, PostgreSQL and production LLM integration. Available for freelance projects.',
  },
  topbar: {
    available: 'Available for projects',
    location: '· Berlin, DE',
    nav: {
      work: 'Work',
      ai: 'AI',
      contact: 'Contact',
    },
  },
  hero: {
    eyebrow: 'Senior Full-Stack Engineer · Laravel · React · AI',
    headingLines: ['Reliable systems,', 'now with AI', 'on top.'],
    lede: 'I build {b1} that scale — and integrate {b2} where they actually move the needle.',
    ledeBold1: 'regulated, data-heavy platforms',
    ledeBold2: 'LLMs',
    sub: 'Six years across healthcare, EdTech and IoT — from GDPR-compliant contract systems syncing in real time with Workday, to sensor-to-report pipelines and AI-powered product features.',
    cta: 'Start a project',
    chip: 'Remote · evenings & weekends',
  },
  record: {
    label: 'profile.record',
    fieldRole: 'Role',
    fieldBased: 'Based',
    fieldCore: 'Core',
    fieldAi: 'AI',
    fieldStatus: 'Status',
    role: 'Senior Full-Stack Engineer',
    roleSub: 'Backend-leaning · AI integration',
    based: 'Berlin, Germany',
    basedSub: 'Unrestricted work permit (Niederlassungserlaubnis)',
    status: 'Open to freelance projects',
  },
  stats: {
    labels: {
      stat1: 'years building\nproduction systems',
      stat2: 'platforms shipped\nacross 3 domains',
      stat3: 'users served\n(student contracts)',
      stat4: 'peak latency cut\nvia query tuning',
    },
  },
  expertise: {
    idx: '/01',
    title: 'What I work with',
    hint: 'grouped by layer',
    groups: {
      backend: 'Backend',
      frontend: 'Frontend',
      ai: 'AI & LLM',
      data: 'Data & Infra',
      testing: 'Testing & QA',
      ways: 'Ways of working',
    },
  },
  work: {
    idx: '/02',
    title: 'Selected work',
    hint: 'most recent first',
    projects: {
      gradar: {
        title: 'AI-Integrated Compensation Analytics',
        role: 'Software Developer · gradar',
        desc: 'Building and extending a SaaS platform for job evaluation and compensation analytics (Laravel, React/TypeScript, PostgreSQL), with a growing layer of LLM-powered features for analysing and structuring HR data.',
        metrics: { laravelReactTs: 'Laravel + React/TS', llmFeatures: 'LLM features' },
      },
      portfolio: {
        title: 'This Portfolio & Its AI Assistant',
        role: 'Personal project · design, build & operations',
        desc: 'The site you are reading. One typed data source renders the bilingual site, the PDF CV, and machine-readable llms.txt / resume.json — and grounds a Claude-powered assistant (Netlify Functions + Anthropic SDK) that answers questions about my work. Strict CSP, axe-verified accessibility and Playwright e2e tests in CI. Fully open source.',
        metrics: {
          cvChat: 'Claude-powered CV chat',
          a11yCi: 'WCAG 2.1 AA · axe in CI',
          openSourceRepo: 'Open source on GitHub',
        },
      },
      binschonda: {
        title: 'B2B Healthcare Platform',
        role: 'Senior Full-Stack Developer / Product Owner · Binschonda (Pflegedienst, 200+ staff)',
        desc: 'Architected and built a scalable B2B healthcare platform in Laravel + React/TypeScript. Designed an OrderIntent → Gig/Tour automation workflow, role-based access control, and REST APIs integrating external partners (DMRZ). Owned roadmap priorities and mentored a junior engineer.',
        metrics: {
          apiLatency: 'API latency −40%',
          devVelocity: 'Dev velocity +30%',
          gdpr: '100% on-time GDPR releases',
        },
      },
      iuContract: {
        title: 'Student Contract Lifecycle Platform',
        role: 'Full-Stack / QA Automation Engineer · IU Internationale Hochschule (5000+ staff)',
        desc: 'Extended an event-driven microservice architecture managing student contracts end-to-end, with Vue.js microfrontends and a Laravel backend. Implemented GDPR-compliant automated contract deletion via events and kept contract status synced with Workday in real time, at scale.',
        metrics: {
          responseTime: 'Response time −40%',
          students: '100k+ students',
          workdaySync: 'Real-time Workday sync',
        },
      },
      iuQa: {
        title: 'Finance Data QA Automation',
        role: 'QA Automation / Full-Stack Engineer · IU Internationale Hochschule',
        desc: 'Built an end-to-end test framework from scratch in Playwright, validating data consistency between the student Case-System and Workday (finance, payments, HR). Integrated into the CI/CD pipeline to run automatically on every release, with automated failure reporting.',
        metrics: { manualQa: 'Manual QA −50%+', financeCoverage: 'Full coverage of finance flows' },
      },
      balt: {
        title: 'Smart Building Data Platform',
        role: 'Full-Stack Engineer · BALT Technologies (IoT consulting)',
        desc: 'Rebuilt the Laravel backend of a smart-building system and built tenant dashboards plus a sensor data pipeline (InfluxDB) running device-to-report. Added a Node.js service that automatically generates and emails tenant invoices, reusing existing data to avoid a separate billing system.',
        metrics: {
          sensorPipeline: 'Automated sensor → report pipeline',
          fewerSupport: 'Fewer support requests',
        },
      },
      parking: {
        title: 'Multi-Garage Parking Platform',
        role: "Full-Stack Engineer · Bo'lalar (Tashkent)",
        desc: 'Built a responsive booking app (React + Express, MERN stack) for eight multi-storey garages, with real-time per-floor availability and integration with physical access gates that open and close automatically on a successful booking. Held up under concurrent bookings.',
        metrics: {
          realTimeAvailability: 'Real-time availability · 8 garages',
          gateIntegration: 'Physical gate integration',
        },
      },
    },
    references: {
      refGradar: 'ref · current employer',
      refPortfolio: 'ref · you are looking at it',
      refBinschonda: 'ref · Geschäftsführer — on request',
      refIuContract: 'ref · Engineering Manager — on request',
      refIuQa: 'ref · Engineering Manager — on request',
      refBalt: 'ref · n/a (company closed 2024)',
      refParking: 'ref · on request',
    },
  },
  ai: {
    eyebrow: "Where I'm heading",
    heading: 'Engineering that {highlight} your data.',
    headingHighlight: 'understands',
    desc: 'My recent focus is wiring LLMs into real products — not demos. The same discipline I bring to regulated finance and healthcare systems, applied to AI features that have to be reliable, testable, and safe with sensitive data.',
    items: [
      {
        icon: 'API',
        title: 'LLM integration',
        desc: 'Anthropic & OpenAI APIs embedded into existing apps — assistants, structured extraction, automated workflows.',
      },
      {
        icon: 'RAG',
        title: 'Retrieval-augmented systems',
        desc: 'Grounding models in your own documents and data so answers stay accurate and traceable.',
      },
      {
        icon: '</>',
        title: 'Full-stack delivery',
        desc: 'From database to UI — an AI feature shipped as a complete, maintainable, well-tested piece of product.',
      },
    ],
    chat: {
      title: 'Ask about my experience',
      note: 'An AI assistant answers from my CV data — a live demo of the LLM integration work I do.',
      viewSource: 'View the source on GitHub',
      placeholder: 'e.g. How much Laravel experience does he have?',
      suggestions: [
        'What has he built in healthcare?',
        'Has he shipped LLM features to production?',
        'Is he available for freelance work?',
        'How does this chat work?',
      ],
      send: 'Ask',
      sending: 'Thinking…',
      error: 'The assistant is unavailable right now — please email me instead.',
      errorRateLimited:
        'A lot of questions in the last minute — please wait a moment and try again.',
      errorGeneric: 'Something went wrong. Please try again.',
      retry: 'Try again',
    },
  },
  openSource: {
    idx: '/03',
    title: 'Open source',
    hint: 'plugins & packages',
    repoLabel: 'View on GitHub',
    demoLabel: 'Live demo',
    items: {
      nativeNotifications: {
        title: 'NativePHP · Local Notifications',
        desc: 'Plugin for scheduling and managing local notifications in NativePHP mobile apps — no Firebase required.',
      },
      nativeScanner: {
        title: 'NativePHP · Document Scanner',
        desc: 'Document scanning for NativePHP Mobile with edge detection, cropping and perspective correction via native camera APIs.',
      },
      nativeSocialAuth: {
        title: 'NativePHP · Social Auth',
        desc: 'Native Apple Sign-In and Google Sign-In for NativePHP mobile apps — shipped and maintained as a commercial plugin.',
      },
      vocabAssistant: {
        title: 'German Vocab Assistant',
        desc: 'AI-powered German vocabulary assistant in TypeScript — an LLM feature shipped as a small, complete product.',
      },
      licensePlates: {
        title: 'Laravel Kfz-Kennzeichen Validation',
        desc: 'Laravel validation rule for German vehicle license plates — a focused package for the German market.',
      },
    },
  },
  languages: {
    idx: '/04',
    title: 'Languages',
    names: { uzbek: 'Uzbek', russian: 'Russian', english: 'English', german: 'German' },
    levels: {
      uzbek: 'Native',
      russian: 'Native',
      english: 'Professional / fluent',
      german: 'B1 · telc certificate',
    },
  },
  education: {
    idx: '/05',
    title: 'Education & certifications',
    entries: {
      polito: {
        year: 'Sep 2016 – Sep 2020',
        degree: 'B.Sc. Computer Engineering',
        institution: 'Politecnico di Torino · Turin, Italy',
        note: 'Focus: theoretical computer science, object-oriented programming, computer architecture and algorithms.',
      },
      arden: {
        year: 'Nov 2021 – Jul 2022',
        degree: 'M.Sc. Data Analytics & Information Systems Management',
        institution: 'Arden University · Berlin, Germany',
        note: 'Partially completed (8.5 months). Skills gained in data analysis, documentation, and collaborative project work.',
      },
    },
    certsLabel: 'Certifications & credentials',
    certs: {
      telcB1: 'telc Deutsch B1',
      awsCloud: 'AWS Certified Cloud Practitioner',
    },
  },
  contact: {
    eyebrow: 'Open for freelance projects',
    heading: 'Have a system that\nneeds building?',
    desc: "Defined scope, delivered remotely on evenings and weekends. Tell me what you need shipped — I'll tell you honestly whether I'm the right fit.",
    mailSubject: 'Project inquiry',
    form: {
      title: 'Or write to me right here',
      name: 'Name',
      email: 'Email',
      message: 'What do you need built?',
      send: 'Send message',
      sending: 'Sending…',
      success: "Thanks — your message is on its way. I'll reply within a day.",
      error: 'Something went wrong. Please email me directly instead.',
    },
  },
  footer: {
    copyright: 'Ikromjon Ochilov — Berlin',
    tagline: 'Senior Full-Stack Engineer · Laravel · React · AI',
  },
  cv: {
    downloadButton: 'Download CV',
    summary:
      'Senior Full-Stack Engineer with 6+ years building regulated, data-heavy platforms across healthcare, EdTech, and IoT. Backend-leaning (Laravel/PHP, PostgreSQL) with strong React/TypeScript frontend skills and a growing focus on production LLM integration (Anthropic, OpenAI, RAG). Based in Berlin with an unrestricted work permit.',
    skillsTitle: 'Technical Skills',
    projectsTitle: 'Selected Projects',
    openSourceTitle: 'Open Source',
    educationTitle: 'Education & Certifications',
    languagesTitle: 'Languages',
    role: 'Role',
    duration: 'Duration',
    stack: 'Stack',
  },
} satisfies Translations;
