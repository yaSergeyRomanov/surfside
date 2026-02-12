"use client";

import { HomePageData } from "@/api/home/types";
import { KaraokeText } from "@/ui/components/karaoke-text";
import { Marquee } from "@/ui/components/marquee";

import { About } from "./components/about";
import { Benefits } from "./components/benefits";
import { Hero } from "./components/hero";
import { Location } from "./components/location";

export const HomeModule = ({ pageData }: HomePageData) => {
  return (
    <>
      <Hero
        title={pageData.pageTitle}
        text={pageData.pageSubtitle}
        buttonFirstLabel={pageData.heroButtonRequest}
        buttonSecond={pageData.heroButtonUnits}
      />
      <Marquee
        firstSlideTitle={pageData.marquee.firstSlideTitle}
        secondSlideTitle={pageData.marquee.secondSlideTitle}
      />
      <KaraokeText text={pageData.aboutText} theme="blue" />
      <Location
        title={pageData.locationSectionTitle}
        text={pageData.locationSectionDescription}
        button={pageData.locationSectionButton}
      />
      <About
        sectionTitle={pageData.aboutProjectTitle}
        cardLabelFirst={pageData.aboutProjectBlock1}
        cardLabelSecond={pageData.aboutProjectBlock2}
        cardLabelThird={pageData.aboutProjectBlock3}
        cardLabelFourth={pageData.aboutProjectBlock4}
        cardLabelFifth={pageData.aboutProjectBlock5}
        cardLabelSixth={pageData.aboutProjectBlock6}
        projectButtonMore={pageData.aboutProjectButton}
      />
      <Benefits benefits={pageData.benefits} />
    </>
  );
};
