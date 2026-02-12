"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Container } from "@/ui/components/container";
import { Title } from "@/ui/components/title";

import { ChartSectionProps } from "./types";

import styles from "./chart.module.scss";

export const Chart = ({ title, subtitle, chart }: ChartSectionProps) => {
  const [isActive, setIsActive] = useState(false);
  const chartItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = chartItemRef.current;
    if (!currentElement) return;

    const observerAnim = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
            observerAnim.unobserve(currentElement);
          }
        });
      },
      {
        threshold: 0.2,
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
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <AnimFadeUp>
            <Title className={styles.title} Tag="h2" size="XL" text={title} />
          </AnimFadeUp>
          <AnimFadeUp>
            <span
              className={styles.subtitle}
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          </AnimFadeUp>
        </div>
      </Container>
      <div className={styles.chart}>
        {chart.map((item, index) => (
          <div
            className={clsx(styles.chartItem, {
              [styles.isActive]: isActive,
            })}
            key={index}
            ref={chartItemRef}
          >
            <span className={styles.chartTime}>{item.time}</span>
            <div className={styles.chartLine}>
              <span className={styles.chartTitle}>{item.title}</span>
              <span className={styles.chartPercent}>{item.percent}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
