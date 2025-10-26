"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

function ReviewCarousel({ children }) {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      {children}
    </div>
  );
}

export default ReviewCarousel;
