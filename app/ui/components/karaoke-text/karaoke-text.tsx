"use client";
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

import { Container } from "../container";
import { Picture } from "../picture";

import { KaraokeTextProps } from "./types";

import styles from "./karaoke-text.module.scss";

export const KaraokeText = ({ text, className, theme }: KaraokeTextProps) => {
  const targetRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  const initCurtain = (target: HTMLSpanElement, section: HTMLDivElement) => {
    try {
      const originalText = target.textContent || "";
      target.innerHTML = originalText;

      const split = new SplitType(target, {
        types: "words",
        tagName: "span",
      });

      const words = Array.from(target.querySelectorAll(".word"));

      if (!words.length) {
        const wordsArray = originalText.split(" ");
        target.innerHTML = "";
        wordsArray.forEach((wordText) => {
          const wordSpan = document.createElement("span");
          wordSpan.className = "word";
          wordSpan.textContent = wordText + " ";
          target.appendChild(wordSpan);
        });
      }

      const linesContainer = document.createElement("div");
      linesContainer.classList.add("lines-container");

      let currentLine = document.createElement("div");
      currentLine.classList.add("line");

      const firstWordRect = words[0].getBoundingClientRect();
      let prevTop = firstWordRect.top;

      words.forEach((word) => {
        const wordRect = word.getBoundingClientRect();

        if (Math.abs(wordRect.top - prevTop) > 5) {
          linesContainer.appendChild(currentLine);
          currentLine = document.createElement("div");
          currentLine.classList.add("line");
          prevTop = wordRect.top;
        }

        if (currentLine.children.length > 0) {
          currentLine.appendChild(document.createTextNode(" "));
        }

        currentLine.appendChild(word.cloneNode(true));
      });

      if (currentLine.children.length > 0) {
        linesContainer.appendChild(currentLine);
      }

      target.innerHTML = "";
      target.appendChild(linesContainer);

      const textMasks: HTMLSpanElement[] = [];
      target.querySelectorAll(".line").forEach((line) => {
        const lineElement = line as HTMLDivElement;
        const lineText = lineElement.textContent || "";

        const textMask = document.createElement("span");
        textMask.className = "text-mask";
        textMask.textContent = lineText;

        lineElement.innerHTML = "";
        lineElement.appendChild(textMask);

        textMasks.push(textMask);
      });

      createScrollScene(section, textMasks);
    } catch (error) {
      console.error("Error initializing text animation:", error);
    }
  };

  const createScrollScene = (
    section: HTMLDivElement,
    textMasks: HTMLSpanElement[],
  ) => {
    if (!textMasks.length) return;

    if (animationRef.current) {
      animationRef.current.kill();
      animationRef.current.scrollTrigger?.kill();
    }

    gsap.set(textMasks, {
      backgroundPosition: "100% 0%",
    });

    animationRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 5%",
        end: "bottom 70%",
        scrub: true,
        pin: false,
        invalidateOnRefresh: true,
      },
    });

    animationRef.current.to(textMasks, {
      backgroundPosition: "0% 0%",
      ease: "none",
      stagger: 0.15,
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const init = async () => {
      if (!targetRef.current || !sectionRef.current) return;

      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }

      if (document.readyState !== "complete") {
        await new Promise((resolve) =>
          window.addEventListener("load", resolve),
        );
      }

      await new Promise((resolve) => setTimeout(resolve, 50));

      initCurtain(targetRef.current!, sectionRef.current!);

      let resizeTimeout: NodeJS.Timeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          if (targetRef.current && sectionRef.current) {
            initCurtain(targetRef.current, sectionRef.current);
          }
        }, 250);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        if (resizeTimeout) clearTimeout(resizeTimeout);
      };
    };

    init();

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current.scrollTrigger?.kill();
      }
    };
  }, [text]);

  return (
    <div
      className={clsx(styles.section, className, {
        [styles[`section-theme-${theme}`]]: theme,
      })}
      ref={sectionRef}
    >
      <Container isHigh>
        <div className={styles.wrapper}>
          <span
            className={styles.text}
            ref={targetRef}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </Container>
      {theme === "blue" && (
        <Picture
          className={styles.decor}
          image={{
            x1: "/images/home/karaoke-text-decor.svg",
            tablet: "/images/home/karaoke-text-decor_tablet.svg",
          }}
        />
      )}
    </div>
  );
};
