import { ImageEntry } from "@/types/general";
import { MarqueeProps } from "@/ui/components/marquee/types";

export interface AboutModuleBenefits {
  benefits: AboutGridBenefits[];
  marquee: MarqueeProps;
}

export interface AboutGridBenefits {
  title: string;
  text: string;
  image: ImageEntry;
  imageMobile: ImageEntry;
}
