import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * The layout device of the site: a hairline rule, the section title in the left margin (stacked above it on
 * small screens) and the content in the main column. `note` is a margin annotation; `pending` marks the
 * section as awaiting confirmation with a dagger.
 */
export default function Folio({ title, id, level = 2, note, pending, children }: { title: string; id?: string; level?: 2 | 3; note?: ReactNode; pending?: ReactNode; children: ReactNode }) {
  const H = `h${level}` as "h2" | "h3";
  return (
    <Reveal as="section" variant="rule" className="folio" aria-labelledby={id}>
      <div className="folio-head">
        <H className="folio-title" id={id}>{title}</H>
        {note && <p className="label">{note}</p>}
        {pending && <p className="pend">{pending}</p>}
      </div>
      <div>{children}</div>
    </Reveal>
  );
}
