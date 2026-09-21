export function buildTagFilters(books) {
    const counts = new Map();

    for (const book of books) {
        for (const tag of book.data.filterTags ?? book.data.tags ?? []) {
            counts.set(tag, (counts.get(tag) || 0) + 1);
        }
    }

    return [...counts.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([tag]) => tag);
}
