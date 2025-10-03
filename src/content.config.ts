// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string().optional(),
        author: z.string().default("Jonathan Fang"),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }).optional(),
        tags: z.array(z.string()).optional(),
        // heroImage lol
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog };