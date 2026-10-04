import { Facebook } from "../../components/Icons";
import Folio from "../../components/Folio";
import Masthead from "../../components/Masthead";
import { facebookLabel, links } from "../../lib/data";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("Academic activities", "Activities of Anam Ahmed connected with English spoken and English language teaching.", "/activities");

export default function Activities() {
  return (
    <>
      <Masthead label="Academic activities" path="/activities" title="Academic activities" lead="Activities connected with English language teaching and learning." />
      <div className="wrap section">
        <Folio title="English spoken" id="a-spoken">
          <ul className="ledger">
            <li><a href={links.facebook} target="_blank" rel="noopener noreferrer"><span className="l-t l-ico"><Facebook size={22} />{facebookLabel}</span><span className="label">Facebook page<span className="sr"> (opens in a new tab)</span></span></a></li>
          </ul>
          <p className="prose" style={{ marginTop: "1rem" }}>The page relates to English spoken and English language teaching activities.</p>
        </Folio>
      </div>
    </>
  );
}
