import { ImageEntry } from "@/types/general";

export interface UnitsCardProps {
  title: string;
  images: ImageEntry[];
  benefits: {
    icon: string;
    text: string;
  }[];
  detailsButtonLabel: string;
  price: string;
  onClick: () => void;
}
