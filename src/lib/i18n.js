import { existsSync } from "node:fs";
import { join } from "node:path";

export const locales = ["fa", "ar", "ur"];

export const defaultLocale = "fa";

export function localizePath(locale, path) {
    if (!locale || locale === defaultLocale) return path;
    const clean = path.startsWith("/") ? path : "/" + path;
    return `/${locale}${clean === "/" ? "" : clean}`;
}

export function switchLocalePath(currentPath, fromLocale, toLocale) {
    let base = currentPath || "/";
    if (fromLocale && fromLocale !== defaultLocale && base.startsWith(`/${fromLocale}`)) {
        base = base.slice(fromLocale.length + 1) || "/";
    }
    if (toLocale === defaultLocale) return base;
    return `/${toLocale}${base === "/" ? "" : base}`;
}

export function localeFromPath(pathname) {
    const first = (pathname || "").split("/").filter(Boolean)[0];
    return locales.includes(first) ? first : defaultLocale;
}

export function toLocaleDigits(value, locale) {
    const base = locale === "ar" ? 0x0660 : 0x06f0;
    return String(value).replace(/\d/g, (d) => String.fromCodePoint(base + Number(d)));
}

export function bookLocale(book) {
    const v = String(book.data?.language ?? "").trim().toLowerCase().replace(/ي/g, "ی");
    if (v.includes("عرب") || v === "ar" || v === "arabic" || v === "arabi") return "ar";
    if (v.includes("اردو") || v === "ur" || v === "urdu") return "ur";
    return "fa";
}

export function bookSiteLang(book) {
    const seg = String(book?.id || "").split("/")[0];
    if (["fa", "ar", "ur"].includes(seg)) return seg;
    const m = String(book?.filePath || "").match(/\/books\/(fa|ar|ur)\//);
    if (m) return m[1];
    return defaultLocale;
}

export function bookDescription(book, locale) {
    if (locale === "ar" && book.data.descriptionAr) return book.data.descriptionAr;
    if (locale === "ur" && book.data.descriptionUr) return book.data.descriptionUr;
    if (bookSiteLang(book) === locale) return book.data.description || "";
    return "";
}

export function localizeAsset(locale, path) {
    if (!locale || locale === defaultLocale) return path;
    const name = String(path).replace(/^\/+/, "").replace(/^icons\//, "");
    const candidate = `/icons/${locale}/${name}`;
    try {
        if (existsSync(join(process.cwd(), "public", candidate.replace(/^\/+/, "")))) {
            return candidate;
        }
    } catch {}
    return path;
}
