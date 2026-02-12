import { getInvestmentData } from "@/api/investment";
import { LayoutFullFooter } from "@/ui/layouts/layout-full-footer";
import { InvestmentModule } from "@/ui/modules/investment";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";

export const generateMetadata = generateSeoMetadata(getInvestmentData);

export default async function Investment() {
  const { pageData } = await getInvestmentData();

  return (
    <LayoutFullFooter>
      <InvestmentModule pageData={pageData} />
    </LayoutFullFooter>
  );
}
