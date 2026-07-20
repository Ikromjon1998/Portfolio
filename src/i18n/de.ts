import type { Translations } from './types';

export const de: Translations = {
  topbar: {
    available: 'Verfügbar für Projekte',
    location: '· Berlin, DE',
  },
  hero: {
    eyebrow: 'Senior Full-Stack Engineer · Laravel · React · AI',
    headingLines: ['Zuverlässige Systeme,', 'jetzt mit AI', 'on top.'],
    lede: 'Ich baue {b1}, die skalieren — und integriere {b2} dort, wo sie wirklich etwas bewegen.',
    ledeBold1: 'regulierte, datenintensive Plattformen',
    ledeBold2: 'LLMs',
    sub: 'Sechs Jahre Erfahrung in Healthcare, EdTech und IoT — von DSGVO-konformen Vertragssystemen mit Echtzeit-Workday-Synchronisation bis hin zu Sensor-zu-Report-Pipelines und KI-gestützten Produktfeatures.',
    cta: 'Projekt starten',
    chip: 'Remote · abends & am Wochenende',
  },
  record: {
    label: 'profil.datensatz',
    fieldRole: 'Rolle',
    fieldBased: 'Standort',
    fieldCore: 'Kern',
    fieldAi: 'KI',
    fieldStatus: 'Status',
    role: 'Senior Full-Stack Engineer',
    roleSub: 'Backend-fokussiert · KI-Integration',
    based: 'Berlin, Deutschland',
    basedSub: 'Unbefristete Aufenthaltserlaubnis (Niederlassungserlaubnis)',
    status: 'Offen für Freelance-Projekte',
  },
  stats: {
    labels: [
      'Jahre Erfahrung mit\nProduktionssystemen',
      'Plattformen ausgeliefert\nin 3 Domänen',
      'Nutzer bedient\n(Studienverträge)',
      'Latenz-Reduktion\ndurch Query-Optimierung',
    ],
  },
  expertise: {
    idx: '/01',
    title: 'Womit ich arbeite',
    hint: 'nach Schicht gruppiert',
    groups: {
      backend: 'Backend',
      frontend: 'Frontend',
      ai: 'KI & LLM',
      data: 'Daten & Infra',
      testing: 'Testing & QA',
      ways: 'Arbeitsweise',
    },
  },
  work: {
    idx: '/02',
    title: 'Ausgewählte Projekte',
    hint: 'neueste zuerst',
    projects: {
      gradar: {
        title: 'KI-integrierte Vergütungsanalyse',
        role: 'Software Developer · gradar',
        desc: 'Entwicklung und Erweiterung einer SaaS-Plattform für Stellenbewertung und Vergütungsanalyse (Laravel, React/TypeScript, PostgreSQL) mit einer wachsenden Schicht LLM-gestützter Features zur Analyse und Strukturierung von HR-Daten.',
        metrics: { laravelReactTs: 'Laravel + React/TS', llmFeatures: 'LLM-Features' },
      },
      binschonda: {
        title: 'B2B-Healthcare-Plattform',
        role: 'Senior Full-Stack Developer / Product Owner · Binschonda (Pflegedienst, 200+ Mitarbeiter)',
        desc: 'Architektur und Entwicklung einer skalierbaren B2B-Healthcare-Plattform in Laravel + React/TypeScript. Design eines OrderIntent → Gig/Tour-Automatisierungs-Workflows, rollenbasierte Zugriffskontrolle und REST-APIs zur Integration externer Partner (DMRZ). Verantwortung für Roadmap-Prioritäten und Mentoring eines Junior-Entwicklers.',
        metrics: {
          apiLatency: 'API-Latenz −40%',
          devVelocity: 'Dev-Geschwindigkeit +30%',
          gdpr: '100% termingerechte DSGVO-Releases',
        },
      },
      iuContract: {
        title: 'Studienvertrags-Lifecycle-Plattform',
        role: 'Full-Stack / QA Automation Engineer · IU Internationale Hochschule (5000+ Mitarbeiter)',
        desc: 'Erweiterung einer event-getriebenen Microservice-Architektur zur End-to-End-Verwaltung von Studienverträgen mit Vue.js-Microfrontends und Laravel-Backend. Implementierung DSGVO-konformer automatisierter Vertragslöschung via Events und Echtzeit-Synchronisation des Vertragsstatus mit Workday im großen Maßstab.',
        metrics: {
          responseTime: 'Antwortzeit −40%',
          students: '100k+ Studierende',
          workdaySync: 'Echtzeit-Workday-Sync',
        },
      },
      iuQa: {
        title: 'Finanzdaten-QA-Automatisierung',
        role: 'QA Automation / Full-Stack Engineer · IU Internationale Hochschule',
        desc: 'Aufbau eines End-to-End-Testframeworks von Grund auf in Playwright zur Validierung der Datenkonsistenz zwischen dem Case-System und Workday (Finanzen, Zahlungen, HR). Integration in die CI/CD-Pipeline mit automatischer Ausführung bei jedem Release und automatisiertem Fehler-Reporting.',
        metrics: {
          manualQa: 'Manuelles QA −50%+',
          financeCoverage: 'Vollständige Abdeckung der Finanzprozesse',
        },
      },
      balt: {
        title: 'Smart-Building-Datenplattform',
        role: 'Full-Stack Engineer · BALT Technologies (IoT-Beratung)',
        desc: 'Neuaufbau des Laravel-Backends eines Smart-Building-Systems sowie Entwicklung von Mieter-Dashboards und einer Sensor-Datenpipeline (InfluxDB) für den Prozess vom Gerät bis zum Report. Ergänzung eines Node.js-Services zur automatischen Erstellung und dem Versand von Mieterrechnungen unter Wiederverwendung vorhandener Daten.',
        metrics: {
          sensorPipeline: 'Automatisierte Sensor-→-Report-Pipeline',
          fewerSupport: 'Weniger Support-Anfragen',
        },
      },
      parking: {
        title: 'Multi-Parkhaus-Plattform',
        role: "Full-Stack Engineer · Bo'lalar (Taschkent)",
        desc: 'Entwicklung einer responsiven Buchungs-App (React + Express, MERN-Stack) für acht mehrstöckige Parkhäuser mit Echtzeit-Verfügbarkeit pro Etage und Integration mit physischen Zugangsschranken, die bei erfolgreicher Buchung automatisch öffnen und schließen. Stabil unter gleichzeitigen Buchungen.',
        metrics: {
          realTimeAvailability: 'Echtzeit-Verfügbarkeit · 8 Parkhäuser',
          gateIntegration: 'Physische Schranken-Integration',
        },
      },
    },
    references: {
      refGradar: 'Ref. · aktueller Arbeitgeber',
      refBinschonda: 'Ref. · Geschäftsführer — auf Anfrage',
      refIuContract: 'Ref. · Engineering Manager — auf Anfrage',
      refIuQa: 'Ref. · Engineering Manager — auf Anfrage',
      refBalt: 'Ref. · entf. (Firma geschlossen 2024)',
      refParking: 'Ref. · auf Anfrage',
    },
  },
  ai: {
    eyebrow: 'Wohin es geht',
    heading: 'Engineering, das Ihre Daten {highlight}.',
    headingHighlight: 'versteht',
    desc: 'Mein aktueller Fokus liegt darauf, LLMs in echte Produkte einzubinden — keine Demos. Dieselbe Sorgfalt, die ich bei regulierten Finanz- und Healthcare-Systemen anwende, übertragen auf KI-Features, die zuverlässig, testbar und sicher mit sensiblen Daten umgehen.',
    items: [
      {
        icon: 'API',
        title: 'LLM-Integration',
        desc: 'Anthropic- & OpenAI-APIs eingebettet in bestehende Apps — Assistenten, strukturierte Extraktion, automatisierte Workflows.',
      },
      {
        icon: 'RAG',
        title: 'Retrieval-Augmented-Systeme',
        desc: 'Modelle auf Ihre eigenen Dokumente und Daten geerdet, damit Antworten korrekt und nachvollziehbar bleiben.',
      },
      {
        icon: '</>',
        title: 'Full-Stack-Lieferung',
        desc: 'Von der Datenbank bis zur UI — ein KI-Feature als vollständiges, wartbares, gut getestetes Produktelement ausgeliefert.',
      },
    ],
  },
  languages: {
    idx: '/03',
    title: 'Sprachen',
    names: { uzbek: 'Usbekisch', russian: 'Russisch', english: 'Englisch', german: 'Deutsch' },
    levels: {
      uzbek: 'Muttersprache',
      russian: 'Muttersprache',
      english: 'Verhandlungssicher / fließend',
      german: 'B1 · telc-Zertifikat',
    },
  },
  education: {
    idx: '/04',
    title: 'Ausbildung & Zertifikate',
    hint: '',
    entries: {
      polito: {
        year: 'Sep 2016 – Sep 2020',
        degree: 'B.Sc. Computer Engineering',
        institution: 'Politecnico di Torino · Turin, Italien',
        note: 'Schwerpunkt: theoretische Informatik, objektorientierte Programmierung, Rechnerarchitektur und Algorithmen.',
      },
      arden: {
        year: 'Nov 2021 – Jul 2022',
        degree: 'M.Sc. Data Analytics & Information Systems Management',
        institution: 'Arden University · Berlin, Deutschland',
        note: 'Teilweise absolviert (8,5 Monate). Kompetenzen in Datenanalyse, Dokumentation und kollaborativer Projektarbeit erworben.',
      },
    },
    certsLabel: 'Zertifikate & Nachweise',
    certs: {
      telcB1: 'telc Deutsch B1',
      awsCloud: 'AWS Certified Cloud Practitioner',
    },
  },
  contact: {
    eyebrow: 'Offen für Freelance-Projekte',
    heading: 'Ein System, das\ngebaut werden muss?',
    desc: 'Klarer Scope, remote geliefert an Abenden und Wochenenden. Sagen Sie mir, was Sie brauchen — ich sage Ihnen ehrlich, ob ich der Richtige bin.',
  },
  footer: {
    copyright: '© 2026 Ikromjon Ochilov — Berlin',
    tagline: 'Senior Full-Stack Engineer · Laravel · React · AI',
  },
  cv: {
    downloadButton: 'Lebenslauf herunterladen',
    summary:
      'Senior Full-Stack Engineer mit 6+ Jahren Erfahrung im Aufbau regulierter, datenintensiver Plattformen in Healthcare, EdTech und IoT. Backend-fokussiert (Laravel/PHP, PostgreSQL) mit starken React/TypeScript-Frontend-Kenntnissen und wachsendem Fokus auf produktive LLM-Integration (Anthropic, OpenAI, RAG). Ansässig in Berlin mit unbefristeter Aufenthaltserlaubnis.',
    skillsTitle: 'Technische Fähigkeiten',
    projectsTitle: 'Ausgewählte Projekte',
    educationTitle: 'Ausbildung & Zertifikate',
    languagesTitle: 'Sprachen',
    contactTitle: 'Kontakt',
    profileTitle: 'Profil',
    role: 'Rolle',
    duration: 'Dauer',
    impact: 'Ergebnis',
    stack: 'Stack',
  },
};
