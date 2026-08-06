import { cn } from "@/lib/utils";

export function GradientBlob({
  className,
  variant = "brand",
}: {
  className?: string;
  variant?: "brand" | "mint" | "lime";
}) {
  const gradients = {
    brand: "bg-grad-brand",
    mint: "bg-grad-emerald-mint",
    lime: "bg-grad-lime",
  };

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute animate-blob opacity-30 blur-3xl",
        gradients[variant],
        className
      )}
    />
  );
}

export function DotGrid({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={cn("pointer-events-none absolute text-primary-200", className)}
      width="180"
      height="140"
      viewBox="0 0 180 140"
      fill="none"
    >
      <defs>
        <pattern id="dot-grid" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="180" height="140" fill="url(#dot-grid)" />
    </svg>
  );
}
