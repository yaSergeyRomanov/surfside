import { InvestmentPageData } from "@/api/investment/types";
import { KaraokeText } from "@/ui/components/karaoke-text";

import { Banner } from "./components/banner";
import { Calculation } from "./components/calculation/calculation";
import { Chart } from "./components/chart";
import { Hero } from "./components/hero";
import { Marquee } from "./components/marquee";
import { Numbers } from "./components/numbers";

import styles from "./investment.module.scss";

export const InvestmentModule = ({ pageData }: InvestmentPageData) => {
  return (
    <div className={styles.wrapper}>
      <Hero title={pageData.pageTitle} buttonLabel={pageData.heroButtonLabel} />
      <KaraokeText text={pageData.karaokeText} theme="default" />
      <Numbers numbers={pageData.numbers} />
      <Chart
        title={pageData.chartSectionTitle}
        subtitle={pageData.chartSectionSubtitle}
        chart={pageData.chart}
      />
      <Banner
        title={pageData.bannerTitle}
        text={pageData.bannerText}
        buttonLabel={pageData.bannerButtonLabel}
      />
      <Marquee
        firstSlideTitle={pageData.marquee.firstSlideTitle}
        secondSlideTitle={pageData.marquee.secondSlideTitle}
      />
      <Calculation
        profitCard1={{ ...pageData.profitCard1 }}
        profitCard2={{ ...pageData.profitCard2 }}
        priceCard1={{
          ...pageData.priceCard1,
          imageUrl: "/images/investment/price-card-bg-1.webp",
        }}
        priceCard2={{
          ...pageData.priceCard2,
          imageUrl: "/images/investment/price-card-bg-2.webp",
        }}
      />
      <Marquee
        firstSlideTitle={pageData.marquee.firstSlideTitle}
        secondSlideTitle={pageData.marquee.secondSlideTitle}
        direction="toRight"
      />
    </div>
  );
};
