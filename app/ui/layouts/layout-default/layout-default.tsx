"use client";

import { useEffect } from "react";

import { useAppStore } from "@/store/useAppStore";

import { LayoutDefaultProps } from "./types";

export const LayoutDefault = ({ children, locale }: LayoutDefaultProps) => {
  const updateLocale = useAppStore((state) => state.updateLocale);

  useEffect(() => {
    updateLocale(locale);
  }, [locale, updateLocale]);

  return <>{children}</>;
};
