import { ChangeEvent } from "react";

export const handleInputTelBlur = (e: ChangeEvent<HTMLInputElement>) => {
  if (e.target.value === "+" || !e.target.value.trim()) {
    e.target.value = "";
  }
};
