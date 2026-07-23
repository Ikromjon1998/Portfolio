import { createContext, useContext } from 'react';
import { locales, type Locale, type Translations } from './types';
import type { MetricId, ProjectId } from '../data/projects';
import { en } from './en';
import { de } from './de';

export const LANG_STORAGE_KEY = 'lang';

const translations: Record<Locale, Translations> = { en, de };

function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

export function getInitialLocale(): Locale {
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored !== null && isLocale(stored)) return stored;
  if (navigator.language.startsWith('de')) return 'de';
  return 'en';
}

export interface ProjectCopy {
  title: string;
  role: string;
  desc: string;
  metrics: Partial<Record<MetricId, string>>;
}

export function getProjectTranslation(t: Translations, id: ProjectId): ProjectCopy {
  return t.work.projects[id];
}

export interface I18nContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

export function useTranslation(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within an <I18nContext.Provider>');
  }
  return ctx;
}
