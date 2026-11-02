import { Phone, Mail, MessageCircle, ArrowUp, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LogoFull } from "@/components/Logo";
import { LangSelector } from "@/components/Navbar";
import { CATEGORIES } from "@/data/products";
import { SITE, waLink } from "@/config/site";

export default function Footer() {
  const { t, tx } = useLanguage();

  const quickLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#products", label: t("nav.products") },
    { href: "#solutions", label: t("nav.solutions") },
    { href: "#dealers", label: t("dealers.title") },
    { href: "#faq", label: t("faq.title") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <footer className="grain relative bg-[#0A2F24] text-emerald-50/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <LogoFull light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-emerald-100/60">{t("footer.desc")}</p>
            <div className="mt-6">
              <LangSelector dark />
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5B301]">{t("footer.quickLinks")}</h4>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} data-testid={`footer-link-${l.href.slice(1)}`} className="text-sm text-emerald-100/70 transition-colors hover:text-[#F5B301]">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5B301]">{t("footer.categories")}</h4>
            <ul className="mt-5 space-y-2.5">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <a href="#products" data-testid={`footer-category-${c.id}`} className="text-sm text-emerald-100/70 transition-colors hover:text-[#F5B301]">{tx(c.name)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5B301]">{t("footer.contactTitle")}</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-2.5"><MapPin size={15} className="mt-0.5 shrink-0 text-[#F5B301]" /><span className="text-emerald-100/70">{SITE.addressShort}</span></li>
              {SITE.phones.map((p) => (
                <li key={p}><a href={`tel:${p.replace(/\s/g, "")}`} className="flex items-center gap-2.5 text-emerald-100/70 hover:text-[#F5B301]"><Phone size={15} className="shrink-0 text-[#F5B301]" />{p}</a></li>
              ))}
              <li><a href={waLink(t("enquiry.waMessage"))} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-emerald-100/70 hover:text-[#F5B301]"><MessageCircle size={15} className="shrink-0 text-[#F5B301]" />{SITE.whatsappDisplay}</a></li>
              <li><a href={`mailto:${SITE.emailGeneral}`} className="flex items-center gap-2.5 text-emerald-100/70 hover:text-[#F5B301]"><Mail size={15} className="shrink-0 text-[#F5B301]" />{SITE.emailGeneral}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-emerald-100/10 pt-7 sm:flex-row">
          <p data-testid="footer-copyright" className="text-xs text-emerald-100/50">
            © {SITE.year} {SITE.name}. {t("footer.rights")}
          </p>
          <button
            data-testid="back-to-top-button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-100/15 px-4 py-2 text-xs font-semibold text-emerald-100/70 transition-colors hover:border-[#F5B301] hover:text-[#F5B301]"
          >
            <ArrowUp size={14} /> {t("misc.backToTop")}
          </button>
        </div>
      </div>
    </footer>
  );
}
