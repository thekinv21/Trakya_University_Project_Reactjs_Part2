import React from "react";
import { Swiper } from "swiper/react";
import { Responsive } from "./Responsive";
import "swiper/css";

const Swipers = ({ children }) => {
  return (
    <React.Fragment>
      <Swiper
        breakpoints={Responsive}
        slidesPerView={4}
        spaceBetween={30}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </React.Fragment>
  );
};

export default Swipers;
