import type { Publication } from "../lib/data";
import { typeLabel } from "../lib/data";
import { ExtLink } from "./ExtLink";
import CopyButton from "./CopyButton";

const authorList = (names: string[]) => (names.length < 3 ? names.join(" & ") : `${names.slice(0, -1).join(", ")} & ${names[names.length - 1]}`);

/** Plain-text reference used by the copy button. Built only from fields in lib/data.ts. */
export const reference = (p: Publication) =>
  `${authorList(p.authors)} (${p.year}). ${p.title}. ${p.venue}${p.detail ? `, ${p.detail}` : ""}.${p.doi ? ` https://doi.org/${p.doi}` : p.url ? ` ${p.url}` : ""}`;

/** One bibliography entry. Every visible field comes from lib/data.ts; nothing is computed except formatting. */
export default function PubItem({ p }: { p: Publication }) {
  const href = p.doi ? `https://doi.org/${p.doi}` : p.url;
  return (
    <article className="pub" id={p.id}>
      <div>
        <span className="pub-year">{p.year}</span>
        <p className="pub-type">{typeLabel[p.type]}</p>
      </div>
      <div className="stack" style={{ "--gap": ".5rem" } as React.CSSProperties}>
        <h3 className="pub-title">{p.title}</h3>
        <p className="pub-meta">{authorList(p.authors)}</p>
        <p><span className="pub-venue">{p.venue}</span>{p.detail && <span className="pub-meta">, {p.detail}</span>}</p>
        <div className="pub-actions">
          {href && <ExtLink className="link" href={href} context={p.title}>{p.doi ? `DOI ${p.doi}` : "Source"}</ExtLink>}
          <CopyButton text={reference(p)} label="Copy reference" />
        </div>
      </div>
    </article>
  );
}
