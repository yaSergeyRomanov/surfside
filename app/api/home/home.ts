import qs from "qs";

import { CONFIG } from "@/utils/config";

import { api } from "../instance";

import { HomePageData } from "./types";

const { apiEndpoint, authToken } = CONFIG;

const query = qs.stringify(
  {
    populate: "*",
  },
  {
    encodeValuesOnly: true,
  },
);

export const getChatsData = async (): Promise<HomePageData> => {
  const url = new URL("/api/home", apiEndpoint);
  url.search = query;

  const response = await api(url.href, {
    method: "GET",
    authToken: authToken,
  });

  return response.data;
};
