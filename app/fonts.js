import localFont from "next/font/local";

export const roboto = localFont({
  src: [
    { path: "../public/fonts/Roboto-Regular.ttf", weight: "400" },
    { path: "../public/fonts/Roboto-Medium.ttf", weight: "500" },
    { path: "../public/fonts/Roboto-Bold.ttf", weight: "700" },
  ],
});

export const hind_siliguri = localFont({
  src: [
    { path: "../public/fonts/HindSiliguri-Regular.ttf", weight: "400" },
    { path: "../public/fonts/HindSiliguri-Medium.ttf", weight: "500" },
    { path: "../public/fonts/HindSiliguri-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/HindSiliguri-Bold.ttf", weight: "700" },
  ],
  variable: "--font-hind-siliguri",
});

export const noto_sans_bengali = localFont({
  src: [
    { path: "../public/fonts/NotoSansBengali-Regular.ttf", weight: "400" },
    { path: "../public/fonts/NotoSansBengali-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/NotoSansBengali-Bold.ttf", weight: "700" },
    { path: "../public/fonts/NotoSansBengali-Black.ttf", weight: "900" },
  ],
  variable: "--font-noto-sans-bengali",
});
