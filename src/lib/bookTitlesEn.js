// Latin transliterations of book titles that are written in Arabic/Persian.
// They are used for <title>, the hidden <h1> and structured data, and live here
// instead of the content frontmatter so the Markdown files stay clean.
// Key = content entry id (the file name, slugified by Astro).
export const bookTitlesEn = {
    eteghadate_fereghe: "Eteghadat Feregh al-Muslimin wa al-Mushrikin",
    ajwibat_alfakhira: "Al-Ajwiba al-Fakhira an al-Asila al-Fajira",
    ilam_bima_fi_din_alnasara: "Al-Ilam bima fi Din al-Nasara min al-Fasad wa al-Awham",
    shamm_alawaridh: "Shamm al-Awaridh fi Dhamm al-Rawafidh",
};

export function bookTitleEn(book) {
    return bookTitlesEn[book?.id] || book?.data?.title || "";
}
