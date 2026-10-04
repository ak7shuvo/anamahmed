import Folio from "../../components/Folio";
import Masthead from "../../components/Masthead";
import PendingList from "../../components/PendingList";
import { education, pending, profile } from "../../lib/data";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("Curriculum vitae", "Curriculum vitae of Anam Ahmed, Lecturer in the Department of English at Leading University: current post and education as listed by the university.", "/cv");

export default function CV() {
  return (
    <>
      <Masthead label="Curriculum vitae" path="/cv" title="Curriculum vitae" lead="The confirmed parts of a CV, set out in the usual order." />
      <div className="wrap section">
        <Folio title="Current post" id="cv-post">
          <dl className="facts">
            <div><dt>Position</dt><dd>{profile.role}</dd></div>
            <div><dt>Department</dt><dd>{profile.department}</dd></div>
            <div><dt>Institution</dt><dd>{profile.institution}, {profile.city}</dd></div>
          </dl>
        </Folio>
        <Folio title="Education" id="cv-edu" pending="Years are not stated in the source.">
          <ol className="degrees timeline">
            {education.map((e) => (
              <li key={e.degree}><span className="d-t">{e.degree}</span><span className="d-f">{e.field}</span><span className="d-i">{e.institution}</span></li>
            ))}
          </ol>
        </Folio>
        <Folio title="Not yet supplied" id="cv-pending" pending="Publications, teaching and activities live on their own pages.">
          <PendingList items={pending.cv} />
        </Folio>
        <Folio title="Download" id="cv-dl" pending="No approved CV file exists yet.">
          <p className="prose">A dated, downloadable CV will be offered here only after Anam Ahmed approves one. Until then, this page is the CV.</p>
        </Folio>
      </div>
    </>
  );
}
