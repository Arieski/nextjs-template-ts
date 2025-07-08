"use client";
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { i18nObject } from "@/i18n/i18n-util";
import type { Locales } from "@/i18n/i18n-types";
import { loadAllLocales } from "@/i18n/i18n-util.sync";
loadAllLocales();

interface LanguageContextType {
  locale: Locales;
  LL: ReturnType<typeof i18nObject>;
  setLocale: (locale: Locales) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const LOCALE_KEY = "app_locale";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // 优化：初始 locale 直接同步读取 localStorage（仅客户端），否则用 'en'
  const getInitialLocale = (): Locales => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(LOCALE_KEY);
      if (stored === "en" || stored === "zh") return stored;
    }
    return "en";
  };
  const [locale, setLocaleState] = useState<Locales>(getInitialLocale);

  // 切换语言时写入localStorage
  const setLocale = (loc: Locales) => {
    setLocaleState(loc);
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCALE_KEY, loc);
    }
  };

  const LL = useMemo(() => i18nObject(locale), [locale]);
  return (
    <LanguageContext.Provider value={{ locale, LL, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
};
