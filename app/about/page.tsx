import { getAboutData } from "@/api/about";
import { LayoutFullFooter } from "@/ui/layouts/layout-full-footer";
import { AboutModule } from "@/ui/modules/about";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";

export const generateMetadata = generateSeoMetadata(getAboutData);

export default async function About() {
  const { pageData } = await getAboutData();

  return (
    <LayoutFullFooter>
      <AboutModule pageData={pageData} />
    </LayoutFullFooter>
  );
}
