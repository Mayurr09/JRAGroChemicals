import { BadgeCheck, FlaskConical, HeartHandshake, Leaf, MessagesSquare, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal, Eyebrow, MaskedLine } from "@/components/Reveal";
import SectionLang from "@/components/SectionLang";

const ICONS = [BadgeCheck, FlaskConical, HeartHandshake, Leaf, MessagesSquare, Layers];

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const items = t("why.items");

  return (
    <section id="why-us" className="relative bg-[#FAF8F3] py-24 sm:py-32">
      <SectionLang />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow>{t("why.label")}</Eyebrow>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#0A2F24]">
            <MaskedLine text={t("why.title")} />
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-stone-600">{t("why.sub")}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={i} delay={(i % 3) * 0.1}>
                <div data-testid={`why-card-${i}`} className="group h-full rounded-2xl border border-emerald-900/10 bg-white/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C59B27]/50 hover:shadow-xl hover:shadow-emerald-900/10">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A2F24] text-[#C59B27] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#0A2F24]">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-stone-600">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
