import type { ReactNode } from "react";
import Link from "next/link";
import JsonLd from "./JsonLd";
import { BASE_URL } from "../lib/site";

/** Inner-page masthead: breadcrumb, page title and lead. */
export default function Masthead({ label, path, title, lead }: { label: string; path: string; title: ReactNode; lead?: ReactNode }) {
  return (
    <header className="mast">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: label, item: `${BASE_URL}${path}` }] }} />
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <ol><li><Link href="/">Home</Link></li><li><span aria-current="page">{label}</span></li></ol>
        </nav>
        <h1 className="t-h1 enter" style={{ "--d": "60ms" } as React.CSSProperties}>{title}</h1>
        {lead && <p className="t-lead enter" style={{ "--d": "160ms" } as React.CSSProperties}>{lead}</p>}
      </div>
    </header>
  );
}
