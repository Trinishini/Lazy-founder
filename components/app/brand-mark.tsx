import { PRODUCT_NAME } from "@/lib/brand";

/** LF monogram: lime on near-black. Colors come from the theme tokens. */
export function BrandMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label={PRODUCT_NAME} className={`shrink-0 ${className}`}>
      <rect width="64" height="64" rx="14" fill="var(--color-brand)" stroke="var(--color-lime)" strokeWidth="2.5" />
      <path fill="var(--color-lime)" d="M13 16h7v25h9v7H13V16zm22 0h16v7h-9v5.5h8v6h-8V48h-7V16z" />
    </svg>
  );
}
