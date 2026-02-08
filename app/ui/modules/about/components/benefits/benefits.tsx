import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Container } from "@/ui/components/container";
import { Marquee } from "@/ui/components/marquee";
import { Picture } from "@/ui/components/picture";
import { Section } from "@/ui/components/section";
import { getStrapiUrl } from "@/utils/formatting-url";

import { AboutModuleBenefits } from "./types";

import styles from "./benefits.module.scss";

export const Benefits = ({ benefits, marquee }: AboutModuleBenefits) => {
  return (
    <>
      <Section className={styles.section} Tag="section">
        <Container>
          <div className={styles.grid}>
            {benefits.map((item, index) => (
              <div className={styles.col} key={index}>
                <div className={styles.text}>
                  <AnimFadeUp>
                    <h3
                      className={styles.title}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </AnimFadeUp>
                  <AnimFadeUp>
                    <span
                      className={styles.description}
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </AnimFadeUp>
                </div>
                <Picture
                  className={styles.image}
                  image={{
                    x1: getStrapiUrl(item.image.url),
                    mobile: getStrapiUrl(item.imageMobile?.url),
                    alt: item.image.alternativeText,
                  }}
                  width={item.image.width}
                  height={item.image.height}
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Marquee
        firstSlideTitle={marquee.firstSlideTitle}
        secondSlideTitle={marquee.secondSlideTitle}
        direction="toRight"
      />
    </>
  );
};
