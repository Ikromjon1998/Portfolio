import { useTranslation } from '../i18n/useTranslation';
import { educationEntries, certifications } from '../data/education';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Education() {
  const { t } = useTranslation();
  const headRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();
  const certsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="block" id="education">
      <div className="wrap">
        <div className="block-head reveal" ref={headRef}>
          <span className="idx">{t.education.idx}</span>
          <h2>{t.education.title}</h2>
          <span className="hint">{t.education.hint}</span>
        </div>

        <div className="edu-grid reveal" ref={gridRef}>
          {educationEntries.map((entry) => {
            const et = t.education.entries[entry.key];
            return (
              <div className="edu" key={entry.key}>
                <div className="yr">{et.year}</div>
                <h3>{et.degree}</h3>
                <div className="inst">{et.institution}</div>
                <p className="note">{et.note}</p>
              </div>
            );
          })}
        </div>

        <div className="certs reveal" ref={certsRef}>
          <div className="lbl">{t.education.certsLabel}</div>
          <div className="row">
            {certifications.map((certKey) => (
              <span key={certKey}>{t.education.certs[certKey]}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
