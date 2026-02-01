export const LayoutDefault = () => {};

import { ReactNode } from "react";

import { FooterShort } from "@/ui/components/footer-short";

import styles from "./layout-short-footer.module.scss";

export const LayoutShortFooter = ({ children }: { children: ReactNode }) => {
  return (
    <main className={styles.main}>
      {children}
      <FooterShort />
    </main>
  );
};
