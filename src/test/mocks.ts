import { vi } from 'vitest';

/**
 * Replaces `window.matchMedia`, which jsdom does not implement. Call from a
 * test to control the `matches` result (e.g. to simulate a dark-mode OS
 * preference); the setup file restores the non-matching default after each test.
 */
export function stubMatchMedia(matches: boolean): void {
  const matchMedia = (query: string): MediaQueryList => ({
    matches,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(() => false),
  });
  vi.stubGlobal('matchMedia', matchMedia satisfies typeof window.matchMedia);
}

function createEntry(target: Element, isIntersecting: boolean): IntersectionObserverEntry {
  const rect = target.getBoundingClientRect();
  return {
    boundingClientRect: rect,
    intersectionRatio: isIntersecting ? 1 : 0,
    intersectionRect: rect,
    isIntersecting,
    rootBounds: null,
    target,
    time: 0,
  };
}

/**
 * Replaces `IntersectionObserver`, which jsdom does not implement. Keeps the
 * observer callback so tests can drive visibility via `intersect()`.
 */
export class MockIntersectionObserver implements IntersectionObserver {
  static instances: MockIntersectionObserver[] = [];

  readonly root: Element | Document | null;
  readonly rootMargin: string;
  readonly thresholds: readonly number[];
  readonly observed: Element[] = [];

  constructor(
    private readonly callback: IntersectionObserverCallback,
    options: IntersectionObserverInit = {}
  ) {
    this.root = options.root ?? null;
    this.rootMargin = options.rootMargin ?? '0px';
    this.thresholds = Array.isArray(options.threshold)
      ? options.threshold
      : [options.threshold ?? 0];
    MockIntersectionObserver.instances.push(this);
  }

  observe(target: Element): void {
    this.observed.push(target);
  }

  unobserve(target: Element): void {
    const at = this.observed.indexOf(target);
    if (at !== -1) this.observed.splice(at, 1);
  }

  disconnect(): void {
    this.observed.length = 0;
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  /** Fires the observer callback for every currently observed element. */
  intersect(isIntersecting: boolean): void {
    this.callback(
      this.observed.map((target) => createEntry(target, isIntersecting)),
      this
    );
  }

  static reset(): void {
    MockIntersectionObserver.instances.length = 0;
  }
}
