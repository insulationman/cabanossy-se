// Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      updateDate: z.date().optional(),
      description: z.string(),
      author: reference("authors"),
      image: image().optional(),
      tags: z.array(z.string()),
      language: z.enum(["en", "sv"]),
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
