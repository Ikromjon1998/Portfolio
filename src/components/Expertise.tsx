import { useTranslation } from '../i18n/useTranslation';
import { expertiseGroups } from '../data/expertise';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Expertise() {
  const { t } = useTranslation();
  const headRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="block" id="expertise">
      <div className="wrap">
        <div className="block-head reveal" ref={headRef}>
          <span className="idx">{t.expertise.idx}</span>
          <h2>{t.expertise.title}</h2>
          <span className="hint">{t.expertise.hint}</span>
        </div>
        <div className="exp-grid reveal" ref={gridRef}>
          {expertiseGroups.map((group) => (
            <div className="exp" key={group.key}>
              <h3>
                <span className="bar" />
                {t.expertise.groups[group.key]}
              </h3>
              <div className="tags">
                {group.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
