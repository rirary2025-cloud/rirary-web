# Rirary Website Development Rules

## Mission
Build the official website for 株式会社Rirary as a fast, modern, maintainable corporate and project website rooted in Hokkaido.
The website must communicate the company as broader than an SNS/Web agency.

## Positioning
Primary definition:
「北海道の地域課題を、新しい発想で解決する会社。」

Business pillars:
- DIGITAL / デジタル支援
- CREATIVE / クリエイティブ
- BUSINESS SUPPORT / 事業支援
- COMMERCE / コマース

Strategic independent pillar:
- REGIONAL PROJECT / 地域活性化事業

## Core principles
1. Mobile-first.
2. Do not improvise the brand; follow the design spec and skills.
3. Never invent business facts, results, clients, partners, prices or statistics.
4. Current Wix content is source material, not a layout/template to reproduce.
5. Prefer reusable components and tokenized styling over page-specific hacks.
6. Use semantic HTML and accessible controls.
7. Keep JavaScript minimal; use Server Components by default.
8. Keep content structures storage-agnostic so CMS adoption remains optional.
9. Do not redesign approved sections while implementing unrelated changes.
10. Run visual QA as well as lint/build before completion.

## Required reading
Before architecture/UI work read:
- `docs/requirements.md`
- `docs/sitemap.md`
- `docs/design-spec.md`
- `docs/homepage-architecture.md`
- `docs/homepage-ui-v1.md`
- `docs/content-model.md`
- `docs/migration-notes.md`
- all files under `skills/`

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- CSS variables for design tokens
- Vercel deployment target
- Server Components by default

## Implementation order
1. establish global shell (tokens, typography, header, footer, container, buttons)
2. implement homepage section-by-section
3. visual QA homepage
4. implement service/works/regional/about/news/contact routes
5. SEO + redirect map + legal routes
6. functional/visual QA
7. production build

## Definition of done
- UI follows approved specs
- responsive review completed at 375 / 768 / 1024 / 1440
- keyboard navigation works
- metadata is present where relevant
- no invented factual content
- `npm run lint` passes
- `npm run build` passes
- no obvious console/hydration errors

## UI baseline update — v0.4
- `docs/homepage-ui-v2.md` is the current visual baseline for the homepage.
- Do not revert the homepage into a centered SaaS-style hero or identical feature-card grid.
- Temporary geometric media placeholders are intentional until approved Rirary photography is supplied.
- Official logo/bee assets must replace the temporary `R` mark before launch; do not redraw or invent the official logo.


## v0.5 migration rules
- Read `docs/content-audit-v0.5.md` and `docs/source-inventory.md` before replacing content.
- Company contact information in `app/lib/site-data.ts` is sourced from the current public Wix site and should be treated as migration data, but re-confirm before production launch.
- Do not hotlink Wix CDN imagery in production. Export approved company-owned assets and keep them locally under `app/public/`.
- Never invent works, partners, client logos, metrics, testimonials, awards, dates, or project outcomes.
- Placeholder news and works must remain visibly placeholder until verified data is supplied.

## Production asset gate (v0.6)
- Never present `app/public/brand/rirary-mark-placeholder.svg` as the official Rirary logo.
- Replace development-only brand placeholders before production deployment.
- Prefer Rirary-owned field photographs over generic stock photography.
- Never use imagery in a way that implies an unverified client, municipality, project, result, location, or partnership.
- Keep asset filenames and intended slots documented in `docs/brand-assets-v0.6.md` and `app/public/images/README.md`.


## v0.7 detail-page rules
- Read `docs/detail-pages-v0.7.md` before changing service, works, or regional-project detail architecture.
- Business detail copy should come from `app/lib/site-data.ts`; avoid duplicating source-of-truth content in pages.
- Never publish a Works entry until client/project name, scope and any claimed result are verified.
- Preserve Breadcrumbs and ContactBand patterns across detail pages unless a documented design revision supersedes them.

## v0.8 operations rules
- NEWSは `app/content/news.ts`、WORKSは `app/content/works.ts` を正とする。
- 正式確認・公開許可のないNEWS/WORKSを生成しない。
- 問い合わせ送信先の秘密値をコードへ直書きしない。Vercelの環境変数を使用する。
- `CONTACT_WEBHOOK_URL` が未設定でもサイト全体を壊さず、LINE/メール/電話の代替導線を維持する。
- 外部CMSは運用担当・更新頻度が確定するまで導入しない。必要時は表示層を維持しデータ層だけ置換する。

## SEO / release rules (v0.9)
- Public canonical host is `https://www.rirary.net`.
- Do not invent old Wix URLs. Add redirects only from a verified URL inventory.
- Every moved, indexable legacy URL must have an intentional redirect or removal decision before launch.
- Do not expose secrets in source control; production contact values belong in Vercel Environment Variables.
- Preview deployment QA must pass before DNS cutover.
- Do not remove the Wix rollback path immediately at launch.

## v1.0 release gate
- Before calling the site production-ready, run `npm run preflight`, `npm run lint`, and `npm run build`.
- Do not launch with the placeholder Rirary mark unless the user explicitly approves it as final.
- Do not invent WORKS, NEWS, client names, results, partner names, or metrics.
- Treat `docs/wix-url-migration-map-v1.0.md` as the current migration source of truth, but extend it only with verified legacy URLs.
- Production contact delivery must be tested; UI-only form completion is not sufficient.

## Autonomous build contract (v1.0)
When the user gives a build/implementation instruction such as 「進めて」「実装して」「完成まで」「デプロイ前まで」, operate autonomously until the PRE-DEPLOY READY gate is reached.

### Default behavior
- Do not stop after planning. Implement the plan.
- Do not stop after finding an error. Diagnose, fix, and rerun verification.
- Do not ask for confirmation between ordinary implementation steps.
- Make reasonable engineering decisions from the approved docs, design system, current code, and supplied assets.
- Preserve approved UI/brand decisions unless the requested task explicitly changes them.
- Update documentation and task state as implementation changes.
- Keep working on all independent tasks even if one task is blocked by missing business facts, approval-only content, credentials, or external service access.

### Autonomous loop
Repeat until all achievable checks pass:
1. Read `docs/AUTONOMOUS_WORKFLOW.md` and `docs/TASK_STATE.md`.
2. Inspect current repository state and relevant docs/skills.
3. Convert the user request into concrete tasks in `docs/TASK_STATE.md`.
4. Implement the highest-priority incomplete task.
5. Run the narrowest relevant checks.
6. Fix regressions/errors immediately.
7. Continue to the next task without waiting for user approval.
8. Run full pre-deploy verification.
9. Write/update `docs/PREDEPLOY_REPORT.md` with results, remaining blockers, and exact next human action if any.

### Blocker policy
Do not fabricate values to remove blockers.
Blockers that may require the user include:
- unprovided or unapproved business facts, works/results, client names, testimonials, legal wording
- production credentials/secrets
- ownership/permission for assets
- external account authorization
- a design decision that cannot be inferred from an already approved direction

When blocked:
- mark the item `BLOCKED` in `docs/TASK_STATE.md`;
- use a clearly non-production placeholder only when safe and already allowed by project rules;
- continue every other independent task;
- report the blocker only in the final pre-deploy report unless it prevents all further work.

### PRE-DEPLOY READY gate
The project may be called PRE-DEPLOY READY only when:
- `npm run verify` passes in `app/`;
- responsive/visual review has been completed for the required breakpoints, or any unavailable browser tooling is explicitly recorded;
- no placeholder is being misrepresented as production content;
- all internal routes and critical CTAs have been checked;
- metadata, sitemap, robots, redirects, error pages and legal routes are present as designed;
- `docs/PREDEPLOY_REPORT.md` is current;
- remaining blockers, if any, are explicitly categorized as human/external dependencies.

### Hard deployment boundary
STOP before deployment. Unless the user explicitly gives a separate deployment instruction, do NOT:
- run `vercel deploy`, `vercel --prod`, or equivalent deployment commands;
- change DNS/domain records;
- switch production traffic away from Wix;
- delete/disable the Wix rollback site;
- publish secrets or production credentials;
- claim the site is live.

Local builds, tests, screenshots, static analysis, content validation, and preparation of deployment instructions are allowed and expected.
