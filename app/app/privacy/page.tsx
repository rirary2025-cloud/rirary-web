import type { Metadata } from "next";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "株式会社Riraryの個人情報の取扱いについて。",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

const policySections = [
  {
    title: "1. 取得する情報",
    body: [
      "当社は、お問い合わせフォーム、メール、電話、LINE等を通じて、お名前、会社・団体名、メールアドレス、電話番号、お問い合わせ内容その他ご本人から提供された情報を取得します。",
      "Webサイトの運用上、アクセス日時、ブラウザ情報、参照元、IPアドレス等の技術情報を取得する場合があります。",
    ],
  },
  {
    title: "2. 利用目的",
    body: [
      "取得した情報は、お問い合わせへの回答、相談内容の確認、サービスの案内、業務上必要な連絡、Webサイトやサービスの改善、不正利用や迷惑行為の防止のために利用します。",
      "法令に基づく場合を除き、あらかじめ示した利用目的の範囲を超えて個人情報を利用しません。",
    ],
  },
  {
    title: "3. 第三者提供",
    body: [
      "当社は、法令に基づく場合、本人の同意がある場合、または人の生命・身体・財産の保護のために必要な場合を除き、個人情報を第三者へ提供しません。",
    ],
  },
  {
    title: "4. 委託",
    body: [
      "Webサイト運用、問い合わせ管理、メール送信、データ保管等のため、必要な範囲で外部サービスまたは委託先を利用する場合があります。その場合、委託先に対して必要かつ適切な監督を行います。",
    ],
  },
  {
    title: "5. 安全管理",
    body: [
      "当社は、取り扱う個人情報の漏えい、滅失、き損、不正アクセス等を防止するため、必要かつ適切な安全管理措置を講じます。",
    ],
  },
  {
    title: "6. 開示・訂正・利用停止等",
    body: [
      "ご本人から、個人情報の開示、訂正、追加、削除、利用停止等の請求があった場合、法令に従い、本人確認のうえ適切に対応します。",
    ],
  },
  {
    title: "7. Cookie等の利用",
    body: [
      "当サイトでは、利便性向上、アクセス解析、表示改善等のためCookieまたは類似技術を利用する場合があります。利用する解析・広告サービスが確定した場合は、その内容を本ページへ追記します。",
    ],
  },
  {
    title: "8. 改定",
    body: [
      "当社は、法令の変更、サービス内容の変更、運用上の必要に応じて、本ポリシーを改定することがあります。重要な変更がある場合は、当サイト上で分かりやすくお知らせします。",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="site-container">
          <span className="eyebrow">PRIVACY POLICY</span>
          <h1 className="page-title">プライバシーポリシー</h1>
          <p className="body-lg page-lead">
            株式会社Riraryは、事業活動で取り扱う個人情報を適切に管理し、以下の方針に基づいて利用します。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container policy-layout">
          <aside className="policy-summary">
            <span className="eyebrow">OPERATOR</span>
            <dl>
              <div><dt>事業者名</dt><dd>{company.name}</dd></div>
              <div><dt>所在地</dt><dd>{company.postalCode}<br />{company.address}</dd></div>
              <div><dt>お問い合わせ</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
            </dl>
            <p>最終更新日: 2026年8月18日</p>
          </aside>

          <div className="policy-content">
            {policySections.map((section) => (
              <section className="policy-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
