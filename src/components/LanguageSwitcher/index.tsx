"use client";

import React, { useState, useEffect } from "react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useI18nContext } from "@/i18n/i18n-react";
import { locales } from "@/i18n/i18n-util";
import styles from "./index.module.css";

// Dynamically generate language name mapping
const SUPPORTED_LANGUAGES: Record<string, string> = {
  en: "English",
  zh: "中文",
};

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useI18nContext();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const items = locales.map((lang) => ({
    key: lang,
    label: (
      <span className={styles.dropdownItem} data-active={locale === lang}>
        {SUPPORTED_LANGUAGES[lang] || lang}
      </span>
    ),
    style: {
      padding: 0,
      margin: 0,
    },
  }));

  const handleMenuClick: MenuProps["onClick"] = async ({ key }) => {
    if (typeof key === "string") {
      setLocale(key as "en" | "zh");
    }
  };

  // Show default language name before client mount
  const displayLanguage = isClient
    ? SUPPORTED_LANGUAGES[locale] || locale
    : "English";

  return (
    <Dropdown
      menu={{ items: items as any, onClick: handleMenuClick }}
      placement="bottomRight"
      trigger={["click"]}
    >
      <button className={styles.languageButton}>
        <GlobalOutlined style={{ fontSize: 18 }} />
        <span className={styles.buttonLabel}>{displayLanguage}</span>
      </button>
    </Dropdown>
  );
};

export default LanguageSwitcher;
