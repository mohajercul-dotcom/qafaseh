export type CategoryKey = "shiite" | "atheism" | "aqeedah" | "adyan" | "maqabeh" | "fraq" | "daavat";

export interface UiDict {
    siteTitle: string;
    siteDescription: string;
    lang: {
        fa: string;
        ar: string;
        ur: string;
    };
    nav: {
        home: string;
        homeTip: string;
        dasteh: string;
        dastehTip: string;
        theme: string;
        themeTip: string;
        language: string;
        languageTip: string;
        more: string;
        moreTip: string;
        faq: string;
        faqTip: string;
        projects: string;
        projectsTip: string;
        about: string;
        contact: string;
        install: string;
    };
    menu: Record<CategoryKey | "authors", { label: string; tip: string }>;
    aboutModal: {
        title: string;
        p1: string;
        instagram: string;
        telegram: string;
        tiktok: string;
        close: string;
    };
    contactModal: {
        title: string;
        intro: string;
        labels: [string, string, string, string];
        close: string;
    };
    search: {
        placeholder: string;
        clear: string;
        empty: string;
        translator: string;
    };
    backToTop: string;
    home: {
        heroAlt: string;
        libAlt: string;
        heroDescDesktop: string;
        heroDescMobile: string;
        suggested: string;
        viewBook: string;
        translatorPrefix: string;
        authorOfDay: string;
        authorBooks: (count: string, n: number) => string;
        authorInTopics: (topics: string, n: number) => string;
        newest: string;
        mostRead: string;
        totalBooks: string;
        authorsCount: string;
        shiaBooks: string;
        atheismBooks: string;
    };
    categories: Record<CategoryKey, { alt: string; desc: string }>;
    filter: {
        all: string;
        recommended: string;
        next: string;
        prev: string;
    };
    bookCard: {
        more: string;
    };
    bookCover: {
        shiite: string;
        atheism: string;
        translatorPrefix: string;
    };
    book: {
        redirecting: string;
        otherBooks: (author: string) => string;
        author: string;
        translator: string;
        volumes: string;
        pages: string;
        language: string;
        volumeUnit: string;
        pageUnit: string;
        download: string;
        fromTelegram: string;
        copy: string;
        copied: string;
        error: string;
        noIntro: string;
    };
    share: {
        button: string;
        copy: string;
        copied: string;
        error: string;
        continueReading: string;
        telegram: string;
        whatsapp: string;
        x: string;
        telegramTip: string;
        whatsappTip: string;
        xTip: string;
    };
    authors: {
        desc: string;
        total: string;
        totalBooks: (count: string) => string;
    };
    faqAlt: string;
}

export interface FaqItem {
    q: string;
    a: string;
}

export interface FaqCategory {
    title: string;
    items: FaqItem[];
}

export interface FaqDict {
    categories: FaqCategory[];
}
