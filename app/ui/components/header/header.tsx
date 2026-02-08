"use client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { useWindowSize } from "@/hooks/useWindowSize";
import { useAppStore } from "@/store/useAppStore";

import { BurgerMenu } from "../burger-menu";
import { Button } from "../button";
import { Container } from "../container";

import { useHeaderData } from "./useHeaderData";

import styles from "./header.module.scss";

export const Header = () => {
  const headerTheme = useAppStore((state) => state.headerTheme);
  const isLiftUp = useAppStore((state) => state.isLiftUp);
  const isColoredWhite = useAppStore((state) => state.isColoredWhite);
  const isColoredBlue = useAppStore((state) => state.isColoredBlue);
  const locale = useAppStore((state) => state.locale);

  const { data } = useHeaderData(locale || "ru");
  const [isSticky, setIsSticky] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isAdaptive = isMounted && width <= 1279;

  const handleScroll = () => {
    window.scrollY >= 10 ? setIsSticky(true) : setIsSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!data) {
    return null;
  }

  return (
    <header
      className={clsx(styles.header, {
        [styles.isSticky]: isSticky,
        [styles.isColoredWhite]: isColoredWhite,
        [styles.isColoredBlue]: isColoredBlue,
        [styles.isLiftUp]: isLiftUp,
      })}
      ref={headerRef}
    >
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.row}>
            <div className={styles.col}>
              {(headerTheme === "default" || headerTheme === "white") && (
                <a className={styles.logo} href={locale ? `/${locale}/` : "/"}>
                  <img
                    src="/images/logo.svg"
                    alt="Surfside logo"
                    width={200}
                    height={23}
                  />
                </a>
              )}
              {headerTheme === "black" && (
                <a className={styles.logo} href={locale ? `/${locale}/` : "/"}>
                  <img
                    src="/images/logo-black.svg"
                    alt="Surfside logo"
                    width={200}
                    height={23}
                  />
                </a>
              )}
              {headerTheme === "black-2" && !isSticky && (
                <a className={styles.logo} href={locale ? `/${locale}/` : "/"}>
                  <img
                    src="/images/logo-black.svg"
                    alt="Surfside logo"
                    width={200}
                    height={23}
                  />
                </a>
              )}
              {headerTheme === "black-2" && isSticky && (
                <a className={styles.logo} href={locale ? `/${locale}/` : "/"}>
                  <img
                    src="/images/logo.svg"
                    alt="Surfside logo"
                    width={200}
                    height={23}
                  />
                </a>
              )}

              {(headerTheme === "default" || headerTheme === "white") && (
                <BurgerMenu navLinks={data.navLinks} />
              )}
              {headerTheme === "black" && (
                <BurgerMenu burgerTheme="black" navLinks={data.navLinks} />
              )}
              {headerTheme === "black-2" && !isSticky && (
                <BurgerMenu burgerTheme="black" navLinks={data.navLinks} />
              )}
              {headerTheme === "black-2" && isSticky && (
                <BurgerMenu navLinks={data.navLinks} />
              )}
            </div>

            <div className={styles.col}>
              {((headerTheme === "default" && !isAdaptive) ||
                headerTheme === "black") && (
                <Button
                  className={styles.button}
                  as="a"
                  theme="primary"
                  href={data.contactUsButton.url}
                >
                  <span>{data.contactUsButton.title}</span>
                </Button>
              )}
              {headerTheme === "default" && isAdaptive && (
                <Button
                  className={styles.button}
                  as="a"
                  theme="white"
                  href={data.contactUsButton.url}
                >
                  <span>{data.contactUsButton.title}</span>
                </Button>
              )}
              {headerTheme === "white" && (
                <Button
                  className={styles.button}
                  as="a"
                  theme="white"
                  href={data.contactUsButton.url}
                >
                  <span>{data.contactUsButton.title}</span>
                </Button>
              )}
              {headerTheme === "black-2" && (
                <Button
                  className={styles.button}
                  as="a"
                  href={data.contactUsButton.url}
                >
                  <span>{data.contactUsButton.title}</span>
                </Button>
              )}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};
