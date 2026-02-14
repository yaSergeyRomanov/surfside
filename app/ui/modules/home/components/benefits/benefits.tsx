import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Picture } from "@/ui/components/picture";
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
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.col}>
          <Picture
            className={styles.image}
            image={{
              x1: "/images/home/benefits-image.webp",
              mobile: "/images/home/benefits-image_mobile.webp",
              alt: "Surfside brand",
            }}
            width={1440}
            height={1504}
          />
        </div>
      </div>
    </Section>
  );
};
