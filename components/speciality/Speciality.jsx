import {
  faChalkboardUser,
  faList,
  faPersonChalkboard,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Button from "../Button";

function Speciality() {
  return (
    <div className="container mb-28">
      <div className="row">
        <div className="col-12 md:col-4 mb-8 self-center">
          <div className="flex flex-col items-start gap-12">
            <div className="flex flex-col items-start gap-6">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                কেন আমরা সবার চেয়ে{" "}
                <span className="text-lime-500">এগিয়ে</span>
              </h2>
              <p>
                দেশ ও দেশের বাইরে বর্তমানে যে স্কিলগুলোর চাহিদা সবচেয়ে বেশি,
                সেসব দিয়েই সাজানো হয়েছে আমাদের কোর্স লিস্ট। এখান থেকে আপনার
                সুবিধামত অনলাইন বা অফলাইনে কোর্সে এনরোল করতে পারবেন যেকোনো সময়।
              </p>
            </div>
            <Link href="https://www.facebook.com/almadinait">
              <Button icon={faPhoneVolume}>যোগাযোগ করুন</Button>
            </Link>
          </div>
        </div>
        <div className="col-auto md:col-2"></div>
        <div className="col-12 md:col-6 mb-8">
          <div className="row">
            <div className="col-12 sm:col-6">
              <div className="flex flex-col items-start mb-8 py-10 px-8 gap-8 rounded-2xl bg-white shadow-md">
                <div className="size-14 flex flex-shrink-0 rounded-xl text-lime-500 bg-[#F2FAEB] items-center justify-center text-3xl">
                  <FontAwesomeIcon
                    icon={faPersonChalkboard}
                    className="size-8"
                  />
                </div>
                <div>
                  <h5 className="mb-3 text-2xl font-semibold text-gray-900">
                    দক্ষ ইন্সট্রাকটর
                  </h5>
                  <p>
                    স্কিল বৃদ্ধি থেকে শুরু করে ক্যারিয়ার ডেভেলপমেন্ট নিজেকে
                    মানসম্পন্ন করে তোলার এ-টু-জেড সিলেবাস
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start mb-8 py-10 px-8 gap-8 rounded-2xl bg-white shadow-md">
                <div className="size-14 flex flex-shrink-0 rounded-xl text-lime-500 bg-[#F2FAEB] items-center justify-center text-3xl">
                  <FontAwesomeIcon icon={faList} className="size-8" />
                </div>
                <div>
                  <h5 className="mb-3 text-2xl font-semibold text-gray-900">
                    সহজ কোর্স মডিউল
                  </h5>
                  <p>
                    দক্ষ প্রশিক্ষকগণ সবচেয়ে সহজ উপায়ে কোর্স মডিউল তৈরি ও
                    লেকচার শীট প্রদান
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 sm:col-6 self-center">
              <div className="flex flex-col items-start mb-8 py-10 px-8 gap-8 rounded-2xl bg-white shadow-md">
                <div className="size-14 flex flex-shrink-0 rounded-xl text-lime-500 bg-[#F2FAEB] items-center justify-center text-3xl">
                  <FontAwesomeIcon icon={faChalkboardUser} className="size-8" />
                </div>
                <div>
                  <h5 className="mb-3 text-2xl font-semibold text-gray-900">
                    মেধা যাচাই
                  </h5>
                  <p>
                    মেধা যাচাইয়ের জন্য কুইজ ও এক্সামের ব্যবস্থা কোর্স শেষে সনদ
                    প্রদান। এবং লাইফ টাইম মেম্বারশীপ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speciality;
