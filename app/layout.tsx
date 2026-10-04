import "./globals.css";
import type { Metadata, Viewport } from "next";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import JsonLd from "../components/JsonLd";
import { display, text } from "./fonts";
import { BASE_URL, OG_IMAGE, SHOULD_INDEX, SITE_NAME } from "../lib/site";
import { profile } from "../lib/data";

const title = `${SITE_NAME} — Lecturer in English, Leading University, Sylhet`;
const description = "Academic portfolio of Anam Ahmed, Lecturer in the Department of English at Leading University, Sylhet, Bangladesh: second-language learning, teacher education and critical thinking in the English classroom.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: title, template: `%s | ${SITE_NAME}` },
  description,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  keywords: ["Anam Ahmed", "Leading University", "Department of English", "Sylhet", "second language acquisition", "teacher education", "TESL", "English language teaching"],
  alternates: { canonical: "/" },
  openGraph: { title, description, type: "profile", url: "/", siteName: SITE_NAME, locale: "en", images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  formatDetection: { telephone: false, address: false, email: false },
  // Preview deployments and the example.com placeholder are never indexed.
  robots: SHOULD_INDEX ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F4EE" },
    { media: "(prefers-color-scheme: dark)", color: "#161314" },
  ],
};

// Before first paint: (1) apply a stored theme choice, (2) enable rule-drawing styles only when JS runs, and give up
// after 2.5 s if the motion module never starts, so a script failure can never leave anything hidden.
const boot = `(function(d){var r=d.documentElement;try{var t=localStorage.getItem('aa-theme');if(t==='light'||t==='dark')r.dataset.theme=t}catch(e){}r.classList.add('js');setTimeout(function(){if(!r.classList.contains('motion-ready'))r.classList.remove('js')},2500)})(document)`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`} suppressHydrationWarning>
      <head>
        {/* Inline and synchronous on purpose: it must run before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: BASE_URL, inLanguage: "en", about: { "@type": "Person", name: profile.name, jobTitle: profile.role, worksFor: { "@type": "CollegeOrUniversity", name: profile.institution } } }} />
        <div className="progress" aria-hidden="true"><span data-scroll-progress="" /></div>
        <SiteHeader />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
