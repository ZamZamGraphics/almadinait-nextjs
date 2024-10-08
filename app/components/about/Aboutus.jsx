import aboutImage from "@/public/images/about-img.png";
import { faGraduationCap, faPersonChalkboard, faSackDollar } from "@fortawesome/free-solid-svg-icons";
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
                    <h2 className="mb-6 text-5xl text-gray-900 font-bold leading-snug">আমাদের <span className="text-lime-500">সম্পর্কে</span></h2>
                    <div className="flex flex-col self-stretch items-start gap-4">
                        <p>
                            লরেম ইপ্সাম ডলর সিট আমেত, কনসেক্টেচুর অ্যাডিপিস্কিং এলিট নানসি আল্ট্রিচিস ভ্যারিয়াস আউগিউ ইউ ফ্যাউসিবাস ইন প্যালেনটেস্কিউ
                        </p>
                        <p>
                            এলিকুয়াম, রিউট্রাম রাইসাস এট, পরতিটর লরেম আয়েনান স্যাড এনিম লুকাস সেড ইয়াকিউলাস এরাট আইডি ম্যাক্সিমাস হেন্ড্রেরিট নিউলাম এ এফিকিটার ইরস। স্যাড ইউ টিনসিডান্ট ফেলিস, এ অ্যাকিউমসান এক্স
                        </p>
                    </div>
                </div>
                <Link href="#" className="py-3 px-6 rounded-lg border border-lime-500 hover:text-white hover:bg-lime-500">আরো জানুন</Link>
                <div className="flex flex-col items-start gap-6">
                    <h3 className="text-4xl text-gray-900 font-bold">
                        সফলতার <span className="text-lime-500">১১ বছর</span>
                    </h3>
                    <div className="row">
                        <div className="col mb-6">
                            <div className="flex p-6 flex-col items-start gap-4 rounded-2xl bg-white shadow-md">
                                <div className="size-14 flex flex-shrink-0 rounded-xl text-lime-500 bg-[#F2FAEB] items-center justify-center text-3xl">
                                    <FontAwesomeIcon icon={faGraduationCap} className="size-8" />
                                </div>
                                <div>
                                    <p className="text-3xl text-lime-500 font-bold">৭০০০+</p>
                                    <p>র্সবমোট শিক্ষার্থী  ট্রেনিং নিয়েছেন</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-6">
                            <div className="flex p-6 flex-col items-start gap-4 rounded-2xl bg-white shadow-md">
                                <div className="size-14 flex flex-shrink-0 rounded-xl text-lime-500 bg-[#F2FAEB] items-center justify-center text-3xl">
                                    <FontAwesomeIcon icon={faSackDollar} className="size-7" />
                                </div>
                                <div>
                                    <p className="text-3xl text-lime-500 font-bold">১৫০০+</p>
                                    <p>সফল ফ্রিল্যান্সার ও উদ্যোক্তা</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-6">
                            <div className="flex p-6 flex-col items-start gap-4 rounded-2xl bg-white shadow-md">
                                <div className="size-14 flex flex-shrink-0 rounded-xl text-lime-500 bg-[#F2FAEB] items-center justify-center text-3xl">
                                    <FontAwesomeIcon icon={faPersonChalkboard} className="size-8" />
                                </div>
                                <div>
                                    <p className="text-3xl text-lime-500 font-bold">১০+</p>
                                    <p>শিক্ষক আমাদের প্রতিষ্ঠানে</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutus