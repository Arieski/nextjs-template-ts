"use client";

import React, { useState, useEffect } from "react";
import { I18nContext } from "@/i18n/i18n-react";
import { i18nObject } from "@/i18n/i18n-util";
import type { Locales } from "@/i18n/i18n-types";
import { loadAllLocales } from "@/i18n/i18n-util.sync";

// Load all locale packages
loadAllLocales();

const LOCALE_KEY = "app_locale";

const I18nProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Use default language for initial state to avoid SSR/CSR mismatch
  const [locale, setLocaleState] = useState<Locales>("en");
  const [isClient, setIsClient] = useState(false);

  // Read localStorage and update state after client mount
  useEffect(() => {
    setIsClient(true);
    const stored = localStorage.getItem(LOCALE_KEY);
    if (stored === "en" || stored === "zh") {
      setLocaleState(stored);
    }
  }, []);

  // Write to localStorage when switching languages
  const setLocale = (loc: Locales) => {
    setLocaleState(loc);
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCALE_KEY, loc);
    }
  };

  const LL = i18nObject(locale);

  // Use default language before client mount to avoid hydration mismatch
  if (!isClient) {
    return (
      <I18nContext.Provider
        value={{ locale: "en", LL: i18nObject("en"), setLocale }}
      >
        {children}
      </I18nContext.Provider>
    );
  }

  return (
    <I18nContext.Provider value={{ locale, LL, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
};

export default I18nProvider;
