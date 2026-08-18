# Operations / CMS design v0.8

## Goal
公開後に「NEWS・WORKS・問い合わせ」を安全に更新・運用できる状態を作る。

## NEWS
- データ: `app/content/news.ts`
- 正式情報のみ追加する。
- `date` は `YYYY-MM-DD`。
- 将来記事本文が増えたら `/news/[slug]` を追加する。

## WORKS
- データ: `app/content/works.ts`
- 公開許可済み案件のみ追加する。
- 案件名、成果、数値を推測しない。
- データ追加で `/works/[slug]` が生成される。

## CMS方針
初期公開では外部CMSを必須にしない。更新頻度と運用担当が固まるまでは、TypeScriptデータをGit/Codex経由で更新する。CMS導入時は表示コンポーネントを維持し、data sourceだけ差し替える。

候補は Headless CMS / Supabase 等だが、契約・権限・更新頻度を確認してから決定する。

## Contact
- UI: `components/forms/contact-form.tsx`
- 入力内容をメール本文へ整形し、`mailto:` で利用者のメールアプリを開く。
- 送信先は `app/lib/site-data.ts` の `company.email`。
- Google Apps Script / Webhook / Vercel Environment Variablesは初期公開では使用しない。
- メールアプリが開かない場合に備え、LINE / EMAIL / PHONEの代替導線を残す。
- honeypot、文字数制限、クライアント側必須チェックを実装済み。

## Production checklist
1. 正式ロゴと写真を配置
2. NEWS/WORKSの公開情報を投入
3. 問い合わせフォームからメール作成画面が開くことを確認
4. LINE / EMAIL / PHONEの代替導線を確認
5. `npm run lint`
6. `npm run build`
7. privacy文面の最終確認
8. Wix旧URL一覧と301 redirect確認
9. Search Console / analyticsは公開方針決定後に接続
