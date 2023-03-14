import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideImage = ({ children }) => {
  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    autoplay: true,
  };
  return (
    <React.Fragment>
      <Slider {...settings}>{children}</Slider>
    </React.Fragment>
  );
};

export default SlideImage;
