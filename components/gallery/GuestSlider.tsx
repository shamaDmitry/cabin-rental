"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const GuestSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {Array(10)
        .fill(null)
        .map((item, index) => {
          return (
            <div
              key={index}
              className="text-center p-4 border bg-background text-foreground"
            >
              <h3>{index + 1}</h3>
            </div>
          );
        })}
    </Slider>
  );
};

export default GuestSlider;
