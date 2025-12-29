import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    summary: z.string(),
    preamble: z.string().optional(),
    category: z.string().optional(),
  }),
});

export const collections = { blog };
