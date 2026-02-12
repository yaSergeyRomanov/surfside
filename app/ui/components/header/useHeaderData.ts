"use client";

import { useLayoutEffect, useState } from "react";

import { getHeaderData } from "@/api/header";
import { HeaderResponse } from "@/api/header/types";

export function useHeaderData(locale: string) {
  const [data, setData] = useState<HeaderResponse | null>(null);

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getHeaderData(locale);
        setData(result.headerData);
      } catch (err) {
        console.error("Error fetching header data:", err);
      }
    };

    fetchData();
  }, [locale]);

  return { data };
}
