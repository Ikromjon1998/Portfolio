import { act, renderHook } from '@testing-library/react';
import { useDarkMode } from './useDarkMode';

describe('useDarkMode', () => {
  it('defaults to light when nothing is stored', () => {
    const { result } = renderHook(() => useDarkMode());
    expect(result.current.theme).toBe('light');
  });

  it('reflects a stored theme', () => {
    localStorage.setItem('theme', 'dark');
    const { result } = renderHook(() => useDarkMode());
    expect(result.current.theme).toBe('dark');
  });

  it('toggles the theme and persists it', () => {
    const { result } = renderHook(() => useDarkMode());
    act(() => result.current.toggle());
    expect(result.current.theme).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('applies the theme to the document element', () => {
    const { result } = renderHook(() => useDarkMode());
    act(() => result.current.toggle());
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
