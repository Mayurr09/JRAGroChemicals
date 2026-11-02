import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, ChevronDown, Leaf } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { MaskedLine } from "@/components/Reveal";
import SectionLang from "@/components/SectionLang";
import { SITE } from "@/config/site";

const HERO_IMG =
  "https://images.unsplash.com/photo-1696371269777-88d1ce71642c?crop=entropy&cs=srgb&fm=jpg&q=85";

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="home" ref={ref} className="grain relative flex min-h-screen items-end overflow-hidden bg-[#0A2F24]">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img src={HERO_IMG} alt="Happy Indian farmer applying fertilizer to his field with soil and green crops" className="h-full w-full object-cover object-[center_22%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F24]/80 via-[#0A2F24]/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2F24]/45 via-transparent to-transparent" />
      </motion.div>

      <SectionLang light />
      <Leaf className="animate-leaf absolute right-[12%] top-[22%] hidden text-[#F5B301]/50 lg:block" size={64} />
      <Leaf className="animate-leaf absolute left-[8%] top-[30%] hidden text-[#1E6B4A]/20 lg:block" size={44} style={{ animationDelay: "2s" }} />

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-40 sm:px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0A2F24]/90 px-4 py-2 shadow-lg shadow-emerald-900/15 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F5B301]" />
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#FFFFFF]/90">{t("hero.trust")}</span>
        </div>

        <h1 data-testid="hero-title" className="font-display max-w-4xl text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white [text-shadow:0_2px_18px_rgba(10,47,36,0.55)]">
          <MaskedLine text={t("hero.title1")} delay={0.35} />
          <span className="text-[#FFD02E]">
            <MaskedLine text={t("hero.title2")} delay={0.5} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-6 max-w-xl text-base font-medium text-white sm:text-lg [text-shadow:0_1px_12px_rgba(10,47,36,0.6)]"
        >
          {t("hero.sub")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            data-testid="hero-cta-catalogue"
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full bg-[#0A2F24] px-7 py-3.5 text-sm font-bold text-[#FFFFFF] transition-all hover:bg-[#1E6B4A] hover:shadow-xl hover:shadow-emerald-900/25"
          >
            {t("hero.cta1")}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            data-testid="hero-cta-contact"
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0A2F24]"
          >
            <Phone size={16} />
            {t("hero.cta2")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-14 flex flex-col items-start gap-2 text-white/70"
        >
          <span className="text-[11px] uppercase tracking-[0.24em]">{t("hero.scroll")}</span>
          <ChevronDown size={18} className="animate-bounce" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-emerald-900/10 bg-[#0A2F24] px-4 py-3 sm:px-6">
        <p className="mx-auto max-w-7xl text-xs tracking-wide text-emerald-100/75">
          {SITE.address} · {SITE.phones.join(" · ")} · {SITE.website}
        </p>
      </div>
    </section>
  );
}
