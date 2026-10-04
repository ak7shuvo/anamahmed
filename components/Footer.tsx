import Link from "next/link";
import { nav } from "../lib/nav";
import { profile } from "../lib/data";
import ProfileLinks from "./ProfileLinks";

export default function Footer() {
  return (
    <footer className="foot on-night">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <p className="foot-name">Anam Ahmed</p>
            <p className="foot-desc">{profile.role}, {profile.department}, {profile.institution}, {profile.city}.</p>
          </div>
          <nav aria-label="Footer">
            <h2>Portfolio</h2>
            <ul>{[{ href: "/", label: "Home" }, ...nav].map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
          </nav>
          <div>
            <h2>Profiles</h2>
            <ProfileLinks className="plinks plinks-col" />
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 {profile.name}</span>
          <span>Details from the Leading University faculty profile.</span>
        </div>
      </div>
    </footer>
  );
}
