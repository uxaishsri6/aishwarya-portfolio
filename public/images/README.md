# Images

Drop your images in this folder. They are served from the site root, so a file
`about.jpg` here is referenced in code as `/images/about.jpg` (the `base` path is
added automatically).

## What the site looks for

Case study covers are optional. To add one, set `cover:` in the case study's
markdown frontmatter (in `src/content/case-studies/`) to the filename, e.g.:

```yaml
cover: "wayfare-cover.jpg"
```

Suggested files (all optional — the site falls back to generated accent art):

- `wayfare-cover.jpg`
- `tata-neu-connect-cover.jpg`
- `termax/slide-01.png` (the Termax cover and opening slide)
- `landing-zone-cover.jpg`
- `wingman-cover.jpg`
- `payment-gateway-cover.jpg`
- `about.jpg` (optional portrait for the About section)

Recommended cover size: 1600×1200 (4:3) or wider. Keep files under ~400 KB
where possible; full case-study slide decks can be larger and load lazily.
Termax's ten original PNGs are shown in order, with tall slides split into
numbered parts for easier loading.
