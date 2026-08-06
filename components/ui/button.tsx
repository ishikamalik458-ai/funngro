"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "btn-ripple group relative inline-flex items-center justify-center gap-2 rounded-pill font-display font-semibold transition-all duration-300 ease-out-quart focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-700 text-white shadow-button hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-lift hover:bg-primary-600",
        secondary:
          "border-2 border-primary-600 bg-white text-primary-700 hover:-translate-y-0.5 hover:bg-primary-600 hover:text-white hover:shadow-soft",
        ghost: "text-primary-800 hover:bg-primary-50",
        white:
          "bg-white text-primary-700 shadow-button hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-lift",
      },
      size: {
        default: "h-12 px-7 text-[15px]",
        lg: "h-14 px-9 text-base",
        sm: "h-10 px-5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

let rippleId = 0;

/** Spawns a short-lived ripple span at the pointer position on click. */
function useRipple() {
  const [ripples, setRipples] = React.useState<Ripple[]>([]);

  const addRipple = React.useCallback((event: React.PointerEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.6;
    const id = ++rippleId;

    setRipples((prev) => [
      ...prev,
      { id, x: event.clientX - rect.left - size / 2, y: event.clientY - rect.top - size / 2, size },
    ]);

    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 900);
  }, []);

  const rippleLayer = (
    <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-pill">
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute animate-ripple rounded-full bg-white/40"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}
    </span>
  );

  return { addRipple, rippleLayer };
}

export function Button({
  className,
  variant,
  size,
  href,
  children,
  onPointerDown,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  const { addRipple, rippleLayer } = useRipple();

  function handlePointerDown(event: React.PointerEvent<HTMLElement>) {
    addRipple(event);
    onPointerDown?.(event as React.PointerEvent<HTMLButtonElement>);
  }

  if (href) {
    return (
      <Link href={href} className={classes} onPointerDown={handlePointerDown}>
        <GradientOverlay variant={variant} />
        {rippleLayer}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button className={classes} onPointerDown={handlePointerDown} {...props}>
      <GradientOverlay variant={variant} />
      {rippleLayer}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}

function GradientOverlay({ variant }: { variant?: ButtonProps["variant"] }) {
  if (variant !== "primary") return null;
  return (
    <span
      aria-hidden
      className="absolute inset-0 rounded-pill bg-grad-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
  );
}
