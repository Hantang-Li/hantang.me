# Guide for AI agents working on this repo

Read [README.md](README.md) first for the layout and the common tasks. This file adds the rules that are easy to get wrong.

## Positioning (do not drift from this)

- The site presents Hantang as an engineer whose main interest is AI; infrastructure experience is supporting evidence.
- Keep employer detail minimal: one summary line per role, no internal metrics, no project internals from past employers.
- Never invent facts, numbers, dates or opinions. If something is not in the repo or stated by Hantang, ask or leave it out.
- Text written in the first person is Hantang's voice. New first-person copy is a draft until Hantang has read it:
  for blog posts keep `draft: true`; for page copy, say clearly in your summary which sentences are new.

## Content rules

- Profile data has one source: `src/data/site.ts`. Do not hard-code jobs, projects or links in pages.
- Blog posts go in `src/content/blog/` with the frontmatter shown in the README. The schema is in `src/content.config.ts`;
  the build fails if a required field is missing.
- North American spelling (`analyze`, `visualize`, `color`).
- No phone number or home address anywhere, including in a resume PDF.
- External links to third-party sites get `rel="noopener"`.

## Design rules

- Colours come only from the CSS variables at the top of `src/styles/global.css`. Do not write hex values in components.
- Two palettes, each with one hue family for its neutrals:
  - Light, Monet "Water Lilies": mist-white page, white cards, viridian accent (`--seal`), rose as the only second accent (`--accent-2`).
  - Dark, Van Gogh "Starry Night": Prussian-blue page, periwinkle accent, amber/gold as the only second accent.
- At most two accent colours on screen. `--accent-2` is for small labels only.
- Every change must be checked in both themes and at phone width (375px). No horizontal scroll.
- Small text must keep roughly 4.5:1 contrast. Body text in dark mode uses `--text`, headings use `--ink`.
- Animations must respect `prefers-reduced-motion` (there is a global rule; do not override it).
- The resume page has print styles (`@media print`); if you change its layout, check it still prints on one page, dark-on-white.

## Known pitfalls

- In `.astro` files, text followed by a line break and then a tag loses the space. Write `{' '}` before the tag.
- Scoped `<style>` rules in a page can be overridden by more specific global rules (this once turned every page label grey). Check computed styles, not just the source.
- The Astro dev server sometimes serves stale scoped CSS after edits. Restart it before concluding a style change failed.
- `HeroLog.astro` is the hero diagram (the name is historical).

## Before you say you are done

1. `npm run build` passes.
2. You looked at the changed pages in light and dark mode.
3. Draft posts are still excluded from the build unless Hantang asked to publish.
4. You did not push. Pushing to `main` deploys to hantang.me, so list what will change and wait for Hantang's confirmation.
