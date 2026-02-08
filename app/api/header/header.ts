import qs from "qs";

import { CONFIG } from "@/utils/config";

import { api } from "../instance";

import { HeaderData } from "./types";

const { apiEndpoint, authToken } = CONFIG;

export const getHeaderData = async (locale?: string): Promise<HeaderData> => {
  const query = qs.stringify(
    {
      populate: ["navLinks", "contactUsButton"],
      ...(locale && { locale }),
    },
    {
      encodeValuesOnly: true,
    },
  );

  const url = new URL("/api/header", apiEndpoint);
  url.search = query;

  const response = await api(url.href, {
    method: "GET",
    authToken: authToken,
  });

  return {
    headerData: response.data,
  };
};
