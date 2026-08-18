# Detail Pages v0.7

## Goal
トップページで興味を持った訪問者が、各事業・地域事業・実績を理解し、そのまま相談へ進める中ページ構造を整える。

## Business routes
- `/services/digital`
- `/services/creative`
- `/services/business-support`
- `/services/commerce`

各ページは `site-data.ts` のデータから生成する。構成は Hero → What we do → Capabilities → For who → Process → Other business → Contact。

## Regional Project
`/regional-project` は4事業とは別軸の独立ページ。地域施策を「情報発信」だけに限定せず、情報・行動・商流・継続運営の4視点で説明する。

## Works
`/works/[slug]` の詳細テンプレートを実装。公開許可と事実確認が済んだ案件のみ `works` 配列へ追加する。案件名、数値、成果、パートナー名を推測で作らない。

## Common UI
- Breadcrumbs
- ContactBand
- page hero
- section headings
- related business links

## SEO
各事業詳細は `generateMetadata` を使用。sitemapにも4事業詳細と公開済みWorksを自動追加する。
