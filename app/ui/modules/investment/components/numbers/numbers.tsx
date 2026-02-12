import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Container } from "@/ui/components/container";

import { NumbersProps } from "./types";

import styles from "./numbers.module.scss";

export const Numbers = ({ numbers }: NumbersProps) => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.numbers}>
          {numbers.map((item, index) => (
            <div className={styles.item} key={index}>
              <AnimFadeUp>
                <span
                  className={styles.number}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              </AnimFadeUp>
              <AnimFadeUp delay={300}>
                <span
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </AnimFadeUp>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
