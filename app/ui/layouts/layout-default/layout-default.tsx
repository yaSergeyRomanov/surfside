"use client";

import { ReactNode, useCallback, useMemo, useState } from "react";

import { HeaderContext } from "@/context/headerContext";
import { Header } from "@/ui/components/header";
import { golos, pragmatica } from "@/utils/next-fonts";

export const LayoutDefault = ({ children }: { children: ReactNode }) => {
  const [headerProps, setHeaderProps] = useState({
    theme: "default",
    isLiftUp: false,
    isColoredWhite: false,
  });

  const updateHeader = useCallback((newProps: { theme: string }) => {
    setHeaderProps((prev) => ({ ...prev, ...newProps }));
  }, []);

  const contextValue = useMemo(
    () => ({
      theme: headerProps.theme,
      isLiftUp: headerProps.isLiftUp,
      isColoredWhite: headerProps.isColoredWhite,
      updateHeader,
    }),
    [
      headerProps.theme,
      headerProps.isLiftUp,
      headerProps.isColoredWhite,
      updateHeader,
    ],
  );

  return (
    <html lang="en">
      <body className={`${pragmatica.variable} ${golos.variable}`}>
        <HeaderContext value={contextValue}>
          <Header />
          {children}
        </HeaderContext>
      </body>
    </html>
  );
};
