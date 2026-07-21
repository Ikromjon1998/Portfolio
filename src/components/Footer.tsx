import { useTranslation } from '../i18n/useTranslation';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="wrap">
        <span>
          © {new Date().getFullYear()} {t.footer.copyright}
        </span>
        <span>{t.footer.tagline}</span>
      </div>
    </footer>
  );
}
