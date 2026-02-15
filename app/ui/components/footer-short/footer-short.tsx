import { usePathname } from "next/navigation";

import { useAppStore } from "@/store/useAppStore";
import { getActiveLanguage } from "@/utils/getActiveLanguage";

import { Container } from "../container";

import { FooterShortProps } from "./types";

import styles from "./footer-short.module.scss";

const LANG_LINKS = [
  {
    title: "EN",
    url: "/",
  },
  {
    title: "RU",
    url: "/ru/",
  },
  {
    title: "FR",
    url: "/fr-FR/",
  },
];

export const FooterShort = ({ navLinks }: FooterShortProps) => {
  const locale = useAppStore((state) => state.locale);
  const pathName = usePathname();

  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <a className={styles.logo} href={locale ? `/${locale}/` : "/"}>
          <img
            src="/images/logo-black.svg"
            alt="Surfside logo"
            width={200}
            height={23}
          />
        </a>

        <nav className={styles.nav}>
          {navLinks.map((item, index) => (
            <a className={styles.navLink} href={item.url} key={index}>
              {item.title}
            </a>
          ))}
        </nav>

        <ul className={styles.langLinks}>
          {LANG_LINKS.map((item, index) => (
            <li className={styles.langItem} key={index}>
              <a
                className={`${styles.lang} ${getActiveLanguage(item.url, pathName) ? styles.isActive : ""}`}
                href={item.url}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
};
