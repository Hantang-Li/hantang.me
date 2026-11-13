import { getCollection } from 'astro:content';

// Drafts are visible in `npm run dev` and excluded from production builds.
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
