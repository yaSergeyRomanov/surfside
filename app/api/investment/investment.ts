import qs from "qs";

import { CONFIG } from "@/utils/config";

import { api } from "../instance";

import { InvestmentPageData } from "./types";

const { apiEndpoint, authToken } = CONFIG;

export const getInvestmentData = async (
  locale?: string,
): Promise<InvestmentPageData> => {
  const query = qs.stringify(
    {
      populate: [
        "numbers",
        "chart",
        "marquee",
        "profitCard1",
        "profitCard2",
        "priceCard1",
        "priceCard1.button",
        "priceCard2",
        "priceCard2.button",
        "seo",
        "seo.ogImage",
      ],
      ...(locale && { locale }),
    },
    {
      encodeValuesOnly: true,
    },
  );

  const url = new URL("/api/investment-page", apiEndpoint);
  url.search = query;

  const response = await api(url.href, {
    method: "GET",
    authToken: authToken,
  });

  return {
    pageData: response.data,
  };
};
