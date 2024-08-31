import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import Topbar from "./Topbar";
import SwitchLanguage from "../SwitchLanguage";

function Header() {
  return (
    <div className="container">
      <Topbar />
      <div className="row">
        <nav className="flex justify-between items-center py-5 px-6 rounded-3xl bg-white shadow-md">
          <div className="flex justify-center items-center flex-shrink-0 w-[200px] h-auto">
            <Link href="/">
              <Image src={logo} alt="Logo" />
            </Link>
          </div>
          <ul className="md:flex items-center md:gap-2 lg:gap-5 xl:gap-8  hidden">
            <li className="text-lime-500">
              <Link href="/">হোম</Link>
            </li>
            <li>
              <Link href="/aboutus">আমাদের সম্পর্কে</Link>
            </li>
            <li>
              <Link href="/courses">কোর্স সমূহ</Link>
            </li>
            <li>
              <Link href="/freelancing">ফ্রিল্যান্সিং</Link>
            </li>
            <li>
              <Link href="/gallery">গ্যালারি</Link>
            </li>
            <li>
              <Link href="/contactus">যোগাযোগ</Link>
            </li>
          </ul>
          <div className="flex justify-end items-center gap-2 lg:gap-8">
            <SwitchLanguage />
            <div className="flex justify-center items-center text-white bg-lime-500 hover:bg-lime-600 rounded-xl shadow-md">
              <Link href="/verify" className="py-3 px-6">
                Verify
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
