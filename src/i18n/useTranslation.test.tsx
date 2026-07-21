import { describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { getInitialLocale, getTranslations, useTranslation } from './useTranslation';
import { createI18nWrapper } from '../test/i18n';

describe('getTranslations', () => {
  it('returns the English bundle for "en"', () => {
    expect(getTranslations('en').work.projects.gradar.title).toBeTruthy();
  });

  it('returns a different bundle per locale', () => {
    expect(getTranslations('en')).not.toBe(getTranslations('de'));
  });
});

describe('getInitialLocale', () => {
  it('prefers a stored locale', () => {
    localStorage.setItem('lang', 'de');
    expect(getInitialLocale()).toBe('de');
  });

  it('falls back to the browser language', () => {
    vi.spyOn(window.navigator, 'language', 'get').mockReturnValue('de-DE');
    expect(getInitialLocale()).toBe('de');
  });

  it('defaults to "en" when nothing is stored and language is non-German', () => {
    expect(getInitialLocale()).toBe('en');
  });
});

describe('useTranslation', () => {
  it('throws a clear error when used outside the provider', () => {
    // The throw is expected; keep React's error reporting out of the test output.
    vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => renderHook(() => useTranslation())).toThrow(/I18nContext.Provider/);
  });

  it('returns the context value inside the provider', () => {
    const { result } = renderHook(() => useTranslation(), { wrapper: createI18nWrapper('en') });
    expect(result.current.locale).toBe('en');
  });
});
