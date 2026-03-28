"use client";

import { motion, type Variants } from "framer-motion";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.15, duration: 1.5, ease: "easeInOut" as const },
      opacity: { delay: i * 0.15, duration: 0.3 },
    },
  }),
};

export default function HeroIllustration() {
  return (
    <div className="relative hidden lg:block">
      {/* Ambient glow */}
      <div className="absolute -inset-20 rounded-full bg-[#C9A84C]/[0.04] blur-[100px]" />

      <motion.svg
        viewBox="0 0 300 400"
        className="relative h-[400px] w-[300px]"
        initial="hidden"
        animate="visible"
        aria-hidden="true"
      >
        {/* PC Case outline */}
        <motion.rect
          x="40" y="20" width="220" height="340" rx="8"
          stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity={0.35}
          variants={draw} custom={0}
        />

        {/* Top vent lines */}
        {[0, 1, 2].map((i) => (
          <motion.line
            key={`vent-${i}`}
            x1="80" y1={45 + i * 12} x2="220" y2={45 + i * 12}
            stroke="#333333" strokeWidth="1" opacity={0.5}
            variants={draw} custom={1 + i * 0.3}
          />
        ))}

        {/* Motherboard area */}
        <motion.rect
          x="60" y="90" width="180" height="200" rx="4"
          stroke="#333333" strokeWidth="0.75" fill="none" opacity={0.3}
          variants={draw} custom={2}
        />

        {/* CPU */}
        <motion.rect
          x="110" y="120" width="80" height="80" rx="4"
          stroke="#C9A84C" strokeWidth="1" fill="none" opacity={0.4}
          variants={draw} custom={3}
        />
        <motion.rect
          x="125" y="135" width="50" height="50" rx="2"
          stroke="#C9A84C" strokeWidth="0.75" fill="none" opacity={0.25}
          variants={draw} custom={3.5}
        />

        {/* GPU */}
        <motion.rect
          x="70" y="220" width="160" height="50" rx="4"
          stroke="#C9A84C" strokeWidth="1" fill="none" opacity={0.35}
          variants={draw} custom={4}
        />
        {/* GPU fan circles */}
        <motion.circle
          cx="110" cy="245" r="15"
          stroke="#333333" strokeWidth="0.75" fill="none" opacity={0.3}
          variants={draw} custom={4.5}
        />
        <motion.circle
          cx="190" cy="245" r="15"
          stroke="#333333" strokeWidth="0.75" fill="none" opacity={0.3}
          variants={draw} custom={4.8}
        />

        {/* RAM sticks */}
        {[0, 1].map((i) => (
          <motion.rect
            key={`ram-${i}`}
            x={65 + i * 15} y="110" width="8" height="70" rx="2"
            stroke="#C9A84C" strokeWidth="0.75" fill="none" opacity={0.25}
            variants={draw} custom={5 + i * 0.3}
          />
        ))}

        {/* Case fan (top) */}
        <motion.circle
          cx="150" cy="320" r="25"
          stroke="#333333" strokeWidth="1" fill="none" opacity={0.25}
          variants={draw} custom={6}
        />
        <motion.circle
          cx="150" cy="320" r="12"
          stroke="#333333" strokeWidth="0.5" fill="none" opacity={0.15}
          variants={draw} custom={6.3}
        />

        {/* Power button */}
        <motion.circle
          cx="150" cy="370" r="5"
          stroke="#C9A84C" strokeWidth="1" fill="none" opacity={0.5}
          variants={draw} custom={7}
        />
      </motion.svg>

      {/* Floor shadow */}
      <div className="absolute -bottom-4 left-1/2 h-4 w-48 -translate-x-1/2 rounded-full bg-[#C9A84C]/[0.06] blur-xl" />

      {/* Floating animation */}
      <motion.div
        className="absolute inset-0"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
    </div>
  );
}
