export type NewsItem = {
  slug: string;
  date: string; // YYYY-MM-DD or YYYY-MM
  category: "COMPANY" | "PROJECT" | "SERVICE" | "MEDIA";
  title: string;
  summary?: string;
  body?: readonly string[];
  links?: readonly {
    label: string;
    href: string;
  }[];
};

// 正式に公開するお知らせのみ追加する。
export const news: readonly NewsItem[] = [
  {
    slug: "minna-de-hasshin-release",
    date: "2026-08-25",
    category: "SERVICE",
    title: "「みんなで発信」の提供を開始しました",
    summary:
      "LINEに写真とひと言を送るだけで、複数のSNS向け投稿文を作成できる情報発信支援Webアプリ「みんなで発信」の提供を開始しました。",
    body: [
      "株式会社Riraryは、地域の店舗や団体の情報発信を支援するWebアプリ「みんなで発信」の提供を開始しました。",
      "「みんなで発信」は、LINEに写真とひと言を送るだけで、Instagram・TikTok・Facebook・X・Threadsなど各SNSに合わせた投稿文とハッシュタグを作成できるサービスです。",
      "発信担当者だけに負担が集中しないよう、店主やスタッフがそれぞれのタイミングで日常の情報を発信しやすくすることを目指しています。",
    ],
    links: [{ label: "みんなで発信のサイトを見る", href: "https://minna-de-deploy.com/" }],
  },
  {
    slug: "partnership-building-declaration",
    date: "2026-05",
    category: "COMPANY",
    title: "パートナーシップ構築宣言の登録企業として公表されました",
    summary:
      "株式会社Riraryは、2026年5月に「パートナーシップ構築宣言」を行い、登録企業として公表されました。",
    body: [
      "株式会社Riraryは、2026年5月に「パートナーシップ構築宣言」を行い、登録企業として公表されました。",
      "パートナーシップ構築宣言は、サプライチェーン全体の付加価値向上と、大企業・中小企業の共存共栄を目指す取り組みです。",
      "Riraryは、取引先や地域企業との関係性を大切にしながら、地域と事業の持続的な発展につながる連携を進めていきます。",
    ],
    links: [{ label: "パートナーシップ構築宣言の概要を見る", href: "https://www.biz-partnership.jp/outline.html" }],
  },
];
