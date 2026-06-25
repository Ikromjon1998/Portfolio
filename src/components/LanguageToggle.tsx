import { useTranslation } from '../i18n/useTranslation';

export function LanguageToggle() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        className={locale === 'en' ? 'active' : ''}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
      <button
        className={locale === 'de' ? 'active' : ''}
        onClick={() => setLocale('de')}
        aria-pressed={locale === 'de'}
      >
        DE
      </button>
    </div>
  );
}
