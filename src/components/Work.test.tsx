import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { Work } from './Work';
import { renderWithI18n } from '../test/i18n';
import { en } from '../i18n/en';
import { de } from '../i18n/de';

describe('Work', () => {
  it('renders every project title', () => {
    renderWithI18n(<Work />);
    for (const project of Object.values(en.work.projects)) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });

  it('joins metric labels to projects by id (English)', () => {
    renderWithI18n(<Work />);
    expect(screen.getByText(en.work.projects.binschonda.metrics.apiLatency)).toBeInTheDocument();
    expect(screen.getByText(en.work.projects.binschonda.metrics.gdpr)).toBeInTheDocument();
  });

  it('renders localized metric labels (German)', () => {
    renderWithI18n(<Work />, 'de');
    expect(screen.getByText(de.work.projects.binschonda.metrics.apiLatency)).toBeInTheDocument();
  });

  it('shows a trend arrow for directional metrics and none for neutral ones', () => {
    renderWithI18n(<Work />);

    const upMetric = screen
      .getByText(en.work.projects.binschonda.metrics.apiLatency)
      .closest('span');
    expect(upMetric).not.toBeNull();
    expect(upMetric?.querySelector('svg')).toBeInTheDocument();
    expect(upMetric).not.toHaveClass('neutral');

    const neutralMetric = screen
      .getByText(en.work.projects.binschonda.metrics.gdpr)
      .closest('span');
    expect(neutralMetric).toHaveClass('neutral');
    expect(neutralMetric?.querySelector('svg')).toBeNull();
  });
});
