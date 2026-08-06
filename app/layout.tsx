import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { ThemeProvider } from "@/components/theme-provider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://www.funngro.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Funngro | Teen Internship & Student Project Platform",
    template: "%s | Funngro",
  },
  description:
    "Discover Funngro, the platform connecting students with real companies through paid projects, internships, skill development, and career opportunities.",
  keywords: [
    "teen internships",
    "student internships",
    "paid student projects",
    "student freelance work",
    "teen jobs",
    "earn money as a student",
    "online internships",
    "internships for teenagers",
    "student portfolio",
    "youth employment",
  ],
  authors: [{ name: "Funngro" }],
  creator: "Funngro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Funngro",
    title: "Funngro | Teen Internship & Student Project Platform",
    description:
      "Real projects. Real companies. Real income. Funngro helps students build skills, portfolios, and careers before graduation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Funngro — paid projects and internships for students",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Funngro | Teen Internship & Student Project Platform",
    description:
      "Real projects. Real companies. Real income. Funngro helps students build skills, portfolios, and careers before graduation.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Funngro",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Funngro connects teenagers with real companies for paid projects, internships, and skill-building opportunities.",
    sameAs: [
      "https://instagram.com/funngro",
      "https://linkedin.com/company/funngro",
      "https://facebook.com/funngro",
    ],
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LoadingScreen />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-primary-700 focus:px-5 focus:py-3 focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
