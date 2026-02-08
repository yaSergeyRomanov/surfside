"use client";

import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { UnitsPageResponse } from "@/api/units/types";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useAppStore } from "@/store/useAppStore";
import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Popup } from "@/ui/components/popup";
import { PopupForm } from "@/ui/components/popup/components/popup-form";
import { Title } from "@/ui/components/title";

import { UnitsCard } from "./components/units-card";

import styles from "./units.module.scss";

export const UnitsModule = ({
  units,
  pageTitle,
  moreInfoButtonLabel,
}: UnitsPageResponse) => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const updateHeader = useAppStore((state) => state.updateHeader);
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isAdaptive = isMounted && width <= 1279;

  useEffect(() => {
    updateHeader({
      theme: "black",
      isColoredWhite: true,
    });
  }, [updateHeader]);

  return (
    <>
      <section className={styles.units}>
        <AnimFadeUp>
          <Title
            className={styles.title}
            size="XXL"
            text={pageTitle}
            Tag={"h1"}
          />
        </AnimFadeUp>

        {!isAdaptive ? (
          <Swiper
            modules={[Navigation]}
            navigation={true}
            speed={600}
            className={styles.slider}
            spaceBetween={0}
            slidesPerView={3}
          >
            {units.map((item) => (
              <SwiperSlide className={styles.slide} key={item.id}>
                <UnitsCard
                  onClick={() => setIsShowPopup(true)}
                  title={item.title}
                  images={item.images || []}
                  benefits={item.benefits}
                  detailsButtonLabel={moreInfoButtonLabel}
                  price={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={styles.grid}>
            {units.map((item) => {
              return (
                <AnimFadeUp className={styles.gridItem} key={item.id}>
                  <UnitsCard
                    onClick={() => setIsShowPopup(true)}
                    title={item.title}
                    images={item.images || []}
                    benefits={item.benefits}
                    detailsButtonLabel={moreInfoButtonLabel}
                    price={item.price}
                  />
                </AnimFadeUp>
              );
            })}
          </div>
        )}
      </section>

      <Popup isShow={isShowPopup} onClose={() => setIsShowPopup(false)}>
        <PopupForm onClose={() => setIsShowPopup(false)} />
      </Popup>
    </>
  );
};
