import Link from "next/link";
import Folio from "../../components/Folio";
import Masthead from "../../components/Masthead";
import { profile } from "../../lib/data";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("Teaching", "Teaching of Anam Ahmed, Lecturer in the Department of English at Leading University, Sylhet.", "/teaching");

export default function Teaching() {
  return (
    <>
      <Masthead label="Teaching" path="/teaching" title="Teaching" lead="English language teaching in the Department of English, Leading University." />
      <div className="wrap section">
        <Folio title="Post" id="t-post">
          <p className="prose">{profile.role} in the {profile.department}, {profile.institution}, {profile.city}. The teaching and learning of English as a second language runs through the interests described on the <Link className="ink-link" href="/research">research page</Link>.</p>
        </Folio>
      </div>
    </>
  );
}
