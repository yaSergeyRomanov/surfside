import { getHomeData } from "@/api/home";
import { LayoutFullFooter } from "@/ui/layouts/layout-full-footer";
import { HomeModule } from "@/ui/modules/home";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";

export const generateMetadata = generateSeoMetadata(getHomeData);

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { pageData } = await getHomeData(locale);

  return (
    <LayoutFullFooter>
      <HomeModule pageData={pageData} />
    </LayoutFullFooter>
  );
}
