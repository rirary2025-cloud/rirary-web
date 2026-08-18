import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { company } from "@/lib/site-data";

export const metadata: Metadata = { title: "お問い合わせ", description: "株式会社Riraryへのご相談・お問い合わせ。", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return <main>
    <section className="page-hero"><div className="site-container">
      <Breadcrumbs items={[{ label: "CONTACT" }]} />
      <span className="eyebrow">CONTACT</span><h1 className="page-title">まずは、話すところから。</h1>
      <p className="body-lg page-lead">まだ課題が整理されていなくても構いません。地域や事業の状況から一緒に考えます。</p>
    </div></section>
    <section className="section"><div className="site-container contact-layout">
      <div><span className="eyebrow">CONTACT FORM</span><h2 className="contact-form-title">フォームから相談する</h2><p className="contact-form-intro">必要事項を入力すると、内容を整えたメール作成画面が開きます。内容を確認して送信してください。</p></div>
      <ContactForm />
    </div></section>
    <section className="section section-soft"><div className="site-container">
      <span className="eyebrow">OTHER CONTACT</span><div className="contact-grid contact-grid-spaced">
        <a className="contact-card" href={company.lineUrl} target="_blank" rel="noreferrer"><span className="eyebrow">LINE</span><strong>LINEで相談する</strong><span>現在の公式LINEへ移動 ↗</span></a>
        <a className="contact-card" href={`mailto:${company.email}`}><span className="eyebrow">EMAIL</span><strong>{company.email}</strong><span>メールを送る ↗</span></a>
        <a className="contact-card" href={`tel:${company.phone.replaceAll("-","")}`}><span className="eyebrow">PHONE</span><strong>{company.phone}</strong><span>電話する ↗</span></a>
      </div>
    </div></section>
  </main>;
}
