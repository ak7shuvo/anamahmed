import localFont from "next/font/local";

// Self-hosted (SIL Open Font License), so builds never depend on Google Fonts.
// Display · Instrument Serif: a condensed, high-contrast serif for the name, titles and margin headings.
export const display = localFont({
  src: [
    { path: "./fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

// Reading · Source Serif 4 (variable weight): body text, labels and navigation. Roman and italic carry the hierarchy.
export const text = localFont({
  src: [
    { path: "./fonts/source-serif-4-latin-wght-normal.woff2", weight: "200 900", style: "normal" },
    { path: "./fonts/source-serif-4-latin-wght-italic.woff2", weight: "200 900", style: "italic" },
  ],
  variable: "--font-text",
  display: "swap",
  fallback: ["Iowan Old Style", "Georgia", "serif"],
});
