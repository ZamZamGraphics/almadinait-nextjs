import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";

function Topbar() {
  return (
    <div className="row text-base py-3.5">
        <div className="md:col-6 flex items-start gap-8">
            <div className="flex items-center gap-2">
              <FaPhoneVolume className="text-lime-500" />০১৭৩৬-৭২২৬২২
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-lime-500" /> ফখরে বাঙ্গাল রোড,কান্দিপাড়া, ব্রাহ্মণবাড়িয়া ৩৪০০
            </div>
        </div>
        <div className="md:col-6 text-end text-lime-500 font-bold">
            লাইবেরিয়ান ছাত্র ছাত্রীদের জন্য সমস্ত কোর্স ২৫% ছাড়।
        </div>
    </div>
  )
}

export default Topbar