import { NavLink } from "@/types/general";

export interface HeaderData {
  headerData: HeaderResponse;
}

export interface HeaderResponse {
  contactUsButton: NavLink;
  navLinks: NavLink[];
}
