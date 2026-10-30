## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Assets

Book covers are served from Cloudflare R2 through `https://cdn.qafaseh.us`, not
from this repository. All covers live at the root of the `covers` bucket (one
level, no prefixes). Pages builds must define the `PUBLIC_ASSETS_BASE` variable
(production and preview):

```
PUBLIC_ASSETS_BASE=https://cdn.qafaseh.us
```

Frontmatter stores the file name (`cover: "/etqadat.png"`); the `assetUrl()`
helper in `src/lib/assets.js` prefixes it with the asset base at build time.
When the variable is unset the path is used as-is, so local development works
from `public/` without configuration.

Upload or replace a cover with:

```bash
npx wrangler r2 object put "covers/<file>" --file "<file>" \
  --content-type "image/png" \
  --cache-control "public, max-age=31536000, immutable" --remote
```

Old `/covers/<file>` URLs keep working through `public/_redirects`, which sends
them to `https://cdn.qafaseh.us/<file>` with a 301.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
