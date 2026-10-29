// Static assets (book covers, etc.) can live outside the repository, e.g. in
// Cloudflare R2 behind a custom domain. Set PUBLIC_ASSETS_BASE at build time:
//
//   PUBLIC_ASSETS_BASE=https://cdn.qafaseh.us
//
// Frontmatter keeps using repo-relative paths (`/covers/etqadat.webp`); only the
// resolved URL changes. When the variable is empty, assets are served from
// `public/` exactly as before, so local development needs no configuration.
const RAW_BASE = import.meta.env.PUBLIC_ASSETS_BASE || "";
const BASE = RAW_BASE.replace(/\/+$/, "");

const ABSOLUTE = /^(?:[a-z][a-z0-9+.-]*:)?\/\//i;

export function assetUrl(path) {
    if (!path) return "";
    if (ABSOLUTE.test(path) || path.startsWith("data:")) return path;
    if (!BASE) return path;
    return BASE + (path.startsWith("/") ? path : `/${path}`);
}
