"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/ui/components/container";
import { Picture } from "@/ui/components/picture";
import { getActiveLanguage } from "@/utils/getActiveLanguage";

import { FooterBgProps } from "./types";

import styles from "./footer-bg.module.scss";

const SOCIAL_LINKS = [
  {
    icon: "/icons/telegram-social.svg",
    title: "Telegram",
    url: "https://t.me/surfsidebali/",
  },
  {
    icon: "/icons/inst-social.svg",
    title: "Instagram",
    url: "https://www.instagram.com/surfside_bali/",
  },
  {
    icon: "/icons/whatsapp-social.svg",
    title: "WhatsApp",
    url: "https://wa.me/6282235372593/",
  },
  {
    icon: "/icons/youtube-social.svg",
    title: "YouTube",
    url: "https://www.youtube.com/@SurfsideProjectBali/",
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

export const FooterBg = ({ navLinks }: FooterBgProps) => {
  const pathName = usePathname();

  return (
    <div className={styles.wrapper}>
      <Picture
        className={styles.image}
        image={{ x1: "/images/footer-bg.webp" }}
        width={2880}
        height={1920}
      />

      <Container className={styles.bottom}>
        <div className={styles.row}>
          <nav className={styles.nav}>
            {navLinks.map((item, index) => (
              <a className={styles.navLink} href={item.url} key={index}>
                {item.title}
              </a>
            ))}
          </nav>

          <div className={styles.col}>
            <img
              className={styles.logo}
              src="/images/logo.svg"
              alt="Surfside logo"
              width={462}
              height={53}
            />
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
                  <img
                    src={item.icon}
                    alt={item.title}
                    width={30}
                    height={30}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};
