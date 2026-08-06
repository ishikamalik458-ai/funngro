import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientBlob } from "@/components/ui/gradient-blob";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grad-soft" />
      <GradientBlob variant="mint" className="-left-20 top-20 h-72 w-72" />
      <div className="container text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-primary-100 text-primary-700">
          <Compass className="h-8 w-8" strokeWidth={2} />
        </span>
        <p className="mt-8 font-display text-sm font-bold uppercase tracking-wider text-primary-700">
          404
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl dark:text-primary-50">
          This page hasn&rsquo;t started its project yet
        </h1>
        <p className="mx-auto mt-4 max-w-md text-body">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Let&rsquo;s
          get you back on track.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Link
            href="/for-teens"
            className="inline-flex h-12 items-center px-2 text-sm font-semibold text-primary-700 hover:underline"
          >
            Explore opportunities
          </Link>
        </div>
      </div>
    </section>
  );
}
