import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const bookSchema = z.object({
    title: z.string(),
    author: z.string(),
    translator: z.string().optional(),
    year: z.string().optional(),
    publisher: z.string().optional(),
    pages: z.number().optional(),
    volumes: z.number().optional(),
    language: z.string().optional(),
    authorEra: z.string().optional(),
    download: z.string().optional(),
    format: z.string().optional(),
    cover: z.string().optional(),
});

const shiite = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/books/shiite" }),
    schema: bookSchema,
});

const atheism = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/books/atheism" }),
    schema: bookSchema,
});

export const collections = { shiite, atheism };
