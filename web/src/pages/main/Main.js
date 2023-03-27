import React from "react";
import MainContainer from "./components/main-container/Main-containers";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Aminities from "./components/amenities/Aminities";
import RestList from "./components/restaurant_list/RestList";
import CategoryList from '../main/components/category/CategoryList'
import Quetions from "./components/questions/Quetions";
import Footer from "../../components/footer/Footer";


const Main = () => {
  return (
    <React.Fragment>
      {/*--------------------Landing Header-------------------- */}
      <Header />
      {/*--------------------Landing Container-------------------- */}
      <MainContainer>
        {/*--------------------Landing Banner-------------------- */}
        <Banner />
        {/*--------------------RestaurantsList-------------------- */}
        <RestList />
        {/*--------------------Aminities-------------------- */}
        <Aminities />
        {/*--------------------Menus Category-------------------- */}
        <CategoryList />
        {/*--------------------User Quetions-------------------- */}
        <Quetions />
        {/*--------------------Landing Footer-------------------- */}
        <Footer />
      </MainContainer>
    </React.Fragment>
  );
};

export default Main;
