import type { SectionProps } from "./types";

import clsx from "clsx";

import styles from "./section.module.scss";

export const Section = ({
  children,
  id,
  className,
  Tag = "section",
  isHasNotOffsets,
  isHigh,
}: SectionProps) => {
  return (
    <Tag
      id={id}
      className={clsx(
        styles.section,
        className,
        { [styles.isHigh]: isHigh },
        { [styles.isHasNotOffsets]: isHasNotOffsets }
      )}
    >
      {children}
    </Tag>
  );
};
