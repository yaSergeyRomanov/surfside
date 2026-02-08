"use client";

import { useEffect, useState } from "react";

import { getFooterData } from "@/api/footer";
import { FooterResponse } from "@/api/footer/types";

export function useFooterDefaultData(locale: string) {
  const [data, setData] = useState<FooterResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFooterData(locale);
        setData(result.footerData);
      } catch (err) {
        console.error("Error fetching header data:", err);
      }
    };

    fetchData();
  }, [locale]);

  return { data };
}
