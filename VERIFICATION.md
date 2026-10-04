# Before launch — items to confirm with Anam Ahmed

Source read 4 October 2026: https://lus.ac.bd/faculty-of-english/ and https://lus.ac.bd/author/anam/

## Where the live sources differ from the dossier

| Dossier says | University profile says | What the site does |
|---|---|---|
| Interests: Comparative Literature, Modern Literature, Critical Theory (ResearchGate lead) | Second Language Reading and Writing, MI, Teacher Education, Lesson Planning, Critical Thinking, SEL, SLA, ESP | Uses the university list. The dossier's three themes are **not shown**. |
| "On study leave" | Not shown on the faculty list or the profile page | **Not shown.** |
| Draft bio uses "her" | The profile's bio uses "his" | Pronoun-free wording throughout. |
| Education unknown | Second M.A. in TESL (Kent State University, USA); M.A. English Literature (Khulna University); B.A. (Hons) English Language and Literature (Jatiya Kabi Kazi Nazrul Islam University) | Shown, attributed, **no years**. |

The ResearchGate URL in the dossier is probably another person; confirm before it is used anywhere.

## Needs an answer

1. Preferred name, pronouns, and an approved biography.
2. Is the dossier's "study leave" status correct and public? (Left out until confirmed.)
3. Degree years and thesis titles.
4. Research interests: confirm the university list is current; say whether literature-focused themes also apply.
5. Publications (title, year, venue, DOI/link), ORCID / Google Scholar / ResearchGate if they exist.
6. Courses, teaching statement, supervision.
7. Conferences, workshops, service, awards, grants, projects.
8. Approved email and phone. The university profile publishes a phone number and an email; **neither is repeated here**.
9. Approval of the portrait now on the cover (supplied by the user; confirm it may be published), and the CV file.
10. Confirmation that the LinkedIn URL in the dossier is theirs (not linked).
11. Final read-through of every page before publishing.

## Technical to-do

- Set `NEXT_PUBLIC_SITE_URL` before launch (indexing stays off until then).
- Run `npm run verify` on a networked machine (see CHANGELOG for what was and was not run here).

## Verification log — 1.1.0 (4 October 2026)

Run: `node scripts/check-tokens.mjs` (pass, 5.30:1 lowest); syntax transpile of changed .ts/.tsx (0 errors); the real components,
`MotionRoot` and `globals.css` bundled with esbuild against stubbed `next/*` and driven in headless Chromium 141: screenshots of home
at 1440 / 1024 / 768 / 390 px in light and dark, no horizontal overflow on 8 routes × 2 themes × 4 widths, reduced-motion state,
JS-failure fail-safe, skip link and focus rings, mobile menu (open, inert page, Esc, focus return), stagger, parallax, strand hover.

**Not run** (npm registry blocked here): `npm ci`, `tsc --noEmit` with real React/Next types, `eslint`, `next build`, the real Next
image optimizer and fonts, true server-rendered no-JS output, Lighthouse/axe, Safari/Firefox, a real phone.
Run `npm ci && npm run verify` on a networked machine before publishing.
