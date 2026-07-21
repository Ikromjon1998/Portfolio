import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import { MockIntersectionObserver, stubMatchMedia } from './mocks';

const store = new Map<string, string>();
const localStorageMock: Storage = {
  get length() {
    return store.size;
  },
  clear: () => store.clear(),
  getItem: (key) => store.get(key) ?? null,
  key: (index) => Array.from(store.keys())[index] ?? null,
  removeItem: (key) => {
    store.delete(key);
  },
  setItem: (key, value) => {
    store.set(key, String(value));
  },
};
vi.stubGlobal('localStorage', localStorageMock);

stubMatchMedia(false);
vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);

afterEach(() => {
  cleanup();
  store.clear();
  stubMatchMedia(false);
  MockIntersectionObserver.reset();
  document.documentElement.removeAttribute('data-theme');
  document.documentElement.removeAttribute('lang');
  vi.restoreAllMocks();
});
