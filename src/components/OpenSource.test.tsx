import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { OpenSource } from './OpenSource';
import { renderWithI18n } from '../test/i18n';
import { openSourceRepos } from '../data/openSource';
import { en } from '../i18n/en';
import { de } from '../i18n/de';

describe('OpenSource', () => {
  it('renders a card with a repo link for every repository', () => {
    renderWithI18n(<OpenSource />);
    for (const item of Object.values(en.openSource.items)) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    }
    const repoLinks = screen.getAllByRole('link', { name: new RegExp(en.openSource.repoLabel) });
    expect(repoLinks.map((link) => link.getAttribute('href'))).toEqual(
      openSourceRepos.map((repo) => repo.repo)
    );
  });

  it('links the live demo only where one exists', () => {
    renderWithI18n(<OpenSource />);
    const demoLinks = screen.getAllByRole('link', { name: new RegExp(en.openSource.demoLabel) });
    expect(demoLinks).toHaveLength(1);
    expect(demoLinks[0]).toHaveAttribute('href', 'https://german-vocab-assistant.vercel.app');
  });

  it('renders localized descriptions (German)', () => {
    renderWithI18n(<OpenSource />, 'de');
    expect(screen.getByText(de.openSource.items.nativeNotifications.desc)).toBeInTheDocument();
  });
});
