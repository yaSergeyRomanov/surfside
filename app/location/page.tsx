import { getLocationData } from "@/api/location";
import { LayoutShortFooter } from "@/ui/layouts/layout-short-footer";
import { LocationModule } from "@/ui/modules/location";

const Location = async () => {
  const { pageData } = await getLocationData();

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
