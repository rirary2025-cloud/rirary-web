# Homepage UI/UX v1

## Design direction
Rirary should feel like a Hokkaido-rooted project company, not an SNS agency and not a generic SaaS company.
Core visual idea: **Warm editorial × field execution × regional energy**.

## Page rhythm
Use a strong contrast between quiet white/sand editorial sections and one dark strategic section.
Orange is a signal color for action, labels, and small graphic accents. Do not flood the page with orange.

## 01 Header
- Sticky, translucent only when readability is preserved.
- Left: Rirary logo/wordmark.
- Desktop nav: BUSINESS / WORKS / REGIONAL PROJECT / ABOUT / NEWS.
- Primary CTA: 「まずは相談する」.
- Mobile: logo + compact menu button. CTA remains inside menu and may also be shown as a small pill when space permits.

## 02 Hero
### Message
Eyebrow: `RIRARY / HOKKAIDO`
Headline: `北海道の地域課題を、\n新しい発想で解決する会社。`
Body: `デジタル、クリエイティブ、事業支援、コマース。地域に必要な手段を組み合わせ、構想から実行まで伴走します。`
CTA: `まずは相談する` / `事業を見る`

### Layout
Desktop: 12-column composition. Copy uses 7-8 columns; visual panel uses 4-5 columns and can overlap vertically.
Mobile: copy first, image/visual second.
Hero should not feel like a centered landing page. Use editorial alignment and generous whitespace.

### Visual
Preferred: actual Rirary/Hokkaido/project photo.
Fallback during implementation: neutral framed placeholder with `HOKKAIDO / FIELD / PROJECT` treatment. Never ship a fake stock image as a real project photo.

## 03 What we do
Heading: `地域の「困った」を、事業に変える。`
Copy: Rirary starts from the local bottleneck and chooses the required means instead of selling a predetermined tool.
Layout: editorial split; statement large left, explanation right.

## 04 Business
Four cards:
1. DIGITAL / デジタル支援
2. CREATIVE / クリエイティブ
3. BUSINESS SUPPORT / 事業支援
4. COMMERCE / コマース

Desktop: 2×2 asymmetric grid. Avoid four identical SaaS cards.
Each card includes number, English label, Japanese name, one outcome-oriented sentence, arrow link.

## 05 Approach
Heading: `手段ではなく、地域に合う仕組みをつくる。`
Use a connected flow diagram with four ideas:
- 地域ごとに市場は違う
- アナログ × デジタル
- 点ではなく線で設計
- 実行まで伴走
This section explains the operating philosophy visually, not in a long essay.

## 06 Works
Heading: `PROJECTS / WORKS`
Show 3 selected cards initially.
Card anatomy: image, category, project title, role/summary, optional region.
No fabricated metrics, clients or outcomes.

## 07 Regional Project
Full-bleed dark section.
Headline: `地域と一緒に、続く仕組みをつくる。`
This is a strategic pillar and should visually feel more important than a normal service card.
Use one strong wide photo when assets are approved.

## 08 About / Co-creation
Heading: `競争だけではなく、共創で地域を前へ。`
Short statement + link to about.
Warm sand background or large white editorial space.

## 09 News
Compact list. Latest three entries only.
Date / category / title.

## 10 Final CTA
Dark or brand-accent composition depending on the preceding section.
Heading: `まずは、話すところから。`
Support: `課題がまだ整理されていなくても大丈夫です。地域や事業の状況から、一緒に考えます。`
Actions: form / LINE / email.

## Responsive rules
- 375px: one-column; 20px page padding; hero title 42-48px target range.
- 768px: two-column opportunities begin, but keep text readable.
- 1024px+: full editorial grid.
- 1440px: max content width 1200px; whitespace expands, content does not stretch excessively.

## Component map
- `SiteHeader`
- `HomeHero`
- `HomeIntro`
- `BusinessGrid`
- `ApproachFlow`
- `WorksPreview`
- `RegionalFeature`
- `CoCreation`
- `NewsPreview`
- `FinalCta`
- `SiteFooter`

## Approval boundary
This document defines hierarchy, composition, and tone. Photography and exact final copy remain replaceable without redesigning the layout.
