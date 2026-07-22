import SwiperSlider from "@/components/SwiperSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { getAllCourses } from "@/lib/data";
import NoDataFound from "../NoDataFound";

config.autoAddCss = false;
library.add(fas);

async function OurCourses() {
  const courses = await getAllCourses();
  return (
    <SwiperSlider
      slidesPerView={2}
      autoplayDelay={2500}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
    >
      {courses.length > 0 ? (
        courses.map((course) => (
          <div
            key={course.id}
            className="mb-10"
          >
            <div className="group py-8 px-6 text-center flex flex-col justify-center items-center gap-4 border border-gray-200 bg-white hover:bg-lime-500 hover:text-white rounded-2xl transition-all ease-in-out delay-75 duration-200 cursor-pointer">
              <div className="size-16 flex flex-shrink-0 rounded-xl text-lime-500 bg-[#F2FAEB] group-hover:bg-white items-center justify-center">
                <FontAwesomeIcon
                  icon={["fas", course.icon]}
                  className="size-8"
                />
              </div>
              <p className="course-name">{course.name}</p>
            </div>
          </div>
        ))
      ) : (
        <NoDataFound>{courses?.error || "No Data Found"}</NoDataFound>
      )}
    </SwiperSlider>
  );
}

export default OurCourses;
