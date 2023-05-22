import React from "react";
import { Box } from "@chakra-ui/react";
import Title from "../title/title";
import CategoryItem from "./CategoryItem/CategoryItem";

const Categories = () => {
  return (
    <Box className="container-fluid" textAlign="center" w="100%">
      {/*===================CATEGORYLİST TİTLE================== */}

      <Title title="Mevcut Yemek Categorileri" />

      <Box className="container pt-5" h="35vh">
        {/*========================CATEGORY ITEM================*/}

        <CategoryItem />
      </Box>
    </Box>
  );
};

export default Categories;
