import { NavLink } from "@/types/general";
import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Button } from "@/ui/components/button";
import { Container } from "@/ui/components/container";
import { Section } from "@/ui/components/section";
import PolygonIcon from "@/ui/svgr-icons/polygon.svg";

import styles from "./navigation.module.scss";

export const Navigation = ({ navLinks }: { navLinks: NavLink[] }) => {
  return (
    <Section className={styles.section} Tag="section">
      <Container>
        <ul className={styles.grid}>
          {navLinks.map((item, index) => (
            <li className={styles.item} key={index}>
              <AnimFadeUp>
                <Button
                  className={styles.button}
                  as="a"
                  theme="accent"
                  href={item.url}
                >
                  <span>{item.title}</span>
                  <PolygonIcon />
                </Button>
              </AnimFadeUp>
            </li>
          ))}
        </ul>
      </Container>

      <img className={styles.wave} src="/images/about/wave.svg" alt="Wave" />
      <img
        className={styles.surfer}
        src="/images/about/surfer.svg"
        alt="Surfer"
      />
    </Section>
  );
};
