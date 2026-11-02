import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LogoFull } from "@/components/Logo";
import { SITE, waLink, mailLink } from "@/config/site";

const LANGS = [
  { id: "en", label: "English" },
  { id: "hi", label: "हिंदी" },
  { id: "mr", label: "मराठी" },
];

export const LangSelector = ({ dark = false }) => {
  const { lang, setLang } = useLanguage();
  return (
    <div
      data-testid="language-selector"
      className={`flex items-center gap-1 rounded-full border px-1 py-1 ${
        dark ? "border-white/20 bg-white/5" : "border-emerald-900/15 bg-white/60"
      }`}
    >
      {LANGS.map((l) => (
        <button
          key={l.id}
          data-testid={`language-selector-${l.id}`}
          onClick={() => setLang(l.id)}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
            lang === l.id
              ? "bg-[#0A2F24] text-[#FFFFFF]"
              : dark
              ? "text-emerald-50/70 hover:text-white"
              : "text-emerald-950/60 hover:text-[#0A2F24]"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: t("nav.home"), id: "home" },
    { href: "#about", label: t("nav.about"), id: "about" },
    { href: "#products", label: t("nav.products"), id: "products" },
    { href: "#solutions", label: t("nav.solutions"), id: "solutions" },
    { href: "#why-us", label: t("nav.why"), id: "why" },
    { href: "#certifications", label: t("nav.certifications"), id: "certifications" },
    { href: "#contact", label: t("nav.contact"), id: "contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-emerald-900/10 bg-[#FFFFFF]/85 shadow-[0_8px_40px_rgba(10,47,36,0.10)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#home" aria-label="JR Agro Chemicals home" className={`rounded-2xl px-2 py-1 transition-colors ${scrolled ? "" : "bg-[#FFFFFF]/85 backdrop-blur-md"}`}>
          <LogoFull />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={l.href}
              data-testid={`nav-link-${l.id}`}
              className="text-sm font-medium text-emerald-950/75 transition-colors hover:text-[#1E6B4A]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangSelector />
          <a
            data-testid="nav-enquire-button"
            href={mailLink("Product Enquiry — JR Agro Chemicals Website", "Hello JR Agro Chemicals,\n\nI would like to know more about your products.\n\nName: \nMobile: \n\nThank you.")}
            className="inline-flex items-center gap-2 rounded-full bg-[#0A2F24] px-5 py-2.5 text-sm font-semibold text-[#FFFFFF] transition-all hover:bg-[#1E6B4A] hover:shadow-lg hover:shadow-emerald-900/25"
          >
            <MessageCircle size={16} />
            {t("nav.enquire")}
          </a>
        </div>

        <button
          data-testid="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-label={t("nav.menu")}
          className="rounded-lg border border-emerald-900/15 p-2 text-[#0A2F24] lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-emerald-900/10 bg-[#FFFFFF]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  data-testid={`mobile-nav-link-${l.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-emerald-950/80 hover:bg-emerald-900/5"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-3 flex items-center justify-between gap-3">
                <LangSelector />
                <a
                  href={mailLink("Product Enquiry — JR Agro Chemicals Website", "Hello JR Agro Chemicals,\n\nI would like to know more about your products.\n\nName: \nMobile: \n\nThank you.")}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0A2F24] px-4 py-2 text-sm font-semibold text-[#FFFFFF]"
                >
                  <MessageCircle size={15} />
                  {t("nav.enquire")}
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export const NAV_OFFSET = 0;
export { SITE };
