# Design Portfolio — Handoff & Contributor Guide

Handoff document for continuing development of **Aishwarya Srivastava's** portfolio.
Written to be read by GitHub Copilot (and any human/agent contributor). Follow the
rules below exactly.

> This file lives at `.github/copilot-instructions.md` so GitHub Copilot auto-loads
> it as repo-wide guidance. It is the source of truth for how to work in this repo.

---

## 1. Working rules & guardrails (READ FIRST)

1. **Work locally until explicitly asked to commit.** Make edits, run the build,
   verify — but do **NOT** `git commit` or `git push` until the user explicitly
   says "commit" / "push". Batch changes; commit only on command.
2. **Never touch global git or SSH config.** Commits are authored as **uxaishsri6**
   via **repo-local** config only:
   - `user.name = uxaishsri6`, `user.email = 268151558+uxaishsri6@users.noreply.github.com`
   - Auth uses a dedicated key forced per-repo: `core.sshCommand = "ssh -i ~/.ssh/uxaishsri6_ed25519 -o IdentitiesOnly=yes"`
   - Remote: `git@github.com:uxaishsri6/aishwarya-portfolio.git`
   - The machine's global identity is a different account (`apati_adobe`) — do not use it, do not run `gh auth` switches.
3. **Always run `npm run build` before committing.** It runs `astro check` first;
   the build must report **0 errors**. `npm run build` = typecheck gate + static build.
4. **Copy voice:** no em dashes (`—`). Use commas/colons/periods. Keep it warm,
   human, first-person, concise. Avoid AI-cliché phrasing.
5. **Never fabricate facts** (metrics, titles, clients). Use the résumé
   (`public/Aishwarya-Srivastava-Resume.pdf`) as source of truth. Mark
   enterprise/NDA specifics as "available on request".
6. **Theme parity:** every section must work in **light (day)** and **dark (night)**.
   Default theme is **dark** (see `initTheme` in `BaseLayout.astro`).
7. **Deploy is automatic on push** to `main` via GitHub Actions. Do not enable
   auto-merge or change deploy settings unless asked. The site is a **GitHub Pages
   project site**, so `base` = `/aishwarya-portfolio` (see gotchas).

---

## 2. Project overview

- **Stack:** [Astro](https://astro.build) v5 (static output), vanilla CSS (scoped
  per-component + `src/styles/global.css` tokens), a little vanilla JS in
  `BaseLayout.astro`. No UI framework.
- **Hosting:** GitHub Pages at **https://uxaishsri6.github.io/aishwarya-portfolio/**
  (repo `uxaishsri6/aishwarya-portfolio`, branch `main`).
- **Content:** case studies are Markdown in an Astro **content collection**.
- **Theme:** day/night. Cover, About, Work share one continuous animated sky
  (`SkyFX`); Process/Contact are the "ground".

### Commands

```bash
npm install
npm run dev       # http://localhost:4321/aishwarya-portfolio/  (note the base path)
npm run check     # astro check (typecheck) only
npm run build     # astro check + astro build  -> dist/   (must be 0 errors)
npm run preview   # serve the production build
```

---

## 3. File map (where to work)

### Config / infra
- `astro.config.mjs` — `site: https://uxaishsri6.github.io`, `base: /aishwarya-portfolio`.
  If a custom domain is added later, set `base: '/'` and `site` to the domain.
- `.github/workflows/deploy.yml` — CI build + Pages deploy on push to `main`.
- `.claude/launch.json` — local dev server config (name `aishwarya-portfolio`, port 4321).
- `tsconfig.json`, `package.json`.

### Pages
- `src/pages/index.astro` — home. Composes sections; wraps Hero + Marquee + About +
  Work in `.sky-world` (the shared continuous sky background). Contains the **Work**
  (case-study) section markup + styles and queries the content collection.
- `src/pages/work/[slug].astro` — case-study detail template (one page per study);
  renders Markdown body + prev/next nav. View-transition morph named `cover-<slug>`.

### Layout & global
- `src/layouts/BaseLayout.astro` — `<head>`, fonts, **top nav** (brand, links,
  theme toggle, **Résumé button**, **mobile hamburger menu**), footer, the
  **floating right dock**, and ALL client JS in one `<script>`:
  `initTheme` (defaults dark), theme toggle, reveal-on-scroll (+ hidden-tab
  fallback), cursor blob, magnetic buttons, nav scroll backdrop + scroll-spy,
  mobile menu toggle. JS re-runs on `astro:page-load` / `astro:after-swap`.
- `src/styles/global.css` — **design tokens** (`:root` = light, `[data-theme="dark"]`
  = dark): palette (blue + cream), fonts (`--font-sans` Inter, `--font-serif`
  Instrument Serif, `--font-mono` JetBrains Mono, `--font-hand` Caveat), `--nav-h`,
  radii, motion easing, reveal + reduced-motion rules.

### Components
- `src/components/Hero.astro` — cover (headline, subline, CTAs, jump sticker on a
  cloud, scroll cue). Background comes from `.sky-world`.
- `src/components/SkyFX.astro` — **shared sky layer** spanning `.sky-world`:
  drifting **clouds** (array, ~24), **swallow** birds (day), **twinkling stars** +
  **shooting stars** (night), and the **sun⇄moon** that arcs on a semicircle
  `offset-path` on theme toggle. Edit the arrays at the top to add/adjust elements.
- `src/components/Marquee.astro` — scrolling serif words band.
- `src/components/About.astro` — night/day section: bio (theme-aware), **stats**
  (5+ yrs / ~40% faster / 🏆 3 awards), **"My journey" timeline** (data array from
  résumé), and the **pointing sticker** on the right.
- `src/components/Process.astro` — "How I approach Design": 6 principles
  (`tenets` array) + hand-lettered takeaways + **brainstorm sticker** on the left.
- `src/components/Contact.astro` — full-bleed **garden/balcony footer** (day/night
  bg images, versioned filenames), "Let's talk", email, socials, Résumé, meta.
- `src/components/ProjectCard.astro` — the **sticky stacking** case-study card used
  in the Work section (uses `--i` index for the deck offset; `position: sticky`).

### Content (case studies)
- `src/content/config.ts` — collection schema: `order, title, cardTitle, tag, lede,
  metric, role, timeline, year, tools[], accent, cover?, draft`.
- `src/content/case-studies/*.md` — one file per study (real projects):
  `bt-pni, tata-neu-connect, landing-zone, assaya-healthcare, goodpack-logistics,
  enterprise-crm`. Add a file → new card + new `/work/<slug>` page automatically.

### Assets (`public/` — served from site root; reference with the base path)
- `public/images/` — cut-out stickers (`sticker-jump`, `sticker-point-left`,
  `sticker-point-right`, `sticker-desk`, `sticker-think`, `product-designer`,
  `sticker-brainstorm-v2`), clouds (`cloud-1.png`, `cloud-2.png`), and the
  Contact footer images (`contact-day-vN.jpg`, `contact-night-vN.jpg`).
  `public/images/README.md` explains cover images.
- `public/Aishwarya-Srivastava-Resume.pdf` — linked from nav + Contact.
- `public/favicon.svg`.

---

## 4. Gotchas learned the hard way (do not re-break)

- **Astro scoped CSS + theme selectors:** a selector like `[data-theme='dark'] .x`
  gets scoped and won't match `<html>`. Always write
  `:global([data-theme='dark']) .x` for theme overrides on `<html>`.
- **`position: sticky` breaks under `overflow: hidden`.** The Work card stack is
  sticky — never put `overflow: hidden` on `.work` or ancestors. Clip clouds on a
  child layer instead.
- **Image cache busting:** GitHub Pages/browsers cache by filename. When you
  **replace** an image (esp. Contact footer), **bump the filename version**
  (`-vN`) and update the reference, otherwise users see the old asset.
- **Global `img { max-width:100% }`** can beat component `max-width` due to scoping;
  if an image won't size, set it inline (`style="max-width:..."`).
- **Local dev URL needs the base path:** `localhost:4321/aishwarya-portfolio/`
  (root 404s).
- **IntersectionObserver doesn't fire while the tab is hidden** — the reveal system
  has a bounding-box fallback; keep it.
- **CSS `url()` for theme images** is hardcoded with the base
  (`/aishwarya-portfolio/images/...`) because CSS can't read `import.meta.env`.

---

## 5. Common tasks (recipes)

- **Add / edit a case study:** create `src/content/case-studies/<slug>.md` with the
  schema frontmatter; set `order`. Optional `cover:` = filename in `public/images/`.
- **Add a case-study cover/inline image:** drop file in `public/images/`, set
  `cover:` in frontmatter (ProjectCard + detail hero use it). Inline images go in
  the Markdown body.
- **Replace a footer image:** put new file in `public/images/` as
  `contact-day-vN+1.jpg` / `contact-night-vN+1.jpg` (keep both **same aspect ratio**,
  e.g. 1600×893, so theme toggle only swaps the scene), then update the two `url()`s
  in `Contact.astro`. Remove the old versioned files.
- **Cut out a new sticker (transparent + white die-cut border):** use Pillow —
  flood-fill the flat background from the corners to transparent, feather, then
  dilate the alpha to add a uniform white border, save to `public/images/`.
  (The project has done this repeatedly; keep the border ~13px for consistency.)
- **Change palette/fonts:** edit tokens in `src/styles/global.css` (`:root` and
  `[data-theme="dark"]`).
- **Add sky elements (clouds/birds/stars):** edit the arrays at the top of
  `SkyFX.astro`.

---

## 6. Still open / backlog

- **Real case-study visuals** — studies currently use accent-gradient placeholders
  with a number; add real (redacted if needed) screens as `cover:` + inline images.
- **Hard metrics per project** where shareable (adoption, task-time, conversion).
- Optional: higher-res `sticker-brainstorm` (current is ~500px).
- Consider dialing back sticker/animation density if it competes with the work.

---

## 7. Deploy checklist (only when the user says to ship)

1. `npm run build` → 0 errors.
2. `git add -A && git commit` (authored as uxaishsri6) and `git push origin main`.
3. GitHub Actions builds + deploys automatically; verify at
   `https://uxaishsri6.github.io/aishwarya-portfolio/`.
