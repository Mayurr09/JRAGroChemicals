import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { T } from "@/i18n/translations";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem("jr-lang") || "en");

  useEffect(() => {
    localStorage.setItem("jr-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (path) => {
      const val = path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), T[lang]);
      const fallback = path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), T.en);
      return val ?? fallback ?? path;
    },
    [lang]
  );

  const tx = useCallback((obj) => (obj && typeof obj === "object" ? obj[lang] ?? obj.en : obj), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tx }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
