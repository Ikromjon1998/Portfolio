import { renderHook } from '@testing-library/react';
import { I18nContext, useTranslation, getInitialLocale, getTranslations } from './useTranslation';

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

  it('defaults to "en" when nothing is stored and language is non-German', () => {
    expect(getInitialLocale()).toBe('en');
  });
});

describe('useTranslation', () => {
  it('throws a clear error when used outside the provider', () => {
    expect(() => renderHook(() => useTranslation())).toThrow(/I18nContext.Provider/);
  });

  it('returns the context value inside the provider', () => {
    const value = { locale: 'en' as const, t: getTranslations('en'), setLocale: () => {} };
    const { result } = renderHook(() => useTranslation(), {
      wrapper: ({ children }) => (
        <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
      ),
    });
    expect(result.current.locale).toBe('en');
  });
});
