import { FileBadge, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal, Eyebrow, MaskedLine } from "@/components/Reveal";
import SectionLang from "@/components/SectionLang";
import { SITE } from "@/config/site";

export default function Certifications() {
  const { t } = useLanguage();
  const items = t("certs.placeholders");

  return (
    <section id="certifications" className="relative bg-[#F3EFE6] py-24 sm:py-32">
      <SectionLang />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow>{t("certs.label")}</Eyebrow>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#0A2F24]">
            <MaskedLine text={t("certs.title")} />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-stone-600">{t("certs.sub")}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((label, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div data-testid={`cert-placeholder-${i}`} className="flex h-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-emerald-900/20 bg-white/50 p-8 text-center">
                <FileBadge size={30} className="text-emerald-900/30" />
                <p className="mt-4 text-sm font-semibold text-emerald-950/70">{label}</p>
                <p className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-stone-400">{t("productModal.pending")}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E6B4A] hover:text-[#0A2F24]">
            <Phone size={15} /> {t("certs.note")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
