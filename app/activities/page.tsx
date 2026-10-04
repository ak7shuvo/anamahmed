import Folio from "../../components/Folio";
import Masthead from "../../components/Masthead";
import PendingList from "../../components/PendingList";
import { pending } from "../../lib/data";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("Academic activities", "Conferences, seminars, workshops, academic service, awards and research projects of Anam Ahmed. None has been confirmed yet.", "/activities");

export default function Activities() {
  return (
    <>
      <Masthead label="Academic activities" path="/activities" title="Academic activities" lead="Talks, workshops, service, awards and projects, listed once each has been confirmed." />
      <div className="wrap section">
        <Folio title="To be confirmed" id="a-pending" pending="No activity has been confirmed, so none is listed.">
          <PendingList items={pending.activities} />
        </Folio>
      </div>
    </>
  );
}
