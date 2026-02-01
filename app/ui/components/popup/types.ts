import { ReactNode } from "react";

export interface PopupProps {
  isShow: boolean;
  children: ReactNode;
  triggerButton?: ReactNode;
  onClose: () => void;
}
