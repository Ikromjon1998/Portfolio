import { useTranslation } from '../i18n/useTranslation';
import { spokenLanguages } from '../data/languages';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Languages() {
  const { t } = useTranslation();
  const headRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="block" id="languages">
      <div className="wrap">
        <div className="block-head reveal" ref={headRef}>
          <span className="idx">{t.languages.idx}</span>
          <h2>{t.languages.title}</h2>
        </div>
        <div className="lang-grid reveal" ref={gridRef}>
          {spokenLanguages.map((lang) => (
            <div className="lang" key={lang.key}>
              <div className="nm">{t.languages.names[lang.key]}</div>
              <div className="lv">{t.languages.levels[lang.key]}</div>
              <div className="meter">
                <i style={{ width: `${lang.meter}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
