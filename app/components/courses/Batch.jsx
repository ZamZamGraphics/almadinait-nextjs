import {
  faClock,
  faUser,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function Batch({ batch }) {
  return (
    <div className="mb-8 col-12 sm:col-6 md:col-4 xl:col-3">
      <div className="bg-white rounded-2xl shadow-md">
        <Image
          src={batch.thumbnail}
          alt={batch.title}
          quality={100}
          width={500}
          height={0}
          className="w-full rounded-t-2xl"
        />
        <div className="flex p-3 lg:p-5 flex-col justify-center items-start self-stretch gap-4">
          <div className="flex flex-col items-start self-stretch gap-1">
            <h3 className="text-xl font-semibold text-gray-900">
              {batch.title}
            </h3>
            <p className="text-base">{batch.subTitle}</p>
          </div>
          <div className="flex items-center justify-between gap-1 sm:gap-2 self-stretch">
            <span className="flex text-sm items-center gap-1 py-1 px-2 bg-gray-200 text-gray-600 rounded-md">
              ব্যাচ {batch.batchNo}
            </span>
            <span className="flex text-sm items-center gap-1 py-1 px-2 bg-gray-200 text-gray-600 rounded-md">
              <FontAwesomeIcon icon={faClock} className="size-3" />{" "}
              {batch.classTime}
            </span>
            <span className="flex text-sm items-center gap-1 py-1 px-2 bg-gray-200 text-gray-600 rounded-md">
              <FontAwesomeIcon icon={faUsersLine} className="size-3" />{" "}
              {batch.couta} সিট বাকি
            </span>
          </div>
          <hr className="w-full h-px my-3 bg-gray-300" />
          <div className="flex items-center flex-col md:flex-row justify-between self-stretch">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon
                icon={faUser}
                className="bg-gray-200 rounded-full p-1 size-5"
              />
              {batch.mentor}
            </div>
            <div className="flex items-center gap-1">
              <del>৳{batch.courseFee}</del>
              <span className="text-2xl font-semibold text-lime-500">
                ৳{batch.discountFee}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Batch;
