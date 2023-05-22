import React from "react";
import MainContainer from "../../components/container/MainContainer";
import Banner from "./components/banner/Banner";
import Aminities from "./components/amenities/Aminities";
import RestList from "./components/restaurant_list/RestList";
import Quetions from "./components/questions/Quetions";
import Categories from "./components/category/Categories";

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
        <Categories />
        {/*=====================User Quetions======================= */}
        <Quetions />
      </MainContainer>
    </React.Fragment>
  );
};

export default Main;
