import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function RatingStars({ rating }) {
    const stars = Array(rating).fill(0)
  return (
    <>
        {stars.map((_, index) => {
        return <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500 size-4" />
      })}
    </>
  );
}

export default RatingStars;
