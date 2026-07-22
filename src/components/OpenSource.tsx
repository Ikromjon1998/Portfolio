import { useTranslation } from '../i18n/useTranslation';
import { openSourceRepos } from '../data/openSource';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';

export function OpenSource() {
  const { t } = useTranslation();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="block" id="open-source">
      <div className="wrap">
        <SectionHeader idx={t.openSource.idx} title={t.openSource.title} hint={t.openSource.hint} />
        <div className="oss-grid reveal" ref={gridRef}>
          {openSourceRepos.map((repo) => {
            const item = t.openSource.items[repo.key];
            return (
              <article className="oss" key={repo.key}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="tags">
                  {repo.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="oss-links">
                  <a href={repo.repo} target="_blank" rel="noopener noreferrer">
                    {t.openSource.repoLabel} ↗
                  </a>
                  {'demo' in repo && (
                    <a href={repo.demo} target="_blank" rel="noopener noreferrer">
                      {t.openSource.demoLabel} ↗
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
