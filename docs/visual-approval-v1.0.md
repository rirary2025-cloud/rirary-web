# Visual approval — v1.0

## Current visual state

現在のサイトは、正式なRirary現場写真が揃うまでの暫定方針として、次のビジュアルを使っている。

| Slot | Current asset / treatment | Production decision |
|---|---|---|
| Home hero | `app/public/images/home/wix-hero-local-communication.png` | ユーザー指示により旧Rirary HP画像を暫定採用 |
| Regional project section | `app/public/images/regional/wix-cocreation-hiking.jpg` | ユーザー指示により旧Rirary HP画像を暫定採用 |
| Works images | 公開候補案件ごとの提供画像 | 画像・ロゴ・画面キャプチャの掲載許可を確認する |
| Brand mark | `app/public/brand/rirary-bee-mark.png` | 公式ロゴ由来として実装済み |

## Recommended decision

現方針: ユーザー指示により、旧Rirary HPで使用していた画像をローカル保存して暫定採用する。

理由:
- 現在のサイトは「北海道の地域課題を、新しい発想で解決する会社」という実行性が軸。
- 抽象ビジュアルだけだと、地域現場で動いている会社という信頼が弱くなる。
- ただし未許可写真や、実在しない提携・成果を連想させる写真を使う方がリスクは高い。

## Acceptable launch choices

| 選択肢 | 内容 | 条件 |
|---|---|---|
| A. 現在の非写真ビジュアルで公開 | 現行UIを正式な編集ビジュアルとして承認する | ユーザーが明示承認する |
| B. 旧Rirary HP画像へ差し替え | ヒーロー/地域セクションへ旧HP画像を配置する | 採用中。Wix CDNへ直リンクせずローカル保存 |
| C. 一部だけ差し替え | ヒーローのみ、または地域セクションのみ差し替える | 残る非写真枠を正式表現として承認する |

## Photo intake checklist

写真を差し替える場合、1枚ごとに確認する。

```text
ファイル名:
使用箇所:
撮影者 / 権利者:
写っている人物の掲載許可:
施設・店舗・自治体名の掲載可否:
撮影場所の公開可否:
説明文 / alt:
本番掲載可否:
```

## Asset rules

- Wix CDN画像を本番で直リンクしない。
- 写真は `app/public/images/` に保存する。
- 実在しない案件、自治体連携、成果、顧客関係を連想させる写真は使わない。
- 汎用ストック写真は、ユーザーが明示承認した場合を除きヒーローに使わない。
- 画像差し替え後は375 / 768 / 1024 / 1440幅でトリミングを確認する。
