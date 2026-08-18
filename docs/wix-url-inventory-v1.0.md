# Wix URL inventory — v1.0 working list

## Method

2026-08-17時点で、検索結果と現行Wixサイトのナビゲーション上で確認できたURLを記録する。

この一覧は完全なWix URL棚卸しではない。公開前にWix管理画面、Search Console、アクセス解析、被リンク情報から追加確認する。

2026-08-18に `site:rirary.net` 系の検索結果を再確認した範囲では、主に `/`、`/book-online`、`/共創` が確認できた。現行ナビで観測済みのその他URLも含め、現在の候補URLは `next.config.ts` と `app/proxy.ts` でリダイレクト対応済み。

## Confirmed / observed URLs

| Legacy URL | Evidence | Current decision |
|---|---|---|
| `/` | 現行Wixトップ | `/` へ移行 |
| `/共創` | 現行Wixナビ / 検索結果 | `/about` へ301 |
| `/book-online` | 検索結果 | `/contact` へ301 |
| `/blog` | 現行Wixナビ | `/news` へ301 |
| `/s-projects-side-by-side` | 現行Wixナビ | `/works` へ301 |
| `/サービス` | 現行Wixナビ | `/services` へ301 |
| `/私たちについて` | 現行Wixナビ | `/about` へ301 |
| `/プライバシーポリシー` | 現行Wixナビ | `/privacy` へ301 |
| `/cookie-クッキー-ポリシー` | 現行Wixナビ | `/privacy` へ暫定301 |

## Observed utility URLs

| Legacy URL | Evidence | Current decision |
|---|---|---|
| `/search-results` | 現行Wixナビに「検索結果」として表示 | 新サイトでは検索機能を提供しないため `/` へ301 |
| `/notifications` | 現行Wixナビに「Notifications」として表示 | Wix内部通知系ページとみなし `/` へ301 |

## Required pre-cutover checks

1. Wix管理画面から全ページURLをエクスポートまたは手動確認する。
2. Search Consoleで `rirary.net` のインデックス済みURLを確認する。
3. `site:rirary.net` 検索で補助確認する。
4. ブログ個別記事URLが存在する場合は、1件ごとに `/news`、個別NEWS、または削除の判断を行う。
5. 重要URLはVercel Preview上で301ステータスと遷移先を確認する。

## Do not

- 存在を確認していないWix URLを大量に推測しない。
- 旧ブログ個別記事を、内容確認なしにすべて `/news` へ一括転送しない。
- Wixの検索結果や通知など、ユーザー価値が低い内部ページを主要コンテンツとして扱わない。

## Current implementation status

ローカル本番起動で、次の旧URLは301を確認済み。

- `/共創` → `/about`
- `/サービス` → `/services`
- `/私たちについて` → `/about`
- `/プライバシーポリシー` → `/privacy`
- `/cookie-クッキー-ポリシー` → `/privacy`
- `/book-online` → `/contact`
- `/blog` → `/news`
- `/s-projects-side-by-side` → `/works`
- `/search-results` → `/`
- `/notifications` → `/`
