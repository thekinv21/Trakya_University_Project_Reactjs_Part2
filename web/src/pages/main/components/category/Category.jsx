import React from "react";
import CategoryContainer from "./components/category-container";
import Title from "../title/title";
import CategoryContent from "../../components/category/components/category-content";
import CategoryList from "./components/category-list";

const Menu = () => {
  return (
    <React.Fragment>
      {/*-----------------------Menus Category container---------------------- */}
      <CategoryContainer>
        <Title title="Mevcut Yemek Categorileri" />

        {/*-----------------------Menus Category content---------------------- */}

        <CategoryContent>
          {/*-----------------------Menus Category List---------------------- */}
          <CategoryList />
        </CategoryContent>
      </CategoryContainer>
    </React.Fragment>
  );
};

export default Menu;
