import React from "react";
import "./globals.css";
import I18nProvider from "@/i18n/I18nProvider";

export const metadata = {
  title: "Nextjs Template TS",
  description:
    "A Next.js 14 + TypeScript template with typesafe-i18n and axios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
