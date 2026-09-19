# Aishwarya Srivastava — Portfolio

A static, animated design portfolio built with [Astro](https://astro.build).
Three main sections on the home page — **Banner (Hero)**, **About**, and
**Case studies** — plus a Process and Contact section. Each case study opens as
its own separate page at `/work/<slug>`.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321/aishwarya-portfolio
```

## Build

```bash
npm run build      # outputs static site to dist/
npm run preview    # preview the production build
```

## Editing content

Case studies are content files — one Markdown file per study in
`src/content/case-studies/`. Add a file, get a new card on the home grid **and**
a new detail page automatically. Frontmatter fields (title, tag, role, timeline,
year, tools, accent, cover, order, draft) are defined in `src/content/config.ts`.

- **Copy** for Hero / About / Process / Contact lives in the matching component
  in `src/components/`.
- **Images** go in `public/images/` — see the README there.
- **Colors & fonts** are CSS variables at the top of `src/styles/global.css`.
  Edit `:root` (light) and `[data-theme="dark"]` (dark) to rebrand.

## Deploy to GitHub Pages

1. Create a GitHub repo named **`aishwarya-portfolio`** and push this project.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and
   choose **GitHub Actions**.
3. Every push to `main` triggers `.github/workflows/deploy.yml`, which builds and
   publishes the site.

Your site will be live at
`https://<your-username>.github.io/aishwarya-portfolio/`.

> **Important:** in `astro.config.mjs`, set `site` to
> `https://<your-username>.github.io`. The `base` is already set to
> `/aishwarya-portfolio`. If you later add a custom domain, set `base: '/'` and
> `site` to your domain.
