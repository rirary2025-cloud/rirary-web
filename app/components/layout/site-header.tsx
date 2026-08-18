import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";

const navItems = [
  { ja: "事業紹介", en: "BUSINESS", href: "/services" },
  { ja: "実績", en: "WORKS", href: "/works" },
  { ja: "地域活性化", en: "REGIONAL PROJECT", href: "/regional-project" },
  { ja: "会社情報", en: "ABOUT", href: "/about" },
  { ja: "お知らせ", en: "NEWS", href: "/news" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container site-header-inner">
        <Link className="brand" href="/" aria-label="株式会社Rirary ホーム">
          <BrandMark />
        </Link>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} lang="ja" data-label-en={item.en}>{item.ja}</Link>
          ))}
        </nav>
        <div className="site-header-actions">
          <Link className="header-cta" href="/contact">まずは相談する</Link>
          <details className="mobile-menu">
            <summary className="menu-button" aria-label="メニューを開く">
              <span />
              <span />
            </summary>
            <nav className="mobile-nav" aria-label="モバイルナビゲーション">
              {navItems.map((item) => (
                <Link href={item.href} key={item.href} lang="ja" data-label-en={item.en}>{item.ja}</Link>
              ))}
              <Link className="mobile-nav-contact" href="/contact">まずは相談する</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
