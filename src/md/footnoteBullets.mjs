export const footnoteBulletsPlugin = {
    name: "footnote-bullets",
    element: {
        filter: ["p"],
        visit(node, ctx) {
            const li = ctx.parent(node);
            if (!li || li.type !== "element" || li.tagName !== "li") return;

            const ol = ctx.parent(li);
            const section = ol ? ctx.parent(ol) : undefined;
            const cls = section?.properties?.className;
            const inFootnotes =
                cls === "footnotes" ||
                (Array.isArray(cls) && cls.includes("footnotes")) ||
                section?.properties?.dataFootnotes !== undefined;
            if (!inFootnotes) return;

            const segments = [];
            let cur = [];
            let foundBullet = false;

            const commitSegment = () => {
                if (cur[0]?.type === "text") {
                    cur[0] = { ...cur[0], value: cur[0].value.replace(/^\s+/, "") };
                }
                const joined = cur.reduce((s, c) => s + (c.type === "text" ? c.value : ""), "");
                if (joined.trim()) segments.push(cur);
                cur = [];
            };

            for (const child of node.children ?? []) {
                if (child.type === "text") {
                    const parts = String(child.value).split("•");
                    for (let i = 0; i < parts.length; i++) {
                        if (i > 0) foundBullet = true;
                        if (i > 0) commitSegment();
                        cur.push({ type: "text", value: parts[i] });
                    }
                } else if (child.type === "element" && child.tagName === "br") {
                    commitSegment();
                } else {
                    cur.push(child);
                }
            }
            commitSegment();

            if (!foundBullet) {
                ctx.replaceNode(node, {
                    type: "element",
                    tagName: "ul",
                    properties: { className: ["footnote-sources"] },
                    children: [{
                        type: "element",
                        tagName: "li",
                        properties: {},
                        children: [{ type: "text", value: "• " }, ...(node.children ?? [])],
                    }],
                });
                return;
            }

            const ul = {
                type: "element",
                tagName: "ul",
                properties: { className: ["footnote-sources"] },
                children: segments.map((nodes) => ({
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [{ type: "text", value: "• " }, ...nodes],
                })),
            };
            ctx.replaceNode(node, ul);
        },
    },
};