"use client";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Picture } from "../picture";

import { HeroSliderProps } from "./types";

import styles from "./hero-slider.module.scss";

export const HeroSlider = ({ images }: HeroSliderProps) => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      speed={1200}
      loop={true}
      autoplay={{
        delay: 1000,
      }}
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      className={styles.slider}
      spaceBetween={0}
      slidesPerView={1}
    >
      {images.map((item, index) => (
        <SwiperSlide key={index}>
          <Picture
            image={{
              x1: item.x1,
              mobile: item.mobile,
              alt: `Hero slide image ${index}`,
            }}
            width={722}
            height={750}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
