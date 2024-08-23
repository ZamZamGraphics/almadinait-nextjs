import { batches } from "@/data/data"
import Image from "next/image"
import { FaClock, FaUser, FaUsersLine } from "react-icons/fa6"

function NewBatches() {
  return (
    <div className='container my-32'>
        <h2 className="mb-14 text-5xl text-gray-900 font-bold leading-snug text-center">নতুন <span className="text-lime-500">ব্যাচ</span> শুরু</h2>
        <div className="row">
            {batches.map(batch => (
            <div key={batch.id} className="mb-8 col-12 sm:col-6 md:col-4 xl:col-3">
                <div className="bg-white rounded-2xl shadow-md">
                    <Image 
                        src={batch.thumbnail} 
                        alt={batch.title} 
                        quality={100}
                        width={500}
                        height={0} 
                        className="w-full rounded-t-2xl" 
                    />
                    <div className="flex p-6 flex-col justify-center items-start self-stretch gap-4">
                        <div className="flex flex-col items-start self-stretch gap-1">
                            <h3 className="text-2xl font-semibold text-gray-900">{batch.title}</h3>
                            <p className="text-base">{batch.subTitle}</p>
                        </div>
                        <div className="flex items-center justify-between gap-1 sm:gap-3 self-stretch">
                            <span className="flex text-sm items-center gap-2 py-1 px-3 bg-gray-200 text-gray-600 rounded-md">
                                ব্যাচ {batch.batchNo}
                            </span>
                            <span className="flex text-sm items-center gap-2 py-1 px-3 bg-gray-200 text-gray-600 rounded-md">
                                <FaClock /> {batch.classTime}
                            </span>
                            <span className="flex text-sm items-center gap-2 py-1 px-3 bg-gray-200 text-gray-600 rounded-md">
                                <FaUsersLine /> {batch.couta} সিট বাকি
                            </span>
                        </div>
                        <hr className="w-full h-px my-3 bg-gray-300" />
                        <div className="flex items-center flex-col md:flex-row justify-between self-stretch">
                            <div className="flex items-center gap-2">
                                <FaUser className="text-2xl bg-gray-200 rounded-full p-1"/> {batch.mentor}
                            </div>
                            <div className="flex items-center gap-1">
                                <del>৳{batch.courseFee}</del>
                                <span className="text-2xl font-semibold text-lime-500">৳{batch.discountFee}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default NewBatches