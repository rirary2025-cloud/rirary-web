export type NewsItem = {
  slug: string;
  date: string; // YYYY-MM-DD
  category: "COMPANY" | "PROJECT" | "SERVICE" | "MEDIA";
  title: string;
  summary?: string;
  body?: readonly string[];
};

// 正式に公開するお知らせのみ追加する。
// v1.0は未確認のお知らせを載せず、空状態での公開を許容する。
export const newsLaunchMode = "empty-launch-accepted" as const;
export const news: readonly NewsItem[] = [];
