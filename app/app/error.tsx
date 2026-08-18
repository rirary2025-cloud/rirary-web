"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="system-page">
      <div className="site-container system-page-inner">
        <span className="eyebrow">ERROR</span>
        <h1>ページの読み込みに失敗しました。</h1>
        <p>一時的な問題の可能性があります。再読み込みをお試しください。</p>
        <div className="system-page-actions">
          <button className="btn btn-primary" type="button" onClick={reset}>もう一度試す</button>
          <Link className="btn btn-secondary" href="/">トップへ戻る</Link>
        </div>
      </div>
    </main>
  );
}
