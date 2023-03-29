import React from "react";
import { Image, Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const RestaurantImage = ({ restaurantInfo }) => {
  //*========================Buraya Tikladiğimiz Restoranin fotolari gelmesi lazim==============
  const images = [
    "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <React.Fragment>
      <Box w="760px" maxW="100%">
        {/*================= MAİN SWIPER================ */}
        <Swiper
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
        >
          {/*=================SWIPER IMAGES MAP================ */}

          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/*=================SWIPE IMAGE================ */}
              <Image
                draggable="false"
                maxW="100%"
                w="630px"
                borderRadius={5}
                objectFit="contain"
                src={img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </React.Fragment>
  );
};

export default RestaurantImage;
