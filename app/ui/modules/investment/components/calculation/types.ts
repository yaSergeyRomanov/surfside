import { PriceCardProps } from "./components/price-card/types";
import { ProfitCardProps } from "./components/profit-card/types";

export interface CalculationProps {
  profitCard1: ProfitCardProps;
  profitCard2: ProfitCardProps;
  priceCard1: PriceCardProps;
  priceCard2: PriceCardProps;
}
