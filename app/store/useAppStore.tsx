import { create } from "zustand";

import { FormLabels } from "@/types/general";

interface AppState {
  locale: string;
  updateLocale: (newLocale: string) => void;
  headerTheme: "default" | "black" | "black-2" | "white";
  isLiftUp: boolean;
  isColoredWhite: boolean;
  isColoredBlue: boolean;
  updateHeader: (props: {
    theme: "default" | "black" | "black-2" | "white";
    isLiftUp?: boolean;
    isColoredWhite?: boolean;
    isColoredBlue?: boolean;
  }) => void;
  formLabels: FormLabels;
  updateFormLabels: (labels: FormLabels) => void;
}

export const useAppStore = create<AppState>((set) => ({
  locale: "",
  updateLocale: (newLocale: string) => set({ locale: newLocale }),
  headerTheme: "default",
  isLiftUp: false,
  isColoredWhite: false,
  isColoredBlue: false,
  updateHeader: (props) =>
    set((state) => ({
      headerTheme: props.theme,
      isLiftUp: props.isLiftUp ?? state.isLiftUp,
      isColoredWhite: props.isColoredWhite ?? state.isColoredWhite,
      isColoredBlue: props.isColoredBlue ?? state.isColoredBlue,
    })),
  formLabels: {
    yourNameLabel: "",
    yourPhoneLabel: "",
    howToContactYouLabel: "",
    emailLabel: "",
    messageLabel: "",
    agreementLabel: "",
    submitButtonLabel: "",
    closePopupButtonLabel: "",
    popupTitle: "",
    popupSubtitle: "",
  },
  updateFormLabels: (labels: FormLabels) => set({ formLabels: labels }),
}));

export const useHeaderTheme = () => useAppStore((state) => state.headerTheme);
export const useIsLiftUp = () => useAppStore((state) => state.isLiftUp);
export const useIsColoredWhite = () =>
  useAppStore((state) => state.isColoredWhite);
export const useIsColoredBlue = () =>
  useAppStore((state) => state.isColoredBlue);
export const useUpdateHeader = () => useAppStore((state) => state.updateHeader);
export const useLocale = () => useAppStore((state) => state.locale);
export const useUpdateLocale = () => useAppStore((state) => state.updateLocale);
export const useFormLabels = () => useAppStore((state) => state.formLabels);
export const useUpdateFormLabels = () =>
  useAppStore((state) => state.updateFormLabels);
