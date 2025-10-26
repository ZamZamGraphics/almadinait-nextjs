import { getBlurData } from "@/lib/getBLurData";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

async function Batch({ batch }) {
  const blurDataURL = await getBlurData(batch.thumbnail)
  return (
    <div className="mb-8 col-12 sm:col-6 md:col-4 xl:col-3">
      <div className="bg-white relative rounded-2xl shadow-md">
        <Link
          className="absolute top-0 bottom-0 left-0 right-0 z-10"
          href={`/batches/${batch.id}`}
        ></Link>
        <Image
          src={batch.thumbnail}
          alt={batch.title}
          quality={100}
          width={350}
          height={220}
          className="w-full rounded-t-2xl"
          placeholder="blur"
          blurDataURL={blurDataURL}
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
          </div>
          <hr className="w-full h-px my-3 bg-gray-300" />
          <div className="flex items-center flex-col md:flex-row justify-between self-stretch">
            <span className="text-2xl font-semibold text-lime-500">
              ৳{batch.discountFee}
            </span>
            <span className=" text-xl font-semibold">
              <del>৳{batch.courseFee}</del>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Batch;
