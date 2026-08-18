"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/site-data";

type Status = "idle" | "success" | "error";

const topicLabels: Record<string, string> = {
  digital: "デジタル支援",
  creative: "クリエイティブ",
  "business-support": "事業支援",
  commerce: "コマース",
  "regional-project": "地域活性化・自治体連携",
  other: "その他",
};

function formValue(body: Record<string, FormDataEntryValue>, key: string) {
  const value = body[key];
  return typeof value === "string" ? value.trim() : "";
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form).entries());
    const data = {
      name: formValue(body, "name"),
      organization: formValue(body, "organization"),
      email: formValue(body, "email"),
      phone: formValue(body, "phone"),
      topic: formValue(body, "topic"),
      message: formValue(body, "message"),
      consent: formValue(body, "consent"),
      website: formValue(body, "website"),
    };

    if (data.website) return;

    if (!data.name || !data.email || !data.topic || !data.message || data.consent !== "yes") {
      setStatus("error");
      setMessage("必須項目を入力してください。");
      return;
    }

    const subject = `Webサイトからのお問い合わせ（${topicLabels[data.topic] || "その他"}）`;
    const mailBody = [
      "株式会社Rirary 宛",
      "",
      "Webサイトを見て問い合わせます。",
      "",
      `お名前: ${data.name}`,
      `会社・団体名: ${data.organization || "-"}`,
      `メールアドレス: ${data.email}`,
      `電話番号: ${data.phone || "-"}`,
      `ご相談内容: ${topicLabels[data.topic] || data.topic}`,
      "",
      "お問い合わせ内容:",
      data.message,
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
    setStatus("success");
    setMessage("メールアプリを開きました。内容を確認して送信してください。メールアプリが開かない場合は、下のメールアドレスから直接ご連絡ください。");
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-grid">
        <label className="form-field">
          <span>お名前 <b>必須</b></span>
          <input name="name" autoComplete="name" required maxLength={80} />
        </label>
        <label className="form-field">
          <span>会社・団体名</span>
          <input name="organization" autoComplete="organization" maxLength={120} />
        </label>
        <label className="form-field">
          <span>メールアドレス <b>必須</b></span>
          <input name="email" type="email" autoComplete="email" required maxLength={160} />
        </label>
        <label className="form-field">
          <span>電話番号</span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>
      </div>
      <label className="form-field">
        <span>ご相談内容 <b>必須</b></span>
        <select name="topic" required defaultValue="">
          <option value="" disabled>選択してください</option>
          <option value="digital">デジタル支援</option>
          <option value="creative">クリエイティブ</option>
          <option value="business-support">事業支援</option>
          <option value="commerce">コマース</option>
          <option value="regional-project">地域活性化・自治体連携</option>
          <option value="other">その他</option>
        </select>
      </label>
      <label className="form-field">
        <span>お問い合わせ内容 <b>必須</b></span>
        <textarea name="message" required maxLength={3000} rows={8} placeholder="現在の状況や相談したいことをご記入ください。" />
      </label>
      <label className="form-consent">
        <input type="checkbox" name="consent" value="yes" required />
        <span><a href="/privacy" target="_blank">プライバシーポリシー</a>に同意する</span>
      </label>
      <label className="honeypot" aria-hidden="true">
        <span>Website</span><input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <button className="form-submit" type="submit">
        メールアプリを開く
      </button>
      {message && <p className={`form-status form-status-${status}`} role="status">{message}</p>}
    </form>
  );
}
