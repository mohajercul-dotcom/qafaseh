import { getCollection } from "astro:content";
import { slugify, normalizeAuthor, shortCode } from "./books.js";

const collectionNames = ["shiite", "atheism", "aqeedah", "adyan", "maqabeh", "fraq", "daavat"];

export async function allBooks() {
    const all = [];
    for (const name of collectionNames) {
        const list = await getCollection(name);
        for (const book of list) all.push({ ...book, category: name });
    }
    return all;
}

export async function bookPaths(locale) {
    const books = await allBooks();
    return books.flatMap((book) => {
        const bookLang = String(book.id).split("/")[0];
        if (locale && bookLang !== locale) return [];

        const persian = slugify(book.data.title);
        const code = shortCode(book.id + book.data.title);
        const fileId = String(book.id).split("/").pop();
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
