import clsx from "clsx";

import { PreloaderProps } from "./types";

import styles from "./preloader.module.scss";

export const Preloader = ({ isHidden, theme }: PreloaderProps) => {
  return (
    <div
      className={clsx(styles.preloader, {
        [styles[`preloader-${theme}`]]: theme,
        [styles.isHidden]: isHidden,
      })}
    >
      <div className={styles.indicator} />
    </div>
  );
};
