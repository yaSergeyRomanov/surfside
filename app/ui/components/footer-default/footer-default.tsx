import { AnimFadeUp } from "../anim-fadeup";
import { Container } from "../container";
import { Title } from "../title";

import { FooterForm } from "./components/footer-form";
import { Social } from "./components/social";
import { FooterDefaultProps } from "./types";

import styles from "./footer-default.module.scss";

export const FooterDefault = ({ title, text }: FooterDefaultProps) => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.row}>
          <div className={styles.col}>
            <AnimFadeUp>
              <Title
                className={styles.title}
                Tag={"h1"}
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
            <Social />
          </div>
          <div className={styles.col}>
            <FooterForm />
          </div>
        </div>
      </Container>
    </footer>
  );
};
