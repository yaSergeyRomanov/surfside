"use client";
import clsx from "clsx";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { FormData } from "@/types/general";
import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Button } from "@/ui/components/button";
import { handleInputTelBlur } from "@/utils/handleInputTelBlur";
import { handleInputTelChange } from "@/utils/handleInputTelChange";

import styles from "./footer-form.module.scss";

export const FooterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

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
            required: "Заполните поле",
          })}
          type="text"
          placeholder="Ваше имя"
        />
        {errors?.firstName && (
          <div className={styles.errorMessage}>
            {errors?.firstName?.message}
          </div>
        )}
      </AnimFadeUp>
      <AnimFadeUp className={styles.inputWrapper}>
        <input
          className={clsx(styles.input, {
            [styles.error]: errors?.tel,
          })}
          {...register("tel", {
            required: "Заполните поле",
          })}
          type="tel"
          placeholder="Ваш телефон"
          onChange={(e) => handleInputTelChange(e)}
          onBlur={(e) => handleInputTelBlur(e)}
        />
        {errors?.tel && (
          <div className={styles.errorMessage}>{errors?.tel?.message}</div>
        )}
      </AnimFadeUp>
      <AnimFadeUp className={styles.social}>
        <h3 className={styles.socialTitle}>Как с&nbsp;вами связаться?</h3>
        <div className={styles.socialWrapper}>
          <label className={styles.socialLabel}>
            <input
              className={styles.socialInput}
              {...register("social")}
              type="radio"
            />
            <span className={styles.socialText}>Whatsapp</span>
          </label>
          <label className={styles.socialLabel}>
            <input
              className={styles.socialInput}
              {...register("social")}
              type="radio"
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
            required: "Заполните поле",
          })}
          type="email"
          placeholder="E-mail"
        />
        {errors?.email && (
          <div className={styles.errorMessage}>{errors?.email?.message}</div>
        )}
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
          <span className={styles.agreeText}>
            Я согласен с&nbsp;условиями{" "}
            <Link href="/" target="_blank">
              обработки персональных данных
            </Link>
          </span>
        </label>
      </AnimFadeUp>
      <AnimFadeUp>
        <Button
          className={styles.submitButton}
          theme="accent"
          type="submit"
          as="button"
        >
          <span>Отправить</span>
        </Button>
      </AnimFadeUp>
    </form>
  );
};
