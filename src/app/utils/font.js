import { Roboto } from "next/font/google";

const robotoBold = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["900"],
});

const robotoLight = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-variable",
  weight: ["400"],
});

export { robotoBold, robotoLight };
