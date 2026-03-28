"use client";

import { motion } from "framer-motion";
import { PREBUILT_CONFIGS, WHATSAPP_BASE_URL } from "@/lib/constants";
import { APPLE_EASE } from "@/lib/utils";

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

export default function PrebuiltBuilds() {
  return (
    <section
      id="builds"
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
            PREBUILT CONFIGURATIONS
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
            Choose Your Starting Point
          </h2>
          <p className="mt-4 max-w-xl text-sm text-[#999999] sm:text-base">
            Every build is fully customizable. Pick one close to your needs, and
            we&apos;ll fine-tune it together.
          </p>
        </motion.div>

        {/* Desktop grid */}
        <motion.div
          className="mt-12 hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {PREBUILT_CONFIGS.map((build) => (
            <BuildCard key={build.name} build={build} />
          ))}
        </motion.div>

        {/* Mobile horizontal scroll */}
        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:hidden scrollbar-hide">
          {PREBUILT_CONFIGS.map((build) => (
            <div key={build.name} className="min-w-[85vw] max-w-[85vw] flex-shrink-0 snap-start">
              <BuildCard build={build} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuildCard({
  build,
}: {
  build: (typeof PREBUILT_CONFIGS)[number];
}) {
  const url = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    build.whatsappMessage
  )}`;

  return (
    <motion.div
      variants={item}
      className={`relative flex flex-col rounded-xl border p-6 transition-colors duration-300 sm:p-8 ${
        build.popular
          ? "border-[#C9A84C]/30 bg-[#0A0A0A] shadow-[0_0_60px_rgba(201,168,76,0.06)]"
          : "border-[#1A1A1A] bg-[#0A0A0A] hover:border-[#2A2A2A]"
      }`}
    >
      {build.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#C9A84C] px-4 py-1 text-xs font-bold text-black">
          MOST POPULAR
        </span>
      )}

      {/* Tag */}
      <span className="inline-flex w-fit rounded-full bg-[#C9A84C]/10 px-3 py-1 text-xs font-medium tracking-[0.1em] text-[#C9A84C] ring-1 ring-[#C9A84C]/20">
        {build.tag}
      </span>

      {/* Name & description */}
      <h3 className="mt-4 text-xl font-semibold text-white">{build.name}</h3>
      <p className="mt-1 text-sm text-[#999999]">{build.description}</p>

      {/* Specs */}
      <div className="mt-5 flex-1">
        {build.specs.map((spec) => (
          <div
            key={spec.label}
            className="flex items-center justify-between gap-3 border-b border-[#0F0F0F] py-2.5"
          >
            <span className="shrink-0 font-mono text-xs uppercase text-[#666666]">
              {spec.label}
            </span>
            <span className="text-right font-mono text-sm font-medium text-white">
              {spec.value}
            </span>
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="my-4 h-px bg-[#1A1A1A]" />
      <p className="font-mono text-3xl font-bold text-[#C9A84C]">
        &#8377;{build.price}
        <span className="ml-1 text-xs font-normal text-[#666666]">+</span>
      </p>
      <p className="mt-1 text-xs text-[#666666]">Starting from</p>

      {/* CTA */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#D4AF37] active:scale-[0.97]"
      >
        Get This Build
      </a>
    </motion.div>
  );
}
