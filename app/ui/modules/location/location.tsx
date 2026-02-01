"use client";

import { useEffect } from "react";

import { useHeader } from "@/context/headerContext";

import { Map } from "./components/map";

export const LocationModule = () => {
  const { updateHeader } = useHeader();

  useEffect(() => {
    updateHeader({
      theme: "white",
      isColoredWhite: false,
    });

    return () => {
      updateHeader({
        theme: "white",
        isColoredWhite: false,
      });
    };
  }, []);

  return <Map />;
};
