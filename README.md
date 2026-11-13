# hantang.me (v2)

Static site built with [Astro](https://astro.build). Deployed to GitHub Pages by `.github/workflows/deploy.yml`.

```
npm install
npm run dev      # http://localhost:4321, drafts visible
npm run build    # output in dist/, drafts excluded
```

| I want to...                    | Edit                                  |
| ------------------------------- | ------------------------------------- |
| Change bio, jobs, projects      | `src/data/site.ts`                    |
| Write a blog post               | add a `.md` file in `src/content/blog/` |
| Change colors / fonts           | `src/styles/global.css` (`:root` tokens) |
| Change the About text           | `src/pages/about.astro`               |
| Regenerate the share image      | `node scripts/og.mjs`                 |

Blog post frontmatter: `title`, `description`, `date`, optional `tags`, `draft`.
