import { NavLink, Seo } from "@/types/general";
import { MarqueeProps } from "@/ui/components/marquee/types";
import { BenefitProps } from "@/ui/modules/home/components/benefits/types";

export interface HomePageData {
  pageData: HomePageResponse;
}

export interface HomePageResponse {
  pageTitle: string;
  pageSubtitle: string;
  heroButtonRequest: string;
  heroButtonUnits: NavLink;
  aboutText: string;
  locationSectionTitle: string;
  locationSectionDescription: string;
  locationSectionButton: NavLink;
  aboutProjectTitle: string;
  aboutProjectBlock1: string;
  aboutProjectBlock2: string;
  aboutProjectBlock3: string;
  aboutProjectBlock4: string;
  aboutProjectBlock5: string;
  aboutProjectBlock6: string;
  aboutProjectButton: NavLink;
  marquee: MarqueeProps;
  benefits: BenefitProps[];
  seo: Seo;
}
