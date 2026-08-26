import type { APIRoute } from "astro";
import { allBooks } from "../lib/paths.js";
import { slugify } from "../lib/books.js";
import { bookSiteLang } from "../lib/i18n.js";

export const GET: APIRoute = async () => {
    const books = await allBooks();
    const index = books.map((book) => {
        const lang = bookSiteLang(book);
        const prefix = lang === "fa" ? "" : lang + "/";
        return {
            t: book.data.title,
            a: book.data.author,
            u: `/${prefix}books/${slugify(book.data.title)}`,
            l: lang,
        };
    });
    return new Response(JSON.stringify(index), {
        headers: { "Content-Type": "application/json; charset=utf-8" },
    });
};
