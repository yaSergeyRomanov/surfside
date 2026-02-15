import { ImageEntry } from "@/types/general";

import { getStrapiUrl } from "./formatting-url";

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage: ImageEntry;
}

interface PageData {
  pageData: {
    seo: SEOData;
  };
}

export function generateSeoMetadata(
  getPageData: (locale: string) => Promise<PageData>,
) {
  return async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }) {
    const { locale } = await params;
    const { pageData } = await getPageData(locale);
    const SEO = pageData.seo;

    let ogLocale = "en_EN";

    if (locale) {
      switch (locale) {
        case "ru":
          ogLocale = "ru_RU";
          break;
        case "fr":
          ogLocale = "fr_FR";
          break;
      }
    }

    return {
      title: SEO.title,
      description: SEO.description,
      keywords: SEO.keywords,
      openGraph: {
        title: SEO.ogTitle || SEO.title,
        description: SEO.ogDescription || SEO.description,
        locale: ogLocale,
        images: [
          {
            url: getStrapiUrl(SEO.ogImage.url),
            alt: SEO.ogTitle || SEO.title,
          },
        ],
      },
      other: {
        "og:image:width": "1200",
        "og:image:height": "630",
      },
    };
  };
}
