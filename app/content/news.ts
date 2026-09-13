export type NewsItem = {
  slug: string;
  date: string; // YYYY-MM-DD
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
];
