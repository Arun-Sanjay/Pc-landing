"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_BASE_URL } from "@/lib/constants";
import { APPLE_EASE } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const quoteUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    "Hi! I'd like to get a quote for a custom PC build."
  )}`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#1A1A1A] bg-black/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-16">
          <a
            href="#"
            className="text-sm font-bold uppercase tracking-[0.2em] text-white"
          >
            GENX BUILD
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#999999] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#C9A84C] px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-[#D4AF37]"
            >
              Get a Quote
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#C9A84C] px-4 py-1.5 text-xs font-semibold text-black transition-colors hover:bg-[#D4AF37]"
            >
              Get a Quote
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center text-white"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center text-white"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-light tracking-wide text-white transition-colors hover:text-[#C9A84C]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.5,
                    ease: APPLE_EASE,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
