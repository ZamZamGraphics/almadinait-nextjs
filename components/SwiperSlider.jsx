"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import cn from "@/lib/cn";

function SwiperSlider({
  children,
  slidesPerView = 1,
  breakpoints = {},
  navigation = false,
  className = "",
  autoplayDelay = 3000,
}) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const childArray = React.Children.toArray(children).filter(Boolean);
  if (childArray.length === 0) return null;

  const wrappedSlides = childArray.map((child, idx) => {
    const isAlreadySwiperSlide =
      React.isValidElement(child) &&
      (child.type === SwiperSlide ||
        (child.type &&
          (child.type.displayName === "SwiperSlide" ||
            child.type.name === "SwiperSlide")));

    if (isAlreadySwiperSlide) {
      return React.cloneElement(child, { key: child.key ?? `slide-${idx}` });
    }

    return (
      <SwiperSlide key={`slide-${idx}`}>
        <div style={{ width: "100%", height: "100%" }}>{child}</div>
      </SwiperSlide>
    );
  });

  const allowLoop = wrappedSlides.length > slidesPerView;
  const base = "relative px-14";

  return (
    <div className={cn(base, className)}>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={10}
        breakpoints={breakpoints}
        slidesPerView={slidesPerView}
        loop={allowLoop}
        autoplay={
          allowLoop && autoplayDelay
            ? { delay: autoplayDelay, disableOnInteraction: false }
            : false
        }
        navigation={
          navigation && prevEl && nextEl ? { prevEl, nextEl } : false
        }
        pagination={{ clickable: true }}
        watchSlidesProgress={true}
        direction="horizontal"
        style={{ width: "100%" }}
      >
        {wrappedSlides}
      </Swiper>
      {navigation && (
        <>
          <button
            ref={setPrevEl}
            type="button"
            className="absolute left-2 top-[42%] -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/90 border border-lime-500 text-lime-500 hover:bg-lime-600 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            ref={setNextEl}
            type="button"
            className="absolute right-2 top-[42%] -translate-y-1/2 z-10
                   w-11 h-11 flex items-center justify-center
                   rounded-full bg-white/90 border border-lime-500 text-lime-500 hover:bg-lime-600 hover:text-white
                   transition-all duration-300
                   disabled:opacity-30 disabled:pointer-events-none"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}
    </div>
  );
}

export default SwiperSlider;