# SEO & Release v0.9

## Canonical / metadata
- Production canonical host: `https://www.rirary.net`
- Root layout defines `metadataBase`, default title/description, Open Graph, Twitter card, robots directives.
- Dynamic service/work detail routes output route-specific title, description and canonical path.

## Open Graph
- `app/opengraph-image.tsx` generates the default 1200x630 share image.
- Replace the temporary wordmark/graphic with approved Rirary brand assets when the official logo is available.
- Do not use unlicensed Wix stock images in OG assets.

## Structured data
- Organization JSON-LD is emitted globally.
- Company name/contact/address come only from verified site data.
- Add project/article schema only when corresponding public content is real and complete.

## robots / sitemap
- `robots.ts` allows public pages and excludes `/api/`.
- `sitemap.ts` includes static routes, service details and published work details.
- Do not put drafts/placeholders in the sitemap.

## Wix migration redirects
Confirmed legacy URLs at this stage:
- `/共創` -> `/about` (301)
- `/book-online` -> `/contact` (301)

Before DNS cutover, export/crawl the full Wix URL inventory and add one-to-one redirects for every indexable URL that moves. Do not guess legacy slugs.

## Domain policy
- Primary: `www.rirary.net`
- Add both `www.rirary.net` and `rirary.net` to Vercel.
- Redirect apex `rirary.net` to `www.rirary.net` at the Vercel domain level.

## Environment variables
Production values must be configured in Vercel, not committed:
- Contact form uses `mailto:` in v1.0 and does not require webhook secrets.

After changing environment variables, redeploy because changes apply to new deployments.
