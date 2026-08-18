# Launch readiness — v1.0 candidate

## Code gate

```bash
cd app
npm install
npm run preflight
npm run lint
npm run build
npm run dev
```

ブラウザでPC/スマホ幅を確認する。

## Release blockers

- [x] 正式ロゴへ差し替え
- [x] ヒーロー写真または正式採用ビジュアルを確定
- [ ] 問い合わせフォームのメールアプリ起動と代替導線を実機確認
- [x] 会社情報の最終確認
- [ ] プライバシーポリシーの内容確認
- [ ] 旧Wix全URLの棚卸し
- [x] 重要な旧URLの301テスト
- [ ] OGP表示確認
- [x] sitemap / robots確認
- [x] Vercel本番デプロイ
- [ ] DNS切替
- [ ] Vercel本番URLでPC/iPhone実機QA

## Can launch empty

WORKSとNEWSは、事実確認済み情報がまだない場合は空状態のまま公開可能。ただし「仮実績」「仮ニュース」を埋めて見栄えを作らない。

## Recommended cutover sequence

1. GitHubへpush
2. Vercel Preview作成
3. UI/フォーム/SEO/301 QA
4. Production deploy
5. `www.rirary.net` をProductionへ接続
6. apex `rirary.net` → `www.rirary.net`
7. Search Consoleでsitemap送信
8. 旧Wixは即削除せず短期間ロールバック可能な状態を保持
