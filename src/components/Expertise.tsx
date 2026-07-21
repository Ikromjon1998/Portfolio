import { useTranslation } from '../i18n/useTranslation';
import { expertiseGroups } from '../data/expertise';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';

export function Expertise() {
  const { t } = useTranslation();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="block" id="expertise">
      <div className="wrap">
        <SectionHeader idx={t.expertise.idx} title={t.expertise.title} hint={t.expertise.hint} />
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
