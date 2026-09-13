import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactBand } from "@/components/ui/contact-band";
import { news } from "@/content/news";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/news/${item.slug}` },
    openGraph: {
      type: "article",
      locale: "ja_JP",
      url: `/news/${item.slug}`,
      title: item.title,
      description: item.summary,
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <main>
      <section className="page-hero">
        <div className="site-container">
          <Breadcrumbs items={[{ label: "NEWS", href: "/news" }, { label: item.title }]} />
          <span className="eyebrow">{item.category}</span>
          <h1 className="page-title news-detail-title">{item.title}</h1>
          <div className="news-detail-meta">
            <time dateTime={item.date}>{item.date.replaceAll("-", ".")}</time>
          </div>
          {item.summary && <p className="body-lg page-lead">{item.summary}</p>}
        </div>
      </section>

      <section className="section">
        <div className="site-container news-detail-layout">
          <article className="news-detail-body">
            {(item.body?.length ? item.body : item.summary ? [item.summary] : []).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {item.links && item.links.length > 0 && (
              <section className="news-detail-links" aria-labelledby="news-related-links">
                <span className="eyebrow">RELATED LINK</span>
                <h2 id="news-related-links">関連リンク</h2>
                <div>
                  {item.links.map((link) => (
                    <Link className="text-link" href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                      {link.label} ↗
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>
      </section>

      <ContactBand title="サービスや情報発信について相談する。" />
    </main>
  );
}
