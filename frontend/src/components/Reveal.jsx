import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 36, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const MaskedLine = ({ text, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <span ref={ref} className={`mask-line ${className}`}>
      <motion.span
        initial={false}
        animate={inView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 1 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: "transform" }}
      >
        {text}
      </motion.span>
    </span>
  );
};

export const Eyebrow = ({ children, light = false }) => (
  <span
    className={`inline-block text-xs uppercase tracking-[0.24em] font-semibold ${
      light ? "text-[#F5B301]" : "text-[#1E6B4A]"
    }`}
  >
    {children}
  </span>
);
