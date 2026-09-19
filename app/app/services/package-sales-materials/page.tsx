import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactBand } from "@/components/ui/contact-band";
import { siteUrl } from "@/lib/seo";

const title = "北海道の地域産品向けパッケージ・販促資材制作";
const description =
  "株式会社Riraryは、北海道の地域産品や一次産品向けに、台紙・シール・ラベルなどのパッケージ・販促資材の企画、デザイン、印刷手配を支援します。販売導線や情報発信まで合わせて整えます。";
const path = "/services/package-sales-materials";

const faq = [
  {
    question: "北海道の地域産品向けに台紙やシールの制作を相談できますか？",
    answer:
      "相談できます。商品用台紙、シール、ラベルなどのパッケージ・販促資材について、企画、デザイン、印刷手配まで支援します。",
  },
  {
    question: "印刷物だけでなく、売り方や情報発信も相談できますか？",
    answer:
      "可能です。販売場所、見せ方、ECやSNSでの伝え方まで含めて、地域産品が手に取られやすくなる導線を整理します。",
  },
  {
    question: "小規模な事業者や一次産業の相談にも対応できますか？",
    answer:
      "対応できます。地域の小規模事業者や一次産業の商品に合わせて、無理なく始められる制作範囲と進め方を一緒に整理します。",
  },
] as const;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: path,
    title,
    description,
  },
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function PackageSalesMaterialsPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "HOME", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "事業紹介", item: `${siteUrl}/services` },
            { "@type": "ListItem", position: 3, name: title, item: `${siteUrl}${path}` },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: title,
          description,
          serviceType: "パッケージ・販促資材制作",
          areaServed: "北海道",
          provider: {
            "@type": "LocalBusiness",
            name: "株式会社Rirary",
            url: siteUrl,
            address: {
              "@type": "PostalAddress",
              addressRegion: "北海道",
              addressLocality: "千歳市",
              addressCountry: "JP",
            },
          },
          url: `${siteUrl}${path}`,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />

      <section className="page-hero service-detail-hero">
        <div className="site-container">
          <Breadcrumbs items={[{ label: "BUSINESS", href: "/services" }, { label: "PACKAGE" }]} />
          <div className="service-detail-heading">
            <div>
              <span className="eyebrow">COMMERCE / PACKAGE</span>
              <h1 className="page-title">北海道の地域産品を、手に取られる形へ。</h1>
            </div>
            <p className="body-lg page-lead">
              Riraryは、北海道の地域産品や一次産品の魅力が販売現場で伝わるよう、台紙・シール・ラベルなどのパッケージ・販促資材の企画、デザイン、印刷手配を支援しています。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container split-editorial">
          <div>
            <span className="eyebrow">WHAT WE DO</span>
            <h2 className="section-title">商品の価値を、<br />売り場で伝わる形に。</h2>
          </div>
          <div className="editorial-body">
            <p className="body-lg">
              商品そのものの品質や背景が良くても、販売現場で魅力が伝わらなければ手に取られにくくなります。Riraryでは、地域産品の見せ方、台紙やシールの役割、販売導線、情報発信までを整理し、継続して売れる形づくりを支援します。
            </p>
            <div className="service-bridge-panel" aria-labelledby="package-support-title">
              <span className="eyebrow">SUPPORT</span>
              <h2 id="package-support-title">台紙・シール・ラベルから、販売導線まで</h2>
              <p>
                対応範囲は、商品用台紙、シール、ラベル、簡易的な販促資材の企画・デザイン・印刷手配です。単に印刷物を作るだけでなく、どこで、誰に、どのように届けるかまで考えます。
              </p>
              <p>
                たとえば北海道浦河町・井寒台で昆布漁に携わる事業者向けに、商品用台紙とシールの印刷を担当しました。地域産品の見せ方を整え、販売時に商品の魅力が伝わりやすいパッケージづくりを支援しています。
              </p>
            </div>
            <div className="capability-list">
              {["商品用台紙の企画・デザイン・印刷手配", "シール・ラベル制作", "地域産品の見せ方整理", "店頭・イベント・ECでの販売導線設計", "SNSやWebでの商品紹介文の整理"].map((item, index) => (
                <div className="capability-row" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-container two-column-cards">
          <article className="info-panel">
            <span className="eyebrow">FOR WHO</span>
            <h2>こんな相談に</h2>
            <ul className="plain-list">
              <li>北海道の地域産品や一次産品の見せ方を整えたい</li>
              <li>商品用台紙やシールを作りたいが、進め方が分からない</li>
              <li>イベント、直売所、ECで手に取られやすい形にしたい</li>
              <li>印刷物とSNS・Webでの発信を合わせて整えたい</li>
            </ul>
          </article>
          <article className="info-panel">
            <span className="eyebrow">PROCESS</span>
            <h2>進め方</h2>
            <ol className="process-list">
              {["商品や販売場所を確認", "台紙・シール・ラベルの役割を整理", "デザインと掲載情報を設計", "印刷仕様と納品方法を調整", "販売後の反応を見て改善"].map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="site-container split-editorial">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">よくある相談</h2>
          </div>
          <div className="editorial-body">
            {faq.map((item) => (
              <section className="service-bridge-panel" key={item.question}>
                <h2>{item.question}</h2>
                <p>{item.answer}</p>
              </section>
            ))}
            <div className="related-links">
              <Link href="/services/commerce">
                <span>04</span>
                <strong>COMMERCE</strong>
                <small>コマース事業を見る</small>
                <b>↗</b>
              </Link>
              <Link href="/contact">
                <span>CTA</span>
                <strong>CONTACT</strong>
                <small>相談する</small>
                <b>↗</b>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactBand title="パッケージ・販促資材制作について相談する。" />
    </main>
  );
}
