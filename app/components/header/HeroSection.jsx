import heroImage from "@/public/images/hero-img-main.png";
import { faGraduationCap, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Button from "../Button";

function HeroSection() {
  return (
    <div className="container">
            <div className="row py-[100px]">
                <div className="md:col-5 flex items-start justify-center flex-col gap-10">
                    <div className="flex flex-col items-start self-stretch gap-6">
                        <div className="flex flex-col justify-end items-start self-stretch gap-8">
                            <span className="py-2 px-3 rounded-lg border-l-4 border-lime-500 text-lime-500 bg-white shadow-sm text-xl font-medium">অবসরে বেকার বসে না থেকে</span>
                            <h2 className="text-6xl text-gray-900 font-bold leading-snug">আইটি সেক্টরে <span className="text-lime-500">স্কিল ডেভোলপমেন্ট</span> হতে পারে সময়ের সেরা সিদ্ধান্ত</h2>
                        </div>
                        <p className="text-xl">অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে আল-মদিনা আইটি ইনস্টিটিউট প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। আমাদের ১০টিরও বেশি ট্রেন্ডি কোর্স থেকে আজই বেছে নিন আপনার পছন্দের কোর্স।</p>
                    </div>
                    <Button icon={faPhoneVolume}>যোগাযোগ করুন</Button>
                </div>
                <div className="md:col-7">
                    <div className="flex items-center justify-center relative">
                        <Image src={heroImage} alt="Hero Image" />
                        <div className="absolute inline-flex flex-col items-center gap-4 text-center z-10 top-[6%] left-[35%] bg-white p-3 rounded-2xl shadow-xl">
                            <FontAwesomeIcon icon={faGraduationCap} className="text-lime-500 size-10" />
                            <div>
                                <h4 className="text-lime-500 text-3xl font-semibold">৬৫০০ +</h4>
                                <span>মোট শিক্ষার্থী</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HeroSection