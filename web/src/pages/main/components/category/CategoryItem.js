import React from "react";
import SliderSlick from "../../../../components/slider/Slider";
import { Box, Image, Text } from "@chakra-ui/react";
import { useGetCategory } from "../../../../api/category";

const CategoryItem = () => {

  //*================TAKE REST CATEGORY==============

  const { data: MenuCategory } = useGetCategory();

  return (
    <React.Fragment>
      <SliderSlick>
        {MenuCategory?.map((category) => (
          <Box
            key={category.id}
            maxW={260}
            h={280}
            maxH="100%"
            borderRadius={5}
            border="none"
            overflow="hidden"
            cursor="pointer"
            bg="#fff"
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
              <Text
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

export default CategoryItem;