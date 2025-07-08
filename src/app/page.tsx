"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  const { LL } = useLanguage();
  return (
    <main className={styles.main}>
      <div style={{ position: "absolute", top: 30, right: 50 }}>
        <LanguageSwitcher />
      </div>
      <div className={styles.description}>
        <p>
          {LL.page.getStarted()}&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {LL.page.by()}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            {LL.page.docs.title()} <span>-&gt;</span>
          </h2>
          <p>{LL.page.docs.desc()}</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            {LL.page.learn.title()} <span>-&gt;</span>
          </h2>
          <p>{LL.page.learn.desc()}</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            {LL.page.templates.title()} <span>-&gt;</span>
          </h2>
          <p>{LL.page.templates.desc()}</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            {LL.page.deploy.title()} <span>-&gt;</span>
          </h2>
          <p>{LL.page.deploy.desc()}</p>
        </a>
      </div>
    </main>
  );
}
