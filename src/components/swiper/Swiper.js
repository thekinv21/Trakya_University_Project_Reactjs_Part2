import React from "react";
import { Swiper } from "swiper/react";
import { Responsive } from "./Responsive";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Swipers = ({ children }) => {
  return (
    <React.Fragment>
      <Swiper
        style={{ height: "100%" }}
        breakpoints={Responsive}
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </React.Fragment>
  );
};

export default Swipers;
