export type Locale = 'en' | 'de';

export interface ProjectTranslation {
  title: string;
  role: string;
  desc: string;
  metrics: string[];
}

export interface EducationTranslation {
  year: string;
  degree: string;
  institution: string;
  note: string;
}

export interface AiItem {
  icon: string;
  title: string;
  desc: string;
}

export interface Translations {
  topbar: {
    available: string;
    location: string;
  };
  hero: {
    eyebrow: string;
    headingLines: string[];
    lede: string;
    ledeBold1: string;
    ledeBold2: string;
    sub: string;
    cta: string;
    chip: string;
  };
  record: {
    label: string;
    role: string;
    roleSub: string;
    based: string;
    basedSub: string;
    status: string;
    fieldRole: string;
    fieldBased: string;
    fieldCore: string;
    fieldAi: string;
    fieldStatus: string;
  };
  stats: {
    labels: string[];
  };
  expertise: {
    idx: string;
    title: string;
    hint: string;
    groups: Record<string, string>;
  };
  work: {
    idx: string;
    title: string;
    hint: string;
    projects: Record<string, ProjectTranslation>;
    references: Record<string, string>;
  };
  ai: {
    eyebrow: string;
    heading: string;
    headingHighlight: string;
    desc: string;
    items: AiItem[];
  };
  languages: {
    idx: string;
    title: string;
    names: Record<string, string>;
    levels: Record<string, string>;
  };
  education: {
    idx: string;
    title: string;
    hint: string;
    entries: Record<string, EducationTranslation>;
    certsLabel: string;
    certs: Record<string, string>;
  };
  contact: {
    eyebrow: string;
    heading: string;
    desc: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
  cv: {
    downloadButton: string;
    summary: string;
    skillsTitle: string;
    projectsTitle: string;
    educationTitle: string;
    languagesTitle: string;
    contactTitle: string;
    profileTitle: string;
    role: string;
    duration: string;
    impact: string;
    stack: string;
  };
}
