import React from "react";
import { useGetCategory } from "../../../../../services/categoryService/category.service";
import Swipers from "../../../../../components/swiper/Swiper";
import { SwiperSlide } from "swiper/react";
import { Box } from "@chakra-ui/react";
import CategoryCard from "./../CategoryCard/CategoryCard";

const CategoryItem = () => {
  const { data: MenuCategory } = useGetCategory();

  return (
    <Swipers>
      {MenuCategory?.map((category) => (
        <SwiperSlide key={category.id}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <CategoryCard category={category} />
          </Box>
        </SwiperSlide>
      ))}
    </Swipers>
  );
};

export default CategoryItem;
