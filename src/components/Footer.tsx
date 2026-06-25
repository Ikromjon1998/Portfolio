import { useTranslation } from '../i18n/useTranslation';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="wrap">
        <span>{t.footer.copyright}</span>
        <span>{t.footer.tagline}</span>
      </div>
    </footer>
  );
}
