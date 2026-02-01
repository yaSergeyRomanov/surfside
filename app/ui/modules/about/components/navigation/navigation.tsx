import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Button } from "@/ui/components/button";
import { Container } from "@/ui/components/container";
import { Section } from "@/ui/components/section";
import PolygonIcon from "@/ui/svgr-icons/polygon.svg";

import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <Section className={styles.section} Tag="section">
      <Container>
        <ul className={styles.grid}>
          <li className={styles.item}>
            <AnimFadeUp>
              <Button
                className={styles.button}
                as="Link"
                theme="accent"
                href=""
              >
                <span>Юниты</span>
                <PolygonIcon />
              </Button>
            </AnimFadeUp>
          </li>
          <li className={styles.item}>
            <AnimFadeUp>
              <Button
                className={styles.button}
                as="Link"
                theme="accent"
                href=""
              >
                <span>Мастер-план</span>
                <PolygonIcon />
              </Button>
            </AnimFadeUp>
          </li>
          <li className={styles.item}>
            <AnimFadeUp>
              <Button
                className={styles.button}
                as="Link"
                theme="accent"
                href=""
              >
                <span>Контакты</span>
                <PolygonIcon />
              </Button>
            </AnimFadeUp>
          </li>
          <li className={styles.item}>
            <AnimFadeUp>
              <Button
                className={styles.button}
                as="Link"
                theme="accent"
                href=""
              >
                <span>Инвестиция</span>
                <PolygonIcon />
              </Button>
            </AnimFadeUp>
          </li>
        </ul>
      </Container>

      <img className={styles.wave} src="/images/about/wave.svg" alt="Wave" />
      <img
        className={styles.surfer}
        src="/images/about/surfer.svg"
        alt="Surfer"
      />
    </Section>
  );
};
