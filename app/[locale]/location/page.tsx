import { getLocationData } from "@/api/location";
import { LayoutShortFooter } from "@/ui/layouts/layout-short-footer";
import { LocationModule } from "@/ui/modules/location";

const Location = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const { pageData } = await getLocationData(locale);

  return (
    <LayoutShortFooter>
      <LocationModule
        locations={pageData.locations}
        pageTitle={pageData.pageTitle}
        instructionLabel={pageData.instructionLabel}
      />
    </LayoutShortFooter>
  );
};

export default Location;
