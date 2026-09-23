// @ts-expect-error Astro's virtual module is provided by the Astro build tool.
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { blog };