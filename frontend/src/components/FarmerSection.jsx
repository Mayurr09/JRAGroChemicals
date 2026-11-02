import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { MaskedLine } from "@/components/Reveal";
import SectionLang from "@/components/SectionLang";

const IMG =
  "https://images.unsplash.com/photo-1624565019871-16a8d90ad749?crop=entropy&cs=srgb&fm=jpg&q=85";

export default function FarmerSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0A2F24] py-28 sm:py-40">
      <SectionLang light />
      <motion.div style={{ y }} className="absolute inset-0 scale-125">
        <img src={IMG} alt="Golden wheat crop close-up" loading="lazy" className="h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2F24]/90 via-[#0A2F24]/55 to-[#0A2F24]/30" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="font-display max-w-3xl text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-[#FFFFFF]">
          <MaskedLine text={t("farmer.headline")} />
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-xl text-base text-emerald-50/80"
        >
          {t("farmer.sub")}
        </motion.p>
        <motion.a
          data-testid="farmer-cta"
          href="#products"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#F5B301] px-7 py-3.5 text-sm font-bold text-[#0A2F24] transition-all hover:bg-[#FFC928]"
        >
          {t("farmer.cta")}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>
    </section>
  );
}
