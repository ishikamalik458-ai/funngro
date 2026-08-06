"use client";

import { useState, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types";

export function Accordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4">
      {items.map((item, index) => (
        <AccordionRow
          key={item.question}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <div
      className={cn(
        "rounded-2xl border bg-white transition-colors duration-300",
        isOpen ? "border-primary-300 shadow-soft" : "border-primary-100"
      )}
    >
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-display text-base font-semibold text-ink sm:text-lg">
            {item.question}
          </span>
          <span
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 transition-transform duration-300",
              isOpen && "rotate-45 bg-primary-700 text-white"
            )}
          >
            <Plus className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-body leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
