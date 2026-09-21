import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const bookSchema = z.object({
    title: z.string(),
    author: z.string(),
    translator: z.string().optional(),
    pages: z.number().optional(),
    volumes: z.number().optional(),
    language: z.string().optional(),
    telegram: z.string().optional(),
    archive: z.string().optional(),
    server: z.string().optional(),
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
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    cardTags: z.array(z.string()).optional(),
    filterTags: z.array(z.string()).optional(),
    disclaimer: z.string().optional(),
    shareText: z.string().optional(),
    pubDate: z.coerce.date().optional(),
});

const langCollection = (lang) =>
    defineCollection({
        loader: glob({ pattern: "**/*.md", base: `./src/content/books/${lang}` }),
        schema: bookSchema,
    });

export const collections = {
    fa: langCollection("fa"),
    ar: langCollection("ar"),
    ur: langCollection("ur"),
};