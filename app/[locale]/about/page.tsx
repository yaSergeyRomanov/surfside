import { getAboutData } from "@/api/about";
import { LayoutFullFooter } from "@/ui/layouts/layout-full-footer";
import { AboutModule } from "@/ui/modules/about";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";

export const generateMetadata = generateSeoMetadata(getAboutData);

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { pageData } = await getAboutData(locale);

  return (
    <LayoutFullFooter>
      <AboutModule pageData={pageData} />
    </LayoutFullFooter>
  );
}
