import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Button } from "@/ui/components/button";
import PolygonIcon from "@/ui/svgr-icons/polygon.svg";

import { PriceCardProps } from "./types";

import styles from "./price-card.module.scss";

export const PriceCard = ({
  price,
  priceLabel,
  revenueTitle,
  revenueSubtitle,
  profitTitle,
  profitSubtitle,
  button,
  imageUrl,
}: PriceCardProps) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div>
        <AnimFadeUp>
          <h3
            className={styles.price}
            dangerouslySetInnerHTML={{ __html: price }}
          />
        </AnimFadeUp>
        <AnimFadeUp>
          <span
            className={styles.priceLabel}
            dangerouslySetInnerHTML={{ __html: priceLabel }}
          />
        </AnimFadeUp>
      </div>
      <div className={styles.description}>
        <div>
          <AnimFadeUp>
            <span
              className={styles.revenueTitle}
              dangerouslySetInnerHTML={{ __html: revenueTitle }}
            />
          </AnimFadeUp>
          <AnimFadeUp>
            <span
              className={styles.revenueSubtitle}
              dangerouslySetInnerHTML={{ __html: revenueSubtitle }}
            />
          </AnimFadeUp>
        </div>
        <div>
          <AnimFadeUp>
            <span
              className={styles.revenueTitle}
              dangerouslySetInnerHTML={{ __html: profitTitle }}
            />
          </AnimFadeUp>
          <AnimFadeUp>
            <span
              className={styles.revenueSubtitle}
              dangerouslySetInnerHTML={{ __html: profitSubtitle }}
            />
          </AnimFadeUp>
        </div>
      </div>
      <AnimFadeUp>
        <Button
          className={styles.button}
          theme="accent"
          as="a"
          href={button.url}
          target="_blank"
        >
          <span>{button.title}</span>
          <PolygonIcon />
        </Button>
      </AnimFadeUp>
    </div>
  );
};
