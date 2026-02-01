"use client";

import { useEffect } from "react";

import { useHeader } from "@/context/headerContext";
import { KaraokeText } from "@/ui/components/karaoke-text";
import { Marquee } from "@/ui/components/marquee";

import { About } from "./components/about";
import { Benefits } from "./components/benefits";
import { Hero } from "./components/hero";
import { Location } from "./components/location";

export const HomeModule = () => {
  const { updateHeader } = useHeader();

  useEffect(() => {
    updateHeader({
      theme: "default",
      isColoredWhite: false,
    });

    return () => {
      updateHeader({
        theme: "default",
        isColoredWhite: false,
      });
    };
  }, []);

  return (
    <>
      <Hero
        title={
          "Виллы для&nbsp;инвестиций,<br> <span>жизни и&nbsp;отдыха</span>"
        }
        text={
          "Проект с&nbsp;понятной структурой, <br /> четкой экономикой <br /> и&nbsp;видимым результатом."
        }
        buttonFirstLabel={"Оставить заявку"}
        buttonSecondLabel={"Доступные юниты"}
      />

      <Marquee
        firstSlideTitle={"ключи: II квартал 2026"}
        secondSlideTitle={"готовность комплекса"}
      />

      <KaraokeText
        text={
          "Мы создаём не просто недвижимость — мы создаём востребованный актив в самом сердце Улувату, на легендарном побережье Бали. Это уникальное предложение для инвесторов, которые понимают: элитная недвижимость в топовой локации — это стабильный рост капитала."
        }
      />

      <Location
        title={"Улувату <span>— район миллионеров</span>"}
        text={
          "<p>Surfside расположен в&nbsp;одном из&nbsp;самых престижных и&nbsp;востребованных районов острова, сосредоточив вокруг себя ключевые точки притяжения Бали.</p> <p>Здесь находятся знаковые пляжи, трендовые рестораны, стильные бары и&nbsp;атмосферные лаунж-пространства, которые определяют дух современного острова.</p>"
        }
        buttonLabel={"Подробнее о локации"}
      />

      <About
        sectionTitle={"О проекте"}
        cardLabelFirst={"премиальных <br /> резиденций"}
        cardLabelSecond={
          "год гарантия<br /> на отделочные<br /> работы и технику"
        }
        cardLabelThird={"лет гарантия<br /> на конструктив"}
        cardLabelFourth={"от 47 до 239 м²"}
        cardLabelFifth={
          "Все резиденции<br /> сдаются<br /> &laquo;под ключ&raquo;<br /> с&nbsp;возможностью<br /> выбора стиля&nbsp;&mdash;<br /> классика<br /> или арт-стиль."
        }
        cardLabelSixth={
          "Комплекс включает<br /> апартаменты<br /> (1-2&nbsp;спальни),<br /> двухуровневые<br /> лофты, пентхаусы<br /> и&nbsp;виллы на&nbsp;2-4<br /> спальни."
        }
        projectsButtonLabel={"Открыть мастер-план"}
      />

      <Benefits
        benefits={[
          {
            title: "Легальный<br /> статус земли.<br /> SLF PBG",
            text: "Разрешены строительство,<br /> владение и краткосрочная<br /> аренда.",
          },
          {
            title: "Долгосрочная<br /> перспектива",
            text: "Опцион продления аренды<br /> <b>до&nbsp;2075&nbsp;г.</b> по&nbsp;фиксированной<br /> цене&nbsp;&mdash; право закрепить<br /> участок на&nbsp;десятилетия.",
          },
          {
            title: "Финансовая<br /> безопасность",
            text: "Аренда земли на <b>32&nbsp;года</b><br /> полностью оплачена<br /> девелопером.",
          },
          {
            title: "Надёжность<br /> строительства",
            text: "Строительство ведёт<br /> лицензированная<br /> индонезийская компания.",
          },
        ]}
      />
    </>
  );
};
