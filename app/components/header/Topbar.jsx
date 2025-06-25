import { roboto } from "@/app/fonts";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Topbar() {
  return (
    <div className={`row text-base py-3.5 ${roboto.className}`}>
      <div className="col-12 sm:col-6 flex flex-col md:flex-row items-start gap-2 md:gap-8">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faPhoneVolume}
            className="text-lime-500 size-4"
          />
          ০১৭৩৬-৭২২৬২২
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-lime-500 size-4"
          />{" "}
          ফখরে বাঙ্গাল রোড,কান্দিপাড়া, ব্রাহ্মণবাড়িয়া ৩৪০০
        </div>
      </div>
      <div className="col-12 sm:col-6 mt-5 sm:mt-0 text-end text-lime-500 font-bold">
        কম্পিউটার ও ফ্রীল্যান্সিং কোর্সে ভর্তি চলছে! বিস্তারিত জানতে ইনবক্স
        করুন।
      </div>
    </div>
  );
}

export default Topbar;
