import { useState, useCallback, useMemo } from 'react';
import { I18nContext, getInitialLocale, getTranslations } from './i18n/useTranslation';
import type { Locale } from './i18n/types';
import { useDarkMode } from './hooks/useDarkMode';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Expertise } from './components/Expertise';
import { Work } from './components/Work';
import { AI } from './components/AI';
import { Languages } from './components/Languages';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  const { theme, toggle: toggleTheme } = useDarkMode();

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('lang', l);
    document.documentElement.lang = l;
  }, []);

  const i18nValue = useMemo(
    () => ({ locale, t: getTranslations(locale), setLocale }),
    [locale, setLocale]
  );

  return (
    <I18nContext.Provider value={i18nValue}>
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Stats />
        <Expertise />
        <Work />
        <AI />
        <Languages />
        <Education />
        <Contact />
      </main>
      <Footer />
    </I18nContext.Provider>
  );
}
