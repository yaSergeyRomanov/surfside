import { Seo } from "@/types/general";
import { UnitsCardProps } from "@/ui/modules/units/components/units-card/types";

export interface UnitsPageData {
  pageData: UnitsPageResponse;
}

export interface UnitsPageResponse {
  pageTitle: string;
  moreInfoButtonLabel: string;
  units: UnitData[];
  seo: Seo;
}

export interface UnitData extends UnitsCardProps {
  id: number;
}
