import type { Metadata } from "next";
import Link from "next/link";
import { company, principles } from "@/lib/site-data";
import { ContactBand } from "@/components/ui/contact-band";

export const metadata: Metadata = { title: "会社情報・私たちについて", description: "株式会社Riraryの考え方と会社情報。", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero about-hero">
        <div className="site-container about-hero-grid">
          <div className="reveal">
            <span className="eyebrow">COMPANY / MEMBERS</span>
            <h1 className="page-title">Rirary<br className="mobile-only-break" />について</h1>
          </div>
          <p className="body-lg page-lead reveal reveal-delay-1">
            北海道の地域課題に向き合い、デジタル・クリエイティブ・事業支援・コマースを組み合わせて、地域に合う実行方法をつくる会社です。
          </p>
        </div>
      </section>

      <section className="section about-statement-section reveal">
        <div className="site-container statement-stack">
          <span className="eyebrow">MISSION</span>
          <h2 className="statement-title">
            北海道の<br className="mobile-only-break" />
            地域課題を、<br />
            新しい発想で<br className="mobile-only-break" />
            解決する。
          </h2>
          <p className="body-lg statement-copy">
            都市部の成功例をそのまま当てはめるのではなく、その地域の商圏、人の動き、続けられる運用から考えます。
          </p>
        </div>
      </section>

      <section className="section section-sand reveal">
        <div className="site-container about-vision-grid">
          <div>
            <span className="eyebrow">VISION</span>
            <h2 className="section-title section-title-spaced">競争から、<br />共創へ。</h2>
          </div>
          <div className="editorial-copy">
            <p className="body-lg">
              人口減少や少子高齢化が進む地域では、企業や自治体が個別に競うだけでは解決できない課題があります。立場を越えて強みを持ち寄り、新しい価値をつくること。Riraryは、その共創を実行に移します。
            </p>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="site-container">
          <span className="eyebrow">PRINCIPLES</span>
          <h2 className="section-title section-title-spaced section-title-wide">地域に合う仕組みを、現場から組み立てる。</h2>
          <div className="approach-grid">{principles.map(([no, title, body]) => <div className="approach-item" key={title}><span className="approach-number">{no}</span><strong>{title}</strong><span>{body}</span></div>)}</div>
        </div>
      </section>

      <section className="section section-sand reveal">
        <div className="site-container company-info-layout">
          <div>
            <span className="eyebrow">COMPANY INFORMATION</span>
            <h2 className="section-title section-title-spaced">会社情報</h2>
            <p className="body-lg about-message-link-copy">
              Riraryの考え方と、地域に向き合う姿勢を代表挨拶としてまとめています。
            </p>
            <Link className="text-link" href="/message">代表挨拶を見る ↗</Link>
          </div>
          <dl className="company-table company-table-large">
            <div><dt>会社名</dt><dd>{company.name}</dd></div>
            <div><dt>所在地</dt><dd>{company.postalCode}<br />{company.address}</dd></div>
            <div><dt>電話</dt><dd><a href={`tel:${company.phone.replaceAll("-", "")}`}>{company.phone}</a></dd></div>
            <div><dt>メール</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
          </dl>
        </div>
      </section>

      <ContactBand title="地域に必要な次の一手を、一緒に考える。" />
    </main>
  );
}
