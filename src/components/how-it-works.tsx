"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileText, Cpu, Truck } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";
import { APPLE_EASE } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  FileText,
  Cpu,
  Truck,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: APPLE_EASE },
  },
};

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="relative px-4 py-24 sm:px-8 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: APPLE_EASE }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C]">
            THE PROCESS
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
            From Idea to Your Desk in 48 Hours
          </h2>
        </motion.div>

        <motion.div
          className="relative mt-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Connecting line — desktop horizontal */}
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-[#1A1A1A] md:block" />

          {/* Connecting line — mobile vertical */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-[#1A1A1A] md:hidden" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-6">
            {PROCESS_STEPS.map((step) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.number}
                  variants={item}
                  className="relative flex gap-6 md:flex-col md:gap-0"
                >
                  {/* Step node */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#C9A84C] bg-black">
                    {Icon && <Icon className="h-5 w-5 text-[#C9A84C]" />}
                  </div>

                  {/* Content */}
                  <div className="md:mt-6">
                    <p className="font-mono text-xs text-[#666666]">
                      {step.number}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-white md:mt-3">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[250px] text-sm leading-relaxed text-[#999999]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
