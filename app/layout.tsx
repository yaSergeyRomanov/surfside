import type { Metadata } from "next";

import { headers } from "next/headers";
import Script from "next/script";

import { chatConfig } from "@/lib/chat-config";
import { golos, pragmatica } from "@/utils/next-fonts";

import "./ui/styles/main.scss";

export const metadata: Metadata = {
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        url: "/favicon/favicon-196x196.png",
        sizes: "196x196",
        type: "image/png",
      },
      { url: "/favicon/favicon-128.png", sizes: "128x128", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/favicon/apple-touch-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/favicon/apple-touch-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/favicon/apple-touch-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/favicon/apple-touch-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/favicon/apple-touch-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/favicon/apple-touch-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/favicon/apple-touch-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "image_src",
        url: "/favicon/social_1200_630_jpg_5_100.jpg",
      },
    ],
  },
  openGraph: {
    images: [
      {
        url: "/favicon/social_1200_630_jpg_5_100.jpg",
        type: "image/jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
  other: {
    "format-detection": "telephone=no",
    "msapplication-TileImage": "/favicon/mstile-144x144.png",
    "msapplication-square70x70logo": "/favicon/mstile-70x70.png",
    "msapplication-square150x150logo": "/favicon/mstile-150x150.png",
    "msapplication-wide310x150logo": "/favicon/mstile-310x150.png",
    "msapplication-square310x310logo": "/favicon/mstile-310x310.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") ||
    "ru") as keyof typeof chatConfig;
  const config = chatConfig[locale];

  return (
    <html lang={locale} className={`${pragmatica.variable} ${golos.variable}`}>
      <body>
        {children}

        <Script
          src="https://my.glagol.ai/static/office/glagol_chat_loader.min.js"
          data-login="hotels.at.glagol.ai"
          data-project="surf_bot"
          data-token={config?.token}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
