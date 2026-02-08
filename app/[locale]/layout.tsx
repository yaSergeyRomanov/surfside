import { LayoutDefault } from "@/ui/layouts/layout-default";

import "@/ui/styles/main.scss";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return <LayoutDefault locale={locale}>{children}</LayoutDefault>;
}
