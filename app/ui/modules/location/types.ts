import { LocationData } from "@/api/location/types";

export interface LocationModuleProps {
  pageTitle: string;
  instructionLabel: string;
  locations: LocationData[];
}
