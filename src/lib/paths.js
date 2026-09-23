import { getCollection } from "astro:content";
import { slugify, normalizeAuthor, shortCode } from "./books.js";
import { bookSiteLang } from "./i18n.js";

const langNames = ["fa", "ar", "ur"];

export const categoryNames = ["shiite", "atheism", "aqeedah", "adyan", "nazaheb", "fraq", "daavat"];

export function bookCategories(book) {
    if (!Array.isArray(book.data?.categories)) return [];
    return book.data.categories.filter((c) => categoryNames.includes(c));
}

export async function allBooks() {
    const all = [];
    const seen = new Set();
    for (const lang of langNames) {
        const list = await getCollection(lang);
        for (const book of list) {
            const bookLang = bookSiteLang(book);
            const key = `${bookLang}:${slugify(book.data.title)}`;
            if (seen.has(key)) continue;
            seen.add(key);
            const cats = bookCategories(book).sort(
                (a, b) => categoryNames.indexOf(a) - categoryNames.indexOf(b)
            );
            if (!cats.length) continue;
            all.push({ ...book, category: cats[0], categories: cats });
        }
    }
    return all;
}

export async function booksInCategory(category, locale) {
    const list = await getCollection(locale);
    return list
        .filter((book) => bookSiteLang(book) === locale && bookCategories(book).includes(category))
        .sort((a, b) => a.data.title.localeCompare(b.data.title, locale));
}

export async function bookPaths(locale) {
    const books = await allBooks();
    return books.flatMap((book) => {
        const bookLang = bookSiteLang(book);

        const persian = slugify(book.data.title);
        const code = shortCode(book.id + book.data.title);
        const fileId = String(book.id).split("/").pop();
        if (locale && bookLang !== locale) {
            if (locale === "fa") {
                return [
                    { params: { slug: code }, props: { book, mode: "redirect" } },
                    { params: { slug: fileId }, props: { book, mode: "redirect" } },
                ];
            }
            return [];
        }
        return [
            { params: { slug: persian }, props: { book, mode: "page" } },
            { params: { slug: code }, props: { book, mode: "redirect" } },
            { params: { slug: fileId }, props: { book, mode: "redirect" } },
        ];
    });
}

export async function authorPaths() {
    const names = new Set();
    const books = await allBooks();
    for (const book of books) {
        names.add(normalizeAuthor(book.data.author));
    }
    return [...names].map((name) => ({
        params: { slug: slugify(name) },
        props: { name },
    }));
}