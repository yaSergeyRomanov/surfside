"use client";

import { useState } from "react";

import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Button } from "@/ui/components/button";
import { Container } from "@/ui/components/container";
import { Picture } from "@/ui/components/picture";
import { Popup } from "@/ui/components/popup";
import { PopupForm } from "@/ui/components/popup/components/popup-form";
import { Title } from "@/ui/components/title";

import { BannerProps } from "./types";

import styles from "./banner.module.scss";

export const Banner = ({ title, text, buttonLabel }: BannerProps) => {
  const [isShowPopup, setIsShowPopup] = useState(false);

  return (
    <section className={styles.wrapper}>
      <Container className={styles.container} isHigh>
        <AnimFadeUp>
          <Title className={styles.title} Tag="h2" text={title} />
        </AnimFadeUp>

        <div className={styles.text}>
          <AnimFadeUp>
            <div
              className={styles.subtitle}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </AnimFadeUp>

          <AnimFadeUp delay={600}>
            <Popup
              triggerButton={
                <Button as="button" onClick={() => setIsShowPopup(true)}>
                  <span>{buttonLabel}</span>
                </Button>
              }
              isShow={isShowPopup}
              onClose={() => setIsShowPopup(false)}
            >
              <PopupForm onClose={() => setIsShowPopup(false)} />
            </Popup>
          </AnimFadeUp>
        </div>
      </Container>

      <Picture
        className={styles.bg}
        image={{
          x1: "/images/investment/banner-bg.webp",
          tablet: "/images/investment/banner-bg-tablet.webp",
          mobile: "/images/investment/banner-bg_mobile.webp",
          alt: "",
        }}
      />
    </section>
  );
};
