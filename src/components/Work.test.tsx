import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { Work } from './Work';
import { I18nContext, getTranslations } from '../i18n/useTranslation';
import type { Locale } from '../i18n/types';

function renderWork(locale: Locale) {
  const value = { locale, t: getTranslations(locale), setLocale: () => {} };
  const wrapper = ({ children }: { children: ReactNode }) => (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
  return render(<Work />, { wrapper });
}

describe('Work', () => {
  it('renders every project title', () => {
    renderWork('en');
    expect(screen.getByText('B2B Healthcare Platform')).toBeInTheDocument();
    expect(screen.getByText('Multi-Garage Parking Platform')).toBeInTheDocument();
  });

  it('joins metric labels to projects by id (English)', () => {
    renderWork('en');
    expect(screen.getByText('API latency −40%')).toBeInTheDocument();
    expect(screen.getByText('100% on-time GDPR releases')).toBeInTheDocument();
  });

  it('renders localized metric labels (German)', () => {
    renderWork('de');
    expect(screen.getByText('API-Latenz −40%')).toBeInTheDocument();
  });

  it('shows a trend arrow for directional metrics and none for neutral ones', () => {
    renderWork('en');

    const upMetric = screen.getByText('API latency −40%').closest('span');
    expect(upMetric).not.toBeNull();
    expect(upMetric?.querySelector('svg')).toBeInTheDocument();
    expect(upMetric).not.toHaveClass('neutral');

    const neutralMetric = screen.getByText('100% on-time GDPR releases').closest('span');
    expect(neutralMetric).toHaveClass('neutral');
    expect(neutralMetric?.querySelector('svg')).toBeNull();
  });
});
