import { Hind_Siliguri, Roboto, Noto_Sans_Bengali } from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const hind_siliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["bengali"],
  display: "swap",
  variable: "--font-hind-siliguri",
});

export const noto_sans_bengali = Noto_Sans_Bengali({
  weight: ["400", "600", "700", "900"],
  subsets: ["bengali"],
  display: "swap",
  variable: "--font-noto-sans-bengali",
});
