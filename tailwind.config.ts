import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#22C55E",
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
        },
        emerald: {
          DEFAULT: "#10B981",
        },
        mint: "#86EFAC",
        forest: "#166534",
        ink: {
          DEFAULT: "#1F2937",
          soft: "#374151",
        },
        body: "#6B7280",
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F7FDF9",
          tint: "#DCFCE7",
        },
        dark: {
          bg: "#0B1712",
          surface: "#0F1F17",
          card: "#132A1E",
          border: "#1E3A29",
        },
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(20, 83, 45, 0.08), 0 8px 24px -8px rgba(20, 83, 45, 0.10)",
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 32px -12px rgba(16, 24, 40, 0.12)",
        lift: "0 20px 40px -16px rgba(21, 128, 61, 0.28)",
        glow: "0 0 0 1px rgba(34,197,94,0.15), 0 8px 30px -6px rgba(34,197,94,0.35)",
        button: "0 8px 20px -6px rgba(21, 128, 61, 0.45)",
      },
      backgroundImage: {
        "grad-brand": "linear-gradient(135deg, #15803D 0%, #22C55E 55%, #86EFAC 100%)",
        "grad-emerald-mint": "linear-gradient(135deg, #10B981 0%, #86EFAC 100%)",
        "grad-forest": "linear-gradient(135deg, #166534 0%, #10B981 100%)",
        "grad-lime": "linear-gradient(135deg, #A3E635 0%, #22C55E 100%)",
        "grad-soft": "linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 100%)",
        "grad-radial-glow": "radial-gradient(60% 60% at 50% 40%, rgba(34,197,94,0.16) 0%, rgba(34,197,94,0) 70%)",
        "noise": "url('/textures/noise.png')",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-22px)" },
        },
        blobDrift: {
          // Was previously animating `border-radius` (forces paint every
          // frame — Lighthouse "non-composited animations"). Now only
          // animates transform (scale + rotate), which the browser can run
          // entirely on the compositor thread. The organic shape itself is
          // now a fixed inline style on the element instead of animated.
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.08) rotate(4deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.45" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 9s ease-in-out infinite",
        "blob-drift": "blobDrift 12s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        ripple: "ripple 900ms ease-out forwards",
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
