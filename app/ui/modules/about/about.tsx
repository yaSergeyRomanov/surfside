"use client";

import { useEffect } from "react";

import { useHeader } from "@/context/headerContext";

import { Benefits } from "./components/benefits";
import { Description } from "./components/description";
import { Hero } from "./components/hero";
import { Infrastructure } from "./components/infrastructure";
import { Navigation } from "./components/navigation";

export const AboutModule = () => {
  const { updateHeader } = useHeader();

  useEffect(() => {
    updateHeader({
      theme: "default",
      isColoredWhite: false,
    });

    return () => {
      updateHeader({
        theme: "default",
        isColoredWhite: false,
      });
    };
  }, []);

  return (
    <>
      <Hero />
      <Description />
      <Benefits />
      <Infrastructure />
      <Navigation />
    </>
  );
};
