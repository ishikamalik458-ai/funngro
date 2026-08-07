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
        "pointer-events-none absolute animate-blob-drift opacity-30 blur-3xl",
        gradients[variant],
        className
      )}
      // Fixed organic shape (was previously animated via border-radius, which
      // is a non-composited/paint-triggering property). The shape now stays
      // static while animate-blob-drift handles motion via transform only,
      // so the browser can run it on the compositor thread.
      style={{ borderRadius: "42% 58% 65% 35% / 45% 45% 55% 55%" }}
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
