import {
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Button from "../Button";
import Video from "../videos/Video";

function HeroSection() {
  return (
    <div className="container">
      <div className="row py-[100px]">
        <div className="md:col-5 flex items-start justify-center flex-col gap-10">
          <div className="flex flex-col items-start self-stretch gap-6">
            <div className="flex flex-col justify-end items-start self-stretch gap-8">
              <span className="py-2 px-3 rounded-lg border-l-4 border-lime-500 text-lime-500 bg-white shadow-sm text-xl font-medium">
                অবসরে বেকার বসে না থেকে
              </span>
              <h2 className="text-3xl md:text-5xl text-gray-900 font-bold leading-snug">
                আইটি সেক্টরে{" "}
                <span className="text-lime-500">স্কিল ডেভোলপমেন্ট</span> হতে
                পারে সময়ের সেরা সিদ্ধান্ত
              </h2>
            </div>
            <p className="text-lg md:text-xl">
              অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে আল-মদিনা আইটি ইনস্টিটিউট
              প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। আমাদের ১০টিরও বেশি
              ট্রেন্ডি কোর্স থেকে আজই বেছে নিন আপনার পছন্দের কোর্স।
            </p>
          </div>
          <Link href="https://wa.me/+8801736722622">
            <Button icon={faPhoneVolume}>যোগাযোগ করুন</Button>
          </Link>
        </div>
        <div className="md:col-7 my-6">
          <Video
            video={{
              id: "3W3pxKUO48k",
              title: "অফিস অ্যাপ্লিকেশন কোর্স ব্যাচ-৩৫০"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
