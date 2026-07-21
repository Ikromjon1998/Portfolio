import { Fragment } from 'react';

/** Renders a translated string's `\n` separators as line breaks. */
export function MultilineText({ text }: { text: string }) {
  return text.split('\n').map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));
}
