"use client";

import { useEffect, useState } from "react";

import { AboutPageData } from "@/api/about/types";
import { useWindowSize } from "@/hooks/useWindowSize";

import { Benefits } from "./components/benefits";
import { Description } from "./components/description";
import { Hero } from "./components/hero";
import { Infrastructure } from "./components/infrastructure";
import { InfrastructureAdaptive } from "./components/infrastructure-adaptive";
import { Navigation } from "./components/navigation";

export const AboutModule = ({ pageData }: AboutPageData) => {
  const { width } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isAdaptive = isMounted && width <= 1279;

  return (
    <>
      <Hero
        title={pageData.pageTitle}
        supTitle={pageData.pageSuptitle}
        sendRequestButtonLabel={pageData.sendRequestButtonLabel}
      />

      <Description
        title={pageData.descriptionTitle}
        text={pageData.descriptionText}
        marque={pageData.marque}
      />

      <Benefits benefits={pageData.benefits} marquee={pageData.marque} />

      {!isAdaptive ? (
        <Infrastructure infrastructure={pageData.infrastructure} />
      ) : (
        <InfrastructureAdaptive infrastructure={pageData.infrastructure} />
      )}

      <Navigation navLinks={pageData.navLinks} />
    </>
  );
};
