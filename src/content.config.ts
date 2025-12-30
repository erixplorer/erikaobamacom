import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { rssSchema } from '@astrojs/rss';

const articleSchema = rssSchema.extend({
    layout: z.string(),
    locale: z.string(),
    slug: z.string().optional(),
    title: z.string(),
    type: z.string(),
    category: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().default(true),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
      hero: z.boolean().default(false),
    }),
});

const portfolioSchema = rssSchema.extend({
    layout: z.string(),
    locale: z.string(),
    title: z.string(),
    slug: z.string().optional(),
    type: z.string(),
    category: z.string(),
    pubDate: z.coerce.date(),
    projDate: z.string().optional(),
    client: z.string().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(true),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
      hero: z.boolean().default(false),
    }),
});


const article = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/en/posts/article' }),
  schema: articleSchema
});

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/en/posts/portfolio' }),
  schema: portfolioSchema
});

const articleJa = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/ja/posts/article' }),
  schema: articleSchema
});

const portfolioJa = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/ja/posts/portfolio' }),
  schema: portfolioSchema
});


const rssfeed = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/en/posts' }),
  schema: articleSchema
});

const rssfeedJa = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/ja/posts' }),
  schema: articleSchema
});


// Expose your defined collection to Astro
// with the `collections` export
export const collections = { article, portfolio, articleJa, portfolioJa, rssfeed, rssfeedJa };


