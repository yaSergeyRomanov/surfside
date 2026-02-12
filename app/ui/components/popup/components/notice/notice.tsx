"use client";
import clsx from "clsx";
import { createPortal } from "react-dom";

import { NoticeProps } from "./types";

import styles from "./notice.module.scss";

export const Notice = ({ title, theme, isShow }: NoticeProps) => {
  return (
    <>
      {isShow &&
        createPortal(
          <div
            className={clsx(styles.notice, {
              [styles[`theme-${theme}`]]: theme,
              [styles.isShow]: isShow,
            })}
          >
            <span
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>,
          document.body,
        )}
    </>
  );
};
