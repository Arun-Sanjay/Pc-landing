"use client";

import { motion } from "framer-motion";
import { Lock, Zap, Shield } from "lucide-react";
import { WHATSAPP_BASE_URL, PHONE_DISPLAY } from "@/lib/constants";
import { APPLE_EASE } from "@/lib/utils";

export default function FinalCTA() {
  const url = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    "Hi! I'm interested in getting a custom PC built. Can we discuss?"
  )}`;

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-8 md:py-32 lg:px-16">
      {/* Gold glow bg */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A84C]/[0.06] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: APPLE_EASE }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C]">
            READY TO BUILD?
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
            Your Dream PC is One Message Away
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-[#999999] sm:text-base">
            No commitment, no pressure. WhatsApp us your budget and we&apos;ll
            send a detailed build plan within 2 hours. Free.
          </p>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-[#C9A84C] px-10 py-4 text-lg font-bold text-black transition-all hover:bg-[#D4AF37] active:scale-[0.95]"
          >
            Start Building &rarr;
          </a>

          <p className="mt-4 text-xs text-[#666666]">
            Or call us directly: {PHONE_DISPLAY}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#666666]">
            <span className="flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5" />
              Transparent Pricing
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5" />
              48hr Turnaround
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" />
              1-Year Warranty
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
