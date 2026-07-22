import SwiperSlider from "@/components/SwiperSlider";
import { getAllMentors } from "@/lib/data";
import NoDataFound from "../NoDataFound";
import Teacher from "./Teacher";

async function Teachers() {
  const mentors = await getAllMentors();
  return (
    <SwiperSlider
      slidesPerView={1}
      autoplayDelay={2000}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {mentors.length > 0 ? (
        mentors.map((mentor) => (
          <Teacher
            key={mentor.id}
            name={mentor.name}
            title={mentor.designation}
            avatar={mentor.avatar}
          />
        ))
      ) : (
        <NoDataFound>{mentors?.error || "No Data Found"}</NoDataFound>
      )}
    </SwiperSlider>
  );
}

export default Teachers;
