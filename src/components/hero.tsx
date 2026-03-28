"use client";

import { motion } from "framer-motion";
import CircuitBG from "./circuit-bg";
import HeroIllustration from "./hero-illustration";
import { APPLE_EASE } from "@/lib/utils";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: APPLE_EASE },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-8 lg:px-16">
      {/* Circuit board background */}
      <div className="absolute inset-0">
        <CircuitBG />
      </div>

      {/* Gold glow orbs */}
      <div className="absolute right-[10%] top-[15%] h-[300px] w-[300px] rounded-full bg-[#C9A84C]/[0.04] blur-[120px] animate-gold-drift" />
      <div className="absolute bottom-[20%] left-[5%] h-[250px] w-[250px] rounded-full bg-[#C9A84C]/[0.04] blur-[120px] animate-gold-drift animation-delay-4000" />

      <div className="relative z-10 mx-auto flex max-w-6xl items-center gap-16">
        <motion.div
          className="flex flex-1 flex-col items-center text-center lg:items-center lg:text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Gold pill label */}
          <motion.div variants={item}>
            <span className="inline-flex items-center rounded-full bg-[#C9A84C]/10 px-4 py-1.5 text-xs font-medium tracking-[0.15em] text-[#C9A84C] ring-1 ring-[#C9A84C]/20">
              CUSTOM PC BUILDS &bull; BANGALORE
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="mt-8 text-5xl font-bold leading-[0.9] tracking-[-0.04em] text-white sm:text-7xl md:text-8xl"
            variants={item}
          >
            Performance,
            <br />
            <span className="text-[#C9A84C]">Engineered.</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#999999] sm:text-lg md:text-xl"
            variants={item}
          >
            Every PC handcrafted to your workflow. Tell us what you do — we'll
            build the machine that does it best.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            variants={item}
          >
            <a
              href="#configurator"
              className="inline-flex items-center justify-center rounded-lg bg-[#C9A84C] px-8 py-4 text-base font-semibold text-black transition-all hover:bg-[#D4AF37] active:scale-[0.95]"
            >
              Build Your PC
            </a>
            <a
              href="#builds"
              className="inline-flex items-center justify-center rounded-lg border border-[#333333] px-8 py-4 text-base font-medium text-white transition-all hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/5 active:scale-[0.95]"
            >
              View Prebuilts
            </a>
          </motion.div>
        </motion.div>

        {/* Hero illustration — desktop only */}
        <HeroIllustration />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center">
        <div className="relative h-10 w-[1px] bg-[#333333]">
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#C9A84C] animate-scroll-bounce" />
        </div>
      </div>
    </section>
  );
}
