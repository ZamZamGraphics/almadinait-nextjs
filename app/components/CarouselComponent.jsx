"use client";
import Carousel from "react-multi-carousel";

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

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      aria-label="Go to previous slide"
      class="react-multiple-carousel__arrow left-0 before:content-['\e824'] "
      type="button"
      onClick={() => onClick()}
    />
  );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      aria-label="Go to next slide"
      class="react-multiple-carousel__arrow right-0 before:content-['\e825'] "
      type="button"
      onClick={() => onClick()}
    />
  );
};

function CarouselComponent({ children }) {
  return (
    <Carousel
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      transitionDuration={1000}
      containerClass="pb-10"
      itemClass="px-3"
      showDots={true}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      {children}
    </Carousel>
  );
}

export default CarouselComponent;
