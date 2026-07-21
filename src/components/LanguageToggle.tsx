import { useTranslation } from '../i18n/useTranslation';
import { locales } from '../i18n/types';

export function LanguageToggle() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      {locales.map((l) => (
        <button
          key={l}
          className={locale === l ? 'active' : ''}
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
