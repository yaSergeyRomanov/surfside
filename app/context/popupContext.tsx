import { createContext, useContext } from "react";

interface PopupContextType {
  isShowPopup: boolean;
  updateVisiblePopup: (props: { isShowPopup: boolean }) => void;
}

export const PopupContext = createContext<PopupContextType>({
  isShowPopup: false,
  updateVisiblePopup: (props: { isShowPopup: boolean }) => {},
});

export const useHeader = () => useContext(PopupContext);
