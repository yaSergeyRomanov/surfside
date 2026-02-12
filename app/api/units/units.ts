import qs from "qs";

import { CONFIG } from "@/utils/config";

import { api } from "../instance";

import { UnitsPageData } from "./types";

const { apiEndpoint, authToken } = CONFIG;

export const getUnitsData = async (locale?: string): Promise<UnitsPageData> => {
  const query = qs.stringify(
    {
      populate: [
        "units",
        "units.images",
        "units.benefits",
        "seo",
        "seo.ogImage",
      ],
      ...(locale && { locale }),
    },
    {
      encodeValuesOnly: true,
    },
  );

  const url = new URL("/api/units-page", apiEndpoint);
  url.search = query;

  const response = await api(url.href, {
    method: "GET",
    authToken: authToken,
  });

  return {
    pageData: response?.data,
  };
};
