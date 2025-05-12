import ListItem from "@/app/components/courses/ListItem";
import Software from "@/app/components/courses/Software";
import { getSingleBatch } from "@/lib/data";
import Image from "next/image";

async function BatchSinglePage({ params }) {
  const { batchid } = params;
  const batch = await getSingleBatch(batchid);
  const courseCurriculum = batch.courseCurriculum.split(/\r?\n/);
  const jobPosition = batch.jobPosition.split(/\r?\n/);

  return (
    <div className="container py-28">
      <div className="row">
        <div className="col-12 md:col-5">
          <h3 className="text-3xl text-black leading-snug">{batch.subTitle}</h3>
          <h3 className="mb-5 text-5xl text-black font-bold leading-snug">
            {batch.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
            <div className="flex flex-col items-center justify-center bg-lime-500 text-white p-2 md:p-3 rounded-xl">
              <span className="text-xl">কোর্সের মেয়াদ</span>
              <span className="text-3xl md:text-4xl font-bold">
                {batch.courseDuration}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-lime-500 text-white p-2 md:p-3 rounded-xl">
              <span className="text-xl">মোট ক্লাস</span>
              <span className="text-3xl md:text-4xl font-bold">
                {batch.totalClass}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-lime-500 text-white p-2 md:p-3 rounded-xl">
              <span className="text-xl">প্যাক্টিকেল কাজ</span>
              <span className="text-3xl md:text-4xl font-bold">
                {batch.practicalWork}
              </span>
            </div>
          </div>
          <p className="mb-5">{batch.excerpt}</p>
        </div>
        <div className="col-12 md:col-7 mb-10">
          <Image
            src={batch.thumbnail}
            width={800}
            height={300}
            alt={batch.title}
            className="rounded-3xl"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 md:col-7">
          <div className="py-5 px-8 mb-8 bg-gray-100 rounded-3xl">
            <h3 className="text-4xl font-semibold mb-3 text-black leading-snug">
              কোর্স কারিকুলাম
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              {courseCurriculum.map((curriculum) => (
                <ListItem key={curriculum} title={curriculum} />
              ))}
            </ul>
          </div>
          <div className="mb-8 bg-green-50 border border-green-200 shadow-md rounded-3xl">
            <h3 className="text-3xl py-1 text-center rounded-t-3xl font-semibold mb-3 bg-lime-500 text-white leading-snug">
              সফটওয়্যার/টুলস
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 py-5 px-8">
              {batch.software.map((soft) => (
                <Software key={soft.id} name={soft.name} icon={soft.icon} />
              ))}
            </ul>
          </div>
          <div className="mb-8 bg-gray-100 border rounded-3xl">
            <h3 className="text-3xl pt-2 text-center rounded-t-3xl mb-3 bg-green-700 text-white leading-snug">
              এই কোর্স শেষে আপনি যে সকল পজিশনে{" "}
              <span className="font-semibold">জব করতে পারবেন</span>
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 py-5 px-8">
              {jobPosition.map((position) => (
                <ListItem key={position} title={position} />
              ))}
            </ul>
          </div>
        </div>
        <div className="col-12 md:col-5">
          <div className="py-5 px-8 mb-8 bg-lime-100 rounded-3xl sticky top-0">
            <h3 className="text-4xl font-semibold text-lime-700 leading-snug">
              ভর্তি চলছে!
            </h3>
            <p className="mb-5">
              অফলাইন (সরাসরি ইনস্টিটিউট) বা অনলাইন (লাইভ ক্লাস)- যে কোন ব্যাচে
              সুবিধামতো সময় বেছে নিয়ে ভর্তি হতে পারেন এখনই।
            </p>
            <div className="flex items-center justify-between bg-green-700 text-white p-4 md:p-8 mb-5 rounded-xl">
              <div className="flex flex-col items-start text-2xl md:text-3xl">
                <span>কোর্স ফি (অফলাইন)</span>
                <span className="font-bold">
                  ৳ {batch.courseFeeOffline} টাকা
                </span>
              </div>
              <div>
                <button className="py-2 px-4 text-black bg-white hover:bg-gray-100 rounded-lg shadow-md">
                  Enrol Now
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between bg-lime-500 text-white p-4 md:p-8 mb-5 rounded-xl">
              <div className="flex flex-col items-start text-2xl md:text-3xl">
                <span>কোর্স ফি (অনলাইন)</span>
                <span className="font-bold">
                  ৳ {batch.courseFeeOnline} টাকা
                </span>
              </div>
              <div>
                <button className="py-2 px-4 text-black bg-white hover:bg-gray-100 rounded-lg shadow-md">
                  Enrol Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BatchSinglePage;
