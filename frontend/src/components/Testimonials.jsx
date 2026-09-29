import { Quote, UserRound } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal, Eyebrow, MaskedLine } from "@/components/Reveal";
import SectionLang from "@/components/SectionLang";

export const TESTIMONIALS = [];

export default function Testimonials() {
  const { t } = useLanguage();
  const items = TESTIMONIALS.length
    ? TESTIMONIALS
    : [0, 1, 2].map(() => ({ placeholder: true }));

  return (
    <section id="testimonials" className="relative bg-[#F3EFE6] py-24 sm:py-32">
      <SectionLang />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow>{t("testimonials.label")}</Eyebrow>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#0A2F24]">
            <MaskedLine text={t("testimonials.title")} />
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-stone-600">{t("testimonials.sub")}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure data-testid={`testimonial-card-${i}`} className={`flex h-full flex-col rounded-2xl border p-7 ${item.placeholder ? "border-dashed border-emerald-900/20 bg-white/50" : "border-emerald-900/10 bg-white shadow-sm"}`}>
                <Quote size={26} className="text-[#C59B27]/60" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">
                  {item.placeholder ? t("testimonials.placeholderText") : item.text}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-emerald-900/10 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2F24]/10 text-[#0A2F24]">
                    <UserRound size={18} />
                  </span>
                  <span className="text-sm font-semibold text-[#0A2F24]">
                    {item.placeholder ? t("testimonials.placeholderTitle") : item.name}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
