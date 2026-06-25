import { useTranslation } from '../i18n/useTranslation';
import { personal } from '../data/personal';

export function Stats() {
  const { t } = useTranslation();

  return (
    <section className="strip">
      <div className="wrap">
        {personal.stats.map((stat, i) => (
          <div className="stat" key={i}>
            <div className="n">
              {stat.value}
              {stat.suffix && <em>{stat.suffix}</em>}
            </div>
            <div className="l">
              {t.stats.labels[i].split('\n').map((line, j) => (
                <span key={j}>
                  {line}
                  {j === 0 && <br />}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
