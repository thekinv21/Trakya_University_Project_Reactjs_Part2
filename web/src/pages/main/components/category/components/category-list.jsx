import React from "react";
import SliderSlick from "../../../../../components/slider/Slider";
import { Box, Image, Text } from "@chakra-ui/react";
import { useGetCategory } from "./../../../../../api/category";

const CategoryList = () => {

  //*-------------------------Take Restau category------------------
  const { data: MenuCategory } = useGetCategory();

  return (
    <React.Fragment>
      <SliderSlick>
        {MenuCategory?.map((category) => (
          <Box
            key={category.id}
            w="200px"
            maxW="250px"
            h={240}
            maxH="100%"
            borderRadius={5}
            border="none"
            overflow="hidden"
            cursor="pointer"
            bg="blackAlpha.100"
            _hover={{ background: "orange.100" }}
          >
            {/*--------------------Category Image----------------- */}

            <Image
              draggable={false}
              w={250}
              maxW="100%"
              h={180}
              maxH="100%"
              src={category.categoryImage}
              alt={category.categoryName}
            />

            <Box p={3}>
              {/*------------------Category title------------------- */}
              <Text
                color="grey.500"
                fontWeight="semibold"
                fontSize={14}
                textTransform="uppercase"
              >
                {category.categoryName}
              </Text>
            </Box>
          </Box>
        ))}
      </SliderSlick>
    </React.Fragment>
  );
};

export default CategoryList;
