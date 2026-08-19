import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactBand } from "@/components/ui/contact-band";
import { company, messageCommitments, representativeMessage } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "代表挨拶",
  description: "株式会社Riraryの代表挨拶。地域の可能性を、続く事業に変えていくための考え方を紹介します。",
  alternates: { canonical: "/message" },
};

export default function MessagePage() {
  return (
    <main>
      <section className="page-hero message-hero">
        <div className="site-container">
          <Breadcrumbs items={[{ label: "ABOUT", href: "/about" }, { label: "MESSAGE" }]} />
          <span className="eyebrow">MESSAGE</span>
          <h1 className="page-title">代表挨拶</h1>
          <p className="body-lg page-lead">{representativeMessage.headline}</p>
        </div>
      </section>

      <section className="section message-statement-section">
        <div className="site-container message-statement-grid">
          <div>
            <span className="eyebrow">STATEMENT</span>
            <h2 className="section-title section-title-spaced message-statement-title">
              北海道の地域課題を、
              <br />
              新しい発想で解決する。
            </h2>
          </div>
          <p className="body-lg">{representativeMessage.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="site-container message-layout">
          <aside className="message-side" aria-label="代表挨拶の要点">
            <span className="eyebrow">OUR VIEW</span>
            <p>地域の価値を見つけ、届け方を整え、事業として続く形へ。</p>
          </aside>

          <div className="message-body">
            {representativeMessage.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="message-signature">
              <span>{representativeMessage.signature.company}</span>
              <strong>{representativeMessage.signature.title}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="site-container">
          <span className="eyebrow">COMMITMENT</span>
          <h2 className="section-title section-title-spaced section-title-wide">Riraryが大切にすること</h2>
          <div className="message-commitment-grid">
            {messageCommitments.map(([no, title, body]) => (
              <article className="message-commitment" key={title}>
                <span>{no}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container message-next-link">
          <span className="eyebrow">COMPANY</span>
          <h2 className="section-title section-title-spaced">{company.name}について</h2>
          <p className="body-lg">
            会社情報、所在地、事業領域は会社情報ページで確認できます。
          </p>
          <Link className="text-link" href="/about">会社情報を見る ↗</Link>
        </div>
      </section>

      <ContactBand title="地域に必要な次の一手を、一緒に考える。" />
    </main>
  );
}
