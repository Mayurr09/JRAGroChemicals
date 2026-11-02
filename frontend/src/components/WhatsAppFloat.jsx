import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { waLink } from "@/config/site";

export default function WhatsAppFloat() {
  const { t } = useLanguage();
  return (
    <motion.a
      data-testid="whatsapp-floating-button"
      href={waLink(t("enquiry.waMessage"))}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 4.2, type: "spring", stiffness: 260, damping: 18 }}
      className="fixed bottom-6 right-6 z-[80] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-900/30 transition-transform hover:scale-110"
    >
      <MessageCircle size={26} />
      <span className="absolute -right-1 -top-1 h-3.5 w-3.5 animate-ping rounded-full bg-[#F5B301]" />
    </motion.a>
  );
}
