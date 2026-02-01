"use client";

import { useState } from "react";

import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Button } from "@/ui/components/button";
import { Container } from "@/ui/components/container";
import { HeroSlider } from "@/ui/components/hero-slider";
import { Popup } from "@/ui/components/popup";
import { PopupForm } from "@/ui/components/popup/components/popup-form";
import { Section } from "@/ui/components/section";
import { Title } from "@/ui/components/title";

import { HeroProps } from "./types";

import styles from "./hero.module.scss";

const HERO_IMAGES = [
  {
    x1: "/images/home/hero-1.webp",
  },
  {
    x1: "/images/home/hero-2.webp",
  },
  {
    x1: "/images/home/hero-3.webp",
  },
  {
    x1: "/images/home/hero-4.webp",
  },
  {
    x1: "/images/home/hero-5.webp",
  },
];

export const Hero = ({
  title,
  text,
  buttonFirstLabel,
  buttonSecondLabel,
}: HeroProps) => {
  const [isShowPopup, setIsShowPopup] = useState(false);

  return (
    <Section className={styles.section} Tag="section" isHasNotOffsets isHigh>
      <Container isHigh>
        <div className={styles.wrapper}>
          <AnimFadeUp>
            <Title
              className={styles.title}
              Tag={"h1"}
              size="XXL"
              text={title}
            />
          </AnimFadeUp>

          <AnimFadeUp delay={300}>
            <p
              className={styles.subtitle}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </AnimFadeUp>

          <AnimFadeUp delay={600}>
            <div className={styles.buttons}>
              <Popup
                triggerButton={
                  <Button
                    theme="accent-2"
                    as="button"
                    onClick={() => setIsShowPopup(true)}
                  >
                    <span>{buttonFirstLabel}</span>
                  </Button>
                }
                isShow={isShowPopup}
                onClose={() => setIsShowPopup(false)}
              >
                <PopupForm onClose={() => setIsShowPopup(false)} />
              </Popup>

              <Button theme="white-borders" as="Link" href="/projects/">
                <span>{buttonSecondLabel}</span>
              </Button>
            </div>
          </AnimFadeUp>
        </div>
      </Container>
      <HeroSlider images={HERO_IMAGES} />
    </Section>
  );
};
