import 'react-multi-carousel/lib/styles.css';
import Footer from './components/footer/Footer';
import Header from "./components/header/Header";
import { hind_siliguri } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Al Madina IT | Freelancing IT Training Institute in Brahmanbaria",
  description: "Freelancing IT Training Institute in Brahmanbaria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hind_siliguri.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
