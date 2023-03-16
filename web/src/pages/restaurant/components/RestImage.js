import { Image, Box } from "@chakra-ui/react";
import React from "react";
import SlideImage from "../../../components/slider/SlideImage";

const RestaurantImage = ({ restaurantInfo }) => {
  console.log(restaurantInfo);

  //*-----------------Buraya Tikladiğimiz Restoranin fotolari gelmesi lazim-------------
  const images = [
    "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <React.Fragment>
      <Box w={["90%", "90%", "80%", "40%", "30%"]}>
        {/*-------------------Restaurant Images Slider------------------ */}
        <SlideImage>
          {images.map((image, index) => (
            <Image
              draggable="false"
              maxW="100%"
              borderRadius={5}
              objectFit="contain"
              key={index}
              src={image}
            />
          ))}
        </SlideImage>
      </Box>
    </React.Fragment>
  );
};

export default RestaurantImage;
