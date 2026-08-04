export function initBookGrid(gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    const items = Array.from(grid.querySelectorAll(".book-item"));
    if (items.length === 0) return;

    const w = window.innerWidth;
    const cols = w > 900 ? 3 : w > 600 ? 2 : 1;

    grid.innerHTML = "";

    const columns = [];
    for (let i = 0; i < cols; i++) {
        const col = document.createElement("div");
        col.className = "book-col";
        columns.push(col);
    }

    items.forEach((item, i) => {
        columns[i % cols].appendChild(item);
    });

    columns.forEach(col => grid.appendChild(col));
    grid.classList.add("ready");
}

export function initAllGrids() {
    document.querySelectorAll("[id^='books-']").forEach(grid => {
        grid.classList.remove("ready");
        initBookGrid(grid.id);
    });
}
