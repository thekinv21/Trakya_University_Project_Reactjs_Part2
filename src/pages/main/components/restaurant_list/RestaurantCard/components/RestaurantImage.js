import { Image, Box } from "@chakra-ui/react";

const RestaurantImage = ({ src, alt }) => (
  <Box w="full">
    <Image
      draggable={false}
      w={350}
      maxW="100%"
      h={180}
      maxH="100%"
      src={src}
      alt={alt}
    />
  </Box>
);

export default RestaurantImage;
