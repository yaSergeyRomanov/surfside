import clsx from "clsx";

import { TitleProps } from "./types";

import styles from "./title.module.scss";

export const Title = ({
  Tag = "h2",
  className,
  text,
  size = "XXL",
}: TitleProps) => {
  return (
    <Tag
      className={clsx(styles.title, className, {
        [styles[`title-size-${size}`]]: size,
      })}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};
