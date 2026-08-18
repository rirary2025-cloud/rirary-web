# NEWS publication decision — v1.0

## Current state

`app/content/news.ts` は空の状態である。

これは実装漏れではなく、正式に公開できるお知らせだけを掲載するための状態。未確認のお知らせ、仮の日付、見栄え目的のダミーNEWSは追加しない。

## Launch decision

v1.0では、NEWSを空で公開する方針とする。

理由:

- 正式な公開日、本文、公開許可が揃ったNEWSがまだ未提供。
- 見栄え目的の仮ニュースを掲載すると、公開情報の信頼性が下がる。
- `/news` とトップページNEWS欄は空状態表示に対応済み。

| 選択肢 | 内容 | 推奨条件 |
|---|---|---|
| A. NEWS空で公開 | NEWS一覧は「COMING SOON」表示のまま公開する | 採用 |
| B. NEWSを追加して公開 | 確認済みのお知らせだけを `app/content/news.ts` に追加する | 公開日・タイトル・本文・公開許可が揃っている場合 |

将来、正式なお知らせが確定したらBへ切り替える。

## Required fields

NEWSを追加する場合は、1件ごとに次を確定する。

```text
公開日:
カテゴリ: COMPANY / PROJECT / SERVICE / MEDIA
タイトル:
概要:
本文:
関連リンク:
公開許可:
```

実装先:

```text
app/content/news.ts
```

## Publication rules

- 日付は `YYYY-MM-DD` で記録する。
- 公開日が未定のものは掲載しない。
- 「予定」「準備中」「近日公開」だけのNEWSは原則掲載しない。
- 実績、提携、イベント参加、メディア掲載は、相手先名・日付・公開許可を確認してから掲載する。
- NEWS詳細ページは現時点では未実装。本文量が多い場合は `/news/[slug]` の追加を検討する。

## Candidate examples to confirm

以下は掲載候補の種類であり、事実としては未確定。公開してよい情報がある場合のみ追加する。

- コーポレートサイトリニューアルのお知らせ
- ジモコ関連の公開可能なお知らせ
- みんなで発信など自社サービスの公開告知
- メディア掲載・登壇・イベント出展

## Acceptance test

NEWSを空で公開する場合:

1. `/news` が空状態として自然に表示される。
2. トップページのNEWS欄も空状態で崩れない。
3. sitemapに架空NEWS詳細URLが出ていない。

NEWSを追加する場合:

1. `app/content/news.ts` に正式情報のみ追加する。
2. `/news` に日付・カテゴリ・タイトルが表示される。
3. `npm run verify` が通る。
4. 公開許可の根拠を `docs/production-content-intake-v1.0.md` または関連資料に残す。
