import Image from "next/image";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className={`brand-lockup${compact ? " brand-lockup-compact" : ""}`}>
      <span className="brand-symbol" aria-hidden="true">
        <Image src="/brand/rirary-logo-mark.png" alt="" width={72} height={72} priority />
      </span>
      {!compact && <span className="brand-wordmark">Rirary</span>}
    </span>
  );
}
