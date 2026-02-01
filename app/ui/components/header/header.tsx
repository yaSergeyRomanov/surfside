"use client";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { useHeader } from "@/context/headerContext";

import { BurgerMenu } from "../burger-menu";
import { Button } from "../button";
import { Container } from "../container";

import styles from "./header.module.scss";

export const Header = () => {
  const { theme, isLiftUp, isColoredWhite } = useHeader();
  const [isColored, setIsColored] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    window.scrollY >= 10 ? setIsColored(true) : setIsColored(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(styles.header, {
        [styles.isColored]: isColored,
        [styles.isColoredWhite]: isColoredWhite,
        [styles.isLiftUp]: isLiftUp,
      })}
      ref={headerRef}
    >
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.row}>
            <div className={styles.col}>
              {(theme === "default" || theme === "white") && (
                <Link className={styles.logo} href="/">
                  <img src="/images/logo.svg" alt="Surfside logo" />
                </Link>
              )}
              {theme === "black" && (
                <Link className={styles.logo} href="/">
                  <img src="/images/logo-black.svg" alt="Surfside logo" />
                </Link>
              )}

              {(theme === "default" || theme === "white") && <BurgerMenu />}
              {theme === "black" && <BurgerMenu burgerTheme="black" />}
            </div>
            <div className={styles.col}>
              {(theme === "default" || theme === "black") && (
                <Button
                  className={styles.button}
                  as="Link"
                  theme="primary"
                  href="/contacts/"
                >
                  <span>Связаться с нами</span>
                </Button>
              )}
              {theme === "white" && (
                <Button
                  className={styles.button}
                  as="Link"
                  theme="white"
                  href="/contacts/"
                >
                  <span>Связаться с нами</span>
                </Button>
              )}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};
