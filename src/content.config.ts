import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const bookSchema = z.object({
    title: z.string(),
    author: z.string(),
    translator: z.string().optional(),
    pages: z.number().optional(),
    volumes: z.number().optional(),
    language: z.string().optional(),
    download: z.string().optional(),
    format: z.string().optional(),
    cover: z.string().optional(),
    today: z.boolean().optional(),
    recommended: z.boolean().optional(),
    recommendedAuthor: z.boolean().optional(),
    caption: z.string().optional(),
    authorDesc: z.string().optional(),
    authorDescAr: z.string().optional(),
    authorDescUr: z.string().optional(),
    description: z.string().optional(),
    descriptionAr: z.string().optional(),
    descriptionUr: z.string().optional(),
    tags: z.array(z.string()).optional(),
    cardTags: z.array(z.string()).optional(),
    filterTags: z.array(z.string()).optional(),
    pubDate: z.coerce.date().optional(),
});

const shiite = defineCollection({
    loader: glob({ pattern: "*/shiite/**/*.md", base: "./src/content/books" }),
    schema: bookSchema,
});

const atheism = defineCollection({
    loader: glob({ pattern: "*/atheism/**/*.md", base: "./src/content/books" }),
    schema: bookSchema,
});

const aqeedah = defineCollection({
    loader: glob({ pattern: "*/aqeedah/**/*.md", base: "./src/content/books" }),
    schema: bookSchema,
});

const adyan = defineCollection({
    loader: glob({ pattern: "*/adyan/**/*.md", base: "./src/content/books" }),
    schema: bookSchema,
});

const maqabeh = defineCollection({
    loader: glob({ pattern: "*/maqabeh/**/*.md", base: "./src/content/books" }),
    schema: bookSchema,
});

const fraq = defineCollection({
    loader: glob({ pattern: "*/fraq/**/*.md", base: "./src/content/books" }),
    schema: bookSchema,
});

const daavat = defineCollection({
    loader: glob({ pattern: "*/daavat/**/*.md", base: "./src/content/books" }),
    schema: bookSchema,
});

export const collections = { shiite, atheism, aqeedah, adyan, maqabeh, fraq, daavat };
