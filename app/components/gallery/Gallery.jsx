import classGallery from "@/public/images/class-gallery.png"
import Image from 'next/image'

function Gallery() {
  return (
    <div className="container">
        <h2 className="mb-14 text-5xl text-gray-900 font-bold leading-snug text-center">
            অফিস এবং প্রশিক্ষণের <span className="text-lime-500">স্থান</span>
        </h2>
        <div className="row">
            <div className="col">
                <div className="flex justify-center">
                    <Image src={classGallery} className="" alt="Class Gallery" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery