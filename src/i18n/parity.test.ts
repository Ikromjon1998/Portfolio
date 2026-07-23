import { describe, expect, it } from 'vitest';
import { en } from './en';
import { de } from './de';

function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape);
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, child]) => [key, shape(child)])
    );
  }
  return typeof value;
}

describe('translation bundles', () => {
  it('have an identical structure in every locale', () => {
    expect(shape(de)).toEqual(shape(en));
  });
});
