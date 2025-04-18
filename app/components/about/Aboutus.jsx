import aboutImage from "@/public/images/about-img.png";
import {
  faGraduationCap,
  faPersonChalkboard,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function Aboutus() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 lg:col-5 xl:col-7 mb-6 flex justify-center items-center">
          <Image src={aboutImage} alt="About Image" />
        </div>
        <div className="col-12 lg:col-7 xl:col-5 mb-6 inline-flex flex-col items-start gap-12">
          <div className="inline-flex flex-col items-start">
            <h2 className="mb-6 text-5xl text-gray-900 font-bold leading-snug">
              আমাদের <span className="text-lime-500">সম্পর্কে</span>
            </h2>
            <div className="flex flex-col self-stretch items-start gap-4">
              <p>
                আল-মদিনা আইটি ইনস্টিটিউট, ব্রাহ্মণবাড়িয়াতে দীর্ঘ দিন আইটি
                সেক্টরে দক্ষ কারিগর তৈরী করে কর্মসংস্থানের লক্ষ্যে কাজ করে
                যাচ্ছে। প্রতিষ্ঠার পর থেকে, সুদীর্ঘ ১৪ বছর ধরে সমৃদ্ধ বাংলাদেশ
                বিনির্মাণে অবদান রেখে চলেছে এবং যুগান্তকারী পরিবর্তনের মাধ্যমে
                বহুমুখী সাফল্য অর্জন করছে। ব্রাহ্মণবাড়িয়ায় অন্যতম এই আইটি
                প্রতিষ্ঠানটি ২০১১ সাল থেকে বেকার সমস্যা দূর করতেও গুরুত্বপূর্ণ
                ভূমিকা পালন করে আসছে।
              </p>
            </div>
          </div>
          <Link
            href="#"
            className="py-3 px-6 rounded-lg border border-lime-500 hover:text-white hover:bg-lime-500"
          >
            আরো জানুন
          </Link>
          <div className="flex flex-col items-start gap-6">
            <h3 className="text-4xl text-gray-900 font-bold">
              সফলতার <span className="text-lime-500">১৪ বছর</span>
            </h3>
            <div className="row">
              <div className="col mb-6">
                <div className="flex p-6 flex-col items-start gap-4 rounded-2xl bg-white shadow-md">
                  <div className="size-14 flex flex-shrink-0 rounded-xl text-lime-500 bg-[#F2FAEB] items-center justify-center text-3xl">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className="size-8"
                    />
                  </div>
                  <div>
                    <p className="text-3xl text-lime-500 font-bold">১২০০০+</p>
                    <p>র্সবমোট শিক্ষার্থী ট্রেনিং নিয়েছেন</p>
                  </div>
                </div>
              </div>
              <div className="col mb-6">
                <div className="flex p-6 flex-col items-start gap-4 rounded-2xl bg-white shadow-md">
                  <div className="size-14 flex flex-shrink-0 rounded-xl text-lime-500 bg-[#F2FAEB] items-center justify-center text-3xl">
                    <FontAwesomeIcon icon={faSackDollar} className="size-7" />
                  </div>
                  <div>
                    <p className="text-3xl text-lime-500 font-bold">৪৫০০+</p>
                    <p>সফল ফ্রিল্যান্সার ও উদ্যোক্তা</p>
                  </div>
                </div>
              </div>
              <div className="col mb-6">
                <div className="flex p-6 flex-col items-start gap-4 rounded-2xl bg-white shadow-md">
                  <div className="size-14 flex flex-shrink-0 rounded-xl text-lime-500 bg-[#F2FAEB] items-center justify-center text-3xl">
                    <FontAwesomeIcon
                      icon={faPersonChalkboard}
                      className="size-8"
                    />
                  </div>
                  <div>
                    <p className="text-3xl text-lime-500 font-bold">১৫+</p>
                    <p>শিক্ষক ট্রেনিং দিচ্ছেন</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
