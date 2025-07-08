"use client";

import React from "react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useLanguage } from "@/context/LanguageContext";
import { locales } from "@/i18n/i18n-util";
import styles from "./index.module.css";

// 动态生成语言名称映射
const SUPPORTED_LANGUAGES: Record<string, string> = {
  en: "English",
  zh: "中文",
};

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useLanguage();

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

  return (
    <Dropdown
      menu={{ items: items as any, onClick: handleMenuClick }}
      placement="bottomRight"
      trigger={["click"]}
    >
      <button className={styles.languageButton}>
        <GlobalOutlined style={{ fontSize: 18 }} />
        <span className={styles.buttonLabel}>
          {SUPPORTED_LANGUAGES[locale] || locale}
        </span>
      </button>
    </Dropdown>
  );
};

export default LanguageSwitcher;
