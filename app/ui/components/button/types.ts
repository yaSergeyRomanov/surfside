import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export interface ButtonProps {
  theme?: "primary" | "accent" | "accent-2" | "white-borders" | "white";
  className?: string;
  children: React.ReactNode;
  isHasIcon?: boolean;
  as: "Link" | "a" | "button";
  href?: string;
}

export interface ButtonAsButtonProps
  extends
    ButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps> {}

export interface ButtonAsAnchorProps
  extends
    ButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonProps> {}

export interface ButtonAsLinkProps
  extends
    ButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonProps> {}
