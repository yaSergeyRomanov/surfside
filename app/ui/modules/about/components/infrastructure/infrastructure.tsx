"use client";
import type { Swiper as SwiperType } from "swiper";

import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "@/ui/components/container";
import { Picture } from "@/ui/components/picture";
import { useHeader } from "@/context/headerContext";

import styles from "./infrastructure.module.scss";

const BACKGROUNDS = [
  {
    x1: "/images/about/infrastructure/default-bg.webp",
  },
  {
    x1: "/images/about/infrastructure/img-1.webp",
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

export const Infrastructure = () => {
  const { updateHeader } = useHeader();
  const swiperRef = useRef<SwiperType | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canActivateRef = useRef(true);
  const [pictureIndex, setPictureIndex] = useState(0);
  const [isSliderInViewPort, setIsSliderInViewport] = useState(false);

  useEffect(() => {
    updateHeader({
      theme: "default",
      isLiftUp: isSliderInViewPort ? true : false,
    });

    return () => {
      updateHeader({
        theme: "default",
        isLiftUp: isSliderInViewPort ? true : false,
      });
    };
  }, [isSliderInViewPort]);

  const wasScrolledFromTopToBottom = useCallback(() => {
    if (!wrapperRef.current) return false;

    const rect = wrapperRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    return rect.bottom <= viewportHeight && rect.bottom > 0;
  }, []);

  const wasScrolledFromBottomToTop = useCallback(() => {
    if (!wrapperRef.current) return false;

    const rect = wrapperRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    return rect.bottom >= viewportHeight && rect.bottom > 0;
  }, []);

  const startSliderAnimation = () => {
    if (!wrapperRef.current) return;

    window.scrollTo({
      top: wrapperRef.current.offsetTop,
      behavior: "auto",
    });
    document.body.style.overflow = "hidden";
    setIsSliderInViewport(true);
    canActivateRef.current = false;
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
        {BACKGROUNDS.map((item, index) => (
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
          <SwiperSlide className={styles.slide}>
            <div className={styles.slideCard}>
              <div className={styles.slideHeader}>
                <img
                  src={"/images/about/infrastructure/default-icon.svg"}
                  alt="Slide icon 1"
                />
              </div>
              <p className={styles.slideText}>
                Чтобы жизнь у&nbsp;океана была беззаботной, всё должно быть под
                рукой.Мы создали инфраструктуру, которая охватывает все аспекты
                жизни&nbsp;&mdash; от&nbsp;хранения серфборда до&nbsp;рабочей
                встречи и&nbsp;отдыха.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.slideCard}>
              <div className={styles.slideHeader}>
                <img
                  src={"/images/about/infrastructure/icon-1.svg"}
                  alt="Slide icon 2"
                />
                <h3>Лобби</h3>
              </div>
              <p className={styles.slideText}>
                Круглосуточное стильное пространство, где вас встретит команда
                консьержей
                <br />
                и&nbsp;атмосфера гостеприимства
                <br />
                в&nbsp;любое время суток.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.slideCard}>
              <div className={styles.slideHeader}>
                <img
                  src={"/images/about/infrastructure/icon-2.svg"}
                  alt="Slide icon 2"
                />
                <h3>Йога-центр</h3>
              </div>
              <p className={styles.slideText}>
                Зал для практик с&nbsp;видами на&nbsp;океан,
                <br /> где разминка перед волной
                <br /> или вечерняя медитация становятся
                <br /> ежедневным ритуалом.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.slideCard}>
              <div className={styles.slideHeader}>
                <img
                  src={"/images/about/infrastructure/icon-3.svg"}
                  alt="Slide icon 3"
                />
                <h3>
                  СПА, холодная
                  <br />
                  купель, сауна
                </h3>
              </div>
              <p className={styles.slideText}>
                Зал для практик с&nbsp;видами на&nbsp;океан,
                <br /> где разминка перед волной
                <br /> или вечерняя медитация становятся
                <br /> ежедневным ритуалом.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.slideCard}>
              <div className={styles.slideHeader}>
                <img
                  src={"/images/about/infrastructure/icon-4.svg"}
                  alt="Slide icon 4"
                />
                <h3>
                  Бассейн и&nbsp;зона
                  <br /> отдыха
                </h3>
              </div>
              <p className={styles.slideText}>
                Общий бассейн и&nbsp;терраса&nbsp;&mdash; место
                <br />
                ваших встреч и&nbsp;живого общения
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.slideCard}>
              <div className={styles.slideHeader}>
                <img
                  src={"/images/about/infrastructure/icon-5.svg"}
                  alt="Slide icon 5"
                />
                <h3>
                  Багги для гостей
                  <br /> и&nbsp;владельцев
                </h3>
              </div>
              <p className={styles.slideText}>
                Удобные багги в&nbsp;вашем распоряжении
                <br /> для свободного перемещения
                <br /> по&nbsp;территории и&nbsp;к&nbsp;пляжу
                <br /> в&nbsp;истинно балийском стиле.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.slideCard}>
              <div className={styles.slideHeader}>
                <img
                  src={"/images/about/infrastructure/icon-6.svg"}
                  alt="Slide icon 6"
                />
                <h3>
                  Подземная
                  <br /> парковка
                </h3>
              </div>
              <p className={styles.slideText}>
                Защищённая и&nbsp;просторная парковка,
                <br /> где ваш транспорт будет в&nbsp;полной безопасности.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};
