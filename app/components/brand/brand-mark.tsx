import Image from "next/image";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className={`brand-lockup${compact ? " brand-lockup-compact" : ""}`}>
      <span className="brand-symbol" aria-hidden="true">
        <Image src="/brand/rirary-bee-mark.png" alt="" width={40} height={40} priority />
      </span>
      {!compact && <span className="brand-wordmark">Rirary</span>}
    </span>
  );
}
