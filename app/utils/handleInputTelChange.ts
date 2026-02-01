import { ChangeEvent } from "react";

export const handleInputTelChange = (e: ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value.replace(/[^0-9+]/g, "");

  if (value.length > 1 && value.includes("+")) {
    value = "+" + value.replace(/\+/g, "");
  } else if (value[0] !== "+") {
    value = "+" + value;
  }
  e.target.value = value.substring(0, 20);
};
