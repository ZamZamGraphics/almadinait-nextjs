export const revalidate = 60;

import HeroSection from "@/components/header/HeroSection";
import OurCourses from "@/components/courses/OurCourses";
import Aboutus from "@/components/about/Aboutus";
import Speciality from "@/components/speciality/Speciality";
import StudentReview from "@/components/review/StudentReview";
import Teachers from "@/components/teachers/Teachers";
import ImageGallery from "@/components/gallery/Gallery";
import Partners from "@/components/partners/Partners";
import Community from "@/components/community/Community";
import { Suspense } from "react";
import ReviewLoading from "@/components/review/Loading";
import TeachersLoading from "@/components/teachers/Loading";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container">
        <div className="row">
          <div className="md:col-12">
            <h2 className="mb-14 text-2xl md:text-4xl text-gray-900 font-bold leading-snug text-center">
              আমাদের <span className="text-lime-500">কোর্স</span> সমূহ
            </h2>
          </div>
        </div>
        <OurCourses />
      </div>
      <hr className="container h-px my-32 bg-gray-200" />
      <Aboutus />
      <hr className="container h-px my-16 bg-gray-200" />
      <Speciality />
      <div className="student-review">
        <div className="container">
          <div className="row">
            <div className="col-12 md:col-4 mb-5">
              <h2 className="text-2xl md:text-4xl text-white font-bold mb-6 leading-tight">
                আমাদের সম্পর্কে স্টুডেন্টদের মতামত
              </h2>
              <p>
                আল-মদিনা আইটি থেকে প্রশিক্ষণ নিয়েছেন এমন সল্পসংখ্যক শিক্ষার্থী
                কৃতজ্ঞতা প্রকাশ করেছেন গুগল ম্যাপে। তার মধ্য থেকে কয়েকটি মতামত এই
                ওয়েবসাইটে সংযোক্ত করা হয়েছে।
              </p>
            </div>
            <div className="col-12 md:col-2"></div>
            <div className="col-12 md:col-6">
              <Suspense fallback={<ReviewLoading />}>
                <StudentReview />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-32">
        <div className="grid grid-cols-6 justify-items-center">
          <div className="col-span-4 col-start-2">
            <h2 className="text-2xl md:text-4xl text-gray-900 font-bold leading-snug text-center">
              আমাদের <span className="text-lime-500">শিক্ষক</span> মণ্ডলী
            </h2>
            <p className="mb-10 text-center">
              আল-মদিনা আইটি ইন্সটিটিউট-এ আছেন ইন্ডাষ্ট্রি সেরা এক্সপার্ট মেন্টর
              প্যানেল। যাদের তত্তাবধানে থেকে প্রশিক্ষনার্থীরা নিজেকে দক্ষ করে গড়ে
              তোলে কর্মসংস্থানের সুযোগ তৈরী করছে।
            </p>
          </div>
        </div>
        <Suspense fallback={<TeachersLoading />}>
          <Teachers />
        </Suspense>
      </div>
      <ImageGallery />
      <hr className="container h-px my-32 bg-gray-200" />
      <Partners />
      <Community />
    </>
  );
}
