# Contact delivery — v1.0

## Current decision

問い合わせフォームは、入力内容をメール本文へ整形し、`mailto:` で利用者のメールアプリを開く。

Google Apps Script、Webhook、Vercel Environment Variablesは初期公開では使わない。

## Why this decision

- GAS Webアプリ公開設定・権限承認・Sheets連携で運用リスクが出た。
- 初期公開では、問い合わせの確実な代替導線としてメール、LINE、電話をすでに表示している。
- `mailto:` 方式ならサーバー側の秘密値・外部Webhook・追加課金サービスに依存しない。

## User flow

1. `/contact` でフォームに入力する。
2. 「メールアプリを開く」を押す。
3. 入力内容が件名・本文に入ったメール作成画面が開く。
4. 利用者が内容を確認して送信する。

## Recipient

送信先は `app/lib/site-data.ts` の `company.email` を使う。

現在値:

```text
rirary2025@gmail.com
```

## Limitations

- 利用者の端末にメールアプリが設定されていない場合、メール作成画面が開かないことがある。
- サイト側では送信完了を検知できない。
- 問い合わせ内容は自動でGoogle Sheetsへ保存されない。

そのため、同じページにLINE、メール直リンク、電話の代替導線を残す。

## Acceptance test

1. `/contact` のフォームに必須項目を入力する。
2. 「メールアプリを開く」を押す。
3. 宛先が `rirary2025@gmail.com` になる。
4. 件名に相談カテゴリが入る。
5. 本文にお名前、会社・団体名、メールアドレス、電話番号、相談内容、問い合わせ本文が入る。
6. メールアプリが開かない場合でも、下部のメール直リンク・LINE・電話導線が使える。

## Future option

問い合わせ件数が増え、記録・通知・自動返信が必要になった場合は、Resend等のメール送信サービス、または認証済みWebhook連携を再検討する。
