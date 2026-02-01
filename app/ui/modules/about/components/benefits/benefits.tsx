import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Container } from "@/ui/components/container";
import { Marquee } from "@/ui/components/marquee";
import { Section } from "@/ui/components/section";

import styles from "./benefits.module.scss";

export const Benefits = () => {
  return (
    <>
      <Section className={styles.section} Tag="section">
        <Container>
          <div className={styles.grid}>
            <div className={styles.col}>
              <div className={styles.text}>
                <AnimFadeUp>
                  <h3 className={styles.title}>13% ROI</h3>
                </AnimFadeUp>
                <AnimFadeUp>
                  <span className={styles.description}>
                    — и&nbsp;жизнь в&nbsp;эпицентре
                    <br /> серф-культуры Бали.
                  </span>
                </AnimFadeUp>
              </div>
              <img
                className={styles.image}
                src="/images/about/benefit-1.webp"
                alt="Male surfer"
              />
            </div>
            <div className={styles.col}>
              <div className={styles.text}>
                <AnimFadeUp>
                  <h3 className={styles.title}>250 м</h3>
                </AnimFadeUp>
                <AnimFadeUp>
                  <span className={styles.description}>
                    по&nbsp;личной лестнице
                    <br />
                    до&nbsp;пляжа Сулубан
                  </span>
                </AnimFadeUp>
              </div>
              <img
                className={styles.image}
                src="/images/about/benefit-2.webp"
                alt="Beach"
              />
            </div>
            <div className={styles.col}>
              <div className={styles.text}>
                <AnimFadeUp>
                  <h3 className={styles.title}>30 юнитов</h3>
                </AnimFadeUp>
                <AnimFadeUp>
                  <span className={styles.description}>
                    8-и типов в&nbsp;продаже:
                    <br /> виллы, апартаменты,
                    <br /> двухуровневые
                    <br /> апартаменты
                  </span>
                </AnimFadeUp>
              </div>
              <img
                className={styles.image}
                src="/images/about/benefit-3.webp"
                alt="Surfside unit"
              />
            </div>
          </div>
        </Container>
      </Section>
      <Marquee
        firstSlideTitle={"ключи: II квартал 2026"}
        secondSlideTitle={"готовность комплекса"}
        direction="toRight"
      />
    </>
  );
};
