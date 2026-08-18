import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      // Confirmed legacy Wix URLs. Explicit 301 preserves migration intent.
      { source: "/共創", destination: "/about", statusCode: 301 },
      { source: "/book-online", destination: "/contact", statusCode: 301 },
      { source: "/blog", destination: "/news", statusCode: 301 },
      { source: "/s-projects-side-by-side", destination: "/works", statusCode: 301 },
      { source: "/サービス", destination: "/services", statusCode: 301 },
      { source: "/私たちについて", destination: "/about", statusCode: 301 },
      { source: "/プライバシーポリシー", destination: "/privacy", statusCode: 301 },
      { source: "/cookie-クッキー-ポリシー", destination: "/privacy", statusCode: 301 },
      { source: "/search-results", destination: "/", statusCode: 301 },
      { source: "/notifications", destination: "/", statusCode: 301 },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
