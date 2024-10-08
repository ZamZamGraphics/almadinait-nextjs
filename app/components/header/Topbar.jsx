import { roboto } from "@/app/fonts"
import { faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Topbar() {
  return (
    <div className={`row text-base py-3.5 ${roboto.className}`}>
        <div className="md:col-6 flex items-start gap-8">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhoneVolume} className="text-lime-500 size-4" />০১৭৩৬-৭২২৬২২
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-lime-500 size-4" /> ফখরে বাঙ্গাল রোড,কান্দিপাড়া, ব্রাহ্মণবাড়িয়া ৩৪০০
            </div>
        </div>
        <div className="md:col-6 text-end text-lime-500 font-bold">
            লাইবেরিয়ান ছাত্র ছাত্রীদের জন্য সমস্ত কোর্স ২৫% ছাড়।
        </div>
    </div>
  )
}

export default Topbar