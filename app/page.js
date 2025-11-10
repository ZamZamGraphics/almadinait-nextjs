import HeroSection from "@/components/header/HeroSection";
import OurCourses from "@/components/courses/OurCourses";
import Aboutus from "@/components/about/Aboutus";
// import NewBatches from "@/components/courses/NewBatches";
import StudentReview from "@/components/review/StudentReview";
import Speciality from "@/components/speciality/Speciality";
import Teachers from "@/components/teachers/Teachers";
// import Gallery from "@/components/gallery/Gallery";
import Partners from "@/components/partners/Partners";
import Community from "@/components/community/Community";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <OurCourses />
      <hr className="container h-px my-32 bg-gray-200" />
      <Aboutus />
      {/* <NewBatches /> */}
      <hr className="container h-px my-16 bg-gray-200" />
      <Speciality />
      <StudentReview />
      <Teachers />
      {/* <Gallery /> */}
      <hr className="container h-px my-32 bg-gray-200" />
      <Partners />
      <Community />
    </>
  );
}
