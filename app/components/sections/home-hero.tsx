import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";

export function HomeHero() {
  return (
    <section className="hero">
      <div className="site-container hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow hero-kicker">COMPANY / RIRARY</span>
          <h1 className="display-title">
            北海道の<br className="mobile-only-break" />
            地域課題を、<br />
            新しい発想で<br className="mobile-only-break" />
            解決する会社。
          </h1>
          <p className="body-lg hero-lead">
            デジタル、クリエイティブ、事業支援、コマース。地域に必要な手段を組み合わせ、構想から実行まで伴走します。
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact">まずは相談する</ButtonLink>
            <ButtonLink href="#business" variant="secondary">事業を見る</ButtonLink>
          </div>
        </div>

        <div className="hero-visual hero-photo-card reveal reveal-delay-1">
          <Image
            src="/images/home/wix-hero-local-communication.png"
            alt="旧Riraryサイトで使用していた地方発信を表すビジュアル"
            fill
            priority
            sizes="(min-width: 1024px) 34vw, (min-width: 768px) 42vw, 100vw"
            className="hero-photo"
          />
          <div className="hero-photo-caption">
            <span>HOKKAIDO</span>
            <strong>地域の風景から、事業を考える。</strong>
          </div>
        </div>
      </div>
      <div className="site-container hero-ticker reveal reveal-delay-2" aria-hidden="true">
        <span>LOCAL</span><i>×</i><span>DIGITAL</span><i>×</i><span>CREATIVE</span><i>×</i><span>BUSINESS</span>
      </div>
    </section>
  );
}
