"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, Star, CheckCircle2, IndianRupee, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/badge";
import { GradientBlob } from "@/components/ui/gradient-blob";

const avatarInitials = ["AR", "KS", "MT", "+2k"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-28 lg:pt-48">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grad-soft" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grad-radial-glow" />
      <GradientBlob variant="mint" className="-left-24 top-10 h-72 w-72 sm:h-96 sm:w-96" />
      <GradientBlob variant="brand" className="-right-20 top-40 h-64 w-64 sm:h-80 sm:w-80" />

      <div className="container grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          {/* Above-the-fold text: no opacity fade (was gating LCP paint behind
              JS hydration). Kept a small transform-only settle so the section
              doesn't feel static, but transform never blocks paint like
              opacity:0 does. */}
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow icon={<Star className="h-3.5 w-3.5" />}>
              For students aged 13–19
            </Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-6 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-[3.6rem] dark:text-primary-50"
          >
            Work on Real Projects.
            <br />
            <span className="text-gradient">Learn Real Skills.</span>
            <br />
            Earn Real Money.
          </motion.h1>

          <motion.p
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-body"
          >
            Funngro is a platform where teenagers can collaborate with companies, gain
            practical experience, build their portfolios, and earn money while still studying.
          </motion.p>

          <motion.div
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/for-teens" size="lg">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="/companies" variant="secondary" size="lg">
              <Compass className="h-4 w-4" />
              Explore Opportunities
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.45 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {avatarInitials.map((initials) => (
                <span
                  key={initials}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-grad-emerald-mint text-xs font-bold text-primary-900 shadow-soft dark:border-dark-bg"
                >
                  {initials}
                </span>
              ))}
            </div>
            <p className="text-sm text-body">
              Joined by <span className="font-semibold text-ink dark:text-primary-100">25,000+</span> students
              already building their future
            </p>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="relative"
          >
            <div className="card-surface relative overflow-hidden p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-body">Active project</p>
                  <p className="mt-1 font-display text-lg font-bold text-ink dark:text-primary-50">
                    Social Campaign Refresh
                  </p>
                </div>
                <span className="rounded-pill bg-primary-100 px-3 py-1 text-xs font-bold text-primary-800">
                  In progress
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm text-body">
                <Clock3 className="h-4 w-4 text-primary-600" />
                4 days left
                <span className="mx-1 h-1 w-1 rounded-full bg-body/40" />
                <IndianRupee className="h-4 w-4 text-primary-600" />
                ₹6,500 project fee
              </div>

              <div className="mt-6 space-y-3">
                {["Brief accepted", "First draft submitted", "Company review"].map((label, i) => (
                  <div key={label} className="flex items-center gap-3">
                    <CheckCircle2
                      className={`h-5 w-5 ${i < 2 ? "text-primary-600" : "text-primary-200"}`}
                      strokeWidth={2.5}
                    />
                    <span className={`text-sm ${i < 2 ? "text-ink dark:text-primary-100" : "text-body"}`}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 h-2 w-full overflow-hidden rounded-pill bg-primary-100">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 0.7 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                  className="h-full w-full rounded-pill bg-grad-brand"
                />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 -top-8 hidden rounded-2xl bg-white p-4 shadow-lift sm:block dark:bg-dark-card"
            >
              <p className="text-xs font-semibold text-body">Payment received</p>
              <p className="font-display text-xl font-bold text-primary-700">+ ₹4,200</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -bottom-6 -right-6 hidden items-center gap-2 rounded-2xl bg-white p-3 pr-4 shadow-lift sm:flex dark:bg-dark-card"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-grad-lime text-primary-900">
                <Star className="h-4 w-4" fill="currentColor" />
              </span>
              <div>
                <p className="text-xs text-body">Client rating</p>
                <p className="text-sm font-bold text-ink dark:text-primary-50">4.9 / 5.0</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
