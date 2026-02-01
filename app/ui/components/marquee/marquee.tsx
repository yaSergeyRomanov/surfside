"use client";
import { MarqueeProps } from "./types";

import styles from "./marquee.module.scss";

const SLIDES_COPY_COUNT = 10;

export const Marquee = ({
  direction = "toLeft",
  firstSlideTitle,
  secondSlideTitle,
}: MarqueeProps) => {
  const animationName =
    direction === "toLeft" ? styles.marqueeLeft : styles.marqueeRight;

  return (
    <div className={styles.slider}>
      <div className={`${styles.marqueeTrack} ${animationName}`}>
        {[...Array(SLIDES_COPY_COUNT)].map((_, blockIndex) => (
          <div key={`block-${blockIndex}`} className={styles.slideGroup}>
            <div className={styles.slide}>
              <span className={styles.title}>{firstSlideTitle}</span>
            </div>

            <div className={styles.slide}>
              <span className={styles.title}>{secondSlideTitle}</span>
              <div className={styles.percent}>
                <img
                  src="/images/home/percent-marque.svg"
                  alt="Percent image"
                />
                <span className={styles.percentNum}>80%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
