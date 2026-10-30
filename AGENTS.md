## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Assets

Book covers are served from Cloudflare R2 (`qafaseh-assets` bucket) through
`https://cdn.qafaseh.us`, not from this repository. Pages builds must define the
`PUBLIC_ASSETS_BASE` variable (production and preview):

```
PUBLIC_ASSETS_BASE=https://cdn.qafaseh.us
```

Frontmatter keeps repo-relative paths (`cover: "/covers/etqadat.png"`); the
`assetUrl()` helper in `src/lib/assets.js` prefixes them at build time. When the
variable is unset, files under `public/` are used instead (local development
works without configuration).

Upload or replace a cover with:

```bash
npx wrangler r2 object put "qafaseh-assets/covers/<file>" --file "<file>" \
  --content-type "image/png" \
  --cache-control "public, max-age=31536000, immutable" --remote
```

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
