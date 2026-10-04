import Folio from "../../components/Folio";
import Masthead from "../../components/Masthead";
import { ExtLink } from "../../components/ExtLink";
import { links, strands } from "../../lib/data";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("Research", "Research interests of Anam Ahmed, Lecturer in English at Leading University: second-language reading and writing, teacher education, critical thinking and English for specific purposes.", "/research");

export default function Research() {
  return (
    <>
      <Masthead label="Research" path="/research" title="Research interests" lead="Second-language learning, the teaching of English, and the habits of mind that go with both." />
      <div className="wrap section">
        <Folio title="Interests" id="r-int" note={<>Drawn from the <ExtLink className="ink-link" href={links.facultyProfile} context="the faculty profile">university faculty profile</ExtLink>.</>}>
          <div data-stagger="">
            {strands.map((s, n) => (
              <div className="strand" key={s.title}>
                <span className="s-no" aria-hidden="true">{String(n + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p className="s-note">{s.note}</p>
                <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </Folio>
      </div>
    </>
  );
}
