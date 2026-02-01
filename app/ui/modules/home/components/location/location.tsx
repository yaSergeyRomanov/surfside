import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Button } from "@/ui/components/button";
import { Container } from "@/ui/components/container";
import { Section } from "@/ui/components/section";
import { Title } from "@/ui/components/title";
import PolygonIcon from "@/ui/svgr-icons/polygon.svg";

import { LocationProps } from "./types";

import styles from "./location.module.scss";

export const Location = ({ title, text, buttonLabel }: LocationProps) => {
  return (
    <Section className={styles.section} Tag={"section"}>
      <Container>
        <div className={styles.location}>
          <AnimFadeUp>
            <Title
              className={styles.title}
              Tag={"h2"}
              text={title}
              size="XXL"
            />
          </AnimFadeUp>

          <AnimFadeUp delay={300}>
            <div
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          </AnimFadeUp>

          <AnimFadeUp delay={600}>
            <Button className={styles.button} as="Link" href="/location/">
              <span>{buttonLabel}</span>
              <PolygonIcon />
            </Button>
          </AnimFadeUp>
        </div>
      </Container>
      <img
        className={styles.mapImage}
        src="/images/home/location-map.svg"
        alt=""
      />
    </Section>
  );
};
