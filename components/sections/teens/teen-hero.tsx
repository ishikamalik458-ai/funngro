"use client";

import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/badge";
import { GradientBlob } from "@/components/ui/gradient-blob";

export function TeenHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-24 lg:pt-48">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grad-soft" />
      <GradientBlob variant="lime" className="-right-24 top-16 h-80 w-80" />
      <GradientBlob variant="brand" className="-left-20 bottom-0 h-72 w-72" />

      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto"
        >
          <Eyebrow icon={<Rocket className="h-3.5 w-3.5" />} className="mx-auto">
            Built for students
          </Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl dark:text-primary-50"
        >
          Start Your <span className="text-gradient">Professional Journey</span> Today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-body"
        >
          Develop valuable skills, earn money, and work with real companies while balancing
          your education.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="mt-9 flex justify-center"
        >
          <Button href="/contact" size="lg">
            Create Your Profile
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
