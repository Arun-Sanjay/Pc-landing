"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gamepad2,
  Video,
  Monitor,
  Layers,
  Cpu,
  MonitorPlay,
  CircuitBoard,
  MemoryStick,
  HardDrive,
  Box,
  Sparkles,
  Check,
  ChevronRight,
  ChevronLeft,
  CircleDashed,
  Star,
} from "lucide-react";
import {
  USE_CASE_OPTIONS,
  CONFIGURATOR_STEPS,
  EXTRAS_OPTIONS,
  buildWhatsAppMessage,
  getCompatibleMotherboards,
  getCompatibleRam,
  RECOMMENDATIONS,
} from "@/lib/configurator-data";
import type { ComponentOption } from "@/lib/configurator-data";
import { APPLE_EASE } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Gamepad2,
  Video,
  Monitor,
  Layers,
  Cpu,
  MonitorPlay,
  CircuitBoard,
  MemoryStick,
  HardDrive,
  Box,
  Sparkles,
};

// 0 = use case, 1-7 = component steps
const TOTAL_STEPS = 8;
const STEP_LABELS = [
  "Use Case",
  "Processor",
  "GPU",
  "Motherboard",
  "RAM",
  "Storage",
  "Case & Power",
  "Extras",
];

export default function Configurator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [useCase, setUseCase] = useState<string | null>(null);
  const [selections, setSelections] = useState<
    Record<string, ComponentOption | null>
  >({
    processor: null,
    gpu: null,
    motherboard: null,
    ram: null,
    storage: null,
    chassis: null,
  });
  const [extras, setExtras] = useState<string[]>([]);
  const [letUsDecide, setLetUsDecide] = useState<Record<string, boolean>>({});
  const [mobileSummaryOpen, setMobileSummaryOpen] = useState(false);

  // Filtered options based on compatibility
  const filteredMotherboards = useMemo(
    () => getCompatibleMotherboards(selections.processor?.id ?? null),
    [selections.processor]
  );

  const filteredRam = useMemo(
    () => getCompatibleRam(selections.motherboard?.id ?? null),
    [selections.motherboard]
  );

  // Build dynamic steps with filtered options
  const dynamicSteps = useMemo(() => {
    return CONFIGURATOR_STEPS.map((step) => {
      if (step.id === "motherboard") return { ...step, options: filteredMotherboards };
      if (step.id === "ram") return { ...step, options: filteredRam };
      return step;
    });
  }, [filteredMotherboards, filteredRam]);

  // Current recommendations based on use case
  const currentRecommendations = useMemo(
    () => (useCase ? RECOMMENDATIONS[useCase] ?? {} : {}),
    [useCase]
  );

  const total = useMemo(() => {
    const componentTotal = Object.values(selections).reduce(
      (sum, opt) => sum + (opt?.priceAdd ?? 0),
      0
    );
    const extrasTotal = EXTRAS_OPTIONS.options
      .filter((o) => extras.includes(o.id))
      .reduce((s, o) => s + o.priceAdd, 0);
    return componentTotal + extrasTotal;
  }, [selections, extras]);

  const handleSelect = useCallback(
    (stepId: string, option: ComponentOption) => {
      setSelections((prev) => {
        const next = { ...prev, [stepId]: option };
        // If CPU changed, reset motherboard and RAM if they're now incompatible
        if (stepId === "processor") {
          const compatMbs = getCompatibleMotherboards(option.id);
          if (prev.motherboard && !compatMbs.find((m) => m.id === prev.motherboard?.id)) {
            next.motherboard = null;
            next.ram = null;
          }
        }
        // If motherboard changed, reset RAM if now incompatible
        if (stepId === "motherboard") {
          const compatRam = getCompatibleRam(option.id);
          if (prev.ram && !compatRam.find((r) => r.id === prev.ram?.id)) {
            next.ram = null;
          }
        }
        return next;
      });
      setLetUsDecide((prev) => ({ ...prev, [stepId]: false }));
    },
    []
  );

  const handleLetUsDecide = useCallback((stepId: string) => {
    setSelections((prev) => ({ ...prev, [stepId]: null }));
    setLetUsDecide((prev) => ({ ...prev, [stepId]: true }));
  }, []);

  const toggleExtra = useCallback((id: string) => {
    setExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  }, []);

  const canNext = () => {
    if (currentStep === 0) return useCase !== null;
    if (currentStep >= 1 && currentStep <= 6) {
      const step = dynamicSteps[currentStep - 1];
      return selections[step.id] !== null || letUsDecide[step.id];
    }
    return true; // extras step — always can proceed
  };

  const getWhatsAppUrl = () => {
    const selMap: Record<string, string | string[]> = {};
    for (const step of dynamicSteps) {
      if (step.id === "extras") continue;
      selMap[step.id] = letUsDecide[step.id]
        ? "You choose for my budget"
        : selections[step.id]?.name ?? "You choose for my budget";
    }
    selMap.extras = extras.map(
      (id) => EXTRAS_OPTIONS.options.find((o) => o.id === id)?.name ?? id
    );
    return buildWhatsAppMessage(
      USE_CASE_OPTIONS.find((u) => u.id === useCase)?.name ?? "Not specified",
      selMap,
      total
    );
  };

  return (
    <section
      id="configurator"
      className="relative bg-[#050505] px-4 py-24 sm:px-8 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: APPLE_EASE }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C]">
            CUSTOM BUILD
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
            Build Exactly What You Need
          </h2>
          <p className="mt-4 max-w-xl text-sm text-[#999999] sm:text-base">
            Choose your components step by step. We&apos;ll handle the
            compatibility — you just pick what matters to you.
          </p>
        </motion.div>

        {/* Step indicator */}
        <div className="mt-10 flex items-center justify-center gap-1 sm:gap-1.5">
          {STEP_LABELS.map((label, i) => (
            <div key={label} className="flex items-center gap-1 sm:gap-1.5">
              <button
                onClick={() => {
                  if (i < currentStep) setCurrentStep(i);
                }}
                className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full text-[10px] sm:text-xs font-medium transition-colors ${
                  i < currentStep
                    ? "bg-[#C9A84C] text-black"
                    : i === currentStep
                    ? "ring-2 ring-[#C9A84C] text-[#C9A84C]"
                    : "ring-1 ring-[#333333] text-[#666666]"
                }`}
                aria-label={label}
              >
                {i < currentStep ? <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> : i + 1}
              </button>
              {i < STEP_LABELS.length - 1 && (
                <div
                  className={`hidden h-px w-4 sm:block ${
                    i < currentStep ? "bg-[#C9A84C]" : "bg-[#333333]"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row">
          {/* Left panel — step content */}
          <div className="flex-1 lg:w-[60%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: APPLE_EASE }}
              >
                {currentStep === 0 ? (
                  <UseCaseStep
                    selected={useCase}
                    onSelect={setUseCase}
                  />
                ) : (
                  <ComponentStep
                    step={dynamicSteps[currentStep - 1]}
                    selected={selections[dynamicSteps[currentStep - 1].id]}
                    isLetUsDecide={
                      letUsDecide[dynamicSteps[currentStep - 1].id] ?? false
                    }
                    extras={extras}
                    onSelect={handleSelect}
                    onLetUsDecide={handleLetUsDecide}
                    onToggleExtra={toggleExtra}
                    recommendedId={currentRecommendations[dynamicSteps[currentStep - 1].id]}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              {currentStep > 0 ? (
                <button
                  onClick={() => setCurrentStep((s) => s - 1)}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#333333] px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#C9A84C]/50"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < TOTAL_STEPS - 1 ? (
                <button
                  onClick={() => canNext() && setCurrentStep((s) => s + 1)}
                  disabled={!canNext()}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-[#D4AF37] active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-[#D4AF37] active:scale-[0.97]"
                >
                  Get Your Free Quote <ChevronRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right panel — summary (desktop) */}
          <div className="hidden lg:block lg:w-[40%]">
            <div className="sticky top-24 rounded-xl border border-[#1A1A1A] bg-[#0A0A0A] p-6">
              <BuildSummary
                useCase={useCase}
                selections={selections}
                extras={extras}
                letUsDecide={letUsDecide}
                total={total}
                whatsappUrl={getWhatsAppUrl()}
                dynamicSteps={dynamicSteps}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#1A1A1A] bg-[#0A0A0A]/95 backdrop-blur-xl lg:hidden">
        <div className="flex h-16 items-center justify-between px-4">
          <button
            onClick={() => setMobileSummaryOpen(!mobileSummaryOpen)}
            className="flex flex-col"
          >
            <span className="font-mono text-sm font-bold text-[#C9A84C]">
              Estimated: &#8377;{total.toLocaleString("en-IN")}
            </span>
            <span className="text-xs text-[#666666]">
              Tap to {mobileSummaryOpen ? "hide" : "view"} summary
            </span>
          </button>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#C9A84C] px-5 py-2.5 text-sm font-semibold text-black"
          >
            Get Quote
          </a>
        </div>

        <AnimatePresence>
          {mobileSummaryOpen && (
            <motion.div
              className="border-t border-[#1A1A1A] bg-[#0A0A0A] p-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <BuildSummary
                useCase={useCase}
                selections={selections}
                extras={extras}
                letUsDecide={letUsDecide}
                total={total}
                whatsappUrl={getWhatsAppUrl()}
                dynamicSteps={dynamicSteps}
                compact
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Spacer for mobile bottom bar */}
      <div className="h-16 lg:hidden" />
    </section>
  );
}

function UseCaseStep({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white">
        What will you use this PC for?
      </h3>
      <p className="mt-1 text-sm text-[#999999]">
        This helps us recommend the best components for your needs.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {USE_CASE_OPTIONS.map((opt) => {
          const Icon = iconMap[opt.icon];
          const isSelected = selected === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => onSelect(opt.id)}
              className={`relative flex items-start gap-4 rounded-xl border p-5 text-left transition-all duration-200 ${
                isSelected
                  ? "border-[#C9A84C] bg-[#C9A84C]/[0.05] ring-1 ring-[#C9A84C]/30"
                  : "border-[#1A1A1A] bg-[#0A0A0A] hover:border-[#2A2A2A]"
              }`}
            >
              {isSelected && (
                <Check className="absolute right-3 top-3 h-4 w-4 text-[#C9A84C]" />
              )}
              {Icon && (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C9A84C]/10">
                  <Icon className="h-5 w-5 text-[#C9A84C]" />
                </div>
              )}
              <div>
                <p className="font-semibold text-white">{opt.name}</p>
                <p className="mt-0.5 text-xs text-[#999999]">{opt.note}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ComponentStep({
  step,
  selected,
  isLetUsDecide,
  extras: selectedExtras,
  onSelect,
  onLetUsDecide,
  onToggleExtra,
  recommendedId,
}: {
  step: ConfiguratorStep;
  selected: ComponentOption | null;
  isLetUsDecide: boolean;
  extras: string[];
  onSelect: (stepId: string, option: ComponentOption) => void;
  onLetUsDecide: (stepId: string) => void;
  onToggleExtra: (id: string) => void;
  recommendedId?: string;
}) {
  const Icon = iconMap[step.icon];

  return (
    <div>
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#C9A84C]/10">
            <Icon className="h-5 w-5 text-[#C9A84C]" />
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold text-white">{step.title}</h3>
          <p className="text-sm text-[#999999]">{step.subtitle}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 max-h-[480px] overflow-y-auto pr-1 scrollbar-thin">
        {step.options.map((opt) => {
          const isSelected = step.multiSelect
            ? selectedExtras.includes(opt.id)
            : selected?.id === opt.id;
          const isRecommended = recommendedId === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() =>
                step.multiSelect
                  ? onToggleExtra(opt.id)
                  : onSelect(step.id, opt)
              }
              className={`relative flex items-center justify-between rounded-xl border p-5 text-left transition-all duration-200 ${
                isSelected
                  ? "border-[#C9A84C] bg-[#C9A84C]/[0.05] ring-1 ring-[#C9A84C]/30"
                  : isRecommended
                  ? "border-[#C9A84C]/40 bg-[#C9A84C]/[0.02] hover:border-[#C9A84C]/60"
                  : "border-[#1A1A1A] bg-[#0A0A0A] hover:border-[#2A2A2A]"
              }`}
            >
              <div className="min-w-0 flex-1 pr-3">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-white">{opt.name}</p>
                  {isRecommended && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#C9A84C]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#C9A84C]">
                      <Star className="h-2.5 w-2.5 fill-[#C9A84C]" />
                      Recommended
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-xs text-[#999999]">{opt.note}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="font-mono text-sm text-[#C9A84C]">
                  {opt.priceAdd === 0
                    ? "Included"
                    : `+ \u20B9${opt.priceAdd.toLocaleString("en-IN")}`}
                </span>
                {isSelected && (
                  <Check className="h-4 w-4 text-[#C9A84C]" />
                )}
              </div>
            </button>
          );
        })}

        {/* "Not sure" option — not on extras step */}
        {!step.multiSelect && (
          <button
            onClick={() => onLetUsDecide(step.id)}
            className={`flex items-center gap-3 rounded-xl border border-dashed p-5 text-left transition-all duration-200 ${
              isLetUsDecide
                ? "border-[#C9A84C]/50 bg-[#C9A84C]/[0.03]"
                : "border-[#333333] hover:border-[#C9A84C]/30"
            }`}
          >
            <CircleDashed className="h-5 w-5 shrink-0 text-[#C9A84C]/60" />
            <div>
              <p className="font-medium text-white/80">
                Not sure? We&apos;ll choose for you
              </p>
              <p className="mt-0.5 text-xs text-[#999999]">
                We&apos;ll recommend the best option for your budget
              </p>
            </div>
            {isLetUsDecide && (
              <Check className="ml-auto h-4 w-4 text-[#C9A84C]" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

function BuildSummary({
  useCase,
  selections,
  extras,
  letUsDecide,
  total,
  whatsappUrl,
  dynamicSteps,
  compact = false,
}: {
  useCase: string | null;
  selections: Record<string, ComponentOption | null>;
  extras: string[];
  letUsDecide: Record<string, boolean>;
  total: number;
  whatsappUrl: string;
  dynamicSteps: ConfiguratorStep[];
  compact?: boolean;
}) {
  const items = [
    {
      label: "Use Case",
      value: useCase
        ? USE_CASE_OPTIONS.find((u) => u.id === useCase)?.name
        : null,
    },
    ...dynamicSteps.filter((s) => s.id !== "extras").map((step) => ({
      label: step.title,
      value: letUsDecide[step.id]
        ? "We'll recommend"
        : selections[step.id]?.name ?? null,
    })),
    {
      label: "Extras",
      value:
        extras.length > 0
          ? extras
              .map(
                (id) => EXTRAS_OPTIONS.options.find((o) => o.id === id)?.name
              )
              .filter(Boolean)
              .join(", ")
          : null,
    },
  ];

  return (
    <div>
      {!compact && (
        <h3 className="mb-4 text-lg font-semibold text-white">Your Build</h3>
      )}

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-[#C9A84C]">
              {item.label}
            </p>
            <p
              className={`text-sm ${
                item.value ? "text-white" : "text-[#333333]"
              }`}
            >
              {item.value ?? "\u2014"}
            </p>
          </div>
        ))}
      </div>

      <div className="my-4 h-px bg-[#1A1A1A]" />

      <p className="text-xs uppercase tracking-[0.1em] text-[#666666]">
        Estimated Total
      </p>
      <p className="font-mono text-3xl font-bold text-[#C9A84C]">
        &#8377;{total.toLocaleString("en-IN")}
      </p>
      <p className="mt-1 text-xs text-[#666666]">
        Final price confirmed over WhatsApp
      </p>

      {!compact && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center rounded-lg bg-[#C9A84C] py-4 text-sm font-semibold text-black transition-colors hover:bg-[#D4AF37] active:scale-[0.97]"
        >
          Get Your Free Quote
        </a>
      )}
    </div>
  );
}
