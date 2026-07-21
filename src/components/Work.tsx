import { getProjectTranslation, useTranslation } from '../i18n/useTranslation';
import { projects, type MetricTrend, type Project } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';

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

function TrendIcon({ trend }: { trend: MetricTrend }) {
  if (trend === 'up') return <ArrowUpIcon />;
  if (trend === 'down') return <ArrowDownIcon />;
  return null;
}

function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLElement>();
  const pt = getProjectTranslation(t, project.id);

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
          {project.metrics.map((metric) => (
            <span key={metric.id} className={`m${metric.trend === 'neutral' ? ' neutral' : ''}`}>
              <TrendIcon trend={metric.trend} />
              {pt.metrics[metric.id]}
            </span>
          ))}
        </div>
        <div className="proj-foot">
          <div className="stack">
            {project.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <span className="ref">{t.work.references[project.referenceKey]}</span>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const { t } = useTranslation();

  return (
    <section className="block" id="work">
      <div className="wrap">
        <SectionHeader idx={t.work.idx} title={t.work.title} hint={t.work.hint} />
        <div className="work">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
