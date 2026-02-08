import { FormLabels, NavLink } from "@/types/general";

export interface FooterData {
  footerData: FooterResponse;
}

export interface FooterResponse {
  title: string;
  subTitle: string;
  form: FormLabels;
  navLinks: NavLink[];
}
