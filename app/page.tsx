import Image from "next/image";
import Link from "next/link";
import Folio from "../components/Folio";
import { ArrowRight } from "../components/Icons";
import JsonLd from "../components/JsonLd";
import { education, links, profile, strands } from "../lib/data";
import { nav } from "../lib/nav";
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
      <section className="cover" aria-labelledby="home-name">
        <div className="wrap">
          <p className="cover-strip enter" style={d(0)}>
            <span>Academic portfolio</span>
            <span>{profile.department} · {profile.institution}, {profile.city}</span>
          </p>
          <span className="cover-rule" aria-hidden="true" />
          <div className={`cover-head${has ? " has-portrait" : ""}`}>
            <h1 className="t-mega" id="home-name">
              <span className="ln"><span style={d(80)}>Anam</span></span>
              <span className="ln two"><span style={d(200)}><span className="ink">Ahmed</span></span></span>
            </h1>
            {has && (
              <figure className="portrait">
                <div className="plate" data-parallax="0.05">
                  <span className="plate-frame" aria-hidden="true" />
                  <div className="plate-img">
                    <Image src={has.src} alt={has.alt} width={has.width} height={has.height} priority quality={80} sizes="(min-width:1280px) 320px, (min-width:720px) 22vw, 240px" />
                  </div>
                </div>
                <figcaption className="label enter" style={{ ...d(820), "--dur": "700ms" } as React.CSSProperties}>{has.caption}</figcaption>
              </figure>
            )}
          </div>
          <Folio title={profile.role} id="home-role" note={`${profile.department}, ${profile.institution}`}>
            <div className="cover-body">
              <p className="statement enter" style={{ ...d(560), "--dur": "700ms" } as React.CSSProperties}>{profile.statement}</p>
              <div className="stack" style={{ "--gap": "1.5rem" } as React.CSSProperties}>
                <p className="cred enter" style={{ ...d(620), "--dur": "700ms" } as React.CSSProperties}><span className="cred-t">{profile.credential.degree}</span><span className="cred-i">{profile.credential.institution}</span></p>
                <div className="prose enter" style={{ ...d(660), "--dur": "700ms" } as React.CSSProperties}><p>{profile.intro}</p></div>
                <div className="btn-row enter" style={{ ...d(760), "--dur": "700ms" } as React.CSSProperties}>
                  <Link className="btn" href="/research"><span>Read the research interests</span><ArrowRight className="ar" /></Link>
                  <Link className="btn btn-ghost" href="/about"><span>About</span></Link>
                </div>
              </div>
            </div>
          </Folio>
          <Folio title="Contents" id="home-contents">
            <ol className="contents" data-stagger="">
              {nav.map((n) => (
                <li key={n.href}><Link href={n.href}><span className="c-t">{n.label}</span><span className="c-d">{n.d}</span></Link></li>
              ))}
            </ol>
          </Folio>
        </div>
      </section>

      <section className="section" aria-label="Research and education">
        <div className="wrap">
          <Folio title="Research interests" id="home-research" note="Wording from the university faculty profile.">
            <div data-stagger="">
              {strands.map((s) => (
                <div className="strand compact" key={s.title}>
                  <h3>{s.title}</h3>
                  <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "1.5rem" }}><Link className="link" href="/research"><span>More on the research page</span><ArrowRight className="ar" /></Link></p>
          </Folio>
          <Folio title="Education" id="home-edu" note="Order as given by the university profile. Years pending.">
            <ol className="degrees">
              {education.map((e) => (
                <li key={e.degree}><span className="d-t">{e.degree}, {e.field}</span><span className="d-i">{e.institution}</span></li>
              ))}
            </ol>
          </Folio>
          <Folio title="Still to come" id="home-ledger" pending="Added only after confirmation by Anam Ahmed.">
            <ul className="ledger">
              {ledger.map((l) => (
                <li key={l.href}><Link href={l.href}><span className="l-t">{l.label}</span><span className="pend">{l.state}</span></Link></li>
              ))}
            </ul>
          </Folio>
        </div>
      </section>
    </>
  );
}
