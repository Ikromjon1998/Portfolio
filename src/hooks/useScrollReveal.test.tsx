import { describe, expect, it } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import { useScrollReveal } from './useScrollReveal';
import { MockIntersectionObserver } from '../test/mocks';

function Probe() {
  const ref = useScrollReveal<HTMLDivElement>();
  return <div data-testid="target" ref={ref} />;
}

describe('useScrollReveal', () => {
  it('observes the element the returned ref is attached to', () => {
    render(<Probe />);
    const [observer] = MockIntersectionObserver.instances;
    expect(observer?.observed).toContain(screen.getByTestId('target'));
  });

  it('marks the element as revealed once it intersects, then stops observing it', () => {
    render(<Probe />);
    const target = screen.getByTestId('target');
    const [observer] = MockIntersectionObserver.instances;

    act(() => observer?.intersect(true));

    expect(target).toHaveClass('in');
    expect(observer?.observed).not.toContain(target);
  });

  it('does not reveal an element that has not intersected', () => {
    render(<Probe />);
    const [observer] = MockIntersectionObserver.instances;

    act(() => observer?.intersect(false));

    expect(screen.getByTestId('target')).not.toHaveClass('in');
  });
});
