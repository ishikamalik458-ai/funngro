/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,

  async headers() {
    return [
      {
        // Explicitly confirm this app never blocks indexing on Vercel's
        // production domain. NOTE: Vercel's own edge network automatically
        // adds "X-Robots-Tag: noindex" to (a) preview deployments and
        // (b) outdated production deployments after a promote — that is a
        // platform-level behavior this header cannot override, and it's
        // *correct* behavior (you don't want preview URLs indexed). If
        // Lighthouse reports "blocked from indexing" on your real
        // production domain, verify with:
        //   curl -sI https://<your-production-domain> | grep -i x-robots-tag
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value:
              process.env.VERCEL_ENV === "production"
                ? "index, follow"
                : "noindex, nofollow",
          },
        ],
      },
      {
        // Long-term immutable caching for hashed static build assets.
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Favicon and other top-level static files: cache but allow refresh.
        source: "/:file(favicon.svg|logo.png|apple-touch-icon.png|og-image.png)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
