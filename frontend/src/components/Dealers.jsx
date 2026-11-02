import { useState } from "react";
import { MapPin, Search, Store, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal, Eyebrow, MaskedLine } from "@/components/Reveal";
import SectionLang from "@/components/SectionLang";
import { waLink } from "@/config/site";

const DISTRICTS = ["Sangli", "Satara", "Kolhapur", "Solapur", "Pune", "Nashik", "Nagpur", "Chhatrapati Sambhajinagar"];
export const DEALERS = [];

export default function Dealers() {
  const { t } = useLanguage();
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");

  const results = DEALERS.filter(
    (d) => (!district || d.district === district) && (!city || d.city.toLowerCase().includes(city.toLowerCase()))
  );

  const selectCls =
    "rounded-full border border-emerald-900/15 bg-white/80 px-4 py-2.5 text-sm text-emerald-950/80 outline-none focus:border-[#1E6B4A]";

  return (
    <section id="dealers" className="relative bg-[#FFFFFF] py-24 sm:py-32">
      <SectionLang />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow>{t("dealers.label")}</Eyebrow>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#0A2F24]">
            <MaskedLine text={t("dealers.title")} />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-stone-600">{t("dealers.sub")}</p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <select data-testid="dealer-district-select" value={district} onChange={(e) => setDistrict(e.target.value)} className={`${selectCls} flex-1`} aria-label={t("dealers.district")}>
            <option value="">{t("dealers.district")} — Maharashtra</option>
            {DISTRICTS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900/40" />
            <input
              data-testid="dealer-search-input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder={t("dealers.search")}
              className="w-full rounded-full border border-emerald-900/15 bg-white/80 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#1E6B4A]"
            />
          </div>
        </Reveal>

        {results.length === 0 ? (
          <Reveal delay={0.15} className="mx-auto mt-10 max-w-2xl">
            <div data-testid="dealer-empty-state" className="rounded-2xl border-2 border-dashed border-emerald-900/20 bg-white/60 p-10 text-center">
              <Store size={34} className="mx-auto text-emerald-900/30" />
              <p className="mt-4 text-sm leading-relaxed text-stone-600">{t("dealers.empty")}</p>
              <a
                data-testid="dealer-become-cta"
                href={waLink(t("enquiry.waMessage"))}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0A2F24] px-6 py-3 text-sm font-semibold text-[#FFFFFF] transition-colors hover:bg-[#1E6B4A]"
              >
                <MessageCircle size={15} /> {t("dealers.become")}
              </a>
            </div>
          </Reveal>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((d, i) => (
              <div key={i} className="rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-[#0A2F24]">{d.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-stone-500"><MapPin size={12} /> {d.address}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
