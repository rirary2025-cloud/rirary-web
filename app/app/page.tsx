import { createMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { HomeHero } from "@/components/sections/home-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { businesses, localChallenges, principles, strengths } from "@/lib/site-data";
import { works } from "@/content/works";
import { news } from "@/content/news";

export const metadata = createMetadata({ path: "/" });

export default function Home() {
  return (
    <main>
      <HomeHero />

      <section className="section section-sand reveal">
        <div className="site-container editorial-split">
          <div>
            <span className="eyebrow">WHAT WE DO</span>
            <h2 className="section-title section-title-spaced">地域の「困った」を、<br />事業に変える。</h2>
          </div>
          <p className="body-lg editorial-copy">
            Riraryは、決まった商品やツールを売るところから始めません。地域や企業が本当に困っていることを見つけ、必要な手段を組み合わせて、実行できる形にしていきます。
          </p>
        </div>
      </section>

      <section className="section reveal">
        <div className="site-container">
          <div className="section-heading-row section-heading-row-start">
            <div>
              <span className="eyebrow">LOCAL CHALLENGE</span>
              <h2 className="section-title section-title-spaced section-title-wide">地方企業のリアルな壁に、<br />現場から向き合う。</h2>
            </div>
            <p className="body-lg section-side-copy">
              SNSやLINEを使えば解決、ではありません。誰に届け、どこへ誘導し、どう続けるかまで整理して、地域に合う導線をつくります。
            </p>
          </div>
          <div className="challenge-grid">
            {localChallenges.map(([no, title, body]) => (
              <article className="challenge-card" key={title}>
                <span>{no}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" id="business">
        <div className="site-container">
          <span className="eyebrow">BUSINESS</span>
          <h2 className="section-title section-title-spaced section-title-medium">地域に必要な手段を、ひとつの会社で。</h2>
          <div className="business-grid">
            {businesses.map((item) => (
              <article className="card business-card" key={item.en}>
                <div>
                  <span className="business-card-number">{item.no}</span>
                  <div className="eyebrow business-card-label">{item.en}</div>
                  <h3>{item.ja}</h3>
                  <p>{item.description}</p>
                </div>
                <Link className="business-card-link" href={`/services/${item.slug}`}>詳しく見る <span>↗</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sand reveal">
        <div className="site-container">
          <span className="eyebrow">APPROACH</span>
          <h2 className="section-title section-title-spaced section-title-wide">手段ではなく、地域に合う仕組みをつくる。</h2>
          <div className="strength-grid">
            {strengths.map(([no, title, body]) => (
              <article className="strength-card" key={title}>
                <span>{no}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="approach-grid">
            {principles.map(([no, title, body]) => (
              <div className="approach-item" key={title}>
                <span className="approach-number">{no}</span>
                <strong>{title}</strong>
                <span>{body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">PROJECTS / WORKS</span>
              <h2 className="section-title section-title-spaced">実績・プロジェクト</h2>
            </div>
            <Link className="text-link" href="/works">すべて見る ↗</Link>
          </div>
          {works.length ? <div className="works-grid">
            {works.slice(0, 3).map((work, index) => (
              <Link className="work-card" href={`/works/${work.slug}`} key={work.slug}>
                <div className={`work-card-media work-card-media-${index + 1}`} aria-hidden="true">
                  {work.image ? <Image src={work.image} alt="" fill sizes="(min-width: 760px) 33vw, 100vw" className="work-card-image" /> : null}
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <span className="eyebrow work-card-category">{work.category}</span><h3>{work.title}</h3><p>{work.summary}</p>
              </Link>
            ))}
          </div> : <div className="empty-state"><strong>CASE STUDIES COMING SOON</strong><p>正式な公開情報を確認後、実績を掲載します。</p></div>}
        </div>
      </section>

      <section className="section section-dark regional-section reveal">
        <div className="site-container regional-feature">
          <div>
            <span className="eyebrow">REGIONAL PROJECT</span>
            <h2 className="section-title section-title-spaced">地域と一緒に、<br />続く仕組みをつくる。</h2>
            <p className="body-lg regional-copy">
              自治体、地域企業、団体、住民と連携し、その地域に必要な仕組みを事業として形にしていきます。
            </p>
            <div className="regional-action"><ButtonLink href="/regional-project">地域事業を見る</ButtonLink></div>
          </div>
          <div className="regional-media" aria-label="旧Riraryサイトで使用していた共創を表す写真">
            <Image
              src="/images/regional/wix-cocreation-hiking.jpg"
              alt=""
              fill
              sizes="(min-width: 760px) 42vw, 100vw"
              className="regional-media-image"
            />
            <span>LOCAL / CO-CREATION</span>
          </div>
        </div>
      </section>

      <section className="section section-sand reveal">
        <div className="site-container editorial-split">
          <div>
            <span className="eyebrow">ABOUT / CO-CREATION</span>
            <h2 className="section-title section-title-spaced">競争だけではなく、<br />共創で地域を前へ。</h2>
          </div>
          <div className="editorial-copy editorial-stack">
            <p className="body-lg">競争だけで地域を支えるのではなく、自治体・企業・地域の人が強みを持ち寄り、新しい価値を一緒につくる。Riraryはその「共創」を、地域を前に進める実践の方法として大切にしています。</p>
            <Link className="text-link" href="/about">Riraryについて ↗</Link>
          </div>
        </div>
      </section>

      <section className="section news-section reveal">
        <div className="site-container">
          <div className="section-heading-row news-heading">
            <div>
              <span className="eyebrow">NEWS</span>
              <h2 className="section-title section-title-spaced">お知らせ</h2>
            </div>
            <Link className="text-link" href="/news">一覧を見る ↗</Link>
          </div>
          {news.length ? <div className="news-list">
            {news.slice(0, 3).map((item) => (
              <div className="news-item" key={item.slug}><time dateTime={item.date}>{item.date.replaceAll("-", ".")}</time><span className="news-category">{item.category}</span><strong>{item.title}</strong><span className="news-arrow">↗</span></div>
            ))}
          </div> : <div className="empty-state"><strong>NEWS COMING SOON</strong><p>正式なお知らせを確認後に掲載します。</p></div>}
        </div>
      </section>

      <section className="section final-cta-section reveal">
        <div className="site-container final-cta">
          <div>
            <span className="eyebrow">CONTACT</span>
            <h2 className="section-title section-title-spaced">まずは、話すところから。</h2>
            <p className="body-lg final-cta-copy">課題がまだ整理されていなくても大丈夫です。地域や事業の状況から、一緒に考えます。</p>
          </div>
          <div className="final-cta-actions">
            <ButtonLink href="/contact">まずは相談する</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">お問い合わせ</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
