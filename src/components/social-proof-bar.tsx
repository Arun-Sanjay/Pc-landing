"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import { APPLE_EASE } from "@/lib/utils";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-mono text-xl font-bold text-white sm:text-2xl">
      {count}
      {suffix}
    </span>
  );
}

export default function SocialProofBar() {
  return (
    <section className="border-y border-[#1A1A1A] bg-[#0A0A0A] py-6">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4 lg:px-16">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={`flex flex-col items-center justify-center py-2 ${
              i < STATS.length - 1 ? "md:border-r md:border-[#1A1A1A]" : ""
            }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: i * 0.1,
              duration: 0.6,
              ease: APPLE_EASE,
            }}
          >
            {stat.isNumber && stat.numericValue ? (
              <CountUp target={stat.numericValue} suffix="+" />
            ) : (
              <span className="font-mono text-xl font-bold text-white sm:text-2xl">
                {stat.value}
              </span>
            )}
            <span className="mt-1 text-xs uppercase tracking-[0.15em] text-[#666666]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
