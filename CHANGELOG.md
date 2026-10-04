# Changelog

## 1.2.0 — 4 October 2026

Hero: Kent State credential added (`profile.credential`, wording from the university faculty profile, no year); hero now sits on a
paper wash with a brass double rule, brass portrait frame, brass ink underline and a brass-ruled credential note.
Colour grade: warmer ivory paper, deeper wine (#5A1427), brass accent token, aubergine-black dark theme and footer; token guard
green (lowest 6.19:1). Navbar: staggered entrance, label roll on hover/focus, brass underline and current-page dot, brass hairline
once scrolled, wine fill-wipe on the Menu button. All transform/opacity; off under reduced motion.
Verified: token guard, harness screenshots (1440 light/dark, 390), no overflow. Not run: npm ci / typecheck / lint / build.

## 1.1.0 — 4 October 2026

**Portrait.** Supplied photo (912 × 1136, white studio background, face centred, sharp) cropped to 4:5 and saved as
`public/images/anam-ahmed-portrait.{jpg,webp,avif}` (900 × 1125; 103 / 59 / 42 KB). Set as `profile.portrait` in `lib/data.ts`
with descriptive alt text and the neutral caption "Anam Ahmed". Rendered with `next/image` (priority, explicit size, `sizes`,
AVIF/WebP negotiated by Next). Editorial plate: offset oxblood hairline frame, a slight desaturate/sepia, and on light theme the
white backdrop is multiplied into the paper tone so the photo sits on the page rather than on a white rectangle; on dark theme it is
dimmed instead. Placement: beside the name from 720 px up; right-aligned under the name on phones.

**Motion** (all transform/opacity, CSS plus the existing `MotionRoot`; all off under `prefers-reduced-motion`; content shows if JS fails):
cover sequence (name lines, portrait clip-path wipe with a 1.04 → 1 settle, frame slides out, statement, intro, buttons; about 1.5 s);
portrait parallax (desktop only); gentle stagger of the Contents and Research lines (`data-stagger`, opacity + 8 px, once);
strand hover/focus (title shifts 6 px, bullets slide 5 px); quiet route fade (420 ms); brand-mark hairline echo; nav underline that
enters from the left and leaves to the right, also on keyboard focus; one-time ink underline under "Ahmed".
Hover shifts on Contents, ledger and mobile-menu rows now use `transform` instead of animating `padding`.

**Polish.** Paper-grain token (`--grain`, CSS only, 4.5–5 % opacity, inverted on dark, hidden in print and reduced motion);
optical left alignment of the name; widows/orphans; dark footer hairline and back-to-top border so they separate from the page;
tablet (720–1039 px) cover reworked.

Checks run in the build environment (no network, so no `npm ci`, no real Next build): see VERIFICATION.md.

## 1.0.0 — 4 October 2026

New site built from the structure of the Shoeb-Ur-Rahman v2.0 reference. Kept: Next 16 App Router, one stylesheet of tokens,
self-hosted fonts, theme toggle, accessible mobile sheet with focus containment, skip link, reading progress, back-to-top,
JSON-LD, noindex-until-real-URL logic, CI workflow, token/contrast guard. Replaced: palette, type roles, layout (marginalia),
all copy and data. Removed: map, charts, publication explorer, projects/books/locations/journey pages, mono type, Shoeb images.

Checks run in the build environment (no network, so no `npm ci`):
- `node scripts/check-tokens.mjs` — pass; no colour literals outside tokens; lowest text contrast 5.30:1 (light and dark).
- TypeScript syntax transpile of every .ts/.tsx file — 0 errors.
- All 8 routes server-rendered with React 19 (stubbed `next/*`) — no runtime errors.
- Headless Chrome screenshots at 1440 and 390 px (home, research, about, CV, publications) — no horizontal overflow.

Not run: `tsc --noEmit` with real types, `eslint`, `next build`, dark-theme and tablet visual passes, keyboard and
screen-reader testing, Lighthouse/axe, the live mobile menu sheet and scroll animations.
