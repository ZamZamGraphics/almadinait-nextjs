"use client";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import SwitchLanguage from "../SwitchLanguage";
import Topbar from "./Topbar";
import NavLink from "./NavLink";
import VerifyButton from "./VerifyButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <Topbar />
      <nav className="row py-5 px-6 rounded-2xl bg-white shadow border border-gray-100 gap-4 md:gap-0">
        <div className="sm:col-12 md:col-4">
          <div className="flex items-center justify-between">
            <div className="flex justify-center items-center flex-shrink-0 w-[200px] h-auto">
              <Link href="/">
                <Image src={logo} alt="Al Madina IT" />
              </Link>
            </div>
            <button
              className="flex sm:hidden"
              onClick={() => setOpen(!open)}
            >
              <FontAwesomeIcon
                icon={faBars}
                className=''
              />
            </button>
          </div>
        </div>
        <div className="sm:col-12 md:col-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-end gap-5">
            <ul className={`sm:flex ${open ? "" : "hidden"} flex-col sm:flex-row gap-2 md:gap-4 lg:gap-8`}>
              <NavLink path="/" title="হোম" setOpen={setOpen} />
              <NavLink path="/about-us" title="আমাদের সম্পর্কে" setOpen={setOpen} />
              <NavLink path="/gallery" title="গ্যালারি" setOpen={setOpen} />
              <NavLink path="/contact-us" title="যোগাযোগ" setOpen={setOpen} />
            </ul>
            <div className="flex justify-end items-center gap-2 lg:gap-8">
              <SwitchLanguage />
              <VerifyButton />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
