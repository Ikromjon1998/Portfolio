import { useTranslation } from '../i18n/useTranslation';
import { interpolate } from '../i18n/interpolate';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { AskCV } from './AskCV';

export function AI() {
  const { t } = useTranslation();
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="block ai" id="ai">
      <div className="wrap ai-grid">
        <div className="reveal" ref={leftRef}>
          <span className="eyebrow">{t.ai.eyebrow}</span>
          <h2>{interpolate(t.ai.heading, { highlight: <span>{t.ai.headingHighlight}</span> })}</h2>
          <p>{t.ai.desc}</p>
        </div>
        <div className="ai-list reveal" ref={rightRef}>
          {t.ai.items.map((item) => (
            <div className="ai-item" key={item.title}>
              <div className="ic">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="wrap">
        <AskCV />
      </div>
    </section>
  );
}
