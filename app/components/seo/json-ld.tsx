import { company } from "@/lib/site-data";
import { siteUrl } from "@/lib/seo";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: siteUrl,
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      postalCode: company.postalCode.replace("〒", ""),
      addressRegion: "北海道",
      addressLocality: "千歳市",
      streetAddress: "文京6-9-3",
      addressCountry: "JP",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
