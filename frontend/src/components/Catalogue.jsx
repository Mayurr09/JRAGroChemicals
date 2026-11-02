import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MessageCircle, Eye, Package, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS, CATEGORIES, APPLICATIONS, ALL_CROPS } from "@/data/products";
import { Reveal, Eyebrow, MaskedLine } from "@/components/Reveal";
import SectionLang from "@/components/SectionLang";
import { waLink, productMail } from "@/config/site";

export const enquireAbout = (product) => {
  window.location.href = productMail(product.name);
};

export default function Catalogue({ onView }) {
  const { t, tx, lang } = useLanguage();
  const [cat, setCat] = useState("all");
  const [crop, setCrop] = useState("all");
  const [app, setApp] = useState("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (cat !== "all" && p.category !== cat) return false;
      if (crop !== "all" && !p.crops.includes(crop)) return false;
      if (app !== "all" && !p.application.includes(app)) return false;
      if (!needle) return true;
      const hay = [
        p.name,
        p.category,
        p.composition,
        ...p.crops,
        p.tagline.en, p.tagline.hi, p.tagline.mr,
        p.description.en, p.description.hi, p.description.mr,
      ].join(" ").toLowerCase();
      return hay.includes(needle);
    });
  }, [cat, crop, app, q]);

  const counts = useMemo(() => {
    const m = { all: PRODUCTS.length };
    CATEGORIES.forEach((c) => (m[c.id] = PRODUCTS.filter((p) => p.category === c.id).length));
    return m;
  }, []);

  const selectCls =
    "rounded-full border border-emerald-900/15 bg-white/80 px-4 py-2 text-sm text-emerald-950/80 outline-none focus:border-[#1E6B4A]";

  return (
    <section id="products" className="relative bg-[#FFFFFF] py-24 sm:py-32">
      <SectionLang />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow>{t("catalogue.label")}</Eyebrow>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#0A2F24]">
            <MaskedLine text={t("catalogue.title")} />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-stone-600">{t("catalogue.sub")}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900/40" />
              <input
                data-testid="product-search-input"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t("catalogue.searchPlaceholder")}
                className="w-full rounded-full border border-emerald-900/15 bg-white/80 py-3 pl-11 pr-4 text-sm text-emerald-950 outline-none transition-shadow focus:border-[#1E6B4A] focus:shadow-lg focus:shadow-emerald-900/10"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <select data-testid="filter-crop" value={crop} onChange={(e) => setCrop(e.target.value)} className={selectCls} aria-label={t("catalogue.filterCrop")}>
                <option value="all">{t("catalogue.allCrops")}</option>
                {ALL_CROPS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <select data-testid="filter-application" value={app} onChange={(e) => setApp(e.target.value)} className={selectCls} aria-label={t("catalogue.filterApp")}>
                <option value="all">{t("catalogue.allApps")}</option>
                {APPLICATIONS.map((a) => (
                  <option key={a.id} value={a.id}>{tx(a.name)}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <button
              data-testid="product-category-filter-all"
              onClick={() => setCat("all")}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                cat === "all" ? "bg-[#0A2F24] text-[#FFFFFF] shadow-lg shadow-emerald-900/20" : "border border-emerald-900/15 bg-white/70 text-emerald-950/70 hover:border-[#1E6B4A]"
              }`}
            >
              {t("catalogue.all")} · {counts.all}
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                data-testid={`product-category-filter-${c.id}`}
                onClick={() => setCat(c.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  cat === c.id ? "bg-[#0A2F24] text-[#FFFFFF] shadow-lg shadow-emerald-900/20" : "border border-emerald-900/15 bg-white/70 text-emerald-950/70 hover:border-[#1E6B4A]"
                }`}
              >
                {tx(c.name)} · {counts[c.id]}
              </button>
            ))}
          </div>

          <p data-testid="product-results-count" className="mt-5 text-xs uppercase tracking-[0.18em] text-emerald-900/50">
            {filtered.length} {t("catalogue.productsCount")}
          </p>
        </Reveal>

        {filtered.length === 0 ? (
          <p data-testid="no-results-message" className="mt-16 text-center text-sm text-stone-500">{t("catalogue.noResults")}</p>
        ) : (
          <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, idx) => (
                <motion.article
                  layout
                  key={p.id}
                  data-testid={`product-card-${p.id}`}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: Math.min(idx * 0.04, 0.3) }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-900/15"
                >
                  <button onClick={() => onView(p)} className="relative block overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-white" data-testid={`product-image-${p.id}`}>
                    <img src={p.image} alt={`${p.name} — JR Agro Chemicals`} loading="lazy" className="mx-auto h-52 object-contain p-4 transition-transform duration-500 group-hover:scale-[1.06]" />
                    <span className="absolute left-3 top-3 rounded-full bg-[#0A2F24]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#F5B301]">
                      {tx(CATEGORIES.find((c) => c.id === p.category)?.name)}
                    </span>
                  </button>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-xl font-bold text-[#0A2F24]">{p.name}</h3>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-stone-600">{tx(p.tagline)}</p>
                    <p className="mt-3 flex items-start gap-1.5 text-xs text-emerald-900/70">
                      <Sparkles size={13} className="mt-0.5 shrink-0 text-[#F5B301]" />
                      <span className="line-clamp-1">{tx(p.benefits)[0]}</span>
                    </p>
                    <p className="mt-2 flex items-start gap-1.5 text-xs text-emerald-900/70">
                      <Package size={13} className="mt-0.5 shrink-0 text-[#F5B301]" />
                      <span className="line-clamp-1">{p.crops.slice(0, 4).join(", ")}{p.crops.length > 4 ? " +" : ""}</span>
                    </p>
                    <div className="mt-4 flex items-center gap-2 border-t border-emerald-900/10 pt-4">
                      <button
                        data-testid={`product-view-details-${p.id}`}
                        onClick={() => onView(p)}
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#0A2F24] px-3 py-2 text-xs font-semibold text-[#FFFFFF] transition-colors hover:bg-[#1E6B4A]"
                      >
                        <Eye size={13} /> {t("catalogue.viewDetails")}
                      </button>
                      <button
                        data-testid={`product-enquire-${p.id}`}
                        onClick={() => enquireAbout(p)}
                        className="rounded-full border border-emerald-900/20 px-3 py-2 text-xs font-semibold text-[#0A2F24] transition-colors hover:border-[#F5B301] hover:text-[#1E6B4A]"
                      >
                        {t("catalogue.enquireNow")}
                      </button>
                      <a
                        data-testid={`product-whatsapp-${p.id}`}
                        href={waLink(`Hello JR Agro Chemicals, I would like to know more about ${p.name}.`)}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`WhatsApp about ${p.name}`}
                        className="rounded-full bg-[#25D366] p-2 text-white transition-transform hover:scale-110"
                      >
                        <MessageCircle size={14} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
