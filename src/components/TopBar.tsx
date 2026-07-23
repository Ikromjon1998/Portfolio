import { useTranslation } from '../i18n/useTranslation';
import { LanguageToggle } from './LanguageToggle';
import { DarkModeToggle } from './DarkModeToggle';
import { DownloadCVButton } from './DownloadCVButton';

export function TopBar() {
  const { t } = useTranslation();

  return (
    <header className="topbar">
      <div className="wrap">
        <div className="monogram">
          <span className="dot" />
          Ikromjon&nbsp;Ochilov
        </div>
        <nav className="topnav" aria-label="Sections">
          <a href="#work">{t.topbar.nav.work}</a>
          <a href="#ai">{t.topbar.nav.ai}</a>
          <a href="#contact">{t.topbar.nav.contact}</a>
        </nav>
        <div className="topbar-right">
          <div className="status">
            <span className="pulse" />
            {t.topbar.available}
            <span className="loc">{t.topbar.location}</span>
          </div>
          <DownloadCVButton variant="topbar" />
          <LanguageToggle />
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
