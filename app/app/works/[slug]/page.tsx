import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactBand } from "@/components/ui/contact-band";
import { works } from "@/content/works";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);
  if (!work) return {};
  return {
    title: work.title,
    description: work.summary,
    alternates: { canonical: `/works/${work.slug}` },
    openGraph: {
      type: "article",
      locale: "ja_JP",
      url: `/works/${work.slug}`,
      title: work.title,
      description: work.summary,
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);
  if (!work) notFound();

  return <main>
    <section className="page-hero"><div className="site-container"><Breadcrumbs items={[{ label: "WORKS", href: "/works" }, { label: work.title }]} /><span className="eyebrow">{work.category}</span><h1 className="page-title work-detail-title">{work.title}</h1><p className="body-lg page-lead">{work.summary}</p></div></section>
    {work.metrics && <section className="section case-study-metrics-section reveal"><div className="site-container"><div className="case-study-metrics">{work.metrics.map((metric) => <div className="case-study-metric" key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong></div>)}</div></div></section>}
    {work.images && <section className="section case-study-gallery-section reveal"><div className="site-container"><div className="section-heading-row"><div><span className="eyebrow">MEDIA / TOUCHPOINTS</span><h2 className="section-title section-title-spaced">地域とつながる接点。</h2></div><p className="body-lg case-study-gallery-lead">公式LINEを中心に、SNSと街中のポスターを組み合わせています。</p></div><div className="case-study-gallery">{work.images.map((image, index) => <figure className={`case-study-gallery-item case-study-gallery-item-${index + 1}`} key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(min-width: 760px) 33vw, 100vw" /><figcaption>{image.alt}</figcaption></figure>)}</div></div></section>}
    <section className="section"><div className="site-container case-study-grid"><aside><span className="eyebrow">ROLE</span><ul className="plain-list compact">{work.role.map((role) => <li key={role}>{role}</li>)}</ul></aside><div className="case-study-body"><section><span className="eyebrow">CHALLENGE</span><h2>課題</h2><p>{work.challenge}</p></section><section><span className="eyebrow">SOLUTION</span><h2>取り組み</h2><p>{work.solution}</p></section>{work.outcome && <section><span className="eyebrow">OUTCOME</span><h2>成果</h2><p>{work.outcome}</p></section>}{work.links && <section><span className="eyebrow">OFFICIAL CHANNELS</span><h2>公式チャンネル</h2><div className="case-study-links">{work.links.map((link) => <Link href={link.href} target="_blank" rel="noreferrer" className="text-link" key={link.href}>{link.label} ↗</Link>)}</div></section>}</div></div></section>
    <ContactBand title="似た課題について相談する。" />
  </main>;
}
