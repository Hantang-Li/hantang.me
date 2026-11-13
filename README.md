# hantang.me

Personal site of Hantang Li. Static site built with [Astro](https://astro.build), deployed to GitHub Pages
by `.github/workflows/deploy.yml` on every push to `main`.

```
npm install
npm run dev      # http://localhost:4321  (draft posts are visible)
npm run build    # output in dist/        (draft posts are excluded)
```

## Where things live

```
src/
  data/site.ts          <- profile, "Now" status, jobs, education, skills, projects
  content/blog/*.md     <- blog posts (one file per post)
  pages/                <- one file per page: index, projects, about, resume, blog/
  components/           <- HeroLog (hero diagram), ProjectCard, PostList
  layouts/Base.astro    <- header, footer, SEO tags, theme toggle
  styles/global.css     <- colour tokens (light + dark), typography, print styles
public/                 <- favicon, og.png, robots.txt, CNAME (copied as-is)
scripts/og.mjs          <- regenerates public/og.png
```

## Common tasks

| I want to...                         | Do this                                                                 |
| ------------------------------------ | ----------------------------------------------------------------------- |
| Update the "Now" strip on the home page | Edit `site.now` in `src/data/site.ts`                                |
| Turn the "Open to new opportunities" badge on/off | Set `site.openToWork` in `src/data/site.ts`                |
| Add or edit a job / project / skill  | Edit the matching array in `src/data/site.ts`                           |
| Feature a project on the home page   | Add `featured: true` to it in `src/data/site.ts`                        |
| Write a blog post                    | See below                                                               |
| Change the About text or timeline    | Edit `src/pages/about.astro`                                            |
| Change colours                       | Edit the tokens at the top of `src/styles/global.css`                   |
| Change the social share image        | Edit `scripts/og.mjs`, then run `node scripts/og.mjs`                   |

## Writing a blog post

1. Create `src/content/blog/my-post-slug.md`. The file name becomes the URL: `/blog/my-post-slug/`.
2. Start it with this frontmatter:

   ```md
   ---
   title: "Post title"
   description: "One sentence shown in lists, RSS and link previews."
   date: 2026-11-20
   tags: ["interpretability"]
   draft: true
   ---
   ```

3. Write in Markdown below it. Code blocks get syntax highlighting. Use `.mdx` instead of `.md` if you need components.
4. Preview with `npm run dev`. When it is ready, set `draft: false` (or delete the line).
5. Commit and push to `main`. The site updates in about a minute.

Images for a post: put them in `src/assets/` and reference them with a relative path, so Astro optimises them.

## Publishing

Push to `main`. Check the run under the repo's Actions tab if the change does not show up.
The custom domain (`hantang.me`) is set in the repo's Settings > Pages, not by the `CNAME` file.

Working with an AI agent on this repo? See [AGENTS.md](AGENTS.md).
