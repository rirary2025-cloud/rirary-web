"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="ja">
      <body>
        <main style={{ minHeight: "100vh", padding: "80px 24px", fontFamily: "sans-serif" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p>ERROR</p>
            <h1>サイトの表示に問題が発生しました。</h1>
            <p>再読み込みしても改善しない場合は、時間をおいてアクセスしてください。</p>
            <button type="button" onClick={reset}>もう一度試す</button>
          </div>
        </main>
      </body>
    </html>
  );
}
