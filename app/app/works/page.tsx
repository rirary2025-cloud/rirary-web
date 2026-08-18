import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactBand } from "@/components/ui/contact-band";
import { works } from "@/content/works";

export const metadata: Metadata = { title: "実績・プロジェクト", description: "株式会社Riraryの実績・プロジェクト一覧。", alternates: { canonical: "/works" } };

export default function WorksPage(){return <main><section className="page-hero"><div className="site-container"><Breadcrumbs items={[{ label: "WORKS" }]} /><span className="eyebrow">PROJECTS / WORKS</span><h1 className="page-title">実績・プロジェクト</h1><p className="body-lg page-lead">公開許可を確認できた案件から、課題・役割・成果が分かる形で掲載します。</p></div></section><section className="section"><div className="site-container">{works.length > 0 ? <div className="works-index-grid">{works.map((work)=><Link className="works-index-card" href={`/works/${work.slug}`} key={work.slug}><span className="eyebrow">{work.category}</span><h2>{work.title}</h2><p>{work.summary}</p><strong>VIEW PROJECT ↗</strong></Link>)}</div> : <div className="empty-state"><strong>CASE STUDIES COMING SOON</strong><p>案件名や数値を推測で掲載せず、正式情報を確認後に追加します。詳細ページのテンプレートは実装済みです。</p></div>}</div></section><ContactBand /></main>}
