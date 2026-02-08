import qs from "qs";

import { CONFIG } from "@/utils/config";

import { api } from "../instance";

import { AboutPageData } from "./types";

const { apiEndpoint, authToken } = CONFIG;

export const getAboutData = async (locale?: string): Promise<AboutPageData> => {
  const query = qs.stringify(
    {
      populate: [
        "benefits",
        "benefits.image",
        "benefits.imageMobile",
        "marque",
        "infrastructure",
        "infrastructure.icon",
        "navLinks",
        "seo",
        "seo.ogImage",
      ],
      ...(locale && { locale }),
    },
    {
      encodeValuesOnly: true,
    },
  );

  const url = new URL("/api/about-page", apiEndpoint);
  url.search = query;

  const response = await api(url.href, {
    method: "GET",
    authToken: authToken,
  });

  return {
    pageData: response.data,
  };
};
