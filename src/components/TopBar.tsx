import { useTranslation } from '../i18n/useTranslation';
import { LanguageToggle } from './LanguageToggle';
import { DarkModeToggle } from './DarkModeToggle';
import { DownloadCVButton } from './DownloadCVButton';

interface Props {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function TopBar({ theme, toggleTheme }: Props) {
  const { t } = useTranslation();

  return (
    <header className="topbar">
      <div className="wrap">
        <div className="monogram">
          <span className="dot" />
          Ikromjon&nbsp;Ochilov
        </div>
        <div className="topbar-right">
          <div className="status">
            <span className="pulse" />
            {t.topbar.available}
            <span className="loc">{t.topbar.location}</span>
          </div>
          <DownloadCVButton variant="topbar" />
          <LanguageToggle />
          <DarkModeToggle theme={theme} toggle={toggleTheme} />
        </div>
      </div>
    </header>
  );
}
