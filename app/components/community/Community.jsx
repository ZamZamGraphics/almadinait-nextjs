import { roboto } from "@/app/fonts"
import communityImage from "@/public/images/community.jpg"
import Image from 'next/image'

function Community() {
  return (
    <div className={`container relative mb-[-160px] ${roboto.className}`}>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start bg-lime-500 text-white rounded-3xl">
            <div className="col-12 sm:col-4 md:col-5">
                <Image src={communityImage} className="rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none" alt="" />
            </div>
            <div className="col-12 sm:col-8 md:col-7 p-5 md:pl-20 flex flex-col items-center md:items-start justify-center md:justify-start gap-2">
                <h2 className="text-2xl text-center md:text-left md:text-4xl font-medium">Join our student community</h2>
                <p className="text-sm text-center md:text-left md:text-lg">Lorem ipsum dolor sit amet et debitis itaque in suscipit.</p>
                <button className="flex justify-center items-center gap-2 py-2 px-4 text-lime-500 bg-white hover:bg-gray-100 hover:text-lime-600 rounded-lg shadow-md">Join Now</button>
            </div>
        </div>
    </div>
  )
}

export default Community