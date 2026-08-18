# Wix asset inventory — v1.0 candidate

## Purpose
現行Wixから新サイトへ移行する素材を「そのまま流用」「要確認」「使わない」に分ける。画像の著作権・利用許諾・人物掲載許可は公開前に確認する。

## Confirmed image references from current site

| Current usage | Wix asset | Proposed handling |
|---|---|---|
| ホーム上部画像 | `774c6f_afeb33830e614eecbbd7f080e4f13941~mv2.png` | 要確認。Rirary固有素材なら候補、テンプレ/ストックなら不採用 |
| 共創ページ画像 | `11062b_3e40e95c2a08437c90516429c54c720b~mv2.jpg` | ユーザー指示により暫定採用 |
| LINEアイコン | `774c6f_ebd76d651bef46ffaa896aa7ce19c0f1~mv2.png` | 原則不採用。公式ブランドガイドに沿った素材を別途利用 |
| TikTokアイコン | `774c6f_8036f67c7c064c6cb4d59d40f0b808ef~mv2.png` | 原則不採用 |
| Instagramアイコン | `774c6f_3026d6e6f5854890929fc144fd164322~mv2.png` | 原則不採用 |
| Xアイコン | `774c6f_deb41f12388447e38647f3688cd48af9~mv2.png` | 原則不採用 |
| 書籍画像 | `774c6f_2f4a2afca96948ee84dc537363ab8cf1~mv2.png` | サービスとして継続する場合のみ要確認 |

## Required production assets

1. 正式なRiraryロゴ（SVG推奨、PNGも可）
2. ヒーロー用のRirary活動写真 1〜3枚
3. REGIONAL PROJECT用の現地写真 2〜4枚
4. 公開許可済み実績写真（案件ごと）
5. 代表/チーム写真を掲載する場合は公開許可済み素材

## Target filenames

- `public/brand/rirary-logo.svg`
- `public/brand/rirary-mark.svg`
- `public/images/home/hero-01.webp`
- `public/images/home/hero-02.webp`
- `public/images/regional/regional-01.webp`
- `public/images/works/<slug>/cover.webp`

## Interim migrated files

- `app/public/images/home/wix-hero-local-communication.png`
- `app/public/images/regional/wix-cocreation-hiking.jpg`

## Rule
正式素材が入るまで、プレースホルダーを本番素材として扱わない。Codexは画像を推測生成して企業実績として掲載しない。
