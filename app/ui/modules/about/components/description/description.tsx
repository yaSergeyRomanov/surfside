import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Container } from "@/ui/components/container";
import { Marquee } from "@/ui/components/marquee";
import { Picture } from "@/ui/components/picture";
import { Section } from "@/ui/components/section";

import { DescriptionProps } from "./types";

import styles from "./description.module.scss";

export const Description = ({ title, text, marque }: DescriptionProps) => {
  return (
    <Section Tag="section" className={styles.section}>
      <div className={styles.inner}>
        <Container>
          <AnimFadeUp>
            <h2
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </AnimFadeUp>
          <AnimFadeUp>
            <div
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </AnimFadeUp>
        </Container>
      </div>
      <Picture
        className={styles.image}
        image={{
          x1: "/images/about/girl.webp",
          mobile: "/images/about/girl_mobile.webp",
        }}
      />
      <Marquee
        firstSlideTitle={marque.firstSlideTitle}
        secondSlideTitle={marque.secondSlideTitle}
        direction="toLeft"
      />
    </Section>
  );
};
