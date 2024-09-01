import partner1 from "@/public/images/partners/partner-1.png"
import partner2 from "@/public/images/partners/partner-2.png"
import partner3 from "@/public/images/partners/partner-3.png"
import partner4 from "@/public/images/partners/partner-4.png"
import partner5 from "@/public/images/partners/partner-5.png"
import partner6 from "@/public/images/partners/partner-6.png"
import Image from 'next/image'

function Partners() {
  return (
    <div className="container my-32">
        <h2 className="mb-14 text-5xl text-gray-900 font-bold leading-snug text-center">আমাদের <span className="text-lime-500">পার্টনারসমূহ</span></h2>
        <div className="row justify-center">
            <div className="col-6 sm:col-4 md:col-2 mb-3">
                <div className="flex justify-center">
                    <Image src={partner1} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-6 sm:col-4 md:col-2 mb-3">
                <div className="flex justify-center">
                    <Image src={partner2} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-6 sm:col-4 md:col-2 mb-3">
                <div className="flex justify-center">
                    <Image src={partner3} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-6 sm:col-4 md:col-2 mb-3">
                <div className="flex justify-center">
                    <Image src={partner4} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-6 sm:col-4 md:col-2 mb-3">
                <div className="flex justify-center">
                    <Image src={partner5} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-6 sm:col-4 md:col-2 mb-3">
                <div className="flex justify-center">
                    <Image src={partner6} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners