import localFont from "next/font/local";

export const pragmatica = localFont({
  src: [
    {
      path: "../ui/fonts/pragmatica_extended-book.ttf",
      weight: "400",
    },
    {
      path: "../ui/fonts/pragmatica_extended-extra-light.ttf",
      weight: "200",
    },
  ],
  display: "swap",
  variable: "--font-pragmatica",
});

export const golos = localFont({
  src: [
    {
      path: "../ui/fonts/golos_regular.ttf",
      weight: "400",
    },
    {
      path: "../ui/fonts/GolosText-Medium.ttf",
      weight: "500",
    },
    {
      path: "../ui/fonts/GolosText-Bold.ttf",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-golos",
});
