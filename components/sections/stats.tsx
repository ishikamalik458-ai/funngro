import { Reveal } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-4xl bg-grad-brand px-8 py-14 sm:px-14">
          <div
            aria-hidden
            className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-white/10 blur-2xl"
          />
          <div className="relative grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} direction="scale" delay={index * 0.08} className="text-center">
                <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-primary-100 sm:text-base">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
