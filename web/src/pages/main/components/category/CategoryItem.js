import React from "react";
import { useGetCategory } from "../../../../api/category";
import Swipers from "../../../../components/swiper/Swiper";
import { SwiperSlide } from "swiper/react";
import { Box } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";

const CategoryItem = () => {
  //*================TAKE REST CATEGORY==============

  const { data: MenuCategory } = useGetCategory();

  return (
    <React.Fragment>
      <Swipers>
        {MenuCategory?.map((category) => (
          <SwiperSlide key={category.id}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <CategoryCard category={category} />
            </Box>
          </SwiperSlide>
        ))}
      </Swipers>
    </React.Fragment>
  );
};

export default CategoryItem;
