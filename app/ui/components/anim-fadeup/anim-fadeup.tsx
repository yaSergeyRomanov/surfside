"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { AnimFadeUpProps } from "./types";

import styles from "./anim-fadeup.module.scss";

export const AnimFadeUp = ({ children, delay, className }: AnimFadeUpProps) => {
  const [isActive, setIsActive] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = wrapperRef.current;
    if (!currentElement) return;

    const observerAnim = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const dataDelay = currentElement.getAttribute("data-delay");
            const delayTime = dataDelay ? parseInt(dataDelay, 10) : 0;

            if (delayTime <= 0) {
              setIsActive(true);
            } else {
              setTimeout(() => {
                setIsActive(true);
              }, delayTime);
            }

            observerAnim.unobserve(currentElement);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    observerAnim.observe(currentElement);

    return () => {
      if (currentElement) {
        observerAnim.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      className={clsx(styles.wrapper, className, {
        [styles.isActive]: isActive,
      })}
      ref={wrapperRef}
      data-delay={delay}
    >
      {children}
    </div>
  );
};
