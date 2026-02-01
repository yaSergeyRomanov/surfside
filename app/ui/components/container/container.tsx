import clsx from "clsx";

import { ContainerProps } from "./types";

import styles from "./container.module.scss";

export const Container = ({
  children,
  className,
  isHigh = false,
}: ContainerProps) => {
  return (
    <div
      className={clsx(styles.container, className, { [styles.high]: isHigh })}
    >
      {children}
    </div>
  );
};
