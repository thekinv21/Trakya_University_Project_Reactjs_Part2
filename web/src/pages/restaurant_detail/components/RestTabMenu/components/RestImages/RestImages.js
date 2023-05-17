import React from "react";
import { Image, Box } from "@chakra-ui/react";

const RestImages = ({ restaurantImages }) => {
  return (
    <>
      {restaurantImages.length ? (
        restaurantImages?.map((img, index) => (
          <Image
            key={index}
            w="100%"
            height={400}
            borderRadius={5}
            objectFit="cover"
            draggable={false}
            src={img}
            pb={5}
          />
        ))
      ) : (
        <Box>Herhangi Bir Fotosu Yok</Box>
      )}
    </>
  );
};

export default RestImages;
