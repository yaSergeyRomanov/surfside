"use client";

import { useState } from "react";

import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Button } from "@/ui/components/button";
import { Container } from "@/ui/components/container";
import { Popup } from "@/ui/components/popup";
import { PopupForm } from "@/ui/components/popup/components/popup-form";

import styles from "./hero.module.scss";

export const Hero = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={styles.video}>
        <video autoPlay playsInline muted>
          <source src="/video/about.mp4" type="video/mp4" />
        </video>
      </div>

      <Container className={styles.container} isHigh>
        <div className={styles.content}>
          <AnimFadeUp className={styles.suptitle}>
            Единственное, что нужно искать здесь&nbsp;—
            <br /> свою идеальную волну
          </AnimFadeUp>
          <AnimFadeUp delay={300}>
            <img
              className={styles.logo}
              src="/images/about/logo.svg"
              alt="Surfside logo"
            />
          </AnimFadeUp>

          <AnimFadeUp delay={600}>
            <h1 className={styles.title}>
              Виллы и&nbsp;апартаменты на&nbsp;Бали, Улувату
            </h1>
          </AnimFadeUp>

          <Popup
            triggerButton={
              <AnimFadeUp delay={900}>
                <Button
                  className={styles.button}
                  theme="white"
                  as="button"
                  type="button"
                  onClick={() => setIsShowPopup(true)}
                >
                  <span>Оставить заявку</span>
                </Button>
              </AnimFadeUp>
            }
            isShow={isShowPopup}
            onClose={() => setIsShowPopup(false)}
          >
            <PopupForm onClose={() => setIsShowPopup(false)} />
          </Popup>
        </div>
      </Container>
    </section>
  );
};
