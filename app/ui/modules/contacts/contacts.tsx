"use client";

import { useEffect, useState } from "react";

import { ContactsPageResponse } from "@/api/contacts/types";
import { useAppStore } from "@/store/useAppStore";
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

export const CONTACTS = [
  {
    label: "+62 822-3537-2593",
    url: "tel:+6282235372593",
    icon: PhoneIcon,
  },
  {
    label: "info@surfsidebali.com",
    url: "mailto:info@surfsidebali.com",
    icon: EmailIcon,
  },
  {
    label: "WhatsApp",
    url: "https://wa.me/6282235372593",
    icon: WhatsAppIcon,
  },
  {
    label: "Telegram",
    url: "https://t.me/+6282235372593",
    icon: TelegramIcon,
  },
];

export const ContactsModule = ({
  pageTitle,
  sendRequestButtonLabel,
}: ContactsPageResponse) => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const updateHeader = useAppStore((state) => state.updateHeader);

  useEffect(() => {
    updateHeader({
      theme: "black-2",
    });
  }, [updateHeader]);

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
                text={pageTitle}
              />
            </AnimFadeUp>
            <ul className={styles.contacts}>
              {CONTACTS.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <li key={contact.url} className={styles.item}>
                    <AnimFadeUp delay={300 + index * 100}>
                      <a
                        className={styles.link}
                        href={contact.url}
                        target={
                          contact.url.startsWith("http") ? "_blank" : "_self"
                        }
                      >
                        <span>{contact.label}</span>
                        <IconComponent />
                      </a>
                    </AnimFadeUp>
                  </li>
                );
              })}
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
                    <span>{sendRequestButtonLabel}</span>
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
