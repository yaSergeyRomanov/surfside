import { getContactsData } from "@/api/contacts";
import { LayoutShortFooter } from "@/ui/layouts/layout-short-footer";
import { ContactsModule } from "@/ui/modules/contacts";

export default async function Contacts({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { pageData } = await getContactsData(locale);

  return (
    <LayoutShortFooter>
      <ContactsModule
        pageTitle={pageData.pageTitle}
        sendRequestButtonLabel={pageData.sendRequestButtonLabel}
      />
    </LayoutShortFooter>
  );
}
