import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
    readTime: z.string().optional(),
  }),
});

export const collections = {
  notes,
};
