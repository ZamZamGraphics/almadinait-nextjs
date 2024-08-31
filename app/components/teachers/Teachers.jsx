"use client";
import { teachers } from "@/data/data";
import Carousel from "react-multi-carousel";
import Teacher from "./Teacher";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1920, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

function Teachers() {
  return (
    <div className="container my-32">
      <div className="grid grid-cols-1 justify-items-center">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl text-gray-900 font-bold leading-snug text-center">
            আমাদের <span className="text-lime-500">শিক্ষক</span> মণ্ডলী
          </h2>
          <p className="mb-10 text-center">
            দেশ ও দেশের বাইরে বর্তমানে যে স্কিলগুলোর চাহিদা সবচেয়ে বেশি, সেসব
            দিয়েই সাজানো হয়েছে আমাদের কোর্স লিস্ট এখান থেকে আপনার সুবিধামত
            অনলাইন.
          </p>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={1000}
      >
        {teachers.map((teacher) => (
          <Teacher
            key={teacher.id}
            name={teacher.name}
            title={teacher.title}
            avatar={teacher.avatar}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Teachers;
