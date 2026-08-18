# Wix → Next.js URL migration map — v1.0 candidate

## Confirmed legacy routes

| Wix URL | New URL | Status | Note |
|---|---|---:|---|
| `/` | `/` | 200 | トップ再構築 |
| `/共創` | `/about` | 301 | 思想・共創をABOUTへ統合 |
| `/book-online` | `/contact` | 301 | 旧オンライン予約を相談導線へ |
| `/blog` | `/news` | 301 | ブログ一覧をNEWSへ統合。個別記事は別途棚卸し必須 |
| `/s-projects-side-by-side` | `/works` | 301 | 旧「お客様の声」導線をWORKSへ |
| `/サービス` | `/services` | 301 | 事業ページへ |
| `/私たちについて` | `/about` | 301 | ABOUTへ |
| `/プライバシーポリシー` | `/privacy` | 301 | 新Privacyへ |
| `/cookie-クッキー-ポリシー` | `/privacy` | 301 | 暫定統合。公開前に法務/運用要件を再確認 |
| `/search-results` | `/` | 301 | Wix検索結果ページ。新サイトでは検索機能を提供しないためトップへ |
| `/notifications` | `/` | 301 | Wix通知系ページ。新サイトでは独立ページとして扱わない |

## Before DNS cutover

- Wix管理画面またはSearch Consoleからインデックス済みURLを全件取得する。
- ブログ個別記事URLが残っている場合は1URLずつ移行先を決める。
- Google検索 `site:rirary.net` の結果も補助確認として使用する。
- 重要な被リンク先は301を必ず設定する。
- URL末尾・日本語URL・旧予約URLを実ブラウザで確認する。

## Implementation note

日本語パスは `next.config.ts` のredirectだけではローカル検証で404になるケースがあったため、Next.js 16の `app/proxy.ts` でも明示的に301を処理する。

## Do not

存在を確認していない旧URLを推測で大量生成しない。個別ブログをすべて `/news` に一括転送する判断は、記事資産の価値を確認してから行う。
