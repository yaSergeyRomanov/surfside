import clsx from "clsx";

import { AnimFadeUp } from "@/ui/components/anim-fadeup";

import styles from "./social.module.scss";

export const Social = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a
          className={clsx(styles.social, styles.accentBg)}
          href="https://wa.me/6282235372593/"
          target="_blank"
        >
          <AnimFadeUp>
            <span className={styles.title}>WhatsApp</span>
          </AnimFadeUp>
          <AnimFadeUp>
            <span className={styles.contact}>+62 822-3537-2593</span>
          </AnimFadeUp>
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={clsx(styles.social)}
          href="https://t.me/surfsidebali/"
          target="_blank"
        >
          <AnimFadeUp>
            <span className={styles.title}>Telegram</span>
          </AnimFadeUp>
          <AnimFadeUp>
            <span className={styles.contact}>@surfsidebali</span>
          </AnimFadeUp>
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={clsx(styles.social)}
          href="https://www.youtube.com/@SurfsideProjectBali/"
          target="_blank"
        >
          <AnimFadeUp>
            <span className={styles.title}>Youtube</span>
          </AnimFadeUp>
          <AnimFadeUp>
            <span className={styles.contact}>@SurfsideBali</span>
          </AnimFadeUp>
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={clsx(styles.social, styles.accentBg)}
          href="https://www.instagram.com/surfside_bali/"
          target="_blank"
        >
          <AnimFadeUp>
            <span className={styles.title}>Instagram</span>
          </AnimFadeUp>
          <AnimFadeUp>
            <span className={styles.contact}>@surfside_bali</span>
          </AnimFadeUp>
        </a>
      </li>
    </ul>
  );
};
