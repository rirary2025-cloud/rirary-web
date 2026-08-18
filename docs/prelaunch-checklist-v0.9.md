# Pre-launch checklist v0.9

## Content
- [x] Official Japanese honeybee logo replaces placeholder mark
- [x] Hero and regional project visuals use user-approved local copies from the legacy Rirary site
- [x] Company profile facts rechecked against current Wix/public corporation information
- [ ] WORKS contains only approved public cases
- [x] NEWS contains only real dated announcements / v1.0 empty launch accepted
- [ ] Privacy policy reviewed for actual data handling

## Functional
- [ ] `npm install`
- [x] `npm run lint`
- [x] `npm run build`
- [ ] Contact form success path tested
- [ ] Contact form validation/error path tested
- [ ] LINE, phone and email links tested
- [ ] Mobile navigation checked
- [x] 404 page checked
- [ ] Runtime error boundary checked

## SEO
- [x] Page titles/descriptions reviewed
- [x] Canonical tags resolve to `https://www.rirary.net`
- [x] `/robots.txt` checked
- [x] `/sitemap.xml` checked
- [ ] OG image preview checked
- [x] Organization JSON-LD source checked locally
- [ ] Full current Wix URL inventory exported/crawled
- [x] Observed/search-visible Wix URLs mapped to redirects
- [ ] No preview/test pages indexable

## Vercel / domain
- [ ] Git repository connected
- [ ] Preview deployment reviewed before production
- [ ] Production env vars set
- [ ] `www.rirary.net` added as primary domain
- [ ] `rirary.net` added and redirected to `www`
- [ ] DNS changed only after preview QA passes
- [ ] HTTPS active

## Launch day
- [ ] Final Wix backup/export retained
- [ ] Production deployment succeeds
- [ ] Domain cutover completed
- [ ] Homepage and major routes checked from mobile network
- [ ] Redirects checked with old URLs
- [ ] Contact form tested on production
- [ ] Search Console verification/submission performed if used
- [ ] Analytics verified if implemented

## After launch
- [ ] Check 404s and redirect gaps
- [ ] Check indexing/canonical status
- [ ] Check form delivery
- [ ] Keep Wix subscription/site until rollback risk is acceptable
