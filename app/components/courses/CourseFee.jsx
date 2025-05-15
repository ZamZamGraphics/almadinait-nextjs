
function CourseFee({ offline, online }) {
    return (
        <div className="py-5 px-8 mb-8 bg-green-100 border border-green-300 shadow rounded-3xl sticky top-0">
            <h3 className="text-4xl font-semibold text-green-700 leading-snug">
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
                        ৳ {offline} টাকা
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
                        ৳ {online} টাকা
                    </span>
                </div>
                <div>
                    <button className="py-2 px-4 text-black bg-white hover:bg-gray-100 rounded-lg shadow-md">
                        Enrol Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CourseFee
