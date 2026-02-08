import React, { ForwardedRef, forwardRef } from "react";
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CloseIcon from "@/ui/svgr-icons/close.svg";
import { getStrapiUrl } from "@/utils/formatting-url";

import { LocationCardProps } from "./types";

import styles from "./location-card.module.scss";

export const LocationCard = forwardRef<HTMLDivElement, LocationCardProps>(
  (
    {
      title,
      images,
      route,
      routeIcon,
      description,
      onClickOutside,
    }: LocationCardProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div className={styles.wrapper} onClick={onClickOutside}>
        <div className={styles.closeEmulate}>
          <CloseIcon />
        </div>
        <div
          ref={ref}
          className={styles.card}
          onClick={(e) => e.stopPropagation()}
        >
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
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  className={styles.image}
                  src={getStrapiUrl(item.url)}
                  width={item.width}
                  height={item.height}
                  alt={item.alternativeText || title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.text}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.route}>
              <span>{route}</span>
              <img src={`/icons/route/${routeIcon}.svg`} alt={title} />
            </div>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>
    );
  },
);

LocationCard.displayName = "LocationCard";
