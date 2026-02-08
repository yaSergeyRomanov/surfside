import qs from "qs";

import { CONFIG } from "@/utils/config";

import { api } from "../instance";

import { HomePageData } from "./types";

const { apiEndpoint, authToken } = CONFIG;

export const getHomeData = async (locale?: string): Promise<HomePageData> => {
  const query = qs.stringify(
    {
      populate: [
        "marquee",
        "benefits",
        "heroButtonUnits",
        "locationSectionButton",
        "aboutProjectButton",
        "seo",
        "seo.ogImage",
      ],
      ...(locale && { locale }),
    },
    {
      encodeValuesOnly: true,
    },
  );

  const url = new URL("/api/home", apiEndpoint);
  url.search = query;

  const response = await api(url.href, {
    method: "GET",
    authToken: authToken,
  });

  return {
    pageData: response.data,
  };
};
