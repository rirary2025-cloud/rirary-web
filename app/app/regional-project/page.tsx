import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactBand } from "@/components/ui/contact-band";

export const metadata: Metadata = { title: "地域活性化事業", description: "自治体・地域企業・団体と進める株式会社Riraryの地域活性化事業。", alternates: { canonical: "/regional-project" } };

const themes = [
  ["01", "情報を届ける", "地域情報、Web、LINE、SNSなど、住民や来訪者に届く接点を整えます。"],
  ["02", "人を動かす", "イベントや企画を単発で終わらせず、地域内の行動や交流につながる導線を設計します。"],
  ["03", "売上につなげる", "地域企業・店舗・サービスの接点をつくり、継続的な商流へつなげます。"],
  ["04", "運営を残す", "補助期間終了後も続けられる更新頻度、役割分担、収益構造まで考えます。"],
] as const;

const process = ["地域課題・既存資産の整理", "関係者と役割・目的を設計", "小さく実装して地域で検証", "運営負荷と収益性を見ながら改善", "地域側に残る運営モデルへ"] as const;

export default function RegionalProjectPage(){return <main>
  <section className="page-hero page-hero-dark"><div className="site-container"><Breadcrumbs items={[{ label: "REGIONAL PROJECT" }]} /><span className="eyebrow">REGIONAL PROJECT</span><h1 className="page-title">地域と一緒に、<br/>続く仕組みをつくる。</h1><p className="body-lg page-lead">補助期間だけで終わる施策ではなく、地域の中で運用し続けられる形を目指します。</p></div></section>

  <section className="section"><div className="site-container split-editorial"><div><span className="eyebrow">WHY</span><h2 className="section-title">地域活性化を、<br/>「施策」で終わらせない。</h2></div><div className="editorial-body"><p className="body-lg">地域には、すでに人・場所・企業・情報・文化があります。Riraryは新しいものを外から持ち込むだけではなく、既存の地域資産とデジタル、クリエイティブ、事業設計を組み合わせます。</p><p>自治体・企業・地域で活動する人がそれぞれ役割を持ち、更新や運営を続けられる状態までをプロジェクトとして考えます。</p></div></div></section>

  <section className="section section-dark regional-detail-dark"><div className="site-container"><div className="section-head-light"><span className="eyebrow">FOCUS</span><h2 className="section-title">4つの視点</h2></div><div className="regional-theme-grid">{themes.map(([no,title,body])=><article key={no}><span>{no}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

  <section className="section section-soft"><div className="site-container split-editorial"><div><span className="eyebrow">PROCESS</span><h2 className="section-title">一緒に考え、<br/>小さく始める。</h2></div><ol className="regional-process">{process.map((item,index)=><li key={item}><span>{String(index+1).padStart(2,"0")}</span><strong>{item}</strong></li>)}</ol></div></section>

  <section className="section"><div className="site-container regional-partners"><div><span className="eyebrow">CO-CREATION</span><h2 className="section-title">自治体・地域企業・団体と。</h2></div><p className="body-lg">Riraryだけで完結させるのではなく、地域の中にいる人たちと役割を持ち寄ることを前提にしています。案件・地域名・パートナー名は、公開許可を確認できたものから実績ページに掲載します。</p></div></section>

  <ContactBand title="地域の課題から、一緒に整理する。" body="構想段階、連携先を探している段階、既存施策の見直しなど、まだ形になっていない相談から対応します。" />
</main>}
