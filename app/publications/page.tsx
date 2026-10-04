import Folio from "../../components/Folio";
import Masthead from "../../components/Masthead";
import PubItem from "../../components/PubItem";
import { publications } from "../../lib/data";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("Publications", "Publications of Anam Ahmed, Lecturer in the Department of English at Leading University.", "/publications");

export default function Publications() {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);
  return (
    <>
      <Masthead label="Publications" path="/publications" title="Publications" lead="Published work, listed by year." />
      <div className="wrap section">
        {years.length > 0 ? (
          years.map((y) => (
            <Folio title={String(y)} id={`pub-${y}`} key={y}>
              {publications.filter((p) => p.year === y).map((p) => <PubItem key={p.id} p={p} />)}
            </Folio>
          ))
        ) : (
          <Folio title="Publications" id="pub-status">
            <p className="prose">There are no publications to list at present. The university faculty profile is the best place for current information.</p>
          </Folio>
        )}
      </div>
    </>
  );
}
