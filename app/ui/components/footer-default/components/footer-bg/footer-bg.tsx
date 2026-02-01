"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/ui/components/container";
import { Picture } from "@/ui/components/picture";
import { getActiveLanguage } from "@/utils/getActiveLanguage";

import styles from "./footer-bg.module.scss";

const SOCIAL_LINKS = [
  {
    icon: "/icons/whatsapp-social.svg",
    title: "Telegram",
    url: "",
  },
  {
    icon: "/icons/inst-social.svg",
    title: "Instagram",
    url: "",
  },
  {
    icon: "/icons/whatsapp-social.svg",
    title: "WhatsApp",
    url: "",
  },
  {
    icon: "/icons/youtube-social.svg",
    title: "YouTubes",
    url: "",
  },
];

const LANG_LINKS = [
  {
    title: "RU",
    url: "/",
  },
  {
    title: "EN",
    url: "/en/",
  },
  {
    title: "FR",
    url: "/fr/",
  },
];

const NAV_LINKS = [
  {
    title: "Политика конфеденциальности",
    url: "",
  },
  {
    title: "Политика использования куки-файлов",
    url: "",
  },
];

export const FooterBg = () => {
  const pathName = usePathname();

  return (
    <div className={styles.wrapper}>
      <Picture
        className={styles.image}
        image={{ x1: "/images/footer-bg.webp" }}
      />

      <Container className={styles.bottom}>
        <div className={styles.row}>
          <nav className={styles.nav}>
            {NAV_LINKS.map((item, index) => (
              <Link className={styles.navLink} href={item.url} key={index}>
                {item.title}
              </Link>
            ))}
          </nav>

          <div className={styles.col}>
            <img
              className={styles.logo}
              src="/images/logo.svg"
              alt="Surfside logo"
            />
            <ul className={styles.langLinks}>
              {LANG_LINKS.map((item, index) => (
                <li className={styles.langItem} key={index}>
                  <Link
                    className={`${styles.lang} ${getActiveLanguage(item.url, pathName) ? styles.isActive : ""}`}
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ul className={styles.social}>
            {SOCIAL_LINKS.map((item, index) => (
              <li className={styles.socialItem} key={index}>
                <a
                  className={styles.socialLink}
                  href={item.url}
                  target="_blank"
                >
                  <span>{item.title}</span>
                  <img src={item.icon} alt={item.title} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};
