import { Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const RestaurantStars = ({ starCount }) => {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <StarIcon
            key={index}
            color={index < parseFloat(starCount) ? "teal.500" : "gray.300"}
          />
        ))}
    </Box>
  );
};

export default RestaurantStars;
