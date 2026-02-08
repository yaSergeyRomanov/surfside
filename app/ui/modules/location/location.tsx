"use client";

import { useEffect } from "react";

import { LocationResponse } from "@/api/location/types";
import { useAppStore } from "@/store/useAppStore";
import { Title } from "@/ui/components/title";

import { Map } from "./components/map";

import styles from "./location.module.scss";

export const LocationModule = ({
  pageTitle,
  instructionLabel,
  locations,
}: LocationResponse) => {
  const updateHeader = useAppStore((state) => state.updateHeader);

  useEffect(() => {
    updateHeader({
      theme: "white",
      isColoredBlue: true,
    });
  }, [updateHeader]);

  return (
    <div className={styles.wrapper}>
      <Title className={styles.title} size="XXL" text={pageTitle} Tag={"h1"} />
      <div className={styles.instruction}>
        <span dangerouslySetInnerHTML={{ __html: instructionLabel }} />
        <img src="/images/map-navigation.svg" alt="Navigation map" />
      </div>
      <Map locations={locations} />
    </div>
  );
};
