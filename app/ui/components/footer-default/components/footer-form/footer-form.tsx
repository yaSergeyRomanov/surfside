"use client";
import clsx from "clsx";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { FormData, FormLabels } from "@/types/general";
import { AnimFadeUp } from "@/ui/components/anim-fadeup";
import { Button } from "@/ui/components/button";
import { Notice } from "@/ui/components/popup/components/notice";
import { handleInputTelChange } from "@/utils/handleInputTelChange";
import { sendToBitrix } from "@/utils/sendToBitrix";

import styles from "./footer-form.module.scss";

export const FooterForm = ({ formLabels }: { formLabels?: FormLabels }) => {
  const [notice, setNotice] = useState<{
    isShow: boolean;
    theme: "success" | "error";
    title: string;
  }>({
    isShow: false,
    theme: "success",
    title: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  if (!formLabels) return;

  const onSubmit = async (data: FormData) => {
    try {
      const result = await sendToBitrix(data);

      if (result.success) {
        reset();

        setNotice({
          isShow: true,
          theme: "success",
          title: formLabels.noticeTitleSuccess,
        });

        setTimeout(() => {
          setNotice((prev) => ({ ...prev, isShow: false }));
        }, 5000);
      }
    } catch (error) {
      console.error("Submit error:", error);

      setNotice({
        isShow: true,
        theme: "error",
        title: formLabels.noticeTitleError,
      });

      setTimeout(() => {
        setNotice((prev) => ({ ...prev, isShow: false }));
      }, 5000);
    }
  };

  return (
    <>
      {notice.isShow && (
        <Notice
          title={notice.title}
          theme={notice.theme}
          isShow={notice.isShow}
        />
      )}

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
              pattern: {
                value: /^[\d\s\-\+\(\)]+$/,
                message: "",
              },
            })}
            type="tel"
            placeholder={formLabels?.yourPhoneLabel}
            onChange={(e) => handleInputTelChange(e)}
          />
        </AnimFadeUp>
        <AnimFadeUp className={styles.social}>
          <h3
            className={styles.socialTitle}
            dangerouslySetInnerHTML={{
              __html: formLabels.howToContactYouLabel,
            }}
          />
          <div className={styles.socialWrapper}>
            <label className={styles.socialLabel}>
              <input
                className={styles.socialInput}
                {...register("social")}
                value="Whatsapp"
                type="checkbox"
              />
              <span className={styles.socialText}>Whatsapp</span>
            </label>
            <label className={styles.socialLabel}>
              <input
                className={styles.socialInput}
                {...register("social")}
                value="Telegram"
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
    </>
  );
};
