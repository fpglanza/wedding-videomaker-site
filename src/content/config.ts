import { defineCollection, z } from "astro:content";

const stories = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.union([z.date(), z.string().regex(/^\d{4}-\d{2}-\d{2}$/)]),
    location: z.string().optional(),
    // Video
    youtubeId: z.string().min(6),
    poster: z.string().optional().default(""), // e.g. "/images/posters/story-01.jpg" (we'll add later)
    // Narrative bits
    excerpt: z.string().max(240),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { stories };