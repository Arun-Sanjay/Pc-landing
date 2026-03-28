"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { APPLE_EASE } from "@/lib/utils";

const BRAND = "GENX BUILD";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 2000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: APPLE_EASE }}
        >
          <div className="flex gap-[2px]">
            {BRAND.split("").map((char, i) => (
              <motion.span
                key={i}
                className="text-sm font-bold uppercase tracking-[0.2em] text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.4,
                  ease: APPLE_EASE,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          <div className="relative mt-6 h-[1px] w-48 overflow-hidden bg-[#1A1A1A]">
            <motion.div
              className="absolute inset-y-0 left-0 bg-[#C9A84C]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
