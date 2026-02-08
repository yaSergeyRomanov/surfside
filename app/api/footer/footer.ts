import qs from "qs";

import { CONFIG } from "@/utils/config";

import { api } from "../instance";

import { FooterData } from "./types";

const { apiEndpoint, authToken } = CONFIG;

export const getFooterData = async (locale?: string): Promise<FooterData> => {
  const query = qs.stringify(
    {
      populate: ["form", "navLinks"],
      ...(locale && { locale }),
    },
    {
      encodeValuesOnly: true,
    },
  );

  const url = new URL("/api/footer", apiEndpoint);
  url.search = query;

  const response = await api(url.href, {
    method: "GET",
    authToken: authToken,
  });

  return {
    footerData: response.data,
  };
};
