import Link from "next/link";
import { FaBezierCurve, FaBullhorn, FaFileVideo, FaGraduationCap, FaLaptop, FaLaptopCode } from "react-icons/fa6";

const courses = [
    {
        id:1,
        name: "প্রফেশনাল অফিস অ্যাপ্লিকেশন",
        icon: <FaLaptop />
    },
    {
        id:2,
        name: "স্পোকেন ইংলিশ with IELTS",
        icon: <FaGraduationCap />
    },
    {
        id:3,
        name: "গ্রাফিক ডিজাইন এন্ড ফ্রিল্যান্সিং",
        icon: <FaBezierCurve />
    },
    {
        id:4,
        name: "ফুলস্ট্যাক ওয়েব ডেভোলপমেন্ট",
        icon: <FaLaptopCode />
    },
    {
        id:5,
        name: "ভিডিও এডিটিং এন্ড ইউটিউব মাকের্টিং",
        icon: <FaFileVideo />
    },
    {
        id:6,
        name: "সোশ্যাল মিডিয়া ডিজিটাল মার্কেটিং",
        icon: <FaBullhorn />
    }
]

function OurCourses() {
  return (
    <div className="container">
        <div className="row">
            <div className="md:col-12">
                <h2 className="mb-14 text-5xl text-gray-900 font-bold leading-snug text-center">আমাদের <span className="text-lime-500">কোর্স</span> সমূহ</h2>
            </div>
        </div>
        <div className="row">
            {courses.map(course => (
                <div key={course.id} className="col-6 sm:col-4 md:col-3 lg:col-2 mb-8">
                    <Link href="#">
                        <div className="group py-8 px-6 text-center flex flex-col justify-center items-center gap-4 bg-white hover:bg-lime-500 hover:text-white rounded-2xl shadow-md">
                            <div className="size-16 flex flex-shrink-0 rounded-xl text-lime-500 bg-[#F2FAEB] group-hover:bg-white items-center justify-center text-4xl">
                                {course.icon}
                            </div>
                            <p className="course-name">{course.name}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OurCourses