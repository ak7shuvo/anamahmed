import { ExtLink } from "../../components/ExtLink";
import Folio from "../../components/Folio";
import Masthead from "../../components/Masthead";
import { Facebook } from "../../components/Icons";
import { facebookLabel, links } from "../../lib/data";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("Contact", "How to reach Anam Ahmed through official Leading University channels.", "/contact");

export default function Contact() {
  return (
    <>
      <Masthead label="Contact" path="/contact" title="Let’s connect" lead="Through the university’s official channels, and the page for English spoken and language-learning activities." />
      <div className="wrap section">
        <Folio title="Official channels" id="c-official">
          <ul className="ledger">
            <li><a href={links.facultyProfile} target="_blank" rel="noopener noreferrer"><span className="l-t">Faculty profile</span><span className="label">Leading University<span className="sr"> (opens in a new tab)</span></span></a></li>
            <li><a href={links.department} target="_blank" rel="noopener noreferrer"><span className="l-t">Department of English</span><span className="label">Leading University<span className="sr"> (opens in a new tab)</span></span></a></li>
            <li><a href="https://lus.ac.bd/contact/" target="_blank" rel="noopener noreferrer"><span className="l-t">University contact page</span><span className="label">Leading University<span className="sr"> (opens in a new tab)</span></span></a></li>
            <li><a href={links.facebook} target="_blank" rel="noopener noreferrer"><span className="l-t l-ico"><Facebook size={22} />{facebookLabel}</span><span className="label">Facebook page<span className="sr"> (opens in a new tab)</span></span></a></li>
          </ul>
        </Folio>
        <Folio title="Email and phone" id="c-direct">
          <p className="prose">Email and phone details are listed on the <ExtLink className="ink-link" href={links.facultyProfile} context="the faculty profile">university faculty profile</ExtLink>.</p>
        </Folio>
      </div>
    </>
  );
}
