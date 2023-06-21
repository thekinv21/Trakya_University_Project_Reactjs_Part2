import { Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        key={category.id}
        w={250}
        h={250}
        maxH="100%"
        borderRadius={5}
        border="none"
        overflow="hidden"
        cursor="pointer"
        bg="#fff"
        onClick={() => navigate("/discover")}
      >
        {/*--------------------Category Image----------------- */}

        <Image
          draggable={false}
          w="100%"
          maxW="100%"
          h={180}
          maxH="100%"
          src={category.categoryImage}
          alt={category.categoryName}
        />

        <Box pt={5}>
          {/*------------------Category title------------------- */}
          <Text fontWeight="semibold" fontSize={14} textTransform="uppercase">
            {category.categoryName}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default CategoryCard;
