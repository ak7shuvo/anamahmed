import Folio from "../../components/Folio";
import Masthead from "../../components/Masthead";
import PubItem from "../../components/PubItem";
import { publications } from "../../lib/data";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("Publications", "Publications of Anam Ahmed. No publication has been verified yet; entries are added only after checking against the publisher record.", "/publications");

export default function Publications() {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);
  return (
    <>
      <Masthead label="Publications" path="/publications" title="Publications" lead="A bibliography that lists only works checked against a publisher page, DOI or institutional repository." />
      <div className="wrap section">
        {years.length > 0 ? (
          years.map((y) => (
            <Folio title={String(y)} id={`pub-${y}`} key={y}>
              {publications.filter((p) => p.year === y).map((p) => <PubItem key={p.id} p={p} />)}
            </Folio>
          ))
        ) : (
          <>
            <Folio title="Status" id="pub-status" pending="No publication has been verified.">
              <div className="stack" style={{ "--gap": "1.25rem" } as React.CSSProperties}>
                <p className="prose">Nothing is listed because no work has yet been matched to a publisher page, a DOI or a repository record. Profiles that carry the same name belong to different people until proven otherwise, so none of their output is imported here.</p>
                <p className="note">To add a work, give its title, year, venue and a DOI or stable link. It will appear on this page, grouped by year, with a link and a copy-reference button.</p>
              </div>
            </Folio>
            <Folio title="Entry format" id="pub-format" note="A specimen of layout only.">
              <div className="specimen" role="note" aria-label="Format specimen, not a real publication">
                <span className="pub-type">Journal article · specimen, not a publication</span>
                <span className="sp-t">[Title of the work]</span>
                <span>[Author names] · [Year]</span>
                <span><em>[Journal or book title]</em>, [volume, pages]</span>
                <span>[DOI or stable link]</span>
              </div>
            </Folio>
          </>
        )}
      </div>
    </>
  );
}
