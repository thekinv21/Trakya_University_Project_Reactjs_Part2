import React from "react";
import MainContainer from "./components/main-container/Main-containers";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Aminities from "./components/amenities/Aminities";
import Restaurants from "./components/restaurants/Restaurants";
import Category from "./components/category/Category";
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
        <Restaurants />
        {/*--------------------Aminities-------------------- */}
        <Aminities />
        {/*--------------------Menus Category-------------------- */}
        <Category />
        {/*--------------------User Quetions-------------------- */}
        <Quetions />
        {/*--------------------Landing Footer-------------------- */}
        <Footer />
      </MainContainer>
    </React.Fragment>
  );
};

export default Main;
