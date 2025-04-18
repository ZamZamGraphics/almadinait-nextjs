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
        <div className="w-full">
          <h2 className="text-5xl text-gray-900 font-bold leading-snug text-center">
            আমাদের <span className="text-lime-500">শিক্ষক</span> মণ্ডলী
          </h2>
          <p className="mb-10 text-center">
            আল-মদিনা আইটি ইন্সটিটিউট-এ আছেন ইন্ডাষ্ট্রি সেরা এক্সপার্ট মেন্টর
            প্যানেল। যাদের তত্তাবধানে থেকে প্রশিক্ষনার্থীরা নিজেকে দক্ষ করে গড়ে
            তোলে কর্মসংস্থানের সুযোগ তৈরী করছে।
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
