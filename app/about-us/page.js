import Gallery from "../components/gallery/Gallery";
import GroupImage from "@/public/groupimages.jpg"
import Image from "next/image";

function AboutUs() {
  return (
    <div className="container py-28">
      <div className="row mb-12">
        <div className="col-12 md:col-6">
          <div className="p-5 mb-5 bg-white border border-lime-500 rounded-2xl">
            <h2 className="text-3xl text-gray-900 font-bold leading-snug">
              আমাদের সম্পর্কে
            </h2>
            <p>
              আল মদিনা আইটি ইনস্টিটিউট, আইটিতে সাফল্য সৃষ্টির লক্ষ্যে প্রতিষ্ঠিত
              একটি বিশ্বস্ত প্রতিষ্ঠান। প্রতিষ্ঠার পর থেকে, ক্রিয়েটিভ আইটি
              সুদীর্ঘ ১৬ বছর ধরে ডিজিটাল বাংলাদেশ বিনির্মাণে অবদান রেখে চলেছে
              এবং যুগান্তকারী পরিবর্তনের মাধ্যমে বহুমুখী সাফল্য অর্জন করছে।
              বাংলাদেশের অন্যতম এই আইটি প্রতিষ্ঠানটি ২০০৮ সাল থেকে বেকার সমস্যা
              দূর করতেও গুরুত্বপূর্ণ ভূমিকা পালন করে আসছে।
            </p>
          </div>
          <div className="p-5 mb-5 bg-lime-500 text-white rounded-2xl">
            <h2 className="text-3xl text-white font-bold leading-snug">
              আমাদের মাইলফলক
            </h2>
            <p>
              আল মদিনা আইটি ইনস্টিটিউট, ১৬ বছর ধরে প্রায় ৯০ হাজারেরও বেশি
              শিক্ষার্থীকে মানসম্মত আইটি প্রশিক্ষণ দেওয়ার পাশাপাশি তাদের
              কর্মসংস্থানের সুযোগ সৃষ্টি করেছে।
            </p>
          </div>
        </div>
        <div className="col-12 md:col-6">
          <Image
            src={GroupImage}
            width={800}
            height={500}
            alt="Al-Madina IT Group Photo"
            className="rounded-2xl"
            placeholder="blur"
          />
        </div>
      </div>
      <Gallery />
    </div>
  );
}

export default AboutUs;
