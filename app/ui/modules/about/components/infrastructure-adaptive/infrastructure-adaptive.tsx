"use client";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "@/ui/components/container";
import { Section } from "@/ui/components/section";
import { getStrapiUrl } from "@/utils/formatting-url";

import { INFRASTRUCTURE_BACKGROUNDS } from "../infrastructure/infrastructure";
import { InfrastructureProps } from "../infrastructure/types";

import styles from "./infrastructure-adaptive.module.scss";

export const InfrastructureAdaptive = ({
  infrastructure,
}: {
  infrastructure: InfrastructureProps[];
}) => {
  return (
    <Section className={styles.section} Tag={"section"}>
      <Swiper
        modules={[Navigation, FreeMode]}
        speed={300}
        loop={false}
        className={styles.slider}
        wrapperClass={styles.swiperWrapper}
        freeMode={true}
        spaceBetween={16}
        slidesPerView={"auto"}
        breakpoints={{
          768: {
            spaceBetween: 30,
          },
        }}
      >
        {infrastructure.map((item, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <div className={styles.slideCard}>
              <div className={styles.slideHeader}>
                <img
                  src={getStrapiUrl(item.icon.url)}
                  alt={item.icon.alternativeText || item.title}
                  width={item.icon.width}
                  height={item.icon.height}
                />
                {item.title && (
                  <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                )}
              </div>
              <img
                className={styles.image}
                src={INFRASTRUCTURE_BACKGROUNDS[index].x1}
                alt={item.title}
                width={2880}
                height={1600}
              />
              <p
                className={styles.slideText}
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
