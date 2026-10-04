import Image from "next/image";
import Link from "next/link";
import ProfileLinks from "../components/ProfileLinks";
import { ExtLink } from "../components/ExtLink";
import { ArrowRight } from "../components/Icons";
import JsonLd from "../components/JsonLd";
import { bio, education, facebookLabel, links, profile, strands } from "../lib/data";
import { BASE_URL } from "../lib/site";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

// What each page holds, and whether it has confirmed content yet.
const ledger = [
  { href: "/publications", label: "Publications", state: "Awaiting confirmation" },
  { href: "/teaching", label: "Teaching", state: "Awaiting confirmation" },
  { href: "/activities", label: "Academic activities", state: "Awaiting confirmation" },
  { href: "/cv", label: "Curriculum vitae", state: "Awaiting approval" },
];

export default function Home() {
  const has = profile.portrait;
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: profile.role, url: BASE_URL, ...(has ? { image: `${BASE_URL}${has.src}` } : {}), worksFor: { "@type": "CollegeOrUniversity", name: profile.institution, address: { "@type": "PostalAddress", addressLocality: "Sylhet", addressCountry: "BD" } }, sameAs: [links.facultyProfile], alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.institution })) }} />
      <section className="hero" aria-labelledby="home-name">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow enter" style={d(0)}>Academic Portfolio</p>
            <h1 className="t-mega enter" id="home-name" style={d(80)}>{profile.name}</h1>
            <p className="hero-role enter" style={d(160)}>{profile.role} · {profile.department} · {profile.institution}</p>
            <p className="hero-lede enter" style={d(240)}>{profile.statement}</p>
            <p className="cred enter" style={d(300)}><span className="cred-t">{profile.credential.degree}</span><span className="cred-i">{profile.credential.institution}</span></p>
            <div className="btn-row enter" style={d(380)}>
              <Link className="btn" href="/research"><span>View My Research</span><ArrowRight className="ar" /></Link>
              <Link className="btn btn-ghost" href="/contact"><span>Get in Touch</span></Link>
            </div>
            <div className="enter" style={d(460)}><ProfileLinks /></div>
          </div>
          {has && (
            <figure className="portrait enter" style={d(200)}>
              <div className="plate" data-parallax="0.04">
                <span className="plate-blob" aria-hidden="true" />
                <div className="plate-img">
                  <Image src={has.src} alt={has.alt} width={has.width} height={has.height} priority quality={80} sizes="(min-width:1024px) 440px, (min-width:640px) 360px, 80vw" />
                </div>
              </div>
              <figcaption className="sr">{has.caption}</figcaption>
            </figure>
          )}
        </div>
      </section>

      <section className="sec" id="about" aria-labelledby="home-about">
        <div className="wrap">
          <div className="sec-head"><p className="eyebrow">About</p><h2 className="t-h2" id="home-about">About me</h2></div>
          <div className="about-grid">
            <div className="prose">
              <p>{bio[0]}</p>
              <p>{profile.intro}</p>
            </div>
            <dl className="facts facts-tight">
              <div><dt>Role</dt><dd>{profile.role}</dd></div>
              <div><dt>Department</dt><dd>{profile.department}</dd></div>
              <div><dt>Institution</dt><dd>{profile.institution}</dd></div>
              <div><dt>Location</dt><dd>{profile.city}</dd></div>
            </dl>
            <nav className="quick" aria-label="Quick links">
              <h3 className="quick-t">Quick links</h3>
              <ul>
                <li><Link className="link" href="/about"><span>Full biography</span><ArrowRight size={14} className="ar" /></Link></li>
                <li><Link className="link" href="/cv"><span>Curriculum vitae</span><ArrowRight size={14} className="ar" /></Link></li>
                <li><ExtLink className="link" href={links.facultyProfile} context="the faculty profile">Faculty profile</ExtLink></li>
                <li><ExtLink className="link" href={links.facebook} context={facebookLabel}>{facebookLabel}</ExtLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="sec sec-band" aria-labelledby="home-research">
        <div className="wrap">
          <div className="sec-head"><p className="eyebrow">Research</p><h2 className="t-h2" id="home-research">Research interests</h2><p className="label">Wording from the university faculty profile.</p></div>
          <ol className="rows" data-stagger="">
            {strands.map((s, n) => (
              <li key={s.title}>
                <Link className="row" href="/research">
                  <span className="row-no" aria-hidden="true">{String(n + 1).padStart(2, "0")}</span>
                  <span className="row-main"><span className="row-t">{s.title}</span><span className="row-d">{s.note}</span><span className="row-m">{s.items.join(" · ")}</span></span>
                  <ArrowRight size={18} className="ar row-ar" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec" aria-labelledby="home-edu">
        <div className="wrap split">
          <div className="sec-head"><p className="eyebrow">Education</p><h2 className="t-h2" id="home-edu">Education</h2><p className="label">Order as given by the university profile. Years pending.</p></div>
          <ol className="degrees timeline">
            {education.map((e) => (
              <li key={e.degree}><span className="d-t">{e.degree}</span><span className="d-f">{e.field}</span><span className="d-i">{e.institution}</span></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec sec-band" aria-labelledby="home-more">
        <div className="wrap split">
          <div className="sec-head"><p className="eyebrow">Still to come</p><h2 className="t-h2" id="home-more">Publications, teaching and activities</h2><p className="pend">Added only after confirmation by Anam Ahmed.</p></div>
          <ul className="ledger">
            {ledger.map((l) => (
              <li key={l.href}><Link href={l.href}><span className="l-t">{l.label}</span><span className="pend">{l.state}</span></Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec connect" aria-labelledby="home-connect">
        <div className="wrap connect-in">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="t-h2" id="home-connect">Let’s connect</h2>
            <p className="t-lead">Reach {profile.name} through the official {profile.institution} channels, or follow the page for English spoken and language-learning activities.</p>
          </div>
          <div className="stack" style={{ "--gap": "1.25rem" } as React.CSSProperties}>
            <div className="btn-row"><Link className="btn" href="/contact"><span>Get in Touch</span><ArrowRight className="ar" /></Link></div>
            <p className="label">{profile.city}</p>
          </div>
        </div>
      </section>
    </>
  );
}
