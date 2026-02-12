import { AnimFadeUp } from "@/ui/components/anim-fadeup";

import { ProfitCardProps } from "./types";

import styles from "./profit-card.module.scss";

export const ProfitCard = ({
  title,
  profitTitle,
  profitTimeTitle,
  profitSubtitle,
  profitTimeSubtitle,
  footNote,
}: ProfitCardProps) => {
  return (
    <article className={styles.card}>
      <AnimFadeUp>
        <h3
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </AnimFadeUp>
      <div className={styles.row}>
        <div className={styles.col}>
          <AnimFadeUp>
            <span
              className={styles.profitTitle}
              dangerouslySetInnerHTML={{ __html: profitTitle }}
            />
          </AnimFadeUp>
          <AnimFadeUp>
            <span
              className={styles.profitSubtitle}
              dangerouslySetInnerHTML={{ __html: profitSubtitle }}
            />
          </AnimFadeUp>
        </div>
        <div className={styles.col}>
          <AnimFadeUp>
            <span
              className={styles.profitTitle}
              dangerouslySetInnerHTML={{ __html: profitTimeTitle }}
            />
          </AnimFadeUp>
          <AnimFadeUp>
            <span
              className={styles.profitSubtitle}
              dangerouslySetInnerHTML={{ __html: profitTimeSubtitle }}
            />
          </AnimFadeUp>
        </div>
      </div>
      <AnimFadeUp>
        <span
          className={styles.footnote}
          dangerouslySetInnerHTML={{ __html: `*${footNote}` }}
        />
      </AnimFadeUp>
    </article>
  );
};
