import { courses } from "@/data/data";
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";

config.autoAddCss = false;
library.add(fas);

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
                            <div className="size-16 p-4 flex flex-shrink-0 rounded-xl text-lime-500 bg-[#F2FAEB] group-hover:bg-white items-center justify-center">
                                <FontAwesomeIcon icon={['fas', course.icon]} />
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