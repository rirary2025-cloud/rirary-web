import { company } from "@/lib/site-data";
import { siteUrl } from "@/lib/seo";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: company.name,
    url: siteUrl,
    email: company.email,
    telephone: company.phone,
    slogan: company.statement,
    areaServed: ["北海道", "日本"],
    priceRange: "要相談",
    address: {
      "@type": "PostalAddress",
      postalCode: company.postalCode.replace("〒", ""),
      addressRegion: "北海道",
      addressLocality: "千歳市",
      streetAddress: "文京6-9-3",
      addressCountry: "JP",
    },
  };

  return <JsonLd data={data} />;
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: company.name,
        url: siteUrl,
        inLanguage: "ja",
        publisher: {
          "@type": "Organization",
          name: company.name,
          url: siteUrl,
        },
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: readonly { name: string; url: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteUrl}${item.url}`,
        })),
      }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
  areaServed = "北海道",
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
  serviceType: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        serviceType,
        areaServed,
        provider: {
          "@type": "LocalBusiness",
          name: company.name,
          url: siteUrl,
          areaServed: "北海道",
        },
        url: `${siteUrl}${url}`,
      }}
    />
  );
}

export function FaqJsonLd({ items }: { items: readonly { question: string; answer: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}

export function NewsArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  image,
}: {
  title: string;
  description?: string;
  url: string;
  datePublished: string;
  image?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: title,
        description,
        datePublished,
        dateModified: datePublished,
        inLanguage: "ja",
        image: image ? [`${siteUrl}${image}`] : undefined,
        mainEntityOfPage: `${siteUrl}${url}`,
        author: {
          "@type": "Organization",
          name: company.name,
          url: siteUrl,
        },
        publisher: {
          "@type": "Organization",
          name: company.name,
          url: siteUrl,
        },
      }}
    />
  );
}
