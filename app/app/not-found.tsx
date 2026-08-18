import Link from "next/link";

export default function NotFound() {
  return (
    <main className="system-page">
      <div className="site-container system-page-inner">
        <span className="eyebrow">404 / NOT FOUND</span>
        <h1>ページが見つかりません。</h1>
        <p>URLが変更されたか、ページが削除された可能性があります。</p>
        <div className="system-page-actions">
          <Link className="button button-primary" href="/">トップへ戻る</Link>
          <Link className="button button-secondary" href="/contact">相談する</Link>
        </div>
      </div>
    </main>
  );
}
