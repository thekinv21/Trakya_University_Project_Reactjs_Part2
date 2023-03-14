import { Image, Box, Text, Badge, Stack } from "@chakra-ui/react";
import React from "react";
import SlideImage from "../../../components/slider/SlideImage";

const RestaurantImage = () => {

  //*-----------------Buraya Tikladiğimiz Restoranin fotolari gelmesi lazim-------------
  const images = [
    "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <React.Fragment>
      {/*-------------------Restaurant Images Block------------------ */}

      <Box w={["300px", "420px", "600px", "500px", "800px"]}>
        {/*-------------------Restaurant Title and Stars------------------ */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          p={5}
        >
          <Text fontSize="2xl" fontWeight={300}>
            Yeni Açilan Osman Köfteci
          </Text>
          <Badge
            fontSize={16}
            w={100}
            textAlign="center"
            borderRadius={5}
            colorScheme="orange"
          >
            4.5
          </Badge>
        </Stack>

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
