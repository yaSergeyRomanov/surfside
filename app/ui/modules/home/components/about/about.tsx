import clsx from "clsx";

import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Container } from "@/ui/components/container";
import { Picture } from "@/ui/components/picture";
import { Section } from "@/ui/components/section";
import { Title } from "@/ui/components/title";

import { AboutProps } from "./types";

import styles from "./about.module.scss";

export const About = ({
  sectionTitle,
  cardLabelFirst,
  cardLabelSecond,
  cardLabelThird,
  cardLabelFourth,
  cardLabelFifth,
  cardLabelSixth,
  projectButtonMore,
}: AboutProps) => {
  return (
    <Section className={styles.section} Tag="section">
      <Container>
        <AnimFadeUp>
          <Title
            className={styles.title}
            Tag="h2"
            size="XXL"
            text={sectionTitle}
          />
        </AnimFadeUp>
      </Container>

      <ul className={styles.cardList}>
        <li className={styles.card}>
          <div className={clsx(styles.cardInner, styles.toBottom)}>
            <AnimFadeUp>
              <span className={styles.cardTitle}>80</span>
            </AnimFadeUp>
            <div className={styles.line} />
            <AnimFadeUp>
              <p
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: cardLabelFirst }}
              />
            </AnimFadeUp>
          </div>
        </li>

        <li className={clsx(styles.card, styles.hasImage)}>
          <Picture
            className={styles.image}
            image={{
              x1: "/images/home/about-1.webp",
              mobile: "/images/home/about-1_mobile.webp",
              alt: "Surfside villas",
            }}
            width={360}
            height={414}
          />
        </li>

        <li className={styles.card}>
          <div className={clsx(styles.cardInner, styles.toBottom)}>
            <AnimFadeUp>
              <span className={styles.cardTitle}>1</span>
            </AnimFadeUp>
            <div className={styles.line} />
            <AnimFadeUp>
              <p
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: cardLabelSecond }}
              />
            </AnimFadeUp>
          </div>
        </li>
        <li className={styles.card}>
          <div className={styles.cardInner}>
            <AnimFadeUp>
              <span className={styles.cardTitle}>30</span>
            </AnimFadeUp>
            <div className={styles.line} />
            <AnimFadeUp>
              <p
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: cardLabelThird }}
              />
            </AnimFadeUp>
          </div>
        </li>
        <li className={styles.card}>
          <div className={styles.cardInner}>
            <AnimFadeUp>
              <span className={styles.cardTitle}>S</span>
            </AnimFadeUp>
            <div className={styles.line} />
            <AnimFadeUp>
              <p
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: cardLabelFourth }}
              />
            </AnimFadeUp>
          </div>
        </li>
        <li className={styles.card}>
          <div className={clsx(styles.cardInner, styles.toBottom)}>
            <AnimFadeUp>
              <p
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: cardLabelFifth }}
              />
            </AnimFadeUp>
          </div>
        </li>
        <li className={styles.card}>
          <div className={styles.cardInner}>
            <AnimFadeUp>
              <p
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: cardLabelSixth }}
              />
            </AnimFadeUp>
          </div>
        </li>
        <li className={clsx(styles.card, styles.hasImage)}>
          <Picture
            className={styles.image}
            image={{
              x1: "/images/home/about-2.webp",
              mobile: "/images/home/about-2_mobile.webp",
              alt: "Surfside bedroom",
            }}
            width={360}
            height={414}
          />
        </li>
      </ul>
      <Container>
        <AnimFadeUp>
          <a
            className={styles.projectsLink}
            href={projectButtonMore.url}
            target="_blank"
          >
            <span>{projectButtonMore.title}</span>
          </a>
        </AnimFadeUp>
      </Container>
    </Section>
  );
};
