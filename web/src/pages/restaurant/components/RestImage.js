import React from "react";
import { Image, Box } from "@chakra-ui/react";

const RestaurantImage = ({ restaurantImages }) => {
  return (
    <React.Fragment>
      {restaurantImages.map((img, index) => (
        <Box
          key={index}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mb={5}
        >
          <Image
            borderRadius={5}
            maxW="100%"
            objectFit="cover"
            draggable={false}
            src={img}
          />
        </Box>
      ))}
    </React.Fragment>
  );
};

export default RestaurantImage;
