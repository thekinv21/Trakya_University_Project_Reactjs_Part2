import React from "react";
import MainContainer from "../../components/container/MainContainer";
import Banner from "./components/banner/Banner";
import Aminities from "./components/amenities/Aminities";
import RestList from "./components/restaurant_list/RestList";
import CategoryList from "../main/components/category/CategoryList";
import Quetions from "./components/questions/Quetions";

const Main = () => {
  return (
    <React.Fragment>
      {/*========================CONTAİNER===================== */}
      <MainContainer>
        {/*========================BANNER===================== */}
        <Banner />
        {/*========================RESTAURANTLİST=================*/}
        <RestList />

        {/*========================AMINITIES===================== */}
        <Aminities />
        {/*=====================Menus Category===================== */}
        <CategoryList />
        {/*=====================User Quetions======================= */}
        <Quetions />
      </MainContainer>
    </React.Fragment>
  );
};

export default Main;
