import { Seo } from "@/types/general";

export interface ContactsPageData {
  pageData: ContactsPageResponse;
}

export interface ContactsPageResponse {
  pageTitle: string;
  sendRequestButtonLabel: string;
  seo: Seo;
}
