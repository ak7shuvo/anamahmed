import Link from "next/link";
import { nav } from "../lib/nav";
import { links, profile, sources } from "../lib/data";

export default function Footer() {
  return (
    <footer className="foot on-night">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <p className="foot-name">Anam <em>Ahmed</em></p>
            <p style={{ marginTop: 18, maxWidth: "40ch" }}>{profile.role}, {profile.department}, {profile.institution}, {profile.city}.</p>
          </div>
          <nav aria-label="Footer">
            <h2>Portfolio</h2>
            <ul>{[{ href: "/", label: "Home" }, ...nav].map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
          </nav>
          <div>
            <h2>Official sources</h2>
            <ul>
              <li><a href={links.facultyProfile} target="_blank" rel="noopener noreferrer">Faculty profile<span className="sr"> (opens in a new tab)</span></a></li>
              <li><a href={links.department} target="_blank" rel="noopener noreferrer">Department of English<span className="sr"> (opens in a new tab)</span></a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 {profile.name}</span>
          <span>Drawn from the university faculty profile as read on {sources.checked}.</span>
        </div>
      </div>
    </footer>
  );
}
