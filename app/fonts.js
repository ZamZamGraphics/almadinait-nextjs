import { Hind_Siliguri, Roboto } from "next/font/google";

export const roboto = Roboto({ 
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export const hind_siliguri = Hind_Siliguri({
  weight: ['400', '700'],
  subsets: ["bengali"],
  display: 'swap'
});