import { Seo } from "@/types/general";
import { MarqueeProps } from "@/ui/components/marquee/types";
import { PriceCardProps } from "@/ui/modules/investment/components/calculation/components/price-card/types";
import { ProfitCardProps } from "@/ui/modules/investment/components/calculation/components/profit-card/types";
import { ChartProps } from "@/ui/modules/investment/components/chart/types";
import { NumberProps } from "@/ui/modules/investment/components/numbers/types";

export interface InvestmentPageData {
  pageData: InvestmentPageResponse;
}

export interface InvestmentPageResponse {
  pageTitle: string;
  heroButtonLabel: string;
  karaokeText: string;
  numbers: NumberProps[];
  chartSectionTitle: string;
  chartSectionSubtitle: string;
  chart: ChartProps[];
  bannerTitle: string;
  bannerText: string;
  bannerButtonLabel: string;
  marquee: MarqueeProps;
  profitCard1: ProfitCardProps;
  profitCard2: ProfitCardProps;
  priceCard1: PriceCardProps;
  priceCard2: PriceCardProps;
  seo: Seo;
}
