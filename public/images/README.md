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
- `landing-zone/card-cover-v2.png` (the Landing Zone card and opening slide)
- `wingman-cover.jpg`
- `payment-gateway-cover.jpg`
- `about.jpg` (optional portrait for the About section)

Recommended cover size: 1600×1200 (4:3) or wider. Keep files under ~400 KB
where possible; full case-study slide decks can be larger and load lazily.
Termax's ten original PNGs are shown in order, with tall slides split into
numbered parts for easier loading.
Landing Zone uses the supplied desktop dashboard PNG unchanged for its Work card
and opening frame; the card crops it to the same wide ratio as the other cards.
Its numbered PNGs 01–11 follow that opening frame; the two UI design panels
labeled 10 stay in order, and demo video 12 loads after the slides.
