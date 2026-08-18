import { ImageResponse } from "next/og";

export const alt = "株式会社Rirary｜北海道の地域課題を、新しい発想で解決する会社。";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 78px",
          background: "#f4efe8",
          color: "#171717",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 999,
                background: "#ff5a2c",
              }}
            />
            <div style={{ fontSize: 36, fontWeight: 700 }}>Rirary</div>
          </div>
          <div style={{ fontSize: 20, letterSpacing: "0.12em" }}>HOKKAIDO / JAPAN</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 82,
              lineHeight: 1.04,
              fontWeight: 700,
              maxWidth: 980,
            }}
          >
            Local problems.
            <span>New ideas.</span>
          </div>
          <div style={{ fontSize: 24, letterSpacing: "0.08em" }}>
            DIGITAL / CREATIVE / BUSINESS SUPPORT / COMMERCE / CACAO IMPORT
          </div>
        </div>
        <div style={{ width: 160, height: 16, background: "#f27622", borderRadius: 999 }} />
      </div>
    ),
    size,
  );
}
