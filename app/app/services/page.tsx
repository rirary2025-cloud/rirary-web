import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactBand } from "@/components/ui/contact-band";
import { businesses } from "@/lib/site-data";

export const metadata: Metadata = { title: "事業紹介", description: "株式会社Riraryの4つの事業領域をご紹介します。", alternates: { canonical: "/services" } };

export default function ServicesPage() {
  return <main>
    <section className="page-hero"><div className="site-container"><Breadcrumbs items={[{ label: "BUSINESS" }]} /><span className="eyebrow">BUSINESS</span><h1 className="page-title">地域に必要な手段を、<br/>ひとつの会社で。</h1><p className="body-lg page-lead">決まった商品を売るのではなく、地域や企業の課題に合わせて必要な手段を組み合わせます。</p></div></section>
    <section className="section"><div className="site-container detail-grid">{businesses.map((item)=><article className="detail-card" id={item.slug} key={item.slug}><span className="eyebrow">{item.no} / {item.en}</span><h2>{item.ja}</h2><p>{item.description}</p><p>{item.detail}</p><Link className="text-link" href={`/services/${item.slug}`}>詳しく見る ↗</Link></article>)}</div></section>
    <ContactBand />
  </main>;
}
