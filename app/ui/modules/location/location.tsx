"use client";

import { useEffect, useState } from "react";

import { useAppStore } from "@/store/useAppStore";
import { Preloader } from "@/ui/components/preloader";
import { Title } from "@/ui/components/title";

import { Map } from "./components/map";
import { LocationModuleProps } from "./types";

import styles from "./location.module.scss";

export const LocationModule = ({
  pageTitle,
  instructionLabel,
  locations,
}: LocationModuleProps) => {
  const updateHeader = useAppStore((state) => state.updateHeader);
  const [yaMapIsLoading, setYaMapIsLoading] = useState(false);

  const handleMapLoading = () => {
    setYaMapIsLoading(true);
  };

  useEffect(() => {
    updateHeader({
      theme: "white",
      isColoredBlue: true,
    });
  }, [updateHeader]);

  return (
    <>
      <Preloader isHidden={yaMapIsLoading} theme={"blue"} />
      <div className={styles.wrapper}>
        <Title
          className={styles.title}
          size="XXL"
          text={pageTitle}
          Tag={"h1"}
        />
        <div className={styles.instruction}>
          <span dangerouslySetInnerHTML={{ __html: instructionLabel }} />
          <img src="/images/map-navigation.svg" alt="Navigation map" />
        </div>
        <Map locations={locations} onLoading={handleMapLoading} />
      </div>
    </>
  );
};
