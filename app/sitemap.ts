import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://booking.surfsidebali.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL}/en`,
          fr: `${BASE_URL}/fr_FR`,
        },
      },
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL}/en/about`,
          fr: `${BASE_URL}/fr_FR/about`,
        },
      },
    },
    {
      url: `${BASE_URL}/contacts`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL}/en/contacts`,
          fr: `${BASE_URL}/fr_FR/contacts`,
        },
      },
    },
    {
      url: `${BASE_URL}/location`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL}/en/location`,
          fr: `${BASE_URL}/fr_FR/location`,
        },
      },
    },
    {
      url: `${BASE_URL}/units`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL}/en/units`,
          fr: `${BASE_URL}/fr_FR/units`,
        },
      },
    },
    {
      url: `${BASE_URL}/investment`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL}/en/investment`,
          fr: `${BASE_URL}/fr_FR/investment`,
        },
      },
    },
  ];
}
