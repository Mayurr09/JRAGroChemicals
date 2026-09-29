import { useLanguage } from "@/context/LanguageContext";
import { Sprout } from "lucide-react";

export default function Marquee() {
  const { t } = useLanguage();
  const items = t("marquee");
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-emerald-900/10 bg-[#FAF8F3] py-4" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-8">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-display text-lg font-semibold tracking-wide text-[#0A2F24]/80">{item}</span>
            <Sprout size={16} className="text-[#C59B27]" />
          </span>
        ))}
      </div>
    </div>
  );
}
