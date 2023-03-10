import React from "react";
import MainContainer from "./../../components/containers/main-container/Main-containers";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from './../about/About';

const Main = () => {
  return (
    <React.Fragment>
      <Header />

      <MainContainer>
        <Banner />
        <About/>
      </MainContainer>
    </React.Fragment>
  );
};

export default Main;
