"use client";

import "swiper/css";

import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import PolygonIcon from "@/ui/svgr-icons/polygon.svg";

import { ProjectCardProps } from "./types";

import styles from "./project-card.module.scss";

export const ProjectCard = ({ onClick }: ProjectCardProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const slides = [
    {
      src: "/images/projects/image-2.webp",
      alt: "",
    },
    {
      src: "/images/projects/image-3.webp",
      alt: "",
    },
  ];

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
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <img className={styles.image} src={slide.src} alt={slide.alt} />
            </SwiperSlide>
          ))}

          <div className={styles.hiddenNav}>
            {slides.map((_, index) => (
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
            <h3 className={styles.title}>{"A-Апартаменты"}</h3>
          </AnimFadeUp>
          <div className={styles.properties}>
            <AnimFadeUp className={styles.property} delay={300}>
              <img src="/icons/projects/cube.svg" alt="cube icon" />
              <span>Площадь 48 м²</span>
            </AnimFadeUp>
            <AnimFadeUp className={styles.property} delay={600}>
              <img src="/icons/projects/bed.svg" alt="cube icon" />
              <span>1 спальня</span>
            </AnimFadeUp>
          </div>
          <AnimFadeUp className={styles.bottom} delay={900}>
            <div className={styles.button}>
              <span>Подробнее</span>
              <PolygonIcon />
            </div>
            <div className={styles.price}>
              от {Number("159000").toLocaleString()} $
            </div>
          </AnimFadeUp>
        </div>
      </button>
    </article>
  );
};
