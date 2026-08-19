import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";
import { company } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div>
          <Link className="brand brand-footer" href="/" aria-label="株式会社Rirary ホーム">
            <BrandMark />
          </Link>
          <p className="footer-statement">{company.statement}</p>
          <div className="footer-contact">
            <span>{company.postalCode}</span>
            <span>{company.address}</span>
            <a href={`tel:${company.phone.replaceAll("-", "")}`}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </div>
        <div className="footer-links">
          <Link href="/services">事業紹介</Link>
          <Link href="/works">実績</Link>
          <Link href="/regional-project">地域活性化事業</Link>
          <Link href="/about">会社情報</Link>
          <Link href="/message">代表挨拶</Link>
          <Link href="/contact">お問い合わせ</Link>
        </div>
        <div className="footer-meta">
          <Link href="/privacy">プライバシーポリシー</Link>
          <span>© Rirary Inc.</span>
        </div>
      </div>
    </footer>
  );
}
