import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./../pages/sign-in/SignIn";
import SignUp from './../pages/sign-up/SignUp'

const Routers = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="signin" element={<SignIn/>}/>
          <Route path='signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Routers;
