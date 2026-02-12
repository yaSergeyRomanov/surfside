import { getInvestmentData } from "@/api/investment";
import { LayoutFullFooter } from "@/ui/layouts/layout-full-footer";
import { InvestmentModule } from "@/ui/modules/investment";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";

export const generateMetadata = generateSeoMetadata(getInvestmentData);

const Location = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const { pageData } = await getInvestmentData(locale);

  return (
    <LayoutFullFooter>
      <InvestmentModule pageData={pageData} />
    </LayoutFullFooter>
  );
};

export default Location;
