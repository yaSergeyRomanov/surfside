"use client";

import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useHeader } from "@/context/headerContext";
import { Popup } from "@/ui/components/popup";
import { PopupForm } from "@/ui/components/popup/components/popup-form";

import { ProjectCard } from "./components/project-card";

import styles from "./projects.module.scss";

export const ProjectsModule = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);

  const { updateHeader } = useHeader();

  useEffect(() => {
    updateHeader({
      theme: "black",
      isColoredWhite: true,
    });

    return () => {
      updateHeader({
        theme: "black",
        isColoredWhite: true,
      });
    };
  }, []);

  return (
    <>
      <section className={styles.projects}>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          speed={600}
          className={styles.slider}
          spaceBetween={0}
          slidesPerView={3}
        >
          <SwiperSlide className={styles.slide}>
            <ProjectCard onClick={() => setIsShowPopup(true)} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <ProjectCard onClick={() => setIsShowPopup(true)} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <ProjectCard onClick={() => setIsShowPopup(true)} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <ProjectCard onClick={() => setIsShowPopup(true)} />
          </SwiperSlide>
        </Swiper>
      </section>

      <Popup isShow={isShowPopup} onClose={() => setIsShowPopup(false)}>
        <PopupForm onClose={() => setIsShowPopup(false)} />
      </Popup>
    </>
  );
};
