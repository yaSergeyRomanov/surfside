import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Section } from "@/ui/components/section";

import { BenefitsProps } from "./types";

import styles from "./benefits.module.scss";

export const Benefits = ({ benefits }: BenefitsProps) => {
  return (
    <Section className={styles.section} Tag="section">
      <div className={styles.row}>
        <ul className={styles.cards}>
          {benefits.map((item, index) => (
            <li className={styles.item} key={`benefit-${index}`}>
              <button className={styles.card} type="button">
                <div className={styles.cardInner}>
                  <div className={styles.titleWrapper}>
                    <AnimFadeUp>
                      <span
                        className={styles.title}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                    </AnimFadeUp>
                  </div>
                </div>
                <p
                  className={styles.text}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.col}>
          <img
            className={styles.image}
            src="/images/home/benefits-image.webp"
            alt="Surfside brand"
          />
        </div>
      </div>
    </Section>
  );
};
