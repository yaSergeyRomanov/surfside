import { getUnitsData } from "@/api/units";
import { LayoutShortFooter } from "@/ui/layouts/layout-short-footer";
import { UnitsModule } from "@/ui/modules/units";

const Units = async () => {
  const { pageData } = await getUnitsData();

  return (
    <LayoutShortFooter>
      <UnitsModule
        units={pageData.units}
        pageTitle={pageData.pageTitle}
        moreInfoButtonLabel={pageData.moreInfoButtonLabel}
      />
    </LayoutShortFooter>
  );
};

export default Units;
