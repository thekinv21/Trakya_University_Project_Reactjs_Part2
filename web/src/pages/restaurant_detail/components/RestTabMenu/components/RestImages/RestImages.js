import React from "react";
import { Image, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const RestImages = ({ restaurantImages }) => {
  if (!restaurantImages.length) {
    return (
      <Heading fontWeight={100} textAlign="center" pt={5} fontSize={22}>
        Restoranın Herhangi Fotoğrafı Bulunamadı
      </Heading>
    );
  }

  return (
    <Swiper navigation={true} modules={[Navigation]}>
      {restaurantImages.map((img, index) => (
        <SwiperSlide key={index}>
          <Image
            w="100%"
            height={400}
            borderRadius={5}
            objectFit="cover"
            draggable={false}
            src={img}
            pb={5}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RestImages;
