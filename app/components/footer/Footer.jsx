import footerImage from "@/public/images/footer-logo.png";
import {
  faFacebook,
  faGoogle,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="pt-28 md:pt-[150px] bg-slate-950 text-gray-400">
      <div className="container">
        <div className="row py-28">
          <div className="col-12 md:col-3 mb-5">
            <div className="flex flex-col items-start gap-8">
              <Link href="/">
                <Image src={footerImage} className="" alt="" />
              </Link>
              <p>Leading IT Institute in Brahmanbaria</p>
              <div className="flex items-center justify-end gap-6">
                <span>
                  <Link
                    href="https://www.facebook.com/almadinait"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-lime-500 size-6"
                    />
                  </Link>
                </span>
                <span>
                  <Link
                    href="https://maps.app.goo.gl/j46ABg7PXR7cm2Xf7"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGoogle}
                      className="text-lime-500 size-6"
                    />
                  </Link>
                </span>
                <span>
                  <Link href="https://x.com/almadinait" target="_blank">
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className="text-lime-500 size-6"
                    />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-12 md:col-5 mb-5">
            <h4 className="text-2xl font-semibold text-white mb-5">
              কোর্স সমূহ
            </h4>
            <div className="flex items-start gap-20">
              <ul className="flex flex-col items-start gap-2">
                <li>অফিস অ্যাপ্লিকেশন</li>
                <li>গ্রাফিক ডিজাইন ও ফ্রিল্যান্সিং</li>
                <li>ফুলস্টাক ওয়েব ডেভোলপমেন্ট</li>
                <li>ভিডিও এডিটিং ও মোশন গ্রাফিক্স</li>
              </ul>
              <ul className="flex flex-col items-start gap-2">
                <li>হার্ডরওয়্যার এন্ড নেটওয়ার্কিং</li>
                <li>অটোক্যাড</li>
                <li>এডভান্স এক্সেল ও পাওয়ারপয়েন্ট</li>
                <li>স্পোকেন ইংলিশ</li>
              </ul>
            </div>
          </div>
          <div className="col-12 md:col-3 mb-5">
            <h4 className="text-2xl font-semibold text-white mb-5">যোগাযোগ</h4>
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-start self-stretch gap-4">
                <span className="mt-1">
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    className="text-lime-500 size-5"
                  />
                </span>
                <div className="flex flex-col items-start">
                  <span>+৮৮০ ১৭৩৬ ৭২২৬২২</span>
                  <span>+৮৮০ ১৯৭৬ ৭২২৬১১</span>
                </div>
              </div>
              <div className="flex items-start self-stretch gap-4">
                <span className="mt-1">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-lime-500 size-5"
                  />
                </span>
                <div className="flex flex-col items-start">
                  <span>almadinait@gmail.com</span>
                  <span>almadinait.bd@gmail.com</span>
                </div>
              </div>
              <div className="flex items-start self-stretch gap-4">
                <span className="mt-1">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-lime-500 size-5"
                  />
                </span>
                <div className="flex flex-col items-start">
                  <span>ফখরে বাঙ্গাল রোড,কান্দিপাড়া,</span>
                  <span>ব্রাহ্মণবাড়িয়া ৩৪০০</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-8 border-t border-slate-900">
          <div className="col-12 md:col-6">
            <p className="text-sm text-center md:text-left">
              Copyright © 2024 Al-Madina IT Institute. All right reserved |
              Developed By: ZamZam Graphics
            </p>
          </div>
          <div className="col-12 md:col-6 flex items-center justify-center md:justify-end gap-2 md:gap-5 text-sm">
            <span>
              <Link href="#">Publisher Terms</Link>
            </span>
            <span>
              <Link href="#">Terms of Services</Link>
            </span>
            <span>
              <Link href="#">Privacy & Policy</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
