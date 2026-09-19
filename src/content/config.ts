import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    // order controls placement in the work grid
    order: z.number(),
    title: z.string(),
    // short card headline shown on the home grid
    cardTitle: z.string(),
    tag: z.string(),
    lede: z.string(),
    metric: z.string(),
    // detail-page hero meta
    role: z.string(),
    timeline: z.string(),
    year: z.string(),
    tools: z.array(z.string()),
    // accent + optional cover image (drop into /public/images)
    accent: z.string().default('#6c5ce7'),
    cover: z.string().optional(),
    // set to true to hide from the grid (e.g. drafts)
    draft: z.boolean().default(false),
  }),
});

export const collections = { 'case-studies': caseStudies };
