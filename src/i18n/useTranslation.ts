import { createContext, useContext } from 'react';
import type { Locale, Translations } from './types';
import { en } from './en';
import { de } from './de';

const translations: Record<Locale, Translations> = { en, de };

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

export function getInitialLocale(): Locale {
  const stored = localStorage.getItem('lang');
  if (stored === 'en' || stored === 'de') return stored;
  if (navigator.language.startsWith('de')) return 'de';
  return 'en';
}

interface I18nContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (l: Locale) => void;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

export function useTranslation(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within an <I18nContext.Provider>');
  }
  return ctx;
}
