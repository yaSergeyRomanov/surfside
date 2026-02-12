import { PriceCard } from "./components/price-card";
import { ProfitCard } from "./components/profit-card";
import { CalculationProps } from "./types";

import styles from "./calculation.module.scss";

export const Calculation = ({
  profitCard1,
  profitCard2,
  priceCard1,
  priceCard2,
}: CalculationProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.col}>
        <ProfitCard {...profitCard1} />
      </div>
      <div className={styles.col}>
        <PriceCard {...priceCard1} />
      </div>
      <div className={styles.col}>
        <PriceCard {...priceCard2} />
      </div>
      <div className={styles.col}>
        <ProfitCard {...profitCard2} />
      </div>
    </div>
  );
};
