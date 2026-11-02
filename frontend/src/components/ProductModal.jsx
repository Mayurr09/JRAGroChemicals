import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send, Download, Leaf, FlaskConical, Droplets, Package, Archive } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CATEGORIES, APPLICATIONS } from "@/data/products";
import { waLink } from "@/config/site";
import { enquireAbout } from "@/components/Catalogue";

const Row = ({ icon: Icon, label, children, testid }) => (
  <div data-testid={testid} className="rounded-xl border border-emerald-900/10 bg-[#FFFFFF] p-4">
    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#1E6B4A]">
      <Icon size={14} className="text-[#F5B301]" /> {label}
    </div>
    <div className="mt-2 text-sm leading-relaxed text-stone-700">{children}</div>
  </div>
);

export default function ProductModal({ product, onClose }) {
  const { t, tx } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = product ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [product]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          data-testid="product-detail-modal"
          data-lenis-prevent=""
          className="fixed inset-0 z-[90] flex items-end justify-center bg-[#0A2F24]/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          >
            <button
              data-testid="product-modal-close-button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 rounded-full bg-[#0A2F24] p-2 text-[#FFFFFF] transition-transform hover:scale-110"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-[320px_1fr]">
              <div className="relative flex items-center justify-center bg-gradient-to-b from-[#FFFFFF] to-white p-8">
                <img src={product.image} alt={`${product.name} pack — JR Agro Chemicals`} className="max-h-72 object-contain drop-shadow-xl" />
                <span className="absolute left-4 top-4 rounded-full bg-[#0A2F24] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#F5B301]">
                  {tx(CATEGORIES.find((c) => c.id === product.category)?.name)}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-display pr-10 text-3xl font-bold text-[#0A2F24]">{product.name}</h3>
                <p className="mt-2 text-sm text-stone-600">{tx(product.tagline)}</p>

                <div className="mt-6 space-y-3">
                  <Row icon={Leaf} label={t("productModal.description")} testid="modal-description">
                    {tx(product.description)}
                  </Row>
                  <Row icon={FlaskConical} label={t("productModal.composition")} testid="modal-composition">
                    {product.composition || t("productModal.pending")}
                  </Row>
                  <Row icon={Droplets} label={t("productModal.dosage")} testid="modal-dosage">
                    {tx(product.dosage)}
                  </Row>
                </div>

                <div className="mt-5">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#1E6B4A]">{t("productModal.benefits")}</div>
                  <ul className="mt-2 space-y-1.5">
                    {tx(product.benefits).map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5B301]" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#1E6B4A]">{t("productModal.crops")}</div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {product.crops.map((c) => (
                        <span key={c} className="rounded-full bg-emerald-900/5 px-2.5 py-1 text-[11px] font-medium text-emerald-950/80">{c}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#1E6B4A]">{t("productModal.application")}</div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {product.application.map((a) => (
                        <span key={a} className="rounded-full bg-[#F5B301]/15 px-2.5 py-1 text-[11px] font-medium text-[#7a6116]">
                          {tx(APPLICATIONS.find((x) => x.id === a)?.name)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Row icon={Package} label={t("productModal.packaging")} testid="modal-packaging">
                    {product.packaging.join(" · ") || t("productModal.pending")}
                  </Row>
                  <Row icon={Archive} label={t("productModal.storage")} testid="modal-storage">
                    {t("productModal.storageText")}
                  </Row>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    data-testid="product-modal-send-enquiry"
                    onClick={() => { onClose(); enquireAbout(product); }}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0A2F24] px-6 py-3 text-sm font-semibold text-[#FFFFFF] transition-colors hover:bg-[#1E6B4A]"
                  >
                    <Send size={15} /> {t("productModal.sendEnquiry")}
                  </button>
                  <a
                    data-testid="product-modal-whatsapp-enquiry"
                    href={waLink(`Hello JR Agro Chemicals, I would like to know more about ${product.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                  >
                    <MessageCircle size={15} /> {t("productModal.whatsapp")}
                  </a>
                  <a
                    data-testid="product-modal-brochure"
                    href={product.image}
                    download={`JR-Agro-${product.name}.webp`}
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-900/20 px-6 py-3 text-sm font-semibold text-[#0A2F24] transition-colors hover:border-[#F5B301]"
                  >
                    <Download size={15} /> {t("productModal.brochure")}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
