import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const article = await getCollection('rssfeed');
  return rss({
    title: 'Erika Obama',
    description: 'Insights and thoughts on design.',
    site: context.site,
    items: article.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Compute RSS link from post `id`
      // This example assumes all posts are rendered as `/article/[id]` routes
      link: `/${post.data.type}/${post.id}/`,
    })),
  });
}