import Link from "next/link";
import Folio from "../../components/Folio";
import Masthead from "../../components/Masthead";
import PendingList from "../../components/PendingList";
import { pending, profile } from "../../lib/data";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("Teaching", "Teaching of Anam Ahmed, Lecturer in the Department of English at Leading University. Course details and teaching approach are pending confirmation.", "/teaching");

export default function Teaching() {
  return (
    <>
      <Masthead label="Teaching" path="/teaching" title="Teaching" lead="Courses, approach and mentoring, to be added in the lecturer's own words." />
      <div className="wrap section">
        <Folio title="Post" id="t-post">
          <p className="prose">{profile.role} in the {profile.department}, {profile.institution}. The university profile lists the research interests on the <Link className="ink-link" href="/research">research page</Link>; it does not list courses.</p>
        </Folio>
        <Folio title="To be confirmed" id="t-pending" pending="No course, syllabus or teaching statement has been supplied.">
          <PendingList items={pending.teaching} />
        </Folio>
      </div>
    </>
  );
}
