import { NavLink } from "@/types/general";

export interface PriceCardProps {
  price: string;
  priceLabel: string;
  revenueTitle: string;
  revenueSubtitle: string;
  profitTitle: string;
  profitSubtitle: string;
  button: NavLink;
  imageUrl: string;
}
