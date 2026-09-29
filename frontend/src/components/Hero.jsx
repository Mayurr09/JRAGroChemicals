import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, ChevronDown, Leaf } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { MaskedLine } from "@/components/Reveal";
import SectionLang from "@/components/SectionLang";
import { SITE } from "@/config/site";

const HERO_IMG =
  "https://images.unsplash.com/photo-1647879826700-cfc5fd9d9a31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwzfHxsdXNoJTIwZ3JlZW4lMjBJbmRpYW4lMjBmYXJtbGFuZCUyMHdoZWF0JTIwcmljZSUyMGZpZWxkcyUyMGFncmljdWx0dXJlfGVufDB8fHx8MTc5MDY2NjQ4OHww&ixlib=rb-4.1.0&q=85";

export default function Hero() {
  const { t, tx } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="home" ref={ref} className="grain relative flex min-h-screen items-end overflow-hidden bg-[#0A2F24]">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img src={HERO_IMG} alt="Lush green Indian farmland at sunrise" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F24] via-[#0A2F24]/55 to-[#0A2F24]/25" />
      </motion.div>

      <SectionLang light />
      <Leaf className="animate-leaf absolute right-[12%] top-[22%] hidden text-[#C59B27]/40 lg:block" size={64} />
      <Leaf className="animate-leaf absolute left-[8%] top-[30%] hidden text-emerald-300/25 lg:block" size={44} style={{ animationDelay: "2s" }} />

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-40 sm:px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C59B27]/40 bg-[#0A2F24]/60 px-4 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-50/90">{t("hero.trust")}</span>
        </div>

        <h1 data-testid="hero-title" className="font-display max-w-4xl text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#FAF8F3]">
          <MaskedLine text={t("hero.title1")} delay={0.35} />
          <span className="text-[#C59B27]">
            <MaskedLine text={t("hero.title2")} delay={0.5} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-6 max-w-xl text-base text-emerald-50/80 sm:text-lg"
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
            className="group inline-flex items-center gap-2 rounded-full bg-[#C59B27] px-7 py-3.5 text-sm font-bold text-[#0A2F24] transition-all hover:bg-[#D4AF37] hover:shadow-xl hover:shadow-[#C59B27]/30"
          >
            {t("hero.cta1")}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            data-testid="hero-cta-contact"
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-100/30 px-7 py-3.5 text-sm font-semibold text-[#FAF8F3] backdrop-blur-sm transition-colors hover:border-[#C59B27] hover:text-[#C59B27]"
          >
            <Phone size={16} />
            {t("hero.cta2")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-14 flex flex-col items-start gap-2 text-emerald-100/60"
        >
          <span className="text-[11px] uppercase tracking-[0.24em]">{t("hero.scroll")}</span>
          <ChevronDown size={18} className="animate-bounce" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-[#0A2F24]/70 px-4 py-3 backdrop-blur-md sm:px-6">
        <p className="mx-auto max-w-7xl text-xs tracking-wide text-emerald-100/70">
          {SITE.address} · {SITE.phones.join(" · ")} · {SITE.website}
        </p>
      </div>
    </section>
  );
}
