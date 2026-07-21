import type { ComponentType, ReactElement, ReactNode } from 'react';
import { render, type RenderResult } from '@testing-library/react';
import { getTranslations, I18nContext, type I18nContextValue } from '../i18n/useTranslation';
import type { Locale } from '../i18n/types';

export function createI18nWrapper(locale: Locale = 'en'): ComponentType<{ children: ReactNode }> {
  const value: I18nContextValue = { locale, t: getTranslations(locale), setLocale: () => {} };
  return function I18nWrapper({ children }: { children: ReactNode }) {
    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
  };
}

export function renderWithI18n(ui: ReactElement, locale: Locale = 'en'): RenderResult {
  return render(ui, { wrapper: createI18nWrapper(locale) });
}
