import { getUnitsData } from "@/api/units";
import { LayoutShortFooter } from "@/ui/layouts/layout-short-footer";
import { UnitsModule } from "@/ui/modules/units";

const Units = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const { pageData } = await getUnitsData(locale);

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
