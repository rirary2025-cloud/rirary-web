import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "株式会社Rirary",
    short_name: "Rirary",
    description: "地方の課題を、新しい発想で解決する会社。",
    start_url: "/",
    display: "standalone",
    background_color: "#f4efe8",
    theme_color: "#f27622",
    lang: "ja",
  };
}
