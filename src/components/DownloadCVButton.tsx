import { useCallback, useState } from 'react';
import { useTranslation } from '../i18n/useTranslation';

interface Props {
  variant?: 'topbar' | 'contact';
}

export function DownloadCVButton({ variant = 'topbar' }: Props) {
  const { locale, t } = useTranslation();
  const [generating, setGenerating] = useState(false);

  const handleDownload = useCallback(async () => {
    setGenerating(true);
    try {
      const [{ pdf }, { CVDocument }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('../cv/CVDocument'),
      ]);
      const blob = await pdf(<CVDocument locale={locale} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Ikromjon-Ochilov-CV-${locale.toUpperCase()}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('CV download failed:', error);
    } finally {
      setGenerating(false);
    }
  }, [locale]);

  const className =
    variant === 'contact' ? 'links-btn download-cv' : 'download-cv-topbar download-cv';

  return (
    <button className={className} onClick={() => void handleDownload()} disabled={generating}>
      <svg
        viewBox="0 0 24 24"
        width="15"
        height="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      {generating ? '...' : t.cv.downloadButton}
    </button>
  );
}
