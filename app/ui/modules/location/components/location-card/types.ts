import { ImageEntry } from "@/types/general";

export interface LocationCardProps {
  images: ImageEntry[];
  title: string;
  route: string;
  routeIcon: "afoot" | "byCar" | "moped";
  description: string;
  onClickOutside: () => void;
}
