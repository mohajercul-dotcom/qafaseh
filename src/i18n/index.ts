import type { UiDict, FaqDict } from "./types";
import { uiFa } from "./fa";
import { uiAr } from "./ar";
import { uiUr } from "./ur";
import { faqFa } from "./faq-fa";
import { faqAr } from "./faq-ar";
import { faqUr } from "./faq-ur";

export const locales = ["fa", "ar", "ur"] as const;

export type Locale = (typeof locales)[number];

export function getUi(locale?: string | null): UiDict {
    if (locale === "ar") return uiAr;
    if (locale === "ur") return uiUr;
    return uiFa;
}

export function getFaq(locale?: string | null): FaqDict {
    if (locale === "ar") return faqAr;
    if (locale === "ur") return faqUr;
    return faqFa;
}
