"use client";
import { ReactNode, useEffect } from "react";

import { useAppStore } from "@/store/useAppStore";
import { FooterDefault } from "@/ui/components/footer-default";
import { FooterBg } from "@/ui/components/footer-default/components/footer-bg";
import { useFooterDefaultData } from "@/ui/components/footer-default/useFooterDefaultData";
import { Header } from "@/ui/components/header";

import styles from "./layout-full-footer.module.scss";

export const LayoutFullFooter = ({ children }: { children: ReactNode }) => {
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
      <div className={styles.wrapper}>
        <Header />
        {children}
        <FooterDefault
          title={data?.title || ""}
          text={data?.subTitle || ""}
          formLabels={data?.form}
        />
      </div>
      <FooterBg navLinks={data?.navLinks || []} />
    </main>
  );
};
