import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { getInitialLocale, getTranslations, I18nContext, LANG_STORAGE_KEY } from './useTranslation';
import type { Locale } from './types';

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(LANG_STORAGE_KEY, next);
  }, []);

  const value = useMemo(
    () => ({ locale, t: getTranslations(locale), setLocale }),
    [locale, setLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
