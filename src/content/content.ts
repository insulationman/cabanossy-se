// Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: reference("authors"),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

const authors = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      bio: z.string(),
      image: image().refine((img) => img.width >= 100, {
        message: "Cover image must be at least 100 pixels wide!",
      }),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  authors: authors,
};
