import { useTranslation } from '../i18n/useTranslation';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function AI() {
  const { t } = useTranslation();
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  const headingParts = t.ai.heading.split('{highlight}');

  return (
    <section className="block ai" id="ai">
      <div className="wrap ai-grid">
        <div className="reveal" ref={leftRef}>
          <span className="eyebrow">{t.ai.eyebrow}</span>
          <h2>
            {headingParts[0]}
            <span>{t.ai.headingHighlight}</span>
            {headingParts[1]}
          </h2>
          <p>{t.ai.desc}</p>
        </div>
        <div className="ai-list reveal" ref={rightRef}>
          {t.ai.items.map((item, i) => (
            <div className="ai-item" key={i}>
              <div className="ic">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
