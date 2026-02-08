import { LocationCardProps } from "@/ui/modules/location/components/location-card/types";

export interface LocationPageData {
  pageData: LocationResponse;
}

export interface LocationResponse {
  locations: LocationData[];
  pageTitle: string;
  instructionLabel: string;
}

export interface LocationData extends LocationCardProps {
  id: number;
  coords: string;
}
