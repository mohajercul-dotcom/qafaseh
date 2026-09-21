export function initBookGrid(gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    const items = Array.from(grid.querySelectorAll(".book-item"));
    if (items.length === 0) return;

    if (!grid.__bookOrder || grid.__bookOrder.length !== items.length) {
        grid.__bookOrder = items;
    }

    const allItems = Array.from(grid.__bookOrder);

    const visible = allItems.filter((item) => item.style.display !== "none");

    const w = window.innerWidth;
    const cols = w > 900 ? 3 : w > 600 ? 2 : 1;

    if (grid.__lastCols === cols) return;
    grid.__lastCols = cols;

    grid.innerHTML = "";

    const columns = [];
    for (let i = 0; i < cols; i++) {
        const col = document.createElement("div");
        col.className = "book-col";
        columns.push(col);
    }

    visible.forEach((item, i) => {
        columns[i % cols].appendChild(item);
    });

    const hidden = allItems.filter((item) => item.style.display === "none");
    hidden.forEach((item) => {
        columns[columns.length - 1].appendChild(item);
    });

    columns.forEach(col => grid.appendChild(col));
    grid.classList.add("ready");
}

export function initAllGrids() {
    document.querySelectorAll("[id^='books-']").forEach(grid => {
        grid.classList.remove("ready");
        grid.__lastCols = null;
        initBookGrid(grid.id);
    });
}
