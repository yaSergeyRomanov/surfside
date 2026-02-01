import clsx from "clsx";
import { useForm } from "react-hook-form";

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
          text={"Связаться с&nbsp;нами"}
        />
        <button className={styles.close} type="button" onClick={onClose}>
          <span>Close</span>
          <CloseIcon />
        </button>
      </AnimFadeUp>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
          <div className={styles.formCol}>
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
                <div className={styles.errorMessage}>
                  {errors?.tel?.message}
                </div>
              )}
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
                <div className={styles.errorMessage}>
                  {errors?.email?.message}
                </div>
              )}
            </AnimFadeUp>
          </div>

          <div className={styles.formCol}>
            <AnimFadeUp className={styles.inputWrapper}>
              <textarea
                className={clsx(styles.input, styles.textArea)}
                {...register("message")}
                placeholder="Сообщение"
              />
            </AnimFadeUp>
          </div>
        </div>

        <AnimFadeUp className={styles.footer}>
          <Button className={styles.submit} as="button" type="submit">
            <span>Отправить</span>
          </Button>
          <button
            className={styles.footerClose}
            type="button"
            onClick={onClose}
          >
            <span>Закрыть</span>
          </button>
        </AnimFadeUp>
      </form>
    </AnimFadeUp>
  );
};
