import { getContactsData } from "@/api/contacts";
import { LayoutShortFooter } from "@/ui/layouts/layout-short-footer";
import { ContactsModule } from "@/ui/modules/contacts";

export default async function Contacts() {
  const { pageData } = await getContactsData();

  return (
    <LayoutShortFooter>
      <ContactsModule
        pageTitle={pageData.pageTitle}
        sendRequestButtonLabel={pageData.sendRequestButtonLabel}
      />
    </LayoutShortFooter>
  );
}
