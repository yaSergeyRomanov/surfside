import { createContext, useContext } from "react";

interface HeaderContextType {
  theme: string;
  isLiftUp: boolean;
  isColoredWhite: boolean;
  updateHeader: (props: {
    theme: "default" | "black" | "white";
    isLiftUp?: boolean;
    isColoredWhite?: boolean;
  }) => void;
}

export const HeaderContext = createContext<HeaderContextType>({
  theme: "default",
  isLiftUp: false,
  isColoredWhite: false,
  updateHeader: () => {},
});

export const useHeader = () => useContext(HeaderContext);
