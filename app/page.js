import Aboutus from "./components/about/Aboutus";
import NewBatches from "./components/courses/NewBatches";
import OurCourses from "./components/courses/OurCourses";
import HeroSection from "./components/header/HeroSection";
import StudentReview from "./components/review/StudentReview";
import Speciality from "./components/speciality/Speciality";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurCourses />
      <hr className="container h-px my-32 bg-gray-200" />
      <Aboutus />
      <NewBatches />
      <Speciality />
      <StudentReview />
    </>
  );
}
