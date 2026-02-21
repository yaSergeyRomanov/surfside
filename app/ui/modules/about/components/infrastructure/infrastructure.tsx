"use client";
import type { Swiper as SwiperType } from "swiper";

import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useAppStore } from "@/store/useAppStore";
import { Container } from "@/ui/components/container";
import { Picture } from "@/ui/components/picture";
import { getStrapiUrl } from "@/utils/formatting-url";

import { InfrastructureProps } from "./types";

import styles from "./infrastructure.module.scss";

export const INFRASTRUCTURE_BACKGROUNDS = [
  {
    x1: "/images/about/infrastructure/default-bg.webp",
  },
  {
    x1: "/images/about/infrastructure/img-2.webp",
  },
  {
    x1: "/images/about/infrastructure/img-3.webp",
  },
  {
    x1: "/images/about/infrastructure/img-4.webp",
  },
  {
    x1: "/images/about/infrastructure/img-5.webp",
  },
  {
    x1: "/images/about/infrastructure/img-6.webp",
  },
];

export const Infrastructure = ({
  infrastructure,
}: {
  infrastructure: InfrastructureProps[];
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canActivateRef = useRef(true);
  const [pictureIndex, setPictureIndex] = useState(0);
  const [isSliderInViewPort, setIsSliderInViewport] = useState(false);

  const updateHeader = useAppStore((state) => state.updateHeader);

  useEffect(() => {
    updateHeader({
      theme: "default",
      isLiftUp: isSliderInViewPort ? true : false,
    });
  }, [updateHeader, isSliderInViewPort]);

  const wasScrolledFromTopToBottom = useCallback(() => {
    if (!wrapperRef.current) return false;

    const rect = wrapperRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    return rect.bottom <= viewportHeight;
  }, []);

  const wasScrolledFromBottomToTop = useCallback(() => {
    if (!wrapperRef.current) return false;

    const rect = wrapperRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    return rect.bottom >= viewportHeight;
  }, []);

  const startSliderAnimation = () => {
    if (!wrapperRef.current) return;

    document.body.style.overflow = "hidden";
    setIsSliderInViewport(true);
    canActivateRef.current = false;

    setTimeout(() => {
      if (wrapperRef.current) {
        wrapperRef.current.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      }
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (wasScrolledFromTopToBottom() && canActivateRef.current) {
        startSliderAnimation();
      }

      if (wasScrolledFromBottomToTop() && !canActivateRef.current) {
        startSliderAnimation();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;

    swiper.on("reachEnd", () => {
      setIsSliderInViewport(false);
      document.body.style.overflow = "initial";
    });

    swiper.on("reachBeginning", () => {
      setIsSliderInViewport(false);
      canActivateRef.current = true;
      document.body.style.overflow = "initial";
    });

    swiper.on("slideChange", () => {
      setPictureIndex(swiper.activeIndex);
    });
  };

  useEffect(() => {
    const currentSwiper = swiperRef.current;

    return () => {
      if (currentSwiper) {
        currentSwiper.destroy(true, true);
      }
      document.body.style.overflow = "initial";
    };
  }, []);

  return (
    <section className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.backgrounds}>
        {INFRASTRUCTURE_BACKGROUNDS.map((item, index) => (
          <Picture
            className={clsx(styles.backgroundPicture, {
              [styles.isShow]: index === pictureIndex,
            })}
            key={index}
            image={{
              x1: item.x1,
            }}
          />
        ))}
      </div>

      <Container isHigh>
        <Swiper
          modules={[Mousewheel, FreeMode]}
          speed={300}
          loop={false}
          className={clsx(styles.slider, {
            [styles.isActive]: isSliderInViewPort,
          })}
          wrapperClass={styles.swiperWrapper}
          freeMode={true}
          spaceBetween={0}
          slidesPerView={1}
          direction="vertical"
          mousewheel={true}
          onSwiper={handleSwiperInit}
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
                <p
                  className={styles.slideText}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};
