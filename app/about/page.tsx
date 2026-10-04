import { ExtLink } from "../../components/ExtLink";
import Folio from "../../components/Folio";
import Masthead from "../../components/Masthead";
import { bio, education, links, profile, sources } from "../../lib/data";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("About", "Anam Ahmed, Lecturer in the Department of English at Leading University, Sylhet: position and educational background as listed by the university.", "/about");

export default function About() {
  return (
    <>
      <Masthead label="About" path="/about" title="About" lead="A short biography drawn from the university's own faculty profile." />
      <div className="wrap section">
        <Folio title="Position" id="about-position">
          <dl className="facts">
            <div><dt>Role</dt><dd>{profile.role}</dd></div>
            <div><dt>Department</dt><dd>{profile.department}</dd></div>
            <div><dt>Institution</dt><dd>{profile.institution}, {profile.city}</dd></div>
            <div><dt>Source</dt><dd><ExtLink className="ink-link" href={links.facultyProfile} context="the faculty profile">Leading University faculty profile</ExtLink>, read {sources.checked}</dd></div>
          </dl>
        </Folio>
        <Folio title="Biography" id="about-bio" pending="Pending approval of a final biography by Anam Ahmed.">
          <div className="prose">{bio.map((p) => <p key={p}>{p}</p>)}</div>
        </Folio>
        <Folio title="Education" id="about-edu" note="Most recent first, as the university profile lists them." pending="Years and thesis titles are not stated in the source.">
          <ol className="degrees">
            {education.map((e) => (
              <li key={e.degree}><span className="d-t">{e.degree}</span><span className="d-f">{e.field}</span><span className="d-i">{e.institution}</span></li>
            ))}
          </ol>
        </Folio>
      </div>
    </>
  );
}
