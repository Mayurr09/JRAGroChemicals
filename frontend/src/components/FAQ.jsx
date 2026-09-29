import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal, Eyebrow, MaskedLine } from "@/components/Reveal";
import SectionLang from "@/components/SectionLang";

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);
  const items = t("faq.items");

  return (
    <section id="faq" className="relative bg-[#FAF8F3] py-24 sm:py-32">
      <SectionLang />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow>{t("faq.label")}</Eyebrow>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#0A2F24]">
            <MaskedLine text={t("faq.title")} />
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div data-testid={`faq-accordion-item-${i + 1}`} className="overflow-hidden rounded-2xl border border-emerald-900/10 bg-white/80">
                <button
                  data-testid={`faq-question-${i + 1}`}
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-semibold text-[#0A2F24] sm:text-base">{item.q}</span>
                  <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 text-[#C59B27]">
                    <Plus size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-stone-600">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
