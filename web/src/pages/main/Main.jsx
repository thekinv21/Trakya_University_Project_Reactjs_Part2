import React from "react";
import MainContainer from "./../../components/containers/main-container/Main-containers";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from "./../about/About";
import Restaurants from "./components/restaurants/Restaurants";
import Category from "./components/category/Category";

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
        {/*--------------------AboutUs-------------------- */}
        <About />
        {/*--------------------Menus Category-------------------- */}
        <Category />
      </MainContainer>
    </React.Fragment>
  );
};

export default Main;
