import { useTranslation } from '../i18n/useTranslation';
import { personal } from '../data/personal';
import { MultilineText } from './MultilineText';

export function Stats() {
  const { t } = useTranslation();

  return (
    <section className="strip">
      <div className="wrap">
        {personal.stats.map((stat) => (
          <div className="stat" key={stat.key}>
            <div className="n">
              {stat.value}
              {stat.suffix && <em>{stat.suffix}</em>}
            </div>
            <div className="l">
              <MultilineText text={t.stats.labels[stat.key]} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
