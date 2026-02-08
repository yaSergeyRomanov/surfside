import qs from "qs";

import { CONFIG } from "@/utils/config";

import { api } from "../instance";

import { ContactsPageData } from "./types";

const { apiEndpoint, authToken } = CONFIG;

export const getContactsData = async (
  locale?: string,
): Promise<ContactsPageData> => {
  const query = qs.stringify(
    {
      populate: "*",
      ...(locale && { locale }),
    },
    {
      encodeValuesOnly: true,
    },
  );

  const url = new URL("/api/contacts-page", apiEndpoint);
  url.search = query;

  const response = await api(url.href, {
    method: "GET",
    authToken: authToken,
  });

  return {
    pageData: response.data,
  };
};
