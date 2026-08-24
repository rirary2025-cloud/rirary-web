import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactBand } from "@/components/ui/contact-band";
import { businesses } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return businesses.map((business) => ({ slug: business.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = businesses.find((business) => business.slug === slug);
  if (!item) return {};
  return {
    title: `${item.ja} | ${item.en}`,
    description: item.description,
    alternates: { canonical: `/services/${item.slug}` },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: `/services/${item.slug}`,
      title: `${item.ja} | ${item.en}`,
      description: item.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = businesses.find((business) => business.slug === slug);
  if (!item) notFound();

  return (
    <main>
      <section className="page-hero service-detail-hero">
        <div className="site-container">
          <Breadcrumbs items={[{ label: "BUSINESS", href: "/services" }, { label: item.en }]} />
          <div className="service-detail-heading">
            <div>
              <span className="eyebrow">{item.no} / {item.en}</span>
              <h1 className="page-title">{item.ja}</h1>
            </div>
            <p className="body-lg page-lead">{item.description}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container split-editorial">
          <div>
            <span className="eyebrow">WHAT WE DO</span>
            <h2 className="section-title">必要な手段を、<br />課題から逆算する。</h2>
          </div>
          <div className="editorial-body">
            <p className="body-lg">{item.detail}</p>
            {item.image ? (
              <figure className="service-feature-image">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={2048}
                  height={860}
                  sizes="(min-width: 980px) 48vw, calc(100vw - 40px)"
                />
                {item.image.caption ? <figcaption>{item.image.caption}</figcaption> : null}
              </figure>
            ) : null}
            {item.bridge ? (
              <section className="service-bridge-panel" aria-labelledby={`${item.slug}-bridge-title`}>
                <span className="eyebrow">{item.bridge.eyebrow}</span>
                <h2 id={`${item.slug}-bridge-title`}>{item.bridge.title}</h2>
                {item.bridge.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ) : null}
            {item.facts ? (
              <dl className="service-fact-list">
                {item.facts.map((fact) => (
                  <div className="service-fact-row" key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
            <div className="capability-list">
              {item.capabilities.map((capability, index) => (
                <div className="capability-row" key={capability}>
                  <span>{String(index + 1).padStart(2, "0")}</span><strong>{capability}</strong>
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
            <h2>こんな課題に</h2>
            <ul className="plain-list">{item.forWho.map((text) => <li key={text}>{text}</li>)}</ul>
          </article>
          <article className="info-panel">
            <span className="eyebrow">PROCESS</span>
            <h2>進め方</h2>
            <ol className="process-list">{item.approach.map((text, index) => <li key={text}><span>{String(index + 1).padStart(2, "0")}</span><p>{text}</p></li>)}</ol>
          </article>
        </div>
      </section>

            {slug === "business-support" && <section className="section section-sand service-product-feature">
        <div className="site-container service-product-layout">
          <div className="service-product-copy">
            <span className="eyebrow">RIRARY PRODUCT / みんなで発信</span>
            <h2 className="section-title section-title-spaced">発信を、<br />ひとりの仕事にしない。</h2>
            <p className="body-lg">写真とひと言をLINEで送るだけで、各SNS向けの投稿文を作成。店舗や団体のメンバーが、それぞれのタイミングで情報発信できるWebアプリを開発・運用しています。</p>
            <div className="service-product-actions"><Link className="btn button-dark" href="/works/minna-de-hasshin">開発・運用実績を見る ↗</Link><a className="text-link" href="https://minna-de-deploy.com/" target="_blank" rel="noreferrer">サービスサイトを見る ↗</a></div>
          </div>
          <div className="service-product-media"><Image src="/images/works/minna-de-hasshin/how-it-works.jpg" alt="みんなで発信の利用イメージを紹介する漫画パネル" fill sizes="(min-width: 760px) 50vw, 100vw" /></div>
        </div>
      </section>}<section className="section">
        <div className="site-container related-businesses">
          <span className="eyebrow">OTHER BUSINESS</span>
          <h2 className="section-title">他の事業領域</h2>
          <div className="related-links">
            {businesses.filter((business) => business.slug !== item.slug).map((business) => (
              <Link href={`/services/${business.slug}`} key={business.slug}>
                <span>{business.no}</span><strong>{business.en}</strong><small>{business.ja}</small><b>↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactBand title={`${item.ja}について相談する。`} />
    </main>
  );
}
