import Folio from "../../components/Folio";
import Masthead from "../../components/Masthead";
import { education, profile } from "../../lib/data";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("Curriculum vitae", "Curriculum vitae of Anam Ahmed, Lecturer in the Department of English at Leading University: current post and education as listed by the university.", "/cv");

export default function CV() {
  return (
    <>
      <Masthead label="Curriculum vitae" path="/cv" title="Curriculum vitae" lead="Current post and education." />
      <div className="wrap section">
        <Folio title="Current post" id="cv-post">
          <dl className="facts">
            <div><dt>Position</dt><dd>{profile.role}</dd></div>
            <div><dt>Department</dt><dd>{profile.department}</dd></div>
            <div><dt>Institution</dt><dd>{profile.institution}, {profile.city}</dd></div>
          </dl>
        </Folio>
        <Folio title="Education" id="cv-edu">
          <ol className="degrees timeline">
            {education.map((e) => (
              <li key={e.degree}><span className="d-t">{e.degree}</span><span className="d-f">{e.field}</span><span className="d-i">{e.institution}</span></li>
            ))}
          </ol>
        </Folio>
      </div>
    </>
  );
}
