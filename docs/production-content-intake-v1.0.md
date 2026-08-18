# Production content intake — v1.0 candidate

v1.0公開に必要な「事実確認済みデータ」をここに集める。未確定情報を画面へ直接書かない。

## WORKS 1件あたり

- 公開可否
- 案件名
- クライアント/地域名（公開可の場合のみ）
- カテゴリ
- 課題
- Riraryの担当範囲
- 実施内容
- 成果（確認できる数値のみ）
- 掲載画像
- 画像/ロゴの掲載許可
- 公開日

実装先: `app/content/works.ts`

## NEWS 1件あたり

- 公開日
- カテゴリ
- タイトル
- 概要
- 本文
- 関連リンク（必要な場合）

実装先: `app/content/news.ts`

## Company / Contact

現状の登録値:
- 株式会社Rirary
- 〒066-0052 北海道千歳市文京6-9-3
- 080-9617-0518
- rirary2025@gmail.com
- LINE URLは `app/lib/site-data.ts` で管理

公開直前に、登記/実運用上の最新値と一致するか再確認する。

## Contact delivery

フォームは `mailto:` 方式で運用する。入力内容をメール本文へ整形し、利用者のメールアプリを開く。

公開前に、PC・スマートフォンでメールアプリ起動と、LINE / EMAIL / PHONEの代替導線を確認する。
