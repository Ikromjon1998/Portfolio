import { useScrollReveal } from '../hooks/useScrollReveal';

interface Props {
  idx: string;
  title: string;
  hint?: string;
}

export function SectionHeader({ idx, title, hint }: Props) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div className="block-head reveal" ref={ref}>
      <span className="idx">{idx}</span>
      <h2>{title}</h2>
      {hint && <span className="hint">{hint}</span>}
    </div>
  );
}
