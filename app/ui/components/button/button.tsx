import clsx from "clsx";
import Link from "next/link";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

import {
  ButtonAsAnchorProps,
  ButtonAsButtonProps,
  ButtonAsLinkProps,
} from "./types";

import styles from "./button.module.scss";

type ButtonProps =
  | ButtonAsButtonProps
  | ButtonAsAnchorProps
  | ButtonAsLinkProps;

export const Button = ({
  theme = "primary",
  className,
  children,
  href,
  isHasIcon,
  as,
  ...props
}: ButtonProps) => {
  if (as === "a") {
    return (
      <a
        className={clsx(
          styles.button,
          styles[`button-${theme}`],
          { [styles.isHasIcon]: isHasIcon },
          className
        )}
        href={href}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  if (as === "Link") {
    return (
      <Link
        className={clsx(
          styles.button,
          styles[`button-${theme}`],
          { [styles.isHasIcon]: isHasIcon },
          className
        )}
        href={href || ""}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={clsx(
        styles.button,
        styles[`button-${theme}`],
        { [styles.isHasIcon]: isHasIcon },
        className
      )}
      type="button"
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};
