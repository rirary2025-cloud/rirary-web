import type { Metadata } from "next";

export const siteUrl = "https://www.rirary.net";
export const siteName = "株式会社Rirary";
export const defaultDescription =
  "株式会社Riraryは、北海道の地域企業・自治体・事業者に向けて、デジタル支援、クリエイティブ、事業支援、コマース、地域活性化事業を展開しています。";

export function createMetadata({
  title,
  description = defaultDescription,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const canonical = path === "/" ? "/" : path.replace(/\/$/, "");
  const resolvedTitle = title
    ? `${title}｜${siteName}`
    : `${siteName}｜北海道の地域課題を、新しい発想で解決する会社。`;

  return {
    title: title ?? "北海道の地域課題を、新しい発想で解決する会社。",
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: canonical,
      siteName,
      title: resolvedTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
    },
  };
}
