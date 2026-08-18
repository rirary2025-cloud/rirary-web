import Link from "next/link";

type Item = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: readonly Item[] }) {
  return (
    <nav className="breadcrumbs" aria-label="パンくず">
      <Link href="/">HOME</Link>
      {items.map((item) => (
        <span className="breadcrumb-item" key={item.label}>
          <span aria-hidden="true">/</span>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}
