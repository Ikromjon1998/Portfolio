import { useTranslation } from '../i18n/useTranslation';
import { projects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 19V5m0 0-6 6m6-6 6 6" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14m0 0 6-6m-6 6-6-6" />
    </svg>
  );
}

function ProjectCard({ projectId, index: idx }: { projectId: string; index: number }) {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLElement>();
  const project = projects[idx];
  const pt = t.work.projects[projectId];

  const metricIcon = (metricLabel: string) => {
    if (metricLabel.includes('−') && metricLabel.includes('latency')) return <ArrowUpIcon />;
    if (metricLabel.includes('−') && metricLabel.includes('Latenz')) return <ArrowUpIcon />;
    if (metricLabel.includes('+') && metricLabel.includes('velocity')) return <ArrowUpIcon />;
    if (metricLabel.includes('+') && metricLabel.includes('Geschwindigkeit')) return <ArrowUpIcon />;
    if (metricLabel.includes('−') && metricLabel.includes('esponse')) return <ArrowUpIcon />;
    if (metricLabel.includes('−') && metricLabel.includes('ntwortzeit')) return <ArrowUpIcon />;
    if (metricLabel.includes('−') && metricLabel.includes('QA')) return <ArrowDownIcon />;
    return null;
  };

  return (
    <article className="proj reveal" ref={ref}>
      <div className="proj-top">
        <span className="pid">{project.index}</span>
        <span className="domain">{project.domain}</span>
        <span className="dur">{project.duration}</span>
      </div>
      <div className="proj-body">
        <h3>{pt.title}</h3>
        <div className="proj-role">{pt.role}</div>
        <p className="proj-desc">{pt.desc}</p>
        <div className="impact">
          {pt.metrics.map((label, i) => {
            const metric = project.metrics[i];
            const icon = metric?.type === 'positive' ? metricIcon(label) : null;
            return (
              <span key={i} className={`m${metric?.type === 'neutral' ? ' neutral' : ''}`}>
                {icon}
                {label}
              </span>
            );
          })}
        </div>
        <div className="proj-foot">
          <div className="stack">
            {project.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <span className="ref">
            {t.work.references[project.referenceKey]}
          </span>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const { t } = useTranslation();
  const headRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="block" id="work">
      <div className="wrap">
        <div className="block-head reveal" ref={headRef}>
          <span className="idx">{t.work.idx}</span>
          <h2>{t.work.title}</h2>
          <span className="hint">{t.work.hint}</span>
        </div>
        <div className="work">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} projectId={project.id} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
