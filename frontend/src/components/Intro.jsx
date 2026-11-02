import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/config/site";

const GRANULES = Array.from({ length: 22 }, (_, i) => ({
  left: `${(i * 43) % 100}%`,
  size: 3 + (i % 4),
  duration: 6 + (i % 5) * 2.2,
  delay: (i % 7) * 0.9,
  gold: i % 3 === 0,
}));

export default function Intro({ onDone }) {
  const { t, tx } = useLanguage();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          data-testid="splash-screen"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0A2F24]"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1621394988863-117a9fc6e77f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHxfenR8ZW58MHx8fDE3OTA2NjY0ODh8MA&ixlib=rb-4.1.0&q=85"
            alt="Lush green farmland"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2F24]/70 via-[#0A2F24]/40 to-[#0A2F24]" />

          {GRANULES.map((g, i) => (
            <span
              key={i}
              className="animate-granule absolute top-0 rounded-full"
              style={{
                left: g.left,
                width: g.size,
                height: g.size,
                background: g.gold ? "#F5B301" : "#67C587",
                animationDuration: `${g.duration}s`,
                animationDelay: `${g.delay}s`,
              }}
            />
          ))}

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl bg-white px-10 py-7 shadow-2xl shadow-black/30"
            >
              <img src="/logo.png" alt="JR Agro Chemicals — Success Your Dream With Us" className="h-28 w-auto sm:h-36" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="relative mt-6 max-w-md text-sm sm:text-base text-emerald-100/90"
            >
              <span className="relative z-10">{tx(SITE.tagline)}</span>
              <span className="animate-sweep pointer-events-none absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </motion.p>
          </div>

          <button
            data-testid="skip-intro-button"
            onClick={() => setVisible(false)}
            className="absolute bottom-8 right-8 z-10 rounded-full border border-white/25 px-5 py-2 text-xs uppercase tracking-[0.2em] text-emerald-50/90 transition-colors hover:border-[#F5B301] hover:text-[#F5B301]"
          >
            {t("intro.skip")}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
