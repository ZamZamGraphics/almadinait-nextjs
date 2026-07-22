import SwiperSlider from "@/components/SwiperSlider";
import { getAllReviews } from "@/lib/data";
import NoDataFound from "../NoDataFound";
import Review from "./Review";

async function StudentReview() {
  const reviews = await getAllReviews();
  return (
    <SwiperSlider
      slidesPerView={1}
      autoplayDelay={3000}
      className="flex"
    >
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))
      ) : (
        <NoDataFound>{reviews?.error || "No Data Found"}</NoDataFound>
      )}
    </SwiperSlider>
  );
}

export default StudentReview;
