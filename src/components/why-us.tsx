"use client";

import { motion } from "framer-motion";
import { Shield, Camera, Wrench, Headphones } from "lucide-react";
import { DIFFERENTIATORS } from "@/lib/constants";
import { APPLE_EASE } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Camera,
  Wrench,
  Headphones,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: APPLE_EASE },
  },
};

export default function WhyUs() {
  return (
    <section className="relative px-4 py-24 sm:px-8 md:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: APPLE_EASE }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C]">
            WHY US
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
            What Makes This Different
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {DIFFERENTIATORS.map((diff) => {
            const Icon = iconMap[diff.icon];
            return (
              <motion.div
                key={diff.title}
                variants={item}
                className="rounded-xl border border-[#1A1A1A] bg-[#0A0A0A] p-6 transition-colors duration-300 hover:border-[#2A2A2A] sm:p-8"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#C9A84C]/10">
                  {Icon && <Icon className="h-5 w-5 text-[#C9A84C]" />}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {diff.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#999999]">
                  {diff.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
