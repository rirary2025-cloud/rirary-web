# Pre-deploy Report

Status: VERCEL PRODUCTION READY / DNS CUTOVER REQUIRED

Updated: 2026-08-19 JST

## Automated checks
- Preflight: passed via `npm run verify`
- Lint: passed via `npm run verify`
- Production build: passed via `npm run verify`
- Latest local verification: `npm run verify` passed on 2026-08-18 JST with 0 blockers and 0 warnings after switching visual assets to local copies from the legacy Rirary site.
- Latest production verification: `npm run verify` passed on 2026-08-19 JST before production deployment.
- Local SEO/system checks: `/robots.txt` returned 200, `/sitemap.xml` returned 200, unknown routes returned 404, canonical resolved to `https://www.rirary.net`, and Organization JSON-LD was present in the rendered HOME HTML.

## Visual QA
- 375px: checked with local Chrome screenshots for HOME and ABOUT. Mobile hero and ABOUT heading overflow issues were found and fixed.
- 768px: checked with local Chrome screenshots for HOME and ABOUT during this run.
- 1024px: checked with local Chrome screenshots for HOME and ABOUT during this run.
- 1440px: checked with local Chrome screenshots for HOME and ABOUT during this run.
- Legacy image refresh: HOME was rechecked with local Chrome screenshots after replacing the hero and regional visual slots. Screenshots are saved under `docs/qa-screenshots/`.
- Notes: Chrome emitted local Windows geolocation/update warnings during screenshot capture; screenshots were still written. Final real-device and Vercel Preview QA remain required before DNS cutover.

## Route QA
- Major routes checked locally with `next start`: `/`, `/about`, `/services`, `/services/digital`, `/works`, `/works/jimoko-tomakomai-shiraoi`, `/regional-project`, `/news`, `/contact`, `/privacy`, `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest` all returned 200.
- Legacy redirects checked locally: `/共創`, `/サービス`, `/私たちについて`, `/プライバシーポリシー`, `/cookie-クッキー-ポリシー`, `/book-online`, `/blog`, `/s-projects-side-by-side`, `/search-results`, `/notifications` all returned 301 to the intended destination.

## Content / assets
- Official logo integration: verified by preflight assets and current `BrandMark` usage. The unused development placeholder mark file has been removed.
- HOME/ABOUT UI: updated toward the requested Tailor App-like editorial rhythm using Rirary-owned content and without copying Tailor text/images.
- Services: `CACAO IMPORT / カカオ加工品の輸入事業` has been added as the fifth business area after the user confirmed the required business registration, application, and checks are complete.
- Cacao import visual: the user-supplied product/logistics image has been added to `/services/cacao-import` and verified on the Vercel production URL.
- WORKS production data: Jimoko case study plus four official LINE construction/operation case studies added; further entries still require approval.
- NEWS production data: v1.0 launch state is accepted empty. Future announcements require approved publication data.
- NEWS decision support: `docs/news-publication-decision-v1.0.md` has been added.
- Contact production delivery: switched to direct `mailto:` delivery. No Vercel webhook secrets are required for v1.0.
- Contact delivery setup: `docs/contact-delivery-v1.0.md` documents the direct email flow and limitations.
- Contact real-device QA: `docs/contact-real-device-qa-v1.0.md` has been added for PC/smartphone mail app and fallback link checks.
- Hero / regional visuals: user approved using images extracted from the legacy Rirary HP for now. They are stored locally and not hotlinked from Wix CDN.
- Visual approval support: `docs/visual-approval-v1.0.md` has been added.
- Privacy policy: draft page content has been implemented. Representative name is omitted for v1.0 because it was not confirmed from public sources; final legal/business wording confirmation remains required.

## Migration
- Confirmed redirects exist in `next.config.ts` for the verified legacy routes in `docs/wix-url-migration-map-v1.0.md`, including observed Wix utility pages.
- Japanese legacy redirects are handled in `app/proxy.ts` after local verification showed `next.config.ts` redirects alone did not catch those paths.
- A working Wix URL inventory has been added at `docs/wix-url-inventory-v1.0.md` based on observed current-site navigation and search results.
- Search-visible Wix URLs were rechecked on 2026-08-18; observed/searchable URLs are documented and locally redirect-tested. Full Wix/Search Console export remains recommended before DNS cutover.

## Human / external dependencies
- Confirm the `/contact` mail app flow on desktop and smartphone, and verify LINE / EMAIL / PHONE fallback links.
- Confirm the Jimoko asset usage permissions and supply/approve any additional NEWS or WORKS entries.
- Confirm company/contact details and privacy policy wording before production launch.
- Complete final real-device QA and full Wix/Search Console URL inventory before DNS cutover.

## Deployment boundary
Vercel production deployment was executed after explicit user approval on 2026-08-19 JST.

- Deployment ID: `dpl_9kLctRp4konFVtDWMu99n81ncKYx`
- URL: `https://rirary-hn7zpkguu-rirary2025-clouds-projects.vercel.app`
- Alias shown by Vercel: `https://rirary-web.vercel.app`
- Vercel target reported by CLI: `production`
- Custom domain aliases shown by Vercel: `https://rirary.net`, `https://www.rirary.net`
- Verified standard Vercel production URL: `https://rirary-web.vercel.app`
- Current custom-domain status: domains are attached to Vercel, but DNS still points to Wix.

## DNS cutover values

Current DNS provider state is still Wix:

- Nameservers: `ns13.wixdns.net`, `ns12.wixdns.net`
- `www.rirary.net`: currently points to Wix CDN.
- `rirary.net`: currently points to Wix A records.

Recommended Vercel DNS records:

- `www` CNAME → `b04fa86145047b13.vercel-dns-017.com.`
- `@` A → `216.198.79.1`
- `@` A → `64.29.17.1`

Alternative full nameserver transfer:

- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

**DNS NOT CHANGED BY CODEX.**
After DNS changes, rerun `vercel domains verify www.rirary.net` and `vercel domains verify rirary.net`, then test the live custom domains.
