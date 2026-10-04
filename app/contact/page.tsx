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
        <Folio title="Email and phone" id="c-direct" pending="Not published until Anam Ahmed approves them.">
          <p className="prose">The faculty profile carries contact details of its own. This site repeats none of them without the lecturer&rsquo;s approval. Use the <ExtLink className="ink-link" href={links.facultyProfile} context="the faculty profile">faculty profile</ExtLink> for the university&rsquo;s listed details.</p>
        </Folio>
        <Folio title="Scholarly profiles" id="c-profiles" pending="Awaiting confirmation that each profile belongs to this lecturer.">
          <p className="prose">ORCID, Google Scholar, ResearchGate and similar links appear here once ownership is confirmed. Several people share this name, so none is linked on a guess.</p>
        </Folio>
      </div>
    </>
  );
}
