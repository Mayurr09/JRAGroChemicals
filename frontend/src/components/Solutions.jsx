import { Wheat, Mountain, FlaskConical, TrendingUp, Leaf, Headset, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal, Eyebrow, MaskedLine } from "@/components/Reveal";
import SectionLang from "@/components/SectionLang";

const ICONS = [Wheat, Mountain, FlaskConical, TrendingUp, Leaf, Headset];

export default function Solutions() {
  const { t } = useLanguage();
  const items = t("solutions.items");

  return (
    <section id="solutions" className="relative bg-[#0A2F24] py-24 sm:py-32">
      <SectionLang light />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, #C59B27 0, transparent 40%), radial-gradient(circle at 80% 70%, #67C587 0, transparent 40%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow light>{t("solutions.label")}</Eyebrow>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#FAF8F3]">
            <MaskedLine text={t("solutions.title")} />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-emerald-100/70">{t("solutions.sub")}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={i} delay={(i % 3) * 0.1}>
                <a
                  href="#products"
                  data-testid={`solution-card-${i}`}
                  className="group flex h-full flex-col rounded-2xl border border-emerald-100/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C59B27]/40 hover:bg-white/[0.07]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C59B27]/15 text-[#C59B27] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display mt-5 text-xl font-semibold text-[#FAF8F3]">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-emerald-100/65">{item.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#C59B27]">
                    {t("solutions.learnMore")}
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
