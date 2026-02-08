"use client";

import "swiper/css";

import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import PolygonIcon from "@/ui/svgr-icons/polygon.svg";
import { getStrapiUrl } from "@/utils/formatting-url";

import { UnitsCardProps } from "./types";

import styles from "./units-card.module.scss";

export const UnitsCard = ({
  title,
  images,
  benefits,
  detailsButtonLabel,
  price,
  onClick,
}: UnitsCardProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleMouseEnter = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <article className={styles.card}>
      <button className={styles.wrapper} type="button" onClick={onClick}>
        <Swiper
          modules={[Pagination, EffectFade]}
          speed={600}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{
            clickable: true,
          }}
          className={styles.slider}
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <img
                className={styles.image}
                src={getStrapiUrl(image.url)}
                width={image.width}
                height={image.height}
                alt={image.alternativeText}
              />
            </SwiperSlide>
          ))}
          <div className={styles.hiddenNav}>
            {images.map((_, index) => (
              <div
                key={index}
                className={styles.hiddenNavItem}
                onMouseEnter={() => handleMouseEnter(index)}
              />
            ))}
          </div>
        </Swiper>

        <div className={styles.text}>
          <AnimFadeUp>
            <h3 className={styles.title}>{title}</h3>
          </AnimFadeUp>
          <div className={styles.properties}>
            {benefits.map((item, index) => (
              <AnimFadeUp
                className={styles.property}
                key={index}
                delay={index * 300}
              >
                <img src={`/icons/projects/${item.icon}.svg`} alt="cube icon" />
                <span>{item.text}</span>
              </AnimFadeUp>
            ))}
          </div>
          <AnimFadeUp className={styles.bottom} delay={900}>
            <div className={styles.button}>
              <span>{detailsButtonLabel}</span>
              <PolygonIcon />
            </div>
            <div className={styles.price}>{price}</div>
          </AnimFadeUp>
        </div>
      </button>
    </article>
  );
};
