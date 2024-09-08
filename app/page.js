import Aboutus from "./components/about/Aboutus";
import Community from "./components/community/Community";
import NewBatches from "./components/courses/NewBatches";
import OurCourses from "./components/courses/OurCourses";
import Gallery from "./components/gallery/Gallery";
import HeroSection from "./components/header/HeroSection";
import Partners from "./components/partners/Partners";
import StudentReview from "./components/review/StudentReview";
import Speciality from "./components/speciality/Speciality";
import Teachers from "./components/teachers/Teachers";

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
      <Teachers />
      <Gallery />
      <hr className="container h-px my-32 bg-gray-200" />
      <Partners />
      <Community />
    </>
  );
}
