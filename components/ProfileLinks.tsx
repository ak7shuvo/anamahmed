import { facebookLabel, links } from "../lib/data";
import { ArrowUpRight, Facebook } from "./Icons";

/** Official profile links: opens in a new tab and says so to screen readers. */
export default function ProfileLinks({ className = "plinks" }: { className?: string }) {
  return (
    <ul className={className} aria-label="Profiles">
      <li><a href={links.facultyProfile} target="_blank" rel="noopener noreferrer"><ArrowUpRight size={15} /><span>Faculty profile</span><span className="sr"> (opens in a new tab)</span></a></li>
      <li><a href={links.department} target="_blank" rel="noopener noreferrer"><ArrowUpRight size={15} /><span>Department of English</span><span className="sr"> (opens in a new tab)</span></a></li>
      <li><a href={links.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={15} /><span>{facebookLabel}</span><span className="sr"> on Facebook (opens in a new tab)</span></a></li>
    </ul>
  );
}
