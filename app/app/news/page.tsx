import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { news } from "@/content/news";
export const metadata: Metadata = { title: "お知らせ", description: "株式会社Riraryからのお知らせ。", alternates: { canonical: "/news" } };
export default function NewsPage(){return <main><section className="page-hero"><div className="site-container"><Breadcrumbs items={[{label:"NEWS"}]} /><span className="eyebrow">NEWS</span><h1 className="page-title">お知らせ</h1></div></section><section className="section"><div className="site-container">{news.length ? <div className="news-list">{news.map(item => <Link className="news-item" href={`/news/${item.slug}`} key={item.slug} aria-label={`${item.title}の詳細を見る`}><time dateTime={item.date}>{item.date.replaceAll("-", ".")}</time><span className="news-category">{item.category}</span><strong>{item.title}</strong><span className="news-arrow" aria-hidden="true">↗</span></Link>)}</div> : <div className="empty-state"><strong>NEWS COMING SOON</strong><p>正式に公開するお知らせを確認後、ここへ追加します。更新データは <code>content/news.ts</code> に集約しています。</p></div>}</div></section></main>}
