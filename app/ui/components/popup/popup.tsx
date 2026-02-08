"use client";

import { createPortal } from "react-dom";

import { PopupProps } from "./types";

import styles from "./popup.module.scss";

export const Popup = ({
  isShow,
  triggerButton,
  children,
  onClose,
}: PopupProps) => {
  return (
    <>
      {triggerButton}
      {isShow &&
        createPortal(
          <div className={styles.popup} onClick={onClose}>
            <div
              className={styles.content}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};
