import qs from "qs";

import { CONFIG } from "@/utils/config";

import { api } from "../instance";

import { LocationPageData } from "./types";

const { apiEndpoint, authToken } = CONFIG;

export const getLocationData = async (
  locale?: string,
): Promise<LocationPageData> => {
  const query = qs.stringify(
    {
      populate: ["locations", "locations.images", "seo", "seo.ogImage"],
      ...(locale && { locale }),
    },
    {
      encodeValuesOnly: true,
    },
  );

  const url = new URL("/api/location-page", apiEndpoint);
  url.search = query;

  const response = await api(url.href, {
    method: "GET",
    authToken: authToken,
  });

  return {
    pageData: response.data,
  };
};
