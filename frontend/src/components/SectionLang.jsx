import { Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const LANGS = [
  { id: "en", label: "EN" },
  { id: "hi", label: "हिं" },
  { id: "mr", label: "मराठी" },
];

export default function SectionLang({ light = false }) {
  const { lang, setLang } = useLanguage();
  return (
    <div
      data-testid="section-language-selector"
      className={`absolute right-4 top-24 z-20 flex items-center gap-1 rounded-full border px-1.5 py-1 sm:right-6 ${
        light
          ? "border-white/20 bg-white/10 backdrop-blur-md"
          : "border-emerald-900/15 bg-white/70 backdrop-blur-md shadow-sm"
      }`}
    >
      <Languages size={13} className={light ? "text-[#F5B301]" : "text-[#1E6B4A]"} />
      {LANGS.map((l) => (
        <button
          key={l.id}
          data-testid={`section-lang-${l.id}`}
          onClick={() => setLang(l.id)}
          aria-label={l.id === "en" ? "English" : l.id === "hi" ? "Hindi" : "Marathi"}
          className={`rounded-full px-2 py-0.5 text-[11px] font-bold transition-colors ${
            lang === l.id
              ? light
                ? "bg-[#F5B301] text-[#0A2F24]"
                : "bg-[#0A2F24] text-[#FFFFFF]"
              : light
              ? "text-emerald-50/70 hover:text-white"
              : "text-emerald-950/55 hover:text-[#0A2F24]"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
