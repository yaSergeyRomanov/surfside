import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";

import { useClickOutside } from "@/hooks/useClickOutside";
import { useAppStore } from "@/store/useAppStore";
import CloseIcon from "@/ui/svgr-icons/close.svg";
import InstagramIcon from "@/ui/svgr-icons/instagram-colored.svg";
import TelegramIcon from "@/ui/svgr-icons/telegram-colored.svg";
import WhatsAppIcon from "@/ui/svgr-icons/whatsapp-colored.svg";
import YoutubeIcon from "@/ui/svgr-icons/youtube-colored.svg";
import { getActiveLanguage } from "@/utils/getActiveLanguage";

import { BurgerMenuProps } from "./types";

import styles from "./burger-menu.module.scss";

const SOCIAL_LINKS = [
  {
    title: "Telegram",
    url: "https://t.me/surfsidebali/",
    icon: <TelegramIcon />,
  },
  {
    title: "WhatsApp",
    url: "https://wa.me/6282235372593/",
    icon: <WhatsAppIcon />,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/surfside_bali/",
    icon: <InstagramIcon />,
  },
  {
    title: "Youtube",
    url: "https://www.youtube.com/@SurfsideProjectBali/",
    icon: <YoutubeIcon />,
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
    url: "/fr-FR/",
  },
];

export const BurgerMenu = ({ burgerTheme, navLinks }: BurgerMenuProps) => {
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const navigationRef = useRef<HTMLDivElement>(null);
  const locale = useAppStore((state) => state.locale);

  useClickOutside(navigationRef, () => setShowMenu(false));

  return (
    <>
      <button
        className={clsx(styles.burger, {
          [styles[`burger-${burgerTheme}`]]: burgerTheme,
        })}
        type="button"
        onClick={() => setShowMenu(true)}
      >
        <span>Open navigation</span>
      </button>

      {showMenu &&
        createPortal(
          <div className={styles.wrapper}>
            <div className={styles.navigation} ref={navigationRef}>
              <div className={styles.header}>
                <a className={styles.logo} href={locale ? `/${locale}/` : "/"}>
                  <img src="/images/logo-black.svg" alt="Surfside logo" />
                </a>
                <button
                  className={styles.close}
                  type="button"
                  onClick={() => setShowMenu(false)}
                >
                  <span>Close</span>
                  <CloseIcon />
                </button>
              </div>

              <div className={styles.inner}>
                <ul className={styles.navList}>
                  {navLinks.map((item, index) => (
                    <a
                      className={clsx(styles.navLink)}
                      href={item.url}
                      key={index}
                    >
                      <span>{item.title}</span>
                    </a>
                  ))}
                  <li className={styles.navItem}></li>
                </ul>

                <div className={styles.contactLinks}>
                  <a className={styles.contact} href="tel:+6282235372593">
                    +62 822-3537-2593
                  </a>
                  <a
                    className={styles.contact}
                    href="mailto:info@surfsidebali.com"
                  >
                    info@surfsidebali.com
                  </a>

                  <ul className={styles.social}>
                    {SOCIAL_LINKS.map((item, index) => {
                      return (
                        <li className={styles.socialItem} key={index}>
                          <a
                            className={styles.socialLink}
                            href={item.url}
                            target="_blank"
                          >
                            <span>{item.title}</span>
                            {item.icon}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <ul className={styles.langs}>
                  {LANG_LINKS.map((item, index) => {
                    return (
                      <li className={styles.langItem} key={index}>
                        <a
                          className={`${styles.langLink} ${getActiveLanguage(item.url, pathName) ? styles.isActive : ""}`}
                          href={item.url}
                        >
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};
