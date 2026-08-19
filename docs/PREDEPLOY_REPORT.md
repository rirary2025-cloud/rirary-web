# Pre-deploy Report

Status: PRODUCTION LIVE / POST-LAUNCH QA REQUIRED

Updated: 2026-08-19 JST

## Automated checks
- Preflight: passed via `npm run verify`
- Lint: passed via `npm run verify`
- Production build: passed via `npm run verify`
- Representative message update: `npm run verify` passed on 2026-08-19 JST after adding `/message`.
- Representative message production verification: `https://www.rirary.net/message`, `https://rirary.net/message`, and `https://rirary-web.vercel.app/message` returned 200 with the expected page content on 2026-08-19 JST.
- Representative message mobile/signature refinement: `npm run verify` passed and `https://www.rirary.net/message` returned 200 with `代表取締役` and `佐藤倫稔` present on 2026-08-19 JST.
- Latest local verification: `npm run verify` passed on 2026-08-18 JST with 0 blockers and 0 warnings after switching visual assets to local copies from the legacy Rirary site.
- Latest production verification: `npm run verify` passed on 2026-08-19 JST before production deployment.
- Live custom-domain verification: `https://www.rirary.net/`, `/services/cacao-import`, `/contact`, `/privacy`, `/robots.txt`, and `/sitemap.xml` returned 200 on 2026-08-19 JST. `https://rirary.net/` returned 301 to `https://www.rirary.net/`.
- Local SEO/system checks: `/robots.txt` returned 200, `/sitemap.xml` returned 200, unknown routes returned 404, canonical resolved to `https://www.rirary.net`, and Organization JSON-LD was present in the rendered HOME HTML.

## Visual QA
- 375px: checked with local Chrome screenshots for HOME and ABOUT. Mobile hero and ABOUT heading overflow issues were found and fixed.
- 768px: checked with local Chrome screenshots for HOME and ABOUT during this run.
- 1024px: checked with local Chrome screenshots for HOME and ABOUT during this run.
- 1440px: checked with local Chrome screenshots for HOME and ABOUT during this run.
- Legacy image refresh: HOME was rechecked with local Chrome screenshots after replacing the hero and regional visual slots. Screenshots are saved under `docs/qa-screenshots/`.
- Representative message page: `/message`, `/about`, and `/sitemap.xml` returned 200 locally on 2026-08-19 JST; screenshot capture for `/message` failed because local Chrome headless exited with GPU errors.
- Notes: Chrome emitted local Windows geolocation/update warnings during screenshot capture; screenshots were still written. Final real-device and Vercel Preview QA remain required before DNS cutover.

## Route QA
- Major routes checked locally with `next start`: `/`, `/about`, `/services`, `/services/digital`, `/works`, `/works/jimoko-tomakomai-shiraoi`, `/regional-project`, `/news`, `/contact`, `/privacy`, `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest` all returned 200.
- Legacy redirects checked locally: `/共創`, `/サービス`, `/私たちについて`, `/プライバシーポリシー`, `/cookie-クッキー-ポリシー`, `/book-online`, `/blog`, `/s-projects-side-by-side`, `/search-results`, `/notifications` all returned 301 to the intended destination.

## Content / assets
- Official logo integration: verified by preflight assets and current `BrandMark` usage. The unused development placeholder mark file has been removed.
- HOME/ABOUT UI: updated toward the requested Tailor App-like editorial rhythm using Rirary-owned content and without copying Tailor text/images.
- Services: `CACAO IMPORT / カカオ加工品の輸入事業` has been added as the fifth business area after the user confirmed the required business registration, application, and checks are complete.
- Cacao import visual: the user-supplied product/logistics image has been added to `/services/cacao-import` and verified on the Vercel production URL.
- Representative message: `/message` has been added with company-positioning copy, a safe non-name signature, and links from ABOUT/footer.
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
- Complete final real-device QA, contact mail-app confirmation, and full Wix/Search Console URL inventory monitoring after cutover.

## Deployment boundary
Vercel production deployment was executed after explicit user approval on 2026-08-19 JST.

- Deployment ID: `dpl_7dXft5zVvyZKgnAkXpDDigou86gK`
- URL: `https://rirary-qm9rj13wt-rirary2025-clouds-projects.vercel.app`
- Alias shown by Vercel: `https://rirary-web.vercel.app`
- Vercel target reported by CLI: `production`
- Custom domain aliases shown by Vercel: `https://rirary.net`, `https://www.rirary.net`
- Verified standard Vercel production URL: `https://rirary-web.vercel.app`
- Current custom-domain status: DNS cutover complete and HTTPS live on `www.rirary.net`.
- Latest production update: representative message mobile layout and signature were refined, deployed, and verified on 2026-08-19 JST.

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

DNS cutover was completed in Wix DNS on 2026-08-19 JST and verified with Vercel.

Post-launch checks still required:

- Confirm contact mail-app flow on real devices.
- Check major pages from smartphone mobile network.
- Monitor 404s and redirect gaps.
- Keep the Wix rollback site available until launch risk is acceptable.
