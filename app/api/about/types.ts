import { NavLink, Seo } from "@/types/general";
import { MarqueeProps } from "@/ui/components/marquee/types";
import { AboutGridBenefits } from "@/ui/modules/about/components/benefits/types";
import { InfrastructureProps } from "@/ui/modules/about/components/infrastructure/types";

export interface AboutPageData {
  pageData: AboutPageResponse;
}

export interface AboutPageResponse {
  pageTitle: string;
  pageSuptitle: string;
  sendRequestButtonLabel: string;
  descriptionTitle: string;
  descriptionText: string;
  marque: MarqueeProps;
  benefits: AboutGridBenefits[];
  infrastructure: InfrastructureProps[];
  navLinks: NavLink[];
  seo: Seo;
}
