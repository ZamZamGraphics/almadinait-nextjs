import { roboto } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

function Community() {
  return (
    <div className={`container relative mb-[-160px] ${roboto.className}`}>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start bg-lime-500 text-white rounded-3xl">
        <div className="col-12 sm:col-4 md:col-5">
          <Image
            width={800}
            height={500}
            src="/groupimages.jpg"
            className="rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none"
            alt=""
          />
        </div>
        <div className="col-12 sm:col-8 md:col-7 p-5 md:pl-20 flex flex-col items-center md:items-start justify-center md:justify-start">
          <h2 className="text-2xl text-center md:text-left md:text-4xl font-medium">
            Join our student community
          </h2>
          <p className="text-sm text-center md:text-left md:text-lg mb-5">
            Be part of something bigger. Join us today!
          </p>
          <Link href="https://www.facebook.com/groups/almadinait">
            <button className="flex justify-center items-center gap-2 py-2 px-4 text-lime-500 bg-white hover:bg-gray-100 hover:text-lime-600 rounded-lg shadow-md">
              Join Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Community;
