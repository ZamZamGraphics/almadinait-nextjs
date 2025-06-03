import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import SwitchLanguage from "../SwitchLanguage";
import Topbar from "./Topbar";
import NavLink from "./NavLink";
import VerifyButton from "./VerifyButton";

function Header() {
  return (
    <div className="container">
      <Topbar />
      <div className="row">
        <nav className="flex justify-between items-center py-5 px-6 rounded-2xl bg-white shadow border border-gray-100">
          <div className="flex justify-center items-center flex-shrink-0 w-[200px] h-auto">
            <Link href="/">
              <Image src={logo} alt="Logo" />
            </Link>
          </div>
          <ul className="md:flex items-center md:gap-2 lg:gap-5 xl:gap-8  hidden">
            <NavLink path="/" title="হোম" />
            <NavLink path="/about-us" title="আমাদের সম্পর্কে" />
            <NavLink path="/courses" title="কোর্স সমূহ" />
            <NavLink path="/freelancing" title="ফ্রিল্যান্সিং" />
            <NavLink path="/gallery" title="গ্যালারি" />
            <NavLink path="/contact-us" title="যোগাযোগ" />
          </ul>
          <div className="flex justify-end items-center gap-2 lg:gap-8">
            <SwitchLanguage />
            <VerifyButton />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
