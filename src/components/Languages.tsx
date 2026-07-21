import { useTranslation } from '../i18n/useTranslation';
import { spokenLanguages } from '../data/languages';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';

export function Languages() {
  const { t } = useTranslation();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="block" id="languages">
      <div className="wrap">
        <SectionHeader idx={t.languages.idx} title={t.languages.title} />
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
