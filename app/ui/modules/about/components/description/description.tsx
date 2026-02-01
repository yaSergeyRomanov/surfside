import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Container } from "@/ui/components/container";
import { Marquee } from "@/ui/components/marquee";
import { Picture } from "@/ui/components/picture";
import { Section } from "@/ui/components/section";

import styles from "./description.module.scss";

export const Description = () => {
  return (
    <Section Tag="section" className={styles.section}>
      <Picture
        className={styles.image}
        image={{ x1: "/images/about/girl.webp" }}
      />
      <div className={styles.inner}>
        <Container>
          <AnimFadeUp>
            <h2 className={styles.title}>
              Виллы с&nbsp;инфраструктурой
              <br /> для жизни, отдыха и&nbsp;инвестиций
            </h2>
          </AnimFadeUp>
          <AnimFadeUp>
            <div className={styles.text}>
              <p>
                Концепция проекта создана для серферов
                в&nbsp;Улувату&nbsp;&mdash; месте с&nbsp;самой знаменитой волной
                в&nbsp;Индонезии.
              </p>
              <p>
                Сегодня Бали&nbsp;&mdash; мировая столица серф-культуры. Здесь
                живут&nbsp;те, кто выбирает баланс: катание на&nbsp;волнах
                мирового уровня, спа и&nbsp;рестораны в&nbsp;шаговой
                доступности, международное коммьюнити из&nbsp;США, Австралии,
                Европы и&nbsp;Латинской Америки.
              </p>
            </div>
          </AnimFadeUp>
        </Container>
      </div>
      <Marquee
        firstSlideTitle={"ключи: II квартал 2026"}
        secondSlideTitle={"готовность комплекса"}
        direction="toLeft"
      />
    </Section>
  );
};
