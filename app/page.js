import OurCourses from "./components/courses/OurCourses";
import HeroSection from "./components/header/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurCourses />
      <hr class="container h-px my-32 bg-gray-200" />
    </>
  );
}
