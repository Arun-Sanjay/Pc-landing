"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";
import { APPLE_EASE } from "@/lib/utils";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative px-4 py-24 sm:px-8 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: APPLE_EASE }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C]">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
            Common Questions
          </h2>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: APPLE_EASE,
            delay: 0.1,
          }}
        >
          <Accordion className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-[#1A1A1A]"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-white transition-colors hover:text-[#C9A84C] hover:no-underline [&[data-state=open]]:text-[#C9A84C] [&>svg]:text-[#C9A84C]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-[#999999]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
