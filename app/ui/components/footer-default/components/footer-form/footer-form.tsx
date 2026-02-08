"use client";
import clsx from "clsx";
import { useForm } from "react-hook-form";

import { FormData, FormLabels } from "@/types/general";
import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Button } from "@/ui/components/button";
import { handleInputTelBlur } from "@/utils/handleInputTelBlur";
import { handleInputTelChange } from "@/utils/handleInputTelChange";

import styles from "./footer-form.module.scss";

export const FooterForm = ({ formLabels }: { formLabels?: FormLabels }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  if (!formLabels) return;

  const onSubmit = (data: FormData) => {
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <AnimFadeUp className={styles.inputWrapper}>
        <input
          className={clsx(styles.input, {
            [styles.error]: errors?.firstName,
          })}
          {...register("firstName", {
            required: true,
          })}
          type="text"
          placeholder={formLabels.yourNameLabel}
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
          placeholder={formLabels.yourPhoneLabel}
          onChange={(e) => handleInputTelChange(e)}
          onBlur={(e) => handleInputTelBlur(e)}
        />
      </AnimFadeUp>
      <AnimFadeUp className={styles.social}>
        <h3
          className={styles.socialTitle}
          dangerouslySetInnerHTML={{ __html: formLabels.howToContactYouLabel }}
        />
        <div className={styles.socialWrapper}>
          <label className={styles.socialLabel}>
            <input
              className={styles.socialInput}
              {...register("social")}
              type="checkbox"
            />
            <span className={styles.socialText}>Whatsapp</span>
          </label>
          <label className={styles.socialLabel}>
            <input
              className={styles.socialInput}
              {...register("social")}
              type="checkbox"
            />
            <span className={styles.socialText}>Telegram</span>
          </label>
        </div>
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
          placeholder={formLabels.emailLabel}
        />
      </AnimFadeUp>
      <AnimFadeUp
        className={clsx(styles.agree, { [styles.error]: errors?.agree })}
      >
        <label className={styles.agreeLabel}>
          <input
            className={styles.agreeInput}
            {...register("agree", {
              required: true,
            })}
            type="checkbox"
          />
          <span
            className={styles.agreeText}
            dangerouslySetInnerHTML={{ __html: formLabels.agreementLabel }}
          />
        </label>
      </AnimFadeUp>
      <AnimFadeUp>
        <Button
          className={styles.submitButton}
          theme="accent"
          type="submit"
          as="button"
        >
          <span>{formLabels.submitButtonLabel}</span>
        </Button>
      </AnimFadeUp>
    </form>
  );
};
