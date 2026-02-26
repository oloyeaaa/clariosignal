import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(100),
    description: z.string().max(160),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Oloye Adeosun'),
    category: z.enum([
      'lead-generation-systems',
      'cold-email-strategy',
      'ideal-customer-profile',
      'outreach-tools-workflows',
    ]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    canonicalUrl: z.string().url().optional(),
    noIndex: z.boolean().default(false),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    relatedPosts: z.array(z.string()).max(3).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
