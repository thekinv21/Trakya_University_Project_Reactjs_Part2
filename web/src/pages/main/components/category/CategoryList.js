import React from "react";
import { Box } from "@chakra-ui/react";
import Title from "../title/title";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  return (
    <React.Fragment>
      {/*==============CATEGORYLİST BOOSTRAP CONTAİNER=============*/}

      <Box className="container-fluid" textAlign="center" w="100%">
        {/*===================CATEGORYLİST TİTLE================== */}

        <Title title="Mevcut Yemek Categorileri" />

        <Box className="container pt-5">
          {/*========================CATEGORY ITEM================*/}

          <CategoryItem />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default CategoryList;
