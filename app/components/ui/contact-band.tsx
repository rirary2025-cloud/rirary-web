import Link from "next/link";

export function ContactBand({
  title = "地域や事業の課題から、まず聞かせてください。",
  body = "まだ依頼内容が決まっていない段階でも大丈夫です。課題を整理し、必要な方法から一緒に考えます。",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="contact-band">
      <div className="site-container contact-band-inner">
        <div>
          <span className="eyebrow">CONTACT</span>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <Link className="btn button-dark" href="/contact">まずは相談する ↗</Link>
      </div>
    </section>
  );
}
