import { useEffect, useState } from "react";

import { useWindowSize } from "@/hooks/useWindowSize";

import { AnimFadeUp } from "../anim-fadeup";
import { Container } from "../container";
import { Title } from "../title";

import { FooterForm } from "./components/footer-form";
import { Social } from "./components/social";
import { FooterDefaultProps } from "./types";

import styles from "./footer-default.module.scss";

export const FooterDefault = ({
  title,
  text,
  formLabels,
}: FooterDefaultProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isAdaptive = isMounted && width <= 1279;

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.row}>
          <div className={styles.col}>
            <AnimFadeUp>
              <Title
                className={styles.title}
                Tag={"h3"}
                size="XXL"
                text={title}
              />
            </AnimFadeUp>
            <AnimFadeUp>
              <p
                className={styles.subtitle}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </AnimFadeUp>
            {!isAdaptive && <Social />}
          </div>
          <div className={styles.col}>
            <FooterForm formLabels={formLabels} />
          </div>
          {isAdaptive && isMounted && <Social />}
        </div>
      </Container>
    </footer>
  );
};
