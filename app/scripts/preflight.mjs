import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const errors = [];
const warnings = [];
const ok = [];

function requireFile(rel) {
  if (existsSync(join(root, rel))) ok.push(`file: ${rel}`);
  else errors.push(`missing file: ${rel}`);
}

[
  "app/layout.tsx",
  "app/page.tsx",
  "app/contact/page.tsx",
  "app/robots.ts",
  "app/sitemap.ts",
  "app/opengraph-image.tsx",
  "content/news.ts",
  "content/works.ts",
  "public/brand/rirary-logo-official-source.png",
  "public/brand/rirary-bee-mark.png",
].forEach(requireFile);

const envExample = join(root, ".env.example");
if (!existsSync(envExample)) errors.push("missing .env.example");

const mark = join(root, "public/brand/rirary-mark-placeholder.svg");
const brandComponent = readFileSync(join(root, "components/brand/brand-mark.tsx"), "utf8");
if (brandComponent.includes("rirary-mark-placeholder.svg")) {
  errors.push("placeholder brand mark is still used in the production brand component.");
} else if (existsSync(mark)) {
  warnings.push("placeholder brand mark file remains unused; remove after final asset cleanup if desired.");
}

const works = readFileSync(join(root, "content/works.ts"), "utf8");
if (works.includes("export const works: readonly WorkItem[] = [];")) warnings.push("WORKS is empty: add only approved case studies or accept an empty launch state.");
const news = readFileSync(join(root, "content/news.ts"), "utf8");
if (
  news.includes("export const news: readonly NewsItem[] = [];") &&
  !news.includes('newsLaunchMode = "empty-launch-accepted"')
) {
  warnings.push("NEWS is empty: add only approved announcements or accept an empty launch state.");
}

console.log("Rirary preflight\n");
ok.forEach((x) => console.log(`OK    ${x}`));
warnings.forEach((x) => console.log(`WARN  ${x}`));
errors.forEach((x) => console.log(`BLOCK ${x}`));
console.log(`\nSummary: ${errors.length} blocker(s), ${warnings.length} warning(s)`);
if (errors.length) process.exit(1);
