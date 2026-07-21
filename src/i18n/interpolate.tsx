import { Fragment, type ReactNode } from 'react';

const TOKEN = /\{(\w+)\}/g;

/**
 * Replaces `{slot}` tokens in a translated string with React nodes, so
 * translations stay plain strings and markup stays in the components.
 * An unknown token is rendered verbatim rather than dropped.
 */
export function interpolate<S extends string>(
  text: string,
  slots: Record<S, ReactNode>
): ReactNode {
  return text.split(TOKEN).map((part, i) => {
    if (i % 2 === 0) return part;
    const slot = (slots as Record<string, ReactNode>)[part];
    return <Fragment key={i}>{slot !== undefined ? slot : `{${part}}`}</Fragment>;
  });
}
