# Anam Ahmed — Academic Portfolio · v1.0 "Marginalia"

Academic portfolio for Anam Ahmed, Lecturer, Department of English, Leading University, Sylhet. Built on the architecture of
the Shoeb-Ur-Rahman v2.0 reference (Next.js App Router, one global stylesheet, self-hosted fonts, no UI libraries, same quality
gates) with a new design system and information architecture.

**Stack:** Next.js 16.3.1 · React 19.2.8 · TypeScript · no runtime dependencies beyond `next`, `react`, `react-dom`.

## Run it (Node ≥ 20.9; `.nvmrc` = 22)

```bash
npm ci
npm run dev                 # http://localhost:3000
```

```bash
cp .env.example .env.local  # set NEXT_PUBLIC_SITE_URL, no trailing slash
npm run build
npm run start
```

```bash
npm run verify              # typecheck + lint + token/contrast check + build
```

While `NEXT_PUBLIC_SITE_URL` is unset the site is served `noindex` with a blocking `robots.txt`.

## Pages

`/` cover · `/about` · `/research` · `/publications` · `/teaching` · `/activities` · `/cv` · `/contact`

## Adding confirmed content

Everything is in `lib/data.ts`; no component needs editing.

| To add | Edit |
|---|---|
| Portrait | files in `public/images/anam-ahmed-portrait.*`; edit `profile.portrait = { src, width, height, alt, caption }` in `lib/data.ts`; set it to `null` to remove it (the cover adapts) |
| A publication | push an object onto `publications`; `/publications` then groups entries by year with DOI link and copy-reference |
| Courses, activities, CV items | replace the matching `pending` rows with real content and add a list to the page |
| Another degree or a year | `education` |

## Design notes

- **Marginalia layout.** Section titles sit in the left margin (stacked on mobile); content in the column. Anything awaiting
  confirmation is footnoted with a dagger (†).
- **Type.** Instrument Serif for the name and titles, Source Serif 4 for text, labels and navigation. Roman/italic carry hierarchy.
- **Colour.** Warm paper, charcoal ink, one oxblood accent; light and dark themes (stored under `aa-theme`).
- **Motion.** One entrance (the name rises); hairline rules draw as sections arrive. Content is never hidden by scroll reveals.
  Respects `prefers-reduced-motion`.

See `VERIFICATION.md` for what must be confirmed before launch and `CHANGELOG.md` for the build record.
