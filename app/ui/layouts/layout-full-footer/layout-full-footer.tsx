export const LayoutDefault = () => {};

import { ReactNode } from "react";

import { FooterDefault } from "@/ui/components/footer-default";
import { FooterBg } from "@/ui/components/footer-default/components/footer-bg";

import styles from "./layout-full-footer.module.scss";

export const LayoutFullFooter = ({ children }: { children: ReactNode }) => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        {children}
        <FooterDefault
          title={"Готовы изучить<br> <span>детали проекта?</span>"}
          text={
            "Для получения финансовой модели,<br /> плана развития и&nbsp;презентации проекта<br /> оставьте ваши контакты."
          }
        />
      </div>
      <FooterBg />
    </main>
  );
};
