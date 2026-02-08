import clsx from "clsx";

import { PreloaderProps } from "./types";

import styles from "./preloader.module.scss";

export const Preloader = ({ isActive, theme }: PreloaderProps) => {
  return (
    <div
      className={clsx(styles.preloader, {
        [styles[`preloader-${theme}`]]: theme,
        [styles.isActive]: isActive,
      })}
    >
      <div className={styles.indicator} />
    </div>
  );
};
