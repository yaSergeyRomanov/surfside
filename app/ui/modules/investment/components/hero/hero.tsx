"use client";
import { useState } from "react";

import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Button } from "@/ui/components/button";
import { Container } from "@/ui/components/container";
import { Picture } from "@/ui/components/picture";
import { Popup } from "@/ui/components/popup";
import { PopupForm } from "@/ui/components/popup/components/popup-form";

import { HeroProps } from "./types";

import styles from "./hero.module.scss";

export const Hero = ({ title, buttonLabel }: HeroProps) => {
  const [isShowPopup, setIsShowPopup] = useState(false);

  return (
    <section className={styles.wrapper}>
      <Container className={styles.container} isHigh>
        <div className={styles.text}>
          <AnimFadeUp delay={300}>
            <h1
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </AnimFadeUp>
          <AnimFadeUp delay={300}>
            <div className={styles.buttons}>
              <Popup
                triggerButton={
                  <Button
                    className={styles.button}
                    theme="accent"
                    as="button"
                    onClick={() => setIsShowPopup(true)}
                  >
                    <span>{buttonLabel}</span>
                  </Button>
                }
                isShow={isShowPopup}
                onClose={() => setIsShowPopup(false)}
              >
                <PopupForm onClose={() => setIsShowPopup(false)} />
              </Popup>
            </div>
          </AnimFadeUp>
        </div>
      </Container>
      <Picture
        className={styles.bg}
        image={{
          x1: "/images/investment/hero.webp",
          tablet: "/images/investment/hero_tablet.webp",
          alt: "",
        }}
      />
    </section>
  );
};
