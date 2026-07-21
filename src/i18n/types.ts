import type { MetricIdOf, ProjectId, ReferenceKey } from '../data/projects';
import type { ExpertiseGroupKey } from '../data/expertise';
import type { SpokenLanguageKey } from '../data/languages';
import type { CertificationKey, EducationKey } from '../data/education';
import type { StatKey } from '../data/personal';

export const locales = ['en', 'de'] as const;

export type Locale = (typeof locales)[number];

export interface ProjectTranslation<M extends string> {
  title: string;
  role: string;
  desc: string;
  /** One localized label per metric id declared in `src/data/projects.ts`. */
  metrics: Record<M, string>;
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
  meta: {
    title: string;
    description: string;
  };
  topbar: {
    available: string;
    location: string;
  };
  hero: {
    eyebrow: string;
    headingLines: readonly string[];
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
    labels: Record<StatKey, string>;
  };
  expertise: {
    idx: string;
    title: string;
    hint: string;
    groups: Record<ExpertiseGroupKey, string>;
  };
  work: {
    idx: string;
    title: string;
    hint: string;
    projects: { [P in ProjectId]: ProjectTranslation<MetricIdOf<P>> };
    references: Record<ReferenceKey, string>;
  };
  ai: {
    eyebrow: string;
    heading: string;
    headingHighlight: string;
    desc: string;
    items: readonly AiItem[];
  };
  languages: {
    idx: string;
    title: string;
    names: Record<SpokenLanguageKey, string>;
    levels: Record<SpokenLanguageKey, string>;
  };
  education: {
    idx: string;
    title: string;
    entries: Record<EducationKey, EducationTranslation>;
    certsLabel: string;
    certs: Record<CertificationKey, string>;
  };
  contact: {
    eyebrow: string;
    heading: string;
    desc: string;
    mailSubject: string;
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
    role: string;
    duration: string;
    stack: string;
  };
}
