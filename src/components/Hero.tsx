import { useTranslation } from '../i18n/useTranslation';
import { personal } from '../data/personal';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Hero() {
  const { t } = useTranslation();
  const revealLeft = useScrollReveal<HTMLDivElement>();
  const revealRight = useScrollReveal<HTMLDivElement>();

  const ledeParts = t.hero.lede.split(/\{b[12]\}/);

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="reveal" ref={revealLeft}>
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>
            {t.hero.headingLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < t.hero.headingLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="lede">
            {ledeParts[0]}
            <b>{t.hero.ledeBold1}</b>
            {ledeParts[1]}
            <b>{t.hero.ledeBold2}</b>
            {ledeParts[2]}
          </p>
          <p className="sub">{t.hero.sub}</p>
          <div className="cta-row">
            <a className="btn" href="#contact">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              {t.hero.cta}
            </a>
            <span className="chip">
              <span className="g" />
              {t.hero.chip}
            </span>
          </div>
        </div>

        <div className="record reveal" ref={revealRight} aria-label="Profile summary">
          <div className="rhead">
            <span>{t.record.label}</span>
            <span className="dots">
              <i /><i /><i />
            </span>
          </div>
          <div className="rbody">
            <div className="rrow">
              <div className="k">{t.record.fieldRole}</div>
              <div className="v">
                {t.record.role}
                <small>{t.record.roleSub}</small>
              </div>
            </div>
            <div className="rrow">
              <div className="k">{t.record.fieldBased}</div>
              <div className="v">
                {t.record.based}
                <small>{t.record.basedSub}</small>
              </div>
            </div>
            <div className="rrow">
              <div className="k">{t.record.fieldCore}</div>
              <div className="v">
                <div className="tagrow">
                  {personal.coreTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="rrow">
              <div className="k">{t.record.fieldAi}</div>
              <div className="v">
                <div className="tagrow">
                  {personal.aiTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="rrow">
              <div className="k">{t.record.fieldStatus}</div>
              <div className="v" style={{ color: 'var(--emerald)' }}>
                ● {t.record.status}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
