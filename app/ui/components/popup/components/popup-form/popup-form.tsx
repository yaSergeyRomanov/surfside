"use client";

import clsx from "clsx";
import { useForm } from "react-hook-form";

import { useAppStore } from "@/store/useAppStore";
import { FormData } from "@/types/general";
import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Button } from "@/ui/components/button";
import { Title } from "@/ui/components/title";
import CloseIcon from "@/ui/svgr-icons/close.svg";
import { handleInputTelBlur } from "@/utils/handleInputTelBlur";
import { handleInputTelChange } from "@/utils/handleInputTelChange";

import { PopupFormProps } from "./types";

import styles from "./popup-form.module.scss";

export const PopupForm = ({ onClose }: PopupFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const formLabels = useAppStore((state) => state.formLabels);

  const onSubmit = (data: FormData) => {
    reset();
  };

  return (
    <AnimFadeUp className={styles.wrapper}>
      <AnimFadeUp className={styles.header}>
        <Title
          className={styles.title}
          Tag="h3"
          size="XL"
          text={formLabels.popupTitle}
        />
        <button className={styles.close} type="button" onClick={onClose}>
          <span>Close</span>
          <CloseIcon />
        </button>
      </AnimFadeUp>

      {formLabels.popupSubtitle && (
        <AnimFadeUp>
          <p
            className={styles.subtitle}
            dangerouslySetInnerHTML={{ __html: formLabels.popupSubtitle }}
          />
        </AnimFadeUp>
      )}

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <AnimFadeUp className={styles.inputWrapper}>
              <input
                className={clsx(styles.input, {
                  [styles.error]: errors?.firstName,
                })}
                {...register("firstName", {
                  required: true,
                })}
                type="text"
                placeholder={formLabels?.yourNameLabel}
              />
            </AnimFadeUp>
            <AnimFadeUp className={styles.inputWrapper}>
              <input
                className={clsx(styles.input, {
                  [styles.error]: errors?.tel,
                })}
                {...register("tel", {
                  required: true,
                })}
                type="tel"
                placeholder={formLabels?.yourPhoneLabel}
                onChange={(e) => handleInputTelChange(e)}
                onBlur={(e) => handleInputTelBlur(e)}
              />
            </AnimFadeUp>
            <AnimFadeUp className={styles.inputWrapper}>
              <input
                className={clsx(styles.input, {
                  [styles.error]: errors?.email,
                })}
                {...register("email", {
                  required: true,
                })}
                type="email"
                placeholder={formLabels?.emailLabel}
              />
            </AnimFadeUp>
          </div>

          <div className={styles.formCol}>
            <AnimFadeUp className={styles.inputWrapper}>
              <textarea
                className={clsx(styles.input, styles.textArea)}
                {...register("message")}
                placeholder={formLabels?.messageLabel}
              />
            </AnimFadeUp>
          </div>
        </div>

        <AnimFadeUp className={styles.footer}>
          <Button className={styles.submit} as="button" type="submit">
            <span>{formLabels?.submitButtonLabel}</span>
          </Button>
          <button
            className={styles.footerClose}
            type="button"
            onClick={onClose}
          >
            <span>{formLabels?.closePopupButtonLabel}</span>
          </button>
        </AnimFadeUp>
      </form>
    </AnimFadeUp>
  );
};
