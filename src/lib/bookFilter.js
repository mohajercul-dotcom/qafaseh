import { initBookGrid } from "./bookGrid.js";

export function initBookFilter() {
    document.querySelectorAll("[data-filter-bar]").forEach((bar) => {
        const gridId = bar.dataset.grid;
        const grid = document.getElementById(gridId);
        if (!grid) return;

        const chips = bar.querySelectorAll(".filter-chip");

        const apply = () => {
            const active = bar.querySelector(".filter-chip.active");
            const tag = active ? active.dataset.tag : null;
            const cat = active ? active.dataset.cat : null;
            const onlyRecommended = active ? active.dataset.recommended : null;

            grid.querySelectorAll(".book-item, .author-card").forEach((item) => {
                if (onlyRecommended !== undefined) {
                    item.style.display = item.dataset.recommended !== undefined ? "" : "none";
                    return;
                }
                if (cat !== undefined) {
                    const cats = (item.dataset.cat || "").split(",");
                    item.style.display = !cat || cats.includes(cat) ? "" : "none";
                    return;
                }
                const card = item.querySelector("[data-tags]");
                const tags = card ? card.dataset.tags.split(",") : [];
                const show = !tag || tags.includes(tag);
                item.style.display = show ? "" : "none";
            });

            if (grid.querySelector(".book-item")) {
                initBookGrid(gridId);
            }
        };

        chips.forEach((chip) => {
            chip.addEventListener("click", () => {
                chips.forEach((c) => c.classList.remove("active"));
                chip.classList.add("active");
                apply();
            });
        });
    });
}
