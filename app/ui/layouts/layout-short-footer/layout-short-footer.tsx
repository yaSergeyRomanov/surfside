"use client";
import { ReactNode, useEffect } from "react";

import { useAppStore } from "@/store/useAppStore";
import { useFooterDefaultData } from "@/ui/components/footer-default/useFooterDefaultData";
import { FooterShort } from "@/ui/components/footer-short";
import { Header } from "@/ui/components/header";

import styles from "./layout-short-footer.module.scss";

export const LayoutShortFooter = ({ children }: { children: ReactNode }) => {
  const locale = useAppStore((state) => state.locale);
  const updateFormLabels = useAppStore((state) => state.updateFormLabels);
  const { data } = useFooterDefaultData(locale);

  useEffect(() => {
    if (data?.form) {
      updateFormLabels(data.form);
    }
  }, [data?.form, updateFormLabels]);

  return (
    <main className={styles.main}>
      <Header />
      {children}
      <FooterShort navLinks={data?.navLinks || []} />
    </main>
  );
};
