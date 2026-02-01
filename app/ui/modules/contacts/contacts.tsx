"use client";

import { useEffect, useState } from "react";

import { useHeader } from "@/context/headerContext";
import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Button } from "@/ui/components/button";
import { Container } from "@/ui/components/container";
import { Picture } from "@/ui/components/picture";
import { Popup } from "@/ui/components/popup";
import { PopupForm } from "@/ui/components/popup/components/popup-form";
import { Title } from "@/ui/components/title";
import ArrowRightIcon from "@/ui/svgr-icons/arrow-right.svg";
import EmailIcon from "@/ui/svgr-icons/email.svg";
import PhoneIcon from "@/ui/svgr-icons/phone.svg";
import TelegramIcon from "@/ui/svgr-icons/telegram.svg";
import WhatsAppIcon from "@/ui/svgr-icons/whatsapp.svg";

import styles from "./contacts.module.scss";

export const ContactsModule = () => {
  const { updateHeader } = useHeader();
  const [isShowPopup, setIsShowPopup] = useState(false);

  useEffect(() => {
    updateHeader({
      theme: "black",
      isColoredWhite: false,
    });

    return () => {
      updateHeader({
        theme: "black",
        isColoredWhite: false,
      });
    };
  }, []);

  return (
    <>
      <section className={styles.wrapper}>
        <Picture
          className={styles.bg}
          image={{ x1: "/images/contacts-bg.webp" }}
        />

        <Container className={styles.container} isHigh>
          <div className={styles.inner}>
            <AnimFadeUp>
              <Title
                Tag="h1"
                size="L"
                className={styles.title}
                text={"Контактная<br />информация"}
              />
            </AnimFadeUp>
            <ul className={styles.contacts}>
              <li className={styles.item}>
                <AnimFadeUp delay={300}>
                  <a className={styles.link} href="">
                    <span>+62 822-3537-2593</span>
                    <PhoneIcon />
                  </a>
                </AnimFadeUp>
              </li>
              <li className={styles.item}>
                <AnimFadeUp delay={400}>
                  <a className={styles.link} href="">
                    <span>info@surfsidebali.com</span>
                    <EmailIcon />
                  </a>
                </AnimFadeUp>
              </li>
              <li className={styles.item}>
                <AnimFadeUp delay={500}>
                  <a className={styles.link} href="">
                    <span>Whatsapp</span>
                    <WhatsAppIcon />
                  </a>
                </AnimFadeUp>
              </li>
              <li className={styles.item}>
                <AnimFadeUp delay={600}>
                  <a className={styles.link} href="">
                    <span>Telegram</span>
                    <TelegramIcon />
                  </a>
                </AnimFadeUp>
              </li>
            </ul>

            <Popup
              triggerButton={
                <AnimFadeUp className={styles.buttonWrapper} delay={900}>
                  <Button
                    className={styles.button}
                    theme="accent"
                    as="button"
                    onClick={() => setIsShowPopup(true)}
                  >
                    <span>Оставить заявку</span>
                    <ArrowRightIcon />
                  </Button>
                </AnimFadeUp>
              }
              isShow={isShowPopup}
              onClose={() => setIsShowPopup(false)}
            >
              <PopupForm onClose={() => setIsShowPopup(false)} />
            </Popup>
          </div>
        </Container>
      </section>
    </>
  );
};
