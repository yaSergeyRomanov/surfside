import React, { ForwardedRef, forwardRef } from "react";
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { LocationCardProps } from "./types";

import styles from "./location-card.module.scss";

export const LocationCard = forwardRef<HTMLDivElement, LocationCardProps>(
  (
    { title, imageUrl, route, routeIcon, description }: LocationCardProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div ref={ref} className={styles.card}>
        <Swiper
          modules={[Pagination, EffectFade]}
          speed={600}
          loop={true}
          grabCursor={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{
            clickable: true,
          }}
          className={styles.slider}
          spaceBetween={0}
          slidesPerView={1}
        >
          {imageUrl.map((item, index) => (
            <SwiperSlide key={index}>
              <img className={styles.image} src={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.route}>
            <span>{route}</span>
            <img src={`/icons/route/${routeIcon}.svg`} alt={title} />
          </div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    );
  },
);

LocationCard.displayName = "LocationCard";
