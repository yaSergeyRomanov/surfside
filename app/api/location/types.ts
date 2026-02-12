import { Seo } from "@/types/general";
import { LocationCardProps } from "@/ui/modules/location/components/location-card/types";

export interface LocationPageData {
  pageData: LocationPageResponse;
}

export interface LocationPageResponse {
  locations: LocationData[];
  pageTitle: string;
  instructionLabel: string;
  seo: Seo;
}

export interface LocationData extends LocationCardProps {
  id: number;
  coords: string;
}
