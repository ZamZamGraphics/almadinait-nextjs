"use client";
import { reviews } from "@/data/data";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Review from "./Review";

function StudentReview() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="student-review">
      <div className="container">
        <div className="row">
          <div className="col-12 md:col-4 mb-5">
            <h2 className="text-5xl text-white font-bold mb-6 leading-tight">
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
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {reviews.map((review) => (
                  <Review key={review.id} review={review} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentReview;
