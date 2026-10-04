import type { Metadata } from "next";
import Link from "next/link";
import { nav } from "../lib/nav";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <section className="nf" aria-labelledby="nf-t">
      <div className="wrap stack" style={{ "--gap": "1.5rem", position: "relative" } as React.CSSProperties}>
        <p className="big" aria-hidden="true">404</p>
        <h1 className="t-h1" id="nf-t">This page could not be found.</h1>
        <p className="t-lead">The link may be incorrect or the page may have moved. Return to the home page, or continue to one of the sections below.</p>
        <div className="btn-row"><Link className="btn" href="/"><span>Back to home</span></Link><Link className="btn btn-ghost" href="/research"><span>Read the research interests</span></Link></div>
        <ul className="btn-row">{nav.map((n) => <li key={n.href}><Link className="link" href={n.href}><span>{n.label}</span></Link></li>)}</ul>
      </div>
    </section>
  );
}
